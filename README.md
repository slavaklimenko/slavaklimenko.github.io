# Viacheslav Klimenko - GitHub Pages website

This is a responsive academic homepage built with plain HTML, CSS, and JavaScript. It has no framework, package manager, or build step.

The biography, research themes, appointments, education, observing programs, software description, and selected publications were prepared from the supplied CV and research summary. Publication author lists and DOI links were checked against current journal/preprint records.

## Privacy note

The original LaTeX files are **not included in the public site package**. The CV contains phone numbers, immigration information, and referees' private contact details. The website instead presents a public academic summary and offers an email link for requesting the full CV.

## Publish on GitHub Pages

The repository should be named exactly:

```text
slavaklimenko.github.io
```

1. Upload **the contents of this folder** to the root of that repository. `index.html` must appear at the top level.
2. Commit the files to the `main` branch.
3. Open **Settings -> Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. Save and wait for the Pages deployment to finish.
6. Open `https://slavaklimenko.github.io/`.

## Replace the profile illustration

Add a square photograph as:

```text
assets/images/profile.jpg
```

Then replace this line in `index.html`:

```html
<img src="assets/images/profile-placeholder.svg" alt="Abstract profile illustration for Viacheslav Klimenko">
```

with:

```html
<img src="assets/images/profile.jpg" alt="Portrait of Viacheslav Klimenko">
```

A square image at least 800 x 800 pixels is recommended.

## Preview locally

Run this command inside the site folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Main files

```text
.
├── index.html
├── 404.html
├── .nojekyll
├── README.md
├── LICENSE
└── assets
    ├── css/style.css
    ├── js/main.js
    └── images
        ├── favicon.svg
        └── profile-placeholder.svg
```

## Before publishing

Review appointment dates, publication counts, current-program descriptions, and the institutional address whenever the CV is updated. Add only profile or repository links that you have verified.

## License

The site code and original placeholder artwork are available under the MIT License.
