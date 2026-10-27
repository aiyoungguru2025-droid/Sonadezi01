// ==================== CẤU HÌNH API CHATBOT ====================
// KHÔNG gọi trực tiếp api.anthropic.com từ trình duyệt (bị chặn CORS + cần API key bí mật).
// Hãy trỏ tới backend/proxy của bạn (xem file chat-proxy-worker.js).
const VMENTOR_CHAT_API_URL = window.VMENTOR_CHAT_API_URL || '/api/chat';

// ==================== V-MENTOR CHATBOT V3 - ENHANCED ====================
// Chatbot thông minh với Claude AI + Dark Mode + Voice + Typing Effects
// =====================================================================

class VMentorChatbotV3 {
    constructor() {
        this.isOpen = false;
        this.isMinimized = false;
        this.conversationHistory = [];
        this.userProfile = this.loadUserProfile();
        this.isTyping = false;
        this.isFullscreen = false;
        this.unreadCount = 1;
        this.messageQueue = [];
        this.currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        
        this.init();
    }
    
    // ==================== INIT ====================
    init() {
        this.removeLegacyChatbot();
        this.createChatbotUI();
        this.attachEventListeners();
        this.loadWelcomeMessage();
        this.watchThemeChanges();
    }

    removeLegacyChatbot() {
        const old = document.getElementById('chatbot-widget');
        if (old) old.remove();
    }
    
    createChatbotUI() {
        const chatbotHTML = `
        <div class="chatbot-widget-v3" id="chatbot-widget">
            <!-- ===== TOGGLE BUTTON ===== -->
            <button class="chatbot-fab" id="chatbot-toggle" aria-label="Mở chat tư vấn">
                <span class="fab-icon-open"><i class="fas fa-comments"></i></span>
                <span class="fab-icon-close" style="display:none;"><i class="fas fa-times"></i></span>
                <span class="fab-badge" id="chatbot-badge">1</span>
                <span class="fab-pulse"></span>
            </button>
            
            <!-- ===== CHAT WINDOW ===== -->
            <div class="chatbot-panel" id="chatbot-window" style="display:none;">
                <!-- HEADER -->
                <div class="chatbot-panel-header">
                    <div class="header-left">
                        <div class="bot-avatar-wrap">
                            <div class="bot-avatar">
                                <i class="fas fa-robot"></i>
                            </div>
                            <span class="bot-status-dot"></span>
                        </div>
                        <div class="bot-info">
                            <div class="bot-name">V-Mentor AI</div>
                            <div class="bot-status-text">
                                <span class="pulse-dot"></span>
                                Đang hoạt động 24/7
                            </div>
                        </div>
                    </div>
                    <div class="header-right">
                        <button class="panel-btn" id="chatbot-search-btn" title="Tìm kiếm trong chat">
                            <i class="fas fa-search"></i>
                        </button>
                        <button class="panel-btn" id="chatbot-fullscreen" title="Toàn màn hình">
                            <i class="fas fa-expand"></i>
                        </button>
                        <button class="panel-btn" id="chatbot-clear" title="Xóa cuộc trò chuyện">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <button class="panel-btn close-btn" id="chatbot-close" title="Đóng">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <!-- SEARCH BAR (hidden by default) -->
                <div class="chat-search-bar" id="chat-search-bar" style="display:none;">
                    <i class="fas fa-search"></i>
                    <input type="text" id="chat-search-input" placeholder="Tìm trong cuộc trò chuyện...">
                    <button id="chat-search-close"><i class="fas fa-times"></i></button>
                </div>
                
                <!-- CONTEXT BANNER (optional) -->
                <div class="context-banner" id="context-banner" style="display:none;">
                    <i class="fas fa-info-circle"></i>
                    <span id="context-banner-text">Đang tư vấn về ngành...</span>
                    <button onclick="document.getElementById('context-banner').style.display='none'">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <!-- MESSAGES -->
                <div class="chat-messages" id="chatbot-messages">
                    <!-- Messages injected here -->
                </div>
                
                <!-- QUICK ACTIONS -->
                <div class="chat-quick-actions" id="chatbot-quick-actions">
                    <!-- Quick action pills injected here -->
                </div>
                
                <!-- INPUT AREA -->
                <div class="chat-input-wrap">
                    <div class="chat-input-box">
                        <textarea 
                            id="chatbot-input"
                            class="chat-textarea"
                            placeholder="Nhập câu hỏi của bạn..."
                            rows="1"
                            autocomplete="off"
                        ></textarea>
                        <div class="input-actions">
                            <button class="input-action-btn emoji-btn" id="emoji-btn" title="Emoji">
                                <i class="far fa-smile"></i>
                            </button>
                            <button class="chat-send-btn" id="chatbot-send" title="Gửi (Enter)">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                    <div class="input-hint">
                        <span>Powered by <strong>Claude AI</strong></span>
                        <span class="char-count" id="char-count">0/500</span>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        this.injectStyles();
    }

    injectStyles() {
        if (document.getElementById('chatbot-v3-styles')) return;
        const style = document.createElement('style');
        style.id = 'chatbot-v3-styles';
        style.textContent = `
/* ===== CHATBOT V3 STYLES ===== */
.chatbot-widget-v3 {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 2500;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* ===== FAB BUTTON ===== */
.chatbot-fab {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    font-size: 1.625rem;
    cursor: pointer;
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.5);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.chatbot-fab:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.6);
}

.chatbot-fab:active {
    transform: scale(0.95);
}

.fab-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 22px;
    height: 22px;
    background: linear-gradient(135deg, #ef4444, #f97316);
    color: white;
    border-radius: 50%;
    font-size: 0.7rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
}

.fab-pulse {
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: rgba(102, 126, 234, 0.3);
    animation: fabPulse 2.5s infinite;
}

@keyframes fabPulse {
    0% { transform: scale(1); opacity: 0.6; }
    70% { transform: scale(1.3); opacity: 0; }
    100% { transform: scale(1); opacity: 0; }
}

/* ===== CHAT PANEL ===== */
.chatbot-panel {
    position: absolute;
    bottom: 80px;
    right: 0;
    width: 420px;
    max-height: 620px;
    background: white;
    border-radius: 1.5rem;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: panelSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid rgba(0,0,0,0.08);
}

[data-theme="dark"] .chatbot-panel {
    background: #1e2535;
    border-color: #2a3350;
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
}

.chatbot-panel.fullscreen {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    width: 100%;
    max-height: 100vh;
    border-radius: 0;
    z-index: 9999;
}

@keyframes panelSlideUp {
    from { opacity: 0; transform: translateY(20px) scale(0.96); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}

/* ===== HEADER ===== */
.chatbot-panel-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 1rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    position: relative;
}

.chatbot-panel-header::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(255,255,255,0.1);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 0.875rem;
}

