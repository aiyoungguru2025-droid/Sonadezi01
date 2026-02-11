// ==================== V-MENTOR AI ENTERPRISE 2026 ====================
// PHẦN 1: HỆ THỐNG CÂU HỎI - 110 CÂU TỔNG HỢP
// ======================================================================

// ==================== HOLLAND TEST (60 CÂU - NÂNG CẤP TỪ 36) ====================
const hollandData = [
    {
        id: 'R',
        name: 'Kỹ thuật (Realistic)',
        description: 'Thích làm việc với công cụ, máy móc, thực hành',
        detailedDesc: 'Người có tố chất Kỹ thuật thường thích làm việc với tay, máy móc, công cụ. Họ thích công việc thực tế, có kết quả rõ ràng và ít cần giao tiếp phức tạp.',
        color: '#ef4444',
        icon: '🔧',
        questions: [
            {
                text: "Sửa chữa thiết bị điện tử, đồ dùng",
                situation: "Khi điện thoại/laptop bị lỗi nhỏ, bạn thường tự sửa hay nhờ người khác?",
                tooltip: "Người có tố chất R thích tự tay khắc phục sự cố kỹ thuật"
            },
            {
                text: "Làm việc với công cụ/máy móc",
                situation: "Bạn cảm thấy thế nào khi được sử dụng máy CNC, máy in 3D, máy hàn?",
                tooltip: "Khả năng vận hành thiết bị cơ khí, điện tử một cách thuần thục"
            },
            {
                text: "Vận động ngoài trời, hoạt động thể chất",
                situation: "Cuối tuần bạn thích đi leo núi, camping hơn là ở nhà xem phim?",
                tooltip: "Ưa thích hoạt động thể chất, làm việc trong môi trường mở"
            },
            {
                text: "Lắp ráp mô hình, thiết bị",
                situation: "Bạn có hứng thú với việc lắp ráp đồ chơi Lego, mô hình xe, máy bay?",
                tooltip: "Khả năng tư duy không gian và làm việc tỉ mỉ với chi tiết"
            },
            {
                text: "Khéo léo với tay chân",
                situation: "Bạn tự tin khi phải cắt, dán, hàn, vẽ kỹ thuật?",
                tooltip: "Kỹ năng vận động tinh, phối hợp tay mắt tốt"
            },
            {
                text: "Thích thực hành hơn lý thuyết",
                situation: "Ở trường, bạn thích giờ thực hành Tin/Hóa/Lý hơn giờ nghe giảng lý thuyết?",
                tooltip: "Học tốt hơn qua làm thực tế thay vì đọc sách"
            },
            {
                text: "Làm việc ngoài trời",
                situation: "Bạn cảm thấy thoải mái khi làm việc ngoài trời dù nắng mưa?",
                tooltip: "Thích công việc động, không gò bó trong văn phòng"
            },
            {
                text: "Sử dụng dụng cụ cầm tay",
                situation: "Khi cần lắp kệ sách, sửa xe đạp, bạn tự làm hay thuê thợ?",
                tooltip: "Tự tin với búa, tuốc nơ vít, máy khoan"
            },
            {
                text: "Thích công việc có kết quả rõ ràng",
                situation: "Bạn thấy hài lòng khi hoàn thành sản phẩm cụ thể (ghế, tủ, robot)?",
                tooltip: "Ưa thích thấy được thành quả hữu hình"
            },
            {
                text: "Quan sát cách vận hành máy móc",
                situation: "Bạn tò mò muốn biết động cơ xe, máy giặt hoạt động ra sao?",
                tooltip: "Tư duy kỹ thuật, muốn hiểu cơ chế"
            }
        ]
    },
    
    {
        id: 'I',
        name: 'Nghiên cứu (Investigative)',
        description: 'Thích nghiên cứu, phân tích, tìm hiểu',
        detailedDesc: 'Người có tố chất Nghiên cứu thích tìm hiểu sâu, phân tích, giải quyết vấn đề phức tạp. Họ thích làm việc độc lập, suy nghĩ logic và khám phá tri thức mới.',
        color: '#8b5cf6',
        icon: '🔬',
        questions: [
            {
                text: "Giải bài tập logic, toán học",
                situation: "Khi gặp đề toán khó, bạn cảm thấy phấn khích muốn giải quyết hay nản chí bỏ qua?",
                tooltip: "Người có tố chất I thích thử thách trí tuệ"
            },
            {
                text: "Tìm hiểu nguyên lý hoạt động",
                situation: "Bạn thường tự hỏi 'Tại sao?' và tìm câu trả lời khoa học?",
                tooltip: "Tò mò về bản chất, cơ chế của sự vật"
            },
            {
                text: "Làm thí nghiệm khoa học",
                situation: "Bạn thích làm thí nghiệm Hóa/Sinh/Lý ở phòng lab?",
                tooltip: "Hứng thú với việc kiểm chứng giả thuyết"
            },
            {
                text: "Phân tích dữ liệu, số liệu",
                situation: "Bạn tự tin khi phải xử lý bảng Excel phức tạp, tìm quy luật trong data?",
                tooltip: "Tư duy định lượng, phân tích dữ liệu"
            },
            {
                text: "Khám phá điều mới lạ",
                situation: "Bạn có thói quen đọc báo khoa học, xem TED Talks, tìm hiểu công nghệ mới?",
                tooltip: "Ham học hỏi, luôn cập nhật kiến thức"
            },
            {
                text: "Suy nghĩ độc lập, sâu sắc",
                situation: "Bạn thích làm việc một mình trong không gian yên tĩnh để tập trung cao độ?",
                tooltip: "Ưa thích môi trường yên tĩnh để tư duy"
            },
            {
                text: "Đọc sách chuyên sâu",
                situation: "Bạn thích đọc sách khoa học, triết học, sách chuyên ngành hơn truyện ngôn tình?",
                tooltip: "Ưa thích nội dung có chiều sâu tri thức"
            },
            {
                text: "Đặt câu hỏi phản biện",
                situation: "Bạn thường thắc mắc, phản bác ý kiến nếu thấy không logic?",
                tooltip: "Tư duy phản biện, không dễ tin lời"
            },
            {
                text: "Giải quyết vấn đề phức tạp",
                situation: "Khi gặp bug code, lỗi hệ thống, bạn kiên nhẫn debug đến khi tìm ra nguyên nhân?",
                tooltip: "Kiên trì tìm ra nguyên nhân gốc rễ"
            },
            {
                text: "Lập luận dựa trên bằng chứng",
                situation: "Bạn tin vào khoa học, dữ liệu hơn là tin đồn, mê tín?",
                tooltip: "Tư duy dựa trên dữ liệu và logic"
            }
        ]
    },
    
    {
        id: 'A',
        name: 'Nghệ thuật (Artistic)',
        description: 'Thích sáng tạo, nghệ thuật, thẩm mỹ',
        detailedDesc: 'Người có tố chất Nghệ thuật thích sáng tạo, thể hiện cảm xúc qua nghệ thuật. Họ có óc thẩm mỹ cao, thích làm việc tự do, không gò bó.',
        color: '#ec4899',
        icon: '🎨',
        questions: [
            {
                text: "Vẽ/Thiết kế/Chụp ảnh",
                situation: "Bạn thích trang trí sổ tay, vẽ doodle, chụp ảnh aesthetic?",
                tooltip: "Thể hiện ý tưởng qua hình ảnh trực quan"
            },
            {
                text: "Sáng tác, viết lách tự do",
                situation: "Bạn có thói quen viết nhật ký, thơ, truyện ngắn?",
                tooltip: "Diễn đạt cảm xúc, ý tưởng qua ngôn từ"
            },
            {
                text: "Biểu diễn nghệ thuật",
                situation: "Bạn tự tin khi hát, múa, diễn kịch trước đám đông?",
                tooltip: "Thích thể hiện bản thân, không sợ ánh nhìn"
            },
            {
                text: "Sáng tạo nội dung",
                situation: "Bạn thích làm video TikTok, viết blog, thiết kế poster, infographic?",
                tooltip: "Kỹ năng tạo nội dung sáng tạo, độc đáo"
            },
            {
                text: "Nhạy cảm với cái đẹp",
                situation: "Bạn chú ý đến màu sắc, font chữ, bố cục khi làm slide?",
                tooltip: "Óc thẩm mỹ tốt, nhận biết hài hòa"
            },
            {
                text: "Làm mới những điều cũ kỹ",
                situation: "Bạn thích upcycle đồ cũ, trang trí lại phòng theo ý mình?",
                tooltip: "Sáng tạo từ những gì có sẵn"
            },
            {
                text: "Thể hiện cá tính riêng",
                situation: "Bạn thích ăn mặc, trang điểm theo phong cách cá nhân thay vì theo trend?",
                tooltip: "Không theo đám đông, thích khác biệt"
            },
            {
                text: "Làm việc tự do, không khuôn mẫu",
                situation: "Bạn cảm thấy bị gò bó với quy định cứng nhắc, thích làm việc linh hoạt?",
                tooltip: "Thích môi trường làm việc tự do"
            },
            {
                text: "Cảm nhận âm nhạc sâu sắc",
                situation: "Âm nhạc làm bạn xúc động, tạo cảm hứng mạnh mẽ?",
                tooltip: "Nhạy cảm với nghệ thuật thính giác"
            },
            {
                text: "Tưởng tượng, mơ mộng",
                situation: "Bạn thường có những ý tưởng 'điên rồ' nhưng sáng tạo?",
                tooltip: "Tư duy phát tán, không bị giới hạn"
            }
        ]
    },
    
    {
        id: 'S',
        name: 'Xã hội (Social)',
        description: 'Thích giúp đỡ, dạy dỗ, chăm sóc người khác',
        detailedDesc: 'Người có tố chất Xã hội thích làm việc với người, giúp đỡ cộng đồng. Họ có empathy cao, thích dạy dỗ, tư vấn và tạo tác động tích cực.',
        color: '#10b981',
        icon: '❤️',
        questions: [
            {
                text: "Giúp đỡ mọi người",
                situation: "Khi thấy bạn gặp khó khăn, bạn chủ động giúp đỡ?",
                tooltip: "Thích cảm giác được cần đến, hữu ích"
            },
            {
                text: "Giảng dạy/Truyền đạt kiến thức",
                situation: "Bạn sẵn sàng dạy bài cho bạn học yếu hơn?",
                tooltip: "Kiên nhẫn, giỏi giải thích"
            },
            {
                text: "Lắng nghe & Tư vấn",
                situation: "Bạn bè thường tâm sự, xin lời khuyên từ bạn?",
                tooltip: "Kỹ năng lắng nghe empathy"
            },
            {
                text: "Tham gia hoạt động thiện nguyện",
                situation: "Bạn thích tham gia từ thiện, mùa hè xanh, hiến máu?",
                tooltip: "Mong muốn đóng góp cho cộng đồng"
            },
            {
                text: "Làm việc trong đội nhóm",
                situation: "Bạn thích làm việc nhóm hơn làm một mình?",
                tooltip: "Hưng phấn khi làm việc với người khác"
            },
            {
                text: "Giao tiếp xã hội tốt",
                situation: "Bạn dễ dàng làm quen người lạ, nói chuyện với ai cũng được?",
                tooltip: "Kỹ năng giao tiếp, tạo mối quan hệ"
            },
            {
                text: "Chăm sóc người khác",
                situation: "Bạn thích chăm sóc trẻ em, người già, thú cưng?",
                tooltip: "Có lòng trắc ẩn, muốn bảo vệ yếu đuối"
            },
            {
                text: "Hiểu cảm xúc người khác",
                situation: "Bạn dễ nhận ra khi ai đó buồn, lo lắng dù họ không nói?",
                tooltip: "EQ cao, đồng cảm với cảm xúc"
            },
            {
                text: "Giải quyết xung đột",
                situation: "Bạn thường là người hòa giải khi bạn bè cãi nhau?",
                tooltip: "Kỹ năng đàm phán, tìm tiếng nói chung"
            },
            {
                text: "Tổ chức sự kiện, hoạt động",
                situation: "Bạn thích tổ chức sinh nhật, picnic, họp lớp cho mọi người?",
                tooltip: "Thích tạo môi trường vui vẻ"
            }
        ]
    },
    
    {
        id: 'E',
        name: 'Quản lý (Enterprising)',
        description: 'Thích lãnh đạo, thuyết phục, kinh doanh',
        detailedDesc: 'Người có tố chất Quản lý thích lãnh đạo, ra quyết định, thuyết phục người khác. Họ có tham vọng, dám chấp nhận rủi ro và thích cạnh tranh.',
        color: '#f59e0b',
        icon: '👔',
        questions: [
            {
                text: "Lãnh đạo đội nhóm",
                situation: "Khi làm việc nhóm, bạn thường là người chủ trì, phân công nhiệm vụ?",
                tooltip: "Tự tin đứng ra dẫn dắt, điều phối"
            },
            {
                text: "Thuyết phục người khác",
                situation: "Bạn giỏi thuyết trình, thuyết phục người khác theo ý mình?",
                tooltip: "Kỹ năng giao tiếp ảnh hưởng cao"
            },
            {
                text: "Kinh doanh/Khởi nghiệp",
                situation: "Bạn từng bán hàng online, kinh doanh nhỏ?",
                tooltip: "Nhạy bén kinh doanh, tìm cơ hội"
            },
            {
                text: "Chấp nhận thử thách, rủi ro",
                situation: "Bạn sẵn sàng làm điều mới, dù có thể thất bại?",
                tooltip: "Dũng cảm, không sợ thử thách"
            },
            {
                text: "Ra quyết định nhanh chóng",
                situation: "Khi cần chọn, bạn quyết đoán không phân vân lâu?",
                tooltip: "Tư duy nhanh, decisive"
            },
            {
                text: "Tạo dựng mối quan hệ",
                situation: "Bạn có networking rộng, nhiều connections?",
                tooltip: "Giỏi xây dựng và duy trì quan hệ"
            },
            {
                text: "Cạnh tranh để thắng",
                situation: "Bạn thích thi đấu, cuộc thi và muốn đạt thành tích cao?",
                tooltip: "Tinh thần cạnh tranh mạnh"
            },
            {
                text: "Tham vọng thành công",
                situation: "Bạn đặt mục tiêu cao và nỗ lực đạt được?",
                tooltip: "Có tham vọng, động lực mạnh"
            },
            {
                text: "Tự tin trước đám đông",
                situation: "Bạn thoải mái khi phát biểu, thuyết trình trước nhiều người?",
                tooltip: "Kỹ năng public speaking tốt"
            },
            {
                text: "Nhìn xa trông rộng",
                situation: "Bạn thường nghĩ về tương lai, lập kế hoạch dài hạn?",
                tooltip: "Tư duy chiến lược, vision cao"
            }
        ]
    },
    
    {
        id: 'C',
        name: 'Quy củ (Conventional)',
        description: 'Thích công việc có tổ chức, chi tiết, chính xác',
        detailedDesc: 'Người có tố chất Quy củ thích công việc có cấu trúc, quy trình rõ ràng. Họ cẩn thận, tỉ mỉ, thích làm việc theo hệ thống và đảm bảo chính xác.',
        color: '#3b82f6',
        icon: '📊',
        questions: [
            {
                text: "Sắp xếp đồ ngăn nắp",
                situation: "Phòng bạn luôn gọn gàng, đồ đạc có chỗ cố định?",
                tooltip: "Thích trật tự, không thích lộn xộn"
            },
            {
                text: "Làm việc theo kế hoạch rõ ràng",
                situation: "Bạn lập to-do list, lịch trình chi tiết hàng ngày?",
                tooltip: "Thích làm việc có hệ thống"
            },
            {
                text: "Tính toán bảng biểu, số liệu",
                situation: "Bạn giỏi Excel, thích làm việc với số liệu, thống kê?",
                tooltip: "Kỹ năng xử lý dữ liệu, tính toán"
            },
            {
                text: "Kiểm tra lỗi tỉ mỉ",
                situation: "Bạn thường re-check bài làm nhiều lần trước khi nộp?",
                tooltip: "Tỉ mỉ, cẩn thận, chú ý chi tiết"
            },
            {
                text: "Tuân thủ quy trình, quy định",
                situation: "Bạn thích làm theo hướng dẫn step-by-step?",
                tooltip: "Tôn trọng quy tắc, làm theo chuẩn"
            },
            {
                text: "Quản lý hồ sơ, tài liệu",
                situation: "Bạn lưu trữ file, tài liệu có hệ thống, dễ tìm?",
                tooltip: "Kỹ năng quản lý thông tin tốt"
            },
            {
                text: "Làm việc theo deadline",
                situation: "Bạn luôn nộp bài đúng hạn, không trễ?",
                tooltip: "Có kỷ luật, quản lý thời gian tốt"
            },
            {
                text: "Thích công việc ổn định",
                situation: "Bạn thích công việc có lộ trình rõ ràng, ít thay đổi đột ngột?",
                tooltip: "Thích sự ổn định, dự đoán được"
            },
            {
                text: "Ghi chép cẩn thận",
                situation: "Bạn ghi chú đầy đủ, có màu mã, highlight?",
                tooltip: "Kỹ năng tổ chức thông tin"
            },
            {
                text: "Làm việc theo mẫu chuẩn",
                situation: "Bạn thích dùng template, form có sẵn?",
                tooltip: "Thích sự nhất quán, chuẩn hóa"
            }
        ]
    }
];

