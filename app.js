// Clinical Antibiotic Selection Tool - Main Application Logic

// Tab switching functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Activate corresponding button
    event.target.classList.add('active');

    // Initialize tab-specific content
    if (tabName === 'by-organism') {
        loadOrganismList();
    } else if (tabName === 'drug-database') {
        loadDrugDatabase();
    } else if (tabName === 'calculator') {
        loadCalculator();
    }
}

// Filter infections by search term
function filterInfections() {
    const searchTerm = document.getElementById('infection-search').value.toLowerCase();
    const cards = document.querySelectorAll('.infection-card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
}

// Show detailed infection treatment recommendations
function showInfectionDetail(infectionKey) {
    const infection = infectionGuidelines[infectionKey];
    const detailPanel = document.getElementById('infection-detail');

    let html = `
        <div class="detail-header">
            <h2>${infection.name}</h2>
            <button onclick="closeDetail('infection-detail')" class="close-btn">✕</button>
        </div>
    `;

    infection.types.forEach(type => {
        html += `
            <div class="treatment-section">
                <h3>${type.type}</h3>

                <div class="treatment-box first-line">
                    <h4>🟢 First-Line Treatment</h4>
                    <ul>
                        ${type.firstLine.map(drug => {
                            const drugInfo = antibioticsDB[drug];
                            return `<li><strong>${drugInfo.name}</strong> - ${drugInfo.dosing}</li>`;
                        }).join('')}
                    </ul>
                </div>

                <div class="treatment-box second-line">
                    <h4>🟡 Alternative Options</h4>
                    <ul>
                        ${type.secondLine.map(drug => {
                            const drugInfo = antibioticsDB[drug];
                            return `<li><strong>${drugInfo.name}</strong> - ${drugInfo.dosing}</li>`;
                        }).join('')}
                    </ul>
                </div>

                <div class="info-box">
                    <strong>Duration:</strong> ${type.duration}<br>
                    <strong>Clinical Notes:</strong> ${type.notes}
                </div>
            </div>
        `;
    });

    detailPanel.innerHTML = html;
    detailPanel.classList.add('active');
}

// Load organism list
function loadOrganismList() {
    const organismList = document.getElementById('organism-list');
    if (organismList.innerHTML) return; // Already loaded

    let html = '';
    for (const [key, organism] of Object.entries(organismGuidelines)) {
        html += `
            <div class="organism-card" onclick="showOrganismDetail('${key}')">
                <h3>${organism.name}</h3>
            </div>
        `;
    }

    organismList.innerHTML = html;
}

// Filter organisms by search term
function filterOrganisms() {
    const searchTerm = document.getElementById('organism-search').value.toLowerCase();
    const cards = document.querySelectorAll('.organism-card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
}

// Show detailed organism treatment recommendations
function showOrganismDetail(organismKey) {
    const organism = organismGuidelines[organismKey];
    const detailPanel = document.getElementById('organism-detail');

    let html = `
        <div class="detail-header">
            <h2>${organism.name}</h2>
            <button onclick="closeDetail('organism-detail')" class="close-btn">✕</button>
        </div>

        <div class="treatment-box first-line">
            <h3>🟢 First-Line Antibiotics</h3>
            <ul>
                ${organism.firstLine.map(drug => {
                    const drugInfo = antibioticsDB[drug];
                    return `
                        <li>
                            <strong>${drugInfo.name}</strong> (${drugInfo.class})<br>
                            <span class="dosing">Dosing: ${drugInfo.dosing}</span>
                        </li>
                    `;
                }).join('')}
            </ul>
        </div>

        <div class="treatment-box second-line">
            <h3>🟡 Alternative Antibiotics</h3>
            <ul>
                ${organism.alternatives.map(drug => {
                    const drugInfo = antibioticsDB[drug];
                    return `
                        <li>
                            <strong>${drugInfo.name}</strong> (${drugInfo.class})<br>
                            <span class="dosing">Dosing: ${drugInfo.dosing}</span>
                        </li>
                    `;
                }).join('')}
            </ul>
        </div>

        <div class="info-box">
            <strong>Clinical Pearls:</strong> ${organism.notes}
        </div>
    `;

    detailPanel.innerHTML = html;
    detailPanel.classList.add('active');
}

// Load drug database
function loadDrugDatabase() {
    const drugList = document.getElementById('drug-list');
    if (drugList.innerHTML) return; // Already loaded

    displayDrugs();
}

// Display filtered drugs
function displayDrugs() {
    const drugList = document.getElementById('drug-list');
    const searchTerm = document.getElementById('drug-search').value.toLowerCase();
    const classFilter = document.getElementById('class-filter').value;

    let html = '';

    for (const [key, drug] of Object.entries(antibioticsDB)) {
        // Apply filters
        if (searchTerm && !drug.name.toLowerCase().includes(searchTerm) &&
            !drug.class.toLowerCase().includes(searchTerm)) {
            continue;
        }
        if (classFilter && drug.class !== classFilter) {
            continue;
        }

        const coverageList = drug.coverage ? drug.coverage.slice(0, 3).join(', ') +
            (drug.coverage.length > 3 ? '...' : '') : 'See details';

        html += `
            <div class="drug-card" onclick="showDrugDetail('${key}')">
                <h3>${drug.name}</h3>
                <p class="drug-class">${drug.class}</p>
                <p class="drug-spectrum">${drug.spectrum}</p>
                <p class="drug-coverage-preview">Coverage: ${coverageList}</p>
                <p class="drug-cost">Cost: ${drug.cost}</p>
            </div>
        `;
    }

    if (!html) {
        html = '<p class="no-results">No antibiotics found matching your criteria.</p>';
    }

    drugList.innerHTML = html;
}

// Filter drugs
function filterDrugs() {
    displayDrugs();
}

// Show detailed drug information
function showDrugDetail(drugKey) {
    const drug = antibioticsDB[drugKey];

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${drug.name}</h2>
                <button onclick="closeModal()" class="close-btn">✕</button>
            </div>

            <div class="modal-body">
                <div class="drug-detail-section">
                    <h3>Drug Classification</h3>
                    <p><strong>Class:</strong> ${drug.class}</p>
                    <p><strong>Spectrum:</strong> ${drug.spectrum}</p>
                    <p><strong>Cost:</strong> ${drug.cost}</p>
                </div>

                <div class="drug-detail-section">
                    <h3>Coverage</h3>
                    <ul>
                        ${drug.coverage ? drug.coverage.map(c => `<li>${c}</li>`).join('') : '<li>See reference</li>'}
                    </ul>
                </div>

                <div class="drug-detail-section">
                    <h3>Clinical Indications</h3>
                    <ul>
                        ${drug.indications.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                </div>

                <div class="drug-detail-section dosing-highlight">
                    <h3>Dosing</h3>
                    <p>${drug.dosing}</p>
                    ${drug.renalAdjust ? '<p class="warning">⚠️ Requires renal dose adjustment</p>' : ''}
                </div>

                <div class="drug-detail-section side-effects">
                    <h3>Side Effects & Warnings</h3>
                    <ul>
                        ${drug.sideEffects.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                    ${drug.blackbox ? `<p class="blackbox">⚠️ BLACK BOX WARNING: ${drug.blackbox}</p>` : ''}
                </div>

                ${drug.notes ? `
                    <div class="drug-detail-section">
                        <h3>Clinical Pearls</h3>
                        <p>${drug.notes}</p>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Close detail panel
function closeDetail(panelId) {
    const panel = document.getElementById(panelId);
    panel.classList.remove('active');
    panel.innerHTML = '';
}

// Load dosing calculator
function loadCalculator() {
    const select = document.getElementById('calc-antibiotic');
    if (select.innerHTML !== '<option value="">Choose antibiotic...</option>') return; // Already loaded

    // Populate antibiotic select
    for (const [key, drug] of Object.entries(antibioticsDB)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = drug.name;
        select.appendChild(option);
    }
}

// Update dosing calculations
function updateDosing() {
    const drugKey = document.getElementById('calc-antibiotic').value;
    const weight = parseFloat(document.getElementById('patient-weight').value);
    const crCl = parseFloat(document.getElementById('creatinine-clearance').value);
    const resultDiv = document.getElementById('dosing-result');

    if (!drugKey) {
        resultDiv.innerHTML = '';
        return;
    }

    const drug = antibioticsDB[drugKey];

    let html = `
        <h3>${drug.name}</h3>
        <div class="dosing-info">
            <h4>Standard Dosing</h4>
            <p>${drug.dosing}</p>
        </div>
    `;

    // Weight-based dosing adjustments for select drugs
    if (weight && drugKey === 'daptomycin') {
        const dose = (weight * 6).toFixed(0);
        html += `
            <div class="dosing-info calculated">
                <h4>Calculated Dose (6mg/kg)</h4>
                <p><strong>${dose}mg IV q24h</strong></p>
            </div>
        `;
    }

    if (weight && drugKey === 'gentamicin') {
        const dose = (weight * 5).toFixed(0);
        html += `
            <div class="dosing-info calculated">
                <h4>Calculated Dose (5mg/kg)</h4>
                <p><strong>${dose}mg IV q24h</strong> (once-daily dosing)</p>
                <p class="warning">⚠️ Requires therapeutic drug monitoring</p>
            </div>
        `;
    }

    if (weight && drugKey === 'vancomycin') {
        const dose = (weight * 15).toFixed(0);
        html += `
            <div class="dosing-info calculated">
                <h4>Calculated Loading Dose (15mg/kg)</h4>
                <p><strong>${dose}mg IV</strong></p>
                <p class="warning">⚠️ Requires therapeutic drug monitoring. Target AUC/MIC >400 or trough 15-20 mcg/mL for serious infections.</p>
            </div>
        `;
    }

    // Renal adjustment warnings
    if (crCl && drug.renalAdjust) {
        if (crCl < 30) {
            html += `
                <div class="dosing-info renal-warning">
                    <h4>Renal Adjustment Required</h4>
                    <p><strong>CrCl ${crCl} mL/min (Severe Impairment)</strong></p>
                    <p class="warning">⚠️ Significant dose reduction or interval extension required. Consult pharmacy or drug reference for specific adjustments.</p>
                </div>
            `;
        } else if (crCl < 60) {
            html += `
                <div class="dosing-info renal-warning">
                    <h4>Renal Adjustment May Be Required</h4>
                    <p><strong>CrCl ${crCl} mL/min (Moderate Impairment)</strong></p>
                    <p class="warning">⚠️ Dose adjustment may be needed. Consult drug reference for specific recommendations.</p>
                </div>
            `;
        } else {
            html += `
                <div class="dosing-info renal-ok">
                    <h4>Renal Function</h4>
                    <p>CrCl ${crCl} mL/min - Standard dosing appropriate</p>
                </div>
            `;
        }
    }

    // Special notes for specific drugs
    if (drugKey === 'nitrofurantoin' && crCl && crCl < 30) {
        html += `
            <div class="dosing-info contraindication">
                <h4>⚠️ CONTRAINDICATED</h4>
                <p>Nitrofurantoin is contraindicated with CrCl <30 mL/min due to inadequate urinary concentrations and increased toxicity risk.</p>
            </div>
        `;
    }

    html += `
        <div class="disclaimer">
            <p><strong>Disclaimer:</strong> These are general guidelines. Always verify dosing with current references, consider patient-specific factors, and consult pharmacy for complex cases.</p>
        </div>
    `;

    resultDiv.innerHTML = html;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set default tab as active
    showTab('by-infection');
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modals/details
    if (e.key === 'Escape') {
        closeModal();
        const detailPanels = document.querySelectorAll('.detail-panel.active');
        detailPanels.forEach(panel => {
            panel.classList.remove('active');
            panel.innerHTML = '';
        });
    }
});
