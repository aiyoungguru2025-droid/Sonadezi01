// ==================== AI IMPACT SCORE DATA ====================
// Dữ liệu đánh giá nguy cơ bị AI thay thế cho các nhóm ngành nghề
// V-MENTOR AI 2026

// ==================== AI IMPACT SCORE CALCULATOR ====================
const AIImpactCalculator = {
    
    // Hệ số nguy cơ theo Holland Code
    hollandRiskFactors: {
        'R': 55,  // Realistic - Thực tế (nhiều công việc thủ công có thể tự động hóa)
        'I': 40,  // Investigative - Nghiên cứu (cần tư duy phức tạp)
        'A': 25,  // Artistic - Nghệ thuật (sáng tạo khó thay thế)
        'S': 30,  // Social - Xã hội (tương tác con người quan trọng)
        'E': 45,  // Enterprising - Doanh nghiệp (một số tác vụ có thể tự động)
        'C': 65   // Conventional - Công vụ (nhiều công việc lặp lại)
    },
    
    // Dữ liệu chi tiết theo nhóm ngành
    careerGroupData: {
        // ==================== CÔNG NGHỆ & IT ====================
        'technology': {
            baseScore: 35,
            careers: {
                'software-engineer': {
                    score: 30,
                    reasons: [
                        'AI hỗ trợ coding nhưng chưa thay thế hoàn toàn',
                        'Cần tư duy giải quyết vấn đề phức tạp',
                        'Kiến trúc hệ thống yêu cầu chuyên môn cao'
                    ],
                    survivalTips: [
                        {
                            title: 'Học AI/ML để tận dụng công cụ',
                            description: 'Sử dụng AI như GitHub Copilot để tăng năng suất thay vì coi là đối thủ'
                        },
                        {
                            title: 'Tập trung vào kiến trúc hệ thống',
                            description: 'AI có thể viết code nhưng không thiết kế được hệ thống phức tạp'
                        },
                        {
                            title: 'Phát triển kỹ năng soft skills',
                            description: 'Giao tiếp, làm việc nhóm, quản lý dự án ngày càng quan trọng'
                        }
                    ],
                    skillsToDevelop: [
                        'System Design',
                        'Cloud Architecture',
                        'DevOps & CI/CD',
                        'Security Best Practices',
                        'Leadership & Mentoring'
                    ]
                },
                'data-scientist': {
                    score: 40,
                    reasons: [
                        'AI tự động hóa một số phân tích',
                        'AutoML giảm nhu cầu kỹ năng ML cơ bản',
                        'Cần hiểu biết domain sâu'
                    ],
                    survivalTips: [
                        {
                            title: 'Chuyên sâu vào domain cụ thể',
                            description: 'Trở thành chuyên gia trong lĩnh vực như y tế, tài chính, marketing'
                        },
                        {
                            title: 'Học MLOps và Production ML',
                            description: 'Đưa model vào production là kỹ năng khan hiếm'
                        },
                        {
                            title: 'Kỹ năng storytelling',
                            description: 'Biến dữ liệu phức tạp thành insight dễ hiểu cho business'
                        }
                    ],
                    skillsToDevelop: [
                        'MLOps & Model Deployment',
                        'Advanced Statistics',
                        'Business Acumen',
                        'Data Visualization',
                        'Causal Inference'
                    ]
                },
                'ui-ux-designer': {
                    score: 35,
                    reasons: [
                        'AI tạo design tự động ngày càng tốt',
                        'Cần empathy và hiểu người dùng',
                        'Research và testing khó tự động'
                    ],
                    survivalTips: [
                        {
                            title: 'Tập trung vào UX Research',
                            description: 'Hiểu sâu về hành vi và tâm lý người dùng'
                        },
                        {
                            title: 'Học cách dùng AI tools',
                            description: 'Sử dụng Figma AI, Midjourney để tăng tốc workflow'
                        },
                        {
                            title: 'Strategic Design Thinking',
                            description: 'Giải quyết vấn đề business qua design'
                        }
                    ],
                    skillsToDevelop: [
                        'User Research Methods',
                        'Design Systems',
                        'Accessibility (a11y)',
                        'Design Strategy',
                        'Front-end Basics'
                    ]
                },
                'cybersecurity': {
                    score: 25,
                    reasons: [
                        'Tin tặc cũng dùng AI - cần con người đối phó',
                        'Bảo mật cần tư duy chiến lược',
                        'Nhu cầu ngày càng tăng'
                    ],
                    survivalTips: [
                        {
                            title: 'Học AI Security',
                            description: 'Hiểu cách AI bị tấn công và cách phòng thủ'
                        },
                        {
                            title: 'Chứng chỉ chuyên sâu',
                            description: 'CEH, OSCP, CISSP để chứng minh năng lực'
                        },
                        {
                            title: 'Incident Response',
                            description: 'Xử lý sự cố thực tế là kỹ năng vô giá'
                        }
                    ],
                    skillsToDevelop: [
                        'Penetration Testing',
                        'Threat Intelligence',
                        'Cloud Security',
                        'Zero Trust Architecture',
                        'Compliance & Governance'
                    ]
                }
            }
        },
        
        // ==================== KINH DOANH & MARKETING ====================
        'business': {
            baseScore: 50,
            careers: {
                'marketing': {
                    score: 55,
                    reasons: [
                        'AI tự động hóa ads, email marketing',
                        'Content generation ngày càng tốt',
                        'Cần creativity và hiểu khách hàng'
                    ],
                    survivalTips: [
                        {
                            title: 'Brand Strategy & Positioning',
                            description: 'AI không thể tạo ra brand identity độc đáo'
                        },
                        {
                            title: 'Data-driven Marketing',
                            description: 'Phân tích và tối ưu dựa trên data'
                        },
                        {
                            title: 'Growth Hacking',
                            description: 'Tư duy sáng tạo để tăng trưởng nhanh'
                        }
                    ],
                    skillsToDevelop: [
                        'Marketing Analytics',
                        'Growth Strategy',
                        'Content Strategy',
                        'SEO/SEM Advanced',
                        'Community Building'
                    ]
                },
                'sales': {
                    score: 45,
                    reasons: [
                        'CRM tự động, chatbot hỗ trợ',
                        'Relationship building khó thay thế',
                        'Complex sales cần con người'
                    ],
                    survivalTips: [
                        {
                            title: 'Consultative Selling',
                            description: 'Tư vấn giải pháp thay vì đơn thuần bán hàng'
                        },
                        {
                            title: 'Account Management',
                            description: 'Chăm sóc khách hàng dài hạn'
                        },
                        {
                            title: 'Industry Expertise',
                            description: 'Hiểu sâu về ngành của khách hàng'
                        }
                    ],
                    skillsToDevelop: [
                        'Solution Selling',
                        'Negotiation Mastery',
                        'CRM Platforms',
                        'Sales Analytics',
                        'Executive Presence'
                    ]
                },
                'hr': {
                    score: 50,
                    reasons: [
                        'HR Tech tự động tuyển dụng',
                        'People management cần empathy',
                        'Culture building khó tự động'
                    ],
                    survivalTips: [
                        {
                            title: 'People Analytics',
                            description: 'Sử dụng data để đưa ra quyết định HR'
                        },
                        {
                            title: 'Organizational Development',
                            description: 'Xây dựng văn hóa và cấu trúc tổ chức'
                        },
                        {
                            title: 'Change Management',
                            description: 'Dẫn dắt thay đổi trong tổ chức'
                        }
                    ],
                    skillsToDevelop: [
                        'HR Analytics',
                        'Talent Management',
                        'Employee Experience',
                        'Labor Law',
                        'Coaching & Mentoring'
                    ]
                }
            }
        },
        
        // ==================== Y TẾ & CHĂM SÓC SỨC KHỎE ====================
        'healthcare': {
            baseScore: 35,
            careers: {
                'doctor': {
                    score: 30,
                    reasons: [
                        'AI hỗ trợ chẩn đoán nhưng không thay bác sĩ',
                        'Tương tác bệnh nhân cần empathy',
                        'Quyết định phức tạp, có trách nhiệm cao'
                    ],
                    survivalTips: [
                        {
                            title: 'Học AI trong y khoa',
                            description: 'Sử dụng AI như trợ lý thông minh'
                        },
                        {
                            title: 'Chuyên khoa hẹp',
                            description: 'Trở thành chuyên gia trong lĩnh vực cụ thể'
                        },
                        {
                            title: 'Bedside manner',
                            description: 'Kỹ năng giao tiếp với bệnh nhân'
                        }
                    ],
                    skillsToDevelop: [
                        'AI-assisted Diagnosis',
                        'Evidence-based Medicine',
                        'Patient Communication',
                        'Medical Imaging AI',
                        'Genomic Medicine'
                    ]
                },
                'nurse': {
                    score: 25,
                    reasons: [
                        'Chăm sóc trực tiếp bệnh nhân',
                        'Empathy và quan sát quan trọng',
                        'Linh hoạt trong tình huống khẩn cấp'
                    ],
                    survivalTips: [
                        {
                            title: 'Chuyên môn sâu',
                            description: 'ICU, ER, hoặc chuyên khoa cụ thể'
                        },
                        {
                            title: 'Nurse Practitioner',
                            description: 'Nâng cao vai trò và trách nhiệm'
                        },
                        {
                            title: 'Technology adoption',
                            description: 'Thành thạo công nghệ y tế mới'
                        }
                    ],
                    skillsToDevelop: [
                        'Critical Care',
                        'Patient Assessment',
                        'Medical Devices',
                        'Healthcare IT',
                        'Team Leadership'
                    ]
                },
                'pharmacist': {
                    score: 45,
                    reasons: [
                        'Tự động hóa phân phối thuốc',
                        'Tư vấn thuốc cần chuyên môn',
                        'Kiểm soát tương tác thuốc'
                    ],
                    survivalTips: [
                        {
                            title: 'Clinical Pharmacy',
                            description: 'Tham gia trực tiếp điều trị bệnh nhân'
                        },
                        {
                            title: 'Specialty Pharmacy',
                            description: 'Thuốc đặc biệt, sinh phẩm'
                        },
                        {
                            title: 'MTM Services',
                            description: 'Medication Therapy Management'
                        }
                    ],
                    skillsToDevelop: [
                        'Pharmacogenomics',
                        'Clinical Consultation',
                        'Specialty Medications',
                        'Pharmaceutical Care',
                        'Patient Counseling'
                    ]
                }
            }
        },
        
        // ==================== GIÁO DỤC ====================
        'education': {
            baseScore: 40,
            careers: {
                'teacher': {
                    score: 35,
                    reasons: [
                        'EdTech và AI tutoring phát triển',
                        'Mentor và guidance khó thay thế',
                        'Tương tác xã hội quan trọng'
                    ],
                    survivalTips: [
                        {
                            title: 'Blended Learning',
                            description: 'Kết hợp công nghệ và giảng dạy truyền thống'
                        },
                        {
                            title: 'Personalized Learning',
                            description: 'Tùy chỉnh theo từng học sinh'
                        },
                        {
                            title: 'Socio-emotional Learning',
                            description: 'Phát triển kỹ năng xã hội, cảm xúc'
                        }
                    ],
                    skillsToDevelop: [
                        'Educational Technology',
                        'Differentiated Instruction',
                        'Assessment Design',
                        'Classroom Management',
                        'Curriculum Development'
                    ]
                }
            }
        },
        
        // ==================== NGHỆ THUẬT & SÁNG TẠO ====================
        'creative': {
            baseScore: 30,
            careers: {
                'graphic-designer': {
                    score: 50,
                    reasons: [
                        'AI tạo hình ảnh tự động (Midjourney, DALL-E)',
                        'Branding và creative direction khó thay',
                        'Hiểu client và brief quan trọng'
                    ],
                    survivalTips: [
                        {
                            title: 'AI-augmented Design',
                            description: 'Dùng AI như công cụ, không thay thế'
                        },
                        {
                            title: 'Brand Strategy',
                            description: 'Tư duy chiến lược brand'
                        },
                        {
                            title: 'Motion & 3D',
                            description: 'Mở rộng skillset'
                        }
                    ],
                    skillsToDevelop: [
                        'Brand Identity',
                        'Motion Design',
                        '3D Design',
                        'Creative Direction',
                        'Client Management'
                    ]
                },
                'content-creator': {
                    score: 45,
                    reasons: [
                        'AI tạo content tự động',
                        'Personality và authenticity khó copy',
                        'Community building quan trọng'
                    ],
                    survivalTips: [
                        {
                            title: 'Personal Branding',
                            description: 'Xây dựng brand cá nhân độc đáo'
                        },
                        {
                            title: 'Multi-platform Strategy',
                            description: 'Đa dạng hóa nền tảng'
                        },
                        {
                            title: 'Community First',
                            description: 'Tập trung xây dựng cộng đồng'
                        }
                    ],
                    skillsToDevelop: [
                        'Video Production',
                        'SEO & Analytics',
                        'Social Media Strategy',
                        'Storytelling',
                        'Audience Engagement'
                    ]
                }
            }
        },
        
        // ==================== TÀI CHÍNH & KẾ TOÁN ====================
        'finance': {
            baseScore: 60,
            careers: {
                'accountant': {
                    score: 65,
                    reasons: [
                        'Phần mềm kế toán tự động cao',
                        'Bookkeeping hoàn toàn tự động được',
                        'Advisory và planning khó thay thế'
                    ],
                    survivalTips: [
                        {
                            title: 'Advisory Services',
                            description: 'Chuyển từ ghi sổ sang tư vấn'
                        },
                        {
                            title: 'Tax Planning',
                            description: 'Chiến lược thuế phức tạp'
                        },
                        {
                            title: 'Forensic Accounting',
                            description: 'Điều tra gian lận'
                        }
                    ],
                    skillsToDevelop: [
                        'Financial Analysis',
                        'Tax Strategy',
                        'Business Advisory',
                        'Data Analytics',
                        'Risk Management'
                    ]
                },
                'financial-analyst': {
                    score: 55,
                    reasons: [
                        'Robo-advisors phát triển',
                        'Quantitative analysis tự động hóa',
                        'Judgment và intuition quan trọng'
                    ],
                    survivalTips: [
                        {
                            title: 'Alternative Investments',
                            description: 'PE, VC, crypto, real estate'
                        },
                        {
                            title: 'Industry Specialization',
                            description: 'Chuyên sâu một ngành'
                        },
                        {
                            title: 'Relationship Banking',
                            description: 'Xây dựng quan hệ khách hàng'
                        }
                    ],
                    skillsToDevelop: [
                        'Financial Modeling',
                        'Valuation',
                        'Portfolio Management',
                        'Machine Learning in Finance',
                        'Client Relations'
                    ]
                }
            }
        },
        
        // ==================== VĂN PHÒNG & HÀNH CHÍNH ====================
        'administrative': {
            baseScore: 70,
            careers: {
                'admin-assistant': {
                    score: 75,
                    reasons: [
                        'Nhiều tác vụ lặp lại',
                        'Lịch, email tự động hóa dễ dàng',
                        'Executive assistant còn giá trị'
                    ],
                    survivalTips: [
                        {
                            title: 'Executive Assistant',
                            description: 'Nâng cấp lên vai trò cao hơn'
                        },
                        {
                            title: 'Project Coordination',
                            description: 'Quản lý dự án, không chỉ admin'
                        },
                        {
                            title: 'Tech Savvy',
                            description: 'Thành thạo mọi công cụ số'
                        }
                    ],
                    skillsToDevelop: [
                        'Project Management',
                        'Advanced Excel',
                        'CRM Systems',
                        'Event Planning',
                        'Executive Communication'
                    ]
                },
                'data-entry': {
                    score: 85,
                    reasons: [
                        'OCR và automation rất cao',
                        'RPA (Robotic Process Automation)',
                        'Ít giá trị gia tăng'
                    ],
                    survivalTips: [
                        {
                            title: 'Data Analysis',
                            description: 'Chuyển từ nhập liệu sang phân tích'
                        },
                        {
                            title: 'Learn SQL & Excel',
                            description: 'Trở thành data analyst'
                        },
                        {
                            title: 'Process Automation',
                            description: 'Học cách tự động hóa quy trình'
                        }
                    ],
                    skillsToDevelop: [
                        'SQL',
                        'Excel Advanced',
                        'Data Validation',
                        'RPA Tools',
                        'Data Analysis'
                    ]
                }
            }
        },
        
        // ==================== DỊCH VỤ & KHÁCH SẠN ====================
        'service': {
            baseScore: 55,
            careers: {
                'chef': {
                    score: 40,
                    reasons: [
                        'Robot bếp đang phát triển',
                        'Creativity trong ẩm thực khó thay',
                        'Fine dining cần con người'
                    ],
                    survivalTips: [
                        {
                            title: 'Signature Dishes',
                            description: 'Tạo món ăn độc đáo riêng'
                        },
                        {
                            title: 'Restaurant Management',
                            description: 'Quản lý nhà hàng toàn diện'
                        },
                        {
                            title: 'Farm to Table',
                            description: 'Hiểu nguồn gốc nguyên liệu'
                        }
                    ],
                    skillsToDevelop: [
                        'Menu Development',
                        'Food Cost Management',
                        'Team Leadership',
                        'Culinary Innovation',
                        'Food Safety'
                    ]
                },
                'hotel-manager': {
                    score: 50,
                    reasons: [
                        'Check-in tự động, chatbot',
                        'Guest experience cần con người',
                        'Crisis management quan trọng'
                    ],
                    survivalTips: [
                        {
                            title: 'Luxury Hospitality',
                            description: 'Phân khúc cao cấp cần con người'
                        },
                        {
                            title: 'Revenue Management',
                            description: 'Tối ưu doanh thu'
                        },
                        {
                            title: 'Sustainability',
                            description: 'Quản lý bền vững'
                        }
                    ],
                    skillsToDevelop: [
                        'Revenue Management',
                        'Customer Service Excellence',
                        'Operations Management',
                        'Digital Marketing',
                        'Sustainability Practices'
                    ]
                }
            }
        }
    },
    
    // ==================== HÀM TÍNH TOÁN AI IMPACT ====================
    calculateImpact(career) {
        // 1. Tìm career cụ thể trong database
        for (const groupKey in this.careerGroupData) {
            const group = this.careerGroupData[groupKey];
            if (group.careers[career.id]) {
                return group.careers[career.id];
            }
        }
        
        // 2. Nếu không tìm thấy, tính dựa trên Holland Code
        if (career.hollandCode) {
            const codes = career.hollandCode.split('-');
            const primaryCode = codes[0];
            const baseScore = this.hollandRiskFactors[primaryCode] || 50;
            
            return {
                score: baseScore,
                reasons: [
                    this.getDefaultReason(primaryCode),
                    'Cần cập nhật kỹ năng liên tục',
                    'Xu hướng tự động hóa đang tăng'
                ],
                survivalTips: [
                    {
                        title: 'Học công nghệ mới',
                        description: 'Cập nhật các công cụ AI và automation trong lĩnh vực của bạn'
                    },
                    {
                        title: 'Phát triển soft skills',
                        description: 'Giao tiếp, làm việc nhóm, giải quyết vấn đề phức tạp'
                    },
                    {
                        title: 'Chuyên môn hóa',
                        description: 'Trở thành chuyên gia trong niche cụ thể'
                    }
                ],
                skillsToDevelop: [
                    'Digital Literacy',
                    'Critical Thinking',
                    'Adaptability',
                    'Communication',
                    'Continuous Learning'
                ]
            };
        }
        
        // 3. Default fallback
        return {
            score: 50,
            reasons: [
                'Chưa có đánh giá chi tiết',
                'Nên cập nhật kỹ năng thường xuyên',
                'Theo dõi xu hướng ngành'
            ],
            survivalTips: [
                {
                    title: 'Nâng cao kỹ năng',
                    description: 'Học hỏi liên tục để không bị tụt hậu'
                }
            ],
            skillsToDevelop: [
                'Adaptability',
                'Technology Skills',
                'Problem Solving'
            ]
        };
    },
    
    getDefaultReason(hollandCode) {
        const reasons = {
            'R': 'Công việc thực tế có nhiều tác vụ có thể tự động hóa',
            'I': 'Nghiên cứu cần tư duy phức tạp, khó thay thế',
            'A': 'Sáng tạo nghệ thuật là điểm mạnh của con người',
            'S': 'Tương tác xã hội rất khó để AI thay thế',
            'E': 'Một số tác vụ kinh doanh có thể tự động hóa',
            'C': 'Công việc văn phòng dễ bị tự động hóa'
        };
        return reasons[hollandCode] || 'Cần đánh giá cụ thể theo ngành';
    }
};

// ==================== EXPORT ====================
window.AIImpactCalculator = AIImpactCalculator;

console.log('✅ AI Impact Data & Calculator loaded');