// ==================== EQ TEST (20 CÂU) ====================
const eqData = {
    name: 'Trí tuệ Cảm xúc (EQ)',
    description: 'Đo lường khả năng hiểu và quản lý cảm xúc',
    icon: '💝',
    questions: [
        {
            id: 'eq1',
            text: "Tôi nhận ra được cảm xúc của mình khi nó xuất hiện",
            category: 'self-awareness',
            tooltip: "Tự nhận thức - Hiểu được cảm xúc bản thân"
        },
        {
            id: 'eq2',
            text: "Khi tức giận, tôi kiểm soát được không nổi cáu ngay",
            category: 'self-regulation',
            tooltip: "Tự kiểm soát - Quản lý cảm xúc tiêu cực"
        },
        {
            id: 'eq3',
            text: "Tôi dễ dàng nhận ra khi bạn bè đang buồn/vui",
            category: 'empathy',
            tooltip: "Đồng cảm - Nhận biết cảm xúc người khác"
        },
        {
            id: 'eq4',
            text: "Tôi giỏi động viên người khác khi họ thất vọng",
            category: 'social-skills',
            tooltip: "Kỹ năng xã hội - Hỗ trợ cảm xúc"
        },
        {
            id: 'eq5',
            text: "Tôi tự động viên bản thân khi gặp khó khăn",
            category: 'motivation',
            tooltip: "Động lực - Tự tạo động lực nội tại"
        },
        {
            id: 'eq6',
            text: "Tôi biết điểm mạnh và điểm yếu của mình",
            category: 'self-awareness',
            tooltip: "Hiểu rõ khả năng bản thân"
        },
        {
            id: 'eq7',
            text: "Khi stress, tôi biết cách xả stress hiệu quả",
            category: 'self-regulation',
            tooltip: "Quản lý stress và áp lực"
        },
        {
            id: 'eq8',
            text: "Tôi đặt mình vào vị trí người khác để hiểu họ",
            category: 'empathy',
            tooltip: "Khả năng đồng cảm sâu sắc"
        },
        {
            id: 'eq9',
            text: "Tôi giải quyết xung đột bằng lắng nghe cả hai phía",
            category: 'social-skills',
            tooltip: "Kỹ năng giải quyết mâu thuẫn"
        },
        {
            id: 'eq10',
            text: "Tôi kiên trì theo đuổi mục tiêu dù có trở ngại",
            category: 'motivation',
            tooltip: "Tính kiên trì và quyết tâm"
        },
        {
            id: 'eq11',
            text: "Tôi biết khi nào nên nói và khi nào nên im lặng",
            category: 'self-awareness',
            tooltip: "Nhận thức tình huống xã hội"
        },
        {
            id: 'eq12',
            text: "Tôi không để cảm xúc tiêu cực kéo dài quá lâu",
            category: 'self-regulation',
            tooltip: "Phục hồi cảm xúc nhanh"
        },
        {
            id: 'eq13',
            text: "Tôi cảm nhận được không khí căng thẳng trong phòng",
            category: 'empathy',
            tooltip: "Nhạy cảm với cảm xúc tập thể"
        },
        {
            id: 'eq14',
            text: "Tôi dễ dàng làm quen và tạo thiện cảm với người mới",
            category: 'social-skills',
            tooltip: "Kỹ năng giao tiếp xã hội"
        },
        {
            id: 'eq15',
            text: "Tôi tìm thấy ý nghĩa trong những việc làm của mình",
            category: 'motivation',
            tooltip: "Động lực từ mục đích sống"
        },
        {
            id: 'eq16',
            text: "Tôi nhận phản hồi tiêu cực mà không bực tức",
            category: 'self-regulation',
            tooltip: "Chấp nhận góp ý xây dựng"
        },
        {
            id: 'eq17',
            text: "Tôi biết cách an ủi người khác đúng cách",
            category: 'empathy',
            tooltip: "Hỗ trợ cảm xúc hiệu quả"
        },
        {
            id: 'eq18',
            text: "Tôi thích hợp tác hơn cạnh tranh",
            category: 'social-skills',
            tooltip: "Tinh thần teamwork"
        },
        {
            id: 'eq19',
            text: "Tôi lạc quan ngay cả khi mọi thứ không suôn sẻ",
            category: 'motivation',
            tooltip: "Thái độ tích cực"
        },
        {
            id: 'eq20',
            text: "Tôi điều chỉnh cách giao tiếp tùy người",
            category: 'social-skills',
            tooltip: "Linh hoạt trong giao tiếp"
        }
    ]
};

