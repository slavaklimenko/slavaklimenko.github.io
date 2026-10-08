# Viacheslav Klimenko — academic website

Plain HTML/CSS/JS, no build step. Hosted on GitHub Pages at https://slavaklimenko.github.io/

## Pages

| File | Page |
|---|---|
| `index.html` | Welcome — bio, photo, key numbers, research interests, facilities |
| `research.html` | Research themes, observing programs, selected publications |
| `software.html` | Software / code |
| `cv.html` | CV & Info — appointments, education, teaching, mentoring, awards, service, contact |
| `life.html` | Life — family, climbing, orienteering, running photo gallery |
| `projects/*.html` | "Read more" pages for three research themes |

The sidebar menu is repeated in each page. If you add a page, copy the `<nav class="site-nav">` block to all pages.

## To do before publishing

1. **PDF** — `assets/docs/Klimenko_CV.pdf` (public version: work-authorization lines and References block removed).
   To update, replace the file keeping the same name.
   Never upload a CV that still contains the referees' contacts or visa details.
2. **Life photos** — stored in `assets/images/life/` (resized to 1600 px). To add one, put the JPG there and copy a
   `<figure class="photo">` block in `life.html`; `data-cat` sets the filter (climbing, mountains, hiking, orienteering, water).
   iPhone HEIC/HEIF photos must be converted to JPG first.
3. **Check the numbers** — the publication count (25 / 14 first-author), courses, and students in `index.html` and `cv.html`.

## Publish on GitHub Pages

Upload the contents of this folder to the root of the `slavaklimenko.github.io` repository (branch `main`),
then go to Settings → Pages → Deploy from a branch → `main` / `(root)`.

## Preview locally

```bash
python -m http.server 8000
```
Then open http://localhost:8000/
