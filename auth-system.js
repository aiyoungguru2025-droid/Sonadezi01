// ==================== V-MENTOR AI AUTHENTICATION SYSTEM ====================
// Version: 2.0 | Date: 2026
// Features: Login, Register, User Management, Session Handling

// ==================== AUTHENTICATION STATE ====================
const AuthSystem = {
    currentUser: null,
    users: [],
    
    // Initialize authentication system
    init() {
        this.loadUsers();
        this.checkSession();
        this.initEventListeners();
        console.log('✅ Authentication System initialized');
    },
    
    // Load users from localStorage
    loadUsers() {
        const usersData = localStorage.getItem('vmentor_users');
        this.users = usersData ? JSON.parse(usersData) : [];
        console.log(`📦 Loaded ${this.users.length} users`);
    },
    
    // Save users to localStorage
    saveUsers() {
        localStorage.setItem('vmentor_users', JSON.stringify(this.users));
        console.log('💾 Users saved to localStorage');
    },
    
    // Check if user is logged in
    checkSession() {
        const sessionData = localStorage.getItem('vmentor_session');
        if (sessionData) {
            const session = JSON.parse(sessionData);
            
            // Check if session is still valid (24 hours)
            const sessionAge = Date.now() - session.timestamp;
            const maxAge = 24 * 60 * 60 * 1000; // 24 hours
            
            if (sessionAge < maxAge || session.rememberMe) {
                this.currentUser = this.users.find(u => u.email === session.email);
                if (this.currentUser) {
                    this.onLoginSuccess();
                    console.log('✅ Session restored for:', this.currentUser.fullName);
                    return;
                }
            }
        }
        
        // No valid session
        this.currentUser = null;
        this.updateUI();
    },
    
    // Initialize event listeners
    initEventListeners() {
        // Close overlay when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('auth-overlay')) {
                this.closeAuthModal();
            }
        });
        
        // ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAuthModal();
            }
        });
    },
    
    // ==================== USER REGISTRATION ====================
    register(formData) {
        // Validate form
        const validation = this.validateRegistration(formData);
        if (!validation.valid) {
            this.showError(validation.errors);
            return false;
        }
        
        // Check if email already exists
        if (this.users.find(u => u.email === formData.email)) {
            this.showError({ email: 'Email này đã được đăng ký!' });
            return false;
        }
        
        // Create new user
        const newUser = {
            id: this.generateUserId(),
            fullName: formData.fullName,
            email: formData.email,
            password: this.hashPassword(formData.password), // In production, use proper hashing
            createdAt: Date.now(),
            testResults: [],
            preferences: {}
        };
        
        this.users.push(newUser);
        this.saveUsers();
        
        console.log('✅ User registered:', newUser.email);
        
        // Auto login after registration
        this.currentUser = newUser;
        this.createSession(formData.rememberMe);
        this.onLoginSuccess();
        
        return true;
    },
    
    // ==================== USER LOGIN ====================
    login(formData) {
        const user = this.users.find(u => u.email === formData.email);
        
        if (!user) {
            this.showError({ email: 'Email không tồn tại!' });
            return false;
        }
        
        if (user.password !== this.hashPassword(formData.password)) {
            this.showError({ password: 'Mật khẩu không đúng!' });
            return false;
        }
        
        this.currentUser = user;
        this.createSession(formData.rememberMe);
        this.onLoginSuccess();
        
        console.log('✅ User logged in:', user.email);
        return true;
    },
    
    // ==================== USER LOGOUT ====================
    logout() {
        this.currentUser = null;
        localStorage.removeItem('vmentor_session');
        this.updateUI();
        
        // Show goodbye message
        this.showWelcomeMessage('Đã đăng xuất thành công! Hẹn gặp lại bạn! 👋');
        
        console.log('✅ User logged out');
    },
    
    // ==================== SESSION MANAGEMENT ====================
    createSession(rememberMe = false) {
        const session = {
            email: this.currentUser.email,
            timestamp: Date.now(),
            rememberMe: rememberMe
        };
        localStorage.setItem('vmentor_session', JSON.stringify(session));
    },
    
    // ==================== SAVE TEST RESULTS ====================
    saveTestResult(resultData) {
        if (!this.currentUser) {
            console.warn('⚠️ No user logged in, cannot save results');
            return false;
        }
        
        const result = {
            id: this.generateResultId(),
            timestamp: Date.now(),
            hollandCode: resultData.hollandCode,
            selectedCareer: resultData.selectedCareer,
            educationSystem: resultData.educationSystem,
            subjects: resultData.subjects,
            scores: resultData.scores,
            topCareers: resultData.topCareers
        };
        
        // Add to current user
        this.currentUser.testResults.push(result);
        
        // Update in users array
        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) {
            this.users[userIndex] = this.currentUser;
            this.saveUsers();
        }
        
        console.log('✅ Test result saved for:', this.currentUser.email);
        return true;
    },
    
    // ==================== GET USER RESULTS ====================
    getUserResults() {
        if (!this.currentUser) return [];
        return this.currentUser.testResults || [];
    },
    
    // ==================== VALIDATION ====================
    validateRegistration(formData) {
        const errors = {};
        let valid = true;
        
        // Full name validation
        if (!formData.fullName || formData.fullName.trim().length < 2) {
            errors.fullName = 'Họ tên phải có ít nhất 2 ký tự';
            valid = false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = 'Email không hợp lệ';
            valid = false;
        }
        
        // Password validation
        if (!formData.password || formData.password.length < 6) {
            errors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
            valid = false;
        }
        
        // Confirm password validation
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Mật khẩu xác nhận không khớp';
            valid = false;
        }
        
        return { valid, errors };
    },
    
    // ==================== PASSWORD STRENGTH ====================
    checkPasswordStrength(password) {
        let strength = 0;
        
        if (password.length >= 6) strength++;
        if (password.length >= 10) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^a-zA-Z\d]/.test(password)) strength++;
        
        if (strength <= 2) return 'weak';
        if (strength <= 3) return 'medium';
        return 'strong';
    },
    
    // ==================== UTILITIES ====================
    generateUserId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },
    
    generateResultId() {
        return 'result_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },
    
    hashPassword(password) {
        // Simple hash for demo - use bcrypt or similar in production
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString();
    },
    
    getUserInitials() {
        if (!this.currentUser) return 'U';
        const names = this.currentUser.fullName.split(' ');
        if (names.length >= 2) {
            return names[0][0] + names[names.length - 1][0];
        }
        return this.currentUser.fullName[0];
    },
    
    // ==================== UI UPDATES ====================
    updateUI() {
        const loginBtn = document.getElementById('loginBtn');
        const userProfileBtn = document.getElementById('userProfileBtn');
        const welcomeMessage = document.getElementById('welcomeMessage');
        
        if (this.currentUser) {
            // User is logged in
            if (loginBtn) loginBtn.style.display = 'none';
            if (userProfileBtn) {
                userProfileBtn.style.display = 'flex';
                document.getElementById('userName').textContent = this.currentUser.fullName;
                document.getElementById('userAvatar').textContent = this.getUserInitials();
            }
        } else {
            // User is not logged in
            if (loginBtn) loginBtn.style.display = 'inline-flex';
            if (userProfileBtn) userProfileBtn.style.display = 'none';
            if (welcomeMessage) welcomeMessage.classList.remove('show');
        }
    },
    
    onLoginSuccess() {
        this.closeAuthModal();
        this.updateUI();
        this.showWelcomeMessage(`Chào mừng trở lại, ${this.currentUser.fullName}! 🎉`);
    },
    
    showWelcomeMessage(message) {
        const welcomeMessage = document.getElementById('welcomeMessage');
        if (welcomeMessage) {
            welcomeMessage.querySelector('p').textContent = message;
            welcomeMessage.classList.add('show');
            
            setTimeout(() => {
                welcomeMessage.classList.remove('show');
            }, 5000);
        }
    },
    
    showError(errors) {
        // Show errors in form
        Object.keys(errors).forEach(field => {
            const errorElement = document.getElementById(`${field}Error`);
            const inputElement = document.getElementById(field);
            
            if (errorElement) {
                errorElement.textContent = errors[field];
                errorElement.classList.add('show');
            }
            
            if (inputElement) {
                inputElement.classList.add('error');
            }
        });
    },
    
    clearErrors() {
        document.querySelectorAll('.form-error').forEach(el => {
            el.classList.remove('show');
            el.textContent = '';
        });
        
        document.querySelectorAll('.form-input').forEach(el => {
            el.classList.remove('error');
        });
    },
    
    // ==================== MODAL CONTROL ====================
    openAuthModal(tab = 'login') {
        const overlay = document.getElementById('authOverlay');
        if (overlay) {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.switchTab(tab);
        }
    },
    
    closeAuthModal() {
        const overlay = document.getElementById('authOverlay');
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            this.clearErrors();
        }
    },
    
    switchTab(tab) {
        // Update tab buttons
        document.querySelectorAll('.auth-tab').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
        
        // Update forms
        document.querySelectorAll('.auth-form').forEach(form => {
            form.classList.remove('active');
        });
        document.getElementById(`${tab}Form`).classList.add('active');
        
        this.clearErrors();
    },
    
    toggleUserDropdown() {
        const dropdown = document.getElementById('userDropdown');
        if (dropdown) {
            dropdown.classList.toggle('active');
        }
    }
};