// ==================== KỸ NĂNG SỐNG 4.0 (30 CÂU) ====================
const lifeskillsData = {
    name: 'Kỹ năng Sống 4.0',
    description: 'Đánh giá 10 kỹ năng sống thiết yếu trong kỷ nguyên số',
    icon: '🎯',
    categories: [
        {
            id: 'critical-thinking',
            name: 'Tư duy Phản biện',
            icon: '🧠',
            questions: [
                {
                    text: "Tôi không tin ngay những thông tin trên mạng",
                    tooltip: "Đánh giá độ tin cậy thông tin"
                },
                {
                    text: "Tôi tìm nhiều nguồn trước khi kết luận",
                    tooltip: "Tìm kiếm bằng chứng đa chiều"
                },
                {
                    text: "Tôi đặt câu hỏi 'Tại sao?' thay vì chấp nhận ngay",
                    tooltip: "Tư duy phản biện, nghi ngờ có căn cứ"
                }
            ]
        },
        {
            id: 'time-management',
            name: 'Quản lý Thời gian',
            icon: '⏰',
            questions: [
                {
                    text: "Tôi ưu tiên việc quan trọng trước việc gấp",
                    tooltip: "Phân biệt urgent vs important"
                },
                {
                    text: "Tôi lập kế hoạch cho tuần/tháng",
                    tooltip: "Kỹ năng planning"
                },
                {
                    text: "Tôi biết nói 'không' với việc không cần thiết",
                    tooltip: "Quản lý cam kết"
                }
            ]
        },
        {
            id: 'digital-literacy',
            name: 'Kỹ năng Số',
            icon: '💻',
            questions: [
                {
                    text: "Tôi tự tin sử dụng Google Workspace/Office 365",
                    tooltip: "Thành thạo công cụ văn phòng"
                },
                {
                    text: "Tôi biết cách tìm kiếm thông tin hiệu quả trên Google",
                    tooltip: "Kỹ năng search nâng cao"
                },
                {
                    text: "Tôi bảo mật tài khoản, không để lộ thông tin cá nhân",
                    tooltip: "An toàn thông tin"
                }
            ]
        },
        {
            id: 'communication',
            name: 'Giao tiếp Hiệu quả',
            icon: '💬',
            questions: [
                {
                    text: "Tôi diễn đạt ý tưởng rõ ràng, dễ hiểu",
                    tooltip: "Kỹ năng trình bày"
                },
                {
                    text: "Tôi lắng nghe chủ động, không ngắt lời",
                    tooltip: "Active listening"
                },
                {
                    text: "Tôi viết email/tin nhắn chuyên nghiệp",
                    tooltip: "Giao tiếp văn bản"
                }
            ]
        },
        {
            id: 'teamwork',
            name: 'Làm việc Nhóm',
            icon: '🤝',
            questions: [
                {
                    text: "Tôi thích làm việc nhóm hơn làm một mình",
                    tooltip: "Tinh thần collaboration"
                },
                {
                    text: "Tôi tôn trọng ý kiến khác biệt",
                    tooltip: "Chấp nhận đa dạng"
                },
                {
                    text: "Tôi hoàn thành phần việc đúng hạn",
                    tooltip: "Trách nhiệm với team"
                }
            ]
        },
        {
            id: 'creativity',
            name: 'Sáng tạo & Đổi mới',
            icon: '💡',
            questions: [
                {
                    text: "Tôi nghĩ ra nhiều cách giải quyết vấn đề",
                    tooltip: "Tư duy phát tán"
                },
                {
                    text: "Tôi không ngại thử ý tưởng mới",
                    tooltip: "Tinh thần đổi mới"
                },
                {
                    text: "Tôi kết hợp nhiều ý tưởng thành điều mới lạ",
                    tooltip: "Tư duy tổng hợp"
                }
            ]
        },
        {
            id: 'adaptability',
            name: 'Thích nghi Linh hoạt',
            icon: '🌊',
            questions: [
                {
                    text: "Tôi thích ứng nhanh với thay đổi",
                    tooltip: "Flexibility cao"
                },
                {
                    text: "Tôi học được từ thất bại",
                    tooltip: "Growth mindset"
                },
                {
                    text: "Tôi thoải mái với sự không chắc chắn",
                    tooltip: "Chấp nhận uncertainty"
                }
            ]
        },
        {
            id: 'problem-solving',
            name: 'Giải quyết Vấn đề',
            icon: '🔧',
            questions: [
                {
                    text: "Khi gặp vấn đề, tôi phân tích nguyên nhân",
                    tooltip: "Root cause analysis"
                },
                {
                    text: "Tôi thử nhiều cách nếu cách đầu không được",
                    tooltip: "Tư duy thử nghiệm"
                },
                {
                    text: "Tôi chia vấn đề lớn thành nhiều vấn đề nhỏ",
                    tooltip: "Decomposition skill"
                }
            ]
        },
        {
            id: 'self-learning',
            name: 'Tự học & Phát triển',
            icon: '📚',
            questions: [
                {
                    text: "Tôi thường học thêm ngoài chương trình trường",
                    tooltip: "Lifelong learning"
                },
                {
                    text: "Tôi biết sử dụng tài nguyên online để học",
                    tooltip: "Self-directed learning"
                },
                {
                    text: "Tôi đặt mục tiêu phát triển bản thân",
                    tooltip: "Personal growth mindset"
                }
            ]
        },
        {
            id: 'financial-literacy',
            name: 'Tài chính Cơ bản',
            icon: '💰',
            questions: [
                {
                    text: "Tôi quản lý tiền tiêu vặt có kế hoạch",
                    tooltip: "Budgeting skill"
                },
                {
                    text: "Tôi hiểu khái niệm tiết kiệm và đầu tư",
                    tooltip: "Financial awareness"
                },
                {
                    text: "Tôi không mua sắm bốc đồng",
                    tooltip: "Spending discipline"
                }
            ]
        }
    ]
};


