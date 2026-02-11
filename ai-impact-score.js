// ==================== AI IMPACT SCORE SYSTEM ====================
// Hệ thống đánh giá nguy cơ bị AI thay thế - V-MENTOR AI 2026

// ==================== AI IMPACT DATA ====================
const AI_IMPACT_DATABASE = {
    // ========== NGÀNH CÔNG NGHỆ ==========
    'software-engineer': {
        impactScore: 45,
        riskLevel: 'medium',
        automation: 50,
        creativity: 70,
        humanTouch: 30,
        description: 'AI đang hỗ trợ lập trình nhưng chưa thể thay thế hoàn toàn',
        survivalTips: [
            {
                icon: '🎯',
                title: 'Tập trung vào kiến trúc hệ thống',
                description: 'AI có thể viết code nhưng chưa thể thiết kế kiến trúc phức tạp'
            },
            {
                icon: '🧠',
                title: 'Phát triển tư duy giải quyết vấn đề',
                description: 'Khả năng phân tích và đưa ra giải pháp là điều AI khó thay thế'
            },
            {
                icon: '🤝',
                title: 'Kỹ năng làm việc nhóm',
                description: 'Giao tiếp và quản lý dự án là điểm mạnh của con người'
            }
        ],
        skillsToDevelop: [
            'AI/ML Integration',
            'Cloud Architecture',
            'Soft Skills',
            'Product Thinking',
            'Leadership',
            'Business Analysis'
        ],
        futureOutlook: [
            {
                year: '2026',
                title: 'AI làm coding assistant',
                description: 'AI giúp viết code nhanh hơn, dev tập trung vào logic'
            },
            {
                year: '2028',
                title: 'Tăng năng suất 3x',
                description: 'Dev làm việc với AI, không lo bị thay thế'
            },
            {
                year: '2030',
                title: 'Vai trò mới: AI Orchestrator',
                description: 'Lập trình viên trở thành người điều phối AI'
            }
        ]
    },

    'data-analyst': {
        impactScore: 55,
        riskLevel: 'medium',
        automation: 60,
        creativity: 60,
        humanTouch: 40,
        description: 'Phân tích dữ liệu cơ bản dễ bị tự động hóa, nhưng insight sâu vẫn cần con người',
        survivalTips: [
            {
                icon: '📊',
                title: 'Storytelling với data',
                description: 'Biến số liệu thành câu chuyện thuyết phục stakeholders'
            },
            {
                icon: '🎯',
                title: 'Business acumen',
                description: 'Hiểu sâu về business để đưa ra insights có giá trị'
            },
            {
                icon: '🔮',
                title: 'Predictive analytics',
                description: 'Dự đoán xu hướng và đưa ra khuyến nghị chiến lược'
            }
        ],
        skillsToDevelop: [
            'Machine Learning',
            'Business Intelligence',
            'Communication',
            'Domain Expertise',
            'Strategic Thinking',
            'Data Visualization'
        ],
        futureOutlook: [
            {
                year: '2026',
                title: 'AI tự động báo cáo',
                description: 'Các báo cáo cơ bản được tự động hóa'
            },
            {
                year: '2028',
                title: 'Analyst = Strategist',
                description: 'Chuyển sang vai trò tư vấn chiến lược dữ liệu'
            },
            {
                year: '2030',
                title: 'Data Storyteller',
                description: 'Tập trung vào insights và decision making'
            }
        ]
    },

    // ========== NGÀNH SÁNG TẠO ==========
    'graphic-designer': {
        impactScore: 35,
        riskLevel: 'low',
        automation: 40,
        creativity: 85,
        humanTouch: 75,
        description: 'AI có thể tạo design nhưng thiếu insight về brand và cảm xúc người dùng',
        survivalTips: [
            {
                icon: '🎨',
                title: 'Brand thinking',
                description: 'Hiểu sâu về thương hiệu và storytelling'
            },
            {
                icon: '💡',
                title: 'UX/UI chuyên sâu',
                description: 'Tập trung vào trải nghiệm người dùng, không chỉ làm đẹp'
            },
            {
                icon: '🚀',
                title: 'Làm chủ AI tools',
                description: 'Sử dụng AI như assistant, tăng năng suất 10x'
            }
        ],
        skillsToDevelop: [
            'AI Tools (Midjourney, DALL-E)',
            'UX Research',
            'Brand Strategy',
            'Motion Design',
            '3D Design',
            'Creative Direction'
        ],
        futureOutlook: [
            {
                year: '2026',
                title: 'AI = Design Assistant',
                description: 'Designer dùng AI tạo mockup nhanh chóng'
            },
            {
                year: '2028',
                title: 'Tăng output 5x',
                description: 'Một designer làm việc của cả team nhờ AI'
            },
            {
                year: '2030',
                title: 'Creative Strategist',
                description: 'Designer tập trung vào strategy và concept'
            }
        ]
    },

    'content-writer': {
        impactScore: 50,
        riskLevel: 'medium',
        automation: 65,
        creativity: 75,
        humanTouch: 70,
        description: 'AI viết được content cơ bản nhưng thiếu cảm xúc và insight sâu',
        survivalTips: [
            {
                icon: '✍️',
                title: 'Storytelling chuyên sâu',
                description: 'Kể chuyện có cảm xúc, kết nối với độc giả'
            },
            {
                icon: '🎯',
                title: 'Subject matter expert',
                description: 'Trở thành chuyên gia trong lĩnh vực cụ thể'
            },
            {
                icon: '🤖',
                title: 'AI-human collaboration',
                description: 'Dùng AI viết draft, con người polish và add value'
            }
        ],
        skillsToDevelop: [
            'SEO Strategy',
            'Copywriting',
            'Personal Branding',
            'Video Script',
            'Podcast Production',
            'Content Strategy'
        ],
        futureOutlook: [
            {
                year: '2026',
                title: 'AI viết draft',
                description: 'Writer dùng AI tạo outline và draft nhanh'
            },
            {
                year: '2028',
                title: 'Focus on quality',
                description: 'Tập trung vào content chất lượng cao, có depth'
            },
            {
                year: '2030',
                title: 'Content Strategist',
                description: 'Chuyển sang vai trò chiến lược nội dung'
            }
        ]
    },

    // ========== NGÀNH Y TẾ ==========
    'doctor': {
        impactScore: 20,
        riskLevel: 'low',
        automation: 30,
        creativity: 50,
        humanTouch: 95,
        description: 'AI hỗ trợ chẩn đoán nhưng không thể thay thế sự đồng cảm và judgment của bác sĩ',
        survivalTips: [
            {
                icon: '❤️',
                title: 'Empathy & bedside manner',
                description: 'Kỹ năng giao tiếp và đồng cảm với bệnh nhân'
            },
            {
                icon: '🧠',
                title: 'Clinical judgment',
                description: 'Khả năng đưa ra quyết định trong tình huống phức tạp'
            },
            {
                icon: '🔬',
                title: 'Học AI trong y tế',
                description: 'Sử dụng AI tools để chẩn đoán chính xác hơn'
            }
        ],
        skillsToDevelop: [
            'AI-assisted Diagnosis',
            'Telemedicine',
            'Patient Communication',
            'Research Skills',
            'Leadership',
            'Digital Health'
        ],
        futureOutlook: [
            {
                year: '2026',
                title: 'AI assistant bác sĩ',
                description: 'AI hỗ trợ đọc X-ray, CT scan chính xác hơn'
            },
            {
                year: '2028',
                title: 'Personalized medicine',
                description: 'Bác sĩ dùng AI để điều trị cá nhân hóa'
            },
            {
                year: '2030',
                title: 'Human + AI team',
                description: 'Bác sĩ làm việc cùng AI, không bị thay thế'
            }
        ]
    },

    'nurse': {
        impactScore: 15,
        riskLevel: 'low',
        automation: 25,
        creativity: 40,
        humanTouch: 98,
        description: 'Chăm sóc bệnh nhân cần sự đồng cảm và chạm, AI không thể thay thế',
        survivalTips: [
            {
                icon: '💗',
                title: 'Patient care excellence',
                description: 'Chăm sóc bệnh nhân tận tâm và chuyên nghiệp'
            },
            {
                icon: '📱',
                title: 'Digital health literacy',
                description: 'Sử dụng thành thạo công nghệ y tế mới'
            },
            {
                icon: '👥',
                title: 'Team leadership',
                description: 'Phát triển kỹ năng lãnh đạo và quản lý'
            }
        ],
        skillsToDevelop: [
            'Advanced Care Skills',
            'Health Tech',
            'Patient Advocacy',
            'Crisis Management',
            'Specialized Nursing',
            'Education & Training'
        ],
        futureOutlook: [
            {
                year: '2026',
                title: 'Tech-savvy nurses',
                description: 'Y tá sử dụng thiết bị giám sát thông minh'
            },
            {
                year: '2028',
                title: 'Specialized care',
                description: 'Chuyên sâu vào các lĩnh vực chăm sóc đặc biệt'
            },
            {
                year: '2030',
                title: 'Essential role',
                description: 'Y tá vẫn là trụ cột không thể thay thế'
            }
        ]
    },

    // ========== NGÀNH KINH DOANH ==========
    'accountant': {
        impactScore: 70,
        riskLevel: 'high',
        automation: 80,
        creativity: 30,
        humanTouch: 35,
        description: 'Kế toán cơ bản dễ bị tự động hóa, cần chuyển sang tư vấn tài chính',
        survivalTips: [
            {
                icon: '💼',
                title: 'Tư vấn tài chính chiến lược',
                description: 'Chuyển từ ghi sổ sang tư vấn cho CEO'
            },
            {
                icon: '🔍',
                title: 'Forensic accounting',
                description: 'Chuyên về kiểm toán, phát hiện gian lận'
            },
            {
                icon: '📊',
                title: 'Data analytics',
                description: 'Phân tích dữ liệu tài chính để ra quyết định'
            }
        ],
        skillsToDevelop: [
            'Financial Strategy',
            'Data Analytics',
            'Audit & Compliance',
            'Business Advisory',
            'Tax Planning',
            'Technology Integration'
        ],
        futureOutlook: [
            {
                year: '2026',
                title: 'AI làm bookkeeping',
                description: 'Công việc ghi sổ hoàn toàn tự động'
            },
            {
                year: '2028',
                title: 'Accountant = Advisor',
                description: 'Kế toán viên trở thành cố vấn tài chính'
            },
            {
                year: '2030',
                title: 'Strategic role',
                description: 'Tập trung vào chiến lược và compliance'
            }
        ]
    },

    'marketing': {
        impactScore: 40,
        riskLevel: 'medium',
        automation: 50,
        creativity: 80,
        humanTouch: 65,
        description: 'AI tự động hóa marketing cơ bản, nhưng strategy và creativity vẫn cần con người',
        survivalTips: [
            {
                icon: '🎯',
                title: 'Brand strategy',
                description: 'Xây dựng chiến lược thương hiệu dài hạn'
            },
            {
                icon: '📱',
                title: 'Growth hacking',
                description: 'Sử dụng data và creativity để tăng trưởng nhanh'
            },
            {
                icon: '🤖',
                title: 'Marketing automation',
                description: 'Làm chủ các công cụ automation và AI'
            }
        ],
        skillsToDevelop: [
            'AI Marketing Tools',
            'Data-Driven Marketing',
            'Brand Management',
            'Content Strategy',
            'Growth Marketing',
            'Customer Psychology'
        ],
        futureOutlook: [
            {
                year: '2026',
                title: 'AI personalization',
                description: 'AI cá nhân hóa nội dung cho từng khách hàng'
            },
            {
                year: '2028',
                title: 'Marketer = Strategist',
                description: 'Tập trung vào chiến lược và creative direction'
            },
            {
                year: '2030',
                title: 'Human insight wins',
                description: 'Understanding khách hàng là lợi thế cạnh tranh'
            }
        ]
    },

    // ========== NGÀNH GIÁO DỤC ==========
    'teacher': {
        impactScore: 25,
        riskLevel: 'low',
        automation: 35,
        creativity: 70,
        humanTouch: 92,
        description: 'AI hỗ trợ giảng dạy nhưng không thể thay thế sự truyền cảm hứng của giáo viên',
        survivalTips: [
            {
                icon: '💡',
                title: 'Mentorship & inspiration',
                description: 'Truyền cảm hứng và định hướng cho học sinh'
            },
            {
                icon: '🎓',
                title: 'Personalized learning',
                description: 'Dùng AI để cá nhân hóa việc học cho từng em'
            },
            {
                icon: '🌟',
                title: 'Soft skills coaching',
                description: 'Dạy kỹ năng mềm mà AI không dạy được'
            }
        ],
        skillsToDevelop: [
            'EdTech Integration',
            'Online Teaching',
            'Student Psychology',
            'Curriculum Design',
            'Assessment Innovation',
            'Digital Literacy'
        ],
        futureOutlook: [
            {
                year: '2026',
                title: 'AI teaching assistant',
                description: 'AI hỗ trợ chấm bài và giải đáp thắc mắc'
            },
            {
                year: '2028',
                title: 'Teacher = Coach',
                description: 'Giáo viên trở thành coach phát triển toàn diện'
            },
            {
                year: '2030',
                title: 'Irreplaceable role',
                description: 'Vai trò truyền cảm hứng không thể thay thế'
            }
        ]
    },

    // ========== DEFAULT (cho các ngành chưa có data) ==========
    'default': {
        impactScore: 45,
        riskLevel: 'medium',
        automation: 50,
        creativity: 60,
        humanTouch: 50,
        description: 'AI đang thay đổi ngành nghề này, cần thích nghi và học hỏi',
        survivalTips: [
            {
                icon: '📚',
                title: 'Học liên tục',
                description: 'Cập nhật kiến thức về AI và công nghệ mới'
            },
            {
                icon: '🤝',
                title: 'Phát triển soft skills',
                description: 'Kỹ năng mềm là điều AI khó thay thế'
            },
            {
                icon: '🚀',
                title: 'Đổi mới sáng tạo',
                description: 'Tìm cách áp dụng công nghệ vào công việc'
            }
        ],
        skillsToDevelop: [
            'Digital Literacy',
            'Critical Thinking',
            'Adaptability',
            'Communication',
            'Problem Solving',
            'Emotional Intelligence'
        ],
        futureOutlook: [
            {
                year: '2026',
                title: 'AI Integration',
                description: 'AI bắt đầu hỗ trợ trong công việc'
            },
            {
                year: '2028',
                title: 'Adaptation Phase',
                description: 'Thích nghi với cách làm việc mới'
            },
            {
                year: '2030',
                title: 'New Opportunities',
                description: 'Vai trò mới xuất hiện cùng AI'
            }
        ]
    }
};

