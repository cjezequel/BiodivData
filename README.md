# Personal academic website (Projects & Teaching)

A simple, all-Markdown website built for GitHub Pages (using Jekyll), with two
main pages — **Projects** and **Teaching** — a lightweight password gate, and
a Teaching page with four downloadable file categories (Syllabus, Slides,
R scripts, Exercises) plus a form to submit a file by email.

## 1. Put this on GitHub

1. Create a new repository on GitHub.
   - For a personal site at `https://cjezequel.github.io`, name the repo
     exactly `cjezequel.github.io`.
   - For a project site at `https://cjezequel.github.io/BiodivData`, name
     it whatever you like (e.g. `teaching-site`).
2. Upload all the files in this folder to that repository (drag-and-drop on
   github.com, or with `git`):
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/cjezequel/BiodivData.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**, and under "Build and
   deployment" choose **Deploy from a branch**, branch `main`, folder `/`
   (root). Save.
4. After a minute or two your site will be live at the URL shown on that
   page.

No build step is needed on your side — GitHub Pages runs Jekyll
automatically and converts the `.md` files to HTML.

## 2. Edit the content

Everything is plain Markdown:

- `index.md` — home page
- `projects.md` — Projects page
- `teaching.md` — Teaching page ("Biodiversity Data Courses")
- `_config.yml` — site title/description
- `_layouts/default.html` — shared page layout (navigation bar + password
  gate + footer) — only edit this if you want to change the site structure
- `assets/css/style.css` — colors/spacing
- `assets/js/password.js` — the password itself

## 3. Change the password

Open `assets/js/password.js` and edit this line:

```js
const SITE_PASSWORD = "biodiversity2026";
```

⚠️ **Important limitation:** this is a simple *client-side* password gate.
It stops casual visitors from seeing your content, but anyone who views the
page source can read the password in that file. It is **not** real
security — don't use it to protect confidential material. If you need
proper access control, GitHub Pages isn't the right tool (you'd need a
private repository + a service like Netlify with password protection, or a
proper backend).

## 4. Add your own downloadable files

Each category has its own folder under `assets/files/`:

```
assets/files/syllabus/
assets/files/slides/
assets/files/rscripts/
assets/files/exercises/
```

To add a file:
1. Drop the file (PDF, PPTX, R script, etc.) into the right folder.
2. In `teaching.md`, add a new `<li>` line in the matching section, e.g.:
   ```html
   <li>📄 <a href="{{ '/assets/files/syllabus/my-file.pdf' | relative_url }}" download>My file title</a></li>
   ```
3. Commit and push — the site updates automatically.

The placeholder files currently in each folder are just examples; delete
them once you've added your real materials.

## 5. Set up the "submit a file by email" form

A static GitHub Pages site cannot send emails or handle file uploads by
itself, so the submission form uses **[Formspree](https://formspree.io)**
(free plan: 50 submissions/month), which receives the form (with the
attached file) and forwards it to your inbox.

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy the form endpoint, e.g.
   `https://formspree.io/f/abcdwxyz`.
3. In `teaching.md`, replace `YOUR_FORM_ID` in the `<form action="...">`
   line with your real ID.
4. Confirm the form by sending yourself a test submission — Formspree will
   ask you to verify your email the first time.

**Simplest alternative (no sign-up):** just keep/use the
`mailto:you@example.com` link at the bottom of the page. It opens the
visitor's email client with a pre-filled subject — they then attach the
file manually and hit send. This is less convenient but requires zero
setup. Replace `you@example.com` with your real address in `teaching.md`.

## 6. Customize navigation, name, colors

- Site title: edit `title:` in `_config.yml`.
- Navigation links: edit the `<nav class="site-nav">` block in
  `_layouts/default.html`.
- Colors/fonts: edit `assets/css/style.css`.