// ==================== FORM HANDLERS ====================
function handleLogin(event) {
    event.preventDefault();
    AuthSystem.clearErrors();
    
    const formData = {
        email: document.getElementById('loginEmail').value,
        password: document.getElementById('loginPassword').value,
        rememberMe: document.getElementById('rememberMe').checked
    };
    
    AuthSystem.login(formData);
}

function handleRegister(event) {
    event.preventDefault();
    AuthSystem.clearErrors();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        rememberMe: false
    };
    
    AuthSystem.register(formData);
}

// ==================== PASSWORD STRENGTH CHECKER ====================
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('passwordStrengthBar');
    const strengthText = document.getElementById('passwordStrengthText');
    
    if (password.length === 0) {
        strengthBar.parentElement.classList.remove('show');
        strengthText.classList.remove('show');
        return;
    }
    
    const strength = AuthSystem.checkPasswordStrength(password);
    
    strengthBar.parentElement.classList.add('show');
    strengthText.classList.add('show');
    
    strengthBar.className = `password-strength-bar ${strength}`;
    
    const strengthLabels = {
        weak: 'Yếu',
        medium: 'Trung bình',
        strong: 'Mạnh'
    };
    
    const strengthColors = {
        weak: '#ef4444',
        medium: '#f59e0b',
        strong: '#10b981'
    };
    
    strengthText.textContent = strengthLabels[strength];
    strengthText.style.color = strengthColors[strength];
}

