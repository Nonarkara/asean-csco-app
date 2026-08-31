# ASEAN CSCO working app

A static, single-page **document-in-code**: the citizen-first smart city handbook from the November 2025 Chief Smart City Officer (CSCO) workshop in Nakhon Si Thammarat, Thailand, kept as HTML, CSS, and JavaScript rather than a separate publishing pipeline.

This repository is maintained by [Dr. Non Arkaraprasertkul](https://github.com/Nonarkara) as a working document for regional smart-city cooperation. It is **not** an official ASEAN Secretariat publication, not ASEAN policy, and not an endorsed ASEAN Smart Cities Network (ASCN) product. Names, logos, and programme credits on the page describe the workshop context; they do not make this GitHub project an ASEAN organ.

**Live site:** [https://asean.nonarkara.org](https://asean.nonarkara.org)

## What this is

The page is titled *The Citizen-First City — ASEAN CSCO Handbook*. It turns workshop notes, case material from Nakhon Si Thammarat (NST), and a short playbook into something you can read in a browser:

- A manifesto and the NST “four layers” model (visible services, people-centric philosophy, local ecosystem, empowered local governance)
- Four practice pillars: people, purpose, practicality, proof
- A “Steal This Idea” toolkit that copies a JSON sketch of each idea to the clipboard
- Narrative, expandable handbook chapters, photo gallery, and credits
- Session transcripts, slides, and related workshop files under `2025 ASEAN CSCO Program/`

The site also describes a Thailand Smart City Data Platform concept (SCTHCDP) discussed at the workshop. The “Live Vibes Dashboard” on the page is **illustrative sample cards in `script.js`**, not a live operations feed. The LINE/Telegram “QR” graphics are decorative placeholders, not working scanners.

## How to view

Open the live URL above (GitHub Pages, custom domain `asean.nonarkara.org` via `CNAME`).

To run it locally there is no build step, package manager, or server-side app. From the repo root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). You can also open `index.html` directly in a browser; some browsers restrict clipboard and local file paths, so a local static server is more reliable.

The page loads fonts from Google Fonts. Everything else is static files in this repository.

## Repository layout

| Path | Role |
| --- | --- |
| `index.html` | Single-page handbook |
| `style.css` | Layout and theme |
| `script.js` | Nav, scroll reveal, toolkit copy, sample dashboard cards |
| `assets/` | Favicon |
| `photos/` | Workshop photos and logo assets used by the page |
| `handbook_text.txt` | Plain-text handbook source used while assembling the page |
| `2025 ASEAN CSCO Program/` | Workshop transcripts, slides, and supporting documents |
| `CNAME` | GitHub Pages custom domain |

## License

This repository is licensed under the [MIT License](LICENSE).
