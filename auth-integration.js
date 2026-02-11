// ==================== AUTH INTEGRATION WITH EXISTING APP ====================
// File này tích hợp hệ thống authentication với app-enterprise.js hiện có

// ==================== SAVE TEST RESULTS WHEN USER COMPLETES TEST ====================

// Override hàm analyzeCareer() để tự động lưu kết quả
const originalAnalyzeCareer = window.analyzeCareer;

window.analyzeCareer = function() {
    // Gọi hàm gốc
    if (originalAnalyzeCareer) {
        originalAnalyzeCareer();
    }
    
    // Sau khi phân tích xong, lưu kết quả nếu user đã login
    setTimeout(() => {
        saveCurrentTestResult();
    }, 500);
};

// ==================== SAVE CURRENT TEST RESULT ====================
function saveCurrentTestResult() {
    // Kiểm tra user đã login chưa
    if (!AuthSystem.currentUser) {
        // Hiển thị modal yêu cầu đăng nhập để lưu kết quả
        showSaveResultPrompt();
        return;
    }
    
    // Lấy dữ liệu test hiện tại từ userData global
    if (typeof userData !== 'undefined' && typeof selectedCareer !== 'undefined') {
        const resultData = {
            hollandCode: userData.hollandCode || '',
            selectedCareer: selectedCareer,
            educationSystem: userData.educationSystem || '',
            subjects: userData.subjects || [],
            scores: userData.scores || {},
            topCareers: typeof calculateMatches === 'function' ? calculateMatches().slice(0, 10) : []
        };
        
        const saved = AuthSystem.saveTestResult(resultData);
        
        if (saved) {
            showNotification('✅ Kết quả đã được lưu vào tài khoản của bạn!', 'success');
        }
    }
}

// ==================== SHOW SAVE RESULT PROMPT ====================
function showSaveResultPrompt() {
    const shouldSave = confirm(
        '💾 Bạn muốn lưu kết quả test này không?\n\n' +
        'Đăng nhập hoặc đăng ký để lưu kết quả và xem lại sau!'
    );
    
    if (shouldSave) {
        AuthSystem.openAuthModal('register');
    }
}

// ==================== SHOW NOTIFICATION ====================
function showNotification(message, type = 'info') {
    // Tạo notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #3cba92)' : 'linear-gradient(135deg, #667eea, #764ba2)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Add CSS animations for notification
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// ==================== UPDATE USER DROPDOWN WITH CURRENT USER INFO ====================
function updateUserDropdownInfo() {
    if (!AuthSystem.currentUser) return;
    
    const dropdownAvatar = document.getElementById('dropdownAvatar');
    const dropdownName = document.getElementById('dropdownName');
    const dropdownEmail = document.getElementById('dropdownEmail');
    
    if (dropdownAvatar) {
        dropdownAvatar.textContent = AuthSystem.getUserInitials();
    }
    
    if (dropdownName) {
        dropdownName.textContent = AuthSystem.currentUser.fullName;
    }
    
    if (dropdownEmail) {
        dropdownEmail.textContent = AuthSystem.currentUser.email;
    }
}

// ==================== AUTO-FILL USER DATA IF LOGGED IN ====================
function autoFillUserData() {
    if (!AuthSystem.currentUser) return;
    
    // Nếu user đã có kết quả test trước đó, có thể tự động fill
    const results = AuthSystem.getUserResults();
    
    if (results.length > 0) {
        // Lấy kết quả gần nhất
        const latestResult = results[results.length - 1];
        
        // Hiển thị option để load kết quả cũ
        const shouldLoad = confirm(
            '📋 Bạn đã có ' + results.length + ' kết quả test trước đó.\n\n' +
            'Bạn có muốn xem lại kết quả gần nhất không?'
        );
        
        if (shouldLoad) {
            loadPreviousResult(latestResult);
        }
    }
}

// ==================== LOAD PREVIOUS RESULT ====================
function loadPreviousResult(result) {
    showNotification('📥 Đang tải kết quả...', 'info');
    
    // Fill userData if exists
    if (typeof userData !== 'undefined') {
        userData.hollandCode = result.hollandCode;
        userData.educationSystem = result.educationSystem;
        userData.subjects = result.subjects;
        userData.scores = result.scores;
    }
    
    // Jump to results
    setTimeout(() => {
        if (typeof currentStep !== 'undefined') {
            currentStep = 6;
            if (typeof updateStepsIndicator === 'function') {
                updateStepsIndicator();
            }
        }
        
        showNotification('✅ Kết quả đã được tải!', 'success');
    }, 500);
}

// ==================== ENHANCE LOGIN SUCCESS ====================
const originalOnLoginSuccess = AuthSystem.onLoginSuccess;

AuthSystem.onLoginSuccess = function() {
    // Call original function
    if (originalOnLoginSuccess) {
        originalOnLoginSuccess.call(this);
    }
    
    // Update dropdown info
    updateUserDropdownInfo();
    
    // Auto-fill if user has previous results
    setTimeout(() => {
        autoFillUserData();
    }, 1000);
};

// ==================== ADD LOGIN PROMPT BEFORE STARTING TEST ====================
function promptLoginBeforeTest() {
    if (!AuthSystem.currentUser) {
        const shouldLogin = confirm(
            '🎯 Đăng nhập để lưu kết quả test!\n\n' +
            'Bạn có muốn đăng nhập hoặc đăng ký trước khi bắt đầu không?\n\n' +
            '✓ Lưu kết quả vĩnh viễn\n' +
            '✓ Xem lại mọi lúc\n' +
            '✓ So sánh các lần test'
        );
        
        if (shouldLogin) {
            AuthSystem.openAuthModal('register');
            return false; // Don't start test yet
        }
    }
    return true; // Can start test
}

// ==================== OVERRIDE START TEST BUTTON ====================
document.addEventListener('DOMContentLoaded', function() {
    // Find "Bắt đầu" button and add login prompt
    const heroButtons = document.querySelectorAll('.hero-cta .btn');
    
    heroButtons.forEach(btn => {
        if (btn.textContent.includes('Bắt đầu')) {
            const originalOnClick = btn.onclick;
            
            btn.onclick = function(e) {
                if (promptLoginBeforeTest()) {
                    if (originalOnClick) {
                        originalOnClick.call(this, e);
                    }
                }
            };
        }
    });
});

// ==================== EXPORT FUNCTIONS ====================
window.saveCurrentTestResult = saveCurrentTestResult;
window.showNotification = showNotification;
window.promptLoginBeforeTest = promptLoginBeforeTest;

console.log('✅ Auth Integration loaded');
