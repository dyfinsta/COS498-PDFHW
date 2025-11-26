//routing module
//routing structure:
//GET /  -> Homepage (index.hbs)
//GET /pdfs  -> List all PDFs with metadata (pdfs.hbs)
//GET /pdfs/:filename  -> Serve individual PDF files using sendFile()
//all other routes  -> 404 error page


const express = require("express");
const router = express.Router();

//import custom pdf modules
const { discoverPDFs, PDF_DIR } = require("./pdfDiscovery");
const { validatePDF } = require("./pdfValidator");
const path = require("path");

//import metadata from json file
const metadata = require("../data/metadata.json");

//render homepage
router.get("/", (req, res) => {
    res.render("index");
});

//display all available pdfs with metadata
router.get("/pdfs", (req, res) => {
    //discover all PDFs in the documents folder
    const pdfs = discoverPDFs().map(pdf => ({
        filename: pdf.filename,
        //get title from metadata
        title: metadata[pdf.filename]?.title || pdf.filename,
        //get description from metadata
        description: metadata[pdf.filename]?.description || "No description available."
    }));
    
    //render the PDF listing page
    res.render("pdfs", { pdfs });
});

//serve individual files
router.get("/pdfs/:filename", (req, res) => {
    const file = req.params.filename;

    //validate PDF exists
    if (!validatePDF(file)) {
        return res.status(404).send("PDF not found");
    }

    const pdfPath = path.join(PDF_DIR, file);
    
    //sends the file directly to the client for viewing/downloading
    res.sendFile(pdfPath);
});

//error catching
router.use((req, res) => {
    res.status(404).send("Page not found");
});

module.exports = router;