.bot-avatar-wrap {
    position: relative;
}

.bot-avatar {
    width: 42px;
    height: 42px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    border: 2px solid rgba(255,255,255,0.35);
    backdrop-filter: blur(8px);
}

.bot-status-dot {
    position: absolute;
    bottom: 1px;
    right: 1px;
    width: 11px;
    height: 11px;
    background: #10b981;
    border-radius: 50%;
    border: 2px solid white;
    animation: statusBlink 3s infinite;
}

@keyframes statusBlink {
    0%, 90%, 100% { opacity: 1; }
    95% { opacity: 0.3; }
}

.bot-name {
    color: white;
    font-weight: 700;
    font-size: 1.05rem;
    letter-spacing: -0.01em;
}

.bot-status-text {
    color: rgba(255,255,255,0.85);
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.35rem;
}

.pulse-dot {
    width: 7px;
    height: 7px;
    background: #10b981;
    border-radius: 50%;
    animation: blink 2s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.header-right {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.panel-btn {
    width: 32px;
    height: 32px;
    border: 1.5px solid rgba(255,255,255,0.25);
    background: rgba(255,255,255,0.12);
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    transition: all 0.25s;
    backdrop-filter: blur(8px);
}

.panel-btn:hover {
    background: rgba(255,255,255,0.25);
    border-color: rgba(255,255,255,0.5);
    transform: scale(1.1);
}

.panel-btn.close-btn:hover {
    background: rgba(239, 68, 68, 0.6);
    border-color: rgba(239, 68, 68, 0.8);
}

/* ===== SEARCH BAR ===== */
.chat-search-bar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
    flex-shrink: 0;
}

[data-theme="dark"] .chat-search-bar {
    background: #161b27;
    border-bottom-color: #2a3350;
}

.chat-search-bar i {
    color: #9ca3af;
    flex-shrink: 0;
}

.chat-search-bar input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 0.875rem;
    color: #374151;
    outline: none;
}

[data-theme="dark"] .chat-search-bar input {
    color: #f0f4ff;
}

.chat-search-bar button {
    border: none;
    background: transparent;
    color: #9ca3af;
    cursor: pointer;
    font-size: 0.875rem;
    padding: 0.25rem;
}

/* ===== CONTEXT BANNER ===== */
.context-banner {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
    background: linear-gradient(135deg, #dbeafe, #ede9fe);
    border-bottom: 1px solid #c7d2fe;
    font-size: 0.8125rem;
    font-weight: 600;
    color: #3730a3;
    flex-shrink: 0;
}

[data-theme="dark"] .context-banner {
    background: linear-gradient(135deg, #0f1e40, #1a1535);
    border-bottom-color: #2a2060;
    color: #a78bfa;
}

.context-banner button {
    margin-left: auto;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    opacity: 0.7;
}

/* ===== MESSAGES AREA ===== */
.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    scroll-behavior: smooth;
    background: #f8fafc;
}

[data-theme="dark"] .chat-messages {
    background: #161b27;
}

.chat-messages::-webkit-scrollbar {
    width: 5px;
}

.chat-messages::-webkit-scrollbar-track {
    background: transparent;
}

.chat-messages::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 99px;
}

[data-theme="dark"] .chat-messages::-webkit-scrollbar-thumb {
    background: #2a3350;
}

/* ===== MESSAGE ITEM ===== */
.chat-msg {
    display: flex;
    gap: 0.75rem;
    animation: msgAppear 0.3s ease-out;
}

@keyframes msgAppear {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
}

.chat-msg.user { flex-direction: row-reverse; }

