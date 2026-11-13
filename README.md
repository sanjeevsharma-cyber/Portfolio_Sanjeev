# Sanjeev Kumar Sharma – Executive Portfolio Website

A responsive, lightweight personal portfolio built with pure **HTML5, CSS3, and Vanilla JavaScript**, ready for direct hosting on **GitHub Pages**.

## Folder Structure

```text
sanjeev-sharma-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile-photo.jpg   <-- Add your headshot here
│   │   └── project-chnm.jpg    <-- Add project screenshot here (optional)
│   └── documents/
│       └── resume.pdf          <-- Add your PDF resume here
└── README.md
```

## Customization Checklist Before Going Live

1. **Add Your Photo:** Save your portrait as `assets/images/profile-photo.jpg` (until added, the site shows an `SKS` initials placeholder).
2. **Add Your Resume:** Save your PDF resume as `assets/documents/resume.pdf` so the **Download Resume** button works.
3. **Update Your Email Address:** Replace `sanjeev.sharma@example.com` with your real email in **3 places**:
   - `index.html` – the visible email text (`id="email-text"`)
   - `index.html` – the `data-email` attribute on the Copy button
   - `js/script.js` – the fallback address in the contact form handler
4. **Check Your Phone Number:** The Contact section shows `+91 966002886` (only 9 digits after +91). Confirm it and fix both the `href="tel:..."` and the visible text in `index.html`.
5. **Optional – Project Link:** Replace the placeholder GitHub link in the Featured Projects card when you have a repository URL.

## How to Host on GitHub Pages (Step-by-Step)

1. Log in to [GitHub](https://github.com) and click **New** to create a repository (e.g., `portfolio` or `<your-username>.github.io`).
2. Upload the **contents** of this folder (`index.html`, `css/`, `js/`, `assets/`, `README.md`) to the root of the repository and commit.
3. Go to your repository **Settings** → **Pages** (left sidebar).
4. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder, then click **Save**.
6. Wait 1–2 minutes and refresh – your live portfolio URL will appear at the top.
