const fs = require("fs");
const path = require("path");
const { PDF_DIR } = require("./pdfDiscovery");

function validatePDF(filename) {
    const target = path.join(PDF_DIR, filename);

    if (!target.startsWith(PDF_DIR)) return false;

    return fs.existsSync(target);
}

module.exports = { validatePDF };
