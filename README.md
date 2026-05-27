# Static Website

Basic static website starter — plain HTML, CSS, and JavaScript. No build step.

## Structure

```
.
├── index.html          # Home
├── about.html
├── contact.html
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── images/
```

## Local preview

Any static server works. A couple of options:

```bash
# Python (built-in)
python3 -m http.server 8000

# Node (no install)
npx serve .
```

Then open http://localhost:8000.
