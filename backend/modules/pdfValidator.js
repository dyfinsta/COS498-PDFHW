//PDF validation module
const fs = require("fs");
const path = require("path");
const { PDF_DIR } = require("./pdfDiscovery");


// validatePDF() - Validates that a PDF file is safe to serve 
function validatePDF(filename) {
    //construct the full path to the requested file
    const target = path.join(PDF_DIR, filename);

    //ensure the path is within the PDF_DIR
    if (!target.startsWith(PDF_DIR)) return false;

    //returns false if file is not found
    return fs.existsSync(target);
}

module.exports = { validatePDF };
