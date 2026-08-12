# Product Design Portfolio

Source for my product design portfolio and case studies.

**Ruby Seher** — product designer, ex full-stack engineer. Bangalore, open to remote or relocation.

## What's here

| File | What it is |
| --- | --- |
| `index.html` | Portfolio home — hero, selected work, talks, contact |
| `case-study-shadematch.html` | ShadeMatch — a shipped PWA that finds your foundation shade match |
| `case-study-tracker.html` | The Application Black Hole — job application tracker research & IA |
| `style.css` | All styles, single stylesheet |
| `script.js` | Scroll reveal, case-study scroll-spy, hero design↔code toggle |

## ShadeMatch

A mobile-first PWA that helps people find a foundation shade match without a store visit — undertones and finishes vary wildly between brands, and swatch photos rarely match reality.

Designed **and** built end to end: React front end, Gemini API for the matching logic, installable as a PWA.

## The hero

The home page hero shows the same `ShadeSwatch` component in two states — the Figma frame I designed, and the React that shipped it. It's the shortest honest answer to what I do: I don't hand the design off, I write the component.

## Running it

No build step. Static HTML, CSS and JS:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Status

The ShadeMatch product is shipped. The full written case study — research, iterations, and the decisions behind them — is in progress.

## Contact

- Email — ruby.seher000@gmail.com
- [LinkedIn](https://www.linkedin.com/in/ruby-s-885468205/)
- [GitHub](https://github.com/Rubyseher)
