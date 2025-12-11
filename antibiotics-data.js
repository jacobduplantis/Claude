// Comprehensive Antibiotic Database
const antibioticsDB = {
    // PENICILLINS
    "penicillin-g": {
        name: "Penicillin G",
        class: "Penicillins",
        spectrum: "Narrow - Gram+ cocci, some Gram- cocci",
        coverage: ["Streptococcus (except enterococcus)", "Neisseria meningitidis", "Treponema pallidum", "Clostridium (not difficile)"],
        indications: ["Syphilis", "Strep pharyngitis", "Bacterial meningitis (Strep pneumo, GBS)", "Gas gangrene"],
        dosing: "2-4 million units IV q4-6h",
        renalAdjust: true,
        sideEffects: ["Hypersensitivity reactions", "Seizures at high doses", "Diarrhea", "Jarisch-Herxheimer reaction (syphilis)"],
        cost: "$"
    },
    "amoxicillin": {
        name: "Amoxicillin",
        class: "Penicillins",
        spectrum: "Narrow - Gram+ cocci, some Gram- rods",
        coverage: ["Streptococcus", "Enterococcus", "E. coli", "H. influenzae", "Listeria"],
        indications: ["Otitis media", "Sinusitis", "CAP (mild)", "Dental infections", "Listeria meningitis", "Endocarditis prophylaxis"],
        dosing: "500-875mg PO q8-12h (or 1g PO q8h for high-dose)",
        renalAdjust: true,
        sideEffects: ["Diarrhea", "Rash (non-allergic)", "Hypersensitivity"],
        cost: "$"
    },
    "amoxicillin-clavulanate": {
        name: "Amoxicillin-Clavulanate (Augmentin)",
        class: "Penicillins",
        spectrum: "Moderate - Gram+, Gram-, anaerobes",
        coverage: ["MSSA", "Streptococcus", "E. coli", "Klebsiella", "Proteus", "H. influenzae", "Moraxella", "Anaerobes (B. fragilis)"],
        indications: ["Sinusitis", "Otitis media", "CAP", "Diabetic foot infections", "Animal bites", "Aspiration pneumonia"],
        dosing: "875-125mg PO q12h or 2g PO q12h (XR)",
        renalAdjust: true,
        sideEffects: ["Diarrhea (common)", "Nausea", "Hepatotoxicity (rare)", "C. diff"],
        cost: "$$"
    },
    "nafcillin": {
        name: "Nafcillin",
        class: "Penicillins",
        spectrum: "Narrow - anti-staphylococcal",
        coverage: ["MSSA", "Streptococcus"],
        indications: ["MSSA bacteremia", "MSSA endocarditis", "Osteomyelitis (MSSA)", "Skin infections (MSSA)"],
        dosing: "2g IV q4h",
        renalAdjust: false,
        sideEffects: ["Phlebitis", "Neutropenia", "Interstitial nephritis", "Hepatotoxicity"],
        cost: "$$"
    },
    "piperacillin-tazobactam": {
        name: "Piperacillin-Tazobactam (Zosyn)",
        class: "Penicillins",
        spectrum: "Broad - Gram+, Gram-, anaerobes, Pseudomonas",
        coverage: ["Pseudomonas aeruginosa", "E. coli", "Klebsiella", "Enterobacter", "MSSA", "Streptococcus", "Enterococcus", "Anaerobes"],
        indications: ["Hospital-acquired pneumonia", "Intra-abdominal infections", "Febrile neutropenia", "Sepsis (empiric)", "Complicated UTI"],
        dosing: "3.375g IV q6h or 4.5g IV q6h (extended infusion preferred)",
        renalAdjust: true,
        sideEffects: ["Hypokalemia", "Thrombocytopenia", "C. diff", "Rash"],
        cost: "$$$"
    },

    // CEPHALOSPORINS
    "cefazolin": {
        name: "Cefazolin (1st Gen)",
        class: "Cephalosporins",
        spectrum: "Narrow - Gram+ cocci, some Gram-",
        coverage: ["MSSA", "Streptococcus", "E. coli", "Klebsiella", "Proteus"],
        indications: ["Surgical prophylaxis", "MSSA bacteremia", "Cellulitis", "UTI"],
        dosing: "1-2g IV q8h",
        renalAdjust: true,
        sideEffects: ["Hypersensitivity (5-10% cross-reactivity with PCN)", "Thrombophlebitis", "C. diff"],
        cost: "$"
    },
    "cefuroxime": {
        name: "Cefuroxime (2nd Gen)",
        class: "Cephalosporins",
        spectrum: "Moderate - Better Gram- coverage than 1st gen",
        coverage: ["MSSA", "Streptococcus", "H. influenzae", "Moraxella", "E. coli", "Klebsiella"],
        indications: ["CAP", "Acute sinusitis", "Otitis media", "Lyme disease"],
        dosing: "250-500mg PO q12h or 1.5g IV q8h",
        renalAdjust: true,
        sideEffects: ["GI upset", "Hypersensitivity", "C. diff"],
        cost: "$"
    },
    "ceftriaxone": {
        name: "Ceftriaxone (3rd Gen)",
        class: "Cephalosporins",
        spectrum: "Broad - Excellent Gram-, good Gram+",
        coverage: ["Streptococcus pneumoniae", "N. meningitidis", "N. gonorrhoeae", "H. influenzae", "E. coli", "Klebsiella", "Proteus", "Salmonella"],
        indications: ["Bacterial meningitis", "CAP (severe)", "Gonorrhea", "Pyelonephritis", "Sepsis", "Lyme disease"],
        dosing: "1-2g IV/IM q24h",
        renalAdjust: false,
        sideEffects: ["Gallbladder sludge", "Hypersensitivity", "Hemolytic anemia", "Do NOT use with calcium"],
        cost: "$"
    },
    "cefepime": {
        name: "Cefepime (4th Gen)",
        class: "Cephalosporins",
        spectrum: "Broad - Gram+, Gram-, Pseudomonas",
        coverage: ["Pseudomonas aeruginosa", "E. coli", "Klebsiella", "Enterobacter", "MSSA", "Streptococcus"],
        indications: ["Hospital-acquired pneumonia", "Febrile neutropenia", "Complicated UTI", "Severe sepsis"],
        dosing: "1-2g IV q8-12h",
        renalAdjust: true,
        sideEffects: ["Neurotoxicity (especially renal impairment)", "C. diff", "Hypersensitivity"],
        cost: "$$"
    },
    "ceftaroline": {
        name: "Ceftaroline (5th Gen)",
        class: "Cephalosporins",
        spectrum: "Broad - MRSA coverage + typical ceph coverage",
        coverage: ["MRSA", "Streptococcus", "E. coli", "Klebsiella", "H. influenzae"],
        indications: ["Complicated skin infections (MRSA)", "CAP (including MRSA)"],
        dosing: "600mg IV q12h",
        renalAdjust: true,
        sideEffects: ["Hypersensitivity", "GI upset", "Hypokalemia"],
        cost: "$$$$"
    },

    // CARBAPENEMS
    "meropenem": {
        name: "Meropenem",
        class: "Carbapenems",
        spectrum: "Very Broad - Gram+, Gram-, anaerobes, Pseudomonas",
        coverage: ["MSSA", "Streptococcus", "Pseudomonas", "E. coli", "Klebsiella", "Enterobacter", "ESBL organisms", "Anaerobes"],
        indications: ["Severe intra-abdominal infections", "Meningitis", "Febrile neutropenia", "Multidrug resistant infections"],
        dosing: "1-2g IV q8h",
        renalAdjust: true,
        sideEffects: ["Seizures (lower risk than imipenem)", "C. diff", "Thrombocytopenia"],
        cost: "$$$$",
        notes: "Reserve for severe infections or ESBL organisms"
    },
    "imipenem": {
        name: "Imipenem-Cilastatin",
        class: "Carbapenems",
        spectrum: "Very Broad - Similar to meropenem",
        coverage: ["MSSA", "Streptococcus", "Pseudomonas", "E. coli", "Klebsiella", "ESBL organisms", "Anaerobes"],
        indications: ["Severe intra-abdominal infections", "Hospital-acquired pneumonia", "Polymicrobial infections"],
        dosing: "500mg IV q6h",
        renalAdjust: true,
        sideEffects: ["Seizures (higher risk)", "Nausea", "C. diff"],
        cost: "$$$$",
        notes: "Avoid in meningitis (seizure risk)"
    },
    "ertapenem": {
        name: "Ertapenem",
        class: "Carbapenems",
        spectrum: "Broad - NO Pseudomonas or Acinetobacter coverage",
        coverage: ["MSSA", "Streptococcus", "E. coli", "Klebsiella", "ESBL organisms", "Anaerobes"],
        indications: ["Complicated intra-abdominal infections", "Complicated UTI", "Community-acquired pneumonia", "Diabetic foot infections"],
        dosing: "1g IV q24h",
        renalAdjust: true,
        sideEffects: ["Seizures", "C. diff", "Headache"],
        cost: "$$$",
        notes: "Once daily dosing, good for outpatient IV therapy"
    },

    // FLUOROQUINOLONES
    "ciprofloxacin": {
        name: "Ciprofloxacin",
        class: "Fluoroquinolones",
        spectrum: "Broad - Gram-, Pseudomonas, atypicals",
        coverage: ["Pseudomonas aeruginosa", "E. coli", "Klebsiella", "Salmonella", "Shigella", "Neisseria", "Mycoplasma", "Legionella"],
        indications: ["Complicated UTI", "Pyelonephritis", "Prostatitis", "Anthrax", "Pseudomonas infections"],
        dosing: "500-750mg PO q12h or 400mg IV q8-12h",
        renalAdjust: true,
        sideEffects: ["Tendon rupture", "QT prolongation", "Peripheral neuropathy", "CNS effects", "Aortic aneurysm"],
        cost: "$",
        blackbox: "Tendinitis, tendon rupture, peripheral neuropathy, CNS effects"
    },
    "levofloxacin": {
        name: "Levofloxacin",
        class: "Fluoroquinolones",
        spectrum: "Broad - Better Gram+ than cipro, atypicals",
        coverage: ["Streptococcus pneumoniae", "MSSA", "E. coli", "H. influenzae", "Mycoplasma", "Legionella", "Chlamydia"],
        indications: ["CAP", "Acute sinusitis", "Complicated UTI", "Prostatitis"],
        dosing: "750mg PO/IV q24h",
        renalAdjust: true,
        sideEffects: ["Tendon rupture", "QT prolongation", "Hypoglycemia", "CNS effects", "Aortic aneurysm"],
        cost: "$",
        blackbox: "Same as ciprofloxacin"
    },
    "moxifloxacin": {
        name: "Moxifloxacin",
        class: "Fluoroquinolones",
        spectrum: "Broad - Best Gram+ and anaerobe coverage of FQs",
        coverage: ["Streptococcus pneumoniae", "MSSA", "Atypicals", "Anaerobes", "Some MRSA activity"],
        indications: ["CAP", "Complicated intra-abdominal infections", "Complicated skin infections"],
        dosing: "400mg PO/IV q24h",
        renalAdjust: false,
        sideEffects: ["QT prolongation (highest of FQs)", "Tendon rupture", "Hepatotoxicity", "CNS effects"],
        cost: "$$",
        blackbox: "Same as other fluoroquinolones"
    },

    // MACROLIDES
    "azithromycin": {
        name: "Azithromycin (Z-Pak)",
        class: "Macrolides",
        spectrum: "Moderate - Gram+, atypicals",
        coverage: ["Streptococcus (increasing resistance)", "Mycoplasma", "Chlamydia", "Legionella", "H. influenzae"],
        indications: ["CAP", "Atypical pneumonia", "Chlamydia", "Gonorrhea", "MAC prophylaxis"],
        dosing: "500mg x1, then 250mg daily x4 days OR 500mg PO daily",
        renalAdjust: false,
        sideEffects: ["QT prolongation", "GI upset", "Hepatotoxicity"],
        cost: "$"
    },
    "clarithromycin": {
        name: "Clarithromycin",
        class: "Macrolides",
        spectrum: "Moderate - Similar to azithromycin",
        coverage: ["Streptococcus", "Mycoplasma", "Chlamydia", "Legionella", "H. pylori"],
        indications: ["CAP", "H. pylori treatment", "MAC treatment"],
        dosing: "500mg PO q12h",
        renalAdjust: true,
        sideEffects: ["QT prolongation", "Metallic taste", "Drug interactions (CYP3A4)"],
        cost: "$"
    },

    // TETRACYCLINES
    "doxycycline": {
        name: "Doxycycline",
        class: "Tetracyclines",
        spectrum: "Broad - Gram+, Gram-, atypicals, rickettsiae",
        coverage: ["MRSA (skin)", "Streptococcus", "Mycoplasma", "Chlamydia", "Rickettsia", "Borrelia", "Brucella"],
        indications: ["CAP", "Skin infections (MRSA)", "Lyme disease", "Rocky Mountain spotted fever", "Acne", "Chlamydia", "Tick-borne illnesses"],
        dosing: "100mg PO q12h",
        renalAdjust: false,
        sideEffects: ["Photosensitivity", "Esophagitis", "Tooth discoloration (children)", "Pill esophagitis"],
        cost: "$"
    },
    "minocycline": {
        name: "Minocycline",
        class: "Tetracyclines",
        spectrum: "Broad - Similar to doxycycline",
        coverage: ["MRSA", "Streptococcus", "Atypicals", "Some resistant organisms"],
        indications: ["MRSA infections", "Acne", "Nocardia"],
        dosing: "100mg PO q12h",
        renalAdjust: false,
        sideEffects: ["Vestibular toxicity (dizziness)", "Hyperpigmentation", "Drug-induced lupus", "Tooth discoloration"],
        cost: "$"
    },

    // GLYCOPEPTIDES
    "vancomycin": {
        name: "Vancomycin",
        class: "Glycopeptides",
        spectrum: "Narrow - Gram+ only",
        coverage: ["MRSA", "Coagulase-negative Staph", "Streptococcus", "Enterococcus (not VRE)", "C. difficile (PO only)"],
        indications: ["MRSA bacteremia", "MRSA pneumonia", "C. diff (PO)", "Endocarditis", "Meningitis", "Osteomyelitis"],
        dosing: "15-20mg/kg IV q8-12h (target trough 15-20 for serious infections) OR 125mg PO q6h for C. diff",
        renalAdjust: true,
        sideEffects: ["Nephrotoxicity", "Red man syndrome (infusion reaction)", "Ototoxicity", "Thrombocytopenia"],
        cost: "$",
        notes: "Requires therapeutic drug monitoring"
    },
    "daptomycin": {
        name: "Daptomycin",
        class: "Lipopeptides",
        spectrum: "Narrow - Gram+ only",
        coverage: ["MRSA", "VRE", "Streptococcus", "Enterococcus"],
        indications: ["MRSA bacteremia", "MRSA endocarditis", "Complicated skin infections", "VRE infections"],
        dosing: "4-6mg/kg IV q24h (higher doses for bacteremia/endocarditis)",
        renalAdjust: true,
        sideEffects: ["Myopathy (monitor CPK weekly)", "Eosinophilic pneumonia"],
        cost: "$$$$",
        notes: "Inactivated by surfactant - do NOT use for pneumonia"
    },

    // AMINOGLYCOSIDES
    "gentamicin": {
        name: "Gentamicin",
        class: "Aminoglycosides",
        spectrum: "Moderate - Gram- rods, synergy with Gram+",
        coverage: ["E. coli", "Klebsiella", "Pseudomonas", "Enterobacter", "Synergy for Enterococcus and Streptococcus"],
        indications: ["Sepsis (synergy)", "Endocarditis (synergy)", "Complicated UTI", "Pyelonephritis"],
        dosing: "5-7mg/kg IV q24h (once daily dosing)",
        renalAdjust: true,
        sideEffects: ["Nephrotoxicity", "Ototoxicity (irreversible)", "Neuromuscular blockade"],
        cost: "$",
        notes: "Requires therapeutic drug monitoring"
    },
    "tobramycin": {
        name: "Tobramycin",
        class: "Aminoglycosides",
        spectrum: "Moderate - Better Pseudomonas coverage",
        coverage: ["Pseudomonas aeruginosa", "E. coli", "Klebsiella", "Enterobacter"],
        indications: ["Pseudomonas infections", "Cystic fibrosis", "Hospital-acquired pneumonia"],
        dosing: "5-7mg/kg IV q24h",
        renalAdjust: true,
        sideEffects: ["Nephrotoxicity", "Ototoxicity", "Neuromuscular blockade"],
        cost: "$"
    },

    // OTHER IMPORTANT ANTIBIOTICS
    "metronidazole": {
        name: "Metronidazole (Flagyl)",
        class: "Nitroimidazoles",
        spectrum: "Narrow - Anaerobes and some protozoans",
        coverage: ["Bacteroides fragilis", "C. difficile", "Anaerobes", "Trichomonas", "Giardia"],
        indications: ["C. diff", "Anaerobic infections", "Intra-abdominal infections", "Brain abscess", "Bacterial vaginosis"],
        dosing: "500mg PO/IV q8h",
        renalAdjust: false,
        sideEffects: ["Metallic taste", "Disulfiram reaction (avoid alcohol)", "Peripheral neuropathy", "Seizures"],
        cost: "$"
    },
    "linezolid": {
        name: "Linezolid",
        class: "Oxazolidinones",
        spectrum: "Narrow - Gram+ including MRSA and VRE",
        coverage: ["MRSA", "VRE", "Streptococcus", "Enterococcus"],
        indications: ["MRSA pneumonia", "VRE infections", "Complicated skin infections"],
        dosing: "600mg PO/IV q12h",
        renalAdjust: false,
        sideEffects: ["Myelosuppression (thrombocytopenia)", "Serotonin syndrome (with SSRIs)", "Optic neuropathy", "Lactic acidosis"],
        cost: "$$$$",
        notes: "100% oral bioavailability"
    },
    "clindamycin": {
        name: "Clindamycin",
        class: "Lincosamides",
        spectrum: "Moderate - Gram+, anaerobes",
        coverage: ["MSSA", "Streptococcus", "Anaerobes", "Some MRSA (community-acquired)"],
        indications: ["Aspiration pneumonia", "Dental infections", "Necrotizing fasciitis", "Toxic shock syndrome", "Bacterial vaginosis"],
        dosing: "300-450mg PO q6-8h or 600-900mg IV q8h",
        renalAdjust: false,
        sideEffects: ["C. diff (high risk)", "Diarrhea", "Rash"],
        cost: "$"
    },
    "trimethoprim-sulfamethoxazole": {
        name: "Trimethoprim-Sulfamethoxazole (Bactrim)",
        class: "Folate Antagonists",
        spectrum: "Broad - Gram+, Gram-, PCP",
        coverage: ["MRSA", "E. coli", "Klebsiella", "Listeria", "Nocardia", "Pneumocystis jirovecii", "Stenotrophomonas"],
        indications: ["UTI", "MRSA skin infections", "PCP (treatment and prophylaxis)", "Nocardiosis", "Toxoplasmosis"],
        dosing: "1-2 DS tabs PO q12h or 5mg/kg (TMP) IV q6-8h",
        renalAdjust: true,
        sideEffects: ["Stevens-Johnson syndrome", "Hyperkalemia", "Bone marrow suppression", "Hypersensitivity"],
        cost: "$"
    },
    "nitrofurantoin": {
        name: "Nitrofurantoin (Macrobid)",
        class: "Nitrofurans",
        spectrum: "Narrow - UTI pathogens only",
        coverage: ["E. coli", "Enterococcus", "Klebsiella", "Staphylococcus saprophyticus"],
        indications: ["Uncomplicated UTI", "UTI prophylaxis"],
        dosing: "100mg PO q12h x 5-7 days",
        renalAdjust: true,
        sideEffects: ["Pulmonary fibrosis (chronic use)", "Neuropathy", "Hemolytic anemia (G6PD deficiency)", "Hepatotoxicity"],
        cost: "$",
        notes: "Contraindicated if CrCl <30, only for lower UTI (bladder concentration)"
    },
    "fosfomycin": {
        name: "Fosfomycin",
        class: "Other",
        spectrum: "Moderate - UTI pathogens",
        coverage: ["E. coli", "Enterococcus", "Some ESBL organisms"],
        indications: ["Uncomplicated UTI (especially in pregnancy)"],
        dosing: "3g PO x 1 dose",
        renalAdjust: false,
        sideEffects: ["Diarrhea", "Nausea", "Headache"],
        cost: "$$"
    },
    "colistin": {
        name: "Colistin (Polymyxin E)",
        class: "Polymyxins",
        spectrum: "Narrow - Gram- including resistant organisms",
        coverage: ["Multidrug-resistant Gram-negatives", "Pseudomonas", "Acinetobacter", "Klebsiella (CRE)"],
        indications: ["Last resort for CRE", "MDR Pseudomonas", "MDR Acinetobacter"],
        dosing: "5mg/kg loading dose, then 2.5mg/kg IV q12h",
        renalAdjust: true,
        sideEffects: ["Nephrotoxicity (common)", "Neurotoxicity", "Paresthesias"],
        cost: "$$$$",
        notes: "Reserve for multidrug-resistant infections only"
    }
};

