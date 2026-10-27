// ==================== V-MENTOR AI 2026 - APP LOGIC ====================

// ==================== GLOBAL STATE ====================
let currentStep = 1;
let hollandAnswers = {};
let eqAnswers = {};
let lifeskillsAnswers = {};
let subjectAnswers = []; // ✨ MỚI: Lưu các môn học tự tin
let educationType = '';
let currentVocationalJob = ''; // Lưu nghề nghiệp đang học của hệ Trung cấp
let selectedCareer = null;

// ✨ Global userData object for career-modal.js
let userData = {
    hollandCode: '',
    hollandScores: {},
    subjects: [],
    lifeSkills: {},
    educationSystem: ''
};

// ==================== SUBJECT REQUIREMENTS MAPPING ====================
window.CAREER_SUBJECT_REQUIREMENTS = {
    // Công nghệ thông tin
    'dev-fullstack': ['informatics', 'math', 'english'],
    'dev-mobile': ['informatics', 'math', 'english'],
    'dev-ai': ['informatics', 'math', 'english'],
    'dev-game': ['informatics', 'math', 'english'],
    'security': ['informatics', 'math', 'english'],
    'data-scientist': ['informatics', 'math', 'english'],
    'devops': ['informatics', 'math', 'english'],
    'ux-designer': ['informatics', 'english'],
    'network-admin': ['informatics', 'math', 'physics'],
    
    // Y tế - Sức khỏe
    'doctor': ['biology', 'chemistry', 'physics'],
    'nurse': ['biology', 'chemistry'],
    'pharmacist': ['biology', 'chemistry'],
    'dentist': ['biology', 'chemistry'],
    'traditional-medicine': ['biology', 'chemistry'],
    'nutrition': ['biology', 'chemistry'],
    'physical-therapy': ['biology', 'physics'],
    'medical-imaging': ['biology', 'physics'],
    
    // Kỹ thuật
    'civil-engineer': ['math', 'physics'],
    'mechanical-engineer': ['math', 'physics'],
    'electrical-engineer': ['math', 'physics'],
    'chemical-engineer': ['math', 'chemistry', 'physics'],
    'architect': ['math', 'physics', 'geography'],
    'petroleum-engineer': ['math', 'physics', 'chemistry'],
    'aerospace-engineer': ['math', 'physics'],
    
    // Kinh tế - Quản trị
    'business-admin': ['math', 'english', 'literature'],
    'accountant': ['math'],
    'marketing': ['math', 'english', 'literature'],
    'hr-manager': ['literature', 'english', 'civics'],
    'finance-analyst': ['math', 'english'],
    'economist': ['math', 'english'],
    
    // Giáo dục
    'teacher-math': ['math'],
    'teacher-literature': ['literature'],
    'teacher-english': ['english'],
    'teacher-physics': ['physics', 'math'],
    'teacher-chemistry': ['chemistry', 'math'],
    'teacher-biology': ['biology'],
    'teacher-history': ['history'],
    'teacher-geography': ['geography'],
    'teacher-civics': ['civics'],
    'teacher-informatics': ['informatics', 'math'],
    
    // Nghệ thuật - Sáng tạo
    'graphic-designer': ['informatics', 'english'],
    'photographer': ['physics'],
    'video-editor': ['informatics', 'english'],
    'interior-designer': ['math', 'geography'],
    'fashion-designer': ['chemistry'],
    'musician': ['physics'],
    'actor': ['literature', 'english'],
    
    // Truyền thông - Báo chí
    'journalist': ['literature', 'english', 'history'],
    'content-creator': ['literature', 'english'],
    'pr-specialist': ['literature', 'english'],
    'social-media': ['literature', 'english', 'informatics'],
    
    // Du lịch - Khách sạn
    'tour-guide': ['geography', 'history', 'english'],
    'hotel-manager': ['english', 'math'],
    'event-planner': ['english', 'literature'],
    'flight-attendant': ['english', 'geography'],
    
    // Luật - Chính trị
    'lawyer': ['literature', 'civics', 'history'],
    'judge': ['literature', 'civics', 'history'],
    'prosecutor': ['literature', 'civics'],
    'diplomat': ['english', 'history', 'civics'],
    
    // Nông nghiệp - Môi trường
    'agronomist': ['biology', 'chemistry'],
    'veterinarian': ['biology', 'chemistry'],
    'forestry': ['biology', 'geography'],
    'environmental-scientist': ['biology', 'chemistry', 'geography'],
    
    // Logistics - Vận tải
    'logistics-manager': ['math', 'geography', 'english'],
    'supply-chain': ['math', 'geography'],
    'pilot': ['math', 'physics', 'english'],
    'ship-captain': ['math', 'physics', 'geography'],
    
    // Thể thao
    'athlete': ['biology', 'physics'],
    'coach': ['biology', 'physics'],
    'sports-medicine': ['biology', 'chemistry', 'physics'],
    
    // Công an - Quân đội
    'police-officer': ['physics', 'civics'],
    'firefighter': ['physics', 'chemistry'],
    'military-officer': ['physics', 'history', 'civics'],
    
    // Tài chính - Ngân hàng
    'banker': ['math', 'english'],
    'investment-analyst': ['math', 'english'],
    'insurance-agent': ['math', 'literature'],
    'auditor': ['math'],
    
    // Khoa học
    'physicist': ['physics', 'math'],
    'chemist': ['chemistry', 'math'],
    'biologist': ['biology', 'chemistry'],
    'mathematician': ['math'],
    'geologist': ['geography', 'chemistry', 'physics'],
    'astronomer': ['physics', 'math'],
    
    // Xã hội học
    'psychologist': ['biology', 'literature', 'civics'],
    'social-worker': ['civics', 'literature'],
    'sociologist': ['civics', 'history', 'literature']
};

