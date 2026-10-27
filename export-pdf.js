// ==================== V-MENTOR AI 2026 - PDF EXPORT FEATURE ====================
// Hoàn thiện tính năng xuất PDF cho trang phân tích AI
// Version: 2.0.0 | Confirm modal + Download after print

// ==================== INJECT UI STYLES ====================
(function injectPDFStyles() {
    if (document.getElementById('vmPDFStyles')) return;
    const style = document.createElement('style');
    style.id = 'vmPDFStyles';
    style.textContent = `
    /* ── PDF Confirm Overlay ─────────────────────────────── */
    #vmPDFConfirmOverlay {
        position: fixed; inset: 0;
        background: rgba(0,0,0,0.65);
        backdrop-filter: blur(6px);
        z-index: 9999;
        display: flex; align-items: center; justify-content: center;
        padding: 1rem;
        animation: vmFadeIn .25s ease;
    }
    @keyframes vmFadeIn { from { opacity:0 } to { opacity:1 } }

    #vmPDFConfirmBox {
        background: white;
        border-radius: 1.25rem;
        max-width: 460px; width: 100%;
        overflow: hidden;
        box-shadow: 0 25px 60px rgba(0,0,0,.35);
        animation: vmSlideUp .3s cubic-bezier(.16,1,.3,1);
    }
    @keyframes vmSlideUp {
        from { transform: translateY(40px) scale(.96); opacity:0 }
        to   { transform: translateY(0)    scale(1);   opacity:1 }
    }

    .vm-confirm-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 1.75rem 2rem 1.5rem;
        text-align: center;
        color: white;
    }
    .vm-confirm-header .vm-icon {
        font-size: 3rem; margin-bottom: .5rem; display: block;
        animation: vmBounce 1.2s ease infinite;
    }
    @keyframes vmBounce {
        0%,100% { transform: translateY(0) }
        50%      { transform: translateY(-6px) }
    }
    .vm-confirm-header h3 {
        margin: 0; font-size: 1.3rem; font-weight: 700;
    }
    .vm-confirm-header p {
        margin: .4rem 0 0; opacity: .88; font-size: .875rem;
    }

    .vm-confirm-body { padding: 1.5rem 2rem; }

    .vm-confirm-checklist {
        list-style: none; padding: 0; margin: 0 0 1.25rem;
        display: grid; gap: .6rem;
    }
    .vm-confirm-checklist li {
        display: flex; align-items: center; gap: .75rem;
        padding: .7rem 1rem;
        background: linear-gradient(135deg, #f0f9ff, #fef3c7);
        border-radius: .6rem;
        font-size: .875rem; font-weight: 500; color: #374151;
        border-left: 3px solid #667eea;
    }
    .vm-confirm-checklist li .ck-icon { font-size: 1.1rem; flex-shrink:0; }

    .vm-confirm-note {
        font-size: .8rem; color: #6b7280; text-align: center;
        padding: .75rem; background: #f9fafb; border-radius: .5rem;
        border: 1px solid #e5e7eb; margin-bottom: 1.25rem;
    }

    .vm-confirm-actions {
        display: flex; gap: .75rem;
    }
    .vm-btn {
        flex: 1; padding: .85rem; border: none; border-radius: .75rem;
        font-weight: 700; font-size: .9375rem; cursor: pointer;
        transition: all .25s; display: flex; align-items: center;
        justify-content: center; gap: .5rem;
    }
    .vm-btn-cancel {
        background: #f3f4f6; color: #6b7280;
        border: 2px solid #e5e7eb;
    }
    .vm-btn-cancel:hover { background: #e5e7eb; color: #374151; }
    .vm-btn-confirm {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        box-shadow: 0 4px 14px rgba(102,126,234,.35);
    }
    .vm-btn-confirm:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 22px rgba(102,126,234,.45);
    }
    .vm-btn-confirm:active { transform: translateY(0); }

    /* ── PDF Download Toast ──────────────────────────────── */
    #vmPDFToast {
        position: fixed;
        bottom: 2rem; right: 2rem;
        z-index: 9998;
        max-width: 360px; width: calc(100vw - 3rem);
        animation: vmSlideInRight .4s cubic-bezier(.16,1,.3,1);
    }
    @keyframes vmSlideInRight {
        from { transform: translateX(400px); opacity:0 }
        to   { transform: translateX(0);     opacity:1 }
    }
    #vmPDFToast.vm-toast-out {
        animation: vmSlideOutRight .35s ease forwards;
    }
    @keyframes vmSlideOutRight {
        to { transform: translateX(440px); opacity:0 }
    }

    .vm-toast-card {
        background: white;
        border-radius: 1rem;
        box-shadow: 0 20px 50px rgba(0,0,0,.18);
        overflow: hidden;
        border: 1px solid #e5e7eb;
    }
    .vm-toast-bar {
        height: 4px;
        background: linear-gradient(90deg, #667eea, #764ba2, #10b981);
        background-size: 200% 100%;
        animation: vmBarSlide 2s linear infinite;
    }
    @keyframes vmBarSlide {
        0%   { background-position: 200% 0 }
        100% { background-position: -200% 0 }
    }
    .vm-toast-inner { padding: 1.25rem 1.25rem 1rem; }
    .vm-toast-top {
        display: flex; align-items: flex-start;
        justify-content: space-between; gap: .5rem;
        margin-bottom: .85rem;
    }
    .vm-toast-left { display: flex; gap: .85rem; align-items: center; }
    .vm-toast-icon {
        width: 42px; height: 42px; border-radius: 50%;
        background: linear-gradient(135deg, #10b981, #3cba92);
        color: white; display: flex; align-items: center;
        justify-content: center; font-size: 1.2rem; flex-shrink: 0;
    }
    .vm-toast-title {
        font-weight: 700; color: #1f2937; font-size: .9375rem;
    }
    .vm-toast-sub {
        font-size: .8rem; color: #6b7280; margin-top: .15rem;
    }
    .vm-toast-close {
        background: none; border: none; cursor: pointer;
        color: #9ca3af; font-size: 1rem; padding: .2rem;
        border-radius: .25rem; flex-shrink: 0;
        transition: color .2s;
    }
    .vm-toast-close:hover { color: #374151; }

    .vm-toast-actions { display: flex; gap: .6rem; }
    .vm-toast-btn {
        flex: 1; padding: .6rem .75rem; border: none; border-radius: .6rem;
        font-weight: 600; font-size: .8125rem; cursor: pointer;
        transition: all .2s; display: flex; align-items: center;
        justify-content: center; gap: .4rem; text-decoration: none;
    }
    .vm-toast-btn-dl {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        box-shadow: 0 3px 10px rgba(102,126,234,.3);
    }
    .vm-toast-btn-dl:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(102,126,234,.4);
    }
    .vm-toast-btn-reprint {
        background: #f3f4f6; color: #374151;
        border: 1.5px solid #e5e7eb;
    }
    .vm-toast-btn-reprint:hover { background: #e5e7eb; }
    `;
    document.head.appendChild(style);
})();

