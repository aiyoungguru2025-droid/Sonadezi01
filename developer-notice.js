// ==================== DEVELOPER NOTICE MODAL ====================
// Hiển thị thông báo nhà phát triển khi người dùng truy cập trang web

(function() {
    'use strict';
    
    // Kiểm tra xem người dùng đã xem thông báo chưa (sử dụng localStorage)
    const NOTICE_KEY = 'vmentor_dev_notice_seen';
    const noticeVersion = '1.0'; // Tăng version này nếu muốn hiển thị lại thông báo
    
    function hasSeenNotice() {
        return localStorage.getItem(NOTICE_KEY) === noticeVersion;
    }
    
    function markNoticeSeen() {
        localStorage.setItem(NOTICE_KEY, noticeVersion);
    }
    
    function createDeveloperNoticeModal() {
        // Tạo HTML cho modal
        const modalHTML = `
            <div id="developerNoticeModal" class="dev-notice-modal">
                <div class="dev-notice-overlay"></div>
                <div class="dev-notice-content">
                    <!-- Header với logo và close button -->
                    <div class="dev-notice-header">
                        <div class="dev-notice-logo">
                            <i class="fas fa-code"></i>
                        </div>
                        <button class="dev-notice-close" onclick="closeDeveloperNotice()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <!-- Body content -->
                    <div class="dev-notice-body">
                        <h2 class="dev-notice-title">
                            <i class="fas fa-users-cog"></i> Thông Tin Nhà Phát Triển
                        </h2>
                        <p class="dev-notice-subtitle">
                            Dự án được phát triển và vận hành bởi đội ngũ chuyên nghiệp
                        </p>
                        
                        <div class="dev-notice-divider"></div>
                        
                        <!-- Team Information -->
                        <div class="dev-info-section">
                            <div class="dev-info-header">
                                <div class="dev-team-badge">
                                    <i class="fas fa-users"></i>
                                    <span>Đội ngũ phát triển</span>
                                </div>
                            </div>
                            <h3 class="dev-team-name">Sonadezi 01</h3>
                            <p class="dev-team-desc">Đội ngũ công nghệ hàng đầu chuyên về AI và hướng nghiệp thông minh</p>
                        </div>
                        
                        <!-- Contact Information Grid -->
                        <div class="dev-contact-grid">
                            <!-- Phone -->
                            <div class="dev-contact-card">
                                <div class="dev-contact-icon phone">
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div class="dev-contact-info">
                                    <div class="dev-contact-label">Hotline hỗ trợ</div>
                                    <a href="tel:0354738643" class="dev-contact-value">0354 738 643</a>
                                    <div class="dev-contact-note">Hoạt động 24/7</div>
                                </div>
                            </div>
                            
                            <!-- Email -->
                            <div class="dev-contact-card">
                                <div class="dev-contact-icon email">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="dev-contact-info">
                                    <div class="dev-contact-label">Email liên hệ</div>
                                    <a href="mailto:AIYOUNGGURU@gmail.com" class="dev-contact-value">AIYOUNGGURU@gmail.com</a>
                                    <div class="dev-contact-note">Phản hồi trong 24h</div>
                                </div>
                            </div>
                            
                            <!-- Address -->
                            <div class="dev-contact-card full-width">
                                <div class="dev-contact-icon location">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="dev-contact-info">
                                    <div class="dev-contact-label">Địa chỉ văn phòng</div>
                                    <div class="dev-contact-value">1 Đường 6A, KCN Biên Hòa 2</div>
                                    <div class="dev-contact-note">Biên Hòa, Đồng Nai 810000, Việt Nam</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Features/Services -->
                        <div class="dev-features">
                            <h4 class="dev-features-title">
                                <i class="fas fa-star"></i> Cam kết của chúng tôi
                            </h4>
                            <div class="dev-features-grid">
                                <div class="dev-feature-item">
                                    <i class="fas fa-shield-alt"></i>
                                    <span>Bảo mật tuyệt đối</span>
                                </div>
                                <div class="dev-feature-item">
                                    <i class="fas fa-brain"></i>
                                    <span>AI tiên tiến</span>
                                </div>
                                <div class="dev-feature-item">
                                    <i class="fas fa-clock"></i>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                                <div class="dev-feature-item">
                                    <i class="fas fa-gift"></i>
                                    <span>Miễn phí 100%</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Statistics -->
                        <div class="dev-stats">
                            <div class="dev-stat-item">
                                <div class="dev-stat-number">10,000+</div>
                                <div class="dev-stat-label">Học sinh đã sử dụng</div>
                            </div>
                            <div class="dev-stat-item">
                                <div class="dev-stat-number">95%</div>
                                <div class="dev-stat-label">Độ chính xác</div>
                            </div>
                            <div class="dev-stat-item">
                                <div class="dev-stat-number">500+</div>
                                <div class="dev-stat-label">Ngành nghề phân tích</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Footer với CTA buttons -->
                    <div class="dev-notice-footer">
                        <button class="dev-notice-btn secondary" onclick="closeDeveloperNotice()">
                            <i class="fas fa-check"></i> Đã hiểu
                        </button>
                        <button class="dev-notice-btn primary" onclick="contactDeveloper()">
                            <i class="fas fa-phone"></i> Liên hệ ngay
                        </button>
                    </div>
                    
                    <!-- Checkbox để không hiển thị lại -->
                    <div class="dev-notice-checkbox">
                        <label>
                            <input type="checkbox" id="dontShowAgainCheckbox">
                            <span>Không hiển thị lại thông báo này</span>
                        </label>
                    </div>
                </div>
            </div>
        `;
        
        // Thêm modal vào body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Thêm CSS styles
        addDeveloperNoticeStyles();
    }
    
    function addDeveloperNoticeStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* ==================== DEVELOPER NOTICE MODAL STYLES ==================== */
            .dev-notice-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
            }
            
            .dev-notice-modal.show {
                opacity: 1;
                visibility: visible;
            }
            
            .dev-notice-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.75);
                backdrop-filter: blur(8px);
            }
            
            .dev-notice-content {
                position: relative;
                background: white;
                border-radius: 1.5rem;
                max-width: 700px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                transform: scale(0.9) translateY(20px);
                transition: transform 0.3s ease;
            }
            
            .dev-notice-modal.show .dev-notice-content {
                transform: scale(1) translateY(0);
            }
            
            /* Custom Scrollbar */
            .dev-notice-content::-webkit-scrollbar {
                width: 8px;
            }
            
            .dev-notice-content::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 0 1.5rem 1.5rem 0;
            }
            
            .dev-notice-content::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, #667eea, #764ba2);
                border-radius: 4px;
            }
            
            /* Header */
            .dev-notice-header {
                position: relative;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 2rem;
                border-radius: 1.5rem 1.5rem 0 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .dev-notice-logo {
                width: 80px;
                height: 80px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5rem;
                color: white;
                border: 3px solid rgba(255, 255, 255, 0.4);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            }
            
            .dev-notice-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.2);
                border: 2px solid rgba(255, 255, 255, 0.3);
                color: white;
                font-size: 1.25rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s;
            }
            
            .dev-notice-close:hover {
                background: rgba(255, 255, 255, 0.4);
                transform: rotate(90deg);
            }
            
            /* Body */
            .dev-notice-body {
                padding: 2rem;
            }
            
            .dev-notice-title {
                font-size: 1.75rem;
                font-weight: 700;
                color: #1f2937;
                margin-bottom: 0.5rem;
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            
            .dev-notice-title i {
                color: #667eea;
            }
            
            .dev-notice-subtitle {
                color: #6b7280;
                font-size: 1rem;
                margin-bottom: 1.5rem;
            }
            
            .dev-notice-divider {
                height: 2px;
                background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
                margin-bottom: 2rem;
                border-radius: 2px;
            }
            
            /* Team Info Section */
            .dev-info-section {
                margin-bottom: 2rem;
            }
            
            .dev-info-header {
                margin-bottom: 1rem;
            }
            
            .dev-team-badge {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 1rem;
                background: linear-gradient(135deg, #667eea15, #764ba215);
                border: 2px solid #667eea30;
                border-radius: 2rem;
                color: #667eea;
                font-weight: 600;
                font-size: 0.875rem;
            }
            
            .dev-team-name {
                font-size: 1.5rem;
                font-weight: 700;
                color: #667eea;
                margin-bottom: 0.5rem;
            }
            
            .dev-team-desc {
                color: #6b7280;
                line-height: 1.6;
            }
            
            /* Contact Cards Grid */
            .dev-contact-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .dev-contact-card {
                background: linear-gradient(135deg, #f9fafb, #f3f4f6);
                border: 2px solid #e5e7eb;
                border-radius: 1rem;
                padding: 1.25rem;
                display: flex;
                gap: 1rem;
                transition: all 0.3s;
            }
            
            .dev-contact-card:hover {
                border-color: #667eea;
                box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);
                transform: translateY(-3px);
            }
            
            .dev-contact-card.full-width {
                grid-column: 1 / -1;
            }
            
            .dev-contact-icon {
                width: 50px;
                height: 50px;
                border-radius: 0.75rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                color: white;
                flex-shrink: 0;
            }
            
            .dev-contact-icon.phone {
                background: linear-gradient(135deg, #10b981, #059669);
            }
            
            .dev-contact-icon.email {
                background: linear-gradient(135deg, #3b82f6, #2563eb);
            }
            
            .dev-contact-icon.location {
                background: linear-gradient(135deg, #f59e0b, #d97706);
            }
            
            .dev-contact-info {
                flex: 1;
            }
            
            .dev-contact-label {
                font-size: 0.75rem;
                text-transform: uppercase;
                color: #6b7280;
                font-weight: 600;
                margin-bottom: 0.25rem;
                letter-spacing: 0.05em;
            }
            
            .dev-contact-value {
                font-size: 1rem;
                font-weight: 700;
                color: #1f2937;
                display: block;
                margin-bottom: 0.25rem;
                text-decoration: none;
            }
            
            .dev-contact-value:hover {
                color: #667eea;
            }
            
            .dev-contact-note {
                font-size: 0.75rem;
                color: #9ca3af;
            }
            
            /* Features Section */
            .dev-features {
                background: linear-gradient(135deg, #fef3c715, #fed6e315);
                border-left: 4px solid #f59e0b;
                border-radius: 0.75rem;
                padding: 1.5rem;
                margin-bottom: 2rem;
            }
            
            .dev-features-title {
                font-size: 1.125rem;
                font-weight: 700;
                color: #92400e;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .dev-features-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 0.75rem;
            }
            
            .dev-feature-item {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem;
                background: white;
                border-radius: 0.5rem;
                font-weight: 500;
                color: #374151;
            }
            
            .dev-feature-item i {
                color: #f59e0b;
                font-size: 1.25rem;
            }
            
            /* Statistics */
            .dev-stats {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .dev-stat-item {
                text-align: center;
                padding: 1.25rem;
                background: linear-gradient(135deg, #667eea08, #764ba208);
                border-radius: 0.75rem;
                border: 2px solid #667eea20;
            }
            
            .dev-stat-number {
                font-size: 2rem;
                font-weight: 800;
                background: linear-gradient(135deg, #667eea, #764ba2);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 0.25rem;
            }
            
            .dev-stat-label {
                font-size: 0.75rem;
                color: #6b7280;
                font-weight: 600;
            }
            
            /* Footer */
            .dev-notice-footer {
                padding: 1.5rem 2rem;
                background: #f9fafb;
                display: flex;
                gap: 1rem;
                border-top: 1px solid #e5e7eb;
            }
            
            .dev-notice-btn {
                flex: 1;
                padding: 1rem 1.5rem;
                border: none;
                border-radius: 0.75rem;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                transition: all 0.3s;
            }
            
            .dev-notice-btn.primary {
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
            }
            
            .dev-notice-btn.primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
            }
            
            .dev-notice-btn.secondary {
                background: white;
                color: #667eea;
                border: 2px solid #667eea;
            }
            
            .dev-notice-btn.secondary:hover {
                background: #667eea;
                color: white;
            }
            
            /* Checkbox */
            .dev-notice-checkbox {
                padding: 1rem 2rem 1.5rem;
                background: #f9fafb;
                border-radius: 0 0 1.5rem 1.5rem;
            }
            
            .dev-notice-checkbox label {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                cursor: pointer;
                font-size: 0.875rem;
                color: #6b7280;
            }
            
            .dev-notice-checkbox input[type="checkbox"] {
                width: 18px;
                height: 18px;
                cursor: pointer;
                accent-color: #667eea;
            }
            
            /* Responsive */
            @media (max-width: 768px) {
                .dev-notice-content {
                    max-height: 95vh;
                    border-radius: 1rem;
                }
                
                .dev-notice-header {
                    padding: 1.5rem;
                    border-radius: 1rem 1rem 0 0;
                }
                
                .dev-notice-logo {
                    width: 60px;
                    height: 60px;
                    font-size: 2rem;
                }
                
                .dev-notice-body {
                    padding: 1.5rem;
                }
                
                .dev-notice-title {
                    font-size: 1.5rem;
                }
                
                .dev-contact-grid {
                    grid-template-columns: 1fr;
                }
                
                .dev-features-grid {
                    grid-template-columns: 1fr;
                }
                
                .dev-stats {
                    grid-template-columns: 1fr;
                }
                
                .dev-notice-footer {
                    flex-direction: column;
                    padding: 1rem 1.5rem;
                }
            }
            
            /* Animation */
            @keyframes fadeInScale {
                from {
                    opacity: 0;
                    transform: scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    function showDeveloperNotice() {
        const modal = document.getElementById('developerNoticeModal');
        if (modal) {
            setTimeout(() => {
                modal.classList.add('show');
            }, 500); // Delay 500ms sau khi trang load
        }
    }
    
    // Thêm các hàm global để xử lý modal
    window.closeDeveloperNotice = function() {
        const modal = document.getElementById('developerNoticeModal');
        const checkbox = document.getElementById('dontShowAgainCheckbox');
        
        if (checkbox && checkbox.checked) {
            markNoticeSeen();
        }
        
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    };
    
    window.contactDeveloper = function() {
        // Mở modal liên hệ hoặc gọi số điện thoại
        if (confirm('Bạn muốn liên hệ với đội ngũ phát triển?\n\n☎️ Hotline: 0354 738 643\n📧 Email: AIYOUNGGURU@gmail.com\n\nNhấn OK để gọi điện thoại')) {
            window.location.href = 'tel:0354738643';
        }
    };
    
    // Khởi chạy khi DOM đã load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (!hasSeenNotice()) {
                createDeveloperNoticeModal();
                showDeveloperNotice();
            }
        });
    } else {
        if (!hasSeenNotice()) {
            createDeveloperNoticeModal();
            showDeveloperNotice();
        }
    }
})();
