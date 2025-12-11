# Clinical Antibiotic Selection Tool

A comprehensive, interactive web-based tool designed to help clinicians select appropriate antibiotics for common infections. This tool provides evidence-based recommendations, drug information, and dosing guidance at the point of care.

## Features

### 1. **Selection by Infection Type**
Browse common infections organized by site/system:
- Urinary Tract Infections (UTI)
- Community-Acquired Pneumonia (CAP)
- Skin & Soft Tissue Infections
- Meningitis
- Intra-abdominal Infections
- Sepsis/Septic Shock
- Endocarditis
- Osteomyelitis

Each infection provides:
- First-line treatment options
- Alternative antibiotics
- Duration of therapy
- Clinical pearls and considerations

### 2. **Selection by Organism**
Search for specific pathogens and get targeted antibiotic recommendations:
- MRSA/MSSA
- Streptococcus species
- Gram-negative organisms (E. coli, Klebsiella, Pseudomonas)
- ESBL and CRE organisms
- Atypical pathogens (Mycoplasma, Legionella, Chlamydia)
- Anaerobes
- And many more...

### 3. **Comprehensive Drug Database**
Access detailed information on 30+ antibiotics:
- Drug classification and spectrum
- Coverage profile
- Clinical indications
- Standard dosing
- Side effects and warnings
- Black box warnings
- Cost considerations
- Clinical pearls

Filter by:
- Antibiotic name
- Drug class
- Spectrum of activity

### 4. **Dosing Calculator**
Calculate weight-based dosing for select antibiotics:
- Vancomycin
- Gentamicin
- Daptomycin
- And others

Features:
- Renal dose adjustment warnings
- Contraindications for renal impairment
- Therapeutic drug monitoring reminders

## How to Use

### Getting Started

1. Open `index.html` in any modern web browser
2. No installation or server required - runs entirely in the browser
3. Works offline once loaded

### Navigation

The tool has four main tabs:

#### **By Infection Tab**
1. Browse infection cards or use the search box
2. Click on an infection to see detailed treatment guidelines
3. View first-line and alternative treatment options
4. Check treatment duration and clinical notes

#### **By Organism Tab**
1. Search for the pathogen by name
2. Click to see recommended antibiotics
3. Review first-line and alternative options with dosing

#### **Drug Database Tab**
1. Browse all antibiotics or search by name
2. Filter by antibiotic class
3. Click any drug card for comprehensive information
4. Review spectrum, dosing, side effects, and clinical pearls

#### **Dosing Calculator Tab**
1. Select an antibiotic from the dropdown
2. Enter patient weight (kg)
3. Enter creatinine clearance (mL/min)
4. View calculated doses and renal adjustment recommendations

### Keyboard Shortcuts

- **ESC**: Close modals and detail panels

## Clinical Guidance

### Important Considerations

This tool provides general guidelines. Always:

1. **Check Local Antibiograms**: Resistance patterns vary by region and institution
2. **Consider Patient Factors**:
   - Allergies and previous reactions
   - Renal and hepatic function
   - Pregnancy/breastfeeding status
   - Recent antibiotic exposure
   - Immunosuppression
   - Drug interactions

3. **Source Control**: Many infections require procedural intervention (drainage, debridement)
4. **De-escalation**: Narrow antibiotics based on culture results
5. **Consult Specialists**: For complex cases, consult infectious disease, pharmacy, or other specialists

### Antimicrobial Stewardship

- Use narrow-spectrum antibiotics when possible
- Avoid broad-spectrum agents unless clinically indicated
- Reserve carbapenems, colistin, and other last-line agents for resistant organisms
- Consider fluoroquinolone risks (tendon rupture, neuropathy, aortic aneurysm)
- Monitor for C. difficile infection with broad-spectrum therapy

## Antibiotic Classes Covered

- **Penicillins**: Penicillin G, Amoxicillin, Augmentin, Nafcillin, Zosyn
- **Cephalosporins**: 1st through 5th generation (Cefazolin, Ceftriaxone, Cefepime, Ceftaroline)
- **Carbapenems**: Meropenem, Imipenem, Ertapenem
- **Fluoroquinolones**: Ciprofloxacin, Levofloxacin, Moxifloxacin
- **Macrolides**: Azithromycin, Clarithromycin
- **Tetracyclines**: Doxycycline, Minocycline
- **Glycopeptides**: Vancomycin
- **Lipopeptides**: Daptomycin
- **Aminoglycosides**: Gentamicin, Tobramycin
- **Oxazolidinones**: Linezolid
- **Other**: Metronidazole, Clindamycin, Bactrim, Nitrofurantoin, Fosfomycin, Colistin

## Educational Purpose

This tool is designed for:
- Medical students learning infectious diseases
- Residents and fellows in training
- Practicing clinicians seeking quick reference
- Healthcare providers in urgent care and emergency settings

## Limitations

- General guidelines may not apply to all clinical scenarios
- Local resistance patterns may differ
- Individual patient factors must be considered
- Not a substitute for clinical judgment or specialist consultation
- Dosing recommendations are starting points - adjust based on patient response

## Data Sources

This tool synthesizes information from:
- IDSA (Infectious Diseases Society of America) guidelines
- ATS/IDSA respiratory infection guidelines
- Sanford Guide to Antimicrobial Therapy
- UpToDate and other clinical references
- FDA prescribing information

## Technical Information

### Browser Compatibility
- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser with JavaScript enabled

### Files
- `index.html` - Main application interface
- `antibiotics-data.js` - Comprehensive antibiotic and infection database
- `app.js` - Interactive functionality and logic
- `styles.css` - Professional clinical styling
- `README.md` - Documentation

### Mobile Responsive
Fully responsive design works on:
- Desktop computers
- Tablets
- Smartphones

### Printing
Optimized print styles for creating reference sheets.

## Future Enhancements

Potential additions:
- Pediatric dosing calculator
- Pregnancy safety categories
- Drug interaction checker
- Allergy cross-reactivity guide
- Antibiotic prophylaxis guidelines
- Culture interpretation guide
- Hospital antibiogram integration

## License & Disclaimer

**FOR EDUCATIONAL USE ONLY**

This tool provides general information and should not replace:
- Professional medical judgment
- Current clinical guidelines
- Consultation with specialists
- Local institutional protocols

Always verify dosing, check for updates to guidelines, and consider patient-specific factors. The authors assume no liability for clinical decisions made using this tool.

## Contributing

To add antibiotics or update guidelines:
1. Edit `antibiotics-data.js` to add/modify drugs
2. Follow the existing data structure
3. Include comprehensive clinical information
4. Cite sources for recommendations

## Version

**Version 1.0** - December 2025

## Contact

For questions, suggestions, or to report errors, please consult your institution's infectious disease specialists or antimicrobial stewardship team.

---

**Remember**: The best antibiotic is the narrowest spectrum that adequately covers the likely pathogen(s) and achieves appropriate tissue penetration for the infection site. When in doubt, consult infectious disease specialists and your local antibiogram.