// Tracking rendered steps to prevent re-rendering
let renderedSteps = {
    holland: false,
    eq: false,
    lifeskills: false,
    subjects: false, // ✨ MỚI
    education: false
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('V-Mentor AI 2026 Initialized!');
});

// ==================== START TEST ====================
function startTest() {
    // Hide hero
    document.querySelector('.hero').style.display = 'none';
    
    // Show test container
    document.getElementById('testContainer').style.display = 'block';
    document.getElementById('progressBarSticky').style.display = 'block';
    document.getElementById('stepsIndicator').style.display = 'flex';
    
    // Initialize first step
    renderHollandTest();
    goToStep(1);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== HOLLAND TEST ====================
function renderHollandTest() {
    if (renderedSteps.holland) return; // Prevent re-rendering
    
    const container = document.getElementById('hollandTest');
    container.innerHTML = '';
    
    hollandData.forEach((group, groupIdx) => {
        const groupDiv = document.createElement('div');
        groupDiv.style.marginBottom = '2rem';
        
        // Header
        const header = document.createElement('div');
        header.style.cssText = `
            background: linear-gradient(135deg, ${group.color}22, ${group.color}11);
            border-left: 4px solid ${group.color};
            padding: 1.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        `;
        header.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <span style="font-size: 2rem;">${group.icon}</span>
                <div>
                    <h3 style="margin: 0; color: ${group.color};">${group.name}</h3>
                    <p style="margin: 0.5rem 0 0; font-size: 0.875rem; color: #6b7280;">${group.detailedDesc}</p>
                </div>
            </div>
            <i class="fas fa-chevron-down" style="color: ${group.color};"></i>
        `;
        
        // Content
        const content = document.createElement('div');
        content.style.display = 'none';
        
        group.questions.forEach((q, qIdx) => {
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card';
            
            questionCard.innerHTML = `
                <div class="question-header">
                    <div class="question-number">${groupIdx * 10 + qIdx + 1}</div>
                    <div class="question-text">
                        <div class="question-main">${q.text}</div>
                        <div class="question-situation">${q.situation}</div>
                        <div class="question-tooltip" title="${q.tooltip}">
                            <i class="fas fa-info-circle"></i> Gợi ý
                        </div>
                    </div>
                </div>
                <div class="rating-scale">
                    ${[1, 2, 3, 4, 5].map(score => `
                        <div class="rating-option">
                            <input type="radio" id="h_${groupIdx}_${qIdx}_${score}" name="h_${groupIdx}_${qIdx}" value="${score}">
                            <label for="h_${groupIdx}_${qIdx}_${score}">
                                ${score === 1 ? 'Không thích' : score === 2 ? 'Ít thích' : score === 3 ? 'Bình thường' : score === 4 ? 'Thích' : 'Rất thích'}
                            </label>
                        </div>
                    `).join('')}
                </div>
            `;
            
            const radios = questionCard.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => {
                radio.addEventListener('change', function() {
                    hollandAnswers[`${group.id}-${qIdx}`] = parseInt(this.value);
                    updateProgress();
                });
            });
            
            content.appendChild(questionCard);
        });
        
        // Toggle accordion
        header.addEventListener('click', () => {
            const isOpen = content.style.display === 'block';
            content.style.display = isOpen ? 'none' : 'block';
            header.querySelector('.fa-chevron-down').style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        });
        
        groupDiv.appendChild(header);
        groupDiv.appendChild(content);
        container.appendChild(groupDiv);
    });
    
    renderedSteps.holland = true;
}

// ==================== EQ TEST ====================
function renderEQTest() {
    if (renderedSteps.eq) return; // Prevent re-rendering
    
    const container = document.getElementById('eqTest');
    container.innerHTML = '';
    
    eqData.questions.forEach((q, idx) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        
        questionCard.innerHTML = `
            <div class="question-header">
                <div class="question-number">${idx + 1}</div>
                <div class="question-text">
                    <div class="question-main">${q.text}</div>
                    <div class="question-tooltip" title="${q.tooltip}">
                        <i class="fas fa-info-circle"></i> ${q.category}
                    </div>
                </div>
            </div>
            <div class="rating-scale">
                ${[1, 2, 3, 4, 5].map(score => `
                    <div class="rating-option">
                        <input type="radio" id="eq_${idx}_${score}" name="eq_${idx}" value="${score}">
                        <label for="eq_${idx}_${score}">
                            ${score === 1 ? 'Không đúng' : score === 2 ? 'Ít đúng' : score === 3 ? 'Trung bình' : score === 4 ? 'Đúng' : 'Rất đúng'}
                        </label>
                    </div>
                `).join('')}
            </div>
        `;
        
        const radios = questionCard.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                eqAnswers[`eq_${idx}`] = parseInt(this.value);
                updateProgress();
            });
        });
        
        container.appendChild(questionCard);
    });
    
    renderedSteps.eq = true;
}

// ==================== LIFE SKILLS TEST ====================
function renderLifeSkillsTest() {
    if (renderedSteps.lifeskills) return; // Prevent re-rendering
    
    const container = document.getElementById('lifeskillsTest');
    container.innerHTML = '';
    
    lifeskillsData.categories.forEach((category, catIdx) => {
        category.questions.forEach((q, qIdx) => {
            const globalIdx = catIdx * 3 + qIdx;
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card';
            
            questionCard.innerHTML = `
                <div class="question-header">
                    <div class="question-number">${globalIdx + 1}</div>
                    <div class="question-text">
                        <div class="question-main">${q.text}</div>
                        <div class="question-tooltip" title="${q.tooltip}">
                            <i class="fas fa-info-circle"></i> ${category.name}
                        </div>
                    </div>
                </div>
                <div class="rating-scale">
                    ${[1, 2, 3, 4, 5].map(score => `
                        <div class="rating-option">
                            <input type="radio" id="ls_${globalIdx}_${score}" name="ls_${globalIdx}" value="${score}">
                            <label for="ls_${globalIdx}_${score}">
                                ${score === 1 ? 'Yếu' : score === 2 ? 'Trung bình' : score === 3 ? 'Khá' : score === 4 ? 'Tốt' : 'Xuất sắc'}
                            </label>
                        </div>
                    `).join('')}
                </div>
            `;
            
            const radios = questionCard.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => {
                radio.addEventListener('change', function() {
                    lifeskillsAnswers[`ls_${globalIdx}`] = parseInt(this.value);
                    updateProgress();
                });
            });
            
            container.appendChild(questionCard);
        });
    });
    
    renderedSteps.lifeskills = true;
}

// ==================== ✨ SUBJECTS TEST (BƯỚC 4 MỚI) ====================
function renderSubjectsTest() {
    if (renderedSteps.subjects) return; // Prevent re-rendering
    
    const container = document.getElementById('subjectCheckboxes');
    container.innerHTML = '';
    
    subjectsData.subjects.forEach((subject, idx) => {
        const checkboxItem = document.createElement('div');
        checkboxItem.className = 'subject-checkbox-item';
        
        checkboxItem.innerHTML = `
            <input type="checkbox" id="subject_${idx}" value="${subject.id}">
            <label for="subject_${idx}">
                <span class="subject-icon">${subject.icon}</span>
                <span class="subject-name">${subject.name}</span>
            </label>
        `;
        
        const checkbox = checkboxItem.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                subjectAnswers.push(subject.id);
            } else {
                subjectAnswers = subjectAnswers.filter(id => id !== subject.id);
            }
            updateSubjectButton();
            updateProgress();
        });
        
        container.appendChild(checkboxItem);
    });
    
    renderedSteps.subjects = true;
}

// Hàm kiểm tra điều kiện bước 4
function updateSubjectButton() {
    const nextBtn = document.getElementById('nextStepBtn4');
    if (subjectAnswers.length >= 2) {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
    } else {
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.5';
    }
}

// ==================== EDUCATION TYPE (DANH SÁCH NGÀNH NGHỀ CHI TIẾT) ====================
function renderEducationType() {
    if (renderedSteps.education) return; // Prevent re-rendering
    
    const container = document.getElementById('educationSelection');
    
    // Danh sách ngành nghề đầy đủ theo Tổng cục Giáo dục nghề nghiệp
    const vocationalGroups = {
        "Kỹ thuật & Công nghệ": ["Công nghệ Ô tô", "Kỹ thuật Máy lạnh & Điều hòa", "Điện công nghiệp", "Điện tử công nghiệp", "Cơ khí chế tạo", "Hàn (Công nghệ cao)", "Vận hành máy xây dựng", "Sửa chữa xe máy"],
        "Công nghệ thông tin": ["Thiết kế đồ họa", "Quản trị mạng", "Thiết kế Web", "Lập trình máy tính", "Tin học văn phòng", "Ứng dụng phần mềm"],
        "Du lịch, Nhà hàng & Khách sạn": ["Quản trị Khách sạn", "Quản trị Nhà hàng", "Kỹ thuật Chế biến món ăn", "Pha chế đồ uống (Bartender)", "Hướng dẫn du lịch", "Lễ tân chuyên nghiệp"],
        "Kinh doanh & Quản lý": ["Kế toán doanh nghiệp", "Quản trị bán hàng", "Logistic (Kho bãi)", "Marketing & Quảng cáo", "Thư ký văn phòng"],
        "Dịch vụ & Thẩm mỹ": ["Chăm sóc sắc đẹp (Spa)", "Thiết kế mẫu tóc", "Trang điểm thẩm mỹ", "May thời trang", "Kỹ thuật may mặc"],
        "Khối ngành khác": ["Thú y", "Dược tá", "Điều dưỡng sơ cấp", "Sư phạm mầm non (Hệ nghề)", "Nghệ thuật biểu diễn"]
    };

    let vocationalHTML = '';
    for (const [groupName, jobs] of Object.entries(vocationalGroups)) {
        vocationalHTML += `
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: #4f46e5; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.5rem; margin-bottom: 0.75rem; font-size: 0.95rem;">${groupName}</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 0.5rem;">
                    ${jobs.map(job => `<div class="voca-option" onclick="selectVocaJob('${job}')" style="padding: 0.6rem; background: white; border: 1px solid #e2e8f0; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; text-align: center; transition: all 0.2s;">${job}</div>`).join('')}
                </div>
            </div>`;
    }
    
    const types = [
        { id: 'thpt', name: 'THPT', icon: '🎓', desc: 'Học sinh THPT' },
        { id: 'tcn', name: 'Trung cấp nghề', icon: '🔧', desc: 'Học nghề' }
    ];
    
    container.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; max-width: 600px; margin: 0 auto;">
            ${types.map(type => `
                <div class="edu-type-card" data-type="${type.id}" style="
                    padding: 2rem;
                    border: 2px solid #e5e7eb;
                    border-radius: 1rem;
                    cursor: pointer;
                    text-align: center;
                    transition: all 0.3s;
                ">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">${type.icon}</div>
                    <h3 style="margin: 0 0 0.5rem;">${type.name}</h3>
                    <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${type.desc}</p>
                </div>
            `).join('')}
        </div>

        <div id="vocaJobSelection" style="display: none; margin-top: 2rem; padding: 2rem; background: #f8fafc; border-radius: 1rem; border: 1px dashed #cbd5e1;">
            <p style="margin-bottom: 1.5rem; font-weight: 700; color: #1e293b; text-align: center; text-transform: uppercase; font-size: 0.9rem;">Vui lòng chọn nghề nghiệp bạn đang theo học:</p>
            ${vocationalHTML}
            <div style="margin-top: 1rem;">
                <input type="text" id="otherVocaJob" placeholder="Nếu nghề khác, vui lòng nhập tên nghề tại đây..." oninput="selectVocaJob(this.value)" style="width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 0.5rem; font-size: 0.875rem;">
            </div>
        </div>
    `;
    
    document.querySelectorAll('.edu-type-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.edu-type-card').forEach(c => {
                c.style.borderColor = '#e5e7eb';
                c.style.background = 'white';
            });
            this.style.borderColor = '#6366f1';
            this.style.background = '#f0f9ff';
            educationType = this.dataset.type;

            // Xử lý hiển thị danh sách nghề
            const jobBox = document.getElementById('vocaJobSelection');
            if (educationType === 'tcn') {
                jobBox.style.display = 'block';
                setTimeout(() => jobBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
            } else {
                jobBox.style.display = 'none';
                currentVocationalJob = ''; 
            }
        });
    });
    
    renderedSteps.education = true;
}

