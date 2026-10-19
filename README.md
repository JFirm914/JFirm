# JFirm — Web Developing

A responsive, accessible website for JFirm. The homepage portfolio entries are clearly labeled concept showcases and can be edited together in the `projects` array near the top of `script.js`. The Client Projects page is populated separately from `projects-data.js`. The client intake form is an external link; this site does not collect or submit form data.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser, or serve the folder with any static file server (for example, `npx serve .`).
3. To update the homepage concept portfolio, edit the `projects` array in `script.js`.

The site uses plain HTML, CSS, and vanilla JavaScript; Google Fonts is an optional external font resource. PNG logo and favicon assets are in `assets/`.

## Add a client project

Edit only the `window.clientProjects` array in `projects-data.js` to add a card to [projects/](./projects/). Each project entry has:

- `name`: project or client name
- `url`: full URL to the live website
- `description`: short card description
- `image`: repository-root-relative path or URL to a thumbnail image, or an empty string to show the placeholder

Example:

```js
window.clientProjects = [
  {
    name: "Example Client",
    url: "https://example.com",
    description: "A clear, welcoming website for a local business.",
    image: "assets/example-client.jpg"
  }
];
```

Leave the array empty to show the friendly empty state until a project is ready to share.

## Publish with GitHub Pages

1. Push the site files (`index.html`, `projects/`, `plans/`, `styles.css`, `script.js`, `projects-data.js`, `projects-page.js`, `README.md`, and `assets/`) to the `main` branch of the `JFirm914/JFirm` repository.
2. On GitHub, open the repository and select **Settings** → **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder, then select **Save**.
5. Wait for the Pages deployment to finish. The project site will be available at `https://jfirm914.github.io/JFirm/`.
6. If you use another repository or custom domain, update the Open Graph URL and image URL in the `<head>` of `index.html`.
