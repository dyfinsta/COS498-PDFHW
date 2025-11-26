const express = require("express");
const router = express.Router();

const { discoverPDFs, PDF_DIR } = require("./pdfDiscovery");
const { validatePDF } = require("./pdfValidator");
const path = require("path");
const metadata = require("../data/metadata.json");

router.get("/", (req, res) => {
    res.render("index");
});

// List PDFs
router.get("/pdfs", (req, res) => {
    const pdfs = discoverPDFs().map(pdf => ({
        filename: pdf.filename,
        title: metadata[pdf.filename]?.title || pdf.filename,
        description: metadata[pdf.filename]?.description || "No description available."
    }));
    res.render("pdfs", { pdfs });
});

// Serve PDF
router.get("/pdfs/:filename", (req, res) => {
    const file = req.params.filename;

    if (!validatePDF(file)) {
        return res.status(404).send("PDF not found");
    }

    const pdfPath = path.join(PDF_DIR, file);
    res.sendFile(pdfPath);
});

router.use((req, res) => {
    res.status(404).send("Page not found");
});

module.exports = router;