.msg-avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 0.9rem;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.msg-avatar.user-avatar {
    background: linear-gradient(135deg, #10b981, #3cba92);
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.msg-body {
    max-width: 78%;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.chat-msg.user .msg-body { align-items: flex-end; }

.msg-bubble {
    padding: 0.8rem 1.1rem;
    border-radius: 1rem;
    line-height: 1.65;
    font-size: 0.875rem;
    word-break: break-word;
    position: relative;
    transition: var(--transition-theme, all 0.3s);
}

.chat-msg.bot .msg-bubble {
    background: white;
    color: #1f2937;
    border: 1px solid #e5e7eb;
    border-bottom-left-radius: 0.25rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

[data-theme="dark"] .chat-msg.bot .msg-bubble {
    background: #1e2535;
    color: #f0f4ff;
    border-color: #2a3350;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.chat-msg.user .msg-bubble {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-bottom-right-radius: 0.25rem;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);
}

.msg-time {
    font-size: 0.67rem;
    color: #9ca3af;
    padding: 0 0.25rem;
}

/* ===== TYPING INDICATOR ===== */
.typing-indicator .msg-bubble {
    padding: 0.9rem 1.1rem;
}

.typing-dots-v3 {
    display: flex;
    gap: 0.35rem;
    align-items: center;
}

.typing-dots-v3 span {
    width: 7px;
    height: 7px;
    background: #667eea;
    border-radius: 50%;
    animation: typeDot 1.2s infinite;
}

.typing-dots-v3 span:nth-child(2) { animation-delay: 0.2s; }
.typing-dots-v3 span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typeDot {
    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
    30% { transform: translateY(-8px); opacity: 1; }
}

/* ===== DATE DIVIDER ===== */
.date-divider {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0.5rem 0;
}

.date-divider::before,
.date-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e5e7eb;
}

[data-theme="dark"] .date-divider::before,
[data-theme="dark"] .date-divider::after {
    background: #2a3350;
}

.date-divider span {
    font-size: 0.7rem;
    color: #9ca3af;
    font-weight: 500;
    white-space: nowrap;
}

/* ===== RICH MESSAGES ===== */
.rich-message {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    font-size: 0.875rem;
}

[data-theme="dark"] .rich-message {
    background: #1e2535;
    border-color: #2a3350;
}

.rich-header {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid #f3f4f6;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: linear-gradient(135deg, #f8faff, #fdf8ff);
}

[data-theme="dark"] .rich-header {
    background: linear-gradient(135deg, #1a1f35, #1a1530);
    border-bottom-color: #2a3350;
}

.rich-header-icon { font-size: 1.75rem; }

.rich-header h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    color: #1f2937;
}

[data-theme="dark"] .rich-header h4 {
    color: #f0f4ff;
}

.rich-header p {
    margin: 0.2rem 0 0;
    font-size: 0.75rem;
    color: #6b7280;
}

.rich-body {
    padding: 1rem 1.25rem;
}

/* Salary items */
.salary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, #f0fdf4, #fef3c7);
    border-radius: 0.75rem;
    margin-bottom: 0.75rem;
    border-left: 3px solid #10b981;
}

[data-theme="dark"] .salary-row {
    background: linear-gradient(135deg, #0f1f10, #1a1505);
}

.salary-row-label {
    font-weight: 600;
    color: #374151;
    font-size: 0.8125rem;
}

[data-theme="dark"] .salary-row-label { color: #a8b4cc; }

.salary-row-value {
    font-weight: 700;
    color: #10b981;
    font-size: 1rem;
}

.salary-row-value.featured {
    color: #667eea;
    font-size: 1.15rem;
}

/* Career suggestion items */
.career-suggestion-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1rem;
    background: linear-gradient(135deg, #f8faff, #fdf8ff);
    border-left: 3px solid #667eea;
    border-radius: 0.75rem;
    margin-bottom: 0.625rem;
    transition: all 0.25s;
    cursor: pointer;
}

[data-theme="dark"] .career-suggestion-item {
    background: linear-gradient(135deg, #1a1d35, #1a1530);
}

.career-suggestion-item:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.cs-match {
    font-size: 1.125rem;
    font-weight: 800;
    color: #10b981;
    min-width: 50px;
}

.cs-icon { font-size: 1.5rem; }

.cs-name {
    font-weight: 600;
    color: #374151;
    font-size: 0.9rem;
}

[data-theme="dark"] .cs-name { color: #f0f4ff; }

/* ===== QUICK ACTIONS ===== */
.chat-quick-actions {
    padding: 0.625rem 1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    background: white;
    border-top: 1px solid #f3f4f6;
    flex-shrink: 0;
    min-height: 0;
    transition: all 0.3s;
}

[data-theme="dark"] .chat-quick-actions {
    background: #1e2535;
    border-top-color: #2a3350;
}

.chat-quick-actions:empty {
    display: none;
    padding: 0;
}

.qa-pill {
    padding: 0.45rem 1rem;
    background: white;
    border: 1.5px solid #e5e7eb;
    border-radius: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #667eea;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

[data-theme="dark"] .qa-pill {
    background: #252d3f;
    border-color: #2a3350;
    color: #a78bfa;
}

.qa-pill:hover {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-color: transparent;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

/* ===== INPUT AREA ===== */
.chat-input-wrap {
    padding: 0.875rem 1.25rem;
    background: white;
    border-top: 2px solid #f3f4f6;
    flex-shrink: 0;
}

[data-theme="dark"] .chat-input-wrap {
    background: #1e2535;
    border-top-color: #2a3350;
}

.chat-input-box {
    display: flex;
    align-items: flex-end;
    gap: 0.75rem;
    background: #f8fafc;
    border: 2px solid #e5e7eb;
    border-radius: 1.25rem;
    padding: 0.625rem 0.75rem 0.625rem 1rem;
    transition: border-color 0.25s;
}

[data-theme="dark"] .chat-input-box {
    background: #252d3f;
    border-color: #2a3350;
}

.chat-input-box:focus-within {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);
}

.chat-textarea {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 0.875rem;
    color: #1f2937;
    outline: none;
    resize: none;
    line-height: 1.5;
    max-height: 120px;
    font-family: inherit;
    overflow-y: auto;
}

[data-theme="dark"] .chat-textarea {
    color: #f0f4ff;
}

.chat-textarea::placeholder {
    color: #9ca3af;
}

.input-actions {
    display: flex;
    align-items: flex-end;
    gap: 0.375rem;
    flex-shrink: 0;
}

.input-action-btn {
    width: 34px;
    height: 34px;
    border: none;
    background: transparent;
    color: #9ca3af;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    font-size: 1rem;
}

.input-action-btn:hover {
    background: #f3f4f6;
    color: #667eea;
}

[data-theme="dark"] .input-action-btn:hover {
    background: #2a3350;
}

.chat-send-btn {
    width: 38px;
    height: 38px;
    border: none;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);
    transition: all 0.2s;
    flex-shrink: 0;
}

.chat-send-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 18px rgba(102, 126, 234, 0.5);
}

.chat-send-btn:active {
    transform: scale(0.95);
}

.chat-send-btn.loading {
    background: #e5e7eb;
    pointer-events: none;
}

[data-theme="dark"] .chat-send-btn.loading {
    background: #2a3350;
}

.chat-send-btn.loading i::before {
    content: '\f110';
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.input-hint {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    padding: 0 0.25rem;
    font-size: 0.7rem;
    color: #9ca3af;
}

.char-count.warning { color: #f59e0b; }
.char-count.limit { color: #ef4444; }

/* ===== EMOJI PICKER (simple) ===== */
.emoji-panel {
    position: absolute;
    bottom: 80px;
    right: 1.25rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 1rem;
    padding: 0.75rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.5rem;
    z-index: 10;
    animation: fadeInUp 0.2s ease-out;
}

[data-theme="dark"] .emoji-panel {
    background: #1e2535;
    border-color: #2a3350;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}

.emoji-btn-item {
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.375rem;
    text-align: center;
    transition: transform 0.15s;
    border: none;
    background: transparent;
}

.emoji-btn-item:hover {
    transform: scale(1.3);
    background: #f3f4f6;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    .chatbot-widget-v3 {
        bottom: 1rem;
        right: 1rem;
    }

    .chatbot-panel {
        width: calc(100vw - 2rem);
        max-height: 75vh;
        bottom: 70px;
        right: 0;
    }

    .chatbot-fab {
        width: 56px;
        height: 56px;
        font-size: 1.375rem;
    }
}

@media (max-width: 480px) {
    .chatbot-panel {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 10vh;
        width: 100%;
        max-height: none;
        border-radius: 1.5rem 1.5rem 0 0;
    }
}
        `;
        document.head.appendChild(style);
    }
    
    // ==================== EVENT LISTENERS ====================
    attachEventListeners() {
        // Toggle
        document.getElementById('chatbot-toggle').addEventListener('click', () => this.toggle());
        document.getElementById('chatbot-close').addEventListener('click', () => this.close());
        document.getElementById('chatbot-fullscreen').addEventListener('click', () => this.toggleFullscreen());
        document.getElementById('chatbot-clear').addEventListener('click', () => this.clearChat());
        
        // Search
        const searchBtn = document.getElementById('chatbot-search-btn');
        const searchBar = document.getElementById('chat-search-bar');
        const searchInput = document.getElementById('chat-search-input');
        const searchClose = document.getElementById('chat-search-close');
        
        searchBtn.addEventListener('click', () => {
            const visible = searchBar.style.display !== 'none';
            searchBar.style.display = visible ? 'none' : 'flex';
            if (!visible) searchInput.focus();
        });
        searchClose.addEventListener('click', () => {
            searchBar.style.display = 'none';
        });
        searchInput.addEventListener('input', (e) => this.searchMessages(e.target.value));
        
        // Send
        document.getElementById('chatbot-send').addEventListener('click', () => this.sendMessage());
        
        // Textarea
        const textarea = document.getElementById('chatbot-input');
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        textarea.addEventListener('input', () => {
            this.autoResize(textarea);
            this.updateCharCount(textarea.value.length);
        });
        
        // Emoji
        document.getElementById('emoji-btn').addEventListener('click', () => this.toggleEmojiPanel());
        
        // Close emoji on outside click
        document.addEventListener('click', (e) => {
            const panel = document.getElementById('emoji-panel');
            if (panel && !panel.contains(e.target) && e.target.id !== 'emoji-btn' && !e.target.closest('.emoji-btn')) {
                panel.remove();
            }
        });
    }
    
    // ==================== CONTROLS ====================
    toggle() {
        this.isOpen ? this.close() : this.open();
    }
    
    open() {
        this.isOpen = true;
        const win = document.getElementById('chatbot-window');
        const badge = document.getElementById('chatbot-badge');
        const toggle = document.getElementById('chatbot-toggle');
        
        win.style.display = 'flex';
        badge.style.display = 'none';
        this.unreadCount = 0;
        
        toggle.querySelector('.fab-icon-open').style.display = 'none';
        toggle.querySelector('.fab-icon-close').style.display = 'block';
        
        this.scrollToBottom();
    }
    
    close() {
        this.isOpen = false;
        const win = document.getElementById('chatbot-window');
        const toggle = document.getElementById('chatbot-toggle');
        
        win.style.display = 'none';
        win.classList.remove('fullscreen');
        this.isFullscreen = false;
        
        toggle.querySelector('.fab-icon-open').style.display = 'block';
        toggle.querySelector('.fab-icon-close').style.display = 'none';
    }
    
    toggleFullscreen() {
        const win = document.getElementById('chatbot-window');
        const btn = document.getElementById('chatbot-fullscreen');
        this.isFullscreen = !this.isFullscreen;
        
        win.classList.toggle('fullscreen', this.isFullscreen);
        btn.innerHTML = this.isFullscreen 
            ? '<i class="fas fa-compress"></i>' 
            : '<i class="fas fa-expand"></i>';
    }
    
    clearChat() {
        if (!confirm('Bạn có muốn xóa cuộc trò chuyện này không?')) return;
        document.getElementById('chatbot-messages').innerHTML = '';
        document.getElementById('chatbot-quick-actions').innerHTML = '';
        this.conversationHistory = [];
        this.loadWelcomeMessage();
    }
    
    // ==================== AUTO-RESIZE TEXTAREA ====================
    autoResize(el) {
        el.style.height = 'auto';
        el.style.height = Math.min(el.scrollHeight, 120) + 'px';
    }
    
    updateCharCount(len) {
        const el = document.getElementById('char-count');
        el.textContent = `${len}/500`;
        el.className = 'char-count' + (len > 450 ? ' warning' : '') + (len >= 500 ? ' limit' : '');
    }
    
    // ==================== MESSAGING ====================
    async sendMessage() {
        const textarea = document.getElementById('chatbot-input');
        const msg = textarea.value.trim();
        if (!msg || this.isTyping || msg.length > 500) return;
        
        this.clearQuickActions();
        this.addMessage(msg, 'user');
        textarea.value = '';
        textarea.style.height = 'auto';
        this.updateCharCount(0);
        
        this.conversationHistory.push({ role: 'user', content: msg });
        await this.processMessage(msg);
    }
    
    async processMessage(message) {
        this.isTyping = true;
        this.setSendLoading(true);
        this.showTyping();
        
        // Smart routing
        const isSimple = this.isSimpleQuery(message);
        let response;
        
        try {
            if (isSimple) {
                response = await this.getRuleBasedResponse(message);
            } else {
                response = await this.getClaudeResponse(message);
            }
        } catch (err) {
            response = {
                type: 'text',
                content: '😅 Xin lỗi, mình gặp lỗi kết nối. Bạn thử lại sau nhé!\n\nBạn có thể hỏi mình:\n• Thông tin về ngành nghề\n• Mức lương các nghề\n• Trường học phù hợp',
                quickActions: [
                    { text: '🎯 Bắt đầu test', action: 'start_test' },
                    { text: '💼 Khám phá nghề', action: 'explore_careers' }
                ]
            };
        }
        
        this.hideTyping();
        this.isTyping = false;
        this.setSendLoading(false);
        
        if (response.type === 'text') {
            this.addMessage(response.content, 'bot');
        } else if (response.type === 'rich') {
            this.addRichMessage(response);
        }
        
        if (response.quickActions) {
            this.updateQuickActions(response.quickActions);
        }
        
        this.conversationHistory.push({
            role: 'assistant',
            content: typeof response.content === 'string' ? response.content : '[rich message]'
        });
    }
    
    // ==================== CLAUDE AI RESPONSE ====================
    async getClaudeResponse(message) {
        // Build system prompt với context từ app
        const currentCareerName = this.getCurrentCareerContext();
        const systemPrompt = `Bạn là V-Mentor AI, chuyên gia tư vấn nghề nghiệp cho học sinh THPT và trung cấp nghề Việt Nam 2026.

Nhiệm vụ chính:
- Tư vấn định hướng nghề nghiệp phù hợp với năng lực và sở thích
- Cung cấp thông tin về ngành học, mức lương, cơ hội việc làm
- Hướng dẫn lộ trình học tập và phát triển kỹ năng
- Phân tích xu hướng AI tác động đến nghề nghiệp

Phong cách: thân thiện, nhiệt tình, dùng emoji phù hợp, ngắn gọn súc tích (tối đa 250 từ/câu).
Ngôn ngữ: Tiếng Việt.
${currentCareerName ? `Context hiện tại: User đang xem ngành ${currentCareerName}.` : ''}

Khi trả lời:
- Dùng bullet points hoặc số thứ tự khi liệt kê
- Thêm emoji để sinh động
- Kết thúc bằng 1-2 câu hỏi gợi ý để duy trì cuộc trò chuyện
- Không viết quá dài`;

        // conversationHistory đã chứa tin nhắn user hiện tại (push trong sendMessage)
        const messages = this.conversationHistory
            .slice(-8)
            .filter(m => typeof m.content === 'string' && m.content && m.content !== '[rich message]');
        if (!messages.length || messages[messages.length - 1].role !== 'user') {
            messages.push({ role: 'user', content: message });
        }
        // API yêu cầu tin nhắn đầu tiên phải là 'user'
        while (messages.length && messages[0].role !== 'user') messages.shift();

        try {
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), 25000);

            const response = await fetch(VMENTOR_CHAT_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ system: systemPrompt, messages }),
                signal: controller.signal
            });
            clearTimeout(timer);

            if (!response.ok) throw new Error('HTTP ' + response.status);

            const data = await response.json();
            const text = data.content?.[0]?.text;
            if (!text) throw new Error('Empty response');

            return {
                type: 'text',
                content: text,
                quickActions: this.generateContextualQuickActions(message, text)
            };
        } catch (err) {
            console.warn('[V-Mentor] AI API lỗi, dùng trả lời offline:', err);
            return this.getLocalFallbackResponse(message);
        }
    }

    // ==================== OFFLINE FALLBACK (không cần API) ====================
    getLocalFallbackResponse(message) {
        const msg = message.toLowerCase();
        const db = (typeof careersDatabase !== 'undefined') ? careersDatabase : {};
        const careers = Object.values(db);

        // Tìm ngành được nhắc tới trong câu hỏi (hoặc ngành đang xem)
        let career = careers.find(c => c.name && msg.includes(c.name.toLowerCase()));
        if (!career && typeof selectedCareer !== 'undefined' && selectedCareer && db[selectedCareer]) {
            career = db[selectedCareer];
        }

        const asksSalary = /lương|thu nhập|salary/.test(msg);
        const asksSchool = /trường|đại học|học ở đâu|điểm chuẩn/.test(msg);

        if (career && asksSalary && career.salary) {
            return {
                type: 'text',
                content: `${career.icon || '💼'} **${career.name}** – mức lương tham khảo:\n\n• 🌱 Khởi điểm: **${career.salary.entry || 'N/A'}**\n• 💼 Mid-level: **${career.salary.mid || 'N/A'}**\n• 🌟 Senior: **${career.salary.senior || 'N/A'}**\n\nBạn muốn xem trường đào tạo ngành này không? 😊`,
                quickActions: [{ text: '🏫 Top trường đào tạo', action: 'top_schools' }, { text: '🎯 Làm bài test', action: 'start_test' }]
            };
        }

        if (career && asksSchool && career.universities?.length) {
            const list = career.universities.slice(0, 5)
                .map(u => `• **${u.name}** – điểm ${u.score} (${u.combo})`).join('\n');
            return {
                type: 'text',
                content: `🏫 Một số trường đào tạo **${career.name}**:\n\n${list}\n\nBạn muốn biết thêm về mức lương ngành này không? 💰`,
                quickActions: [{ text: '📊 So sánh mức lương', action: 'compare_salary' }]
            };
        }

        if (career) {
            return {
                type: 'text',
                content: `${career.icon || '💼'} **${career.name}**\n\n• 🔧 Mã Holland: **${career.hollandCode || 'N/A'}**\n• 📈 Triển vọng: ${career.growth || 'N/A'}\n• 🎯 Nhu cầu việc làm: ${career.jobDemand || 'N/A'}\n• 💰 Lương khởi điểm: ${career.salary?.entry || 'N/A'}\n\nBạn muốn hỏi thêm về lương hay trường học? 😊`,
                quickActions: [{ text: '📊 So sánh mức lương', action: 'compare_salary' }, { text: '🏫 Top trường đào tạo', action: 'top_schools' }]
            };
        }

        if (careers.length && /ngành|nghề|danh sách|phổ biến/.test(msg)) {
            const list = careers.slice(0, 8).map(c => `• ${c.icon || '💼'} ${c.name}`).join('\n');
            return {
                type: 'text',
                content: `💼 Một số ngành nghề trên V-MENTOR:\n\n${list}\n\nHãy hỏi mình về một ngành cụ thể (lương, trường học...) nhé! 😊`,
                quickActions: [{ text: '🎯 Làm bài test', action: 'start_test' }]
            };
        }

        return {
            type: 'text',
            content: '🤖 Hiện mình đang ở chế độ offline nên chưa trả lời sâu được câu này.\n\nBạn thử hỏi theo mẫu:\n• "Lương ngành [tên ngành]"\n• "Trường đào tạo [tên ngành]"\n• "Thông tin ngành [tên ngành]"\n\nHoặc làm bài test để mình gợi ý ngành phù hợp! 🎯',
            quickActions: [
                { text: '🎯 Bắt đầu test', action: 'start_test' },
                { text: '💼 Khám phá nghề', action: 'explore_careers' }
            ]
        };
    }

    generateContextualQuickActions(userMsg, botReply) {
        const msg = userMsg.toLowerCase();
        const actions = [];
        
        if (msg.includes('lương') || msg.includes('salary')) {
            actions.push({ text: '📊 So sánh mức lương', action: 'compare_salary' });
        }
        if (msg.includes('trường') || msg.includes('học')) {
            actions.push({ text: '🏫 Top trường đào tạo', action: 'top_schools' });
        }
        if (msg.includes('ai') || msg.includes('tương lai')) {
            actions.push({ text: '🤖 Đánh giá nguy cơ AI', action: 'ai_impact' });
        }
        
        // Always add these
        actions.push({ text: '🎯 Làm bài test', action: 'start_test' });
        
        return actions.slice(0, 3);
    }
    
    // ==================== RULE-BASED (fast for simple queries) ====================
    isSimpleQuery(message) {
        const msg = message.toLowerCase().trim();
        const simplePatterns = [
            /^(chào|hello|hi|hey|xin chào)/i,
            /^(cảm ơn|cám ơn|thanks|thank)/i,
            /^(giúp|hướng dẫn|help)(\s|$)/i,
            /^(tạm biệt|bye|goodbye)/i
        ];
        return simplePatterns.some(p => p.test(msg));
    }
    
    async getRuleBasedResponse(message) {
        const msg = message.toLowerCase().trim();
        
        // Greetings
        if (/xin chào|chào|hello|hi|hey/i.test(msg)) {
            return {
                type: 'text',
                content: `Chào bạn! 👋 Mình là **V-Mentor AI**, trợ lý tư vấn nghề nghiệp thông minh!\n\n✨ Mình có thể giúp bạn:\n• 🎯 Khám phá ngành nghề phù hợp\n• 💰 Tìm hiểu mức lương thực tế\n• 🏫 Tư vấn chọn trường học\n• 🤖 Đánh giá tác động AI đến nghề\n• 📈 Lộ trình phát triển sự nghiệp\n\nBạn đang băn khoăn về vấn đề gì? 😊`,
                quickActions: [
                    { text: '🎯 Bắt đầu test nghề nghiệp', action: 'start_test' },
                    { text: '💼 Khám phá ngành nghề', action: 'explore_careers' },
                    { text: '🤖 Tìm hiểu tác động AI', action: 'ai_impact' }
                ]
            };
        }
        
        // Thank you
        if (/cảm ơn|cám ơn|thanks|thank/i.test(msg)) {
            const responses = [
                'Không có gì! 😊 Mình luôn sẵn sàng giúp bạn định hướng nghề nghiệp. Còn câu hỏi nào khác không?',
                'Rất vui được giúp bạn! 🌟 Bạn có muốn tìm hiểu thêm về bất kỳ ngành nào không?',
                'Dạ không có gì ạ! 💪 Chúc bạn chọn được ngành nghề thật phù hợp nhé!'
            ];
            return {
                type: 'text',
                content: responses[Math.floor(Math.random() * responses.length)],
                quickActions: [
                    { text: '💼 Xem ngành nghề', action: 'explore_careers' },
                    { text: '📊 Xem lương', action: 'check_salary' }
                ]
            };
        }
        
        // Help
        if (/giúp|hướng dẫn|help/i.test(msg)) {
            return {
                type: 'text',
                content: `📖 **Hướng dẫn sử dụng V-MENTOR AI:**\n\n**1️⃣ Làm bài test Holland:**\nTrả lời các câu hỏi về tính cách, sở thích để AI phân tích ngành nghề phù hợp.\n\n**2️⃣ Xem kết quả:**\nTop 10 ngành nghề được cá nhân hóa cho bạn.\n\n**3️⃣ Khám phá chi tiết:**\nThông tin về lương, trường học, lộ trình từng ngành.\n\n**4️⃣ So sánh nghề:**\nĐối chiếu 2 ngành để đưa ra quyết định tốt nhất.\n\n💬 Hoặc cứ hỏi mình trực tiếp bất cứ điều gì!`,
                quickActions: [
                    { text: '🎯 Bắt đầu ngay!', action: 'start_test' },
                    { text: '💼 Xem ngành nghề', action: 'explore_careers' }
                ]
            };
        }
        
        // Goodbye
        if (/tạm biệt|bye|goodbye/i.test(msg)) {
            return {
                type: 'text',
                content: 'Tạm biệt bạn! 👋 Chúc bạn tìm được ngành nghề thật phù hợp. Mình luôn ở đây mỗi khi bạn cần tư vấn! 🌟'
            };
        }
        
        // Fallback to Claude
        return await this.getClaudeResponse(message);
    }
    
    // ==================== UI HELPERS ====================
    getCurrentCareerContext() {
        if (typeof selectedCareer !== 'undefined' && selectedCareer && typeof careersDatabase !== 'undefined') {
            return careersDatabase[selectedCareer]?.name || null;
        }
        return null;
    }
    
    addMessage(content, sender = 'bot') {
        const container = document.getElementById('chatbot-messages');
        const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
        
        const msgEl = document.createElement('div');
        msgEl.className = `chat-msg ${sender}`;
        
        const avatarIcon = sender === 'bot' ? 'fas fa-robot' : 'fas fa-user';
        const avatarClass = sender === 'bot' ? '' : 'user-avatar';
        
        // Format content with markdown-like parsing
        const formattedContent = this.formatContent(content);
        
        msgEl.innerHTML = `
            <div class="msg-avatar ${avatarClass}">
                <i class="${avatarIcon}"></i>
            </div>
            <div class="msg-body">
                <div class="msg-bubble">${formattedContent}</div>
                <div class="msg-time">${time}</div>
            </div>
        `;
        
        container.appendChild(msgEl);
        this.scrollToBottom();
    }
    
    formatContent(content) {
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>')
            .replace(/• /g, '• ');
    }
    
    addRichMessage(response) {
        const container = document.getElementById('chatbot-messages');
        const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
        
        const msgEl = document.createElement('div');
        msgEl.className = 'chat-msg bot';
        msgEl.innerHTML = `
            <div class="msg-avatar"><i class="fas fa-robot"></i></div>
            <div class="msg-body" style="max-width: 90%;">
                <div class="rich-message">${response.html}</div>
                <div class="msg-time">${time}</div>
            </div>
        `;
        
        container.appendChild(msgEl);
        this.scrollToBottom();
    }
    
    showTyping() {
        const container = document.getElementById('chatbot-messages');
        const el = document.createElement('div');
        el.className = 'chat-msg bot typing-indicator';
        el.id = 'typing-indicator';
        el.innerHTML = `
            <div class="msg-avatar"><i class="fas fa-robot"></i></div>
            <div class="msg-body">
                <div class="msg-bubble">
                    <div class="typing-dots-v3">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(el);
        this.scrollToBottom();
    }
    
    hideTyping() {
        const el = document.getElementById('typing-indicator');
        if (el) el.remove();
    }
    
    setSendLoading(loading) {
        const btn = document.getElementById('chatbot-send');
        btn.classList.toggle('loading', loading);
    }
    
    updateQuickActions(actions) {
        const container = document.getElementById('chatbot-quick-actions');
        container.innerHTML = '';
        
        actions.forEach(action => {
            const btn = document.createElement('button');
            btn.className = 'qa-pill';
            btn.textContent = action.text;
            btn.addEventListener('click', () => this.handleQuickAction(action));
            container.appendChild(btn);
        });
    }
    
    clearQuickActions() {
        document.getElementById('chatbot-quick-actions').innerHTML = '';
    }
    
    handleQuickAction(action) {
        const actionMap = {
            'start_test': () => {
                document.getElementById('chatbot-input').value = 'Tôi muốn bắt đầu bài test định hướng nghề nghiệp';
                this.sendMessage();
            },
            'explore_careers': () => {
                const step4 = document.querySelector('.test-step[data-step="4"]');
                if (step4) {
                    step4.scrollIntoView({ behavior: 'smooth' });
                    this.addMessage('Bạn có thể xem danh sách ngành nghề bên dưới nhé! 👇', 'bot');
                } else {
                    document.getElementById('chatbot-input').value = 'Cho tôi xem danh sách ngành nghề phổ biến';
                    this.sendMessage();
                }
            },
            'ai_impact': () => {
                document.getElementById('chatbot-input').value = 'AI sẽ tác động như thế nào đến các ngành nghề trong tương lai?';
                this.sendMessage();
            },
            'compare_salary': () => {
                document.getElementById('chatbot-input').value = 'So sánh mức lương các ngành hot nhất 2026';
                this.sendMessage();
            },
            'top_schools': () => {
                document.getElementById('chatbot-input').value = 'Các trường đại học tốt nhất Việt Nam hiện nay?';
                this.sendMessage();
            },
            'check_salary': () => {
                document.getElementById('chatbot-input').value = 'Mức lương trung bình các ngành nghề 2026?';
                this.sendMessage();
            }
        };
        
        const handler = actionMap[action.action];
        if (handler) {
            handler();
        } else {
            document.getElementById('chatbot-input').value = action.text.replace(/^[^\s]*\s/, '');
            this.sendMessage();
        }
    }
    
    scrollToBottom() {
        setTimeout(() => {
            const container = document.getElementById('chatbot-messages');
            if (container) container.scrollTop = container.scrollHeight;
        }, 50);
    }
    
    searchMessages(query) {
        const messages = document.querySelectorAll('.msg-bubble');
        messages.forEach(msg => {
            const text = msg.textContent.toLowerCase();
            const visible = !query || text.includes(query.toLowerCase());
            msg.closest('.chat-msg').style.opacity = visible ? '1' : '0.3';
        });
    }
    
    toggleEmojiPanel() {
        const existing = document.getElementById('emoji-panel');
        if (existing) { existing.remove(); return; }
        
        const emojis = ['😊', '👍', '🎯', '💪', '🤔', '😅', '🎓', '💼', '💰', '🏫', '🤖', '📊', '✨', '🌟', '❓', '📝', '🚀', '💡', '🎉', '👋'];
        
        const panel = document.createElement('div');
        panel.className = 'emoji-panel';
        panel.id = 'emoji-panel';
        
        emojis.forEach(emoji => {
            const btn = document.createElement('button');
            btn.className = 'emoji-btn-item';
            btn.textContent = emoji;
            btn.addEventListener('click', () => {
                const textarea = document.getElementById('chatbot-input');
                textarea.value += emoji;
                textarea.focus();
                panel.remove();
            });
            panel.appendChild(btn);
        });
        
        const wrap = document.querySelector('.chat-input-wrap');
        wrap.style.position = 'relative';
        wrap.appendChild(panel);
    }
    
    watchThemeChanges() {
        const observer = new MutationObserver(() => {
            this.currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }
    
    loadWelcomeMessage() {
        setTimeout(() => {
            this.addMessage(`Xin chào! 👋 Mình là **V-Mentor AI**.\n\nMình có thể giúp bạn:\n• 🎯 Tìm ngành nghề phù hợp\n• 💰 Thông tin mức lương\n• 🏫 Tư vấn chọn trường\n• 🤖 Phân tích tác động AI\n\nBạn muốn tìm hiểu về điều gì? 😊`, 'bot');
            
            setTimeout(() => {
                this.updateQuickActions([
                    { text: '🎯 Bắt đầu test', action: 'start_test' },
                    { text: '💼 Xem ngành nghề', action: 'explore_careers' },
                    { text: '🤖 AI & nghề nghiệp', action: 'ai_impact' }
                ]);
            }, 300);
        }, 500);
    }
    
    loadUserProfile() {
        try {
            const saved = localStorage.getItem('vmmentor_user_profile');
            return saved ? JSON.parse(saved) : {};
        } catch { return {}; }
    }
}

// ==================== THEME TOGGLE SYSTEM ====================
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('vmmentor_theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        this.init();
    }
    
    init() {
        this.applyTheme(this.theme, false);
        this.injectToggleButton();
        this.listenSystemChange();
    }
    
    injectToggleButton() {
        // Inject into header actions
        const waitForHeader = setInterval(() => {
            const headerActions = document.querySelector('.header-actions');
            if (headerActions) {
                clearInterval(waitForHeader);
                
                const btn = document.createElement('button');
                btn.className = 'theme-toggle-btn';
                btn.id = 'theme-toggle-btn';
                btn.setAttribute('aria-label', 'Chuyển đổi chế độ sáng/tối');
                btn.innerHTML = `
                    <span class="toggle-icon">
                        <span class="theme-sun">☀️</span>
                        <span class="theme-moon">🌙</span>
                    </span>
                    <div class="toggle-track">
                        <div class="toggle-thumb"></div>
                    </div>
                    <span id="theme-label" style="font-size:0.8rem;">${this.theme === 'dark' ? 'Tối' : 'Sáng'}</span>
                `;
                btn.addEventListener('click', (e) => this.toggle(e));
                headerActions.prepend(btn);
                
                // Also inject overlay
                const overlay = document.createElement('div');
                overlay.className = 'theme-transition-overlay';
                overlay.id = 'theme-overlay';
                document.body.appendChild(overlay);
            }
        }, 100);
    }
    
    toggle(event) {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        
        // Ripple effect from click position
        const overlay = document.getElementById('theme-overlay');
        if (overlay && event) {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
            const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
            overlay.style.setProperty('--x', x + '%');
            overlay.style.setProperty('--y', y + '%');
            overlay.classList.add('active');
            setTimeout(() => overlay.classList.remove('active'), 400);
        }
        
        this.applyTheme(newTheme, true);
    }
    
    applyTheme(theme, save = true) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        
        if (save) {
            localStorage.setItem('vmmentor_theme', theme);
        }
        
        // Update button label
        const label = document.getElementById('theme-label');
        if (label) label.textContent = theme === 'dark' ? 'Tối' : 'Sáng';
        
        // Update meta theme-color
        let metaTheme = document.querySelector('meta[name="theme-color"]');
        if (!metaTheme) {
            metaTheme = document.createElement('meta');
            metaTheme.name = 'theme-color';
            document.head.appendChild(metaTheme);
        }
        metaTheme.content = theme === 'dark' ? '#0f1117' : '#ffffff';
    }
    
    listenSystemChange() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set
            if (!localStorage.getItem('vmmentor_theme')) {
                this.applyTheme(e.matches ? 'dark' : 'light', false);
            }
        });
    }
}

// ==================== BOOT ====================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Init theme manager first
    window.themeManager = new ThemeManager();
    
    // 2. Init enhanced chatbot (replacing old one)
    setTimeout(() => {
        window.chatbotV3 = new VMentorChatbotV3();
    }, 300);
    
    console.log('✅ V-Mentor ChatbotV3 + ThemeManager loaded');
});
