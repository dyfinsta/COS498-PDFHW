# COS 498 PDF Serving Homework

## Project Structure

```
backend/
├── server.js                 # Main Express server
├── modules/
│   ├── router.js            # Custom routing module
│   ├── pdfDiscovery.js      # Discovers PDFs in documents folder
│   └── pdfValidator.js      # Validates PDF requests (security)
├── views/
│   ├── layout.hbs           # Layout template
│   ├── index.hbs            # Homepage
│   └── pdfs.hbs             # PDF listing page
├── documents/                # PDF storage
└── data/
    └── metadata.json        # PDF metadata
```

## Custom Modules

### Routing Module (`modules/router.js`)
**Function**: Handles URL routing without static middleware

**Routes**
- / - Homepage
- /pdfs - Lists all PDFs with metadata
- /pdfs/:filename - Serve pdf using sendfile()

### PDF Discovery Module
**Function**: Finds all PDF files in documents folder

### PDF Validation Module
**Function**: Validates PDF requests

## Metadata Storage
**Location** `backend/data/metadata.json`

**Format**
```json
{
  "filename.pdf": {
    "title": "Display Title",
    "description": "PDF description"
  }
}
```
**Site Link**: `https://bankofarmenia.net`