// Hàm bổ sung: Xử lý chọn nghề nghiệp trong danh sách
function selectVocaJob(name) {
    currentVocationalJob = name;
    document.querySelectorAll('.voca-option').forEach(opt => {
        if (opt.textContent === name) {
            opt.style.background = '#6366f1';
            opt.style.color = 'white';
            opt.style.borderColor = '#6366f1';
        } else {
            opt.style.background = 'white';
            opt.style.color = 'black';
            opt.style.borderColor = '#e2e8f0';
        }
    });
}

// ==================== CAREER SELECTION ====================
function renderCareerSelection() {
    const container = document.getElementById('careerSelection');
    const matches = calculateMatches();
    
    container.innerHTML = `
        <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">Top 10 ngành nghề phù hợp với bạn:</h3>
        <div class="career-grid">
            ${matches.slice(0, 10).map(match => {
                const career = careersDatabase[match.id];
                return `
                    <div class="career-card" data-career="${match.id}" data-score="${match.score}">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h4 style="margin: 0; font-size: 1.125rem;">${career.name}</h4>
                            <span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-weight: 600; font-size: 0.875rem;">
                                ${match.score}%
                            </span>
                        </div>
                        <p style="color: #6b7280; font-size: 0.875rem; margin: 0.5rem 0;">${career.category}</p>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem;">
                            ${career.hollandCode.split('-').map(code => {
                                const color = { 'R': '#ef4444', 'I': '#8b5cf6', 'A': '#f59e0b', 'S': '#10b981', 'E': '#3b82f6', 'C': '#6366f1' }[code] || '#6b7280';
                                return `<span style="background: ${color}20; color: ${color}; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 600;">${code}</span>`;
                            }).join('')}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    // ✅ FIXED: Add click event to open modal WITH SCORE
    document.querySelectorAll('.career-card').forEach(card => {
        card.addEventListener('click', function() {
            const careerId = this.dataset.career;
            const matchScore = parseInt(this.dataset.score); // ✅ Lấy score từ data-score
            
            // Mark as selected
            document.querySelectorAll('.career-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedCareer = careerId;
            document.getElementById('analyzeBtn').disabled = false;
            
            // ✅ FIXED: Open career detail modal WITH SCORE
            if (typeof showCareerDetail === 'function') {
                showCareerDetail(careerId, matchScore); // ✅ Truyền matchScore vào
            } else {
                console.error('showCareerDetail function not found. Make sure career-modal.js is loaded.');
            }
        });
    });
}
// ==================== NAVIGATION ====================
function nextStep() {
    // Kiểm tra điều kiện cho từng bước
    if (currentStep === 1) {
        const hollandCount = Object.keys(hollandAnswers).length;
        const totalHolland = hollandData.reduce((sum, group) => sum + group.questions.length, 0);
        if (hollandCount < totalHolland) {
            alert('Vui lòng hoàn thành tất cả câu hỏi Holland Test!');
            return;
        }
        renderEQTest();
    } else if (currentStep === 2) {
        const eqCount = Object.keys(eqAnswers).length;
        if (eqCount < eqData.questions.length) {
            alert('Vui lòng hoàn thành tất cả câu hỏi EQ Test!');
            return;
        }
        renderLifeSkillsTest();
    } else if (currentStep === 3) {
        const lsCount = Object.keys(lifeskillsAnswers).length;
        const totalLS = lifeskillsData.categories.reduce((sum, cat) => sum + cat.questions.length, 0);
        if (lsCount < totalLS) {
            alert('Vui lòng hoàn thành tất cả câu hỏi Kỹ năng sống!');
            return;
        }
        renderSubjectsTest(); // ✨ Bước mới
    } else if (currentStep === 4) {
        // ✨ Kiểm tra bước môn học
        if (subjectAnswers.length < 2) {
            alert('Vui lòng chọn ít nhất 2 môn học bạn tự tin nhất!');
            return;
        }
        renderEducationType();
    } else if (currentStep === 5) {
        if (!educationType) {
            alert('Vui lòng chọn hệ đào tạo!');
            return;
        }
        if (educationType === 'tcn' && !currentVocationalJob) {
            alert('Vui lòng chọn nghề nghiệp bạn đang theo học!');
            return;
        }
        renderCareerSelection();
    }
    
    goToStep(currentStep + 1);
}

function prevStep() {
    if (currentStep > 1) {
        goToStep(currentStep - 1);
    }
}

function goToStep(step) {
    // Hide all steps
    for (let i = 1; i <= 6; i++) {
        const stepEl = document.getElementById(`step${i}`);
        if (stepEl) {
            stepEl.classList.remove('active');
        }
    }
    
    // Show current step
    const currentStepEl = document.getElementById(`step${step}`);
    if (currentStepEl) {
        currentStepEl.classList.add('active');
    }
    
    // Update step indicator
    document.querySelectorAll('.step').forEach((stepIndicator, idx) => {
        stepIndicator.classList.remove('active', 'completed');
        if (idx + 1 < step) {
            stepIndicator.classList.add('completed');
        } else if (idx + 1 === step) {
            stepIndicator.classList.add('active');
        }
    });
    
    currentStep = step;
    updateProgress();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== PROGRESS ====================
function updateProgress() {
    const totalQuestions = 
        hollandData.reduce((sum, group) => sum + group.questions.length, 0) + 
        eqData.questions.length + 
        lifeskillsData.categories.reduce((sum, cat) => sum + cat.questions.length, 0) +
        1; // Thêm 1 cho bước môn học (coi như 1 câu hỏi)
    
    const answered = 
        Object.keys(hollandAnswers).length + 
        Object.keys(eqAnswers).length + 
        Object.keys(lifeskillsAnswers).length +
        (subjectAnswers.length >= 2 ? 1 : 0); // ✨ Tính môn học
    
    const percent = Math.round((answered / totalQuestions) * 100);
    
    document.getElementById('progressFill').style.width = `${percent}%`;
    document.getElementById('progressPercent').textContent = `${percent}%`;
}

// ==================== ✨ CALCULATE MATCHES (CẬP NHẬT CÔNG THỨC TÍNH ĐIỂM) ====================
function calculateMatches() {
    const matches = [];
    
    // Calculate Holland scores
    const hollandScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    hollandData.forEach(group => {
        group.questions.forEach((q, idx) => {
            const answer = hollandAnswers[`${group.id}-${idx}`];
            if (answer) {
                hollandScores[group.id] += answer;
            }
        });
    });
    
    const maxHollandPerCode = hollandData[0].questions.length * 5; // Điểm tối đa mỗi code
    
    // ✨ Update userData with Holland results
    userData.hollandScores = hollandScores;
    
    // Get top 3 Holland codes
    const sortedHolland = Object.entries(hollandScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([code]) => code);
    userData.hollandCode = sortedHolland.join('');
    
    // Update subjects and education
    userData.subjects = subjectAnswers;
    userData.educationSystem = educationType;
    
    // Update life skills
    userData.lifeSkills = lifeskillsAnswers;
    
    // Iterate through all careers
    for (const [id, career] of Object.entries(careersDatabase)) {
        let score = 0;
        
        // ✅ Holland matching (50% của tổng điểm - giảm xuống để chia cho môn học)
        const careerCodes = career.hollandCode.split('-');
        let hollandMatchScore = 0;
        
        careerCodes.forEach((code, idx) => {
            const userScore = hollandScores[code] || 0;
            const normalizedScore = (userScore / maxHollandPerCode) * 100;
            
            if (idx === 0) {
                hollandMatchScore += normalizedScore * 0.7;
            } else {
                hollandMatchScore += normalizedScore * 0.3;
            }
        });
        
        score += (hollandMatchScore / 100) * 50; // 50%
        
        // ✅ EQ matching (15% của tổng điểm)
        const eqCount = Object.keys(eqAnswers).length;
        if (eqCount > 0) {
            const avgEQ = Object.values(eqAnswers).reduce((a, b) => a + b, 0) / eqCount;
            const normalizedEQ = ((avgEQ - 1) / 4) * 100;
            score += (normalizedEQ / 100) * 15;
        }
        
        // ✅ Life skills matching (15% của tổng điểm)
        const lsCount = Object.keys(lifeskillsAnswers).length;
        if (lsCount > 0) {
            const avgLS = Object.values(lifeskillsAnswers).reduce((a, b) => a + b, 0) / lsCount;
            const normalizedLS = ((avgLS - 1) / 4) * 100;
            score += (normalizedLS / 100) * 15;
        }
        
        // ✅ ✨ Subject matching (20% của tổng điểm - PHẦN MỚI)
        if (subjectAnswers.length > 0 && career.requiredSubjects) {
            const matchingSubjects = subjectAnswers.filter(subj => 
                career.requiredSubjects.includes(subj)
            );
            const subjectMatchPercent = (matchingSubjects.length / career.requiredSubjects.length) * 100;
            score += (subjectMatchPercent / 100) * 20;
        }
        
        // ✅ Làm tròn và giới hạn 0-99
        matches.push({ 
            id, 
            score: Math.max(0, Math.min(Math.round(score), 99)) 
        });
    }
    
    return matches.sort((a, b) => b.score - a.score);
}

// ==================== CAREER ANALYSIS ====================
function analyzeCareer() {
    if (!selectedCareer) {
        alert('Vui lòng chọn một ngành nghề!');
        return;
    }
    
    const career = careersDatabase[selectedCareer];
    if (!career) {
        alert('Lỗi: Không tìm thấy thông tin ngành nghề.');
        return;
    }
    
    document.getElementById('testContainer').style.display = 'none';
    
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.style.display = 'block';
    
    const matches = calculateMatches();
    const match = matches.find(m => m.id === selectedCareer);
    
    const eduType = educationType || 'thpt';
    
    // Ghi chú so sánh nếu là hệ nghề
    let vocationalNote = "";
    if (educationType === 'tcn' && currentVocationalJob) {
        vocationalNote = `
            <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.15); border-radius: 0.5rem; font-size: 0.9rem; border: 1px solid rgba(255,255,255,0.3);">
                <i class="fas fa-info-circle"></i> Bạn đang theo học nghề: <strong>${currentVocationalJob}</strong>. 
                Kết quả này cho thấy mức độ tương thích của bạn với mục tiêu nghề nghiệp mới.
            </div>`;
    }

    resultsContainer.innerHTML = `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4rem 2rem; border-radius: 1rem; text-align: center; margin-bottom: 3rem;">
            <h1 style="font-size: 3rem; margin-bottom: 1rem;">${match.score}% Phù hợp</h1>
            <h2 style="font-size: 2rem; opacity: 0.9;">${career.name}</h2>
            <p style="font-size: 1.25rem; opacity: 0.8; margin-top: 1rem;">${career.hollandCode} - ${career.category}</p>
            ${vocationalNote}
        </div>
        
        <div style="background: white; padding: 3rem; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);">
            <h2 style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;"><i class="fas fa-graduation-cap"></i> Trường đào tạo</h2>
            <div style="display: grid; gap: 1rem;">
                ${career.universities.map(uni => `
                    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 0.5rem; border-left: 4px solid #6366f1;">
                        <h4 style="margin: 0;">${uni.name}</h4>
                        <p style="margin: 0.5rem 0 0; color: #6b7280;">Điểm: ${uni.score} | Tổ hợp: ${uni.combo}</p>
                    </div>
                `).join('')}
            </div>
            
            <h2 style="display: flex; align-items: center; gap: 0.5rem; margin: 3rem 0 1.5rem;"><i class="fas fa-money-bill-wave"></i> Mức lương</h2>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
                <div style="text-align: center; padding: 1.5rem; background: #f0fdf4; border-radius: 0.5rem;">
                    <div style="font-weight: 700; color: #10b981; font-size: 1.25rem;">Fresher</div>
                    <div style="margin-top: 0.5rem;">${career.salary.entry}</div>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: #dbeafe; border-radius: 0.5rem;">
                    <div style="font-weight: 700; color: #2563eb; font-size: 1.25rem;">Mid-level</div>
                    <div style="margin-top: 0.5rem;">${career.salary.mid}</div>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: #fef3c7; border-radius: 0.5rem;">
                    <div style="font-weight: 700; color: #f59e0b; font-size: 1.25rem;">Senior</div>
                    <div style="margin-top: 0.5rem;">${career.salary.senior}</div>
                </div>
            </div>
            
            <h2 style="display: flex; align-items: center; gap: 0.5rem; margin: 3rem 0 1.5rem;"><i class="fas fa-route"></i> Lộ trình học tập</h2>
            <div>
                ${(career.roadmap[eduType] || career.roadmap['thpt']).map(step => `
                    <div style="padding: 1rem; margin-bottom: 0.75rem; background: #f9fafb; border-radius: 0.5rem; border-left: 4px solid #6366f1;">
                        ${step}
                    </div>
                `).join('')}
            </div>
            
            <h2 style="display: flex; align-items: center; gap: 0.5rem; margin: 3rem 0 1rem;"><i class="fas fa-lightbulb"></i> Khuyến nghị</h2>
            <ul style="padding-left: 1.5rem;">
                ${career.recommendations.map(rec => `<li style="margin-bottom: 0.75rem;">${rec}</li>`).join('')}
            </ul>
            
            <!-- ✨ NEW SECTION 1: THỬ THÁCH CỦA NGÀNH NGHỀ -->
            ${career.challenges && career.challenges.length > 0 ? `
                <h2 style="display: flex; align-items: center; gap: 0.5rem; margin: 3rem 0 1.5rem; color: #991b1b;">
                    <i class="fas fa-exclamation-triangle"></i> Thử thách của ngành nghề
                </h2>
                <div style="background: linear-gradient(135deg, #fef2f2, #fee2e2); padding: 2rem; border-radius: 1rem; border: 2px solid #fecaca;">
                    <p style="margin-bottom: 1rem; color: #7f1d1d; font-weight: 600;">
                        <i class="fas fa-info-circle"></i> Những khó khăn bạn có thể gặp phải:
                    </p>
                    <div style="display: grid; gap: 1rem;">
                        ${career.challenges.map(challenge => `
                            <div style="display: flex; gap: 1rem; padding: 1rem; background: white; border-radius: 0.5rem; border-left: 4px solid #ef4444;">
                                <i class="fas fa-times-circle" style="color: #ef4444; font-size: 1.25rem; flex-shrink: 0; margin-top: 0.125rem;"></i>
                                <div style="color: #7f1d1d; line-height: 1.6;">${challenge}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <!-- ✨ NEW SECTION 2: CÂU CHUYỆN THÀNH CÔNG -->
            ${career.successStories && career.successStories.length > 0 ? `
                <h2 style="display: flex; align-items: center; gap: 0.5rem; margin: 3rem 0 1.5rem; color: #92400e;">
                    <i class="fas fa-trophy"></i> Câu chuyện thành công
                </h2>
                <div style="background: linear-gradient(135deg, #fef3c7, #fed6e3); padding: 2rem; border-radius: 1rem; border: 2px solid #fde68a;">
                    <p style="margin-bottom: 1rem; color: #78350f; font-weight: 600;">
                        <i class="fas fa-star"></i> Những người đã thành công trong ngành này:
                    </p>
                    <div style="display: grid; gap: 1rem;">
                        ${career.successStories.map(story => `
                            <div style="display: flex; gap: 1rem; padding: 1rem; background: white; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                                <i class="fas fa-medal" style="color: #f59e0b; font-size: 1.25rem; flex-shrink: 0; margin-top: 0.125rem;"></i>
                                <div style="color: #78350f; line-height: 1.6;">${story}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div style="margin-top: 3rem; display: flex; gap: 1rem; flex-wrap: wrap;">
    <button class="btn btn-large btn-primary" onclick="exportPDF()">
        <i class="fas fa-file-pdf"></i> Xuất PDF
    </button>
    
    <!-- ✨ NEW: Nút So sánh -->
    <button class="btn btn-large btn-success" onclick="showComparisonModal()" style="background: linear-gradient(135deg, #10b981, #059669); color: white;">
        <i class="fas fa-balance-scale"></i> So sánh ngành khác
    </button>
    
    <button class="btn btn-large btn-outline" onclick="resetTest()">
        <i class="fas fa-redo"></i> Làm lại
    </button>
</div>
        </div>
    `;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== CHATBOT ====================
function toggleChatbot() {
    const chatWindow = document.getElementById('chatbotWindow');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
}

function closeChatbot() {
    document.getElementById('chatbotWindow').style.display = 'none';
}

function sendChatMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    if (!message) return;
    
    const messagesDiv = document.getElementById('chatbotMessages');
    messagesDiv.innerHTML += `
        <div style="text-align: right; margin: 1rem 0;">
            <p style="background: #6366f1; color: white; padding: 0.75rem; border-radius: 0.5rem; display: inline-block; max-width: 80%;">${message}</p>
        </div>
    `;
    
    setTimeout(() => {
        messagesDiv.innerHTML += `
            <div style="margin: 1rem 0; display: flex; gap: 0.5rem;">
                <i class="fas fa-robot"></i>
                <p style="background: #f3f4f6; padding: 0.75rem; border-radius: 0.5rem; max-width: 80%;">
                    Cảm ơn bạn! Tính năng này đang được phát triển. Vui lòng liên hệ: 0354738643
                </p>
            </div>
        `;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1000);
    
    input.value = '';
}

// ==================== UTILITIES ====================

function resetTest() {
    if (confirm('Bạn có chắc muốn làm lại bài test?')) {
        location.reload();
    }
}