// ==================== USER PROFILE FUNCTIONS ====================
function viewProfile() {
    // Close dropdown
    AuthSystem.toggleUserDropdown();
    
    // Redirect to profile page or show modal
    window.location.href = '#profile';
    showUserProfile();
}

function showUserProfile() {
    const user = AuthSystem.currentUser;
    if (!user) return;
    
    const results = AuthSystem.getUserResults();
    
    alert(`👤 Hồ sơ của ${user.fullName}\n\n` +
          `📧 Email: ${user.email}\n` +
          `📊 Số lần làm test: ${results.length}\n` +
          `📅 Tham gia từ: ${new Date(user.createdAt).toLocaleDateString('vi-VN')}`);
}

function viewMyResults() {
    AuthSystem.toggleUserDropdown();
    
    const results = AuthSystem.getUserResults();
    
    if (results.length === 0) {
        alert('Bạn chưa có kết quả test nào!');
        return;
    }
    
    let message = `📊 Kết quả test của bạn (${results.length} lần):\n\n`;
    
    results.forEach((result, index) => {
        const date = new Date(result.timestamp).toLocaleDateString('vi-VN');
        message += `${index + 1}. ${date}\n`;
        message += `   Mã Holland: ${result.hollandCode}\n`;
        message += `   Ngành nghề: ${result.selectedCareer || 'Chưa chọn'}\n\n`;
    });
    
    alert(message);
}

function editProfile() {
    AuthSystem.toggleUserDropdown();
    alert('Tính năng chỉnh sửa hồ sơ đang được phát triển!');
}

function handleLogout() {
    if (confirm('Bạn có chắc muốn đăng xuất?')) {
        AuthSystem.logout();
        document.getElementById('userDropdown').classList.remove('active');
    }
}

// ==================== CLOSE DROPDOWN WHEN CLICKING OUTSIDE ====================
document.addEventListener('click', function(event) {
    const userProfileBtn = document.getElementById('userProfileBtn');
    const userDropdown = document.getElementById('userDropdown');
    
    if (userProfileBtn && userDropdown) {
        if (!userProfileBtn.contains(event.target) && !userDropdown.contains(event.target)) {
            userDropdown.classList.remove('active');
        }
    }
});

// ==================== SOCIAL LOGIN (DEMO) ====================
function loginWithGoogle() {
    alert('Đăng nhập bằng Google đang được phát triển!');
}

function loginWithFacebook() {
    alert('Đăng nhập bằng Facebook đang được phát triển!');
}

// ==================== INITIALIZE ON PAGE LOAD ====================
document.addEventListener('DOMContentLoaded', function() {
    AuthSystem.init();
});

// ==================== EXPORT FOR OTHER SCRIPTS ====================
window.AuthSystem = AuthSystem;

console.log('✅ Authentication System loaded');