// ==================== CONFIRM MODAL ====================
function showPDFConfirmModal(careerName, matchScore, onConfirm) {
    // Xoá modal cũ nếu còn
    const old = document.getElementById('vmPDFConfirmOverlay');
    if (old) old.remove();

    const overlay = document.createElement('div');
    overlay.id = 'vmPDFConfirmOverlay';
    overlay.innerHTML = `
        <div id="vmPDFConfirmBox">
            <div class="vm-confirm-header">
                <span class="vm-icon">📄</span>
                <h3>Xuất báo cáo PDF</h3>
                <p>${careerName} — ${matchScore}% phù hợp</p>
            </div>
            <div class="vm-confirm-body">
                <ul class="vm-confirm-checklist">
                    <li><span class="ck-icon">👤</span> Hồ sơ &amp; điểm Holland của bạn</li>
                    <li><span class="ck-icon">📊</span> Phân tích ngành: lương, trường, lộ trình</li>
                    <li><span class="ck-icon">🤖</span> Đánh giá nguy cơ bị AI thay thế</li>
                    <li><span class="ck-icon">🎯</span> Top nghề phù hợp &amp; khuyến nghị</li>
                </ul>
                <div class="vm-confirm-note">
                    💡 Sau khi xem trước, chọn <strong>Lưu dưới dạng PDF</strong><br>
                    hoặc dùng nút <strong>Tải về</strong> để lưu file ngay
                </div>
                <div class="vm-confirm-actions">
                    <button class="vm-btn vm-btn-cancel" id="vmCancelBtn">
                        ✕ Huỷ
                    </button>
                    <button class="vm-btn vm-btn-confirm" id="vmConfirmBtn">
                        <span>📥</span> Tạo PDF ngay
                    </button>
                </div>
            </div>
        </div>`;

    document.body.appendChild(overlay);

    // Đóng khi click nền
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closePDFConfirmModal();
    });

    document.getElementById('vmCancelBtn').addEventListener('click', closePDFConfirmModal);

    document.getElementById('vmConfirmBtn').addEventListener('click', () => {
        closePDFConfirmModal();
        onConfirm();
    });
}

function closePDFConfirmModal() {
    const el = document.getElementById('vmPDFConfirmOverlay');
    if (el) { el.style.animation = 'vmFadeIn .2s ease reverse'; setTimeout(() => el.remove(), 200); }
}

// ==================== DOWNLOAD TOAST ====================
function showPDFDownloadToast(blobUrl, fileName) {
    const old = document.getElementById('vmPDFToast');
    if (old) { old.remove(); }

    const toast = document.createElement('div');
    toast.id = 'vmPDFToast';
    toast.innerHTML = `
        <div class="vm-toast-card">
            <div class="vm-toast-bar"></div>
            <div class="vm-toast-inner">
                <div class="vm-toast-top">
                    <div class="vm-toast-left">
                        <div class="vm-toast-icon">✅</div>
                        <div>
                            <div class="vm-toast-title">PDF đã sẵn sàng!</div>
                            <div class="vm-toast-sub">Nhấn tải về để lưu file</div>
                        </div>
                    </div>
                    <button class="vm-toast-close" id="vmToastClose">✕</button>
                </div>
                <div class="vm-toast-actions">
                    <a class="vm-toast-btn vm-toast-btn-dl"
                       href="${blobUrl}"
                       download="${fileName}">
                        ⬇️ Tải về PDF
                    </a>
                    <button class="vm-toast-btn vm-toast-btn-reprint" id="vmReprintBtn">
                        🖨️ In lại
                    </button>
                </div>
            </div>
        </div>`;

    document.body.appendChild(toast);

    document.getElementById('vmToastClose').addEventListener('click', () => dismissToast(toast));
    document.getElementById('vmReprintBtn').addEventListener('click', () => {
        window.open(blobUrl, '_blank');
    });

    // Tự ẩn sau 30 giây
    setTimeout(() => dismissToast(toast), 30000);
}

function dismissToast(toast) {
    if (!toast || !toast.parentNode) return;
    toast.classList.add('vm-toast-out');
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 380);
}

// ==================== MAIN EXPORT FUNCTION ====================

/**
 * exportPDF() — Hiển thị confirm modal rồi tạo PDF
 */
