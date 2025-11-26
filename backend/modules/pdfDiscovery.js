//PDF discovery module
const fs = require("fs");
const path = require("path");

// PDF_DIR is the path to the documents folder
const PDF_DIR = path.join(__dirname, "..", "documents");

//scans the documents folder and returns all PDF files
function discoverPDFs() {
    //read directory contents synchronously
    const files = fs.readdirSync(PDF_DIR)
        //filter for PDF files only (case-sensitive)
        .filter(file => file.endsWith(".pdf"))
        //map to objects with filename and full path
        .map(file => ({
            filename: file,
            path: path.join(PDF_DIR, file)
        }));
    
    return files;
}

module.exports = { discoverPDFs, PDF_DIR };
