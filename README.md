# Salon Dulal — Personal Portfolio

Professional cybersecurity-focused portfolio for Salon Dulal. Static site (HTML/CSS/JS) designed for easy deployment and custom-domain publishing.

## Highlights
- **Identity:** Cybersecurity Graduate (primary) with interests in Software Development, AI & Intelligent Systems
- **Design:** Dark premium interface, exact specified palette, Inter + JetBrains Mono, subtle animations, responsive
- **Sections:** Hero (photo), About (with `profile.sh` terminal), Cybersecurity, Projects, Skills, Experience, Education, Research, Contact

## Structure
- `index.html` — single-page site
- `css/style.css` — styles and responsive layout
- `js/main.js` — navigation, active section highlighting, scroll reveal
- `pic/` — profile photograph (`ChatGPT Image Aug 21, 2026, 03_15_35 AM.jpg.jpeg`)
- `assets/` — place `SALON_DULAL_CV.pdf` here to enable Download CV buttons

## Run locally
Open `index.html` in a browser, or serve:
```powershell
cd portfolio
python -m http.server 8000
# http://localhost:8000
```

## Content notes
- Content reflects provided profile and verified public GitHub projects (`https://github.com/salondulal`).
- Project screenshots hotlinked from public repos where available (Executable Ethics Engine, Environmental Scene Classification). Cybersecurity labs use a representative visual and clearly state controlled laboratory/learning context.
- No invented results, certifications, employment claims, or repository links. Chef/Sous Chef employer names and dates marked unverified.
- Phone number not published. Contact form omitted; email is the preferred contact method (can be added with Formspree/Netlify Forms when deployed).

## Publish later
Deploy `portfolio/` to GitHub Pages, Netlify, Vercel, or Cloudflare Pages and connect a custom domain via DNS when purchased.