// ==================== HELPER FUNCTIONS ====================

/**
 * Get AI impact data for a career
 */
function getAIImpactData(careerId) {
    // Normalize career ID
    const normalizedId = careerId.toLowerCase().replace(/\s+/g, '-');
    
    // Return data or default
    return AI_IMPACT_DATABASE[normalizedId] || AI_IMPACT_DATABASE['default'];
}

/**
 * Get risk level text in Vietnamese
 */
function getRiskLevelText(riskLevel) {
    const levels = {
        'low': 'Nguy cơ thấp',
        'medium': 'Nguy cơ trung bình',
        'high': 'Nguy cơ cao'
    };
    return levels[riskLevel] || 'Chưa xác định';
}

/**
 * Get risk level emoji
 */
function getRiskLevelEmoji(riskLevel) {
    const emojis = {
        'low': '✅',
        'medium': '⚠️',
        'high': '🚨'
    };
    return emojis[riskLevel] || '❓';
}

/**
 * Build AI Impact Section HTML
 */
function buildAIImpactSection(career) {
    const impactData = getAIImpactData(career.id);
    
    return `
        <div class="ai-impact-section">
            <div class="ai-impact-header">
                <div class="ai-impact-icon">🤖</div>
                <div class="ai-impact-title">
                    <h3>Nguy cơ bị AI thay thế</h3>
                    <p>Đánh giá tác động của AI đến ngành nghề này đến năm 2030</p>
                </div>
            </div>
            
            <!-- AI Impact Meter -->
            <div class="ai-impact-meter">
                <div class="impact-score-display">
                    <div class="impact-score-circle ${impactData.riskLevel}">
                        <div class="impact-percentage">${impactData.impactScore}%</div>
                        <div class="impact-label">Nguy cơ</div>
                    </div>
                    <div class="impact-score-info">
                        <div class="impact-risk-level ${impactData.riskLevel}">
                            ${getRiskLevelEmoji(impactData.riskLevel)} ${getRiskLevelText(impactData.riskLevel)}
                        </div>
                        <div class="impact-description">${impactData.description}</div>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="impact-progress-container">
                    <div class="impact-progress-label">
                        <span class="progress-title">Mức độ ảnh hưởng của AI</span>
                        <span class="progress-value ${impactData.riskLevel}">${impactData.impactScore}%</span>
                    </div>
                    <div class="impact-progress-bar">
                        <div class="impact-progress-fill ${impactData.riskLevel}" style="width: ${impactData.impactScore}%"></div>
                    </div>
                </div>
                
                <!-- Risk Indicators -->
                <div class="impact-indicators">
                    <div class="impact-indicator">
                        <div class="indicator-icon">🤖</div>
                        <div class="indicator-label">Tự động hóa</div>
                        <div class="indicator-value ${getRiskClass(impactData.automation)}">${impactData.automation}%</div>
                    </div>
                    <div class="impact-indicator">
                        <div class="indicator-icon">🎨</div>
                        <div class="indicator-label">Sáng tạo</div>
                        <div class="indicator-value ${getRiskClass(100 - impactData.creativity)}">${impactData.creativity}%</div>
                    </div>
                    <div class="impact-indicator">
                        <div class="indicator-icon">❤️</div>
                        <div class="indicator-label">Yếu tố con người</div>
                        <div class="indicator-value ${getRiskClass(100 - impactData.humanTouch)}">${impactData.humanTouch}%</div>
                    </div>
                </div>
            </div>
            
            <!-- Survival Tips -->
            <div class="ai-survival-tips">
                <div class="survival-tips-title">
                    <i class="fas fa-lightbulb"></i>
                    Làm sao để không bị AI thay thế?
                </div>
                <div class="survival-tips-list">
                    ${impactData.survivalTips.map(tip => `
                        <div class="survival-tip-item">
                            <div class="tip-icon">${tip.icon}</div>
                            <div class="tip-content">
                                <div class="tip-title">${tip.title}</div>
                                <div class="tip-description">${tip.description}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Skills to Develop -->
            <div class="skills-to-develop">
                <div class="skills-header">
                    <i class="fas fa-rocket"></i>
                    Kỹ năng cần phát triển
                </div>
                <div class="skills-grid">
                    ${impactData.skillsToDevelop.map(skill => `
                        <div class="skill-item">
                            <i class="fas fa-check-circle"></i>
                            <span class="skill-name">${skill}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Future Outlook -->
            <div class="future-outlook">
                <div class="outlook-header">
                    <i class="fas fa-chart-line"></i>
                    Triển vọng tương lai
                </div>
                <div class="outlook-timeline">
                    ${impactData.futureOutlook.map(item => `
                        <div class="timeline-item">
                            <div class="timeline-year">${item.year}</div>
                            <div class="timeline-content">
                                <div class="timeline-title">${item.title}</div>
                                <div class="timeline-description">${item.description}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

/**
 * Helper: Get risk class based on percentage
 */
function getRiskClass(percentage) {
    if (percentage >= 70) return 'high';
    if (percentage >= 40) return 'medium';
    return 'low';
}

console.log('✅ AI Impact Score System loaded with', Object.keys(AI_IMPACT_DATABASE).length, 'careers');
