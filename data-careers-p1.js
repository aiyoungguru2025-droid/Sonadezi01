// ==================== DATABASE 120+ NGÀNH NGHỀ ====================
// PHẦN 1: 30 NGÀNH ĐẦU TIÊN (MỞ RỘNG TỪ 24 → 120+)
// ===================================================================

const careersDatabase = {
    
    // ==================== CÔNG NGHỆ (15 NGÀNH) ====================
    
    'it-software': {
        id: 'it-software',
        name: 'Công nghệ Thông tin & Phần mềm',
        icon: '💻',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
        category: 'tech',
        hollandCode: 'I-R',
        requiredSubjects :['toan', 'tin', 'ngoaingu', 'vatli'],
        description: 'Lập trình, phát triển phần mềm, AI, Machine Learning',
        detailedDesc: 'Ngành IT đào tạo các chuyên gia về phát triển phần mềm, ứng dụng web/mobile, AI/ML, Big Data. Là ngành hot nhất hiện nay với mức lương cao, cơ hội việc làm rộng mở tại VN và quốc tế.',
        
        universities: [
            { name: 'ĐH Bách Khoa TP.HCM', score: '28-30', combo: 'A00, A01', tuition: '15-20tr/năm' },
            { name: 'ĐH Công nghệ - ĐH Quốc gia HN', score: '27-29', combo: 'A00, A01', tuition: '12-18tr/năm' },
            { name: 'ĐH FPT', score: '22-25', combo: 'A00, D01', tuition: '60-70tr/năm' },
            { name: 'ĐH KHTN TP.HCM', score: '26-28', combo: 'A00', tuition: '10-15tr/năm' },
            { name: 'ĐH Tôn Đức Thắng', score: '24-26', combo: 'A00, A01', tuition: '18-25tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ FPT Polytechnic', duration: '2.5 năm', cost: '20-25tr/năm', strength: 'Thực hành cao, liên kết DN' },
            { name: 'CĐ Cao Thắng', duration: '3 năm', cost: '15-20tr/năm', strength: 'Cơ sở vật chất tốt' },
            { name: 'CĐ Công nghệ Thủ Đức', duration: '2.5 năm', cost: '12-18tr/năm', strength: 'Học phí hợp lý' }
        ],
        
        admissionScore: {
            university: '25-30 điểm',
            subjects: 'Toán, Lý, Anh (A00) hoặc Toán, Văn, Anh (D01)'
        },
        
        salary: {
            entry: '10-18 triệu/tháng (Fresher)',
            mid: '25-50 triệu/tháng (3-5 năm)',
            senior: '60-150+ triệu/tháng (5+ năm, Tech Lead/Architect)',
            note: 'Công ty nước ngoài trả lương cao hơn 30-50%'
        },
        
        growth: 'Tăng 30%/năm, thiếu hụt 500,000+ lập trình viên đến 2030',
        jobDemand: 'Cực cao - Top 1 ngành được tuyển dụng nhiều nhất',
        
        positions: [
            'Kỹ sư AI/Machine Learning',
            'Full-stack Developer (Frontend + Backend)',
            'DevOps Engineer',
            'Cloud Architect (AWS/Azure/GCP)',
            'Data Scientist / Data Engineer',
            'Mobile Developer (iOS/Android/Flutter)',
            'Blockchain Developer',
            'Game Developer (Unity/Unreal)',
            'QA/Test Engineer',
            'Product Manager (Technical)'
        ],
        
        skills: ['Toán', 'Tin', 'Anh', 'Logic', 'Sử dụng AI', 'Tư duy phản biện'],
        softSkills: ['Problem-solving', 'Teamwork', 'Communication', 'Self-learning'],
        
        requiredTraits: {
            holland: ['I', 'R', 'C'],
            hollandMin: { I: 70, R: 60 },
            eq: ['self-regulation', 'motivation'],
            lifeskills: ['digital-literacy', 'problem-solving', 'self-learning']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Ôn tập tổ hợp A00 (Toán 8.5+, Lý 8+, Anh 8+) hoặc D01',
                '💻 Tự học Python cơ bản, làm quen HTML/CSS/JavaScript',
                '🎓 Đăng ký nguyện vọng: Bách Khoa, ĐH Quốc gia, FPT (dự bị 2-3 trường)',
                '📖 Năm 1-2 ĐH: Nền tảng lập trình (C++/Java), Cấu trúc dữ liệu, Giải thuật, OOP',
                '🚀 Năm 2-3: Chọn chuyên ngành (Web/Mobile/AI/Game), làm dự án nhóm',
                '💼 Năm 3-4: Chuyên sâu, thực tập 6 tháng tại DN (Từ năm 3 hè)',
                '🏆 Năm 4: Làm thesis/capstone project, build portfolio mạnh, xin việc Fresher'
            ],
            vocational: [
                '📚 Chọn CĐ FPT Poly (top 1 về IT) hoặc Cao Thắng',
                '💻 Năm 1: Nền tảng lập trình, thực hành 70% thời gian',
                '🛠️ Năm 2: Chuyên sâu Web Development (React, Node.js) hoặc Mobile (Flutter)',
                '🏢 Năm 2.5-3: Thực tập doanh nghiệp từ học kỳ 5, làm dự án thực tế',
                '📜 Tốt nghiệp với 2-3 dự án portfolio',
                '⬆️ Tùy chọn: Liên thông lên ĐH FPT nếu muốn phát triển cao hơn'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng hiện đại, open space',
            hours: '9h-18h, flexible, WFH 2-3 ngày/tuần',
            dress: 'Thoải mái, casual',
            culture: 'Team trẻ, sáng tạo, năng động'
        },
        
        recommendations: [
            '💡 Tham gia GitHub ngay từ năm 1, commit code hàng ngày',
            '🏆 Tham gia Hackathon (VNG, Shopee, Google), coding competition',
            '📖 Tự học trên: Coursera, Udemy, freeCodeCamp, Codecademy',
            '🌐 Học tiếng Anh IT chuyên sâu để đọc documentation',
            '🤝 Join cộng đồng: Viblo, Kipalog, Facebook groups IT Vietnam',
            '🎯 Chọn chuyên ngành từ năm 2: AI/Web/Mobile/Game dựa trên đam mê',
            '🔨 Build 5-10 dự án cá nhân để có portfolio mạnh',
            '📚 Đọc sách: Clean Code, Design Patterns, Cracking the Coding Interview'
        ],
        
        challenges: [
            '⚠️ Áp lực deadline dự án cao, đôi khi OT',
            '📈 Cần cập nhật công nghệ liên tục (framework mới 6 tháng/lần)',
            '😓 Burnout nếu không work-life balance tốt',
            '🤖 Cạnh tranh với AI trong tương lai (code tự động)',
            '💼 Yêu cầu kinh nghiệm cao cho vị trí senior'
        ],
        
        trends2026: 'AI/ML, Blockchain, Cloud Native, Microservices, Low-code/No-code, Cybersecurity',
        
        successStories: [
            'Nguyễn Hà Đông - Flappy Bird creator, tự học lập trình',
            'Nhiều SV IT VN vào Google, Facebook, Amazon với lương $150K+/năm',
            'Startup IT VN: VNG, Zalo, Momo, Tiki đều do kỹ sư IT sáng lập'
        ]
    },

    'ai-data-science': {
        id: 'ai-data-science',
        name: 'Trí tuệ Nhân tạo & Khoa học Dữ liệu',
        icon: '🤖',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b',
        category: 'tech',
        hollandCode: 'I-C',
         requiredSubjects :['toan', 'tin', 'ngoaingu', 'vatli'],
        description: 'AI, Machine Learning, Deep Learning, Data Analytics',
        detailedDesc: 'Ngành đào tạo chuyên gia về AI, ML, phân tích dữ liệu lớn. Là ngành nóng nhất với mức lương cao nhất trong IT, nhu cầu tăng vọt do chuyển đổi số.',
        
        universities: [
            { name: 'ĐH Bách Khoa HN/HCM', score: '28-30', combo: 'A00, A01', tuition: '15-22tr/năm' },
            { name: 'ĐH KHTN - ĐH Quốc gia', score: '27-29', combo: 'A00', tuition: '12-18tr/năm' },
            { name: 'ĐH FPT (AI chuyên sâu)', score: '24-26', combo: 'A00, D01', tuition: '65-75tr/năm' },
            { name: 'ĐH Phenikaa', score: '23-25', combo: 'A00', tuition: '30-40tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ FPT (Data Analytics)', duration: '2.5 năm', cost: '22-28tr/năm', strength: 'Có track AI riêng' },
            { name: 'Bootcamp AI 6-12 tháng', duration: '6-12 tháng', cost: '30-80 triệu', strength: 'Thực chiến cao' }
        ],
        
        salary: {
            entry: '15-25 triệu/tháng (Junior DS)',
            mid: '35-70 triệu/tháng (Senior DS)',
            senior: '80-200+ triệu/tháng (AI Research Scientist, Principal DS)',
            note: 'Google/Meta/Amazon trả lương >$200K USD/năm'
        },
        
        growth: 'Tăng 45%/năm, thiếu hụt trầm trọng chuyên gia AI tại VN',
        
        positions: [
            'AI/ML Engineer',
            'Data Scientist',
            'Data Analyst / Business Intelligence',
            'NLP Engineer (Xử lý ngôn ngữ tự nhiên)',
            'Computer Vision Engineer',
            'MLOps Engineer',
            'AI Research Scientist',
            'Prompt Engineer (mới 2024)',
            'LLM Engineer (Large Language Models)'
        ],
        
        skills: ['Toán cao cấp', 'Thống kê', 'Python', 'SQL', 'Anh chuyên ngành', 'Math reasoning'],
        
        requiredTraits: {
            holland: ['I', 'C'],
            hollandMin: { I: 80, C: 65 },
            eq: ['self-regulation', 'motivation'],
            lifeskills: ['critical-thinking', 'problem-solving', 'self-learning']
        },
        
        roadmap: {
            thpt: [
                '📐 Học Toán nâng cao: Vi tích phân, Đại số tuyến tính, Xác suất thống kê',
                '🐍 Học Python từ năm 11, làm quen Pandas, NumPy, Matplotlib',
                '🎓 Thi đỗ trường top, chọn ngành AI/Data Science hoặc IT rồi chuyên sâu',
                '📊 Năm 1-2: Toán học, Thống kê, Lập trình Python/R',
                '🤖 Năm 3-4: ML, Deep Learning, Computer Vision, NLP',
                '🏆 Làm Kaggle competitions, publish research paper nếu có thể',
                '📝 Thesis về AI application trong lĩnh vực cụ thể'
            ],
            vocational: [
                '📊 Học Data Analytics tại CĐ FPT hoặc tham gia Bootcamp AI',
                '💻 Thực hành phân tích dữ liệu với Python, SQL, Power BI',
                '🏆 Tham gia Kaggle, build portfolio với 3-5 projects',
                '📜 Lấy chứng chỉ: Google Data Analytics, IBM Data Science',
                '⬆️ Liên thông ĐH hoặc học thêm ML/DL qua online courses'
            ]
        },
        
        recommendations: [
            '📊 Học Kaggle từ năm 1, làm competitions để có ranking',
            '📖 Đọc research papers trên arXiv, implement algorithms',
            '🧮 Nắm vững Toán: Linear Algebra, Calculus, Probability & Statistics',
            '🐍 Thành thạo: TensorFlow, PyTorch, Scikit-learn, Keras',
            '🌐 Học tiếng Anh tốt để đọc papers và làm việc với data quốc tế',
            '🎓 Cân nhắc học Thạc sĩ/Tiến sĩ nếu muốn làm research',
            '💼 Thực tập sớm tại các công ty AI: VinAI, FPT AI, Zalo AI'
        ],
        
        trends2026: 'LLM (GPT-4, Claude), Generative AI, Multimodal AI, Edge AI, AutoML',
        
        challenges: [
            '🧮 Yêu cầu nền tảng Toán rất mạnh',
            '📚 Cần học liên tục, research papers mới hàng ngày',
            '💻 Tính toán phức tạp, cần GPU/TPU mạnh',
            '🌐 Tài liệu chủ yếu tiếng Anh'
        ]
    },

    'cybersecurity': {
        id: 'cybersecurity',
        name: 'An toàn Thông tin & Bảo mật',
        icon: '🔐',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
        category: 'tech',
        hollandCode: 'I-C',
         requiredSubjects :['toan', 'tin', 'ngoaingu', 'vatli'],
        description: 'Ethical Hacking, Network Security, Cryptography',
        detailedDesc: 'Ngành đào tạo chuyên gia bảo vệ hệ thống thông tin khỏi tấn công mạng, hacker. Nhu cầu cực cao trong thời đại số hóa.',
        
        universities: [
            { name: 'Học viện Kỹ thuật Mật mã', score: '27-29', combo: 'A00, A01', tuition: '0đ (Quân đội)' },
            { name: 'ĐH Bách Khoa HN', score: '26-28', combo: 'A00', tuition: '15-20tr/năm' },
            { name: 'ĐH CNTT - ĐH Quốc gia HCM', score: '25-27', combo: 'A00, A01', tuition: '10-15tr/năm' },
            { name: 'ĐH FPT (Cybersecurity)', score: '23-25', combo: 'A00', tuition: '65tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ An ninh mạng FPT', duration: '2.5 năm', cost: '22-26tr/năm', strength: 'SOC training' },
            { name: 'Khóa CEH, OSCP (bootcamp)', duration: '6-12 tháng', cost: '40-100 triệu', strength: 'Cert quốc tế' }
        ],
        
        salary: {
            entry: '12-20 triệu/tháng',
            mid: '25-60 triệu/tháng',
            senior: '70-180+ triệu/tháng (Security Architect)',
            note: 'Bug bounty có thể kiếm thêm $500-10,000 USD/lỗ hổng'
        },
        
        growth: 'Tăng 35%/năm, thiếu hụt 3 triệu+ chuyên gia an ninh mạng toàn cầu',
        
        positions: [
            'Ethical Hacker / Penetration Tester',
            'Security Analyst / SOC Engineer',
            'Security Consultant',
            'Security Architect',
            'Cryptography Engineer',
            'Incident Response Specialist',
            'Malware Analyst / Reverse Engineer',
            'Cloud Security Engineer'
        ],
        
        skills: ['Tin', 'Toán', 'Anh', 'Networking', 'Linux', 'Tư duy logic'],
        
        roadmap: {
            thpt: [
                '💻 Học networking cơ bản (TCP/IP, DNS, HTTP, Firewall)',
                '🔓 Tự học Ethical Hacking trên TryHackMe, HackTheBox',
                '🎓 Thi vào Học viện Mật mã hoặc Bách Khoa',
                '🛡️ Năm 1-2: Nền tảng mạng, OS (Linux), lập trình',
                '🔐 Năm 3-4: Cryptography, Penetration Testing, Forensics',
                '🏆 Tham gia CTF competitions, lấy cert CEH/OSCP'
            ],
            vocational: [
                '🎯 Học CĐ An ninh mạng FPT',
                '🔍 Học kiểm thử bảo mật, phân tích lỗ hổng',
                '🏢 Thực tập tại SOC của ngân hàng, DN',
                '📜 Lấy cert CompTIA Security+, CEH',
                '⬆️ Có thể học bootcamp OSCP hoặc liên thông ĐH'
            ]
        },
        
        recommendations: [
            '🎯 Làm quen CTF (Capture The Flag) từ sớm',
            '🔍 Học Bug Bounty, tìm lỗ hổng trên HackerOne, Bugcrowd',
            '📖 Đọc blog: KrebsOnSecurity, The Hacker News',
            '💻 Xây dựng home lab để thực hành',
            '🏆 Lấy cert: CEH, OSCP, CISSP (sau 5 năm KN)',
            '🌐 Theo dõi tin tức cyber attacks hàng ngày'
        ],
        
        trends2026: 'Cloud Security, IoT Security, AI-powered Attacks, Zero Trust'
    },

    'blockchain-web3': {
        id: 'blockchain-web3',
        name: 'Blockchain & Web3',
        icon: '⛓️',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0',
        category: 'tech',
        hollandCode: 'I-C',
         requiredSubjects :['toan', 'tin', 'ngoaingu'],
        description: 'Blockchain, Cryptocurrency, Smart Contracts, DeFi, NFT',
        detailedDesc: 'Ngành mới nổi, đào tạo chuyên gia về công nghệ blockchain, phát triển ứng dụng phi tập trung (DApp), smart contracts, DeFi, NFT.',
        
        universities: [
            { name: 'ĐH Bách Khoa HCM (Blockchain track)', score: '26-29', combo: 'A00, A01', tuition: '15-22tr/năm' },
            { name: 'ĐH FPT (Blockchain major)', score: '24-27', combo: 'A00, D01', tuition: '70tr/năm' },
            { name: 'ĐH Công nghệ - ĐH Quốc gia', score: '25-28', combo: 'A00', tuition: '12-18tr/năm' }
        ],
        
        vocational: [
            { name: 'Bootcamp Blockchain 6-12 tháng', duration: '6-12 tháng', cost: '40-80 triệu', strength: 'Hands-on' }
        ],
        
        salary: {
            entry: '15-28 triệu/tháng',
            mid: '35-80 triệu/tháng',
            senior: '90-250+ triệu/tháng (Blockchain Architect)',
            note: 'Startup Web3 trả lương bằng crypto + equity'
        },
        
        growth: 'Tăng 60%/năm, Web3 đang bùng nổ toàn cầu',
        
        positions: [
            'Blockchain Developer',
            'Smart Contract Developer (Solidity/Rust)',
            'DeFi Engineer',
            'NFT Platform Developer',
            'Blockchain Security Auditor',
            'Web3 Full-stack Developer',
            'Tokenomics Designer'
        ],
        
        skills: ['Toán', 'Tin', 'Mật mã', 'Solidity', 'JavaScript', 'Anh'],
        
        roadmap: {
            thpt: [
                '💻 Năm 12: Học JavaScript, hiểu blockchain cơ bản',
                '🎓 Năm 1-2: Nền tảng lập trình, mật mã học, networking',
                '⛓️ Năm 3-4: Solidity, Ethereum, DApp development, Web3.js',
                '🏢 Thực tập tại startup Web3, crypto exchange',
                '🏆 Build dự án NFT marketplace, DeFi protocol'
            ],
            vocational: [
                '💻 Tham gia Bootcamp Blockchain chuyên sâu 6-12 tháng',
                '📚 Tự học qua Udemy, Cryptozombies, Alchemy University',
                '🛠️ Build portfolio với 3-5 dự án blockchain',
                '💼 Xin việc tại: Coin98, Kyber Network, Sky Mavis'
            ]
        },
        
        recommendations: [
            '⛓️ Học Solidity, build smart contracts trên Remix',
            '🦊 Thực hành với MetaMask, Hardhat, Truffle',
            '📖 Đọc whitepaper: Bitcoin, Ethereum, Solana',
            '🏆 Tham gia Hackathon: ETHGlobal, Encode Club',
            '🌐 Join cộng đồng: Ethereum Vietnam, Blockchain Developer Vietnam',
            '🔐 Quan tâm security: reentrancy, overflow attacks'
        ],
        
        trends2026: 'Layer 2 (Arbitrum, Optimism), DeFi 2.0, GameFi, SocialFi, RWA'
    },

    'game-development': {
        id: 'game-development',
        name: 'Phát triển Game & Esports',
        icon: '🎮',
        image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f',
        category: 'tech',
        hollandCode: 'I-A',
        requiredSubjects :['toan', 'tin', 'vatli'],
        description: 'Game Development, Unity, Unreal, Game Design',
        detailedDesc: 'Ngành đào tạo lập trình viên game, game designer, esports manager. Thị trường game VN trị giá $600M USD/năm.',
        
        universities: [
            { name: 'ĐH FPT (Game Development)', score: '22-25', combo: 'A00, D01', tuition: '65tr/năm' },
            { name: 'ĐH Công nghệ TP.HCM', score: '23-26', combo: 'A00', tuition: '15-20tr/năm' },
            { name: 'ĐH RMIT (Game Programming)', score: 'IELTS 6.5', combo: 'SAT/ACT', tuition: '$14,000/năm' }
        ],
        
        vocational: [
            { name: 'Arena Multimedia (Game Art)', duration: '2 năm', cost: '50-70tr', strength: 'Đào tạo nghề' },
            { name: 'SAE Institute (Game Programming)', duration: '2 năm', cost: '80-120tr', strength: 'Quốc tế' }
        ],
        
        salary: {
            entry: '10-15 triệu/tháng',
            mid: '18-40 triệu/tháng',
            senior: '45-100 triệu/tháng (Lead Game Developer)',
            note: 'Indie game nếu thành công có thể kiếm >$100K'
        },
        
        growth: 'Tăng 22%/năm, mobile game đang bùng nổ tại VN',
        
        positions: [
            'Unity/Unreal Developer',
            'Game Designer',
            'Game Artist (2D/3D)',
            'Game QA Tester',
            'Level Designer',
            'Gameplay Programmer',
            'Esports Manager'
        ],
        
        skills: ['Tin', 'Toán', 'Vẽ/Thiết kế', 'Sáng tạo', 'Anh'],
        
        roadmap: {
            thpt: [
                '🎮 Năm 12: Học Unity cơ bản, làm game 2D đơn giản',
                '🎓 Năm 1-2: Lập trình C#, Unity fundamentals',
                '🕹️ Năm 3-4: Unreal Engine, 3D modeling, AI in games',
                '🏆 Build 3-5 game portfolio, publish lên Steam/Google Play',
                '🏢 Thực tập tại VNG, Gameloft, Sky Mavis'
            ],
            vocational: [
                '🎨 Học Arena Multimedia nếu thích Game Art',
                '💻 Học SAE nếu thích lập trình game',
                '🛠️ Build portfolio với 5+ mini games',
                '💼 Xin việc QA Tester trước, sau đó lên Developer'
            ]
        },
        
        recommendations: [
            '🎮 Làm game jam hàng tháng (Ludum Dare, Global Game Jam)',
            '📚 Học Unity Learn, Unreal Learning Portal',
            '🎨 Nếu thích Art, học Blender, Maya, Substance Painter',
            '💡 Chơi nhiều game để hiểu game design',
            '🏆 Publish game lên itch.io, Steam'
        ],
        
        trends2026: 'Mobile gaming, VR/AR games, Cloud gaming, AI NPCs'
    },

    // ==================== KINH TẾ - KINH DOANH (5 NGÀNH) ====================

    'business-admin': {
        id: 'business-admin',
        name: 'Quản trị Kinh doanh',
        icon: '📊',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
        category: 'business',
        hollandCode: 'E-C',
        requiredSubjects :['toan', 'ngoaingu', 'van'],
        description: 'Quản lý doanh nghiệp, chiến lược kinh doanh, lãnh đạo',
        detailedDesc: 'Ngành Quản trị Kinh doanh đào tạo những nhà quản lý, lãnh đạo doanh nghiệp. Học viên được trang bị kiến thức toàn diện về quản lý, marketing, tài chính, nhân sự và chiến lược phát triển doanh nghiệp.',
        
        universities: [
            { name: 'ĐH Kinh tế TP.HCM', score: '26-29', combo: 'A01, D01, D07', tuition: '10-15tr/năm' },
            { name: 'ĐH Ngoại thương', score: '25-28', combo: 'A01, D01, D07', tuition: '12-18tr/năm' },
            { name: 'ĐH Kinh tế Quốc dân', score: '25-27', combo: 'A01, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH Hà Nội', score: '23-26', combo: 'A01, D01', tuition: '8-12tr/năm' },
            { name: 'ĐH Công nghiệp TP.HCM', score: '22-25', combo: 'A01, D01', tuition: '10-14tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Kinh tế TP.HCM', duration: '3 năm', cost: '8-12tr/năm', strength: 'Thực tế doanh nghiệp' },
            { name: 'CĐ Kinh tế Đối ngoại', duration: '2.5 năm', cost: '10-15tr/năm', strength: 'Liên kết DN quốc tế' },
            { name: 'CĐ Công nghiệp', duration: '3 năm', cost: '7-10tr/năm', strength: 'Học phí hợp lý' }
        ],
        
        admissionScore: {
            university: '22-29 điểm',
            subjects: 'Toán, Văn, Anh (D01) hoặc Toán, Anh, Lý (A01)'
        },
        
        salary: {
            entry: '8-15 triệu/tháng (Nhân viên)',
            mid: '20-40 triệu/tháng (Trưởng phòng)',
            senior: '50-150+ triệu/tháng (Giám đốc, CEO)',
            note: 'Thu nhập tùy quy mô doanh nghiệp'
        },
        
        growth: 'Tăng 15%/năm, nhu cầu cao cho vị trí quản lý cấp trung',
        jobDemand: 'Cao - Mọi doanh nghiệp đều cần',
        
        positions: [
            'Giám đốc Điều hành (CEO)',
            'Trưởng phòng Kinh doanh',
            'Quản lý Dự án',
            'Chuyên viên Phát triển Kinh doanh',
            'Trưởng phòng Marketing',
            'Giám đốc Vận hành (COO)',
            'Quản lý Chi nhánh',
            'Chuyên viên Tư vấn Chiến lược',
            'Trưởng phòng Nhân sự',
            'Giám đốc Tài chính (CFO)'
        ],
        
        skills: ['Lãnh đạo', 'Ra quyết định', 'Phân tích', 'Giao tiếp', 'Thuyết trình', 'Đàm phán'],
        softSkills: ['Leadership', 'Strategic thinking', 'Negotiation', 'Time management'],
        
        requiredTraits: {
            holland: ['E', 'C', 'S'],
            hollandMin: { E: 70, C: 60 },
            eq: ['social-awareness', 'relationship-management'],
            lifeskills: ['communication', 'teamwork', 'problem-solving']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp D01 (Toán 8+, Văn 7.5+, Anh 8+) hoặc A01',
                '💼 Tham gia CLB Kinh doanh, tổ chức sự kiện trường',
                '🎓 Đăng ký: UEH, Ngoại thương, Kinh tế Quốc dân',
                '📖 Năm 1-2: Kinh tế vi mô/vĩ mô, Quản trị học, Marketing cơ bản',
                '🚀 Năm 2-3: Chọn chuyên ngành (Marketing, Tài chính, Nhân sự, Logistics)',
                '💼 Năm 3-4: Thực tập 6 tháng tại DN, làm dự án thực tế',
                '🏆 Năm 4: Khóa luận, tham gia startup hoặc trainee management'
            ],
            vocational: [
                '📚 Học CĐ Kinh tế, tập trung kỹ năng thực hành',
                '💼 Năm 1: Nền tảng kinh doanh, kế toán cơ bản',
                '🛠️ Năm 2: Marketing thực chiến, quản lý bán hàng',
                '🏢 Năm 2.5-3: Thực tập DN, làm việc part-time',
                '📜 Tốt nghiệp: Làm nhân viên kinh doanh, assistant',
                '⬆️ Liên thông lên ĐH nếu muốn thăng tiến cao hơn'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng cao ốc, phòng họp',
            hours: '8h30-17h30, có thể OT',
            dress: 'Lịch sự, công sở (suits, blazer)',
            culture: 'Chuyên nghiệp, cạnh tranh, áp lực cao'
        },
        
        recommendations: [
            '💡 Đọc sách: "Nghệ thuật bán hàng", "7 Thói quen Hiệu quả"',
            '🏆 Tham gia cuộc thi Thử thách Khởi nghiệp, Business Case',
            '📖 Học online: Coursera Business, edX Management courses',
            '🌐 Học tiếng Anh thương mại, giao tiếp quốc tế',
            '🤝 Networking: LinkedIn, sự kiện doanh nhân trẻ',
            '🎯 Tìm mentor trong ngành để học hỏi kinh nghiệm',
            '🔨 Làm part-time kinh doanh từ năm 2 để có kinh nghiệm',
            '📚 Đọc Harvard Business Review, The Economist'
        ],
        
        challenges: [
            '⚠️ Áp lực KPI, doanh số cao',
            '📈 Cạnh tranh khốc liệt để thăng tiến',
            '😓 Work-life balance kém, nhiều meeting',
            '💼 Cần kinh nghiệm thực tế nhiều, không chỉ lý thuyết',
            '🎭 Phải xử lý chính trị nội bộ công ty'
        ],
        
        trends2026: 'E-commerce, Digital Marketing, Data-driven Management, Sustainability Business',
        
        successStories: [
            'Nguyễn Thị Phương Thảo - CEO Vietjet, Forbes billionaire',
            'Phạm Nhật Vượng - Chủ tịch Vingroup, tỷ phú tự thân',
            'Trần Đình Long - Chủ tịch Hòa Phát, từ khởi nghiệp nhỏ'
        ]
    },

    'marketing-digital': {
        id: 'marketing-digital',
        name: 'Marketing & Truyền thông Số',
        icon: '📱',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        category: 'business',
        hollandCode: 'E-A',
        requiredSubjects :['van', 'ngoaingu', 'tin'],
        description: 'Digital Marketing, Social Media, Content Creator, Branding',
        detailedDesc: 'Ngành Marketing Số đào tạo chuyên gia về quảng cáo online, quản lý mạng xã hội, SEO/SEM, content marketing. Là ngành HOT với sự bùng nổ của thương mại điện tử và social media.',
        
        universities: [
            { name: 'ĐH Kinh tế TP.HCM', score: '25-28', combo: 'D01, D07', tuition: '10-15tr/năm' },
            { name: 'ĐH RMIT', score: '6.0-7.0 IELTS', combo: 'Portfolio', tuition: '400-500tr/năm' },
            { name: 'ĐH Hoa Sen', score: '22-25', combo: 'D01, D14', tuition: '35-45tr/năm' },
            { name: 'ĐH Văn Lang', score: '20-23', combo: 'D01, C00', tuition: '30-40tr/năm' },
            { name: 'ĐH Công nghệ TP.HCM', score: '21-24', combo: 'D01', tuition: '15-20tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Arena Multimedia', duration: '2 năm', cost: '40-50tr/năm', strength: 'Thực hành 80%' },
            { name: 'CĐ FPT Polytechnic', duration: '2.5 năm', cost: '20-30tr/năm', strength: 'Digital focus' },
            { name: 'CĐ Kinh tế Kỹ thuật', duration: '2.5 năm', cost: '10-15tr/năm', strength: 'Học phí OK' }
        ],
        
        admissionScore: {
            university: '20-28 điểm',
            subjects: 'Toán, Văn, Anh (D01) hoặc Văn, Sử, Địa (C00)'
        },
        
        salary: {
            entry: '7-12 triệu/tháng (Junior)',
            mid: '15-35 triệu/tháng (Senior, Lead)',
            senior: '40-100+ triệu/tháng (Manager, Director)',
            note: 'Freelancer có thể kiếm 20-50tr/tháng'
        },
        
        growth: 'Tăng 35%/năm, nhu cầu CỰC cao cho Digital Marketing',
        jobDemand: 'Rất cao - Mọi công ty cần online presence',
        
        positions: [
            'Digital Marketing Specialist',
            'Social Media Manager',
            'Content Creator / Copywriter',
            'SEO/SEM Specialist',
            'Influencer Marketing Manager',
            'Brand Manager',
            'Performance Marketing Lead',
            'Marketing Automation Specialist',
            'E-commerce Marketing Manager',
            'Creative Director'
        ],
        
        skills: ['Viết content', 'Design cơ bản', 'Analytics', 'SEO', 'Ads Facebook/Google', 'Video editing'],
        softSkills: ['Creativity', 'Communication', 'Trend-sensing', 'Data analysis'],
        
        requiredTraits: {
            holland: ['E', 'A', 'C'],
            hollandMin: { E: 65, A: 70 },
            eq: ['self-awareness', 'social-awareness'],
            lifeskills: ['creativity', 'digital-literacy', 'communication']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp D01, ôn Anh thật tốt (7.5+)',
                '📱 Tạo fanpage/TikTok cá nhân, thử làm content',
                '🎓 Đăng ký: UEH, Hoa Sen, Văn Lang',
                '📖 Năm 1-2: Marketing căn bản, Consumer Behavior, Branding',
                '🚀 Năm 2-3: Chuyên sâu Digital Marketing, thực hành Facebook Ads, Google Ads',
                '💼 Năm 3-4: Thực tập agency/in-house, chạy campaign thật',
                '🏆 Năm 4: Khóa luận, có portfolio 5-10 campaign'
            ],
            vocational: [
                '📚 Học Arena hoặc FPT Poly Digital Marketing',
                '💻 Năm 1: Photoshop, Canva, video editing, copywriting',
                '🛠️ Năm 2: Facebook Ads, Google Ads thực chiến',
                '🏢 Làm freelance hoặc part-time từ năm 1',
                '📜 Tốt nghiệp với portfolio 10+ case studies',
                '💼 Xin việc Junior tại agency hoặc startup'
            ]
        },
        
        workEnvironment: {
            style: 'Agency trẻ trung hoặc startup',
            hours: '9h-18h, flexible, có thể WFH',
            dress: 'Casual, thoải mái, sáng tạo',
            culture: 'Năng động, sáng tạo, deadline gấp'
        },
        
        recommendations: [
            '💡 Làm freelance từ Fiverr, Upwork từ sớm',
            '🏆 Tham gia Google Digital Garage, Facebook Blueprint',
            '📖 Học: HubSpot Academy, Coursera Digital Marketing',
            '🌐 Follow: Neil Patel, Gary Vaynerchuk, Seth Godin',
            '🤝 Join cộng đồng: SEMVN, Marketing Việt Nam groups',
            '🎯 Chứng chỉ: Google Ads, Facebook Blueprint, HubSpot',
            '🔨 Tạo blog/channel cá nhân để học SEO/YouTube',
            '📚 Đọc: "Contagious", "Made to Stick", "Building a Story Brand"'
        ],
        
        challenges: [
            '⚠️ Algorithm thay đổi liên tục (Facebook, Google)',
            '📈 Áp lực KPI rất cao, phải có ROI rõ ràng',
            '😓 Làm việc ngoài giờ để theo dõi campaign',
            '💰 Budget thấp nhưng yêu cầu kết quả cao',
            '🎭 Client khó tính, thay đổi brief liên tục'
        ],
        
        trends2026: 'AI Content Creation, TikTok Marketing, Live-stream Commerce, Influencer Marketing, AR/VR Ads',
        
        successStories: [
            'Hậu Hoàng - Content Creator triệu views, thu nhập 50-100tr/tháng',
            'Team Sơn Tùng M-TP - Digital Marketing đỉnh cao Vpop',
            'Nhiều Gen Z kiếm 30-50tr/tháng từ TikTok, YouTube'
        ]
    },

    'accounting-audit': {
        id: 'accounting-audit',
        name: 'Kế toán - Kiểm toán',
        icon: '🧮',
        image: 'https://images.unsplash.com/photo-1554224311-beee4ece0751',
        category: 'business',
        hollandCode: 'C-E',
        requiredSubjects :['toan', 'ngoaingu', 'tin'],

        description: 'Kế toán, kiểm toán, tài chính doanh nghiệp',
        detailedDesc: 'Ngành Kế toán - Kiểm toán đào tạo chuyên gia quản lý tài chính doanh nghiệp, lập báo cáo tài chính, kiểm toán độc lập. Ngành ổn định, cần thiết cho mọi doanh nghiệp.',
        
        universities: [
            { name: 'ĐH Kinh tế TP.HCM', score: '26-29', combo: 'A01, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH Kinh tế Quốc dân', score: '25-28', combo: 'A01, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH Ngoại thương', score: '24-27', combo: 'A01, D01', tuition: '12-18tr/năm' },
            { name: 'ĐH Công nghiệp TP.HCM', score: '22-25', combo: 'A01, D01', tuition: '10-14tr/năm' },
            { name: 'ĐH Ngân hàng TP.HCM', score: '23-26', combo: 'A01, D01', tuition: '15-20tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Kinh tế TP.HCM', duration: '3 năm', cost: '8-12tr/năm', strength: 'Thực hành kế toán' },
            { name: 'CĐ Tài chính Hải quan', duration: '2.5 năm', cost: '10-15tr/năm', strength: 'Chuyên sâu' },
            { name: 'CĐ Công nghiệp', duration: '3 năm', cost: '7-10tr/năm', strength: 'Học phí thấp' }
        ],
        
        admissionScore: {
            university: '22-29 điểm',
            subjects: 'Toán, Anh, Lý (A01) hoặc Toán, Văn, Anh (D01)'
        },
        
        salary: {
            entry: '7-12 triệu/tháng (Kế toán viên)',
            mid: '15-30 triệu/tháng (Kế toán trưởng)',
            senior: '35-80+ triệu/tháng (Giám đốc tài chính)',
            note: 'Có chứng chỉ CPA thu nhập tăng 30-50%'
        },
        
        growth: 'Ổn định, tăng 8-10%/năm, nhu cầu luôn có',
        jobDemand: 'Cao - Mọi DN cần kế toán',
        
        positions: [
            'Kế toán viên (Tổng hợp/Thuế/Công nợ)',
            'Kế toán trưởng',
            'Kiểm toán viên (Big4: KPMG, PwC, Deloitte, EY)',
            'Chuyên viên Phân tích Tài chính',
            'Giám đốc Tài chính (CFO)',
            'Chuyên viên Thuế',
            'Kế toán Quản trị',
            'Chuyên viên Kiểm soát Nội bộ',
            'Tư vấn Tài chính',
            'Giảng viên Kế toán'
        ],
        
        skills: ['Excel chuyên sâu', 'MISA/Fast/SAP', 'Luật thuế', 'Phân tích tài chính', 'Báo cáo', 'Tỉ mỉ'],
        softSkills: ['Detail-oriented', 'Honesty', 'Time management', 'Critical thinking'],
        
        requiredTraits: {
            holland: ['C', 'E', 'I'],
            hollandMin: { C: 75, E: 60 },
            eq: ['self-regulation', 'conscientiousness'],
            lifeskills: ['problem-solving', 'critical-thinking', 'digital-literacy']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp A01 (Toán 8+, Anh 8+, Lý 7+)',
                '💻 Học Excel cơ bản, làm quen với số liệu',
                '🎓 Đăng ký: UEH, Kinh tế Quốc dân, Ngoại thương',
                '📖 Năm 1-2: Kế toán tài chính, Kế toán quản trị, Luật thuế',
                '🚀 Năm 2-3: Thực hành MISA/Fast, học CPA/ACCA',
                '💼 Năm 3-4: Thực tập DN hoặc Big4, làm quyết toán',
                '🏆 Năm 4: Thi CPA, xin việc Big4 hoặc CFO track'
            ],
            vocational: [
                '📚 Học CĐ Kinh tế, tập trung thực hành',
                '💻 Năm 1: Kế toán căn bản, Excel chuyên sâu',
                '🛠️ Năm 2: MISA/Fast, thực hành chứng từ',
                '🏢 Năm 2.5-3: Thực tập DN vừa và nhỏ',
                '📜 Tốt nghiệp: Làm kế toán viên',
                '⬆️ Liên thông lên ĐH, thi CPA để thăng tiến'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng yên tĩnh, ít di chuyển',
            hours: '8h-17h, OT cuối tháng/quý/năm',
            dress: 'Công sở lịch sự (áo sơ mi, quần tây)',
            culture: 'Nghiêm túc, chính xác, chi tiết'
        },
        
        recommendations: [
            '💡 Thi chứng chỉ: CPA (Certified Public Accountant)',
            '🏆 Thi ACCA (quốc tế) nếu muốn làm Big4',
            '📖 Học: Coursera Accounting, edX Financial Accounting',
            '🌐 Theo dõi luật thuế mới trên Tổng cục Thuế',
            '🤝 Tham gia Hội Kế toán viên Việt Nam (VAA)',
            '🎯 Thực tập Big4 (KPMG, PwC) từ năm 3',
            '🔨 Làm part-time kế toán cho startup từ năm 2',
            '📚 Đọc chuẩn mực kế toán Việt Nam (VAS)'
        ],
        
        challenges: [
            '⚠️ Áp lực deadline cuối tháng, cuối năm',
            '📈 Chịu trách nhiệm pháp lý nếu sai sót',
            '😓 Công việc lặp đi lặp lại, ít sáng tạo',
            '💼 Cần cập nhật luật thuế liên tục',
            '🎭 Áp lực từ sếp/giám đốc khi báo cáo lỗ'
        ],
        
        trends2026: 'Kế toán số hóa (MISA, SAP), AI Bookkeeping, Blockchain Accounting, ESG Reporting',
        
        successStories: [
            'Nhiều CFO lớn xuất thân từ Big4',
            'Kế toán viên chuyên nghiệp kiếm 30-50tr/tháng',
            'CPA có thể mở văn phòng riêng kiếm 50-100tr/tháng'
        ]
    },

    'finance-banking': {
        id: 'finance-banking',
        name: 'Tài chính - Ngân hàng',
        icon: '🏦',
        image: 'https://images.unsplash.com/photo-1559526324-593bc073d938',
        category: 'business',
        hollandCode: 'C-E',
        requiredSubjects :['toan', 'ngoaingu', 'tin'],
        description: 'Ngân hàng, đầu tư, tài chính doanh nghiệp',
        detailedDesc: 'Ngành Tài chính - Ngân hàng đào tạo chuyên gia về đầu tư, cho vay, quản lý danh mục, phân tích tài chính. Ngành có thu nhập cao, cơ hội thăng tiến tốt trong hệ thống ngân hàng và công ty chứng khoán.',
        
        universities: [
            { name: 'ĐH Kinh tế TP.HCM', score: '27-29', combo: 'A01, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH Ngân hàng TP.HCM', score: '25-28', combo: 'A01, D01', tuition: '15-20tr/năm' },
            { name: 'ĐH Kinh tế Quốc dân', score: '26-28', combo: 'A01, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH Ngoại thương', score: '25-27', combo: 'A01, D01', tuition: '12-18tr/năm' },
            { name: 'ĐH Tài chính Marketing', score: '23-26', combo: 'A01, D01', tuition: '12-16tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Tài chính Ngân hàng', duration: '2.5 năm', cost: '10-15tr/năm', strength: 'Chuyên sâu' },
            { name: 'CĐ Kinh tế TP.HCM', duration: '3 năm', cost: '8-12tr/năm', strength: 'Uy tín' },
            { name: 'CĐ Công nghệ Ngân hàng', duration: '2.5 năm', cost: '12-18tr/năm', strength: 'Công nghệ' }
        ],
        
        admissionScore: {
            university: '23-29 điểm',
            subjects: 'Toán, Anh, Lý (A01) hoặc Toán, Văn, Anh (D01)'
        },
        
        salary: {
            entry: '10-18 triệu/tháng (Giao dịch viên)',
            mid: '25-50 triệu/tháng (Chuyên viên cấp cao)',
            senior: '60-200+ triệu/tháng (Giám đốc chi nhánh, Trader)',
            note: 'Thưởng KPI có thể bằng 3-6 tháng lương'
        },
        
        growth: 'Tăng 12%/năm, FinTech tạo nhiều việc mới',
        jobDemand: 'Cao - Hệ thống ngân hàng mở rộng',
        
        positions: [
            'Giao dịch viên Ngân hàng',
            'Chuyên viên Tín dụng',
            'Chuyên viên Phân tích Đầu tư',
            'Quản lý Danh mục (Portfolio Manager)',
            'Chuyên viên Rủi ro (Risk Analyst)',
            'Trader chứng khoán',
            'Chuyên viên Quan hệ Khách hàng (RM)',
            'Giám đốc Chi nhánh Ngân hàng',
            'Chuyên viên M&A',
            'Tư vấn Tài chính Cá nhân'
        ],
        
        skills: ['Phân tích tài chính', 'Excel VBA', 'Bloomberg Terminal', 'Đầu tư chứng khoán', 'Quản lý rủi ro'],
        softSkills: ['Analytical thinking', 'Decision-making', 'Stress management', 'Communication'],
        
        requiredTraits: {
            holland: ['C', 'E', 'I'],
            hollandMin: { C: 70, E: 65 },
            eq: ['self-regulation', 'stress-tolerance'],
            lifeskills: ['critical-thinking', 'problem-solving', 'time-management']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp A01, Toán và Anh phải thật giỏi (8.5+)',
                '💰 Tìm hiểu thị trường chứng khoán, mở tài khoản thử',
                '🎓 Đăng ký: UEH, Ngân hàng TP.HCM, Kinh tế Quốc dân',
                '📖 Năm 1-2: Tài chính doanh nghiệp, Thị trường tài chính, Phân tích đầu tư',
                '🚀 Năm 2-3: Học CFA Level 1, thực hành trading',
                '💼 Năm 3-4: Thực tập ngân hàng/công ty chứng khoán',
                '🏆 Năm 4: Thi CFA Level 2, xin việc Analyst'
            ],
            vocational: [
                '📚 Học CĐ Tài chính Ngân hàng',
                '💻 Năm 1: Kế toán, tài chính căn bản',
                '🛠️ Năm 2: Nghiệp vụ ngân hàng, tín dụng',
                '🏢 Năm 2.5: Thực tập tại ngân hàng',
                '📜 Tốt nghiệp: Giao dịch viên hoặc tín dụng viên',
                '⬆️ Học thêm CFA, FRM để thăng tiến'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng cao cấp, trading floor',
            hours: '8h-17h (ngân hàng), 7h-19h (chứng khoán)',
            dress: 'Rất lịch sự, vest/suit bắt buộc',
            culture: 'Chuyên nghiệp, áp lực cao, thi đua KPI'
        },
        
        recommendations: [
            '💡 Thi chứng chỉ CFA (Chartered Financial Analyst)',
            '🏆 Thi FRM (Financial Risk Manager) cho Risk',
            '📖 Học: Coursera Investment, edX Corporate Finance',
            '🌐 Theo dõi: Bloomberg, Reuters, VnExpress Kinh tế',
            '🤝 Tham gia CFA Society Vietnam',
            '🎯 Thực tập Big4 hoặc ngân hàng ngoại từ năm 3',
            '🔨 Mở tài khoản chứng khoán, tập trade',
                '📚 Đọc: "The Intelligent Investor", "A Random Walk Down Wall Street"'
        ],
        
        challenges: [
            '⚠️ Áp lực KPI cực cao (cho vay, huy động)',
            '📈 Làm việc trong môi trường căng thẳng',
            '😓 Thị trường biến động gây stress',
            '💼 Cần quan hệ rộng để phát triển khách hàng',
            '🎭 Rủi ro pháp lý nếu vi phạm quy định'
        ],
        
        trends2026: 'FinTech, Digital Banking, Crypto/Blockchain, Robo-advisors, Open Banking',
        
        successStories: [
            'Nhiều trader kiếm 50-200tr/tháng từ thị trường',
            'Giám đốc chi nhánh ngân hàng lớn thu nhập 100-300tr/tháng',
            'CFA Charterholder có lương trung bình 60-120tr/tháng'
        ]
    },

    'supply-chain': {
        id: 'supply-chain',
        name: 'Logistics & Quản lý Chuỗi cung ứng',
        icon: '🚚',
        image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55',
        category: 'business',
        hollandCode: 'E-R',
        requiredSubjects :['toan', 'ngoaingu', 'diali'],
        description: 'Vận tải, kho bãi, quản lý hàng hóa, xuất nhập khẩu',
        detailedDesc: 'Ngành Logistics - Supply Chain đào tạo chuyên gia về vận chuyển hàng hóa, quản lý kho, xuất nhập khẩu. Ngành đang phát triển mạnh nhờ thương mại điện tử và toàn cầu hóa.',
        
        universities: [
            { name: 'ĐH Ngoại thương', score: '25-28', combo: 'A01, D01', tuition: '12-18tr/năm' },
            { name: 'ĐH Giao thông Vận tải TP.HCM', score: '22-26', combo: 'A00, A01', tuition: '10-15tr/năm' },
            { name: 'ĐH Hàng hải Việt Nam', score: '21-25', combo: 'A00, A01', tuition: '12-16tr/năm' },
            { name: 'ĐH Kinh tế TP.HCM', score: '24-27', combo: 'A01, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH Công nghiệp TP.HCM', score: '20-24', combo: 'A00, A01', tuition: '10-14tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Giao thông Vận tải', duration: '2.5 năm', cost: '8-12tr/năm', strength: 'Thực hành cao' },
            { name: 'CĐ Kinh tế Đối ngoại', duration: '3 năm', cost: '10-15tr/năm', strength: 'Xuất nhập khẩu' },
            { name: 'CĐ Công nghệ', duration: '2.5 năm', cost: '7-10tr/năm', strength: 'Học phí OK' }
        ],
        
        admissionScore: {
            university: '20-28 điểm',
            subjects: 'Toán, Lý, Anh (A00) hoặc Toán, Anh, Lý (A01)'
        },
        
        salary: {
            entry: '8-14 triệu/tháng (Nhân viên)',
            mid: '18-35 triệu/tháng (Trưởng phòng)',
            senior: '40-100+ triệu/tháng (Giám đốc SCM)',
            note: 'Làm tại cảng/sân bay lương cao hơn 20-30%'
        },
        
        growth: 'Tăng 18%/năm nhờ e-commerce, nhu cầu cực cao',
        jobDemand: 'Rất cao - TikTok Shop, Shopee, Lazada cần rất nhiều',
        
        positions: [
            'Chuyên viên Logistics',
            'Quản lý Kho',
            'Điều phối Vận tải',
            'Chuyên viên Xuất nhập khẩu',
            'Supply Chain Manager',
            'Chuyên viên Mua hàng (Procurement)',
            'Last-mile Delivery Manager',
            'Chuyên viên Hải quan',
            'Inventory Planner',
            'Giám đốc Vận hành (COO)'
        ],
        
        skills: ['Quản lý kho WMS', 'Hải quan', 'Incoterms', 'Excel', 'SAP/Oracle', 'Bản đồ/GPS'],
        softSkills: ['Problem-solving', 'Coordination', 'Negotiation', 'Time management'],
        
        requiredTraits: {
            holland: ['E', 'R', 'C'],
            hollandMin: { E: 70, R: 60 },
            eq: ['stress-tolerance', 'adaptability'],
            lifeskills: ['problem-solving', 'adaptability', 'teamwork']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp A00 (Toán, Lý, Anh) hoặc A01',
                '🚚 Tìm hiểu chuỗi cung ứng của Shopee, Lazada',
                '🎓 Đăng ký: Ngoại thương, GTVT TP.HCM, Hàng hải',
                '📖 Năm 1-2: Quản trị logistics, Vận tải, Kho bãi',
                '🚀 Năm 2-3: Thực hành WMS, TMS, học hải quan',
                '💼 Năm 3-4: Thực tập cảng, sân bay, công ty logistics',
                '🏆 Năm 4: Khóa luận, xin việc coordinator'
            ],
            vocational: [
                '📚 Học CĐ Giao thông Vận tải',
                '💻 Năm 1: Nghiệp vụ kho, vận tải cơ bản',
                '🛠️ Năm 2: Thực hành xe nâng, WMS',
                '🏢 Năm 2.5: Thực tập kho Shopee/Lazada',
                '📜 Tốt nghiệp: Nhân viên kho hoặc giao nhận',
                '⬆️ Thăng tiến lên quản lý kho sau 2-3 năm'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng + công trường (kho, cảng)',
            hours: '8h-17h, có thể trực ca đêm',
            dress: 'Công sở hoặc đồng phục (tùy vị trí)',
            culture: 'Năng động, áp lực deadline cao'
        },
        
        recommendations: [
            '💡 Học lái xe nâng, xe đầu kéo (bonus lớn)',
            '🏆 Chứng chỉ: CPIM, CSCP (APICS)',
            '📖 Học: Coursera Supply Chain, edX Logistics',
            '🌐 Tham gia hội Logistics Việt Nam (VLA)',
            '🤝 Thực tập: J&T, Giao Hàng Nhanh, Viettel Post',
            '🎯 Học tiếng Anh logistics, Incoterms',
            '🔨 Tìm hiểu Shopee SPX, TikTok Shop logistics',
            '📚 Đọc: "The Goal" - Eliyahu Goldratt'
        ],
        
        challenges: [
            '⚠️ Làm việc ngoài trời, môi trường ồn ào',
            '📈 Áp lực giao hàng đúng hạn cực cao',
            '😓 Phải trực đêm hoặc làm ca 3',
            '💼 Chi phí phát sinh cao nếu sai sót',
            '🎭 Xử lý sự cố liên tục (kẹt xe, hàng hỏng)'
        ],
        
        trends2026: 'Last-mile Delivery, Drone Delivery, AI Routing, Blockchain Tracking, Green Logistics',
        
        successStories: [
            'Quản lý kho Amazon Việt Nam kiếm 40-80tr/tháng',
            'Giám đốc SCM công ty lớn thu nhập 60-150tr/tháng',
            'Nhiều bạn trẻ mở công ty giao nhận kiếm tốt'
        ]
    },


    // ==================== Y TẾ - SỨC KHỎE (5 NGÀNH) ====================

    'nursing': {
        id: 'nursing',
        name: 'Điều dưỡng - Y tá',
        icon: '👩‍⚕️',
        image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289',
        category: 'health',
        hollandCode: 'S-R',
        requiredSubjects :['sinh', 'hoahoc', 'van'],
        description: 'Chăm sóc bệnh nhân, hỗ trợ điều trị, y tế cộng đồng',
        detailedDesc: 'Ngành Điều dưỡng đào tạo y tá chuyên nghiệp chăm sóc bệnh nhân tại bệnh viện, phòng khám, viện dưỡng lão. Ngành THIẾU NGƯỜI nghiêm trọng, cơ hội đi Nhật, Đức, Úc rất cao.',
        
        universities: [
            { name: 'ĐH Y Dược TP.HCM', score: '24-27', combo: 'A00, B00', tuition: '15-20tr/năm' },
            { name: 'ĐH Y Hà Nội', score: '24-26', combo: 'A00, B00', tuition: '12-18tr/năm' },
            { name: 'ĐH Y Dược Cần Thơ', score: '22-25', combo: 'A00, B00', tuition: '10-15tr/năm' },
            { name: 'ĐH Thăng Long', score: '20-23', combo: 'A00, B00', tuition: '25-35tr/năm' },
            { name: 'ĐH Nguyễn Tất Thành', score: '19-22', combo: 'A00, B00', tuition: '30-40tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Y tế TP.HCM', duration: '3 năm', cost: '8-12tr/năm', strength: 'Thực hành 70%' },
            { name: 'CĐ Y tế Pasteur', duration: '3 năm', cost: '10-15tr/năm', strength: 'Uy tín cao' },
            { name: 'CĐ Y tế Hà Nội', duration: '3 năm', cost: '7-10tr/năm', strength: 'Học phí OK' }
        ],
        
        admissionScore: {
            university: '19-27 điểm',
            subjects: 'Toán, Lý, Hóa (A00) hoặc Sinh, Hóa, Lý (B00)'
        },
        
        salary: {
            entry: '7-12 triệu/tháng (Y tá)',
            mid: '12-20 triệu/tháng (Điều dưỡng trưởng)',
            senior: '20-40 triệu/tháng (Quản lý, Giảng viên)',
            note: 'Đi Nhật/Đức kiếm 60-100 triệu/tháng'
        },
        
        growth: 'Tăng 25%/năm, THIẾU HỤT nghiêm trọng',
        jobDemand: 'CỰC CAO - Thiếu 200,000+ y tá đến 2030',
        
        positions: [
            'Y tá Bệnh viện',
            'Điều dưỡng ICU/Emergency',
            'Y tá Phòng khám',
            'Điều dưỡng Cộng đồng',
            'Y tá Chăm sóc Người già',
            'Trưởng khoa Điều dưỡng',
            'Y tá tại Nhật/Đức/Úc',
            'Điều dưỡng Học đường',
            'Y tá Spa/Thẩm mỹ viện',
            'Giảng viên Điều dưỡng'
        ],
        
        skills: ['Tiêm thuốc', 'Chăm sóc vết thương', 'CPR', 'Đo sinh hiệu', 'Giao tiếp bệnh nhân', 'Tiếng Nhật/Đức'],
        softSkills: ['Empathy', 'Patience', 'Stress management', 'Teamwork'],
        
        requiredTraits: {
            holland: ['S', 'R', 'C'],
            hollandMin: { S: 75, R: 60 },
            eq: ['empathy', 'emotion-regulation'],
            lifeskills: ['communication', 'adaptability', 'self-regulation']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp B00 (Sinh, Hóa, Lý)',
                '🏥 Tình nguyện tại bệnh viện để làm quen',
                '🎓 Đăng ký: Y Dược TP.HCM, Y Hà Nội',
                '📖 Năm 1-2: Giải phẫu, Sinh lý, Dược lý, Kỹ thuật điều dưỡng',
                '🚀 Năm 2-3: Thực hành tại bệnh viện, phòng khám',
                '💼 Năm 3-4: Thực tập 1 năm tại BV, chọn chuyên khoa',
                '🏆 Năm 4: Tốt nghiệp, xin việc hoặc học tiếng Nhật/Đức để đi xuất khẩu lao động'
            ],
            vocational: [
                '📚 Học CĐ Y tế, 3 năm (thực hành 70%)',
                '💉 Năm 1: Nền tảng y học, kỹ thuật cơ bản',
                '🛠️ Năm 2: Thực hành ICU, cấp cứu, phẫu thuật',
                '🏢 Năm 3: Thực tập 1 năm tại BV công/tư',
                '📜 Tốt nghiệp: Y tá tại BV hoặc phòng khám',
                '⬆️ Liên thông lên ĐH hoặc học tiếng để đi nước ngoài'
            ]
        },
        
        workEnvironment: {
            style: 'Bệnh viện, phòng khám, viện dưỡng lão',
            hours: '3 ca: sáng 7h-14h, chiều 14h-21h, đêm 21h-7h',
            dress: 'Đồng phục y tá trắng, giày chuyên dụng',
            culture: 'Chuyên nghiệp, áp lực cao, cần sự tận tâm'
        },
        
        recommendations: [
            '💡 Học tiếng Nhật N3 để đi Nhật (lương 60-100tr/tháng)',
            '🏆 Học tiếng Đức B2 để đi Đức (lương 80-120tr/tháng)',
            '📖 Chứng chỉ: BLS, ACLS (cấp cứu tim mạch)',
            '🌐 Tham gia hội Điều dưỡng Việt Nam',
            '🤝 Volunteer tại các chương trình y tế cộng đồng',
            '🎯 Chọn chuyên khoa: ICU, Cấp cứu, Sản, Nhi',
            '🔨 Làm part-time tại phòng khám từ năm 2',
            '📚 Đọc: "Notes on Nursing" - Florence Nightingale'
        ],
        
        challenges: [
            '⚠️ Áp lực tâm lý cao (bệnh nhân nặng, tử vong)',
            '📈 Làm ca đêm ảnh hưởng sức khỏe',
            '😓 Đứng nhiều, mệt mỏi thể chất',
            '💼 Lương thấp tại Việt Nam so với công việc',
            '🎭 Đối mặt với bệnh nhân/gia đình khó tính'
        ],
        
        trends2026: 'Telemedicine Nursing, Home Care, Nursing Robots hỗ trợ, Geriatric Care (chăm sóc người già)',
        
        successStories: [
            'Hàng nghìn y tá Việt Nam đi Nhật, Đức kiếm 60-120tr/tháng',
            'Y tá ICU giỏi tại BV tư lương 15-25tr + thưởng',
            'Điều dưỡng trưởng BV lớn thu nhập 30-50tr/tháng'
        ]
    },

    'pharmacy': {
        id: 'pharmacy',
        name: 'Dược học',
        icon: '💊',
        image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831',
        category: 'health',
        hollandCode: 'I-S',
        requiredSubjects :['hoahoc', 'sinh', 'toan'],
        description: 'Dược sĩ, bào chế thuốc, tư vấn sử dụng thuốc',
        detailedDesc: 'Ngành Dược học đào tạo dược sĩ tư vấn, bào chế, kiểm định thuốc. Có thể làm việc tại nhà thuốc, công ty dược, bệnh viện hoặc tự mở quầy thuốc riêng.',
        
        universities: [
            { name: 'ĐH Y Dược TP.HCM', score: '26-29', combo: 'A00, B00', tuition: '15-20tr/năm' },
            { name: 'ĐH Dược Hà Nội', score: '25-28', combo: 'A00, B00', tuition: '12-18tr/năm' },
            { name: 'ĐH Y Dược Huế', score: '24-27', combo: 'A00, B00', tuition: '10-15tr/năm' },
            { name: 'ĐH Y Dược Cần Thơ', score: '23-26', combo: 'A00, B00', tuition: '10-15tr/năm' },
            { name: 'ĐH Y khoa Phạm Ngọc Thạch', score: '22-25', combo: 'A00, B00', tuition: '25-35tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Dược TP.HCM', duration: '3 năm', cost: '10-15tr/năm', strength: 'Thực hành cao' },
            { name: 'CĐ Y Dược Pasteur', duration: '3 năm', cost: '12-18tr/năm', strength: 'Uy tín' },
            { name: 'CĐ Dược Trung ương Hải Dương', duration: '3 năm', cost: '8-12tr/năm', strength: 'OK' }
        ],
        
        admissionScore: {
            university: '22-29 điểm',
            subjects: 'Toán, Lý, Hóa (A00) hoặc Sinh, Hóa, Lý (B00)'
        },
        
        salary: {
            entry: '8-15 triệu/tháng (Dược sĩ)',
            mid: '15-30 triệu/tháng (Dược sĩ chính)',
            senior: '30-80+ triệu/tháng (Quản lý, Mở quầy thuốc riêng)',
            note: 'Tự mở quầy thuốc kiếm 30-100tr/tháng'
        },
        
        growth: 'Tăng 12%/năm, thị trường dược phẩm mở rộng',
        jobDemand: 'Cao - Mọi quầy thuốc đều cần dược sĩ',
        
        positions: [
            'Dược sĩ Nhà thuốc',
            'Dược sĩ Bệnh viện',
            'Dược sĩ Công ty Dược phẩm',
            'Chuyên viên Kiểm nghiệm Thuốc',
            'Medical Representative (Đại diện Y khoa)',
            'Quản lý Chuỗi Nhà thuốc',
            'Chuyên viên Đăng ký Thuốc',
            'Dược sĩ Lâm sàng',
            'Chủ Quầy thuốc',
            'Giảng viên Dược học'
        ],
        
        skills: ['Hóa dược', 'Bào chế', 'Tư vấn thuốc', 'Kiểm định', 'Quản lý kho thuốc', 'Kê đơn'],
        softSkills: ['Communication', 'Attention to detail', 'Customer service', 'Responsibility'],
        
        requiredTraits: {
            holland: ['I', 'S', 'C'],
            hollandMin: { I: 70, S: 65 },
            eq: ['conscientiousness', 'empathy'],
            lifeskills: ['critical-thinking', 'communication', 'self-regulation']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp A00 (Toán, Lý, Hóa 8+)',
                '💊 Tìm hiểu các loại thuốc phổ biến',
                '🎓 Đăng ký: Y Dược TP.HCM, Dược Hà Nội',
                '📖 Năm 1-2: Hóa hữu cơ, Dược lý, Độc chất học',
                '🚀 Năm 2-3: Bào chế, Dược động học, Tư vấn dược',
                '💼 Năm 3-4: Thực tập nhà thuốc, công ty dược',
                '🏆 Năm 4-5: Tốt nghiệp, xin việc hoặc mở quầy thuốc'
            ],
            vocational: [
                '📚 Học CĐ Dược, 3 năm',
                '💉 Năm 1: Hóa học, sinh học, dược lý căn bản',
                '🛠️ Năm 2: Bào chế, tư vấn thuốc, thực hành',
                '🏢 Năm 3: Thực tập nhà thuốc, bệnh viện',
                '📜 Tốt nghiệp: Dược sĩ tại nhà thuốc',
                '⬆️ Liên thông lên ĐH để mở quầy thuốc riêng'
            ]
        },
        
        workEnvironment: {
            style: 'Nhà thuốc, bệnh viện, công ty dược',
            hours: '8h-20h (nhà thuốc), 8h-17h (công ty)',
            dress: 'Áo blouse trắng, lịch sự',
            culture: 'Chuyên nghiệp, cần tính cẩn thận cao'
        },
        
        recommendations: [
            '💡 Thi chứng chỉ Hành nghề Dược (bắt buộc)',
            '🏆 Học thêm Dược lâm sàng để làm tại BV',
            '📖 Tham gia hội Dược sĩ Việt Nam',
            '🌐 Đọc: Cẩm nang tra cứu thuốc, Medscape',
            '🤝 Làm part-time tại nhà thuốc từ năm 2',
            '🎯 Tích lũy vốn để mở quầy thuốc riêng sau 3-5 năm',
            '🔨 Học kỹ năng bán hàng, chăm sóc khách hàng',
            '📚 Cập nhật thuốc mới, tương tác thuốc liên tục'
        ],
        
        challenges: [
            '⚠️ Trách nhiệm pháp lý cao nếu tư vấn sai',
            '📈 Cạnh tranh gay gắt giữa các nhà thuốc',
            '😓 Đứng nhiều, tiếp xúc khách hàng liên tục',
            '💼 Áp lực doanh số (nếu làm nhà thuốc tư)',
            '🎭 Xử lý khách hàng khó tính, đòi hỏi thuốc không hợp lý'
        ],
        
        trends2026: 'Telepharmacy (tư vấn online), Personalized Medicine, Robotic Dispensing, Dược mỹ phẩm',
        
        successStories: [
            'Nhiều dược sĩ mở chuỗi 5-10 quầy thuốc kiếm 50-200tr/tháng',
            'Dược sĩ công ty dược lớn thu nhập 20-40tr/tháng',
            'Medical Rep giỏi kiếm 30-70tr/tháng từ hoa hồng'
        ]
    },
      
    // ==================== DỊCH VỤ (5 NGÀNH) ====================
    
    'hospitality-tourism': {
        id: 'hospitality-tourism',
        name: 'Quản trị Khách sạn & Du lịch',
        icon: '🏨',
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
        category: 'service',
        hollandCode: 'E-S',
        requiredSubjects :['ngoaingu', 'van', 'toan'],
        description: 'Quản lý khách sạn, resort, nhà hàng, tour guide, sự kiện',
        detailedDesc: 'Ngành đào tạo chuyên gia quản lý khách sạn, resort, du lịch, sự kiện. Là ngành có triển vọng cao khi du lịch VN phát triển mạnh, đón 110 triệu lượt khách/năm.',
        
        universities: [
            { name: 'ĐH Ngoại thương', score: '24-27', combo: 'D01, D10', tuition: '15-20tr/năm' },
            { name: 'ĐH Văn Lang', score: '22-25', combo: 'D01, D10', tuition: '25-35tr/năm' },
            { name: 'ĐH Hoa Sen', score: '21-24', combo: 'D01', tuition: '30-40tr/năm' },
            { name: 'ĐH Đà Lạt', score: '20-23', combo: 'D01, C00', tuition: '10-15tr/năm' },
            { name: 'ĐH Huế', score: '20-23', combo: 'D01, C00', tuition: '10-15tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Du lịch Sài Gòn', duration: '2.5 năm', cost: '15-20tr/năm', strength: 'Thực hành tốt' },
            { name: 'CĐ Văn hóa Nghệ thuật Du lịch SG', duration: '2.5 năm', cost: '12-18tr/năm', strength: 'Uy tín' },
            { name: 'Trung cấp Khách sạn (1-2 năm)', duration: '1-2 năm', cost: '8-15 triệu', strength: 'Ngắn hạn' }
        ],
        
        admissionScore: {
            university: '20-27 điểm',
            subjects: 'Toán, Văn, Anh (D01) hoặc Văn, Sử, Địa (C00)'
        },
        
        salary: {
            entry: '7-12 triệu/tháng (Receptionist, Tour Guide)',
            mid: '15-30 triệu/tháng (Supervisor, Manager)',
            senior: '35-100+ triệu/tháng (General Manager, Director)',
            note: 'Khách sạn 5* quốc tế lương cao hơn 50%'
        },
        
        growth: 'Tăng 15%/năm, du lịch VN top 10 điểm đến châu Á',
        jobDemand: 'Cao - Khách sạn, resort mở mới liên tục',
        
        positions: [
            'Front Office Manager',
            'Housekeeping Manager',
            'F&B Manager (Food & Beverage)',
            'Tour Guide / Tour Leader',
            'Travel Consultant',
            'Event Planner',
            'Guest Relations Manager',
            'Revenue Manager',
            'General Manager (Khách sạn)',
            'Tourism Development Officer'
        ],
        
        skills: ['Customer Service', 'Hotel Management', 'Event Planning', 'Tour Design', 'Revenue Management', 'Anh + 1 ngoại ngữ khác'],
        softSkills: ['Communication', 'Problem-solving', 'Multitasking', 'Leadership', 'Cultural awareness', 'Patience'],
        
        requiredTraits: {
            holland: ['E', 'S', 'A'],
            hollandMin: { E: 65, S: 70 },
            eq: ['social-awareness', 'relationship-management', 'empathy'],
            lifeskills: ['communication', 'problem-solving', 'cultural-sensitivity']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp D01 (Toán, Văn, Anh), Anh 7.5+',
                '🏨 Tìm hiểu nghề tour guide, khách sạn',
                '🎓 Đăng ký: Ngoại thương, Văn Lang, Hoa Sen',
                '📖 Năm 1: Căn bản du lịch, khách sạn, giao tiếp',
                '🚀 Năm 2: Quản trị front office, F&B, housekeeping',
                '💼 Năm 3: Thực tập 6-12 tháng tại khách sạn 4-5*',
                '🏆 Năm 4: Tốt nghiệp, xin việc hoặc đi làm thêm ở nước ngoài'
            ],
            vocational: [
                '📚 Học CĐ Du lịch Sài Gòn, 2.5 năm',
                '💻 Năm 1: Anh chuyên ngành, giao tiếp khách hàng',
                '🛠️ Năm 2: Thực hành front desk, tour guide, F&B',
                '🏢 Năm 2.5: Thực tập khách sạn, công ty lữ hành',
                '📜 Tốt nghiệp: Receptionist, Tour Guide',
                '⬆️ Thăng tiến hoặc liên thông lên ĐH'
            ]
        },
        
        workEnvironment: {
            style: 'Khách sạn, resort, công ty lữ hành, điểm du lịch',
            hours: '3 ca luân phiên (sáng, chiều, đêm), 8h/ca',
            dress: 'Đồng phục lịch sự, chuyên nghiệp',
            culture: 'Năng động, thân thiện, customer-first'
        },
        
        recommendations: [
            '💡 Học tiếng Anh thành thạo (IELTS 6.5+)',
            '🏆 Học thêm tiếng Hoa/Nhật/Hàn để phục vụ khách châu Á',
            '📖 Lấy chứng chỉ: AHLEI (American Hotel & Lodging)',
            '🌐 Tham quan resort, khách sạn 5* thường xuyên',
            '🤝 Làm part-time receptionist từ năm 2',
            '🎯 Chọn chuyên sâu: F&B/Front Office/Housekeeping',
            '🔨 Tham gia event tình nguyện để rèn kỹ năng',
            '📚 Đọc: "Setting the Table" - Danny Meyer'
        ],
        
        challenges: [
            '⚠️ Làm việc ca đêm, lễ Tết không nghỉ',
            '📈 Áp lực từ khách hàng khó tính, than phiền',
            '😓 Đứng nhiều, mệt mỏi thể chất',
            '💼 Lương thấp ở giai đoạn đầu',
            '🎭 Luôn phải cười, thân thiện dù mệt mỏi'
        ],
        
        trends2026: 'Sustainable Tourism, Experiential Travel, Wellness Tourism, Digital Nomad Hotels, AI Concierge, Contactless Check-in',
        
        successStories: [
            'General Manager khách sạn 5* lương 50-100tr/tháng',
            'Tour Guide giỏi tiếng Anh kiếm 20-40tr/tháng + tip',
            'Chủ chuỗi khách sạn boutique revenue 5-20 tỷ/năm'
        ]
    },

    'beauty-spa-wellness': {
        id: 'beauty-spa-wellness',
        name: 'Thẩm mỹ, Spa & Chăm sóc Sức khỏe',
        icon: '💆',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874',
        category: 'service',
        hollandCode: 'S-R',
        requiredSubjects :['sinh', 'hoahoc', 'toan'],
        description: 'Spa therapist, làm đẹp, massage, chăm sóc da, nail',
        detailedDesc: 'Ngành đào tạo chuyên viên spa, thẩm mỹ, chăm sóc sức khỏe. Ngành đang phát triển mạnh với nhu cầu làm đẹp, chăm sóc bản thân tăng cao trong xã hội hiện đại.',
        
        universities: [
            { name: 'ĐH Y Dược TP.HCM (Chăm sóc sức khỏe)', score: '24-27', combo: 'A00, B00', tuition: '15-20tr/năm' },
            { name: 'ĐH Văn Lang (Thẩm mỹ)', score: '21-24', combo: 'D01, B00', tuition: '30-40tr/năm' },
            { name: 'ĐH Hoa Sen (Wellness Management)', score: '20-23', combo: 'D01', tuition: '35-45tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Y tế (Chăm sóc sức khỏe)', duration: '2 năm', cost: '12-18tr/năm', strength: 'Y khoa' },
            { name: 'Trường Thẩm mỹ quốc tế (MISS TRAM, BEMO)', duration: '6-12 tháng', cost: '20-50 triệu', strength: 'Thực hành cao' },
            { name: 'Chứng chỉ Spa Therapist (3-6 tháng)', duration: '3-6 tháng', cost: '10-25 triệu', strength: 'Ngắn hạn' },
            { name: 'Chứng chỉ Nail/Eyelash (1-3 tháng)', duration: '1-3 tháng', cost: '5-15 triệu', strength: 'Cực ngắn' }
        ],
        
        admissionScore: {
            university: '20-27 điểm',
            subjects: 'Toán, Văn, Anh (D01) hoặc Toán, Hóa, Sinh (B00)'
        },
        
        salary: {
            entry: '6-10 triệu/tháng (Therapist, Beautician)',
            mid: '12-25 triệu/tháng (Senior Therapist, Supervisor)',
            senior: '30-100+ triệu/tháng (Spa Manager, Chủ Spa/Salon)',
            note: 'Tự mở spa/salon kiếm 20-80tr/tháng'
        },
        
        growth: 'Tăng 20%/năm, thị trường làm đẹp VN đạt $2 tỷ USD',
        jobDemand: 'Cao - Spa, salon mở mới liên tục',
        
        positions: [
            'Spa Therapist / Massage Therapist',
            'Skincare Specialist',
            'Beautician / Makeup Artist',
            'Nail Technician',
            'Eyelash Extension Artist',
            'Wellness Consultant',
            'Spa Manager',
            'Clinic Aesthetician',
            'Personal Trainer (Wellness)',
            'Chủ Spa / Salon'
        ],
        
        skills: ['Massage', 'Skincare', 'Makeup', 'Nail art', 'Eyelash extension', 'Anatomy', 'Customer care', 'Product knowledge'],
        softSkills: ['Empathy', 'Gentle touch', 'Patience', 'Communication', 'Hygiene awareness', 'Sales skills'],
        
        requiredTraits: {
            holland: ['S', 'R', 'E'],
            hollandMin: { S: 75, R: 60 },
            eq: ['empathy', 'social-awareness', 'relationship-management'],
            lifeskills: ['communication', 'empathy', 'self-care', 'hygiene']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp D01 hoặc B00',
                '💆 Tìm hiểu các liệu trình spa, chăm sóc da',
                '🎓 Đăng ký: Văn Lang (Thẩm mỹ), Y Dược (Chăm sóc sức khỏe)',
                '📖 Năm 1-2: Giải phẫu, sinh lý da, kỹ thuật chăm sóc',
                '🚀 Năm 2-3: Thực hành spa, thẩm mỹ, massage',
                '💼 Năm 3: Thực tập spa 5*, clinic thẩm mỹ',
                '🏆 Năm 3-4: Tốt nghiệp, xin việc hoặc mở salon riêng'
            ],
            vocational: [
                '📚 Học trường Thẩm mỹ (MISS TRAM, BEMO), 6-12 tháng',
                '💻 Tháng 1-3: Lý thuyết chăm sóc da, giải phẫu',
                '🛠️ Tháng 4-6: Thực hành massage, skincare, makeup',
                '🏢 Tháng 6-12: Thực tập spa, clinic',
                '📜 Tốt nghiệp: Therapist tại spa, salon',
                '⬆️ Tích lũy kinh nghiệm 2-3 năm rồi tự mở spa'
            ]
        },
        
        workEnvironment: {
            style: 'Spa, salon, clinic thẩm mỹ, wellness center',
            hours: '9h-21h, ca sáng/chiều/tối',
            dress: 'Đồng phục spa, lịch sự, sạch sẽ',
            culture: 'Thân thiện, thư giãn, chăm sóc khách hàng'
        },
        
        recommendations: [
            '💡 Lấy chứng chỉ: Spa Therapist, Skincare Specialist',
            '🏆 Học thêm tiếng Anh để phục vụ khách nước ngoài',
            '📖 Theo dõi xu hướng làm đẹp Hàn Quốc, Nhật Bản',
            '🌐 Tham quan spa 5* để học cách phục vụ',
            '🤝 Làm part-time tại salon từ năm 1',
            '🎯 Chọn chuyên sâu: Skincare/Massage/Nail/Makeup',
            '🔨 Luyện tập trên mô hình, bạn bè trước khi ra khách',
            '📚 Đọc: Sách về chăm sóc da, y học thẩm mỹ'
        ],
        
        challenges: [
            '⚠️ Đứng nhiều, mệt tay khi massage',
            '📈 Cạnh tranh gay gắt giữa các spa',
            '😓 Áp lực doanh số (bán sản phẩm, dịch vụ)',
            '💼 Thu nhập thấp nếu chưa có khách quen',
            '🎭 Tiếp xúc hóa chất, cần bảo vệ sức khỏe'
        ],
        
        trends2026: 'K-Beauty, Organic Skincare, Medical Spa, Male Grooming, Wellness Tourism, Anti-aging Technology',
        
        successStories: [
            'Chủ chuỗi spa 5-10 chi nhánh kiếm 50-200tr/tháng',
            'Spa Therapist giỏi tại spa 5* lương 15-30tr + tip',
            'KOL làm đẹp, review sản phẩm kiếm 20-100tr/tháng'
        ]
    },

    'pet-care-veterinary': {
        id: 'pet-care-veterinary',
        name: 'Chăm sóc Thú cưng & Thú y',
        icon: '🐾',
        image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6',
        category: 'service',
        hollandCode: 'R-S',
        requiredSubjects :['sinh', 'hoahoc', 'toan'],
        description: 'Bác sĩ thú y, grooming, pet hotel, pet shop',
        detailedDesc: 'Ngành đào tạo bác sĩ thú y, chuyên viên chăm sóc thú cưng. Ngành đang hot khi người Việt chi 50-100 triệu/năm cho thú cưng, thị trường đạt $500 triệu.',
        
        universities: [
            { name: 'ĐH Nông Lâm TP.HCM (Thú y)', score: '24-27', combo: 'A00, B00', tuition: '12-18tr/năm' },
            { name: 'ĐH Nông nghiệp Hà Nội (Thú y)', score: '23-26', combo: 'A00, B00', tuition: '10-15tr/năm' },
            { name: 'ĐH Cần Thơ (Thú y)', score: '22-25', combo: 'A00, B00', tuition: '10-15tr/năm' },
            { name: 'ĐH Thái Nguyên (Thú y)', score: '20-23', combo: 'A00, B00', tuition: '8-12tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Thú y', duration: '3 năm', cost: '10-15tr/năm', strength: 'Thực hành' },
            { name: 'Chứng chỉ Pet Groomer (3-6 tháng)', duration: '3-6 tháng', cost: '10-25 triệu', strength: 'Ngắn hạn' },
            { name: 'Chứng chỉ Pet Training (6-12 tháng)', duration: '6-12 tháng', cost: '15-30 triệu', strength: 'Huấn luyện' }
        ],
        
        admissionScore: {
            university: '20-27 điểm',
            subjects: 'Toán, Lý, Hóa (A00) hoặc Toán, Hóa, Sinh (B00)'
        },
        
        salary: {
            entry: '8-15 triệu/tháng (Bác sĩ thú y, Groomer)',
            mid: '18-35 triệu/tháng (Bác sĩ chính, Pet Shop Manager)',
            senior: '40-150+ triệu/tháng (Chủ phòng khám, Chuỗi pet shop)',
            note: 'Tự mở phòng khám thú y kiếm 30-100tr/tháng'
        },
        
        growth: 'Tăng 25%/năm, 30% hộ gia đình TP.HCM nuôi thú cưng',
        jobDemand: 'Cao - Thiếu hụt bác sĩ thú y, pet groomer',
        
        positions: [
            'Bác sĩ Thú y (Chó, mèo, thú cảnh)',
            'Kỹ thuật viên Thú y',
            'Pet Groomer (Cắt tỉa, tắm)',
            'Pet Trainer (Huấn luyện)',
            'Pet Hotel Manager',
            'Pet Shop Owner',
            'Pet Nutritionist',
            'Animal Behaviorist',
            'Veterinary Surgeon (Phẫu thuật)',
            'Mobile Vet (Khám tận nhà)'
        ],
        
        skills: ['Giải phẫu động vật', 'Bệnh lý', 'Phẫu thuật', 'Grooming', 'Training', 'Dinh dưỡng', 'X-quang', 'Emergency care'],
        softSkills: ['Empathy', 'Patience', 'Animal handling', 'Communication with owners', 'Problem-solving', 'Gentle touch'],
        
        requiredTraits: {
            holland: ['R', 'S', 'I'],
            hollandMin: { R: 70, S: 70 },
            eq: ['empathy', 'self-regulation', 'patience'],
            lifeskills: ['empathy', 'problem-solving', 'self-care', 'patience']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp A00 hoặc B00 (Sinh học quan trọng)',
                '🐾 Tìm hiểu các giống chó mèo, bệnh thường gặp',
                '🎓 Đăng ký: Nông Lâm HCM, Nông nghiệp HN',
                '📖 Năm 1-2: Giải phẫu, sinh lý động vật, vi sinh',
                '🚀 Năm 2-3: Bệnh lý, dược lý, phẫu thuật',
                '💼 Năm 3-4: Thực tập phòng khám thú y, trang trại',
                '🏆 Năm 4-5: Tốt nghiệp, xin việc hoặc mở phòng khám'
            ],
            vocational: [
                '📚 Học CĐ Thú y 3 năm hoặc chứng chỉ Pet Groomer',
                '💻 Năm 1: Cơ bản thú y, chăm sóc vật nuôi',
                '🛠️ Năm 2: Thực hành khám bệnh, grooming',
                '🏢 Năm 3: Thực tập phòng khám, pet shop',
                '📜 Tốt nghiệp: Kỹ thuật viên thú y, Groomer',
                '⬆️ Liên thông ĐH hoặc mở pet shop riêng'
            ]
        },
        
        workEnvironment: {
            style: 'Phòng khám thú y, pet shop, pet hotel',
            hours: '8h-18h, cấp cứu 24/7 nếu phòng khám lớn',
            dress: 'Áo blouse trắng, bảo hộ khi phẫu thuật',
            culture: 'Thân thiện, yêu động vật, nhiệt tình'
        },
        
        recommendations: [
            '💡 Nuôi thú cưng từ nhỏ để hiểu tâm lý, hành vi',
            '🏆 Lấy chứng chỉ hành nghề Bác sĩ Thú y',
            '📖 Học phẫu thuật, X-quang, siêu âm',
            '🌐 Join group: Bác sĩ Thú y Việt Nam, Pet Lovers',
            '🤝 Làm part-time tại pet shop từ năm 2',
            '🎯 Chọn chuyên sâu: Chó mèo/Chim/Thú cảnh/Gia súc',
            '🔨 Tham quan phòng khám thú y hiện đại',
            '📚 Đọc: "The Complete Dog Care Manual"'
        ],
        
        challenges: [
            '⚠️ Bị cắn, cào bởi thú cưng hoang dã',
            '📈 Áp lực khi động vật chết, chủ nuôi buồn',
            '😓 Làm việc cuối tuần, cấp cứu đêm',
            '💼 Đầu tư thiết bị y tế cao (X-quang, phẫu thuật)',
            '🎭 Thú cưng không nói được, khó chẩn đoán'
        ],
        
        trends2026: 'Pet Insurance, Telemedicine for Pets, Pet DNA Testing, Smart Pet Devices, Luxury Pet Hotels, Organic Pet Food',
        
        successStories: [
            'Bác sĩ thú y mở phòng khám kiếm 30-100tr/tháng',
            'Chủ chuỗi pet shop 10 chi nhánh doanh thu 10-30 tỷ/năm',
            'Pet influencer (Instagram, TikTok) kiếm 10-50tr/tháng'
        ]
    },

    'aviation-cabin-crew': {
        id: 'aviation-cabin-crew',
        name: 'Tiếp viên Hàng không',
        icon: '✈️',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        category: 'service',
        hollandCode: 'S-E',
        requiredSubjects :['ngoaingu', 'van', 'diali'],
        description: 'Tiếp viên hàng không, cabin crew, ground staff',
        detailedDesc: 'Ngành đào tạo tiếp viên hàng không, phục vụ trên máy bay, dịch vụ mặt đất. Công việc hấp dẫn với mức lương cao, được đi nhiều nước, ưu đãi vé máy bay.',
        
        universities: [
            { name: 'ĐH Hàng không Việt Nam', score: '23-26', combo: 'D01, A00', tuition: '20-30tr/năm' },
            { name: 'ĐH Ngoại thương (Du lịch Hàng không)', score: '24-27', combo: 'D01', tuition: '15-20tr/năm' },
            { name: 'ĐH Văn Lang (Hàng không)', score: '22-25', combo: 'D01', tuition: '30-40tr/năm' }
        ],
        
        vocational: [
            { name: 'Trường Cabin Crew Vietnam Airlines', duration: '3-6 tháng', cost: '40-80 triệu', strength: 'Uy tín, thực tế' },
            { name: 'Trường Tiếp viên Vietjet', duration: '3 tháng', cost: '30-50 triệu', strength: 'Cam kết việc làm' },
            { name: 'Khóa Ground Staff (2-3 tháng)', duration: '2-3 tháng', cost: '15-30 triệu', strength: 'Ngắn hạn' }
        ],
        
        admissionScore: {
            university: '22-27 điểm',
            subjects: 'Toán, Văn, Anh (D01) + yêu cầu ngoại hình, sức khỏe'
        },
        
        salary: {
            entry: '18-25 triệu/tháng (Domestic Cabin Crew)',
            mid: '30-50 triệu/tháng (International Cabin Crew)',
            senior: '60-120 triệu/tháng (Purser, Chief Cabin Crew)',
            note: 'Hãng nước ngoài: Emirates, Qatar lương $2000-5000/tháng'
        },
        
        growth: 'Tăng 12%/năm, hàng không VN phục hồi mạnh sau COVID',
        jobDemand: 'Trung bình đến Cao - Phụ thuộc vào ngành hàng không',
        
        positions: [
            'Flight Attendant (Tiếp viên)',
            'Senior Flight Attendant',
            'Purser (Trưởng cabin)',
            'Chief Purser',
            'Ground Staff (Check-in, Boarding)',
            'Customer Service Agent',
            'VIP Lounge Staff',
            'Inflight Service Manager',
            'Cabin Crew Trainer',
            'Airport Services Manager'
        ],
        
        skills: ['Dịch vụ khách hàng', 'An toàn bay', 'Cấp cứu', 'Tiếng Anh TOEIC 600+', 'Grooming', 'Conflict resolution', 'Service protocol'],
        softSkills: ['Communication', 'Patience', 'Teamwork', 'Problem-solving', 'Stress management', 'Cultural awareness', 'Smile'],
        
        requiredTraits: {
            holland: ['S', 'E', 'C'],
            hollandMin: { S: 75, E: 65 },
            eq: ['social-awareness', 'relationship-management', 'self-regulation', 'empathy'],
            lifeskills: ['communication', 'problem-solving', 'cultural-sensitivity', 'stress-management']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp D01, Anh TOEIC 600+',
                '✈️ Chuẩn bị ngoại hình: chiều cao nữ 1m60+, nam 1m70+',
                '🎓 Đăng ký: Hàng không VN, Văn Lang, Ngoại thương',
                '📖 Năm 1-2: Anh chuyên ngành, dịch vụ hàng không',
                '🚀 Năm 2-3: An toàn bay, cấp cứu, service protocol',
                '💼 Năm 3: Thực tập hãng hàng không, sân bay',
                '🏆 Năm 3-4: Tốt nghiệp, apply Vietnam Airlines, Vietjet, Bamboo'
            ],
            vocational: [
                '📚 Học trường Cabin Crew (VNA, Vietjet), 3-6 tháng',
                '💻 Tháng 1-2: Lý thuyết an toàn bay, cấp cứu, service',
                '🛠️ Tháng 3-4: Thực hành trên mock-up cabin',
                '🏢 Tháng 5-6: Kiểm tra, bay thử nghiệm',
                '📜 Tốt nghiệp: Apply hãng hàng không',
                '⬆️ Sau 3-5 năm, thăng Purser hoặc chuyển Ground'
            ]
        },
        
        workEnvironment: {
            style: 'Trên máy bay, sân bay, văn phòng hãng',
            hours: 'Ca bay 6-12h, nghỉ không cố định',
            dress: 'Đồng phục hãng (áo vest, váy, scarf)',
            culture: 'Chuyên nghiệp, quốc tế, năng động'
        },
        
        recommendations: [
            '💡 Học tiếng Anh TOEIC 700+ (bắt buộc)',
            '🏆 Học thêm tiếng Hoa/Nhật/Hàn (lợi thế)',
            '📖 Luyện tập grooming, makeup, giao tiếp',
            '🌐 Theo dõi tuyển dụng Vietnam Airlines, Vietjet',
            '🤝 Tham gia khóa First Aid, CPR',
            '🎯 Giữ gìn ngoại hình, sức khỏe tốt',
            '🔨 Luyện speaking, pronunciation chuẩn',
            '📚 Đọc: "Confessions of a Flight Attendant"'
        ],
        
        challenges: [
            '⚠️ Bay nhiều, jet lag, xa gia đình',
            '📈 Yêu cầu ngoại hình, sức khỏe nghiêm ngặt',
            '😓 Áp lực từ khách hàng khó tính trên chuyến bay',
            '💼 Nghỉ không cố định, lễ Tết phải bay',
            '🎭 Cạnh tranh cao khi tuyển dụng (1000 người/vị trí)'
        ],
        
        trends2026: 'Sustainable Aviation, Premium Economy Boom, Health & Safety Focus, Digital Boarding, Contactless Service',
        
        successStories: [
            'Chief Purser Vietnam Airlines lương 60-100tr/tháng',
            'Cabin Crew Emirates/Qatar lương $3K-5K/tháng + phụ cấp',
            'Chuyển sang Ground Manager thu nhập 30-60tr/tháng'
        ]
    },

    'housekeeping-domestic-services': {
        id: 'housekeeping-domestic-services',
        name: 'Dịch vụ Gia đình & Quản gia',
        icon: '🏡',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
        category: 'service',
        hollandCode: 'S-R',
        requiredSubjects :['ngoaingu', 'van', 'diali'],
        description: 'Quản gia, giúp việc chuyên nghiệp, chăm sóc người già, trẻ em',
        detailedDesc: 'Ngành đào tạo quản gia chuyên nghiệp, giúp việc gia đình, chăm sóc người già, trẻ em. Ngành đang phát triển khi gia đình VN bận rộn, cần dịch vụ chuyên nghiệp.',
        
        universities: [
            { name: 'ĐH Văn Lang (Quản trị Dịch vụ)', score: '20-23', combo: 'D01', tuition: '30-40tr/năm' },
            { name: 'ĐH Hoa Sen (Service Management)', score: '19-22', combo: 'D01, C00', tuition: '35-45tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Dịch vụ Gia đình', duration: '1-2 năm', cost: '10-20tr/năm', strength: 'Thực hành' },
            { name: 'Chứng chỉ Quản gia chuyên nghiệp (3-6 tháng)', duration: '3-6 tháng', cost: '15-35 triệu', strength: 'Cao cấp' },
            { name: 'Chứng chỉ Giúp việc (1-3 tháng)', duration: '1-3 tháng', cost: '5-15 triệu', strength: 'Cơ bản' },
            { name: 'Chứng chỉ Chăm sóc Người già (2-4 tháng)', duration: '2-4 tháng', cost: '8-20 triệu', strength: 'Chuyên sâu' }
        ],
        
        admissionScore: {
            university: '19-23 điểm',
            subjects: 'Toán, Văn, Anh (D01)'
        },
        
        salary: {
            entry: '7-12 triệu/tháng (Giúp việc, Bảo mẫu)',
            mid: '15-30 triệu/tháng (Quản gia, Chăm sóc người già)',
            senior: '35-100+ triệu/tháng (Head Housekeeper, Chủ công ty dịch vụ)',
            note: 'Đi Singapore, Hong Kong làm quản gia kiếm $800-2000/tháng'
        },
        
        growth: 'Tăng 18%/năm, gia đình trẻ cần dịch vụ chuyên nghiệp',
        jobDemand: 'Cao - Thiếu hụt giúp việc, quản gia chuyên nghiệp',
        
        positions: [
            'Giúp việc Gia đình',
            'Quản gia (Butler/Head Housekeeper)',
            'Bảo mẫu (Nanny)',
            'Chăm sóc Người già (Caregiver)',
            'Cook/Chef gia đình',
            'Personal Assistant',
            'Estate Manager (Quản lý biệt thự)',
            'Laundry Specialist',
            'Housekeeping Supervisor',
            'Chủ công ty Dịch vụ Gia đình'
        ],
        
        skills: ['Vệ sinh nhà cửa', 'Nấu ăn', 'Chăm sóc trẻ em', 'Chăm sóc người già', 'Giặt ủi', 'Quản lý thời gian', 'Giao tiếp'],
        softSkills: ['Patience', 'Reliability', 'Discretion', 'Empathy', 'Organization', 'Attention to detail', 'Trustworthiness'],
        
        requiredTraits: {
            holland: ['S', 'R', 'C'],
            hollandMin: { S: 70, R: 65 },
            eq: ['empathy', 'conscientiousness', 'self-regulation'],
            lifeskills: ['empathy', 'responsibility', 'planning-organization', 'patience']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Tổ hợp D01 hoặc không cần điểm cao',
                '🏡 Tìm hiểu nghề quản gia, dịch vụ gia đình',
                '🎓 Đăng ký: Văn Lang, Hoa Sen (nếu muốn học ĐH)',
                '📖 Năm 1-2: Quản trị dịch vụ, nấu ăn, chăm sóc',
                '🚀 Năm 2-3: Thực hành quản gia, khách sạn, gia đình',
                '💼 Năm 3: Thực tập gia đình giàu, biệt thự',
                '🏆 Năm 3-4: Tốt nghiệp, xin việc hoặc đi nước ngoài'
            ],
            vocational: [
                '📚 Học chứng chỉ Quản gia, 3-6 tháng',
                '💻 Tháng 1-2: Vệ sinh, nấu ăn, giao tiếp',
                '🛠️ Tháng 3-4: Chăm sóc trẻ, người già, quản lý nhà',
                '🏢 Tháng 5-6: Thực tập gia đình, biệt thự',
                '📜 Tốt nghiệp: Giúp việc tại gia đình giàu',
                '⬆️ Tích lũy kinh nghiệm rồi đi nước ngoài hoặc mở công ty'
            ]
        },
        
        workEnvironment: {
            style: 'Biệt thự, chung cư cao cấp, nhà riêng',
            hours: 'Ở lại: 24h sẵn sàng | Theo giờ: 8h-17h',
            dress: 'Đồng phục lịch sự hoặc casual sạch sẽ',
            culture: 'Tin cậy, kín đáo, tận tâm'
        },
        
        recommendations: [
            '💡 Học tiếng Anh để đi nước ngoài (Singapore, HK)',
            '🏆 Lấy chứng chỉ Quản gia chuyên nghiệp',
            '📖 Học nấu ăn, chăm sóc trẻ, người già',
            '🌐 Join group: Giúp việc Việt Nam, Quản gia Singapore',
            '🤝 Làm part-time tại gia đình từ sớm',
            '🎯 Chọn chuyên sâu: Quản gia/Bảo mẫu/Chăm sóc người già',
            '🔨 Rèn luyện tính kiên nhẫn, chu đáo',
            '📚 Đọc: Sách về chăm sóc gia đình, quản lý nhà'
        ],
        
        challenges: [
            '⚠️ Phải ở lại nhà, xa gia đình',
            '📈 Công việc nặng nhọc, tỉ mỉ',
            '😓 Áp lực từ gia chủ khó tính',
            '💼 Lương thấp nếu chưa có kinh nghiệm',
            '🎭 Cần giữ kín thông tin gia đình, không được tiết lộ'
        ],
        
        trends2026: 'Professional Housekeeping Services, Elder Care Boom, App-based Cleaning Services, Eco-friendly Cleaning, Smart Home Integration',
        
        successStories: [
            'Quản gia gia đình giàu TP.HCM lương 25-60tr/tháng',
            'Giúp việc Singapore kiếm $800-1500/tháng + ăn ở',
            'Chủ công ty dịch vụ gia đình doanh thu 5-20 tỷ/năm'
        ]
    },

    'content-creator': {
        id: 'content-creator',
        name: 'Sáng tạo Nội dung Số (Content Creator)',
        icon: '🎬',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
        category: 'creative',
        hollandCode: 'A-E',
        requiredSubjects :['van', 'ngoaingu', 'tin'],
        description: 'YouTuber, TikToker, Influencer, Video Creator, Podcaster',
        detailedDesc: 'Ngành sáng tạo nội dung số đào tạo người làm video, podcast, social media content. Là ngành hot với Gen Z, mức thu nhập không giới hạn, tự do sáng tạo và xây dựng thương hiệu cá nhân.',
        
        universities: [
            { name: 'ĐH Khoa học Xã hội và Nhân văn', score: '22-25', combo: 'C00, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH FPT (Digital Content)', score: '20-23', combo: 'D01, D07', tuition: '55-65tr/năm' },
            { name: 'ĐH Văn Lang (Multimedia)', score: '19-22', combo: 'D01', tuition: '25-35tr/năm' },
            { name: 'ĐH RMIT (Media & Communication)', score: 'IELTS 6.0+', combo: 'Portfolio', tuition: '400-500tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Nghệ thuật HCM', duration: '2 năm', cost: '15-20tr/năm', strength: 'Thực hành sản xuất video' },
            { name: 'Arena Multimedia', duration: '1-2 năm', cost: '30-60 triệu', strength: 'Kỹ năng editing chuyên sâu' },
            { name: 'Online Courses (Udemy/Skillshare)', duration: '3-6 tháng', cost: '2-10 triệu', strength: 'Linh hoạt, cập nhật trend' }
        ],
        
        admissionScore: {
            university: '19-25 điểm',
            subjects: 'Văn, Sử, Anh (C00) hoặc Toán, Văn, Anh (D01)'
        },
        
        salary: {
            entry: '0-10 triệu/tháng (Mới bắt đầu, chưa có audience)',
            mid: '15-50 triệu/tháng (10K-100K followers, brand deals)',
            senior: '100-500+ triệu/tháng (500K+ followers, top creators)',
            note: 'Thu nhập từ: AdSense, Sponsorship, Affiliate, Course, Product'
        },
        
        growth: 'Tăng 60%/năm, thị trường creator economy VN đạt $2B năm 2025',
        jobDemand: 'Cao - Mọi brand đều cần content creator',
        
        positions: [
            'YouTuber / Video Creator',
            'TikToker / Short-form Content',
            'Podcaster',
            'Instagram/Facebook Influencer',
            'Live Streamer (Gaming/Shopping)',
            'Content Strategist',
            'Social Media Manager',
            'Community Manager',
            'UGC Creator (User Generated Content)',
            'Personal Brand Consultant'
        ],
        
        skills: ['Storytelling', 'Video editing', 'Photography', 'Copywriting', 'SEO/SMO', 'Analytics'],
        softSkills: ['Creativity', 'Consistency', 'Audience engagement', 'Trend-spotting', 'Personal branding'],
        
        requiredTraits: {
            holland: ['A', 'E', 'S'],
            hollandMin: { A: 75, E: 65 },
            eq: ['social-awareness', 'relationship-management', 'self-regulation'],
            lifeskills: ['creativity', 'communication', 'resilience', 'self-learning']
        },
        
        roadmap: {
            thpt: [
                '📱 Bắt đầu tạo content ngay từ năm 11-12 (TikTok/YouTube)',
                '📸 Học chụp ảnh, quay video, editing cơ bản (CapCut, Premiere)',
                '🎓 Học ngành Truyền thông, Marketing Digital hoặc tự học',
                '📊 Năm 1-2: Học content strategy, copywriting, analytics',
                '🎬 Năm 2-3: Build personal brand, đạt 10K+ followers 1 platform',
                '💼 Năm 3-4: Hợp tác brand deals, monetize content',
                '🚀 Tốt nghiệp: 50K+ followers, có thu nhập ổn định từ content'
            ],
            vocational: [
                '📱 Tự học qua YouTube, TikTok tutorials',
                '🎥 Học editing tại Arena Multimedia hoặc online',
                '📊 Tham gia khóa Content Creator từ Google/Meta',
                '💰 Bắt đầu kiếm tiền từ tháng 3-6 (AdSense, affiliate)',
                '🏆 Đạt 10K followers trong 6-12 tháng',
                '⬆️ Scale lên nhiều platform (TikTok → YouTube → Instagram)'
            ]
        },
        
        workEnvironment: {
            style: 'Tự do, làm ở nhà hoặc studio riêng',
            hours: 'Flexible, nhưng cần consistency đăng content',
            dress: 'Tùy content style, có thể rất casual',
            culture: 'Độc lập, sáng tạo, kết nối cộng đồng'
        },
        
        recommendations: [
            '💡 Chọn niche rõ ràng: Tech review, Beauty, Finance, Education...',
            '🏆 Post consistently: 1 video/ngày TikTok, 2-3 video/tuần YouTube',
            '📖 Học SEO YouTube, TikTok algorithm để viral content',
            '🌐 Join creator communities: TikTok Creator Fund, YouTube Partner',
            '🤝 Network với creators khác để collab',
            '🎯 Monetize đa dạng: Ads + Sponsorship + Course + Merch',
            '🔨 Đầu tư thiết bị: Camera, mic, lighting từ 10-30 triệu',
            '📚 Học: "Crushing It" - Gary Vee, "Jab Jab Right Hook"'
        ],
        
        challenges: [
            '⚠️ Thu nhập không ổn định 6-12 tháng đầu',
            '📈 Algorithm thay đổi liên tục, cần thích nghi nhanh',
            '😓 Burnout khi phải tạo content liên tục',
            '🤖 Cạnh tranh cực cao, khó nổi bật',
            '💼 Áp lực duy trì engagement, followers có thể giảm đột ngột',
            '🎭 Haters, toxic comments ảnh hưởng mental health'
        ],
        
        trends2026: 'AI Content Tools (Midjourney, ChatGPT), Short-form Video dominance, Live Shopping, Podcast boom, Micro-influencers rise, Authenticity > Polish',
        
        successStories: [
            'Khoai Lang Thang - Travel vlogger 4M+ subscribers, thu nhập 100-500tr/tháng',
            'Giang Ơi - Lifestyle/Book creator, 1M+ followers, author, brand owner',
            'Oops Banana - Comedy TikToker 10M+ followers, signed MCN deals'
        ]
    },

    'ux-ui-designer': {
        id: 'ux-ui-designer',
        name: 'Thiết kế Trải nghiệm Người dùng (UX/UI Design)',
        icon: '🎨',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
        category: 'creative',
        hollandCode: 'A-I',
        requiredSubjects :['van', 'tin', 'ngoaingu'],
        description: 'Product Design, UI/UX, App Design, Web Design',
        detailedDesc: 'Ngành thiết kế trải nghiệm người dùng tập trung vào tạo giao diện đẹp, dễ dùng cho app/web. Là ngành cực hot trong tech với mức lương cao, cần kết hợp giữa nghệ thuật và tư duy logic.',
        
        universities: [
            { name: 'ĐH Kiến trúc TP.HCM', score: '24-27', combo: 'V00, D01', tuition: '12-18tr/năm' },
            { name: 'ĐH FPT (Design)', score: '22-25', combo: 'D01, D07', tuition: '60-70tr/năm' },
            { name: 'ĐH Mỹ thuật Công nghiệp', score: '23-26', combo: 'V00', tuition: '15-20tr/năm' },
            { name: 'ĐH RMIT (Digital Design)', score: 'IELTS 6.0+', combo: 'Portfolio', tuition: '450-550tr/năm' }
        ],
        
        vocational: [
            { name: 'Arena Multimedia (UI/UX)', duration: '12-18 tháng', cost: '40-60 triệu', strength: 'Portfolio-focused' },
            { name: 'Bootcamp UX/UI', duration: '6-9 tháng', cost: '30-80 triệu', strength: 'Job placement support' },
            { name: 'Online Coursera/Udemy', duration: '3-6 tháng', cost: '5-15 triệu', strength: 'Flexible learning' }
        ],
        
        admissionScore: {
            university: '22-27 điểm + Portfolio',
            subjects: 'Vẽ, Văn, Anh (V00) hoặc Toán, Văn, Anh (D01)'
        },
        
        salary: {
            entry: '12-20 triệu/tháng (Junior UI/UX)',
            mid: '25-50 triệu/tháng (Senior Designer, 3-5 năm)',
            senior: '60-120+ triệu/tháng (Lead Designer, Design Director)',
            note: 'Remote cho client nước ngoài: $2000-5000/tháng'
        },
        
        growth: 'Tăng 40%/năm, mọi công ty tech đều cần UI/UX designer',
        jobDemand: 'Rất cao - Thiếu hụt designer chất lượng',
        
        positions: [
            'UI Designer (Giao diện)',
            'UX Designer (Trải nghiệm)',
            'Product Designer (Sản phẩm tổng thể)',
            'Interaction Designer',
            'Visual Designer',
            'Design System Manager',
            'UX Researcher',
            'Motion Designer',
            'Service Designer',
            'Design Director/Head of Design'
        ],
        
        skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping', 'User research', 'HTML/CSS cơ bản'],
        softSkills: ['Empathy', 'Problem-solving', 'Communication', 'Collaboration', 'Attention to detail'],
        
        requiredTraits: {
            holland: ['A', 'I', 'E'],
            hollandMin: { A: 70, I: 60 },
            eq: ['empathy', 'social-awareness', 'self-regulation'],
            lifeskills: ['creativity', 'critical-thinking', 'communication']
        },
        
        roadmap: {
            thpt: [
                '🎨 Năm 12: Học vẽ cơ bản, làm quen Photoshop/Illustrator',
                '💻 Tự học Figma qua YouTube, làm redesign app có sẵn',
                '🎓 Thi vào trường Design hoặc IT (có thể chuyển sang UX/UI)',
                '📐 Năm 1-2: Design principles, typography, color theory, layout',
                '🔍 Năm 2-3: UX research, wireframing, prototyping, usability testing',
                '💼 Năm 3-4: Thực tập tại agency/startup, build portfolio 10+ projects',
                '🏆 Tốt nghiệp: Portfolio mạnh, hiểu cả UI lẫn UX, biết code cơ bản'
            ],
            vocational: [
                '📱 Học Figma, Adobe XD qua free courses',
                '🎨 Tham gia Bootcamp UX/UI 6-9 tháng',
                '🏆 Build portfolio: Redesign 5 app/website nổi tiếng',
                '📊 Học UX research: user interview, A/B testing',
                '💼 Freelance trên Fiverr/Upwork để tích lũy kinh nghiệm',
                '⬆️ Apply junior designer tại startup sau 6-12 tháng'
            ]
        },
        
        workEnvironment: {
            style: 'Creative studio, open space, startup culture',
            hours: '9h-18h, flexible, WFH 2-3 ngày/tuần',
            dress: 'Casual, creative, thể hiện cá tính',
            culture: 'Sáng tạo, feedback culture, design thinking'
        },
        
        recommendations: [
            '💡 Build portfolio trên Behance, Dribbble ngay từ năm 1',
            '🏆 Tham gia design challenges: Daily UI, 36 Days of Type',
            '📖 Đọc: "Don\'t Make Me Think", "The Design of Everyday Things"',
            '🌐 Follow top designers: Refactoring UI, Nielsen Norman Group',
            '🤝 Join communities: Designer Việt Nam, UX Vietnam',
            '🎯 Specialize: Mobile app UI, Web design, Design systems',
            '🔨 Master tools: Figma (must), Adobe Suite, Protopie',
            '📚 Học coding cơ bản: HTML/CSS để hiểu feasibility'
        ],
        
        challenges: [
            '⚠️ Revisions vô tận từ client/stakeholder',
            '📈 Trend design thay đổi nhanh, cần cập nhật liên tục',
            '😓 Developer không implement đúng design',
            '🤖 AI tools (Midjourney, Figma AI) thay thế công việc cơ bản',
            '💼 Cạnh tranh cao với designer giá rẻ',
            '🎭 Phải balance giữa aesthetics và business goals'
        ],
        
        trends2026: 'AI-assisted design, Dark mode everywhere, Minimalism, Neumorphism, Microinteractions, Accessibility-first, Design systems',
        
        successStories: [
            'Nhiều UI/UX designer VN làm remote cho Airbnb, Google với lương $5K-10K/tháng',
            'Founder công ty design VN phục vụ client Mỹ/Úc, doanh thu tỷ/năm',
            'Senior designer VN transition sang Product Manager với lương x2'
        ]
    },

    'ecommerce-specialist': {
        id: 'ecommerce-specialist',
        name: 'Chuyên viên Thương mại Điện tử (E-commerce)',
        icon: '🛒',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
        category: 'business',
        hollandCode: 'E-C',
        requiredSubjects :['toan', 'tin', 'ngoaingu'],
        description: 'Shopee/Lazada Seller, Amazon FBA, Dropshipping, Online Store',
        detailedDesc: 'Ngành thương mại điện tử đào tạo chuyên gia bán hàng online, quản lý shop trên sàn TMĐT. Là ngành bùng nổ với doanh thu ngành đạt $20B năm 2025, cơ hội khởi nghiệp cao.',
        
        universities: [
            { name: 'ĐH Kinh tế TP.HCM', score: '25-28', combo: 'A00, D01', tuition: '12-18tr/năm' },
            { name: 'ĐH Ngoại thương', score: '24-27', combo: 'D01, D07', tuition: '15-20tr/năm' },
            { name: 'ĐH FPT (E-commerce)', score: '22-25', combo: 'D01', tuition: '60-70tr/năm' },
            { name: 'ĐH Công nghiệp TP.HCM', score: '20-23', combo: 'A00, D01', tuition: '10-15tr/năm' }
        ],
        
        vocational: [
            { name: 'Khóa E-commerce Specialist', duration: '3-6 tháng', cost: '10-30 triệu', strength: 'Thực chiến bán hàng thật' },
            { name: 'Shopee University / Lazada Uni', duration: '1-3 tháng', cost: 'Miễn phí', strength: 'Chính thống từ platform' },
            { name: 'Online Marketing Bootcamp', duration: '6 tháng', cost: '20-50 triệu', strength: 'Full-stack E-com' }
        ],
        
        admissionScore: {
            university: '20-28 điểm',
            subjects: 'Toán, Văn, Anh (D01) hoặc Toán, Lý, Anh (A00)'
        },
        
        salary: {
            entry: '8-15 triệu/tháng (E-com Specialist)',
            mid: '20-40 triệu/tháng (E-com Manager)',
            senior: '50-100+ triệu/tháng (Head of E-commerce) + Shop owner: 100-500tr/tháng doanh thu',
            note: 'Thu nhập từ bán hàng riêng có thể cao hơn lương nhiều lần'
        },
        
        growth: 'Tăng 35%/năm, VN có 65M+ người mua sắm online',
        jobDemand: 'Rất cao - Mọi brand cần có mặt trên sàn TMĐT',
        
        positions: [
            'E-commerce Specialist (Shopee/Lazada/TikTok Shop)',
            'Marketplace Manager',
            'Amazon FBA Seller',
            'Dropshipping Entrepreneur',
            'Online Store Manager',
            'E-commerce Marketing',
            'Product Listing Specialist',
            'Customer Service E-com',
            'Logistics Coordinator',
            'E-commerce Consultant'
        ],
        
        skills: ['Data analytics', 'SEO Shopee/Lazada', 'Ads (Facebook/Google/TikTok)', 'Product photography', 'Excel/Sheets', 'Inventory management'],
        softSkills: ['Customer service', 'Negotiation', 'Problem-solving', 'Multitasking', 'Resilience'],
        
        requiredTraits: {
            holland: ['E', 'C', 'S'],
            hollandMin: { E: 70, C: 60 },
            eq: ['self-regulation', 'relationship-management', 'motivation'],
            lifeskills: ['financial-literacy', 'problem-solving', 'resilience']
        },
        
        roadmap: {
            thpt: [
                '🛒 Năm 12: Thử bán hàng online (Shopee/Facebook) để test market',
                '📊 Học Excel, Google Analytics cơ bản',
                '🎓 Thi vào Kinh tế, Marketing hoặc IT',
                '📦 Năm 1-2: Học Marketing, Logistics, Customer Behavior',
                '🚀 Năm 2-3: Làm part-time tại công ty E-com, học Ads',
                '💼 Năm 3-4: Thực tập tại Shopee/Lazada/Tiki, hoặc mở shop riêng',
                '🏆 Tốt nghiệp: Shop riêng 50-200 đơn/ngày hoặc quản lý store lớn'
            ],
            vocational: [
                '📱 Học free course từ Shopee University, Google Digital Garage',
                '🛍️ Mở shop thử nghiệm với 5-10 sản phẩm (vốn 5-10 triệu)',
                '📊 Học chạy Ads Facebook/TikTok, tối ưu listing',
                '💰 Scale lên 1000 đơn/tháng trong 6-12 tháng',
                '🏆 Đăng ký Shopee Mall/Lazada Official để tăng trust',
                '⬆️ Mở rộng: Dropshipping, bán hàng xuyên biên giới'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng hoặc làm online tại nhà',
            hours: '9h-18h (nhân viên) hoặc Flexible (shop owner)',
            dress: 'Casual, thoải mái',
            culture: 'Fast-paced, data-driven, customer-centric'
        },
        
        recommendations: [
            '💡 Bắt đầu bán hàng online ngay, học bằng thực hành',
            '🏆 Tham gia Shopee Seller Community, Facebook groups',
            '📖 Học: Product research, supplier sourcing (Alibaba, 1688)',
            '🌐 Master 1 platform trước (Shopee) rồi mở rộng',
            '🤝 Network với suppliers, logistics partners',
            '🎯 Niche down: Fashion, Beauty, Electronics, Handmade...',
            '🔨 Tools: Shopee Ads, Facebook Pixel, Google Analytics',
            '📚 Đọc: "The E-commerce Playbook", "Crushing Amazon""'
        ],
        
        challenges: [
            '⚠️ Cạnh tranh giá rất cao, margin mỏng',
            '📈 Chi phí quảng cáo ngày càng tăng',
            '😓 Xử lý khiếu nại, review 1 sao, returns',
            '🤖 Platform liên tục thay đổi policy, algorithm',
            '💼 Quản lý inventory, logistics phức tạp',
            '🎭 Vốn đầu tư ban đầu 50-200 triệu cho shop lớn'
        ],
        
        trends2026: 'Live Shopping boom, TikTok Shop explosion, Social Commerce, AI chatbots, Cross-border E-com, Green/Sustainable products',
        
        successStories: [
            'Shop owner Shopee Mall doanh thu 50-500 tỷ/năm',
            'Dropshipper Việt bán hàng US/EU kiếm $10K-30K/tháng',
            'Brand owner khởi nghiệp từ Shopee, IPO sau 5 năm'
        ]
    },

    'renewable-energy': {
        id: 'renewable-energy',
        name: 'Năng lượng Tái tạo & Xanh (Renewable Energy)',
        icon: '⚡',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
        category: 'tech',
        hollandCode: 'R-I',
        requiredSubjects :['sinh', 'hoahoc', 'diali'],
        description: 'Điện mặt trời, Điện gió, Năng lượng sạch, Green Tech',
        detailedDesc: 'Ngành năng lượng tái tạo đào tạo kỹ sư về điện mặt trời, gió, hydro, biogas. Là ngành tương lai với cam kết net-zero 2050, mức lương cao, cơ hội việc làm toàn cầu.',
        
        universities: [
            { name: 'ĐH Bách Khoa HN/HCM', score: '27-30', combo: 'A00, A01', tuition: '15-22tr/năm' },
            { name: 'ĐH Điện lực TP.HCM', score: '25-28', combo: 'A00', tuition: '12-18tr/năm' },
            { name: 'ĐH Dầu Khí', score: '24-27', combo: 'A00, A01', tuition: '15-20tr/năm' },
            { name: 'ĐH Tôn Đức Thắng (Green Energy)', score: '23-26', combo: 'A00', tuition: '18-25tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Điện lực', duration: '3 năm', cost: '15-20tr/năm', strength: 'Thực hành lắp đặt điện mặt trời' },
            { name: 'Khóa Solar PV Installer', duration: '3-6 tháng', cost: '10-25 triệu', strength: 'Chứng chỉ quốc tế' },
            { name: 'Bootcamp Green Energy', duration: '6-12 tháng', cost: '30-60 triệu', strength: 'Job placement' }
        ],
        
        admissionScore: {
            university: '23-30 điểm',
            subjects: 'Toán, Lý, Hóa (A00) hoặc Toán, Lý, Anh (A01)'
        },
        
        salary: {
            entry: '12-20 triệu/tháng (Kỹ thuật viên)',
            mid: '25-50 triệu/tháng (Kỹ sư dự án)',
            senior: '60-150+ triệu/tháng (Chief Engineer, Project Director)',
            note: 'Làm cho tập đoàn nước ngoài: $3K-8K/tháng'
        },
        
        growth: 'Tăng 50%/năm, VN cam kết net-zero 2050, đầu tư 100 tỷ USD vào năng lượng xanh',
        jobDemand: 'Rất cao - Thiếu hụt kỹ sư renewable energy',
        
        positions: [
            'Kỹ sư Điện mặt trời (Solar PV Engineer)',
            'Kỹ sư Điện gió (Wind Energy Engineer)',
            'Energy Storage Specialist',
            'Grid Integration Engineer',
            'Renewable Energy Consultant',
            'Project Manager (Solar/Wind Farm)',
            'Energy Analyst',
            'Sustainability Manager',
            'Green Building Engineer',
            'Carbon Credit Specialist'
        ],
        
        skills: ['Vật lý', 'Điện', 'AutoCAD', 'PVsyst', 'MATLAB', 'Project management', 'Energy modeling'],
        softSkills: ['Problem-solving', 'Teamwork', 'Attention to detail', 'Communication', 'Adaptability'],
        
        requiredTraits: {
            holland: ['R', 'I', 'C'],
            hollandMin: { R: 70, I: 65 },
            eq: ['self-regulation', 'motivation'],
            lifeskills: ['critical-thinking', 'problem-solving', 'environmental-awareness']
        },
        
        roadmap: {
            thpt: [
                '⚡ Năm 12: Học tốt Toán, Lý, ôn A00 (9+ mỗi môn)',
                '🌍 Tìm hiểu về climate change, renewable energy',
                '🎓 Thi vào Bách Khoa, Điện Lực ngành Kỹ thuật Điện',
                '📐 Năm 1-2: Nền tảng điện, vật lý, toán cao cấp',
                '⚡ Năm 3: Chuyên ngành Năng lượng tái tạo, học Solar PV, Wind',
                '💼 Năm 4: Thực tập tại dự án điện mặt trời/gió, làm thesis',
                '🏆 Tốt nghiệp: Có chứng chỉ Solar PV, kinh nghiệm dự án thực tế'
            ],
            vocational: [
                '⚡ Học CĐ Điện lực hoặc khóa Solar PV Installer',
                '🔧 Thực hành lắp đặt panel mặt trời, inverter',
                '📜 Lấy chứng chỉ: NABCEP (US), Solar PV Installer (VN)',
                '🏗️ Làm kỹ thuật viên cho công ty lắp đặt solar',
                '💼 Tích lũy 2-3 năm, lên supervisor/foreman',
                '⬆️ Học thêm: Energy storage, smart grid nếu muốn phát triển'
            ]
        },
        
        workEnvironment: {
            style: 'Office + Field work (công trường dự án)',
            hours: '8h-17h, có thể OT khi deadline dự án',
            dress: 'Văn phòng: business casual, Công trường: bảo hộ lao động',
            culture: 'Mission-driven, sustainability-focused, teamwork'
        },
        
        recommendations: [
            '💡 Tham gia Solar Decathlon, renewable energy competitions',
            '🏆 Lấy chứng chỉ quốc tế: NABCEP, LEED Green Associate',
            '📖 Học: Wind farm design, Battery storage systems',
            '🌐 Follow: IRENA, IEA reports, Vietnam Renewable Energy',
            '🤝 Network với các công ty: Trungnam Group, Xuan Thien',
            '🎯 Chuyên sâu: Solar/Wind/Hydro tùy market demand',
            '🔨 Tools: PVsyst, HOMER, AutoCAD, ETAP',
            '📚 Đọc: "Renewable Energy" - Godfrey Boyle'
        ],
        
        challenges: [
            '⚠️ Công trường xa thành phố, điều kiện khắc nghiệt',
            '📈 Chính sách thay đổi ảnh hưởng dự án (FIT, net metering)',
            '😓 Cần đầu tư học thêm nhiều nếu công nghệ mới ra',
            '🤖 Cạnh tranh với kỹ sư nước ngoài giá rẻ',
            '💼 Dự án lớn cần vốn khổng lồ, tốn thời gian triển khai'
        ],
        
        trends2026: 'Floating solar farms, Green Hydrogen, Battery storage boom, Smart grid, Offshore wind Vietnam, Rooftop solar explosion',
        
        successStories: [
            'Kỹ sư VN làm cho Vestas, Siemens Gamesa lương $5K-10K/tháng',
            'Founder startup solar VN doanh thu 500 tỷ-3000 tỷ/năm',
            'Project Manager dự án wind farm 500MW, fee 5-20 tỷ/dự án'
        ]
    },

    'mental-health-counselor': {
        id: 'mental-health-counselor',
        name: 'Tâm lý Học & Tư vấn Sức khỏe Tâm thần',
        icon: '🧠',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        category: 'health',
        hollandCode: 'S-I',
        requiredSubjects :['sinh', 'van', 'ngoaingu'],
        description: 'Psychologist, Therapist, Counselor, Mental Health Specialist',
        detailedDesc: 'Ngành tâm lý học đào tạo chuyên gia tư vấn, trị liệu tâm lý. Là ngành đang bùng nổ khi sức khỏe tâm thần được chú trọng, mức lương tốt, ý nghĩa xã hội cao.',
        
        universities: [
            { name: 'ĐH Khoa học Xã hội và Nhân văn', score: '24-27', combo: 'C00, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH Sư phạm TP.HCM', score: '23-26', combo: 'C00', tuition: '8-12tr/năm' },
            { name: 'ĐH Y Dược TP.HCM', score: '26-29', combo: 'B00, D01', tuition: '15-25tr/năm' },
            { name: 'ĐH Tôn Đức Thắng', score: '22-25', combo: 'C00, D01', tuition: '18-22tr/năm' }
        ],
        
        vocational: [
            { name: 'Khóa Tư vấn tâm lý cơ bản', duration: '6-12 tháng', cost: '15-35 triệu', strength: 'Kỹ năng counseling' },
            { name: 'Chứng chỉ CBT Therapist', duration: '1 năm', cost: '40-80 triệu', strength: 'Chuyên sâu trị liệu' },
            { name: 'Online Courses (Coursera)', duration: '3-6 tháng', cost: '5-10 triệu', strength: 'Flexible, có certificate' }
        ],
        
        admissionScore: {
            university: '22-29 điểm',
            subjects: 'Văn, Sử, Địa (C00) hoặc Toán, Văn, Anh (D01) hoặc Toán, Hóa, Sinh (B00)'
        },
        
        salary: {
            entry: '8-15 triệu/tháng (Counselor tại tổ chức)',
            mid: '20-40 triệu/tháng (Therapist riêng, 3-5 năm)',
            senior: '50-150+ triệu/tháng (Private practice, chuyên gia hàng đầu)',
            note: 'Thu phí riêng: 500K-2 triệu/session (60-90 phút)'
        },
        
        growth: 'Tăng 35%/năm, 70% người trẻ VN có vấn đề sức khỏe tâm thần',
        jobDemand: 'Cao - Thiếu hụt therapist chuyên nghiệp',
        
        positions: [
            'Clinical Psychologist (Tâm lý lâm sàng)',
            'Counselor (Tư vấn viên)',
            'Psychotherapist (Nhà trị liệu)',
            'School Counselor (Tâm lý trường học)',
            'Workplace Counselor (Tâm lý doanh nghiệp)',
            'Family Therapist',
            'Addiction Counselor',
            'Mental Health Coach',
            'Crisis Intervention Specialist',
            'Research Psychologist'
        ],
        
        skills: ['Active listening', 'Empathy', 'Assessment', 'CBT/DBT therapy', 'Report writing', 'Ethics'],
        softSkills: ['Compassion', 'Patience', 'Emotional intelligence', 'Boundary-setting', 'Self-care'],
        
        requiredTraits: {
            holland: ['S', 'I', 'A'],
            hollandMin: { S: 80, I: 70 },
            eq: ['empathy', 'social-awareness', 'relationship-management', 'self-awareness', 'self-regulation'],
            lifeskills: ['emotional-intelligence', 'communication', 'critical-thinking', 'resilience']
        },
        
        roadmap: {
            thpt: [
                '🧠 Năm 12: Đọc sách tâm lý: "Man\'s Search for Meaning", "Thinking Fast and Slow"',
                '🎓 Thi vào ĐH Khoa học XH&NV hoặc Y Dược ngành Tâm lý',
                '📚 Năm 1-2: Nền tảng tâm lý học, phát triển, xã hội',
                '🧑‍⚕️ Năm 3-4: Lâm sàng, tư vấn, thực hành therapy',
                '💼 Năm 4-5: Thực tập tại bệnh viện tâm thần, trung tâm tư vấn',
                '🎓 Sau ĐH: Học Thạc sĩ Tâm lý Lâm sàng (bắt buộc nếu muốn làm therapist)',
                '🏆 Lấy chứng chỉ hành nghề: Cần 2000 giờ supervised practice'
            ],
            vocational: [
                '📖 Học khóa Tư vấn tâm lý cơ bản 6-12 tháng',
                '🧘 Thực hành kỹ năng lắng nghe, empathy',
                '📜 Lấy chứng chỉ: Basic Counseling, Peer Counselor',
                '💼 Làm volunteer tại tổ chức tâm lý (1800 1027, EMIC)',
                '⬆️ Học ĐH Tâm lý sau 2-3 năm nếu muốn lên therapist chuyên nghiệp'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng tư vấn, phòng khám, bệnh viện hoặc online',
            hours: '9h-17h hoặc flexible theo lịch clients',
            dress: 'Business casual, tạo cảm giác tin cậy',
            culture: 'Confidentiality, empathy-driven, continuous learning'
        },
        
        recommendations: [
            '💡 Đi therapy bản thân để hiểu trải nghiệm client',
            '🏆 Tham gia workshop: Mindfulness, CBT, EMDR',
            '📖 Đọc research papers, journals: Journal of Clinical Psychology',
            '🌐 Join: Hội Tâm lý học VN, Global Counseling Network',
            '🤝 Supervision với therapist có kinh nghiệm',
            '🎯 Specialize: Anxiety, Depression, Trauma, Addiction...',
            '🔨 Tools: Teletherapy platforms (BetterHelp model)',
            '📚 Đọc: "The Body Keeps the Score", "Maybe You Should Talk to Someone"'
        ],
        
        challenges: [
            '⚠️ Vicarious trauma, burnout từ nghe câu chuyện nặng nề',
            '📈 Yêu cầu học cao (Thạc sĩ bắt buộc)',
            '😓 Thu nhập thấp khi mới vào nghề',
            '🤖 Bảo hiểm y tế VN chưa cover therapy',
            '💼 Stigma xã hội về sức khỏe tâm thần',
            '🎭 Cân bằng giữa empathy và professional boundaries'
        ],
        
        trends2026: 'Teletherapy boom, AI therapy assistants, Workplace mental health programs, Teen mental health crisis, Trauma-informed care',
        
        successStories: [
            'Therapist private practice HCM thu nhập 50-150 triệu/tháng',
            'Tâm lý doanh nghiệp consulting cho MNC, fee 3000-10000 USD/project',
            'Founder app tâm lý Vietnam, funding $1M-5M'
        ]
    },

    'lawyer-legal': {
        id: 'lawyer-legal',
        name: 'Luật sư & Pháp lý Doanh nghiệp',
        icon: '⚖️',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
        category: 'legal',
        hollandCode: 'E-I',
        requiredSubjects :['van', 'ngoaingu', 'gdcd', 'lichsu'],
        description: 'Luật sư, Tư vấn pháp lý, Corporate Lawyer, Legal Counsel',
        detailedDesc: 'Ngành luật đào tạo luật sư, chuyên viên pháp lý cho doanh nghiệp. Là ngành uy tín, thu nhập cao, cơ hội thăng tiến rõ ràng, đòi hỏi tư duy logic và kỹ năng tranh luận.',
        
        universities: [
            { name: 'ĐH Luật TP.HCM', score: '27-30', combo: 'C00, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH Luật Hà Nội', score: '27-30', combo: 'C00, D01', tuition: '10-15tr/năm' },
            { name: 'Khoa Luật - ĐH Quốc gia HN/HCM', score: '26-29', combo: 'C00, D01', tuition: '12-18tr/năm' },
            { name: 'ĐH Ngoại thương (Luật Thương mại Quốc tế)', score: '25-28', combo: 'D01, D07', tuition: '15-20tr/năm' },
            { name: 'ĐH Kinh tế TP.HCM (Luật Kinh tế)', score: '25-28', combo: 'C00, D01', tuition: '12-18tr/năm' }
        ],
        
        vocational: [
            { name: 'Khóa Trợ lý pháp lý', duration: '6-12 tháng', cost: '10-25 triệu', strength: 'Kỹ năng văn thư pháp lý' },
            { name: 'Chứng chỉ Hành nghề Luật sư', duration: '1 năm', cost: '15-30 triệu', strength: 'Bắt buộc để hành nghề' },
            { name: 'LLM (Thạc sĩ Luật)', duration: '1-2 năm', cost: '50-200 triệu', strength: 'Chuyên sâu, uy tín cao' }
        ],
        
        admissionScore: {
            university: '25-30 điểm',
            subjects: 'Văn, Sử, Địa (C00) hoặc Toán, Văn, Anh (D01)'
        },
        
        salary: {
            entry: '10-18 triệu/tháng (Trợ lý pháp lý, Fresher lawyer)',
            mid: '25-60 triệu/tháng (Luật sư 3-5 năm kinh nghiệm)',
            senior: '80-300+ triệu/tháng (Partner, Senior Counsel, GC)',
            note: 'Law firm quốc tế: $3K-15K/tháng. Án lớn: phí 500 triệu - 5 tỷ/vụ'
        },
        
        growth: 'Tăng 25%/năm, mọi DN đều cần legal counsel, M&A boom',
        jobDemand: 'Rất cao - Thiếu luật sư chất lượng, đặc biệt chuyên ngành',
        
        positions: [
            'Luật sư (Litigation/Advisory)',
            'Corporate Lawyer (Luật DN)',
            'Legal Counsel / In-house Lawyer',
            'Compliance Officer',
            'M&A Lawyer',
            'IP Lawyer (Sở hữu trí tuệ)',
            'Labor & Employment Lawyer',
            'Tax Lawyer',
            'Real Estate Lawyer',
            'General Counsel (GC)',
            'Legal Director',
            'Judge / Prosecutor (Tòa án/Viện kiểm sát)'
        ],
        
        skills: ['Nghiên cứu pháp luật', 'Viết văn bản pháp lý', 'Tranh tụng', 'Đàm phán', 'Anh văn pháp lý', 'Tư duy logic'],
        softSkills: ['Critical thinking', 'Public speaking', 'Negotiation', 'Attention to detail', 'Time management'],
        
        requiredTraits: {
            holland: ['E', 'I', 'C'],
            hollandMin: { E: 70, I: 75 },
            eq: ['self-regulation', 'social-awareness', 'relationship-management'],
            lifeskills: ['critical-thinking', 'communication', 'ethics', 'problem-solving']
        },
        
        roadmap: {
            thpt: [
                '📚 Năm 12: Học tốt Văn, Sử, ôn tổ hợp C00 (8.5+ mỗi môn)',
                '⚖️ Đọc sách pháp luật cơ bản, xem phiên tòa để hiểu nghề',
                '🎓 Thi đỗ ĐH Luật TP.HCM/HN (top choice) hoặc Khoa Luật ĐH Quốc gia',
                '📖 Năm 1-2: Học Luật Hiến pháp, Dân sự, Hình sự, Tố tụng',
                '⚡ Năm 3-4: Chuyên ngành (Luật DN, IP, M&A, Hình sự...)',
                '💼 Năm 4-5: Thực tập tại văn phòng luật sư, tòa án, DN',
                '🎓 Tốt nghiệp: Thi chứng chỉ hành nghề luật sư (bắt buộc)',
                '🏆 Sau 2 năm tập sự → Đăng ký hành nghề độc lập hoặc gia nhập law firm'
            ],
            vocational: [
                '📖 Học khóa Trợ lý pháp lý 6-12 tháng',
                '💼 Làm trợ lý tại văn phòng luật sư hoặc phòng pháp chế DN',
                '📜 Học thêm: Soạn thảo hợp đồng, nghiên cứu án lệ',
                '⬆️ Thi ĐH Luật hệ vừa làm vừa học (4-5 năm)',
                '🎓 Lấy bằng Cử nhân Luật → Thi chứng chỉ hành nghề'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng sang trọng, thư viện pháp luật',
            hours: '8h30-17h30, nhưng thường OT khi deadline vụ việc',
            dress: 'Formal business (suit/blazer), chuyên nghiệp',
            culture: 'Hierarchical, detail-oriented, high-pressure'
        },
        
        recommendations: [
            '💡 Tham gia CLB tranh biện, moot court từ năm 1',
            '🏆 Thi Olympic Luật học, cuộc thi viết luận pháp lý',
            '📖 Đọc: Án lệ Tòa án Tối cao, Luật Dân sự 2015, Bộ luật Hình sự',
            '🌐 Follow: Thư viện pháp luật, LuatVietnam, IPVN',
            '🤝 Thực tập sớm tại law firm từ năm 2 (summer internship)',
            '🎯 Chuyên sâu 1 lĩnh vực: M&A, IP, Real Estate, Criminal...',
            '🔨 Master skills: Legal research (Westlaw, LexisNexis), Contract drafting',
            '📚 Học tiếng Anh pháp lý (ILEC, TOLES) để làm cho MNC'
        ],
        
        challenges: [
            '⚠️ Áp lực cao, deadline liên tục, OT nhiều',
            '📈 Cần 2 năm tập sự mới được hành nghề độc lập',
            '😓 Cạnh tranh khốc liệt, đặc biệt tại law firm lớn',
            '🤖 Legal tech (AI) có thể thay thế công việc cơ bản',
            '💼 Phí luật sư VN thấp hơn khu vực (chỉ 30-50% Singapore)',
            '🎭 Stress cao, ảnh hưởng work-life balance'
        ],
        
        trends2026: 'Legal Tech boom (AI legal research), ESG compliance surge, Cross-border M&A, IP protection (Trademarks, Patents), Crypto/Blockchain law',
        
        successStories: [
            'Partner law firm quốc tế thu nhập 300-800 triệu/tháng',
            'General Counsel MNC lương $10K-20K/tháng',
            'Luật sư chuyên án hình sự, M&A phí vụ việc 1-10 tỷ'
        ]
    },

    'intellectual-property': {
        id: 'intellectual-property',
        name: 'Sở hữu Trí tuệ (Intellectual Property)',
        icon: '©️',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
        category: 'legal',
        hollandCode: 'I-E',
        requiredSubjects :['van', 'ngoaingu', 'gdcd', 'lichsu'],
        description: 'IP Lawyer, Patent Agent, Trademark Specialist, Copyright Expert',
        detailedDesc: 'Ngành chuyên về bảo hộ sáng chế, nhãn hiệu, bản quyền, bí mật kinh doanh. Là ngành hot với startup, tech, creative industry, mức lương cao, thiếu hụt chuyên gia.',
        
        universities: [
            { name: 'ĐH Luật TP.HCM (IP Law)', score: '27-30', combo: 'C00, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH Luật Hà Nội (IP Law)', score: '27-30', combo: 'C00, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH Bách Khoa (IP for Engineers)', score: '27-30', combo: 'A00, A01', tuition: '15-22tr/năm' },
            { name: 'ĐH Ngoại thương (IP Trade)', score: '25-28', combo: 'D01, D07', tuition: '15-20tr/năm' }
        ],
        
        vocational: [
            { name: 'Khóa IP Basics (NOIP)', duration: '3-6 tháng', cost: '5-15 triệu', strength: 'Chính thống từ cơ quan nhà nước' },
            { name: 'Patent Agent Training', duration: '6-12 tháng', cost: '20-40 triệu', strength: 'Chuyên sâu sáng chế' },
            { name: 'Trademark Specialist Course', duration: '3-6 tháng', cost: '10-25 triệu', strength: 'Thực hành đăng ký nhãn hiệu' }
        ],
        
        admissionScore: {
            university: '25-30 điểm',
            subjects: 'Văn, Sử, Địa (C00) hoặc Toán, Văn, Anh (D01) hoặc Toán, Lý, Anh (A00)'
        },
        
        salary: {
            entry: '12-20 triệu/tháng (IP Paralegal, Trademark Specialist)',
            mid: '30-70 triệu/tháng (IP Lawyer, Patent Agent 3-5 năm)',
            senior: '100-400+ triệu/tháng (IP Partner, Chief IP Counsel)',
            note: 'Fee đăng ký patent/trademark: 10-50 triệu/case'
        },
        
        growth: 'Tăng 45%/năm, VN có 200K+ đơn đăng ký IP/năm, thiếu chuyên gia',
        jobDemand: 'Cực cao - Startup, tech companies đều cần bảo hộ IP',
        
        positions: [
            'IP Lawyer / IP Counsel',
            'Patent Agent / Patent Engineer',
            'Trademark Specialist',
            'Copyright Expert',
            'IP Litigation Lawyer',
            'IP Valuation Expert',
            'Technology Transfer Specialist',
            'Brand Protection Manager',
            'IP Portfolio Manager',
            'IP Consultant'
        ],
        
        skills: ['IP law', 'Patent drafting', 'Trademark search', 'Technology understanding', 'Legal research', 'Negotiation'],
        softSkills: ['Attention to detail', 'Analytical thinking', 'Communication', 'Client management'],
        
        requiredTraits: {
            holland: ['I', 'E', 'C'],
            hollandMin: { I: 75, E: 65 },
            eq: ['self-regulation', 'social-awareness'],
            lifeskills: ['critical-thinking', 'problem-solving', 'attention-to-detail']
        },
        
        roadmap: {
            thpt: [
                '📚 Học tốt Luật hoặc kỹ thuật (Bách Khoa) tùy định hướng',
                '©️ Tìm hiểu về patents, trademarks, copyrights',
                '🎓 Thi vào ĐH Luật ngành IP Law hoặc Bách Khoa (chuyển sang IP sau)',
                '📖 Năm 1-3: Học IP law, Patent law, Trademark law, Copyright',
                '💼 Năm 3-4: Thực tập tại IP law firm, NOIP (Cục Sở hữu Trí tuệ)',
                '🎓 Tốt nghiệp: Thi chứng chỉ Patent Agent hoặc IP Lawyer',
                '🏆 Join IP firm hoặc in-house IP tại tech company'
            ],
            vocational: [
                '📖 Học khóa IP Basics từ NOIP hoặc WIPO',
                '💼 Làm IP Paralegal tại law firm, học thực tế',
                '📜 Lấy chứng chỉ Trademark Specialist',
                '⬆️ Học thêm: Patent drafting, IP litigation',
                '🎓 Tùy chọn: Học LLM in IP law để nâng cao'
            ]
        },
        
        workEnvironment: {
            style: 'IP law firm, phòng IP tại DN lớn, hoặc NOIP',
            hours: '8h-17h, nhưng deadline đăng ký có thể OT',
            dress: 'Business professional',
            culture: 'Detail-oriented, deadline-driven, collaborative'
        },
        
        recommendations: [
            '💡 Tham gia workshop IP từ WIPO, NOIP',
            '🏆 Theo dõi: IP Vietnam Journal, WIPO Magazine',
            '📖 Học: Luật Sở hữu trí tuệ 2005 (sửa đổi 2022), Paris Convention',
            '🌐 Join: Vietnam IP Association (VIPA), AIPPI',
            '🤝 Network với IP examiners tại NOIP',
            '🎯 Chuyên sâu: Patent (kỹ thuật) hoặc Trademark (thương mại)',
            '🔨 Tools: Patent databases (USPTO, EPO), Trademark search (WIPO)',
            '📚 Học tech nếu làm patent (AI, biotech, pharma...)'
        ],
        
        challenges: [
            '⚠️ Cần kiến thức vừa luật vừa kỹ thuật (đặc biệt patent)',
            '📈 Deadline đăng ký IP rất gấp (3-6 tháng)',
            '😓 IP disputes kéo dài, tốn kém',
            '🤖 AI có thể tự động patent search, prior art analysis',
            '💼 Phí IP services VN thấp hơn quốc tế',
            '🎭 Fake products, IP infringement tràn lan khó kiểm soát'
        ],
        
        trends2026: 'AI/ML patents boom, NFT copyright, Open-source IP, Green patents, Biotech IP, Cross-border IP disputes, IP for startups',
        
        successStories: [
            'IP Partner law firm phí patent case 50-500 triệu',
            'Chief IP Counsel tech unicorn lương $15K-30K/tháng',
            'IP consultant cho Samsung, Apple về trademark VN'
        ]
    },

    'legal-compliance': {
        id: 'legal-compliance',
        name: 'Tuân thủ & Quản trị Rủi ro (Compliance & Risk)',
        icon: '🛡️',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
        category: 'legal',
        hollandCode: 'C-E',
        requiredSubjects :['van', 'ngoaingu', 'gdcd', 'lichsu'],
        description: 'Compliance Officer, Risk Manager, AML/CFT Specialist, ESG Expert',
        detailedDesc: 'Ngành đảm bảo doanh nghiệp tuân thủ pháp luật, quản lý rủi ro. Là ngành hot với ngân hàng, fintech, MNC, mức lương cao, cơ hội thăng tiến nhanh.',
        
        universities: [
            { name: 'ĐH Luật TP.HCM (Compliance)', score: '26-29', combo: 'C00, D01', tuition: '10-15tr/năm' },
            { name: 'ĐH Kinh tế TP.HCM (Risk Mgmt)', score: '25-28', combo: 'A00, D01', tuition: '12-18tr/năm' },
            { name: 'ĐH Ngân hàng TP.HCM', score: '24-27', combo: 'A00, D01', tuition: '15-20tr/năm' },
            { name: 'ĐH Ngoại thương (Trade Compliance)', score: '24-27', combo: 'D01, D07', tuition: '15-20tr/năm' }
        ],
        
        vocational: [
            { name: 'Compliance Officer Training', duration: '6-9 tháng', cost: '20-40 triệu', strength: 'Thực hành compliance framework' },
            { name: 'AML/CFT Certification', duration: '3-6 tháng', cost: '15-35 triệu', strength: 'Chống rửa tiền, tài trợ khủng bố' },
            { name: 'Risk Management Certificate', duration: '6 tháng', cost: '25-50 triệu', strength: 'Quản trị rủi ro toàn diện' }
        ],
        
        admissionScore: {
            university: '24-29 điểm',
            subjects: 'Toán, Văn, Anh (D01) hoặc Văn, Sử, Địa (C00)'
        },
        
        salary: {
            entry: '15-25 triệu/tháng (Junior Compliance Officer)',
            mid: '35-70 triệu/tháng (Senior Compliance, Risk Manager)',
            senior: '100-250+ triệu/tháng (Chief Compliance Officer, Chief Risk Officer)',
            note: 'Ngân hàng, fintech, MNC trả lương cao nhất'
        },
        
        growth: 'Tăng 40%/năm, regulations ngày càng chặt, mọi DN đều cần compliance',
        jobDemand: 'Rất cao - Thiếu hụt compliance professionals chất lượng',
        
        positions: [
            'Compliance Officer (Tuân thủ)',
            'AML/CFT Specialist (Chống rửa tiền)',
            'Risk Manager (Quản trị rủi ro)',
            'Internal Auditor',
            'Regulatory Affairs Specialist',
            'ESG Compliance Manager',
            'Data Privacy Officer (GDPR, PDPA)',
            'Trade Compliance Specialist',
            'Ethics & Integrity Officer',
            'Chief Compliance Officer (CCO)',
            'Chief Risk Officer (CRO)'
        ],
        
        skills: ['Compliance frameworks', 'Risk assessment', 'Internal audit', 'Regulatory research', 'Excel/Data analytics', 'Report writing'],
        softSkills: ['Attention to detail', 'Integrity', 'Communication', 'Problem-solving', 'Independence'],
        
        requiredTraits: {
            holland: ['C', 'E', 'I'],
            hollandMin: { C: 75, E: 65 },
            eq: ['self-regulation', 'social-awareness', 'self-awareness'],
            lifeskills: ['ethics', 'critical-thinking', 'attention-to-detail', 'integrity']
        },
        
        roadmap: {
            thpt: [
                '📚 Học tốt Toán, Văn, Anh (D01) hoặc Luật',
                '🛡️ Tìm hiểu về compliance, risk management, regulations',
                '🎓 Thi vào ĐH Luật, Kinh tế, hoặc Ngân hàng',
                '📖 Năm 1-3: Học Luật Kinh doanh, Kế toán, Quản trị rủi ro',
                '💼 Năm 3-4: Thực tập tại phòng Compliance ngân hàng, DN',
                '🎓 Tốt nghiệp: Lấy chứng chỉ Compliance Officer, AML/CFT',
                '🏆 Join bank/fintech/MNC làm Junior Compliance'
            ],
            vocational: [
                '📖 Học khóa Compliance Officer 6-9 tháng',
                '💼 Làm Internal Auditor hoặc Risk Analyst junior',
                '📜 Lấy chứng chỉ: CAMS (AML), CIA (Internal Audit)',
                '⬆️ Học thêm: ISO 31000 (Risk Mgmt), ISO 37001 (Anti-Bribery)',
                '🎓 Tùy chọn: MBA hoặc LLM để lên CCO/CRO'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng ngân hàng, MNC, fintech, corporate HQ',
            hours: '8h-17h, ổn định, ít OT trừ khi audit period',
            dress: 'Business formal, professional',
            culture: 'Process-oriented, detail-focused, independence'
        },
        
        recommendations: [
            '💡 Lấy chứng chỉ quốc tế: CAMS, CIA, CFE, CRCM',
            '🏆 Tham gia: Vietnam Compliance & Risk Forum',
            '📖 Học: Basel III, AML/CFT regulations, GDPR, ESG standards',
            '🌐 Follow: ACFE, IIA, Vietnam Banking Association',
            '🤝 Network với auditors, regulators (NHNN, SSC)',
            '🎯 Chuyên sâu: AML/CFT, ESG, Data Privacy, Trade Compliance',
            '🔨 Tools: GRC software (MetricStream, Archer), Excel, Power BI',
            '📚 Đọc: "The Compliance Handbook", ISO 31000 standards'
        ],
        
        challenges: [
            '⚠️ Regulations thay đổi liên tục, phải update 24/7',
            '📈 Áp lực cao khi có vi phạm, audit findings',
            '😓 Conflict với business units (compliance vs growth)',
            '🤖 Compliance tech (AI) đang thay đổi ngành',
            '💼 Cần kiến thức đa ngành: luật + tài chính + tech',
            '🎭 "Compliance cop" image, không được yêu thích'
        ],
        
        trends2026: 'ESG compliance boom, AI/ML for compliance, Crypto regulations, Data privacy (PDPA), AML/CFT tightening, Climate risk, RegTech',
        
        successStories: [
            'CCO ngân hàng lớn lương 150-400 triệu/tháng',
            'Compliance consultant cho MNC fee $200-500/ngày',
            'Head of Compliance fintech unicorn $15K-25K/tháng'
        ]
    },

    // ==================== NGHỆ THUẬT SÁNG TẠO (2 NGÀNH) ====================

    'music-producer': {
        id: 'music-producer',
        name: 'Sản xuất Âm nhạc & DJ (Music Production)',
        icon: '🎵',
        image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
        category: 'creative',
        hollandCode: 'A-E',
        requiredSubjects :['van', 'ngoaingu', 'tin'],
        description: 'Music Producer, Beatmaker, Sound Engineer, DJ, Composer',
        detailedDesc: 'Ngành sản xuất âm nhạc đào tạo producer, DJ, sound engineer. Là ngành sáng tạo với thu nhập không giới hạn, làm việc với nghệ sĩ, làm nhạc game/phim/quảng cáo.',
        
        universities: [
            { name: 'ĐH Văn hóa TP.HCM (Âm nhạc)', score: '18-22', combo: 'D66, V00', tuition: '15-20tr/năm' },
            { name: 'Nhạc viện TP.HCM', score: 'Thi năng khiếu', combo: 'V00 + Thực hành', tuition: '20-30tr/năm' },
            { name: 'Nhạc viện Hà Nội', score: 'Thi năng khiếu', combo: 'V00 + Thực hành', tuition: '20-30tr/năm' },
            { name: 'SAE Institute (Úc)', score: 'IELTS 5.5+', combo: 'Portfolio', tuition: '300-400tr/năm' }
        ],
        
        vocational: [
            { name: 'Khóa Music Production (Beatmaker)', duration: '6-12 tháng', cost: '20-50 triệu', strength: 'Thực hành DAW, mixing' },
            { name: 'DJ Academy', duration: '3-6 tháng', cost: '15-40 triệu', strength: 'Kỹ năng DJ, gigs' },
            { name: 'Sound Engineering Course', duration: '9-18 tháng', cost: '40-80 triệu', strength: 'Recording, mixing, mastering' },
            { name: 'Online (Masterclass, Coursera)', duration: '3-6 tháng', cost: '5-15 triệu', strength: 'Flexible, từ top producers' }
        ],
        
        admissionScore: {
            university: 'Thi năng khiếu (hát, chơi nhạc cụ) + văn hóa 18-22 điểm',
            subjects: 'Văn, Sử, Địa (D66) hoặc năng khiếu âm nhạc (V00)'
        },
        
        salary: {
            entry: '0-10 triệu/tháng (Mới vào, làm beat miễn phí để có tên)',
            mid: '15-50 triệu/tháng (Producer có tên tuổi, gigs, royalties)',
            senior: '100-500+ triệu/tháng (Top producer, hit songs, album producer)',
            note: 'Thu nhập từ: Beat sales, Royalties, Live gigs, Ghost production, Teaching'
        },
        
        growth: 'Tăng 35%/năm, music streaming boom, nhu cầu nhạc game/phim/TikTok',
        jobDemand: 'Cao - Mọi nghệ sĩ, brand, game/film đều cần producer',
        
        positions: [
            'Music Producer / Beatmaker',
            'Sound Engineer (Recording/Mixing/Mastering)',
            'DJ (Club/Festival/Wedding)',
            'Composer (Film/Game/Ad)',
            'Audio Post-Production',
            'Music Director',
            'Vocal Producer',
            'Live Sound Engineer',
            'Podcast Producer',
            'Music Teacher/Instructor'
        ],
        
        skills: ['Music theory', 'DAW (Ableton/FL Studio/Logic Pro)', 'Mixing/Mastering', 'Sound design', 'Beatmaking', 'Piano/Guitar'],
        softSkills: ['Creativity', 'Ear for music', 'Collaboration', 'Client management', 'Marketing'],
        
        requiredTraits: {
            holland: ['A', 'E', 'R'],
            hollandMin: { A: 80, E: 60 },
            eq: ['self-regulation', 'motivation', 'social-awareness'],
            lifeskills: ['creativity', 'perseverance', 'self-learning', 'networking']
        },
        
        roadmap: {
            thpt: [
                '🎹 Học nhạc cụ (Piano/Guitar) từ năm 10-11',
                '🎵 Tự học FL Studio/Ableton, làm beat đầu tiên',
                '🎓 Thi vào Nhạc viện (nếu muốn học chính quy) hoặc tự học online',
                '📚 Năm 1-2: Music theory, harmony, composition',
                '🎛️ Năm 2-3: Production techniques, mixing, mastering',
                '💼 Năm 3-4: Làm việc với nghệ sĩ local, build portfolio',
                '🏆 Tốt nghiệp: 10+ beats released, producer credits, own studio setup'
            ],
            vocational: [
                '🎵 Tự học FL Studio/Ableton qua YouTube (miễn phí)',
                '🎹 Học Music Production course 6-12 tháng',
                '🔊 Đầu tư gear: Laptop + DAW + MIDI keyboard (15-30 triệu)',
                '💼 Upload beats lên BeatStars, YouTube (Type Beat)',
                '🏆 Collab với rapper/singer local để có credits',
                '⬆️ Mở rộng: DJ gigs, teach online, ghost production'
            ]
        },
        
        workEnvironment: {
            style: 'Home studio, recording studio, hoặc mobile',
            hours: 'Flexible, thường làm đêm khi có inspiration',
            dress: 'Casual, creative, streetwear',
            culture: 'Creative, collaborative, night owl'
        },
        
        recommendations: [
            '💡 Build home studio ngay từ đầu (15-50 triệu)',
            '🏆 Release beats on BeatStars, Airbit, YouTube',
            '📖 Học: Music theory, ear training, reference mixing',
            '🌐 Join: Producer communities (Reddit r/makinghiphop, Vi Vu Music)',
            '🤝 Network với nghệ sĩ, labels, managers',
            '🎯 Chuyên một genre: Hip-Hop, EDM, Pop, Lofi...',
            '🔨 Master DAW: FL Studio (Hip-Hop) or Ableton (EDM)',
            '📚 Học từ: Masterclass (Timbaland, deadmau5), YouTube (Busy Works Beats)'
        ],
        
        challenges: [
            '⚠️ Thu nhập cực kỳ không ổn định, đặc biệt năm đầu',
            '📈 Cạnh tranh khốc liệt, khó có hit song',
            '😓 Copyright issues, beat theft, royalty disputes',
            '🤖 AI music generation (Suno, Udio) đe dọa producer',
            '💼 Cần đầu tư gear, studio, plugins (50-200 triệu)',
            '🎭 Burnout, hearing damage từ mixing lâu dài'
        ],
        
        trends2026: 'AI co-production, Spatial audio (Dolby Atmos), TikTok music virality, Sync licensing boom, Live streaming concerts, Lofi/Chillhop explosion',
        
        successStories: [
            'Producer hit song VN (Sơn Tùng, Binz) fee 50-300 triệu/track',
            'Top DJ VN (Hoàng Touliver, SlimV) gigs 50-200 triệu/show',
            'Producer game/film scoring thu nhập 100-500 triệu/project'
        ]
    },

    'graphic-designer': {
        id: 'graphic-designer',
        name: 'Thiết kế Đồ họa & Thương hiệu (Graphic Design)',
        icon: '🎨',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d',
        category: 'creative',
        hollandCode: 'A-E',
        requiredSubjects :['van', 'ngoaingu', 'tin'],
        description: 'Graphic Designer, Brand Designer, Illustrator, Visual Designer',
        detailedDesc: 'Ngành thiết kế đồ họa sáng tạo logo, poster, branding, packaging. Là ngành sáng tạo với cơ hội việc làm rộng, freelance dễ dàng, thu nhập ổn định.',
        
        universities: [
            { name: 'ĐH Mỹ thuật Công nghiệp', score: '22-26', combo: 'V00, D01', tuition: '15-20tr/năm' },
            { name: 'ĐH Kiến trúc TP.HCM (Graphic)', score: '23-27', combo: 'V00', tuition: '12-18tr/năm' },
            { name: 'ĐH Mỹ thuật TP.HCM', score: '21-25', combo: 'V00', tuition: '12-17tr/năm' },
            { name: 'ĐH FPT (Design)', score: '20-23', combo: 'D01, D07', tuition: '60-70tr/năm' },
            { name: 'Arena Multimedia', score: 'Không cần thi', combo: 'Portfolio', tuition: '40-60 triệu (1-2 năm)' }
        ],
        
        vocational: [
            { name: 'Arena Multimedia (Graphic Design)', duration: '12-18 tháng', cost: '40-60 triệu', strength: 'Portfolio-driven, job placement' },
            { name: 'Khóa Photoshop/Illustrator', duration: '3-6 tháng', cost: '5-15 triệu', strength: 'Master tools nhanh' },
            { name: 'Online Domestika/Skillshare', duration: '1-3 tháng', cost: '1-5 triệu', strength: 'Flexible, nhiều styles' }
        ],
        
        admissionScore: {
            university: '20-27 điểm + Portfolio thiết kế',
            subjects: 'Vẽ, Văn, Anh (V00) hoặc Toán, Văn, Anh (D01)'
        },
        
        salary: {
            entry: '8-15 triệu/tháng (Junior Designer)',
            mid: '18-35 triệu/tháng (Senior Designer, Art Director)',
            senior: '40-100+ triệu/tháng (Creative Director, Own studio)',
            note: 'Freelance: 300K-5 triệu/design. Logo fee: 5-50 triệu'
        },
        
        growth: 'Tăng 30%/năm, mọi DN đều cần graphic designer',
        jobDemand: 'Cao - Nhu cầu thiết kế liên tục cho marketing',
        
        positions: [
            'Graphic Designer (2D/Print/Digital)',
            'Brand Designer (Logo, Identity)',
            'Illustrator (Digital/Hand-drawn)',
            'Packaging Designer',
            'Art Director',
            'Visual Designer',
            'Motion Graphics Designer',
            'Print Production Designer',
            'Creative Director',
            'Freelance Designer'
        ],
        
        skills: ['Adobe Suite (Ps/Ai/Id)', 'Typography', 'Color theory', 'Layout design', 'Branding', 'Print production'],
        softSkills: ['Creativity', 'Client communication', 'Time management', 'Feedback handling', 'Trend awareness'],
        
        requiredTraits: {
            holland: ['A', 'E', 'R'],
            hollandMin: { A: 80, E: 60 },
            eq: ['self-regulation', 'social-awareness', 'relationship-management'],
            lifeskills: ['creativity', 'communication', 'resilience', 'self-learning']
        },
        
        roadmap: {
            thpt: [
                '🎨 Năm 11-12: Học vẽ tay, digital illustration',
                '💻 Tự học Photoshop, Illustrator qua YouTube',
                '🎓 Thi vào ĐH Mỹ thuật Công nghiệp hoặc Arena',
                '📐 Năm 1-2: Design fundamentals, typography, color theory',
                '🎨 Năm 2-3: Branding, packaging, illustration techniques',
                '💼 Năm 3-4: Thực tập tại agency, build portfolio 20+ works',
                '🏆 Tốt nghiệp: Portfolio mạnh, freelance clients, style riêng'
            ],
            vocational: [
                '🎨 Học Arena Multimedia 12-18 tháng',
                '💻 Master Adobe Suite (Ps, Ai, Id)',
                '🏆 Build portfolio trên Behance với 15+ projects',
                '💼 Freelance trên Fiverr, 99designs, Upwork',
                '📜 Lấy Adobe Certified Professional nếu cần',
                '⬆️ Nâng cao: Motion graphics (After Effects), 3D (Blender)'
            ]
        },
        
        workEnvironment: {
            style: 'Creative agency, in-house design team, hoặc freelance remote',
            hours: '9h-18h (agency) hoặc flexible (freelance)',
            dress: 'Casual, creative, express yourself',
            culture: 'Collaborative, feedback-heavy, trend-conscious'
        },
        
        recommendations: [
            '💡 Build portfolio trên Behance, Dribbble từ năm 1',
            '🏆 Tham gia design contests: 99designs, DesignCrowd',
            '📖 Học: "Thinking with Type", "Logo Design Love"',
            '🌐 Follow top designers: Pentagram, Studio Feixen, Sagmeister',
            '🤝 Join: Designers Việt Nam, Adobe Creative Cloud community',
            '🎯 Chuyên sâu: Brand identity, Illustration, Packaging',
            '🔨 Tools: Adobe CC, Figma, Procreate (iPad)',
            '📚 Master typography - 80% of design is type'
        ],
        
        challenges: [
            '⚠️ Revisions vô tận từ clients ("make the logo bigger")',
            '📈 Cạnh tranh giá với designer giá rẻ, AI tools',
            '😓 Burnout từ tight deadlines, nhiều projects cùng lúc',
            '🤖 AI design tools (Canva, Midjourney) đe dọa junior roles',
            '💼 Freelance thu nhập không ổn định',
            '🎭 Phải balance creativity vs client demands'
        ],
        
        trends2026: 'AI-assisted design, 3D/AR design, Motion graphics, Minimalism, Retro/Y2K aesthetics, Sustainable design, Variable fonts',
        
        successStories: [
            'Creative Director agency lớn lương 50-150 triệu/tháng',
            'Freelance designer top Behance kiếm $5K-15K/tháng',
            'Owner studio design phục vụ brand lớn doanh thu tỷ/năm'
        ]
    },

    'civil-engineer': {
        id: 'civil-engineer',
        name: 'Kỹ sư Xây dựng Dân dụng & Hạ tầng',
        icon: '🏗️',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
        category: 'engineering',
        hollandCode: 'R-I',
        requiredSubjects :['toan', 'vatli', 'van'],
        description: 'Civil Engineer, Structural Engineer, Project Manager, Site Engineer',
        detailedDesc: 'Ngành kỹ sư xây dựng đào tạo chuyên gia thiết kế, thi công công trình dân dụng, hạ tầng giao thông. Là ngành trụ cột với nhu cầu cao, dự án lớn, thu nhập ổn định.',
        
        universities: [
            { name: 'ĐH Bách Khoa TP.HCM', score: '27-30', combo: 'A00, A01', tuition: '15-22tr/năm' },
            { name: 'ĐH Bách Khoa Hà Nội', score: '27-30', combo: 'A00, A01', tuition: '15-20tr/năm' },
            { name: 'ĐH Xây dựng Hà Nội', score: '25-28', combo: 'A00', tuition: '12-18tr/năm' },
            { name: 'ĐH Kiến trúc TP.HCM', score: '25-28', combo: 'A00, V00', tuition: '12-18tr/năm' },
            { name: 'ĐH Giao thông Vận tải', score: '24-27', combo: 'A00', tuition: '10-15tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Xây dựng', duration: '3 năm', cost: '10-18tr/năm', strength: 'Thực hành thi công' },
            { name: 'Kỹ thuật viên Xây dựng', duration: '2 năm', cost: '8-15tr/năm', strength: 'Vào nghề nhanh' },
            { name: 'Khóa BIM (Revit, Tekla)', duration: '3-6 tháng', cost: '10-25 triệu', strength: 'Công nghệ hiện đại' }
        ],
        
        admissionScore: {
            university: '24-30 điểm',
            subjects: 'Toán, Lý, Hóa (A00) hoặc Toán, Lý, Anh (A01)'
        },
        
        salary: {
            entry: '10-18 triệu/tháng (Kỹ sư thi công, Site Engineer)',
            mid: '25-50 triệu/tháng (Kỹ sư trưởng, Project Manager)',
            senior: '60-150+ triệu/tháng (Giám đốc dự án, Chief Engineer)',
            note: 'Consultant cho dự án lớn: 200-500 triệu/project'
        },
        
        growth: 'Tăng 20%/năm, hạ tầng VN đầu tư 100 tỷ USD đến 2030',
        jobDemand: 'Rất cao - Metro, cao tốc, nhà cao tầng bùng nổ',
        
        positions: [
            'Kỹ sư Thiết kế (Structural Design Engineer)',
            'Kỹ sư Thi công (Site/Construction Engineer)',
            'Kỹ sư Giám sát (Supervision Engineer)',
            'Project Manager (Quản lý dự án)',
            'BIM Engineer (Building Information Modeling)',
            'Cost Estimator (Dự toán)',
            'Quality Control Engineer',
            'MEP Engineer (Cơ Điện)',
            'Bridge/Road Engineer',
            'Consultant Engineer'
        ],
        
        skills: ['AutoCAD', 'SAP2000/ETABS', 'Revit/BIM', 'Dự toán', 'Quản lý công trình', 'Vật liệu xây dựng'],
        softSkills: ['Project management', 'Teamwork', 'Problem-solving', 'Leadership', 'Communication'],
        
        requiredTraits: {
            holland: ['R', 'I', 'C'],
            hollandMin: { R: 70, I: 65 },
            eq: ['self-regulation', 'social-awareness', 'relationship-management'],
            lifeskills: ['critical-thinking', 'problem-solving', 'leadership', 'attention-to-detail']
        },
        
        roadmap: {
            thpt: [
                '📐 Năm 12: Học tốt Toán, Lý, ôn A00 (8.5+ mỗi môn)',
                '🏗️ Tìm hiểu về các dự án xây dựng, cầu đường, cao ốc',
                '🎓 Thi vào Bách Khoa, Xây dựng ngành Kỹ thuật Xây dựng',
                '📚 Năm 1-2: Vật liệu, Cơ học, Kết cấu công trình',
                '🏗️ Năm 3-4: Thiết kế, Thi công, Quản lý dự án, BIM',
                '💼 Năm 4-5: Thực tập tại công ty xây dựng, dự án lớn',
                '🎓 Tốt nghiệp: Đồ án tốt nghiệp về thiết kế công trình thực tế',
                '🏆 Thi chứng chỉ hành nghề: Bắt buộc để ký duyệt hồ sơ'
            ],
            vocational: [
                '🏗️ Học CĐ Xây dựng 3 năm',
                '💻 Học AutoCAD, dự toán thực hành',
                '🏢 Làm kỹ thuật viên tại công trường',
                '📜 Tích lũy kinh nghiệm 3-5 năm, lên foreman/giám sát',
                '⬆️ Liên thông ĐH hoặc thi chứng chỉ hành nghề'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng + Công trường (50/50)',
            hours: '7h30-17h, thường phải đi công trường sớm',
            dress: 'Office: Business casual, Site: Bảo hộ lao động',
            culture: 'Teamwork, hierarchy, field-heavy, deadline-driven'
        },
        
        recommendations: [
            '💡 Thực tập sớm tại công trường từ năm 2 (summer)',
            '🏆 Thi Olympic Cơ học, Kết cấu công trình',
            '📖 Học: TCVN (Tiêu chuẩn Việt Nam), ACI, ASCE codes',
            '🌐 Join: Vietnam Association of Construction, BIM Vietnam',
            '🤝 Network với nhà thầu, chủ đầu tư, consultant',
            '🎯 Chuyên sâu: Nhà cao tầng, Cầu, Đường, Thủy lợi',
            '🔨 Master software: AutoCAD, SAP2000, Revit, Primavera P6',
            '📚 Lấy PMP (Project Management Professional) sau 3 năm'
        ],
        
        challenges: [
            '⚠️ Phải đi công trường xa, điều kiện khắc nghiệt (nắng/mưa)',
            '📈 Áp lực deadline cao, sai số thiết kế ảnh hưởng an toàn',
            '😓 OT nhiều, đặc biệt phase thi công',
            '🤖 BIM/AI đang thay đổi cách làm việc',
            '💼 Lương mới vào nghề thấp (10-15 triệu)',
            '🎭 Rủi ro tai nạn lao động tại công trường'
        ],
        
        trends2026: 'BIM mandatory, Green building (LEED), Smart cities, Modular construction, 3D printing concrete, Infrastructure boom (metro, highways)',
        
        successStories: [
            'Giám đốc dự án metro lương 100-300 triệu/tháng',
            'Consultant kỹ thuật cho Vingroup, Novaland fee 500 triệu-2 tỷ/dự án',
            'Chủ công ty xây dựng doanh thu 100-500 tỷ/năm'
        ]
    },

    'mechanical-engineer': {
        id: 'mechanical-engineer',
        name: 'Kỹ sư Cơ khí & Chế tạo Máy',
        icon: '⚙️',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        category: 'engineering',
        hollandCode: 'R-I',
        requiredSubjects :['toan', 'vatli', 'tin'],
        description: 'Mechanical Engineer, Manufacturing Engineer, Design Engineer, CAD/CAM',
        detailedDesc: 'Ngành kỹ sư cơ khí đào tạo chuyên gia thiết kế, chế tạo máy móc, hệ thống cơ khí. Là ngành nền tảng công nghiệp, cơ hội việc làm rộng, ứng dụng đa lĩnh vực.',
        
        universities: [
            { name: 'ĐH Bách Khoa TP.HCM', score: '27-30', combo: 'A00, A01', tuition: '15-22tr/năm' },
            { name: 'ĐH Bách Khoa Hà Nội', score: '27-30', combo: 'A00, A01', tuition: '15-20tr/năm' },
            { name: 'ĐH Công nghiệp TP.HCM', score: '24-27', combo: 'A00', tuition: '10-15tr/năm' },
            { name: 'ĐH Sư phạm Kỹ thuật TP.HCM', score: '23-26', combo: 'A00', tuition: '8-12tr/năm' },
            { name: 'ĐH Duy Tân (Cơ khí)', score: '22-25', combo: 'A00', tuition: '18-25tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Cơ khí', duration: '3 năm', cost: '10-18tr/năm', strength: 'Thực hành gia công, tiện, phay' },
            { name: 'Trường Cao đẳng Kỹ thuật', duration: '2.5 năm', cost: '8-15tr/năm', strength: 'Hợp tác DN Nhật/Hàn' },
            { name: 'Khóa CAD/CAM/CNC', duration: '3-6 tháng', cost: '10-25 triệu', strength: 'Lập trình gia công' }
        ],
        
        admissionScore: {
            university: '22-30 điểm',
            subjects: 'Toán, Lý, Hóa (A00) hoặc Toán, Lý, Anh (A01)'
        },
        
        salary: {
            entry: '10-18 triệu/tháng (Kỹ sư thiết kế, Manufacturing Engineer)',
            mid: '22-45 triệu/tháng (Senior Engineer, Team Leader)',
            senior: '50-120+ triệu/tháng (Chief Engineer, Engineering Manager)',
            note: 'Samsung, LG, Honda trả lương cao hơn 30-50%'
        },
        
        growth: 'Tăng 25%/năm, công nghiệp hóa VN cần 500K+ kỹ sư cơ khí',
        jobDemand: 'Cao - Ô tô, điện tử, sản xuất đều cần kỹ sư cơ khí',
        
        positions: [
            'Design Engineer (Thiết kế)',
            'Manufacturing Engineer (Sản xuất)',
            'Quality Engineer (Chất lượng)',
            'Process Engineer (Quy trình)',
            'Maintenance Engineer (Bảo trì)',
            'R&D Engineer (Nghiên cứu)',
            'CAD/CAM Engineer',
            'Automation Engineer',
            'Robotics Engineer',
            'Product Development Engineer'
        ],
        
        skills: ['SolidWorks/CATIA', 'AutoCAD', 'GD&T', 'Machining', 'Material science', '3D printing'],
        softSkills: ['Problem-solving', 'Teamwork', 'Attention to detail', 'Communication', 'Project management'],
        
        requiredTraits: {
            holland: ['R', 'I', 'C'],
            hollandMin: { R: 75, I: 70 },
            eq: ['self-regulation', 'motivation'],
            lifeskills: ['critical-thinking', 'problem-solving', 'attention-to-detail', 'hands-on-skills']
        },
        
        roadmap: {
            thpt: [
                '⚙️ Năm 12: Học tốt Toán, Vật lý, ôn A00',
                '🔧 Tìm hiểu về máy móc, động cơ, robot',
                '🎓 Thi vào Bách Khoa ngành Cơ khí Chế tạo máy',
                '📚 Năm 1-2: Cơ học, Vật liệu, Vẽ kỹ thuật, CAD',
                '⚙️ Năm 3-4: Thiết kế máy, Gia công, Tự động hóa',
                '💼 Năm 4-5: Thực tập tại nhà máy (Samsung, Honda, Toyota)',
                '🎓 Đồ án: Thiết kế máy móc, hệ thống tự động',
                '🏆 Học thêm: PLC, Robot programming, Industry 4.0'
            ],
            vocational: [
                '🔧 Học CĐ Cơ khí 3 năm',
                '💻 Thực hành tiện, phay, hàn, lắp ráp',
                '🏭 Làm kỹ thuật viên tại nhà máy',
                '📜 Học thêm: CNC programming, PLC',
                '⬆️ Liên thông ĐH sau 3-5 năm kinh nghiệm'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng thiết kế + Nhà máy (xưởng)',
            hours: '8h-17h, có thể ca đêm tại nhà máy',
            dress: 'Office: Casual, Factory: Đồ bảo hộ',
            culture: 'Hands-on, technical, precision-focused'
        },
        
        recommendations: [
            '💡 Thực tập tại nhà máy Nhật/Hàn/Mỹ từ năm 3',
            '🏆 Tham gia cuộc thi Robot, Automation competitions',
            '📖 Học: Manufacturing processes, Lean manufacturing, Six Sigma',
            '🌐 Follow: ASME, Society of Manufacturing Engineers',
            '🤝 Join: Hội Cơ khí Việt Nam, Mechanical Engineer groups',
            '🎯 Chuyên sâu: Automotive, Aerospace, Robotics, HVAC',
            '🔨 Master: SolidWorks/CATIA (must), ANSYS, MATLAB',
            '📚 Lấy chứng chỉ: PE (Professional Engineer), Six Sigma'
        ],
        
        challenges: [
            '⚠️ Môi trường nhà máy ồn, bụi, nóng',
            '📈 Cần cập nhật công nghệ liên tục (Industry 4.0, IoT)',
            '😓 Áp lực đáp ứng tiêu chuẩn chất lượng cao',
            '🤖 Automation, AI thay thế công việc cơ bản',
            '💼 Lương mới vào nghề thấp hơn IT',
            '🎭 Làm việc ca 3, ca đêm tại nhà máy'
        ],
        
        trends2026: 'Industry 4.0, Additive Manufacturing (3D printing), Smart factories, Robotics/Cobots, IoT sensors, Digital twin, Green manufacturing',
        
        successStories: [
            'Chief Engineer Samsung/Honda lương 80-200 triệu/tháng',
            'R&D Manager thiết kế sản phẩm cho Tesla, Apple',
            'Chủ xưởng cơ khí doanh thu 50-300 tỷ/năm'
        ]
    },

    'electrical-engineer': {
        id: 'electrical-engineer',
        name: 'Kỹ sư Điện & Tự động hóa',
        icon: '⚡',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
        category: 'engineering',
        hollandCode: 'R-I',
        requiredSubjects :['toan', 'vatli', 'tin'],
        description: 'Electrical Engineer, Automation Engineer, Control System Engineer, Power Engineer',
        detailedDesc: 'Ngành kỹ sư điện đào tạo chuyên gia về hệ thống điện, tự động hóa, điều khiển. Là ngành trụ cột với mức lương cao, cơ hội việc làm ổn định, ứng dụng rộng rãi.',
        
        universities: [
            { name: 'ĐH Bách Khoa TP.HCM', score: '27-30', combo: 'A00, A01', tuition: '15-22tr/năm' },
            { name: 'ĐH Bách Khoa Hà Nội', score: '27-30', combo: 'A00, A01', tuition: '15-20tr/năm' },
            { name: 'ĐH Điện lực TP.HCM', score: '25-28', combo: 'A00', tuition: '12-18tr/năm' },
            { name: 'ĐH Công nghiệp TP.HCM', score: '24-27', combo: 'A00', tuition: '10-15tr/năm' },
            { name: 'ĐH Sư phạm Kỹ thuật TP.HCM', score: '23-26', combo: 'A00', tuition: '8-12tr/năm' }
        ],
        
        vocational: [
            { name: 'CĐ Điện - Điện tử', duration: '3 năm', cost: '10-18tr/năm', strength: 'Thực hành lắp đặt, sửa chữa' },
            { name: 'Trường Cao đẳng Công nghiệp', duration: '2.5 năm', cost: '8-15tr/năm', strength: 'PLC, SCADA training' },
            { name: 'Khóa PLC/HMI/SCADA', duration: '3-6 tháng', cost: '15-30 triệu', strength: 'Automation specialist' }
        ],
        
        admissionScore: {
            university: '23-30 điểm',
            subjects: 'Toán, Lý, Hóa (A00) hoặc Toán, Lý, Anh (A01)'
        },
        
        salary: {
            entry: '12-20 triệu/tháng (Kỹ sư điện, Automation Engineer)',
            mid: '25-50 triệu/tháng (Senior Engineer, Supervisor)',
            senior: '60-150+ triệu/tháng (Chief Electrical Engineer, Engineering Manager)',
            note: 'Nhà máy Nhật/Hàn/FDI trả lương cao hơn 40-60%'
        },
        
        growth: 'Tăng 30%/năm, Industry 4.0 và Smart Factory cần automation engineer',
        jobDemand: 'Rất cao - Mọi nhà máy đều cần kỹ sư điện/tự động hóa',
        
        positions: [
            'Electrical Engineer (Kỹ sư điện)',
            'Automation Engineer (Tự động hóa)',
            'Control System Engineer (Điều khiển)',
            'PLC Programmer',
            'Power System Engineer (Hệ thống điện)',
            'Electrical Design Engineer',
            'Maintenance Engineer (Bảo trì điện)',
            'SCADA Engineer',
            'Instrumentation Engineer',
            'Smart Grid Engineer'
        ],
        
        skills: ['AutoCAD Electrical', 'PLC (Siemens/AB/Mitsubishi)', 'SCADA/HMI', 'Circuit design', 'MATLAB/Simulink', 'Power system'],
        softSkills: ['Problem-solving', 'Safety-conscious', 'Teamwork', 'Troubleshooting', 'Attention to detail'],
        
        requiredTraits: {
            holland: ['R', 'I', 'C'],
            hollandMin: { R: 75, I: 70 },
            eq: ['self-regulation', 'self-awareness'],
            lifeskills: ['critical-thinking', 'problem-solving', 'safety-awareness', 'hands-on-skills']
        },
        
        roadmap: {
            thpt: [
                '⚡ Năm 12: Học tốt Toán, Vật lý điện, ôn A00',
                '🔌 Tìm hiểu về hệ thống điện, mạch điện, PLC',
                '🎓 Thi vào Bách Khoa/Điện lực ngành Điện/Tự động hóa',
                '📚 Năm 1-2: Mạch điện, Điện tử, Máy điện, Đo lường',
                '⚡ Năm 3-4: Tự động hóa, PLC, Điều khiển, Power system',
                '💼 Năm 4-5: Thực tập tại nhà máy (Pepsi, Vinamilk, Samsung)',
                '🎓 Đồ án: Thiết kế hệ thống điều khiển tự động',
                '🏆 Học thêm: PLC Siemens, SCADA WinCC, Industry 4.0'
            ],
            vocational: [
                '⚡ Học CĐ Điện - Điện tử 3 năm',
                '🔌 Thực hành: Lắp đặt điện, sửa chữa máy điện',
                '🏭 Làm thợ điện hoặc kỹ thuật viên tại nhà máy',
                '📜 Học thêm: PLC cơ bản, đọc sơ đồ điện',
                '⬆️ Liên thông ĐH hoặc lên foreman/supervisor'
            ]
        },
        
        workEnvironment: {
            style: 'Văn phòng + Nhà máy/Công trường',
            hours: '8h-17h, có thể on-call 24/7 khi sự cố',
            dress: 'Office: Casual, Site: Đồ bảo hộ, giày cách điện',
            culture: 'Safety-first, technical, hands-on'
        },
        
        recommendations: [
            '💡 Học PLC từ năm 2 (Siemens S7-1200/1500)',
            '🏆 Tham gia cuộc thi Automation, Robotics',
            '📖 Học: Industrial networking, IEC 61131-3, Safety standards',
            '🌐 Follow: IEEE, ISA (Automation society)',
            '🤝 Join: Vietnam Automation Association, PLC groups',
            '🎯 Chuyên sâu: PLC/SCADA, Power systems, Smart grid',
            '🔨 Master: TIA Portal, RSLogix, WinCC, EPLAN',
            '📚 Lấy chứng chỉ: Siemens TIA, Rockwell, ISO 13849'
        ],
        
        challenges: [
            '⚠️ Nguy hiểm điện cao thế, cần tuân thủ an toàn nghiêm ngặt',
            '📈 Sự cố điện đột ngột, phải on-call 24/7',
            '😓 Áp lực khi hệ thống down (production loss)',
            '🤖 IoT, AI đang thay đổi automation',
            '💼 Cần update công nghệ mới liên tục',
            '🎭 Làm việc trong môi trường nguy hiểm (điện cao thế)'
        ],
        
        trends2026: 'Industry 4.0, Smart grid/Microgrid, IoT sensors, Predictive maintenance, Digital twin, Renewable energy integration, Cobots',
        
        successStories: [
            'Electrical Manager Samsung/Pepsi lương 80-180 triệu/tháng',
            'Automation consultant cho nhà máy MNC fee $500-1000/ngày',
            'Chủ công ty M&E doanh thu 100-500 tỷ/năm'
        ]
    },

    // ==================== CÔNG NGHỆ (1 NGÀNH) ====================

    'cloud-devops': {
        id: 'cloud-devops',
        name: 'Cloud Computing & DevOps Engineer',
        icon: '☁️',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
        category: 'tech',
        hollandCode: 'I-R',
        requiredSubjects :['toan', 'tin', 'ngoaingu', 'vatli'],
        description: 'Cloud Engineer, DevOps, SRE, Infrastructure as Code, AWS/Azure/GCP',
        detailedDesc: 'Ngành Cloud & DevOps đào tạo kỹ sư quản lý hạ tầng đám mây, tự động hóa triển khai. Là ngành hot nhất IT với mức lương top 3, thiếu hụt nhân sự trầm trọng.',
        
        universities: [
            { name: 'ĐH Bách Khoa TP.HCM', score: '27-30', combo: 'A00, A01', tuition: '15-22tr/năm' },
            { name: 'ĐH Công nghệ - ĐH Quốc gia', score: '27-29', combo: 'A00, A01', tuition: '12-18tr/năm' },
            { name: 'ĐH FPT (Cloud Computing)', score: '24-26', combo: 'A00, D01', tuition: '65-75tr/năm' },
            { name: 'ĐH KHTN TP.HCM', score: '26-28', combo: 'A00', tuition: '10-15tr/năm' }
        ],
        
        vocational: [
            { name: 'Bootcamp DevOps', duration: '6-9 tháng', cost: '30-80 triệu', strength: 'Hands-on, job placement' },
            { name: 'Cloud Certification Bootcamp', duration: '3-6 tháng', cost: '20-50 triệu', strength: 'AWS/Azure/GCP cert' },
            { name: 'Online Udemy/Pluralsight', duration: '3-6 tháng', cost: '5-15 triệu', strength: 'Flexible, self-paced' }
        ],
        
        admissionScore: {
            university: '24-30 điểm',
            subjects: 'Toán, Lý, Anh (A00) hoặc Toán, Lý, Anh (A01)'
        },
        
        salary: {
            entry: '18-30 triệu/tháng (Junior DevOps/Cloud Engineer)',
            mid: '40-80 triệu/tháng (Senior DevOps, SRE)',
            senior: '100-250+ triệu/tháng (Lead DevOps, Platform Architect)',
            note: 'Remote cho company nước ngoài: $4K-12K/tháng'
        },
        
        growth: 'Tăng 50%/năm, 90% DN chuyển lên cloud, thiếu hụt 100K+ DevOps',
        jobDemand: 'Cực cao - Top 2 vị trí được tuyển nhiều nhất sau Software Engineer',
        
        positions: [
            'Cloud Engineer (AWS/Azure/GCP)',
            'DevOps Engineer',
            'Site Reliability Engineer (SRE)',
            'Platform Engineer',
            'Infrastructure Engineer',
            'Kubernetes Administrator',
            'Cloud Architect',
            'Security DevOps (DevSecOps)',
            'MLOps Engineer',
            'Cloud Solutions Architect'
        ],
        
        skills: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'Terraform/Ansible', 'CI/CD (Jenkins/GitLab)', 'Linux', 'Scripting (Python/Bash)', 'Monitoring (Prometheus/Grafana)'],
        softSkills: ['Problem-solving', 'Automation mindset', 'Communication', 'On-call readiness', 'Continuous learning'],
        
        requiredTraits: {
            holland: ['I', 'R', 'C'],
            hollandMin: { I: 75, R: 65 },
            eq: ['self-regulation', 'motivation'],
            lifeskills: ['problem-solving', 'self-learning', 'resilience', 'automation-mindset']
        },
        
        roadmap: {
            thpt: [
                '☁️ Năm 12: Học IT, ôn A00, tự học Linux cơ bản',
                '💻 Tìm hiểu về Cloud (AWS Free Tier), Docker',
                '🎓 Thi vào Bách Khoa/ĐHQG ngành IT/Software',
                '📚 Năm 1-2: Lập trình, Networking, Linux, Database',
                '☁️ Năm 3: Học Cloud (AWS/Azure), Docker, K8s, CI/CD',
                '💼 Năm 4: Thực tập DevOps tại startup/DN, làm capstone project',
                '🏆 Tốt nghiệp: AWS Certified Solutions Architect, 2-3 projects',
                '🎯 Tiếp tục: CKA (Kubernetes), Terraform Associate'
            ],
            vocational: [
                '💻 Tự học IT cơ bản (Linux, Python, Networking)',
                '☁️ Tham gia Bootcamp DevOps 6-9 tháng',
                '📜 Lấy chứng chỉ: AWS Cloud Practitioner → Solutions Architect',
                '🏆 Build portfolio: CI/CD pipeline, IaC, K8s cluster',
                '💼 Apply Junior DevOps tại startup (sau 6-12 tháng học)',
                '⬆️ Scale up: Learn Terraform, Kubernetes, monitoring'
            ]
        },
        
        workEnvironment: {
            style: 'Remote-friendly, văn phòng hiện đại',
            hours: '9h-18h, nhưng on-call rotation 24/7',
            dress: 'Casual, hoodie & jeans culture',
            culture: 'Automation-first, SRE mindset, blameless postmortems'
        },
        
        recommendations: [
            '💡 Bắt đầu với AWS Free Tier ngay từ năm 1',
            '🏆 Lấy chứng chỉ: AWS SAA → SysOps → DevOps Professional',
            '📖 Học: "The Phoenix Project", "Site Reliability Engineering" (Google)',
            '🌐 Join: DevOps Vietnam, AWS User Group, CNCF',
            '🤝 Contribute to open-source: Kubernetes, Terraform modules',
            '🎯 Specialize: AWS vs Azure vs GCP, hoặc K8s expert',
            '🔨 Master: Terraform, Ansible, Jenkins, ArgoCD, Prometheus',
            '📚 Practice: Build full CI/CD pipeline, deploy to K8s'
        ],
        
        challenges: [
            '⚠️ On-call 24/7, phải wake up 3am khi incident',
            '📈 Cloud cost explosion nếu không optimize',
            '😓 Burnout cao do áp lực uptime SLA 99.99%',
            '🤖 Cloud platforms update liên tục, phải học non-stop',
            '💼 Security incidents ảnh hưởng nghiêm trọng (data breach)',
            '🎭 Blame game khi production down'
        ],
        
        trends2026: 'Multi-cloud, FinOps (cost optimization), GitOps, Platform Engineering, Service Mesh, Observability, Serverless, Edge computing',
        
        successStories: [
            'Senior DevOps remote cho US startup: $8K-15K/tháng',
            'Cloud Architect VNG/Tiki/Momo: 100-200 triệu/tháng',
            'Founder DevOps consultancy doanh thu 2-10 tỷ/năm'
        ]
    },

    // ==================== PHIÊN DỊCH (1 NGÀNH) ====================

    'interpreter-translator': {
        id: 'interpreter-translator',
        name: 'Phiên dịch viên & Biên dịch viên',
        icon: '🌐',
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad',
        category: 'language',
        hollandCode: 'S-A',
        requiredSubjects :['ngoaingu', 'van', 'tin'],
        description: 'Interpreter (Phiên dịch), Translator (Biên dịch), Localization Specialist',
        detailedDesc: 'Ngành đào tạo chuyên gia phiên dịch (nói), biên dịch (viết) cho hội nghị, tài liệu. Là ngành uy tín với thu nhập cao, làm việc với tổ chức quốc tế, ngoại giao.',
        
        universities: [
            { name: 'ĐH Ngoại ngữ - ĐH Quốc gia HN', score: '26-29', combo: 'D01, D07', tuition: '12-18tr/năm' },
            { name: 'ĐH KHXH&NV TP.HCM', score: '25-28', combo: 'D01, D07', tuition: '10-15tr/năm' },
            { name: 'ĐH Ngoại thương', score: '25-28', combo: 'D01, D07', tuition: '15-20tr/năm' },
            { name: 'ĐH Hoa Sen (Interpretation)', score: '23-26', combo: 'D01', tuition: '25-35tr/năm' },
            { name: 'ĐH Văn Lang (Translation)', score: '22-25', combo: 'D01', tuition: '22-30tr/năm' }
        ],
        
        vocational: [
            { name: 'Khóa Phiên dịch viên', duration: '6-12 tháng', cost: '15-40 triệu', strength: 'Kỹ năng phiên dịch nhanh' },
            { name: 'Biên dịch chuyên ngành', duration: '3-6 tháng', cost: '10-25 triệu', strength: 'Y tế, Pháp luật, Kỹ thuật' },
            { name: 'Online Coursera/Udemy', duration: '3-6 tháng', cost: '5-15 triệu', strength: 'Flexible, CAT tools' }
        ],
        
        admissionScore: {
            university: '22-29 điểm',
            subjects: 'Toán, Văn, Anh (D01) hoặc Văn, Anh, Địa (D07)'
        },
        
        salary: {
            entry: '10-18 triệu/tháng (Junior Translator, in-house)',
            mid: '20-40 triệu/tháng (Senior Translator, Interpreter)',
            senior: '50-120+ triệu/tháng (Conference Interpreter, Localization Manager)',
            note: 'Freelance: 150-500K VNĐ/trang dịch. Phiên dịch: 3-10 triệu/ngày'
        },
        
        growth: 'Tăng 20%/năm, toàn cầu hóa cần 200K+ phiên/biên dịch viên',
        jobDemand: 'Cao - Tổ chức quốc tế, MNC, hội nghị đều cần',
        
        positions: [
            'Conference Interpreter (Phiên dịch hội nghị)',
            'Consecutive Interpreter (Phiên dịch nối tiếp)',
            'Simultaneous Interpreter (Phiên dịch đồng thời)',
            'Translator (Biên dịch viên)',
            'Localization Specialist (Địa phương hóa)',
            'Subtitle Translator (Phụ đề phim)',
            'Literary Translator (Dịch văn học)',
            'Legal/Medical Translator (Dịch chuyên ngành)',
            'In-house Translator (Dịch tại DN)',
            'Freelance Translator'
        ],
        
        skills: ['Fluent 2+ languages', 'Listening comprehension', 'Note-taking', 'CAT tools (SDL Trados, MemoQ)', 'Subject knowledge', 'Cultural awareness'],
        softSkills: ['Active listening', 'Quick thinking', 'Memory', 'Stress management', 'Public speaking', 'Attention to detail'],
        
        requiredTraits: {
            holland: ['S', 'A', 'C'],
            hollandMin: { S: 70, A: 65 },
            eq: ['self-regulation', 'social-awareness', 'empathy'],
            lifeskills: ['communication', 'cultural-awareness', 'active-listening', 'resilience']
        },
        
        roadmap: {
            thpt: [
                '🌐 Năm 11-12: Đạt IELTS 7.5+ hoặc equivalent',
                '📚 Học ngôn ngữ thứ 2 (Trung, Nhật, Hàn, Pháp)',
                '🎓 Thi vào ĐH Ngoại ngữ ngành Biên phiên dịch',
                '📖 Năm 1-2: Ngôn ngữ học, Nghe hiểu nâng cao, Ghi chú phiên dịch',
                '🎤 Năm 3-4: Phiên dịch nối tiếp, đồng thời, dịch chuyên ngành',
                '💼 Năm 4-5: Thực tập tại hội nghị, tổ chức quốc tế (UN, EU)',
                '🎓 Tốt nghiệp: Có kinh nghiệm phiên dịch 20+ events',
                '🏆 Lấy chứng chỉ: NAATI (Úc), CATTI (Trung), AIIC membership'
            ],
            vocational: [
                '🌐 Học IELTS/TOEFL đạt 7.5-8.0+',
                '📚 Tham gia khóa Phiên dịch 6-12 tháng',
                '🎤 Thực hành: Shadowing, note-taking, sight translation',
                '💼 Làm freelance translator trên Proz.com, Upwork',
                '📜 Build portfolio: 50+ trang dịch, 5+ events phiên dịch',
                '⬆️ Học ĐH Ngoại ngữ để lên conference interpreter'
            ]
        },
        
        workEnvironment: {
            style: 'Hội nghị, văn phòng MNC, remote (translation)',
            hours: 'Flexible, theo event/project, có thể weekends',
            dress: 'Formal (hội nghị), Business casual (office)',
            culture: 'Professional, multicultural, confidential'
        },
        
        recommendations: [
            '💡 Shadowing TED Talks, UN speeches để luyện phiên dịch',
            '🏆 Tham gia: Translation competitions, MUN (Model UN)',
            '📖 Đọc rộng: Chính trị, Kinh tế, Y tế, Pháp luật',
            '🌐 Join: AIIC, Proz.com, Vietnam Translators Association',
            '🤝 Network với phiên dịch viên senior, agencies',
            '🎯 Chuyên sâu: Legal, Medical, Technical, Literary',
            '🔨 Master CAT tools: SDL Trados, MemoQ, Wordfast',
            '📚 Học ngôn ngữ thứ 3 để tăng value (Trung/Nhật/Hàn)'
        ],
        
        challenges: [
            '⚠️ Căng thẳng cao khi phiên dịch đồng thời',
            '📈 Cạnh tranh với AI translation (Google Translate, DeepL)',
            '😓 Freelance thu nhập không ổn định',
            '🤖 Machine translation đe dọa công việc cơ bản',
            '💼 Phải update kiến thức đa ngành liên tục',
            '🎭 Confidentiality: Không được tiết lộ nội dung dịch'
        ],
        
        trends2026: 'AI-assisted translation (post-editing), Video remote interpreting, Localization for games/apps, Subtitle boom (Netflix, YouTube), Live captioning',
        
        successStories: [
            'Conference interpreter UN/EU fee $800-2000/ngày',
            'Localization Manager game AAA lương $5K-10K/tháng',
            'Freelance translator top Proz.com kiếm $3K-8K/tháng'
        ]
    }

};

    
    

    // ... (Tiếp tục 25 ngành nữa trong file tiếp theo để không quá dài)

// Tạm kết thúc 5 ngành đầu, sẽ thêm 115 ngành nữa

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { careersDatabase };
}