function exportPDF() {
    // ── 1. Lấy dữ liệu cơ bản ──────────────────────────────────────────────
    if (!selectedCareer || !careersDatabase) {
        alert('⚠️ Vui lòng hoàn thành bài test và chọn ngành nghề trước khi xuất PDF!');
        return;
    }

    const career  = careersDatabase[selectedCareer];
    if (!career) {
        alert('⚠️ Không tìm thấy dữ liệu ngành nghề!');
        return;
    }

    const matches = (typeof calculateMatches === 'function') ? calculateMatches() : [];
    const match   = matches.find(m => m.id === selectedCareer) || { score: 0 };

    // ── 2. Lấy dữ liệu AI Impact ────────────────────────────────────────────
    const aiData = (typeof getAIImpactData === 'function')
        ? getAIImpactData(selectedCareer)
        : (typeof AI_IMPACT_DATABASE !== 'undefined')
            ? (AI_IMPACT_DATABASE[selectedCareer] || AI_IMPACT_DATABASE['default'])
            : null;

    // ── 3. Thông tin người dùng ──────────────────────────────────────────────
    const hollandCode     = (typeof userData !== 'undefined' && userData.hollandCode) ? userData.hollandCode : '—';
    const hollandScores   = (typeof userData !== 'undefined' && userData.hollandScores) ? userData.hollandScores : {};
    const subjectList     = (typeof userData !== 'undefined' && userData.subjects) ? userData.subjects : [];
    const eduSystem       = (typeof educationType !== 'undefined' && educationType) ? educationType : 'thpt';
    const vocationalJob   = (typeof currentVocationalJob !== 'undefined' && currentVocationalJob) ? currentVocationalJob : '';

    const eduLabels = {
        thpt   : 'Hệ THPT (12)',
        thcs   : 'Hệ THCS (9+)',
        tcn    : 'Hệ Trung cấp nghề',
        tccn   : 'Trung cấp chuyên nghiệp'
    };

    const subjectLabels = {
        math        : 'Toán',       literature : 'Ngữ Văn',
        english     : 'Tiếng Anh',  physics    : 'Vật Lý',
        chemistry   : 'Hóa Học',    biology    : 'Sinh Học',
        history     : 'Lịch Sử',    geography  : 'Địa Lý',
        civics      : 'GDCD',        informatics: 'Tin Học'
    };

    const hollandLabels = {
        R: 'Thực tế (R)', I: 'Nghiên cứu (I)', A: 'Nghệ thuật (A)',
        S: 'Xã hội (S)',  E: 'Kinh doanh (E)', C: 'Quy củ (C)'
    };

    // Xác định lộ trình theo hệ đào tạo
    const roadmapKey  = career.roadmap ? (career.roadmap[eduSystem] ? eduSystem : 'thpt') : null;
    const roadmapList = roadmapKey ? career.roadmap[roadmapKey] : [];

    // Top-5 nghề phù hợp nhất (ngoài nghề đã chọn)
    const topCareers = matches
        .filter(m => m.id !== selectedCareer)
        .slice(0, 5)
        .map(m => ({
            name  : careersDatabase[m.id] ? careersDatabase[m.id].name  : m.id,
            icon  : careersDatabase[m.id] ? careersDatabase[m.id].icon  : '🎯',
            score : m.score
        }));

    // Ngày tạo
    const now   = new Date();
    const dateStr = now.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

    // ── 4. Helper functions ──────────────────────────────────────────────────
    const riskColor = (level) => ({
        low: '#10b981', medium: '#f59e0b', high: '#ef4444'
    }[level] || '#6366f1');

    const riskBg = (level) => ({
        low: '#ecfdf5', medium: '#fffbeb', high: '#fef2f2'
    }[level] || '#f0f9ff');

    const riskText = (level) => ({
        low: 'Nguy cơ thấp', medium: 'Nguy cơ trung bình', high: 'Nguy cơ cao'
    }[level] || 'Chưa xác định');

    const getRiskClass = (pct) => pct >= 70 ? '#ef4444' : pct >= 40 ? '#f59e0b' : '#10b981';

    // ── 5. Build HTML ────────────────────────────────────────────────────────
    const html = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Báo cáo phân tích nghề nghiệp – ${career.name} | V-MENTOR AI 2026</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        /* ===== RESET & BASE ===== */
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-size: 11pt;
            line-height: 1.65;
            color: #1f2937;
            background: #fff;
        }

        /* ===== PAGE LAYOUT ===== */
        .page-wrapper {
            max-width: 820px;
            margin: 0 auto;
            padding: 0;
        }

        /* ===== COVER ===== */
        .cover {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 48px 40px 40px;
            position: relative;
            overflow: hidden;
        }

        .cover::before {
            content: '';
            position: absolute;
            top: -120px; right: -120px;
            width: 300px; height: 300px;
            border-radius: 50%;
            background: rgba(255,255,255,0.07);
        }

        .cover::after {
            content: '';
            position: absolute;
            bottom: -80px; left: -80px;
            width: 220px; height: 220px;
            border-radius: 50%;
            background: rgba(255,255,255,0.05);
        }

        .cover-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255,255,255,0.18);
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 20px;
            padding: 5px 14px;
            font-size: 9pt;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-bottom: 20px;
        }

        .cover-title {
            font-size: 13pt;
            font-weight: 500;
            opacity: 0.9;
            margin-bottom: 6px;
        }

        .cover-career-name {
            font-size: 28pt;
            font-weight: 800;
            line-height: 1.15;
            margin-bottom: 10px;
        }

        .cover-meta {
            opacity: 0.85;
            font-size: 10pt;
            margin-top: 6px;
        }

        .cover-score-pill {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-top: 22px;
            background: rgba(255,255,255,0.15);
            border: 2px solid rgba(255,255,255,0.35);
            border-radius: 50px;
            padding: 10px 24px;
            font-size: 20pt;
            font-weight: 800;
        }

        .cover-score-label {
            font-size: 10pt;
            font-weight: 500;
            opacity: 0.9;
        }

        .cover-timestamp {
            position: absolute;
            top: 20px; right: 40px;
            text-align: right;
            font-size: 8.5pt;
            opacity: 0.75;
            line-height: 1.5;
        }

        /* ===== SECTION WRAPPERS ===== */
        .section {
            padding: 28px 40px;
            border-bottom: 1px solid #e5e7eb;
        }

        .section:last-child { border-bottom: none; }

        .section-title {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 13pt;
            font-weight: 700;
            color: #667eea;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e0e7ff;
        }

        .section-title .icon { font-size: 15pt; }

        /* ===== PROFILE GRID ===== */
        .profile-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .profile-item {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-left: 3px solid #667eea;
            border-radius: 8px;
            padding: 12px 14px;
        }

        .profile-label {
            font-size: 8pt;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #6b7280;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .profile-value {
            font-weight: 700;
            color: #1f2937;
            font-size: 11pt;
        }

        .profile-value.accent { color: #667eea; }

        /* ===== HOLLAND SCORES ===== */
        .holland-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-top: 12px;
        }

        .holland-item {
            background: #f0f9ff;
            border: 1px solid #dbeafe;
            border-radius: 8px;
            padding: 10px 12px;
            text-align: center;
        }

        .holland-code-label {
            font-size: 18pt;
            font-weight: 800;
            color: #667eea;
        }

        .holland-code-name {
            font-size: 8pt;
            color: #6b7280;
            font-weight: 500;
        }

        .holland-bar-wrap {
            height: 6px;
            background: #e5e7eb;
            border-radius: 3px;
            margin-top: 6px;
            overflow: hidden;
        }

        .holland-bar-fill {
            height: 100%;
            border-radius: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
        }

        /* ===== TAGS ===== */
        .tags-wrap {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 4px 12px;
            background: #ede9fe;
            border: 1px solid #c4b5fd;
            border-radius: 20px;
            font-size: 9pt;
            font-weight: 600;
            color: #5b21b6;
        }

        .tag.green {
            background: #ecfdf5;
            border-color: #6ee7b7;
            color: #065f46;
        }

        /* ===== INFO CARDS (salary, growth) ===== */
        .info-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 16px;
        }

        .info-card {
            background: linear-gradient(135deg, #f0f9ff, #fef3c7);
            border: 1px solid #dbeafe;
            border-radius: 10px;
            padding: 14px;
            text-align: center;
        }

        .info-card-icon { font-size: 18pt; margin-bottom: 5px; }

        .info-card-label {
            font-size: 8pt;
            text-transform: uppercase;
            color: #6b7280;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .info-card-value {
            font-size: 10pt;
            font-weight: 700;
            color: #667eea;
        }

        /* ===== UNIVERSITY TABLE ===== */
        .uni-table { width: 100%; border-collapse: collapse; font-size: 9.5pt; }

        .uni-table th {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 9px 12px;
            text-align: left;
            font-weight: 600;
        }

        .uni-table td {
            padding: 9px 12px;
            border-bottom: 1px solid #f3f4f6;
            vertical-align: top;
        }

        .uni-table tr:nth-child(even) td { background: #f9fafb; }

        .uni-table tr:hover td { background: #f0f9ff; }

        /* ===== ROADMAP ===== */
        .roadmap-list { display: grid; gap: 8px; }

        .roadmap-step {
            display: flex;
            gap: 12px;
            padding: 10px 14px;
            background: #f9fafb;
            border-left: 3px solid #667eea;
            border-radius: 6px;
            font-size: 9.5pt;
            line-height: 1.55;
        }

        .roadmap-step-num {
            flex-shrink: 0;
            width: 22px; height: 22px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8pt;
            font-weight: 700;
        }

        /* ===== CHALLENGES / SUCCESS ===== */
        .list-cards { display: grid; gap: 8px; }

        .list-card {
            display: flex;
            gap: 11px;
            padding: 10px 14px;
            border-radius: 7px;
            font-size: 9.5pt;
            line-height: 1.55;
        }

        .list-card.danger {
            background: #fef2f2;
            border-left: 3px solid #ef4444;
        }

        .list-card.success {
            background: #fffbeb;
            border-left: 3px solid #f59e0b;
        }

        .list-card-icon { flex-shrink: 0; font-size: 12pt; margin-top: 1px; }

        /* ===== TOP CAREERS MINI ===== */
        .top-careers-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;
        }

        .top-career-card {
            text-align: center;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 10px 8px;
        }

        .top-career-icon { font-size: 18pt; }

        .top-career-name {
            font-size: 8pt;
            font-weight: 600;
            color: #374151;
            margin-top: 5px;
            line-height: 1.3;
        }

        .top-career-score {
            font-size: 10pt;
            font-weight: 800;
            color: #667eea;
            margin-top: 4px;
        }

        /* ===== AI IMPACT SECTION ===== */
        .ai-section {
            background: linear-gradient(135deg, #fef3c7 0%, #fde8f7 100%);
            border: 2px solid #fde68a;
            border-radius: 12px;
            padding: 20px 22px;
            margin-bottom: 16px;
        }

        .ai-section-title {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 12pt;
            font-weight: 700;
            color: #92400e;
            margin-bottom: 16px;
            padding-bottom: 10px;
            border-bottom: 2px solid #fde68a;
        }

        .ai-score-row {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 16px;
        }

        .ai-score-circle {
            flex-shrink: 0;
            width: 88px; height: 88px;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            box-shadow: 0 4px 14px rgba(0,0,0,0.18);
        }

        .ai-score-pct {
            font-size: 22pt;
            font-weight: 800;
            line-height: 1;
        }

        .ai-score-lbl {
            font-size: 7.5pt;
            font-weight: 600;
            opacity: 0.9;
            margin-top: 2px;
            text-transform: uppercase;
        }

        .ai-score-info { flex: 1; }

        .ai-risk-title {
            font-size: 13pt;
            font-weight: 700;
            margin-bottom: 5px;
        }

        .ai-risk-desc {
            font-size: 9.5pt;
            color: #6b7280;
            line-height: 1.55;
        }

        /* AI indicators */
        .ai-indicators {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-bottom: 16px;
        }

        .ai-indicator {
            text-align: center;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 10px;
        }

        .ai-indicator-icon { font-size: 15pt; }

        .ai-indicator-label {
            font-size: 7.5pt;
            text-transform: uppercase;
            color: #6b7280;
            font-weight: 600;
            margin: 4px 0 2px;
        }

        .ai-indicator-value {
            font-size: 13pt;
            font-weight: 800;
        }

        /* Bar */
        .progress-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .progress-row-label { font-size: 9pt; font-weight: 600; color: #374151; min-width: 150px; }

        .progress-track {
            flex: 1;
            height: 9px;
            background: #e5e7eb;
            border-radius: 5px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            border-radius: 5px;
        }

        .progress-row-value { font-size: 9pt; font-weight: 700; min-width: 36px; text-align: right; }

        /* Survival tips */
        .tips-grid { display: grid; gap: 8px; }

        .tip-card {
            display: flex;
            gap: 12px;
            padding: 10px 14px;
            background: white;
            border-radius: 8px;
            border-left: 3px solid #667eea;
            font-size: 9.5pt;
        }

        .tip-icon { flex-shrink: 0; font-size: 14pt; }

        .tip-title { font-weight: 700; color: #1f2937; margin-bottom: 2px; }

        .tip-desc { color: #6b7280; line-height: 1.5; }

        /* Skills grid */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
        }

        .skill-chip {
            display: flex;
            align-items: center;
            gap: 7px;
            padding: 8px 11px;
            background: white;
            border-left: 3px solid #667eea;
            border-radius: 6px;
            font-size: 9pt;
            font-weight: 600;
            color: #374151;
        }

        .skill-chip-dot {
            width: 7px; height: 7px;
            border-radius: 50%;
            background: #667eea;
            flex-shrink: 0;
        }

        /* Timeline */
        .timeline { display: grid; gap: 9px; }

        .timeline-item {
            display: flex;
            gap: 13px;
            padding: 10px 14px;
            background: white;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
        }

        .timeline-year {
            flex-shrink: 0;
            width: 52px; height: 52px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 9pt;
            font-weight: 700;
        }

        .timeline-content { flex: 1; }

        .timeline-title { font-weight: 700; color: #1f2937; font-size: 10pt; margin-bottom: 2px; }

        .timeline-desc { font-size: 9pt; color: #6b7280; line-height: 1.5; }

        /* ===== FOOTER ===== */
        .pdf-footer {
            background: #111827;
            color: #d1d5db;
            padding: 16px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 8.5pt;
        }

        .pdf-footer strong { color: white; }

        /* ===== DIVIDERS ===== */
        .divider {
            height: 1px;
            background: #e5e7eb;
            margin: 8px 0;
        }

        /* ===== RECOMMENDATION LIST ===== */
        .rec-list { padding-left: 18px; }

        .rec-list li {
            margin-bottom: 7px;
            font-size: 9.5pt;
            color: #374151;
            line-height: 1.55;
        }

        /* ===== PRINT STYLES ===== */
        @media print {
            body { font-size: 10pt; }

            .page-wrapper { max-width: 100%; }

            .cover {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            .ai-section,
            .info-card,
            .holland-item,
            .tip-card,
            .skill-chip,
            .roadmap-step,
            .list-card,
            .timeline-item,
            .top-career-card {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            .section { page-break-inside: avoid; }

            .ai-section-block { page-break-inside: avoid; }

            /* Đảm bảo không break giữa section title và nội dung */
            .section-title + * { page-break-before: avoid; }
        }
    </style>
</head>
<body>
<div class="page-wrapper">

    <!-- ================================================================ -->
    <!-- COVER                                                            -->
    <!-- ================================================================ -->
    <div class="cover">
        <div class="cover-timestamp">
            <div>Ngày xuất: ${dateStr}</div>
            <div>Giờ: ${timeStr}</div>
            <div>V-MENTOR AI 2026</div>
        </div>

        <div class="cover-badge">🎓 BÁO CÁO PHÂN TÍCH NGHỀ NGHIỆP</div>
        <div class="cover-title">Ngành nghề được phân tích</div>
        <div class="cover-career-name">${career.icon || '🎯'} ${career.name}</div>
        <div class="cover-meta">
            Mã Holland: <strong>${career.hollandCode}</strong>
            &nbsp;•&nbsp;
            Lĩnh vực: <strong>${career.category || '—'}</strong>
            ${vocationalJob ? `&nbsp;•&nbsp;Nghề đang học: <strong>${vocationalJob}</strong>` : ''}
        </div>

        <div class="cover-score-pill">
            <span>${match.score}%</span>
            <span class="cover-score-label">Mức độ phù hợp với bạn</span>
        </div>
    </div>

    <!-- ================================================================ -->
    <!-- 1. HỒ SƠ NGƯỜI DÙNG                                             -->
    <!-- ================================================================ -->
    <div class="section">
        <div class="section-title">
            <span class="icon">👤</span> Hồ sơ của bạn
        </div>

        <div class="profile-grid">
            <div class="profile-item">
                <div class="profile-label">Mã Holland của bạn</div>
                <div class="profile-value accent">${hollandCode}</div>
            </div>
            <div class="profile-item">
                <div class="profile-label">Hệ đào tạo</div>
                <div class="profile-value">${eduLabels[eduSystem] || eduSystem}</div>
            </div>
            <div class="profile-item">
                <div class="profile-label">Môn học tự tin</div>
                <div class="profile-value">
                    ${subjectList.length > 0
                        ? subjectList.map(s => subjectLabels[s] || s).join(', ')
                        : '—'}
                </div>
            </div>
            <div class="profile-item">
                <div class="profile-label">Mức độ phù hợp</div>
                <div class="profile-value accent">${match.score}%</div>
            </div>
        </div>

        ${Object.keys(hollandScores).length > 0 ? `
        <div style="margin-top: 14px;">
            <div style="font-size: 9pt; font-weight: 600; color: #374151; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.4px;">Điểm Holland chi tiết</div>
            <div class="holland-grid">
                ${Object.entries(hollandScores).map(([code, score]) => {
                    const maxScore = 50;
                    const pct = Math.min(Math.round((score / maxScore) * 100), 100);
                    return `
                    <div class="holland-item">
                        <div class="holland-code-label">${code}</div>
                        <div class="holland-code-name">${hollandLabels[code] || code}</div>
                        <div class="holland-bar-wrap">
                            <div class="holland-bar-fill" style="width: ${pct}%;"></div>
                        </div>
                        <div style="font-size: 8pt; color: #667eea; font-weight: 600; margin-top: 3px;">${score} điểm</div>
                    </div>`;
                }).join('')}
            </div>
        </div>
        ` : ''}
    </div>

    <!-- ================================================================ -->
    <!-- 2. TỔNG QUAN NGÀNH                                              -->
    <!-- ================================================================ -->
    <div class="section">
        <div class="section-title">
            <span class="icon">📋</span> Tổng quan ngành nghề
        </div>

        ${career.description ? `
            <p style="color: #374151; font-size: 10pt; line-height: 1.65; margin-bottom: 14px;">${career.description}</p>
        ` : ''}

        <div class="info-cards">
            <div class="info-card">
                <div class="info-card-icon">📈</div>
                <div class="info-card-label">Triển vọng</div>
                <div class="info-card-value">${career.growth || 'Tốt'}</div>
            </div>
            <div class="info-card">
                <div class="info-card-icon">💼</div>
                <div class="info-card-label">Nhu cầu việc làm</div>
                <div class="info-card-value">${career.jobDemand || 'Cao'}</div>
            </div>
            <div class="info-card">
                <div class="info-card-icon">🔖</div>
                <div class="info-card-label">Mã Holland nghề</div>
                <div class="info-card-value">${career.hollandCode}</div>
            </div>
        </div>

        ${career.positions && career.positions.length > 0 ? `
        <div style="margin-top: 6px;">
            <div style="font-size: 9pt; font-weight: 600; color: #374151; margin-bottom: 8px; text-transform: uppercase;">Vị trí công việc</div>
            <div class="tags-wrap">
                ${career.positions.slice(0, 8).map(p => `<span class="tag green">✔ ${p}</span>`).join('')}
            </div>
        </div>
        ` : ''}
    </div>

    <!-- ================================================================ -->
    <!-- 3. MỨC LƯƠNG                                                    -->
    <!-- ================================================================ -->
    <div class="section">
        <div class="section-title">
            <span class="icon">💰</span> Mức lương theo cấp bậc
        </div>

        <div class="info-cards">
            <div class="info-card" style="background: linear-gradient(135deg, #ecfdf5, #d1fae5);">
                <div class="info-card-icon">🌱</div>
                <div class="info-card-label">Fresher / Entry</div>
                <div class="info-card-value" style="color: #10b981;">${career.salary ? career.salary.entry : '—'}</div>
            </div>
            <div class="info-card" style="background: linear-gradient(135deg, #dbeafe, #bfdbfe);">
                <div class="info-card-icon">⚡</div>
                <div class="info-card-label">Mid-level</div>
                <div class="info-card-value" style="color: #2563eb;">${career.salary ? career.salary.mid : '—'}</div>
            </div>
            <div class="info-card" style="background: linear-gradient(135deg, #fef3c7, #fde68a);">
                <div class="info-card-icon">🏆</div>
                <div class="info-card-label">Senior</div>
                <div class="info-card-value" style="color: #d97706;">${career.salary ? career.salary.senior : '—'}</div>
            </div>
        </div>
    </div>

    <!-- ================================================================ -->
    <!-- 4. TRƯỜNG ĐÀO TẠO                                              -->
    <!-- ================================================================ -->
    <div class="section">
        <div class="section-title">
            <span class="icon">🏫</span> Trường đào tạo tiêu biểu
        </div>

        ${career.universities && career.universities.length > 0 ? `
        <table class="uni-table">
            <thead>
                <tr>
                    <th>Tên trường</th>
                    <th>Điểm chuẩn</th>
                    <th>Tổ hợp môn</th>
                </tr>
            </thead>
            <tbody>
                ${career.universities.map(u => `
                    <tr>
                        <td style="font-weight: 600;">${u.name}</td>
                        <td style="color: #667eea; font-weight: 700;">${u.score}</td>
                        <td>${u.combo}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        ` : '<p style="color: #9ca3af; font-size: 9.5pt;">Chưa có dữ liệu trường đào tạo.</p>'}
    </div>

    <!-- ================================================================ -->
    <!-- 5. LỘ TRÌNH HỌC TẬP                                            -->
    <!-- ================================================================ -->
    ${roadmapList.length > 0 ? `
    <div class="section">
        <div class="section-title">
            <span class="icon">🗺️</span> Lộ trình học tập (Hệ ${eduLabels[eduSystem] || eduSystem})
        </div>
        <div class="roadmap-list">
            ${roadmapList.map((step, i) => `
                <div class="roadmap-step">
                    <div class="roadmap-step-num">${i + 1}</div>
                    <div>${step}</div>
                </div>
            `).join('')}
        </div>
    </div>
    ` : ''}

    <!-- ================================================================ -->
    <!-- 6. THỬ THÁCH & THÀNH CÔNG                                       -->
    <!-- ================================================================ -->
    ${(career.challenges && career.challenges.length > 0) || (career.successStories && career.successStories.length > 0) ? `
    <div class="section">
        ${career.challenges && career.challenges.length > 0 ? `
        <div class="section-title" style="color: #b91c1c; border-color: #fecaca;">
            <span class="icon">⚠️</span> Thử thách của ngành
        </div>
        <div class="list-cards" style="margin-bottom: 16px;">
            ${career.challenges.map(c => `
                <div class="list-card danger">
                    <span class="list-card-icon">❌</span>
                    <span>${c}</span>
                </div>
            `).join('')}
        </div>
        ` : ''}

        ${career.successStories && career.successStories.length > 0 ? `
        <div class="section-title" style="color: #b45309; border-color: #fde68a;">
            <span class="icon">🏆</span> Câu chuyện thành công
        </div>
        <div class="list-cards">
            ${career.successStories.map(s => `
                <div class="list-card success">
                    <span class="list-card-icon">🥇</span>
                    <span>${s}</span>
                </div>
            `).join('')}
        </div>
        ` : ''}
    </div>
    ` : ''}

    <!-- ================================================================ -->
    <!-- 7. KHUYẾN NGHỊ                                                  -->
    <!-- ================================================================ -->
    ${career.recommendations && career.recommendations.length > 0 ? `
    <div class="section">
        <div class="section-title">
            <span class="icon">💡</span> Khuyến nghị từ V-MENTOR AI
        </div>
        <ul class="rec-list">
            ${career.recommendations.map(r => `<li>${r}</li>`).join('')}
        </ul>
    </div>
    ` : ''}

    <!-- ================================================================ -->
    <!-- 8. TOP NGHỀ PHÙ HỢP KHÁC                                       -->
    <!-- ================================================================ -->
    ${topCareers.length > 0 ? `
    <div class="section">
        <div class="section-title">
            <span class="icon">🎯</span> Top nghề phù hợp khác
        </div>
        <div class="top-careers-grid">
            ${topCareers.map(tc => `
                <div class="top-career-card">
                    <div class="top-career-icon">${tc.icon}</div>
                    <div class="top-career-name">${tc.name}</div>
                    <div class="top-career-score">${tc.score}%</div>
                </div>
            `).join('')}
        </div>
    </div>
    ` : ''}

    <!-- ================================================================ -->
    <!-- 9. ĐÁNH GIÁ AI IMPACT                                          -->
    <!-- ================================================================ -->
    ${aiData ? `
    <div class="section">
        <div class="section-title">
            <span class="icon">🤖</span> Đánh giá nguy cơ bị AI thay thế
        </div>

        <div class="ai-section ai-section-block">
            <div class="ai-section-title">
                🤖 Phân tích tác động AI đến năm 2030
            </div>

            <!-- Score circle + info -->
            <div class="ai-score-row">
                <div class="ai-score-circle" style="background: linear-gradient(135deg, ${riskColor(aiData.riskLevel)}, ${riskColor(aiData.riskLevel)}cc);">
                    <div class="ai-score-pct">${aiData.impactScore}%</div>
                    <div class="ai-score-lbl">Nguy cơ</div>
                </div>
                <div class="ai-score-info">
                    <div class="ai-risk-title" style="color: ${riskColor(aiData.riskLevel)};">
                        ${aiData.riskLevel === 'low' ? '✅' : aiData.riskLevel === 'medium' ? '⚠️' : '🚨'}
                        ${riskText(aiData.riskLevel)}
                    </div>
                    <div class="ai-risk-desc">${aiData.description}</div>
                </div>
            </div>

            <!-- Progress bars -->
            <div style="background: white; border-radius: 8px; padding: 12px 14px; margin-bottom: 12px;">
                <div class="progress-row">
                    <div class="progress-row-label">🤖 Mức độ tự động hóa</div>
                    <div class="progress-track">
                        <div class="progress-fill" style="width: ${aiData.automation}%; background: ${getRiskClass(aiData.automation)};"></div>
                    </div>
                    <div class="progress-row-value" style="color: ${getRiskClass(aiData.automation)};">${aiData.automation}%</div>
                </div>
                <div class="progress-row">
                    <div class="progress-row-label">🎨 Yêu cầu sáng tạo</div>
                    <div class="progress-track">
                        <div class="progress-fill" style="width: ${aiData.creativity}%; background: ${getRiskClass(100 - aiData.creativity)};"></div>
                    </div>
                    <div class="progress-row-value" style="color: ${getRiskClass(100 - aiData.creativity)};">${aiData.creativity}%</div>
                </div>
                <div class="progress-row" style="margin-bottom: 0;">
                    <div class="progress-row-label">❤️ Yếu tố con người</div>
                    <div class="progress-track">
                        <div class="progress-fill" style="width: ${aiData.humanTouch}%; background: ${getRiskClass(100 - aiData.humanTouch)};"></div>
                    </div>
                    <div class="progress-row-value" style="color: ${getRiskClass(100 - aiData.humanTouch)};">${aiData.humanTouch}%</div>
                </div>
            </div>

            <!-- Survival tips -->
            <div style="font-size: 10pt; font-weight: 700; color: #667eea; margin-bottom: 8px;">
                💡 Làm sao để không bị AI thay thế?
            </div>
            <div class="tips-grid" style="margin-bottom: 14px;">
                ${aiData.survivalTips.map(tip => `
                    <div class="tip-card">
                        <span class="tip-icon">${tip.icon}</span>
                        <div>
                            <div class="tip-title">${tip.title}</div>
                            <div class="tip-desc">${tip.description}</div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Skills to develop -->
            <div style="font-size: 10pt; font-weight: 700; color: #1e40af; margin-bottom: 8px;">
                🚀 Kỹ năng cần phát triển
            </div>
            <div class="skills-grid" style="margin-bottom: 14px;">
                ${aiData.skillsToDevelop.map(skill => `
                    <div class="skill-chip">
                        <div class="skill-chip-dot"></div>
                        ${skill}
                    </div>
                `).join('')}
            </div>

            <!-- Future outlook timeline -->
            <div style="font-size: 10pt; font-weight: 700; color: #374151; margin-bottom: 8px;">
                📈 Triển vọng tương lai
            </div>
            <div class="timeline">
                ${aiData.futureOutlook.map(item => `
                    <div class="timeline-item">
                        <div class="timeline-year">${item.year}</div>
                        <div class="timeline-content">
                            <div class="timeline-title">${item.title}</div>
                            <div class="timeline-desc">${item.description}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
    ` : ''}

    <!-- ================================================================ -->
    <!-- FOOTER                                                          -->
    <!-- ================================================================ -->
    <div class="pdf-footer">
        <div>
            <strong>V-MENTOR AI 2026</strong> – Hệ thống định hướng nghề nghiệp thông minh<br>
            Báo cáo được tạo tự động dựa trên kết quả bài test của bạn
        </div>
        <div style="text-align: right;">
            Xuất lúc ${timeStr} ngày ${dateStr}<br>
            <strong>${career.name}</strong> — ${match.score}% phù hợp
        </div>
    </div>

</div><!-- end page-wrapper -->

<script>
    // Tự động in khi trang đã load xong, bao gồm font
    window.addEventListener('load', function() {
        // Đợi font load xong
        document.fonts.ready.then(function() {
            setTimeout(function() {
                window.print();
            }, 400);
        });
    });
</script>
</body>
</html>`;

    // ── 6. Hiển thị confirm modal trước khi xuất ────────────────────────────
    showPDFConfirmModal(career.name, match.score, () => {
        _doExportPDF(html, career.name, match.score);
    });
}

// ==================== INTERNAL: THỰC HIỆN XUẤT ──────────────────────────────
function _doExportPDF(html, careerName, matchScore) {
    // Tạo Blob URL để download
    const blob    = new Blob([html], { type: 'text/html;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);

    // Tên file gợi nhớ
    const safe      = careerName.replace(/[^a-zA-Z0-9\u00C0-\u024F\u1E00-\u1EFF\s]/g, '').trim().replace(/\s+/g, '-');
    const now       = new Date();
    const datePart  = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`;
    const fileName  = `VMENTOR-${safe}-${datePart}.html`;

    // Mở cửa sổ xem trước và in
    const printWindow = window.open(blobUrl, '_blank', 'width=960,height=720,scrollbars=yes');

    if (!printWindow) {
        // Popup bị chặn → chỉ hiện toast download, không mất dữ liệu
        showPDFDownloadToast(blobUrl, fileName);

        // Thêm hướng dẫn nhỏ
        const note = document.createElement('div');
        note.style.cssText = `
            position:fixed; top:80px; left:50%; transform:translateX(-50%);
            background:#fef3c7; border:2px solid #f59e0b; border-radius:.75rem;
            padding:1rem 1.5rem; z-index:9997; font-size:.875rem; color:#92400e;
            max-width:420px; text-align:center; box-shadow:0 8px 24px rgba(0,0,0,.12);
        `;
        note.innerHTML = `⚠️ <strong>Popup bị chặn.</strong> Dùng nút <em>Tải về</em> ở góc phải bên dưới để lưu file PDF.`;
        document.body.appendChild(note);
        setTimeout(() => { if (note.parentNode) note.remove(); }, 6000);
        return;
    }

    // Khi cửa sổ con đã load xong → hiện toast download ở trang chính
    // (afterprint không đáng tin cậy cross-browser nên dùng setTimeout + load)
    let toastShown = false;
    const showToast = () => {
        if (toastShown) return;
        toastShown = true;
        showPDFDownloadToast(blobUrl, fileName);
    };

    // Sau 1.5s luôn hiện toast (dù in hay không)
    setTimeout(showToast, 1500);

    // Nếu cửa sổ con đóng sớm → cũng hiện toast
    const checkClosed = setInterval(() => {
        if (printWindow.closed) {
            clearInterval(checkClosed);
            showToast();
        }
    }, 600);
}

// ==================== EXPORT ====================
window.exportPDF = exportPDF;

console.log('✅ PDF Export v2.0 loaded — confirm modal + download toast ready');
