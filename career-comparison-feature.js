// ==================== CAREER COMPARISON FEATURE ====================
// Thêm vào cuối file app-enterprise.js

// ==================== GLOBAL VARIABLES FOR COMPARISON ====================
let comparisonCareer1 = null;  // Nghề đang xem
let comparisonCareer2 = null;  // Nghề được chọn để so sánh
let availableCareersForComparison = []; // Top 10 careers từ bước 6

// ==================== SHOW COMPARISON MODAL ====================
function showComparisonModal() {
    if (!selectedCareer) {
        alert('Vui lòng chọn một ngành nghề trước!');
        return;
    }
    
    // Lấy danh sách top 10 careers (trừ career hiện tại)
    const matches = calculateMatches();
    availableCareersForComparison = matches
        .slice(0, 10)
        .filter(m => m.id !== selectedCareer);
    
    if (availableCareersForComparison.length === 0) {
        alert('Không có ngành nghề khác để so sánh!');
        return;
    }
    
    comparisonCareer1 = careersDatabase[selectedCareer];
    comparisonCareer2 = careersDatabase[availableCareersForComparison[0].id];
    
    renderComparisonModal();
}

function renderComparisonModal() {
    // Create modal overlay if doesn't exist
    let modalOverlay = document.getElementById('comparisonModalOverlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'comparisonModalOverlay';
        modalOverlay.className = 'modal-overlay';
        document.body.appendChild(modalOverlay);
        
        // Close on overlay click
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeComparisonModal();
            }
        });
    }
    
    const match1 = calculateMatches().find(m => m.id === comparisonCareer1.id);
    const match2 = calculateMatches().find(m => m.id === comparisonCareer2.id);
    
    modalOverlay.innerHTML = `
        <div class="modal-container" style="max-width: 1400px;">
            <!-- HEADER -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 1.5rem 1.5rem 0 0; position: relative;">
                <button class="modal-close-btn" onclick="closeComparisonModal()" style="position: absolute; top: 1.5rem; right: 1.5rem; width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 2px solid rgba(255,255,255,0.3); color: white; font-size: 1.25rem; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-times"></i>
                </button>
                <h2 style="margin: 0; font-size: 2rem; display: flex; align-items: center; gap: 1rem;">
                    <i class="fas fa-balance-scale"></i>
                    So sánh ngành nghề
                </h2>
                <p style="margin: 0.5rem 0 0; opacity: 0.9;">Đối chiếu chi tiết giữa 2 ngành nghề</p>
            </div>
            
            <!-- BODY -->
            <div style="padding: 2rem; max-height: 70vh; overflow-y: auto;">
                ${buildComparisonTable(comparisonCareer1, comparisonCareer2, match1, match2)}
            </div>
            
            <!-- FOOTER -->
            <div style="padding: 1.5rem 2rem; background: #f9fafb; border-top: 1px solid #e5e7eb; display: flex; gap: 1rem; justify-content: space-between; align-items: center; border-radius: 0 0 1.5rem 1.5rem;">
                <div style="flex: 1;">
                    <label style="display: block; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">
                        <i class="fas fa-exchange-alt"></i> Thay đổi ngành so sánh:
                    </label>
                    <select id="comparisonSelect" onchange="changeComparisonCareer(this.value)" style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 0.5rem; font-size: 0.875rem; cursor: pointer;">
                        ${availableCareersForComparison.map(m => {
                            const career = careersDatabase[m.id];
                            const selected = m.id === comparisonCareer2.id ? 'selected' : '';
                            return `<option value="${m.id}" ${selected}>${career.icon} ${career.name} (${m.score}%)</option>`;
                        }).join('')}
                    </select>
                </div>
                <button class="btn btn-large btn-outline" onclick="closeComparisonModal()">
                    <i class="fas fa-times"></i> Đóng
                </button>
            </div>
        </div>
    `;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function buildComparisonTable(career1, career2, match1, match2) {
    return `
        <!-- HEADER ROW -->
        <div style="display: grid; grid-template-columns: 200px 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
            <div></div>
            <div style="text-align: center; padding: 1.5rem; background: linear-gradient(135deg, #667eea15, #764ba215); border-radius: 1rem; border: 2px solid #667eea;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${career1.icon}</div>
                <h3 style="margin: 0; font-size: 1.125rem; color: #667eea;">${career1.name}</h3>
                <div style="margin-top: 0.75rem; font-size: 2rem; font-weight: 800; color: #667eea;">${match1.score}%</div>
                <div style="font-size: 0.75rem; color: #6b7280;">Phù hợp với bạn</div>
            </div>
            <div style="text-align: center; padding: 1.5rem; background: linear-gradient(135deg, #10b98115, #3cba9215); border-radius: 1rem; border: 2px solid #10b981;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${career2.icon}</div>
                <h3 style="margin: 0; font-size: 1.125rem; color: #10b981;">${career2.name}</h3>
                <div style="margin-top: 0.75rem; font-size: 2rem; font-weight: 800; color: #10b981;">${match2.score}%</div>
                <div style="font-size: 0.75rem; color: #6b7280;">Phù hợp với bạn</div>
            </div>
        </div>
        
        <!-- COMPARISON ROWS -->
        ${buildComparisonRow('📚 Trường đào tạo', 
            formatUniversities(career1.universities),
            formatUniversities(career2.universities)
        )}
        
        ${buildComparisonRow('💰 Lương khởi điểm', 
            career1.salary?.entry || 'N/A',
            career2.salary?.entry || 'N/A'
        )}
        
        ${buildComparisonRow('💼 Lương Mid-level', 
            career1.salary?.mid || 'N/A',
            career2.salary?.mid || 'N/A'
        )}
        
        ${buildComparisonRow('🌟 Lương Senior', 
            career1.salary?.senior || 'N/A',
            career2.salary?.senior || 'N/A'
        )}
        
        ${buildComparisonRow('📈 Triển vọng', 
            career1.growth || 'N/A',
            career2.growth || 'N/A'
        )}
        
        ${buildComparisonRow('🎯 Nhu cầu việc làm', 
            career1.jobDemand || 'N/A',
            career2.jobDemand || 'N/A'
        )}
        
        ${buildComparisonRow('🔧 Mã Holland', 
            career1.hollandCode,
            career2.hollandCode
        )}
        
        ${buildComparisonRowExpandable('⚠️ Thử thách chính', 
            career1.challenges,
            career2.challenges,
            'challenges',
            2
        )}
        
        ${buildComparisonRowExpandable('🏆 Thành công tiêu biểu', 
            career1.successStories,
            career2.successStories,
            'success',
            1
        )}
        
        ${buildComparisonRowExpandable('💡 Khuyến nghị', 
            career1.recommendations,
            career2.recommendations,
            'recommendations',
            2
        )}
    `;
}

