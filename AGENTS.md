# Portfolio — Conventions

## Contenu bilingue (FR + EN)

Articles de blog et projets existent en paires VF/VE :
- `src/content/blog/fr/<slug>.mdx` + `src/content/blog/en/<slug>.mdx`
- `src/content/projects/fr/<slug>.mdx` + `src/content/projects/en/<slug>.mdx`

Règles :
- Le nouveau contenu va **uniquement dans les sous-dossiers `fr/` / `en/`**.
  Les fichiers à la racine de `src/content/blog/` ou `src/content/projects/`
  ne sont pas collectés (legacy, supprimés le 30/09/2026).
- Frontmatter : champ `lang: "fr"` ou `lang: "en"`. **Aucun préfixe de langue
  dans le titre** (ni `[FR]`/`[EN]`), aucun tag de langue dans `tags`.
- Collections : `src/content.config.ts` (`blog_fr`, `blog_en`, `projects_fr`,
  `projects_en`) — base de glob par sous-dossier, jamais la racine.
- Pages : `src/pages/{fr,en}/...` ; RSS par langue (`src/pages/{fr,en}/rss.xml.ts`).
- Navigation : `src/config.ts` porte des href **sans** préfixe de langue ; la
  localisation est appliquée au rendu par `localizedHref()` (Nav.astro,
  Sidebar.astro). Ne jamais ajouter de préfixe de langue dans la config.

## Stack & conventions techniques

- Astro 7.x (output statique), TypeScript strict, React 19 (`@astrojs/react`),
  MDX (`@astrojs/mdx`), RSS (`@astrojs/rss`) — package manager : bun
- CSS vanilla (pas de Tailwind ni de CSS-in-JS) : `src/styles/tokens.css`
  (design tokens `:root`) + `src/styles/global.css` — utiliser les variables `--color-*`
- Thème : light uniquement, accent violet `#5b5bd6`
- Responsive mobile-first (breakpoints 480/600/767/768/1200/1600)
- Pas de nouvelle dépendance lourde sans accord
- `astro.config.mjs` : site `https://clbenoit.github.io/portfolio`, base `/portfolio/`,
  outDir `docs/dist/` — branche de développement : `devel`

## Vérification

- `bun run build` (sortie statique → `docs/dist/`, GitHub Pages
  `clbenoit.github.io/portfolio/`). Tout changement de contenu se valide par
  un build complet (toutes les pages `fr/` + `en/` présentes dans le dist).