// Infection-based treatment guidelines
const infectionGuidelines = {
    "uti": {
        name: "Urinary Tract Infection (UTI)",
        types: [
            {
                type: "Uncomplicated Cystitis (Women)",
                firstLine: ["nitrofurantoin", "trimethoprim-sulfamethoxazole", "fosfomycin"],
                secondLine: ["amoxicillin-clavulanate", "ciprofloxacin", "levofloxacin"],
                duration: "3-5 days (7 days for nitrofurantoin)",
                notes: "Check local resistance patterns. Avoid fluoroquinolones if possible."
            },
            {
                type: "Acute Pyelonephritis (Outpatient)",
                firstLine: ["ciprofloxacin", "levofloxacin"],
                secondLine: ["ceftriaxone"],
                duration: "7-14 days",
                notes: "If severe or unable to tolerate PO, admit for IV therapy"
            },
            {
                type: "Complicated UTI / Pyelonephritis (Inpatient)",
                firstLine: ["ceftriaxone", "cefepime", "piperacillin-tazobactam"],
                secondLine: ["meropenem", "ertapenem"],
                duration: "10-14 days",
                notes: "Broaden if risk factors for ESBL or Pseudomonas"
            }
        ]
    },
    "pneumonia-cap": {
        name: "Community-Acquired Pneumonia (CAP)",
        types: [
            {
                type: "Outpatient (No Comorbidities)",
                firstLine: ["amoxicillin", "doxycycline", "azithromycin"],
                secondLine: ["levofloxacin", "moxifloxacin"],
                duration: "5-7 days",
                notes: "Macrolide monotherapy only if local pneumococcal resistance <25%"
            },
            {
                type: "Outpatient (With Comorbidities)",
                firstLine: ["amoxicillin-clavulanate + azithromycin", "levofloxacin", "moxifloxacin"],
                secondLine: ["ceftriaxone + azithromycin"],
                duration: "5-7 days",
                notes: "Comorbidities: COPD, diabetes, heart/liver/renal disease"
            },
            {
                type: "Inpatient (Non-ICU)",
                firstLine: ["ceftriaxone + azithromycin", "levofloxacin"],
                secondLine: ["cefuroxime + azithromycin"],
                duration: "Minimum 5 days, clinically stable x 48-72h",
                notes: "Beta-lactam + macrolide preferred"
            },
            {
                type: "Inpatient (ICU)",
                firstLine: ["ceftriaxone + azithromycin", "cefepime + levofloxacin"],
                secondLine: ["piperacillin-tazobactam + levofloxacin"],
                duration: "7-10 days minimum",
                notes: "Add vancomycin or linezolid if MRSA risk factors"
            }
        ]
    },
    "skin-soft-tissue": {
        name: "Skin & Soft Tissue Infections",
        types: [
            {
                type: "Simple Cellulitis (No Purulence)",
                firstLine: ["cefazolin", "nafcillin", "amoxicillin-clavulanate"],
                secondLine: ["clindamycin", "doxycycline"],
                duration: "5-10 days",
                notes: "Target Streptococcus and MSSA"
            },
            {
                type: "Purulent Cellulitis / Abscess (MRSA Coverage)",
                firstLine: ["trimethoprim-sulfamethoxazole", "doxycycline", "clindamycin"],
                secondLine: ["vancomycin", "linezolid", "daptomycin"],
                duration: "5-10 days",
                notes: "I&D is primary treatment for abscess. Antibiotics if >2cm or systemic signs"
            },
            {
                type: "Necrotizing Fasciitis",
                firstLine: ["piperacillin-tazobactam + vancomycin + clindamycin"],
                secondLine: ["meropenem + vancomycin + clindamycin"],
                duration: "Until debridement complete and clinically improved",
                notes: "SURGICAL EMERGENCY. Clindamycin inhibits toxin production"
            },
            {
                type: "Diabetic Foot Infection (Mild)",
                firstLine: ["amoxicillin-clavulanate", "levofloxacin"],
                secondLine: ["trimethoprim-sulfamethoxazole + metronidazole"],
                duration: "1-2 weeks",
                notes: "Cover Gram+ cocci primarily"
            },
            {
                type: "Diabetic Foot Infection (Severe)",
                firstLine: ["piperacillin-tazobactam", "vancomycin + cefepime"],
                secondLine: ["meropenem + vancomycin"],
                duration: "2-4 weeks",
                notes: "Broad coverage including MRSA, Pseudomonas, anaerobes"
            }
        ]
    },
    "meningitis": {
        name: "Bacterial Meningitis",
        types: [
            {
                type: "Empiric (Age 18-50)",
                firstLine: ["ceftriaxone + vancomycin"],
                secondLine: ["cefepime + vancomycin"],
                duration: "Pathogen-dependent: 7-14 days",
                notes: "Add dexamethasone 10mg IV q6h before or with first antibiotic dose"
            },
            {
                type: "Empiric (Age >50 or Immunocompromised)",
                firstLine: ["ceftriaxone + vancomycin + amoxicillin"],
                secondLine: ["meropenem + vancomycin"],
                duration: "Pathogen-dependent",
                notes: "Amoxicillin covers Listeria. Add acyclovir if HSV suspected"
            },
            {
                type: "Post-neurosurgery",
                firstLine: ["cefepime + vancomycin"],
                secondLine: ["meropenem + vancomycin"],
                duration: "14-21 days",
                notes: "Cover Staphylococcus and Pseudomonas"
            }
        ]
    },
    "intra-abdominal": {
        name: "Intra-abdominal Infections",
        types: [
            {
                type: "Community-Acquired (Mild-Moderate)",
                firstLine: ["amoxicillin-clavulanate", "ertapenem"],
                secondLine: ["ceftriaxone + metronidazole", "moxifloxacin"],
                duration: "4-7 days (source control achieved)",
                notes: "Cover Gram-negatives and anaerobes"
            },
            {
                type: "Community-Acquired (Severe) or Hospital-Acquired",
                firstLine: ["piperacillin-tazobactam", "meropenem"],
                secondLine: ["cefepime + metronidazole"],
                duration: "4-7 days (source control achieved)",
                notes: "Broader coverage including Pseudomonas"
            },
            {
                type: "Peritonitis (Peritoneal Dialysis)",
                firstLine: ["cefazolin + ceftazidime (intraperitoneal)"],
                secondLine: ["vancomycin + ceftazidime"],
                duration: "14-21 days",
                notes: "Consult nephrology for IP dosing"
            }
        ]
    },
    "sepsis": {
        name: "Sepsis / Septic Shock",
        types: [
            {
                type: "Empiric (Community-Onset)",
                firstLine: ["piperacillin-tazobactam", "ceftriaxone + metronidazole"],
                secondLine: ["meropenem"],
                duration: "De-escalate based on cultures; total 7-10 days",
                notes: "Add vancomycin if MRSA risk factors. Give within 1 hour of recognition"
            },
            {
                type: "Empiric (Hospital-Onset / Healthcare-Associated)",
                firstLine: ["piperacillin-tazobactam + vancomycin", "meropenem + vancomycin"],
                secondLine: ["cefepime + metronidazole + vancomycin"],
                duration: "De-escalate based on cultures",
                notes: "Broaden for Pseudomonas and MRSA coverage"
            }
        ]
    },
    "endocarditis": {
        name: "Endocarditis",
        types: [
            {
                type: "Native Valve (Empiric)",
                firstLine: ["nafcillin + gentamicin + ceftriaxone"],
                secondLine: ["vancomycin + gentamicin + ceftriaxone"],
                duration: "4-6 weeks",
                notes: "Consult cardiology and ID. TEE recommended"
            },
            {
                type: "Prosthetic Valve (Empiric)",
                firstLine: ["vancomycin + gentamicin + cefepime"],
                secondLine: ["daptomycin + gentamicin + cefepime"],
                duration: "6 weeks minimum",
                notes: "Higher risk of resistance. Consult ID and cardiac surgery"
            }
        ]
    },
    "osteomyelitis": {
        name: "Osteomyelitis",
        types: [
            {
                type: "Acute (MSSA)",
                firstLine: ["nafcillin", "cefazolin"],
                secondLine: ["clindamycin"],
                duration: "4-6 weeks (IV minimum 2 weeks)",
                notes: "Obtain culture before antibiotics if possible"
            },
            {
                type: "Acute (MRSA)",
                firstLine: ["vancomycin", "daptomycin"],
                secondLine: ["linezolid"],
                duration: "4-6 weeks",
                notes: "Monitor vancomycin troughs, CPK for daptomycin"
            },
            {
                type: "Chronic",
                firstLine: ["Pathogen-specific based on bone culture"],
                secondLine: ["Surgical debridement often required"],
                duration: "6-12 weeks or longer",
                notes: "Consult orthopedics and ID. Consider biofilm coverage"
            }
        ]
    }
};

