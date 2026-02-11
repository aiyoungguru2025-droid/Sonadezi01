// ==================== V-MENTOR AI CHATBOT ====================
// Chatbot tư vấn nghề nghiệp thông minh
// Kết hợp Rule-based + AI (Claude API)
// =================================================================

class VMentorChatbot {
    constructor() {
        this.isOpen = false;
        this.conversationHistory = [];
        this.userProfile = this.loadUserProfile();
        this.currentMode = 'auto'; // auto, rule-based, ai
        this.isTyping = false;
        
        this.init();
    }
    
    // ==================== INITIALIZATION ====================
    init() {
        this.createChatbotUI();
        this.attachEventListeners();
        this.loadWelcomeMessage();
    }
    
    createChatbotUI() {
        const chatbotHTML = `
            <div class="chatbot-widget" id="chatbot-widget">
                <!-- Toggle Button -->
                <button class="chatbot-toggle" id="chatbot-toggle" aria-label="Mở chatbot">
                    <i class="fas fa-comments"></i>
                    <span class="chatbot-badge" id="chatbot-badge">1</span>
                </button>
                
                <!-- Chat Window -->
                <div class="chatbot-window" id="chatbot-window" style="display: none;">
                    <!-- Header -->
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <div class="chatbot-avatar">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div>
                                <h4>V-Mentor AI</h4>
                                <span class="chatbot-status">
                                    <span class="status-dot"></span>
                                    Đang hoạt động
                                </span>
                            </div>
                        </div>
                        <div class="chatbot-header-actions">
                            <button class="chatbot-action-btn" id="chatbot-minimize" title="Thu nhỏ">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button class="chatbot-action-btn" id="chatbot-close" title="Đóng">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Messages Container -->
                    <div class="chatbot-messages" id="chatbot-messages">
                        <!-- Messages will be added here -->
                    </div>
                    
                    <!-- Quick Actions -->
                    <div class="chatbot-quick-actions" id="chatbot-quick-actions">
                        <!-- Quick action buttons will be added here -->
                    </div>
                    
                    <!-- Input Area -->
                    <div class="chatbot-input-area">
                        <button class="chatbot-attach-btn" id="chatbot-attach" title="Đính kèm">
                            <i class="fas fa-paperclip"></i>
                        </button>
                        <input 
                            type="text" 
                            class="chatbot-input" 
                            id="chatbot-input" 
                            placeholder="Nhập câu hỏi của bạn..."
                            autocomplete="off"
                        />
                        <button class="chatbot-send-btn" id="chatbot-send" title="Gửi">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    
                    <!-- Powered by -->
                    <div class="chatbot-footer">
                        <span>Powered by Claude AI</span>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }
    
    attachEventListeners() {
        const toggle = document.getElementById('chatbot-toggle');
        const close = document.getElementById('chatbot-close');
        const minimize = document.getElementById('chatbot-minimize');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        
        toggle.addEventListener('click', () => this.toggleChat());
        close.addEventListener('click', () => this.closeChat());
        minimize.addEventListener('click', () => this.minimizeChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }
    
    // ==================== CHAT CONTROLS ====================
    toggleChat() {
        this.isOpen = !this.isOpen;
        const window = document.getElementById('chatbot-window');
        const badge = document.getElementById('chatbot-badge');
        
        if (this.isOpen) {
            window.style.display = 'flex';
            badge.style.display = 'none';
            this.scrollToBottom();
        } else {
            window.style.display = 'none';
        }
    }
    
    closeChat() {
        this.isOpen = false;
        document.getElementById('chatbot-window').style.display = 'none';
    }
    
    minimizeChat() {
        this.closeChat();
    }
    
    // ==================== MESSAGING ====================
    async sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message || this.isTyping) return;
        
        // Clear quick actions when user starts typing
        this.clearQuickActions();
        
        // Add user message
        this.addMessage(message, 'user');
        input.value = '';
        
        // Add to history
        this.conversationHistory.push({ role: 'user', content: message });
        
        // Process message
        await this.processMessage(message);
    }
    
    async processMessage(message) {
        this.isTyping = true;
        this.showTypingIndicator();
        
        // Determine if should use rule-based or AI
        const shouldUseRuleBased = this.shouldUseRuleBased(message);
        
        let response;
        if (shouldUseRuleBased && this.currentMode !== 'ai') {
            response = await this.getRuleBasedResponse(message);
        } else {
            response = await this.getAIResponse(message);
        }
        
        this.hideTypingIndicator();
        this.isTyping = false;
        
        // Add bot response
        if (response.type === 'text') {
            this.addMessage(response.content, 'bot');
        } else if (response.type === 'rich') {
            this.addRichMessage(response);
        }
        
        // Add quick actions if provided
        if (response.quickActions) {
            this.updateQuickActions(response.quickActions);
        }
        
        // Add to history
        this.conversationHistory.push({ 
            role: 'assistant', 
            content: response.content 
        });
    }
    
    // ==================== RULE-BASED LOGIC ====================
    shouldUseRuleBased(message) {
        const msg = message.toLowerCase();
        
        // Always use rule-based for greetings and common questions
        const alwaysRuleBased = [
            'xin chào', 'chào', 'hello', 'hi', 'hey',
            'cảm ơn', 'thank', 'giúp', 'hướng dẫn'
        ];
        
        if (alwaysRuleBased.some(keyword => msg.includes(keyword))) {
            return true;
        }
        
        // Use rule-based for specific topics we have data for
        const ruleBasedKeywords = [
            // Career info
            'lương', 'thu nhập', 'ngành', 'nghề', 'công việc', 'làm việc',
            // Schools
            'trường', 'đại học', 'cao đẳng', 'điểm chuẩn', 'học phí', 'tuyển sinh',
            // Tests
            'test', 'kiểm tra', 'holland', 'kết quả', 'đánh giá',
            // Learning path
            'lộ trình', 'học', 'ra trường', 'tốt nghiệp', 'chuẩn bị',
            // Comparisons
            'so sánh', 'khác nhau', 'giống nhau', 'tốt hơn',
            // Career traits
            'phù hợp', 'thích hợp', 'nên', 'tốt nhất', 'triển vọng'
        ];
        
        return ruleBasedKeywords.some(keyword => msg.includes(keyword));
    }
    
    async getRuleBasedResponse(message) {
        const msg = message.toLowerCase().trim();
        
        // Greetings and small talk
        if (this.isGreeting(msg)) {
            return this.getGreetingResponse();
        }
        
        // Thank you
        if (this.isThankYou(msg)) {
            return this.getThankYouResponse();
        }
        
        // Help/Guide requests
        if (msg.includes('giúp') || msg.includes('hướng dẫn') || msg.includes('làm sao')) {
            return this.getHelpResponse();
        }
        
        // Career salary questions
        if (msg.includes('lương') || msg.includes('thu nhập')) {
            return this.getSalaryInfo(message);
        }
        
        // School information
        if (msg.includes('trường') || msg.includes('đại học') || msg.includes('điểm chuẩn') || msg.includes('cao đẳng')) {
            return this.getSchoolInfo(message);
        }
        
        // Test results
        if (msg.includes('test') || msg.includes('kết quả') || msg.includes('kiểm tra')) {
            return this.getTestResultInfo();
        }
        
        // Learning roadmap
        if (msg.includes('lộ trình') || msg.includes('học gì') || msg.includes('ra trường')) {
            return this.getRoadmapInfo(message);
        }
        
        // Career suggestions
        if (msg.includes('ngành') || msg.includes('nghề') || msg.includes('nên') || msg.includes('phù hợp')) {
            return this.getCareerSuggestions();
        }
        
        // Career comparison
        if (msg.includes('so sánh') || msg.includes('khác nhau')) {
            return this.getComparisonInfo(message);
        }
        
        // General questions - try to answer conversationally
        return this.getGeneralResponse(message);
    }
    
    isGreeting(msg) {
        const greetings = ['xin chào', 'chào', 'hello', 'hi', 'hey', 'hế lô', 'halo'];
        return greetings.some(g => msg.includes(g));
    }
    
    isThankYou(msg) {
        const thanks = ['cảm ơn', 'cám ơn', 'thank', 'thanks', 'tks'];
        return thanks.some(t => msg.includes(t));
    }
    
    getGreetingResponse() {
        return {
            type: 'text',
            content: `Chào bạn! 👋\n\nMình là V-Mentor AI, trợ lý tư vấn nghề nghiệp.\n\nBạn có thể hỏi mình về:\n• Ngành nghề phù hợp\n• Mức lương\n• Trường học\n• Lộ trình học tập\n\nHoặc gõ "hướng dẫn" để xem thêm! 😊`,
            quickActions: [
                { text: '🎯 Làm bài test', action: 'start_test' },
                { text: '💼 Khám phá ngành nghề', action: 'explore_careers' }
            ]
        };
    }
    
    getThankYouResponse() {
        const responses = [
            'Không có gì! 😊 Mình luôn sẵn sàng giúp bạn. Còn câu hỏi gì khác không?',
            'Rất vui được giúp bạn! 🌟 Hãy hỏi mình bất cứ lúc nào nhé!',
            'Hehe, đó là nhiệm vụ của mình mà! 💪 Chúc bạn thành công!'
        ];
        
        return {
            type: 'text',
            content: responses[Math.floor(Math.random() * responses.length)]
        };
    }
    
    getHelpResponse() {
        return {
            type: 'text',
            content: `📚 **Mình có thể giúp gì?**\n\n💬 Gõ câu hỏi tự do, ví dụ:\n• "Lương ngành IT bao nhiêu?"\n• "Trường nào tốt cho CNTT?"\n• "Lộ trình học Marketing?"\n\n🎯 Hoặc làm bài test để nhận tư vấn chi tiết!`,
            quickActions: [
                { text: '🎯 Làm bài test', action: 'start_test' }
            ]
        };
    }
    
    getSalaryInfo(message) {
        // Check if specific career mentioned
        const careerKeywords = {
            'it': 'it-software',
            'lập trình': 'it-software',
            'bác sĩ': 'doctor',
            'y khoa': 'doctor',
            'kỹ sư': 'engineering',
            'kinh doanh': 'business',
            'marketing': 'marketing',
            'thiết kế': 'design'
        };
        
        let careerId = null;
        for (const [keyword, id] of Object.entries(careerKeywords)) {
            if (message.toLowerCase().includes(keyword)) {
                careerId = id;
                break;
            }
        }
        
        if (careerId && typeof careersDatabase !== 'undefined' && careersDatabase[careerId]) {
            const career = careersDatabase[careerId];
            return {
                type: 'rich',
                content: `Thông tin mức lương ngành ${career.name}`,
                data: {
                    type: 'salary',
                    career: career
                },
                quickActions: [
                    { text: '🏫 Xem trường đào tạo', action: 'show_schools', data: careerId },
                    { text: '📚 Lộ trình học tập', action: 'show_roadmap', data: careerId }
                ]
            };
        }
        
        return {
            type: 'text',
            content: `💰 **Thông tin mức lương**\n\nGõ cụ thể tên ngành để xem chi tiết, ví dụ:\n• "Lương ngành IT"\n• "Thu nhập ngành Y"\n• "Mức lương Marketing"\n\n🎯 Hoặc làm test để biết ngành phù hợp!`,
            quickActions: [
                { text: '🎯 Làm bài test', action: 'start_test' }
            ]
        };
    }
    
    getSchoolInfo(message) {
        return {
            type: 'text',
            content: `🏫 **Thông tin trường học**\n\nGõ ngành bạn quan tâm, ví dụ:\n• "Trường CNTT nào tốt?"\n• "Điểm chuẩn Y khoa?"\n• "Học phí ngành Kinh tế?"\n\n💡 Mình sẽ gợi ý trường phù hợp!`,
            quickActions: [
                { text: '🎯 Làm test trước', action: 'start_test' }
            ]
        };
    }
    
    getComparisonInfo(message) {
        return {
            type: 'text',
            content: `📊 **So sánh ngành nghề**\n\nBạn có thể hỏi về từng ngành riêng hoặc làm bài test để biết ngành nào phù hợp nhất!\n\n💡 Tip: Làm test trước sẽ giúp bạn chọn đúng hướng hơn đấy!`,
            quickActions: [
                { text: '🎯 Làm bài test', action: 'start_test' }
            ]
        };
    }
    
    getGeneralResponse(message) {
        // For questions we don't have specific rules for
        return {
            type: 'text',
            content: `Hmm, câu hỏi hay đấy! 🤔\n\nBạn có thể hỏi rõ hơn không? Ví dụ:\n• "Lương ngành [tên ngành]?"\n• "Trường nào tốt cho [ngành]?"\n• "Lộ trình học [ngành]?"\n\n🎯 Hoặc làm test để mình tư vấn đúng hướng nhất!`,
            quickActions: [
                { text: '🎯 Làm bài test', action: 'start_test' }
            ]
        };
    }
    
    getSalaryInfo(message) {
        // Check if specific career mentioned
        const careerKeywords = {
            'it': 'it-software',
            'lập trình': 'it-software',
            'bác sĩ': 'doctor',
            'y khoa': 'doctor',
            'kỹ sư': 'engineering',
            'kinh doanh': 'business',
            'marketing': 'marketing',
            'thiết kế': 'design'
        };
        
        let careerId = null;
        for (const [keyword, id] of Object.entries(careerKeywords)) {
            if (message.toLowerCase().includes(keyword)) {
                careerId = id;
                break;
            }
        }
        
        if (careerId && typeof careersDatabase !== 'undefined' && careersDatabase[careerId]) {
            const career = careersDatabase[careerId];
            return {
                type: 'rich',
                content: `Thông tin mức lương ngành ${career.name}`,
                data: {
                    type: 'salary',
                    career: career
                },
                quickActions: [
                    { text: '🏫 Xem trường đào tạo', action: 'show_schools', data: careerId },
                    { text: '📚 Lộ trình học tập', action: 'show_roadmap', data: careerId },
                    { text: '💼 Vị trí công việc', action: 'show_positions', data: careerId }
                ]
            };
        }
        
        return {
            type: 'text',
            content: `Để tư vấn chính xác về mức lương, bạn có thể:
            
1. Chọn ngành nghề cụ thể bạn quan tâm
2. Hoàn thành bài test để nhận gợi ý ngành phù hợp
3. Hỏi cụ thể về một ngành, ví dụ: "Mức lương ngành IT như thế nào?"`,
            quickActions: [
                { text: '🎯 Làm bài test', action: 'start_test' },
                { text: '💻 Ngành IT', action: 'career_info', data: 'it-software' },
                { text: '⚕️ Ngành Y', action: 'career_info', data: 'doctor' }
            ]
        };
    }
    
    getSchoolInfo(message) {
        return {
            type: 'text',
            content: `Tôi có thể giúp bạn tìm thông tin về:

🎓 **Đại học**: Điểm chuẩn, học phí, tổ hợp môn
🏢 **Cao đẳng/Trung cấp**: Thời gian học, chi phí, ưu điểm
🏫 **So sánh trường**: Top trường theo ngành

Bạn quan tâm đến ngành nào?`,
            quickActions: [
                { text: '💻 CNTT', action: 'schools_by_career', data: 'it-software' },
                { text: '⚕️ Y Dược', action: 'schools_by_career', data: 'doctor' },
                { text: '🏗️ Xây dựng', action: 'schools_by_career', data: 'engineering' },
                { text: '🎨 Thiết kế', action: 'schools_by_career', data: 'design' }
            ]
        };
    }
    
    getTestResultInfo() {
        if (!this.userProfile.testCompleted) {
            return {
                type: 'text',
                content: `Bạn chưa hoàn thành bài test đánh giá nghề nghiệp!

Hãy làm bài test để:
✅ Khám phá tính cách nghề nghiệp của bạn
✅ Nhận gợi ý TOP ngành phù hợp nhất
✅ Được tư vấn lộ trình học tập chi tiết

Bài test chỉ mất 5-7 phút!`,
                quickActions: [
                    { text: '🎯 Bắt đầu làm test', action: 'start_test' },
                    { text: '📖 Tìm hiểu về test Holland', action: 'explain_holland' }
                ]
            };
        }
        
        return {
            type: 'rich',
            content: 'Kết quả test của bạn',
            data: {
                type: 'test_result',
                profile: this.userProfile
            },
            quickActions: [
                { text: '🔄 Làm lại test', action: 'restart_test' },
                { text: '💼 Xem gợi ý nghề', action: 'show_career_suggestions' }
            ]
        };
    }
    
    getRoadmapInfo(message) {
        return {
            type: 'text',
            content: `Tôi có thể gợi ý lộ trình học tập chi tiết cho bạn!

Lộ trình bao gồm:
📚 Các bước từ cấp 3 đến khi đi làm
🎓 Trường học phù hợp với điểm số của bạn
💼 Kỹ năng cần trang bị
⏰ Timeline cụ thể

Bạn muốn xem lộ trình cho ngành nào?`,
            quickActions: [
                { text: '💻 CNTT & Phần mềm', action: 'roadmap', data: 'it-software' },
                { text: '⚕️ Bác sĩ Y khoa', action: 'roadmap', data: 'doctor' },
                { text: '🎨 Thiết kế đồ họa', action: 'roadmap', data: 'design' },
                { text: '📊 Kinh doanh', action: 'roadmap', data: 'business' }
            ]
        };
    }
    
    getCareerSuggestions() {
        if (!this.userProfile.testCompleted) {
            return {
                type: 'text',
                content: `Để tư vấn ngành nghề phù hợp nhất, bạn nên làm bài test trước nhé!

Sau khi hoàn thành test, tôi sẽ:
✨ Phân tích tính cách nghề nghiệp của bạn
🎯 Gợi ý TOP 5-10 ngành phù hợp nhất
📊 Đánh giá mức độ phù hợp (%)
💡 Giải thích tại sao ngành đó phù hợp`,
                quickActions: [
                    { text: '🎯 Làm test ngay', action: 'start_test' },
                    { text: '🔍 Khám phá ngành hot', action: 'show_trending_careers' }
                ]
            };
        }
        
        return this.generateCareerSuggestionsFromProfile();
    }
    
    generateCareerSuggestionsFromProfile() {
        // This will use the Holland test results
        const topCode = this.userProfile.hollandCode;
        
        return {
            type: 'rich',
            content: `Dựa trên kết quả test của bạn (${topCode})`,
            data: {
                type: 'career_suggestions',
                hollandCode: topCode,
                profile: this.userProfile
            },
            quickActions: [
                { text: '📊 Xem chi tiết', action: 'view_details' },
                { text: '🏫 Thông tin trường', action: 'schools_overview' }
            ]
        };
    }
    
    // ==================== AI RESPONSE ====================
    async getAIResponse(message) {
        try {
            // Prepare context
            const systemPrompt = this.buildSystemPrompt();
            const userContext = this.buildUserContext();
            
            // Call Claude API
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 1000,
                    messages: [
                        {
                            role: 'user',
                            content: `${systemPrompt}\n\n${userContext}\n\nCâu hỏi: ${message}`
                        }
                    ]
                })
            });
            
            const data = await response.json();
            const aiMessage = data.content[0].text;
            
            return {
                type: 'text',
                content: aiMessage
            };
            
        } catch (error) {
            console.error('AI Error:', error);
            return {
                type: 'text',
                content: 'Xin lỗi, tôi đang gặp sự cố kỹ thuật. Bạn có thể thử lại hoặc hỏi câu hỏi khác không?'
            };
        }
    }
    
    buildSystemPrompt() {
        return `Bạn là V-Mentor AI, trợ lý tư vấn nghề nghiệp thông minh cho học sinh Việt Nam.

VAI TRÒ:
- Tư vấn nghề nghiệp dựa trên Holland Code và MBTI
- Gợi ý trường học, lộ trình học tập
- Chia sẻ thông tin về mức lương, cơ hội việc làm
- Động viên, khích lệ học sinh

PHONG CÁCH:
- Thân thiện, nhiệt tình như anh/chị tư vấn
- Dùng emoji phù hợp
- Câu ngắn gọn, dễ hiểu
- Tích cực, lạc quan
- Đưa ra lời khuyên thực tế, cụ thể

LƯU Ý:
- Không đưa ra lời khuyên y khoa, pháp lý
- Khuyến khích học sinh làm test trước khi tư vấn chi tiết
- Luôn đưa ra nhiều lựa chọn, không áp đặt`;
    }
    
    buildUserContext() {
        let context = 'THÔNG TIN HỌC SINH:\n';
        
        if (this.userProfile.testCompleted) {
            context += `- Đã hoàn thành test Holland\n`;
            context += `- Mã Holland: ${this.userProfile.hollandCode}\n`;
            context += `- Điểm số: ${JSON.stringify(this.userProfile.scores)}\n`;
        } else {
            context += `- Chưa làm test đánh giá nghề nghiệp\n`;
        }
        
        if (this.conversationHistory.length > 0) {
            context += `\nLỊCH SỬ HỘI THOẠI (${this.conversationHistory.length} tin nhắn gần nhất):\n`;
            this.conversationHistory.slice(-5).forEach(msg => {
                context += `${msg.role}: ${msg.content}\n`;
            });
        }
        
        return context;
    }
    
    // ==================== UI RENDERING ====================
    addMessage(content, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}`;
        
        const time = new Date().toLocaleTimeString('vi-VN', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <div class="message-text">${this.formatMessage(content)}</div>
                    <div class="message-time">${time}</div>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-text">${this.escapeHtml(content)}</div>
                    <div class="message-time">${time}</div>
                </div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    addRichMessage(response) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot rich';
        
        let richContent = '';
        
        if (response.data.type === 'salary') {
            richContent = this.renderSalaryCard(response.data.career);
        } else if (response.data.type === 'career_suggestions') {
            richContent = this.renderCareerSuggestions(response.data);
        } else if (response.data.type === 'test_result') {
            richContent = this.renderTestResult(response.data.profile);
        }
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="message-rich">${richContent}</div>
            </div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    renderSalaryCard(career) {
        return `
            <div class="rich-card salary-card">
                <div class="rich-card-header">
                    <span class="career-icon">${career.icon}</span>
                    <h4>${career.name}</h4>
                </div>
                <div class="salary-info">
                    <div class="salary-item">
                        <span class="salary-label">Mới ra trường</span>
                        <span class="salary-value">${career.salary.entry}</span>
                    </div>
                    <div class="salary-item">
                        <span class="salary-label">3-5 năm kinh nghiệm</span>
                        <span class="salary-value">${career.salary.mid}</span>
                    </div>
                    <div class="salary-item">
                        <span class="salary-label">Chuyên gia (5+ năm)</span>
                        <span class="salary-value highlight">${career.salary.senior}</span>
                    </div>
                </div>
                ${career.salary.note ? `<div class="salary-note">💡 ${career.salary.note}</div>` : ''}
            </div>
        `;
    }
    
    renderCareerSuggestions(data) {
        // This would render top career matches based on Holland code
        return `
            <div class="rich-card suggestions-card">
                <h4>🎯 Top ngành nghề phù hợp với bạn</h4>
                <p class="holland-code">Mã Holland của bạn: <strong>${data.hollandCode}</strong></p>
                <div class="suggestion-list">
                    <div class="suggestion-item">
                        <span class="match-score">95%</span>
                        <span class="career-name">💻 Công nghệ Thông tin</span>
                    </div>
                    <div class="suggestion-item">
                        <span class="match-score">88%</span>
                        <span class="career-name">📊 Phân tích Dữ liệu</span>
                    </div>
                    <div class="suggestion-item">
                        <span class="match-score">82%</span>
                        <span class="career-name">🎨 Thiết kế UX/UI</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderTestResult(profile) {
        return `
            <div class="rich-card test-result-card">
                <h4>📊 Kết quả test của bạn</h4>
                <div class="holland-result">
                    <span class="holland-code-badge">${profile.hollandCode}</span>
                    <p>Bạn thuộc nhóm tính cách nghề nghiệp: <strong>${this.getHollandTypeName(profile.hollandCode)}</strong></p>
                </div>
                <div class="scores-chart">
                    ${this.renderScoresChart(profile.scores)}
                </div>
            </div>
        `;
    }
    
    renderScoresChart(scores) {
        if (!scores) return '';
        
        let html = '<div class="scores-bars">';
        for (const [code, score] of Object.entries(scores)) {
            const percentage = (score / 5) * 100;
            html += `
                <div class="score-bar">
                    <span class="score-label">${code}</span>
                    <div class="score-track">
                        <div class="score-fill" style="width: ${percentage}%"></div>
                    </div>
                    <span class="score-value">${score.toFixed(1)}</span>
                </div>
            `;
        }
        html += '</div>';
        return html;
    }
    
    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot typing';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }
    
    updateQuickActions(actions) {
        const container = document.getElementById('chatbot-quick-actions');
        
        if (!actions || actions.length === 0) {
            container.innerHTML = '';
            container.style.display = 'none';
            return;
        }
        
        container.style.display = 'flex';
        container.innerHTML = '';
        
        actions.forEach(action => {
            const button = document.createElement('button');
            button.className = 'quick-action-btn';
            button.textContent = action.text;
            button.addEventListener('click', () => this.handleQuickAction(action));
            container.appendChild(button);
        });
    }
    
    clearQuickActions() {
        const container = document.getElementById('chatbot-quick-actions');
        container.innerHTML = '';
        container.style.display = 'none';
    }
    
    handleQuickAction(action) {
        // Simulate user clicking the action
        const input = document.getElementById('chatbot-input');
        
        switch(action.action) {
            case 'start_test':
                window.location.href = '#test-section';
                this.addMessage('Bắt đầu làm bài test', 'user');
                this.addMessage('Tuyệt vời! Hãy hoàn thành bài test để tôi có thể tư vấn chính xác nhất cho bạn nhé! 🎯', 'bot');
                break;
                
            case 'career_info':
                this.sendMessage(`Cho tôi biết về ngành ${action.data}`);
                break;
                
            case 'roadmap':
                this.sendMessage(`Lộ trình học tập ngành ${action.data}`);
                break;
                
            default:
                console.log('Action:', action);
        }
    }
    
    // ==================== UTILITIES ====================
    formatMessage(text) {
        // Convert markdown-like syntax to HTML
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/^\d+\.\s/gm, '<br>$&');
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    scrollToBottom() {
        const container = document.getElementById('chatbot-messages');
        setTimeout(() => {
            container.scrollTop = container.scrollHeight;
        }, 100);
    }
    
    getHollandTypeName(code) {
        const types = {
            'R': 'Thực tế (Realistic)',
            'I': 'Nghiên cứu (Investigative)',
            'A': 'Nghệ thuật (Artistic)',
            'S': 'Xã hội (Social)',
            'E': 'Kinh doanh (Enterprising)',
            'C': 'Truyền thống (Conventional)'
        };
        return types[code] || code;
    }
    
    loadUserProfile() {
        // Load from localStorage or return default
        const saved = localStorage.getItem('vmentor_user_profile');
        if (saved) {
            return JSON.parse(saved);
        }
        
        return {
            testCompleted: false,
            hollandCode: null,
            scores: null,
            preferredCareers: []
        };
    }
    
    saveUserProfile() {
        localStorage.setItem('vmentor_user_profile', JSON.stringify(this.userProfile));
    }
    
    loadWelcomeMessage() {
        setTimeout(() => {
            this.addMessage(`Chào bạn! 👋\n\nMình là **V-Mentor AI** - trợ lý tư vấn nghề nghiệp.\n\nMình giúp bạn:\n✨ Tìm ngành nghề phù hợp\n📚 Tư vấn lộ trình học tập\n💰 Thông tin lương & triển vọng\n\nHãy hỏi mình bất cứ điều gì! 😊`, 'bot');
            
            this.updateQuickActions([
                { text: '🎯 Làm bài test', action: 'start_test' },
                { text: '💼 Khám phá ngành nghề', action: 'explore_careers' }
            ]);
            
            // Show notification badge
            document.getElementById('chatbot-badge').style.display = 'flex';
        }, 1000);
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    window.chatbot = new VMentorChatbot();
});
