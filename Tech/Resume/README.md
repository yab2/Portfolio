# Yeabsira Dires - IT Technician Resume

This folder contains the LaTeX source code for an ATS-friendly, one-page resume optimized for IT Technician and System Administrator roles.

## Files

- `yeabsira_dires_resume.tex` - LaTeX source file
- `yeabsira_dires_resume.pdf` - Compiled PDF (generated after compilation)

## Features

- **ATS-Friendly**: No tables, standard headers, machine-readable fonts
- **F-Shaped Reading Pattern**: Important information positioned for optimal readability
- **Results-First Bullet Points**: Quantifiable metrics at the beginning of each bullet
- **One-Page Format**: Concise, focused content for quick scanning
- **Professional Certifications**: All 6 IT certifications prominently displayed

## Compilation Instructions

### Option 1: Online (Overleaf) - Easiest Method

1. Go to [Overleaf](https://www.overleaf.com)
2. Create a free account or log in
3. Click "New Project" → "Upload Project"
4. Upload the `yeabsira_dires_resume.tex` file
5. Click "Recompile" to generate PDF
6. Download the PDF using the "Download PDF" button

### Option 2: Windows (MiKTeX)

1. **Install MiKTeX**:
   - Download from [https://miktex.org/download](https://miktex.org/download)
   - Run installer and follow prompts
   - Choose "Install missing packages on-the-fly: Yes"

2. **Compile Resume**:
   ```bash
   cd "Tech/Resume"
   pdflatex yeabsira_dires_resume.tex
   ```

3. **Output**: `yeabsira_dires_resume.pdf` will be generated

### Option 3: Linux (TeX Live)

1. **Install TeX Live**:
   ```bash
   sudo apt-get update
   sudo apt-get install texlive-latex-base texlive-latex-extra
   ```

2. **Compile Resume**:
   ```bash
   cd Tech/Resume
   pdflatex yeabsira_dires_resume.tex
   ```

3. **Output**: `yeabsira_dires_resume.pdf` will be generated

### Option 4: macOS (MacTeX)

1. **Install MacTeX**:
   - Download from [https://www.tug.org/mactex/](https://www.tug.org/mactex/)
   - Run installer (large download ~4GB)

2. **Compile Resume**:
   ```bash
   cd Tech/Resume
   pdflatex yeabsira_dires_resume.tex
   ```

3. **Output**: `yeabsira_dires_resume.pdf` will be generated

## Updating the Resume

1. Open `yeabsira_dires_resume.tex` in any text editor
2. Modify content as needed
3. Recompile using one of the methods above
4. Copy the generated PDF to `ethereal-vision-folio/public/resume/` for website download

## ATS Testing

After compiling, test ATS compatibility:

1. Open PDF in Adobe Acrobat Reader
2. Select all text (Ctrl+A) and copy
3. Paste into Notepad/TextEdit
4. Verify all content is readable and properly formatted
5. No garbled text or missing sections = ATS-friendly ✓

## Common Issues

**Issue**: "pdflatex: command not found"
**Solution**: LaTeX distribution not installed or not in PATH. Reinstall and ensure PATH is set.

**Issue**: Missing packages error
**Solution**: MiKTeX will auto-install. For TeX Live: `sudo apt-get install texlive-latex-extra`

**Issue**: PDF has wrong fonts
**Solution**: Delete auxiliary files (`.aux`, `.log`) and recompile with `pdflatex` twice.

## Portfolio Integration

To add the compiled PDF to your portfolio website:

```bash
# After compiling to PDF
cp yeabsira_dires_resume.pdf ../../ethereal-vision-folio/public/resume/
```

The resume download button in the portfolio will link to `/resume/yeabsira_dires_resume.pdf`.