// Organism-based antibiotic selection
const organismGuidelines = {
    "MSSA": {
        name: "Methicillin-Sensitive Staph aureus (MSSA)",
        firstLine: ["nafcillin", "cefazolin"],
        alternatives: ["clindamycin", "doxycycline"],
        notes: "Nafcillin preferred for serious infections. Cefazolin good alternative with less phlebitis."
    },
    "MRSA": {
        name: "Methicillin-Resistant Staph aureus (MRSA)",
        firstLine: ["vancomycin", "daptomycin"],
        alternatives: ["linezolid", "ceftaroline", "trimethoprim-sulfamethoxazole", "doxycycline"],
        notes: "Vancomycin for most infections. Daptomycin for bacteremia/endocarditis (NOT pneumonia). TMP-SMX/doxy for uncomplicated skin infections."
    },
    "Strep-pneumo": {
        name: "Streptococcus pneumoniae",
        firstLine: ["ceftriaxone", "amoxicillin"],
        alternatives: ["levofloxacin", "vancomycin"],
        notes: "High-dose amoxicillin for PCN-intermediate strains. Ceftriaxone for severe infections or meningitis."
    },
    "Strep-pyogenes": {
        name: "Streptococcus pyogenes (Group A Strep)",
        firstLine: ["penicillin-g", "amoxicillin"],
        alternatives: ["cefazolin", "clindamycin"],
        notes: "No PCN resistance. Add clindamycin for toxic shock or necrotizing fasciitis (toxin suppression)."
    },
    "Enterococcus": {
        name: "Enterococcus (E. faecalis)",
        firstLine: ["amoxicillin", "ampicillin"],
        alternatives: ["vancomycin"],
        notes: "Resistant to cephalosporins. Use ampicillin if susceptible. Vancomycin for PCN-allergic."
    },
    "VRE": {
        name: "Vancomycin-Resistant Enterococcus (VRE)",
        firstLine: ["linezolid", "daptomycin"],
        alternatives: ["quinupristin-dalfopristin"],
        notes: "Linezolid for most infections. Daptomycin for bacteremia. Check sensitivities."
    },
    "E-coli": {
        name: "Escherichia coli",
        firstLine: ["ceftriaxone", "ciprofloxacin"],
        alternatives: ["trimethoprim-sulfamethoxazole", "nitrofurantoin"],
        notes: "High fluoroquinolone resistance in many areas. Nitrofurantoin for uncomplicated UTI only."
    },
    "Klebsiella": {
        name: "Klebsiella pneumoniae",
        firstLine: ["ceftriaxone", "ciprofloxacin"],
        alternatives: ["piperacillin-tazobactam"],
        notes: "Check for ESBL. If ESBL+, use carbapenem."
    },
    "ESBL": {
        name: "Extended-Spectrum Beta-Lactamase (ESBL) Organisms",
        firstLine: ["meropenem", "ertapenem"],
        alternatives: ["piperacillin-tazobactam", "cefepime"],
        notes: "Carbapenems are definitive therapy. Pip-tazo may work for UTI if susceptible."
    },
    "CRE": {
        name: "Carbapenem-Resistant Enterobacteriaceae (CRE)",
        firstLine: ["colistin", "tigecycline"],
        alternatives: ["ceftazidime-avibactam", "meropenem-vaborbactam"],
        notes: "Consult ID immediately. May need combination therapy. Poor prognosis."
    },
    "Pseudomonas": {
        name: "Pseudomonas aeruginosa",
        firstLine: ["piperacillin-tazobactam", "cefepime", "ciprofloxacin"],
        alternatives: ["meropenem", "tobramycin"],
        notes: "Intrinsically resistant to many antibiotics. Consider double coverage for severe infections. Check local susceptibilities."
    },
    "Acinetobacter": {
        name: "Acinetobacter baumannii",
        firstLine: ["meropenem", "colistin"],
        alternatives: ["tigecycline", "ampicillin-sulbactam"],
        notes: "Often multidrug-resistant. Consult ID. May need combination therapy."
    },
    "H-influenzae": {
        name: "Haemophilus influenzae",
        firstLine: ["amoxicillin-clavulanate", "ceftriaxone"],
        alternatives: ["azithromycin", "levofloxacin"],
        notes: "Beta-lactamase production common (30-40%). Avoid amoxicillin alone."
    },
    "Neisseria-gon": {
        name: "Neisseria gonorrhoeae",
        firstLine: ["ceftriaxone"],
        alternatives: ["gentamicin + azithromycin"],
        notes: "Give 500mg IM x1 (1g if >150kg). Increasing resistance worldwide."
    },
    "Neisseria-men": {
        name: "Neisseria meningitidis",
        firstLine: ["ceftriaxone", "penicillin-g"],
        alternatives: ["meropenem"],
        notes: "Treat immediately if suspected. Close contacts need prophylaxis."
    },
    "Listeria": {
        name: "Listeria monocytogenes",
        firstLine: ["amoxicillin", "ampicillin"],
        alternatives: ["trimethoprim-sulfamethoxazole"],
        notes: "Resistant to cephalosporins. Add gentamicin for synergy in meningitis/endocarditis."
    },
    "Anaerobes": {
        name: "Anaerobes (Bacteroides fragilis, etc.)",
        firstLine: ["metronidazole", "amoxicillin-clavulanate"],
        alternatives: ["clindamycin", "piperacillin-tazobactam", "carbapenems"],
        notes: "Metronidazole excellent for B. fragilis. Clindamycin for oral/respiratory anaerobes."
    },
    "C-diff": {
        name: "Clostridioides difficile",
        firstLine: ["vancomycin", "fidaxomicin"],
        alternatives: ["metronidazole"],
        notes: "Vancomycin 125mg PO q6h for 10-14 days (first-line). Metronidazole only if vanc unavailable. Fidaxomicin for recurrent."
    },
    "Mycoplasma": {
        name: "Mycoplasma pneumoniae",
        firstLine: ["azithromycin", "doxycycline"],
        alternatives: ["levofloxacin", "moxifloxacin"],
        notes: "No cell wall - resistant to beta-lactams. Usually self-limited."
    },
    "Legionella": {
        name: "Legionella pneumophila",
        firstLine: ["levofloxacin", "azithromycin"],
        alternatives: ["doxycycline"],
        notes: "Intracellular pathogen. Fluoroquinolones preferred for severe disease."
    },
    "Chlamydia": {
        name: "Chlamydia trachomatis",
        firstLine: ["azithromycin", "doxycycline"],
        alternatives: ["levofloxacin"],
        notes: "Azithromycin 1g x1 or doxycycline 100mg BID x7 days. Treat partners."
    }
};
