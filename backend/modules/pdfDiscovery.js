const fs = require("fs");
const path = require("path");

const PDF_DIR = path.join(__dirname, "..", "documents");

function discoverPDFs() {
    const files = fs.readdirSync(PDF_DIR)
        .filter(file => file.endsWith(".pdf"))
        .map(file => ({
            filename: file,
            path: path.join(PDF_DIR, file)
        }));
    return files;
}

module.exports = { discoverPDFs, PDF_DIR };