function buildComparisonRow(label, value1, value2) {
    return `
        <div style="display: grid; grid-template-columns: 200px 1fr 1fr; gap: 1rem; margin-bottom: 1rem; padding: 1rem; background: white; border-radius: 0.75rem; border: 1px solid #e5e7eb;">
            <div style="font-weight: 700; color: #374151; display: flex; align-items: center;">
                ${label}
            </div>
            <div style="color: #6b7280; line-height: 1.6;">
                ${value1}
            </div>
            <div style="color: #6b7280; line-height: 1.6;">
                ${value2}
            </div>
        </div>
    `;
}

// ✨ MỚI: Build row với expand/collapse
function buildComparisonRowExpandable(label, items1, items2, section, initialLimit = 2) {
    const id1 = `${section}-1`;
    const id2 = `${section}-2`;
    
    return `
        <div style="display: grid; grid-template-columns: 200px 1fr 1fr; gap: 1rem; margin-bottom: 1rem; padding: 1rem; background: white; border-radius: 0.75rem; border: 1px solid #e5e7eb;">
            <div style="font-weight: 700; color: #374151; display: flex; align-items: center;">
                ${label}
            </div>
            <div style="color: #6b7280; line-height: 1.6;">
                ${formatListExpandable(items1, initialLimit, id1)}
            </div>
            <div style="color: #6b7280; line-height: 1.6;">
                ${formatListExpandable(items2, initialLimit, id2)}
            </div>
        </div>
    `;
}

