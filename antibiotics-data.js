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
    // RESPIRATORY INFECTIONS
    "acute-sinusitis": {
        name: "Acute Bacterial Sinusitis",
        types: [
            {
                type: "Acute Bacterial Sinusitis (Adults)",
                firstLine: ["amoxicillin-clavulanate"],
                secondLine: ["doxycycline", "levofloxacin", "moxifloxacin"],
                duration: "5-7 days",
                notes: "Diagnosis: symptoms >10 days or worsening after initial improvement. Most sinusitis is viral - antibiotics only if bacterial criteria met."
            }
        ]
    },
    "chronic-sinusitis": {
        name: "Chronic Sinusitis",
        types: [
            {
                type: "Chronic Sinusitis with Acute Exacerbation",
                firstLine: ["amoxicillin-clavulanate"],
                secondLine: ["levofloxacin", "moxifloxacin"],
                duration: "3-4 weeks",
                notes: "Consider fungal sinusitis in immunocompromised. May need sinus culture for resistant organisms. ENT referral for recurrent cases."
            }
        ]
    },
    "pharyngitis-strep": {
        name: "Streptococcal Pharyngitis (Strep Throat)",
        types: [
            {
                type: "Strep Pharyngitis",
                firstLine: ["penicillin-g", "amoxicillin"],
                secondLine: ["cefuroxime", "azithromycin", "clindamycin"],
                duration: "10 days (5 days for azithromycin)",
                notes: "Confirm with rapid strep or culture. Prevents rheumatic fever and suppurative complications."
            }
        ]
    },
    "epiglottitis": {
        name: "Epiglottitis",
        types: [
            {
                type: "Acute Epiglottitis",
                firstLine: ["ceftriaxone", "cefuroxime"],
                secondLine: ["ampicillin-sulbactam"],
                duration: "7-10 days",
                notes: "EMERGENCY - secure airway first. Do NOT examine throat. Usually H. influenzae or Strep."
            }
        ]
    },

    // URINARY TRACT INFECTIONS
    "uti-simple": {
        name: "Uncomplicated Cystitis",
        types: [
            {
                type: "Uncomplicated Cystitis (Women)",
                firstLine: ["nitrofurantoin", "trimethoprim-sulfamethoxazole", "fosfomycin"],
                secondLine: ["amoxicillin-clavulanate", "cefuroxime"],
                duration: "3-5 days (7 days for nitrofurantoin, 1 dose for fosfomycin)",
                notes: "Check local resistance patterns. Avoid fluoroquinolones if possible. Fosfomycin is single-dose therapy."
            }
        ]
    },
    "uti-men": {
        name: "UTI in Men (Complicated)",
        types: [
            {
                type: "UTI in Men",
                firstLine: ["ciprofloxacin", "levofloxacin", "trimethoprim-sulfamethoxazole"],
                secondLine: ["ceftriaxone"],
                duration: "7-14 days",
                notes: "Consider prostatitis. Always considered complicated. Rule out structural abnormalities."
            }
        ]
    },
    "pyelonephritis": {
        name: "Acute Pyelonephritis",
        types: [
            {
                type: "Acute Pyelonephritis (Outpatient)",
                firstLine: ["ciprofloxacin", "levofloxacin"],
                secondLine: ["ceftriaxone"],
                duration: "7-14 days",
                notes: "If severe, vomiting, or unable to tolerate PO, admit for IV therapy"
            },
            {
                type: "Acute Pyelonephritis (Inpatient)",
                firstLine: ["ceftriaxone", "cefepime", "piperacillin-tazobactam"],
                secondLine: ["meropenem", "ertapenem"],
                duration: "10-14 days total (can switch to PO when improving)",
                notes: "Broaden if risk factors for ESBL or Pseudomonas. Blood cultures recommended."
            }
        ]
    },
    "prostatitis": {
        name: "Prostatitis",
        types: [
            {
                type: "Acute Bacterial Prostatitis",
                firstLine: ["ciprofloxacin", "levofloxacin"],
                secondLine: ["trimethoprim-sulfamethoxazole"],
                duration: "4-6 weeks",
                notes: "Prolonged therapy needed for prostatic penetration. If septic, admit for IV therapy initially."
            }
        ]
    },

    // PNEUMONIA
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
    },

    // BITE WOUNDS
    "dog-bite": {
        name: "Dog Bite",
        types: [
            {
                type: "Dog Bite Wound",
                firstLine: ["amoxicillin-clavulanate"],
                secondLine: ["doxycycline + metronidazole", "trimethoprim-sulfamethoxazole + metronidazole"],
                duration: "3-5 days (prophylaxis) or 7-14 days (treatment)",
                notes: "Covers Pasteurella, Staph, Strep, anaerobes. Irrigate wound. Check rabies/tetanus status. Prophylaxis if: hand/face bite, deep puncture, immunocompromised, or >8h old."
            }
        ]
    },
    "cat-bite": {
        name: "Cat Bite",
        types: [
            {
                type: "Cat Bite Wound",
                firstLine: ["amoxicillin-clavulanate"],
                secondLine: ["doxycycline + metronidazole", "moxifloxacin"],
                duration: "3-5 days (prophylaxis) or 7-14 days (treatment)",
                notes: "HIGH RISK for infection (50-80%). Pasteurella multocida most common. Deep puncture wounds. Almost always prophylax. Check rabies/tetanus."
            }
        ]
    },
    "human-bite": {
        name: "Human Bite",
        types: [
            {
                type: "Human Bite (Including Clenched Fist Injury)",
                firstLine: ["amoxicillin-clavulanate"],
                secondLine: ["piperacillin-tazobactam", "ertapenem", "ceftriaxone + metronidazole"],
                duration: "5 days (prophylaxis) or 10-14 days (treatment)",
                notes: "Mixed aerobic/anaerobic oral flora including Eikenella. Clenched fist injuries are high risk. Check HIV/Hep B/C status of biter if possible. Hand surgery consult for joint involvement."
            }
        ]
    },

    // DENTAL INFECTIONS
    "dental-abscess": {
        name: "Dental Abscess",
        types: [
            {
                type: "Dental Abscess / Periapical Abscess",
                firstLine: ["amoxicillin", "amoxicillin-clavulanate"],
                secondLine: ["clindamycin", "metronidazole + penicillin-g"],
                duration: "7-10 days",
                notes: "I&D and dental referral primary treatment. Covers Strep viridans and oral anaerobes. Clindamycin for PCN-allergic."
            }
        ]
    },
    "ludwig-angina": {
        name: "Ludwig's Angina",
        types: [
            {
                type: "Ludwig's Angina (Severe Dental Infection)",
                firstLine: ["piperacillin-tazobactam", "ampicillin-sulbactam"],
                secondLine: ["clindamycin + ceftriaxone"],
                duration: "Until resolved, then complete 2-3 weeks",
                notes: "EMERGENCY - life-threatening. Secure airway (may need surgical). Bilateral submandibular/sublingual space infection. Dental source. Admit ICU."
            }
        ]
    },

    // JOINT AND BONE INFECTIONS
    "septic-arthritis": {
        name: "Septic Arthritis",
        types: [
            {
                type: "Septic Arthritis (Non-Gonococcal)",
                firstLine: ["nafcillin", "cefazolin", "vancomycin"],
                secondLine: ["daptomycin"],
                duration: "3-4 weeks (2 weeks IV minimum)",
                notes: "Joint aspiration/drainage required. Usually Staph aureus. Vancomycin if MRSA risk or PCN-allergic. Orthopedics consult."
            },
            {
                type: "Gonococcal Arthritis",
                firstLine: ["ceftriaxone"],
                secondLine: ["cefotaxime"],
                duration: "7-14 days total (switch to PO after 24-48h improvement)",
                notes: "Disseminated gonococcal infection. Test for chlamydia. Treat partners. Can switch to cefixime or ciprofloxacin PO if susceptible."
            }
        ]
    },

    // HOSPITAL-ACQUIRED INFECTIONS
    "hap-vap": {
        name: "Hospital-Acquired Pneumonia (HAP) / Ventilator-Associated Pneumonia (VAP)",
        types: [
            {
                type: "HAP/VAP (No Risk Factors for MDR)",
                firstLine: ["piperacillin-tazobactam", "cefepime", "levofloxacin"],
                secondLine: ["meropenem"],
                duration: "7 days (may extend if slow response)",
                notes: "Cover Pseudomonas and MRSA if risk factors present. De-escalate based on cultures."
            },
            {
                type: "HAP/VAP (MDR Risk Factors)",
                firstLine: ["piperacillin-tazobactam + vancomycin", "cefepime + vancomycin + tobramycin"],
                secondLine: ["meropenem + vancomycin + aminoglycoside"],
                duration: "7-14 days",
                notes: "MDR risk: prior IV antibiotics within 90 days, >5 days hospitalization, high local MDR rates. Double Pseudomonas coverage. MRSA coverage."
            }
        ]
    },
    "aspiration-pneumonia": {
        name: "Aspiration Pneumonia",
        types: [
            {
                type: "Aspiration Pneumonia (Community)",
                firstLine: ["amoxicillin-clavulanate", "ampicillin-sulbactam"],
                secondLine: ["clindamycin + ceftriaxone", "moxifloxacin"],
                duration: "7-10 days",
                notes: "Cover oral anaerobes. Risk factors: dysphagia, altered consciousness, GERD. Consider barium swallow study."
            },
            {
                type: "Aspiration Pneumonia (Hospital/Nursing Home)",
                firstLine: ["piperacillin-tazobactam", "cefepime + metronidazole"],
                secondLine: ["meropenem"],
                duration: "7-14 days",
                notes: "Broader coverage for hospital flora including MRSA and Pseudomonas risk."
            }
        ]
    },
    "c-diff": {
        name: "Clostridioides difficile Infection (C. diff)",
        types: [
            {
                type: "Initial Episode (Non-Severe)",
                firstLine: ["vancomycin"],
                secondLine: ["fidaxomicin"],
                duration: "10 days",
                notes: "Vancomycin 125mg PO QID. Fidaxomicin preferred for recurrent. Metronidazole only if vanc unavailable. Stop offending antibiotics if possible."
            },
            {
                type: "Severe C. diff (WBC >15k, Cr >1.5x baseline)",
                firstLine: ["vancomycin"],
                secondLine: ["vancomycin + metronidazole"],
                duration: "10 days",
                notes: "Vancomycin 125mg PO QID. Add IV metronidazole if ileus. Surgery consult if fulminant (toxic megacolon, perforation)."
            },
            {
                type: "Recurrent C. diff",
                firstLine: ["fidaxomicin", "vancomycin"],
                secondLine: ["vancomycin taper", "fecal microbiota transplant"],
                duration: "Varies",
                notes: "Fidaxomicin preferred. Consider FMT after 2nd recurrence. Vanc pulse/taper regimen option."
            }
        ]
    },

    // SEXUALLY TRANSMITTED INFECTIONS
    "gonorrhea": {
        name: "Gonorrhea",
        types: [
            {
                type: "Uncomplicated Gonorrhea (Urethral/Cervical/Rectal)",
                firstLine: ["ceftriaxone"],
                secondLine: ["gentamicin + azithromycin"],
                duration: "Single dose",
                notes: "Ceftriaxone 500mg IM x1 (1g if >150kg). Always test and treat for chlamydia. Test of cure in 7-14 days if pharyngeal. Treat partners."
            },
            {
                type: "Disseminated Gonococcal Infection",
                firstLine: ["ceftriaxone"],
                secondLine: ["cefotaxime"],
                duration: "7 days total",
                notes: "Ceftriaxone 1-2g IV daily. Can switch to PO after 24-48h improvement if susceptible."
            }
        ]
    },
    "chlamydia": {
        name: "Chlamydia",
        types: [
            {
                type: "Uncomplicated Chlamydia (Urethral/Cervical/Rectal)",
                firstLine: ["doxycycline", "azithromycin"],
                secondLine: ["levofloxacin"],
                duration: "7 days (doxy) or single dose (azithro 1g)",
                notes: "Doxycycline 100mg BID x7 days preferred. Test for gonorrhea. Abstain until 7 days after treatment. Treat partners."
            }
        ]
    },
    "pid": {
        name: "Pelvic Inflammatory Disease (PID)",
        types: [
            {
                type: "PID (Outpatient)",
                firstLine: ["ceftriaxone + doxycycline + metronidazole"],
                secondLine: ["cefoxitin + doxycycline + metronidazole"],
                duration: "14 days (doxy + metronidazole), single dose ceftriaxone",
                notes: "Ceftriaxone 500mg IM x1, then doxy 100mg BID + metronidazole 500mg BID x14 days. Low threshold to admit if severe."
            },
            {
                type: "PID (Inpatient)",
                firstLine: ["cefoxitin + doxycycline", "clindamycin + gentamicin"],
                secondLine: ["piperacillin-tazobactam + doxycycline"],
                duration: "Minimum 24h after clinical improvement, then switch to PO for 14 days total",
                notes: "Admit if: pregnant, tubo-ovarian abscess, unable to tolerate PO, severe symptoms, or failed outpatient therapy."
            }
        ]
    },
    "syphilis": {
        name: "Syphilis",
        types: [
            {
                type: "Primary/Secondary/Early Latent Syphilis",
                firstLine: ["penicillin-g"],
                secondLine: ["doxycycline", "ceftriaxone"],
                duration: "Single dose (benzathine PCN 2.4 million units IM)",
                notes: "Benzathine penicillin G 2.4 million units IM x1. Doxy 100mg BID x14 days if PCN-allergic (not pregnant). Jarisch-Herxheimer reaction possible."
            },
            {
                type: "Neurosyphilis",
                firstLine: ["penicillin-g"],
                secondLine: ["ceftriaxone"],
                duration: "10-14 days",
                notes: "Aqueous penicillin G 18-24 million units daily continuous or divided q4h IV. LP to confirm CSF clearance."
            }
        ]
    },

    // TICK-BORNE ILLNESSES
    "lyme-disease": {
        name: "Lyme Disease",
        types: [
            {
                type: "Early Localized Lyme (Erythema Migrans)",
                firstLine: ["doxycycline", "amoxicillin"],
                secondLine: ["cefuroxime"],
                duration: "10-14 days (doxy) or 14-21 days (amox)",
                notes: "Doxycycline 100mg BID preferred. Single dose doxy within 72h of tick bite for prophylaxis in endemic areas."
            },
            {
                type: "Lyme Carditis",
                firstLine: ["ceftriaxone"],
                secondLine: ["penicillin-g"],
                duration: "14-21 days",
                notes: "Admit if high-degree AV block or symptoms. May need temporary pacemaker. Switch to PO when PR interval normalizing."
            },
            {
                type: "Lyme Meningitis/Neuroborreliosis",
                firstLine: ["ceftriaxone"],
                secondLine: ["penicillin-g", "cefotaxime"],
                duration: "14-28 days",
                notes: "Ceftriaxone 2g IV daily. LP shows lymphocytic pleocytosis. Bell's palsy from Lyme can be treated PO."
            }
        ]
    },
    "rmsf": {
        name: "Rocky Mountain Spotted Fever (RMSF)",
        types: [
            {
                type: "Rocky Mountain Spotted Fever",
                firstLine: ["doxycycline"],
                secondLine: ["chloramphenicol"],
                duration: "7 days or until 3 days after fever resolves",
                notes: "Doxycycline 100mg BID. Empiric treatment if suspected - don't wait for confirmatory testing. Classic triad: fever, headache, rash (starts peripherally). Can be fatal if untreated."
            }
        ]
    },

    // GI INFECTIONS
    "infectious-diarrhea": {
        name: "Infectious Diarrhea (Bacterial)",
        types: [
            {
                type: "Traveler's Diarrhea (Empiric)",
                firstLine: ["azithromycin", "ciprofloxacin", "rifaximin"],
                secondLine: ["levofloxacin"],
                duration: "1-3 days",
                notes: "Usually self-limited. Antibiotics if severe or bloody. Azithromycin preferred in SE Asia (quinolone resistance). Loperamide if non-inflammatory."
            },
            {
                type: "Salmonella/Shigella",
                firstLine: ["azithromycin", "ciprofloxacin"],
                secondLine: ["ceftriaxone"],
                duration: "3-7 days",
                notes: "Treat if severe, bloody, or immunocompromised. Increasing quinolone resistance. Don't use antimotility agents with bloody diarrhea."
            },
            {
                type: "Campylobacter",
                firstLine: ["azithromycin"],
                secondLine: ["ciprofloxacin"],
                duration: "3-5 days",
                notes: "Treat if severe or persistent. High quinolone resistance. Associated with Guillain-Barré syndrome."
            }
        ]
    },
    "h-pylori": {
        name: "Helicobacter pylori",
        types: [
            {
                type: "H. pylori Eradication",
                firstLine: ["amoxicillin", "clarithromycin"],
                secondLine: ["metronidazole", "levofloxacin"],
                duration: "14 days",
                notes: "Triple therapy: PPI + amoxicillin 1g BID + clarithromycin 500mg BID. Quadruple therapy if high clarithro resistance. Confirm eradication."
            }
        ]
    },

    // OTHER SPECIFIC INFECTIONS
    "surgical-site-infection": {
        name: "Surgical Site Infection (SSI)",
        types: [
            {
                type: "Superficial SSI",
                firstLine: ["cefazolin", "nafcillin"],
                secondLine: ["vancomycin", "doxycycline"],
                duration: "5-7 days",
                notes: "Usually Staph aureus or Strep. Open wound, remove sutures. Add MRSA coverage if risk factors. Culture wound."
            },
            {
                type: "Deep/Organ Space SSI",
                firstLine: ["vancomycin + piperacillin-tazobactam", "vancomycin + cefepime"],
                secondLine: ["daptomycin + meropenem"],
                duration: "Varies, often weeks",
                notes: "Depends on surgery type. Broad coverage until cultures available. May need surgical washout. Consider biofilm organisms."
            }
        ]
    },
    "febrile-neutropenia": {
        name: "Febrile Neutropenia",
        types: [
            {
                type: "Febrile Neutropenia (High Risk)",
                firstLine: ["cefepime", "piperacillin-tazobactam"],
                secondLine: ["meropenem"],
                duration: "Until ANC >500 and afebrile x24-48h",
                notes: "High risk: ANC <100, mucositis, prolonged neutropenia expected. Add vancomycin if hypotensive, skin infection, or positive blood cultures. Add antifungal if fever >4-7 days."
            }
        ]
    },
    "uti-catheter": {
        name: "Catheter-Associated UTI (CAUTI)",
        types: [
            {
                type: "Catheter-Associated UTI",
                firstLine: ["ceftriaxone", "ciprofloxacin", "levofloxacin"],
                secondLine: ["piperacillin-tazobactam", "cefepime"],
                duration: "7 days (men may need 10-14 days)",
                notes: "Remove or replace catheter if possible. Broader coverage if recent hospitalization or antibiotics. Consider ESBL risk."
            }
        ]
    },
    "mastitis": {
        name: "Mastitis (Lactational)",
        types: [
            {
                type: "Lactational Mastitis",
                firstLine: ["cefazolin", "dicloxacillin"],
                secondLine: ["clindamycin", "trimethoprim-sulfamethoxazole"],
                duration: "10-14 days",
                notes: "Usually Staph aureus. Continue breastfeeding/pumping. Add MRSA coverage if abscess or not improving in 48-72h. I&D if abscess."
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
