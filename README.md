# Slava Klimenko — GitHub Pages starter

A responsive, single-page academic website built with plain HTML, CSS, and JavaScript. It needs no package manager, build system, or framework.

## Publish it on GitHub Pages

Your repository should be named:

```text
slavaklimenko.github.io
```

1. Download and unzip this starter.
2. Upload **the contents of the folder** to the root of the repository. `index.html` must be visible at the top level, not inside another folder.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
6. Save, then visit `https://slavaklimenko.github.io/` after GitHub finishes the deployment.

## Customize the site

Open `index.html` and search for `EDIT`. Those comments mark the main items to replace:

- biography and research description;
- institution and location;
- email address;
- GitHub, ORCID, ADS, and Scholar links;
- research projects and publication entries.

### Replace the profile image

1. Put your photo at `assets/img/profile.jpg`.
2. In `index.html`, replace:

```html
<img class="portrait" src="assets/img/profile-placeholder.svg" ...>
```

with:

```html
<img class="portrait" src="assets/img/profile.jpg" alt="Portrait of Slava Klimenko">
```

A square image at least 600 × 600 pixels works best.

### Change colors

Edit the custom properties at the top of `assets/css/styles.css`, especially:

```css
--navy-900: #0b2138;
--teal-600: #1b8c88;
--sand-100: #f6f2ea;
```

## Preview locally

From this folder, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/` in a browser.

## File structure

```text
.
├── index.html
├── 404.html
├── .nojekyll
├── README.md
├── LICENSE
└── assets
    ├── css/styles.css
    ├── js/main.js
    └── img
        ├── agn-jet.svg
        ├── dust-extinction.svg
        ├── favicon.svg
        ├── profile-placeholder.svg
        └── spectrum.svg
```

## Troubleshooting a GitHub Pages 404

Check that:

- the repository is named exactly `slavaklimenko.github.io`;
- `index.html` is in the publishing root;
- Pages is set to `main` and `/(root)`;
- the latest Pages deployment in the **Actions** tab completed successfully;
- the site URL is `https://slavaklimenko.github.io/`.

## License

The starter code and original SVG illustrations are available under the MIT License.