// ✨ MỚI: Format list với expand/collapse
function formatListExpandable(items, limit, id) {
    if (!items || items.length === 0) {
        return '<em style="color: #9ca3af;">Chưa có thông tin</em>';
    }
    
    if (items.length <= limit) {
        // Nếu số lượng ít, hiển thị luôn không cần expand
        return `
            <ul style="margin: 0; padding-left: 1.25rem;">
                ${items.map(item => `<li style="margin-bottom: 0.5rem;">${item}</li>`).join('')}
            </ul>
        `;
    }
    
    // Có nhiều items, cần expand/collapse
    return `
        <div id="list-${id}">
            <ul style="margin: 0; padding-left: 1.25rem;" id="list-content-${id}">
                ${items.slice(0, limit).map(item => `<li style="margin-bottom: 0.5rem;">${item}</li>`).join('')}
            </ul>
            
            <!-- Hidden items -->
            <ul style="margin: 0; padding-left: 1.25rem; display: none;" id="list-hidden-${id}">
                ${items.slice(limit).map(item => `<li style="margin-bottom: 0.5rem;">${item}</li>`).join('')}
            </ul>
            
            <!-- Expand button -->
            <div id="expand-btn-${id}" style="margin-top: 0.75rem;">
                <button onclick="toggleListExpand('${id}')" style="
                    background: linear-gradient(135deg, #667eea15, #764ba215);
                    border: 1px solid #667eea;
                    color: #667eea;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                ">
                    <i class="fas fa-angle-down"></i>
                    ...và ${items.length - limit} mục khác
                </button>
            </div>
            
            <!-- Collapse button (hidden initially) -->
            <div id="collapse-btn-${id}" style="margin-top: 0.75rem; display: none;">
                <button onclick="toggleListExpand('${id}')" style="
                    background: linear-gradient(135deg, #667eea15, #764ba215);
                    border: 1px solid #667eea;
                    color: #667eea;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                ">
                    <i class="fas fa-angle-up"></i>
                    Quay lại
                </button>
            </div>
        </div>
    `;
}

// ✨ MỚI: Toggle expand/collapse
function toggleListExpand(id) {
    const hiddenList = document.getElementById(`list-hidden-${id}`);
    const expandBtn = document.getElementById(`expand-btn-${id}`);
    const collapseBtn = document.getElementById(`collapse-btn-${id}`);
    
    if (!hiddenList || !expandBtn || !collapseBtn) return;
    
    if (hiddenList.style.display === 'none') {
        // Expand
        hiddenList.style.display = 'block';
        expandBtn.style.display = 'none';
        collapseBtn.style.display = 'block';
    } else {
        // Collapse
        hiddenList.style.display = 'none';
        expandBtn.style.display = 'block';
        collapseBtn.style.display = 'none';
    }
}

function formatUniversities(universities) {
    if (!universities || universities.length === 0) return '<em style="color: #9ca3af;">Chưa có thông tin</em>';
    
    return universities.slice(0, 3).map(uni => `
        <div style="margin-bottom: 0.5rem;">
            <strong style="color: #374151;">${uni.name}</strong><br>
            <span style="font-size: 0.875rem; color: #6b7280;">Điểm: ${uni.score} | ${uni.combo}</span>
        </div>
    `).join('');
}

function changeComparisonCareer(newCareerId) {
    comparisonCareer2 = careersDatabase[newCareerId];
    renderComparisonModal();
}

function closeComparisonModal() {
    const modalOverlay = document.getElementById('comparisonModalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

console.log('✅ Career Comparison Feature with Expand/Collapse loaded');