// ==================== ✨ SUBJECTS DATA (MỚI THÊM - BƯỚC 4) ====================
const subjectsData = {
    subjects: [
        { id: 'toan', name: 'Toán học', icon: '🔢', relatedCareers: ['tech', 'finance', 'science', 'engineering'] },
        { id: 'tin', name: 'Tin học', icon: '💻', relatedCareers: ['tech', 'it', 'data'] },
        { id: 'sinh', name: 'Sinh học', icon: '🧬', relatedCareers: ['healthcare', 'biology', 'agriculture'] },
        { id: 'van', name: 'Ngữ văn', icon: '📖', relatedCareers: ['media', 'communication', 'education', 'art'] },
        { id: 'ngoaingu', name: 'Ngoại ngữ', icon: '🌏', relatedCareers: ['tourism', 'business', 'international'] },
        { id: 'lichsu', name: 'Lịch sử', icon: '📚', relatedCareers: ['education', 'research', 'culture'] },
        { id: 'diali', name: 'Địa lí', icon: '🗺️', relatedCareers: ['geography', 'environment', 'tourism'] },
        { id: 'vatli', name: 'Vật lí', icon: '⚛️', relatedCareers: ['engineering', 'physics', 'tech'] },
        { id: 'gdcd', name: 'GDCD', icon: '⚖️', relatedCareers: ['law', 'politics', 'social'] },
        { id: 'hoahoc', name: 'Hóa học', icon: '🧪', relatedCareers: ['chemistry', 'pharmacy', 'science'] }
    ]
};