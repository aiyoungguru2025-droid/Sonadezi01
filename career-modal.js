// ==================== CAREER DETAIL MODAL HANDLER - COMPLETE VERSION ====================

const SUBJECT_MAPPING = {
    'math': 'toan',
    'informatics': 'tin',
    'biology': 'sinh',
    'literature': 'van',
    'english': 'ngoaingu',
    'history': 'lichsu',
    'geography': 'diali',
    'physics': 'vatli',
    'civics': 'gdcd',
    'chemistry': 'hoahoc'
};

const SUBJECT_REVERSE_MAPPING = {
    'toan': 'math',
    'tin': 'informatics',
    'sinh': 'biology',
    'van': 'literature',
    'ngoaingu': 'english',
    'lichsu': 'history',
    'diali': 'geography',
    'vatli': 'physics',
    'gdcd': 'civics',
    'hoahoc': 'chemistry'
};

// ✅ FIXED: Nhận matchScore từ career card
function showCareerDetail(careerId, matchScore = null) {
    const career = careersDatabase[careerId];
    if (!career) {
        console.error('Career not found:', careerId);
        return;
    }
    
    console.log('Opening career modal for:', career.name);
    console.log('Career data:', career);
    console.log('Match score:', matchScore);
    console.log('User data:', userData);
    
    // Get user data from global state
    const userHollandCode = userData.hollandCode || '';
    const userSubjects = userData.subjects || [];
    const userSkills = userData.lifeSkills || {};
    
    // Create modal overlay if doesn't exist
    let modalOverlay = document.getElementById('careerModalOverlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'careerModalOverlay';
        modalOverlay.className = 'modal-overlay';
        document.body.appendChild(modalOverlay);
        
        // Close on overlay click
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeCareerDetail();
            }
        });
    }
    
    // Build modal content
    modalOverlay.innerHTML = `
        <div class="modal-container">
            ${buildModalHeader(career, matchScore)}
            ${buildModalBody(career, userHollandCode, userSubjects, userSkills)}
            ${buildModalCTA(career)}
        </div>
    `;
    
    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCareerDetail() {
    const modalOverlay = document.getElementById('careerModalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ✅ FIXED: Nhận matchScore từ parameter thay vì hard-code
function buildModalHeader(career, matchScore) {
    let finalScore = matchScore;
    
    if (!finalScore) {
        console.warn('Match score not provided, calculating...');
        const matches = typeof calculateMatches === 'function' ? calculateMatches() : [];
        const matchData = matches.find(m => m.id === career.id);
        finalScore = matchData ? matchData.score : 85;
    }
    
    return `
        <div class="modal-header">
            <div class="modal-header-bg" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                <div class="modal-header-overlay">
                    <button class="modal-close-btn" onclick="closeCareerDetail()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="modal-title-section">
                        <span class="modal-icon">${career.icon}</span>
                        <div>
                            <h2 class="modal-title">${career.name}</h2>
                            <p class="modal-subtitle">${career.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Match Score Badge -->
            <div class="match-score-badge">
                <div class="match-score-circle">
                    <div class="match-score-number">${finalScore}%</div>
                    <div class="match-score-label">Phù hợp</div>
                </div>
                <div class="match-score-text">
                    ${getMatchScoreText(finalScore)}
                </div>
            </div>
        </div>
    `;
}

function getMatchScoreText(score) {
    if (score >= 90) return 'Cực kỳ phù hợp với bạn! 🎯';
    if (score >= 80) return 'Rất phù hợp với bạn! ⭐';
    if (score >= 70) return 'Khá phù hợp với bạn! 👍';
    if (score >= 60) return 'Có thể phù hợp với bạn';
    return 'Cần cân nhắc thêm';
}

function buildModalBody(career, userHollandCode, userSubjects, userSkills) {
    // ✨ CẬP NHẬT: Hiển thị AI Explanation + AI Impact Score + Challenges + Success Stories
    return `
        <div class="modal-body">
            ${buildAIExplanation(career, userHollandCode, userSubjects, userSkills)}
            ${buildAIImpactSection(career)}
            ${buildChallengesSection(career)}
            ${buildSuccessStoriesSection(career)}
        </div>
    `;
}

// ==================== AI EXPLANATION SECTION ====================
function buildAIExplanation(career, userHollandCode, userSubjects, userSkills) {
    const reasons = generateReasons(career, userHollandCode, userSubjects, userSkills);
    
    if (reasons.length === 0) {
        return '';
    }
    
    return `
        <div class="ai-explanation-section">
            <div class="ai-explanation-header">
                <div class="ai-icon">🤖</div>
                <div class="ai-title">
                    <h3>Tại sao AI gợi ý ngành này cho bạn?</h3>
                    <p>Dựa trên phân tích kết quả trắc nghiệm của bạn</p>
                </div>
            </div>
            
            <div class="ai-reasons-grid">
                ${reasons.map(reason => `
                    <div class="ai-reason-card ${reason.type}">
                        <div class="reason-icon">${reason.icon}</div>
                        <div class="reason-content">
                            <div class="reason-title">${reason.title}</div>
                            <div class="reason-desc">${reason.description}</div>
                            ${reason.details ? `
                                <div class="reason-details">
                                    ${reason.details.map(d => `
                                        <span class="detail-badge">${d}</span>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                        <div class="reason-score">${reason.score}%</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateReasons(career, userHollandCode, userSubjects, userSkills) {
    const reasons = [];
    
    // 1. HOLLAND CODE MATCHING
    if (career.hollandCode && userHollandCode) {
        const careerCodes = career.hollandCode.split('-');
        const matched = [];
        let score = 0;
        
        careerCodes.forEach((code, idx) => {
            if (userHollandCode.includes(code)) {
                matched.push(code);
                score += (idx === 0) ? 60 : 30;
            }
        });
        
        if (matched.length > 0) {
            const hollandNames = {
                'R': 'Thực tế',
                'I': 'Nghiên cứu',
                'A': 'Nghệ thuật',
                'S': 'Xã hội',
                'E': 'Doanh nghiệp',
                'C': 'Công vụ'
            };
            
            const matchedNames = matched.map(code => hollandNames[code]);
            
            reasons.push({
                type: 'holland',
                icon: '🎨',
                title: 'Tính cách phù hợp',
                description: `Mã Holland của bạn (${userHollandCode}) khớp với yêu cầu ngành này`,
                details: matchedNames,
                score: Math.min(100, score)
            });
        }
    }
    
    // 2. SUBJECT MATCHING
    if (career.requiredSubjects && career.requiredSubjects.length > 0 && userSubjects.length > 0) {
        const userSubjectsVN = userSubjects.map(s => SUBJECT_MAPPING[s] || s);
        const matched = career.requiredSubjects.filter(sub => userSubjectsVN.includes(sub));
        
        if (matched.length > 0) {
            const SUBJECTS = {
                'toan': { name: 'Toán', icon: '🔢' },
                'tin': { name: 'Tin học', icon: '💻' },
                'sinh': { name: 'Sinh học', icon: '🧬' },
                'van': { name: 'Ngữ văn', icon: '📚' },
                'ngoaingu': { name: 'Ngoại ngữ', icon: '🌍' },
                'lichsu': { name: 'Lịch sử', icon: '📜' },
                'diali': { name: 'Địa lý', icon: '🗺️' },
                'vatli': { name: 'Vật lý', icon: '⚡' },
                'gdcd': { name: 'GDCD', icon: '⚖️' },
                'hoahoc': { name: 'Hóa học', icon: '🧪' }
            };
            
            const matchedNames = matched.map(id => {
                const subject = SUBJECTS[id];
                return subject ? `${subject.icon} ${subject.name}` : id;
            });
            
            const matchRatio = matched.length / career.requiredSubjects.length;
            let score;
            if (matchRatio >= 1.0) score = 100;
            else if (matchRatio >= 0.75) score = 85;
            else if (matchRatio >= 0.5) score = 70;
            else score = 50;
            
            reasons.push({
                type: 'subject',
                icon: '📚',
                title: 'Năng lực môn học mạnh',
                description: `Bạn tự tin với ${matched.length}/${career.requiredSubjects.length} môn học cần thiết`,
                details: matchedNames,
                score: score
            });
        }
    }
    
    // 3. EDUCATION LEVEL MATCHING
    if (userData.educationSystem) {
        const eduMatch = calculateEducationMatch(career, userData.educationSystem);
        
        if (eduMatch.score >= 80) {
            reasons.push({
                type: 'education',
                icon: '🎓',
                title: 'Hệ đào tạo phù hợp',
                description: eduMatch.description,
                details: null,
                score: eduMatch.score
            });
        }
    }
    
    reasons.sort((a, b) => b.score - a.score);
    return reasons;
}

function calculateEducationMatch(career, userEdu) {
    const hasUniversity = career.universities && career.universities.length > 0;
    const hasVocational = career.vocationalSchools && career.vocationalSchools.length > 0;
    
    if (userEdu === 'both') {
        return { score: 100, description: 'Bạn mở để xem xét cả hai hệ đào tạo' };
    }
    
    if (userEdu === 'university' && hasUniversity) {
        return { score: 100, description: 'Phù hợp với hệ Đại học bạn đã chọn' };
    }
    
    if (userEdu === 'vocational' && hasVocational) {
        return { score: 100, description: 'Phù hợp với hệ Cao đẳng/Trung cấp bạn đã chọn' };
    }
    
    if (hasUniversity && hasVocational) {
        return { score: 90, description: 'Ngành này phù hợp với cả hai hệ đào tạo' };
    }
    
    return { score: 70, description: 'Có thể phù hợp với lựa chọn của bạn' };
}

// ==================== ✨ NEW: CHALLENGES SECTION ====================
function buildChallengesSection(career) {
    if (!career.challenges || career.challenges.length === 0) {
        return '';
    }
    
    return `
        <div class="ai-explanation-section" style="background: linear-gradient(135deg, #fef2f2, #fee2e2); border-color: #fecaca;">
            <div class="ai-explanation-header" style="border-color: #fecaca;">
                <div class="ai-icon">⚠️</div>
                <div class="ai-title">
                    <h3 style="color: #991b1b;">Thử thách của ngành nghề</h3>
                    <p>Những khó khăn bạn có thể gặp phải</p>
                </div>
            </div>
            
            <div class="challenges-list">
                ${career.challenges.map(challenge => `
                    <div class="challenge-item">
                        <i class="fas fa-exclamation-triangle"></i>
                        <div class="challenge-text">${challenge}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ==================== ✨ NEW: SUCCESS STORIES SECTION ====================
function buildSuccessStoriesSection(career) {
    if (!career.successStories || career.successStories.length === 0) {
        return '';
    }
    
    return `
        <div class="ai-explanation-section" style="background: linear-gradient(135deg, #fef3c7, #fed6e3); border-color: #fde68a;">
            <div class="ai-explanation-header" style="border-color: #fde68a;">
                <div class="ai-icon">🏆</div>
                <div class="ai-title">
                    <h3 style="color: #92400e;">Câu chuyện thành công</h3>
                    <p>Những người đã thành công trong ngành này</p>
                </div>
            </div>
            
            <div class="success-stories">
                ${career.successStories.map(story => `
                    <div class="success-story">
                        <i class="fas fa-star"></i>
                        <div class="success-story-text">${story}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function buildModalCTA(career) {
    return `
        <div class="modal-cta">
            <button class="cta-btn cta-btn-primary" onclick="closeCareerDetail()">
                <i class="fas fa-check-circle"></i>
                Đã hiểu
            </button>
            <button class="cta-btn cta-btn-secondary" onclick="closeCareerDetail()">
                <i class="fas fa-arrow-left"></i>
                Xem thêm ngành khác
            </button>
        </div>
    `;
}



// ==================== ✨ NEW: AI IMPACT SCORE SECTION ====================
function buildAIImpactSection(career) {
    if (!career.aiImpact) {
        return '';
    }
    
    const impact = career.aiImpact;
    const riskLevel = impact.score < 30 ? 'low' : impact.score < 60 ? 'medium' : 'high';
    const riskLabel = riskLevel === 'low' ? 'Nguy cơ thấp' : 
                      riskLevel === 'medium' ? 'Nguy cơ trung bình' : 'Nguy cơ cao';
    const riskDescription = riskLevel === 'low' ? 
        'Ngành nghề này ít có khả năng bị AI thay thế trong tương lai gần. Tuy nhiên, bạn vẫn nên cập nhật kỹ năng thường xuyên.' :
        riskLevel === 'medium' ?
        'Một số công việc trong ngành có thể bị tự động hóa. Hãy tập trung phát triển kỹ năng mà AI khó thay thế.' :
        'Ngành nghề này có nguy cơ cao bị AI thay thế. Bạn cần chuẩn bị kỹ năng đặc biệt để cạnh tranh.';
    
    return `
        <div class="ai-impact-section">
            <div class="ai-impact-header">
                <div class="ai-impact-icon">🤖</div>
                <div class="ai-impact-title">
                    <h3>Đánh giá nguy cơ bị AI thay thế</h3>
                    <p>Phân tích dựa trên xu hướng công nghệ và thị trường lao động</p>
                </div>
            </div>
            
            <div class="ai-impact-meter">
                <div class="impact-score-display">
                    <div class="impact-score-circle ${riskLevel}">
                        <div class="impact-percentage">${impact.score}%</div>
                        <div class="impact-label">Nguy cơ</div>
                    </div>
                    <div class="impact-score-info">
                        <div class="impact-risk-level ${riskLevel}">${riskLabel}</div>
                        <div class="impact-description">${riskDescription}</div>
                    </div>
                </div>
                
                <div class="impact-progress-container">
                    <div class="impact-progress-label">
                        <span class="progress-title">Mức độ tự động hóa</span>
                        <span class="progress-value ${riskLevel}">${impact.score}%</span>
                    </div>
                    <div class="impact-progress-bar">
                        <div class="impact-progress-fill ${riskLevel}" style="width: ${impact.score}%"></div>
                    </div>
                </div>
                
                ${impact.reasons && impact.reasons.length > 0 ? `
                    <div class="impact-indicators">
                        ${impact.reasons.slice(0, 3).map((reason, idx) => `
                            <div class="impact-indicator">
                                <div class="indicator-icon">${['⚡', '🎯', '📊'][idx]}</div>
                                <div class="indicator-label">Yếu tố ${idx + 1}</div>
                                <div class="indicator-value ${riskLevel}">${reason}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            
            ${impact.survivalTips && impact.survivalTips.length > 0 ? `
                <div class="ai-survival-tips">
                    <div class="survival-tips-title">
                        <i class="fas fa-lightbulb"></i>
                        Làm thế nào để "sống sót" với AI?
                    </div>
                    <div class="survival-tips-list">
                        ${impact.survivalTips.map(tip => `
                            <div class="survival-tip-item">
                                <div class="tip-icon">💡</div>
                                <div class="tip-content">
                                    <div class="tip-title">${tip.title || tip}</div>
                                    ${tip.description ? `<div class="tip-description">${tip.description}</div>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${impact.skillsToDevelop && impact.skillsToDevelop.length > 0 ? `
                <div class="skills-to-develop">
                    <div class="skills-header">
                        <i class="fas fa-rocket"></i>
                        Kỹ năng cần phát triển
                    </div>
                    <div class="skills-grid">
                        ${impact.skillsToDevelop.map(skill => `
                            <div class="skill-item">
                                <i class="fas fa-check-circle"></i>
                                <div class="skill-name">${skill}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// ==================== ✨ NEW: AI IMPACT SCORE SECTION ====================
function buildAIImpactSection(career) {
    try {
        // Validate career object
        if (!career) {
            console.warn('[AI Impact] No career provided');
            return '';
        }
        
        let impact = null;
        
        // Try to get AI Impact data
        if (career.aiImpact && typeof career.aiImpact.score === 'number') {
            impact = career.aiImpact;
        } else if (typeof window.AIImpactCalculator !== 'undefined') {
            try {
                impact = window.AIImpactCalculator.calculateImpact(career);
            } catch (calcError) {
                console.error('[AI Impact] Calculator error:', calcError);
            }
        }
        
        // Return empty if no data
        if (!impact || typeof impact.score !== 'number') {
            console.info('[AI Impact] No data for:', career.id || career.name);
            return '';
        }
        
        // Validate score range
        if (impact.score < 0 || impact.score > 100) {
            console.warn('[AI Impact] Invalid score:', impact.score);
            impact.score = Math.max(0, Math.min(100, impact.score));
        }
        
        // Calculate risk level
        const riskLevel = impact.score < 30 ? 'low' : 
                          impact.score < 60 ? 'medium' : 'high';
        
        const riskLabel = riskLevel === 'low' ? 'Nguy cơ thấp' : 
                          riskLevel === 'medium' ? 'Nguy cơ trung bình' : 
                          'Nguy cơ cao';
        
        const riskDescription = riskLevel === 'low' ? 
            'Ngành nghề này ít có khả năng bị AI thay thế trong tương lai gần.' :
            riskLevel === 'medium' ?
            'Một số công việc trong ngành có thể bị tự động hóa. Hãy tập trung phát triển kỹ năng mà AI khó thay thế.' :
            'Ngành nghề này có nguy cơ cao bị AI thay thế. Bạn cần chuẩn bị kỹ năng đặc biệt để cạnh tranh.';
        
        // Rest of your existing code to build the HTML...
        return `
            <div class="ai-impact-section">
                <!-- Your existing HTML template -->
            </div>
        `;
        
    } catch (error) {
        console.error('[AI Impact] Unexpected error:', error);
        return ''; // Graceful degradation - don't crash the modal
    }
}

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCareerDetail();
    }
});

console.log('✅ Career Modal with AI Explanation, Challenges & Success Stories loaded');