
# ra-gaussmann.de

Eine moderne, performante Website für die Rechtsanwaltskanzlei Gaussmann, entwickelt mit Angular 21, Tailwind CSS und SSR-Unterstützung.

## Features

- ✨ **Angular 21**: Neueste Angular-Version mit Standalone Components
- 🎨 **Tailwind CSS**: Utility-first CSS für ein modernes, responsives Design
- ⚡ **Server Side Rendering (SSR)**: Schnelle Ladezeiten & SEO-Optimierung
- 🗺️ **MapLibre GL**: Interaktive Karten für Standorte
- 🧩 **Modulare Struktur**: Übersichtliche Trennung von Core, Pages und Komponenten
- 🧪 **Vitest**: Schnelle, moderne Tests

## Projektstruktur

```bash
src/
  app/
  core/      # Layout, Header, Navbar, Footer
    pages/     # Home, About, Contact, Imprint, Services
    app.ts     # Root-Komponente
    app.html   # Root-Template
  main.ts      # Einstiegspunkt
  main.server.ts # SSR-Einstiegspunkt
  server.ts    # Express-Server für SSR
```

## Schnellstart

### 1. Abhängigkeiten installieren

```bash
    npm install
```

### 2. Entwicklungsserver starten

```bash
    npm start
```

Die App ist dann unter [http://localhost:4200](http://localhost:4200) erreichbar.

## Build & Deployment

- **Production Build:**

```bash
    npm run build
```

- **SSR-Server starten:**

```bash
    npm run serve:ssr:ra-gaussmann.de
```

## Testen

- **Unit-Tests:**

```bash
    npm test
```

(Vitest-Konfiguration vorhanden)

## Wichtige Abhängigkeiten

- `@angular/*` (v21)
- `tailwindcss`, `postcss`, `autoprefixer`
- `maplibre-gl`
- `express` (für SSR)
- `vitest` (Tests)

## Nützliche Befehle

| Befehl                | Beschreibung                       |
|-----------------------|------------------------------------|
| `npm start`           | Dev-Server mit Live-Reload         |
| `npm run build`       | Production-Build                   |
| `npm test`            | Unit-Tests mit Vitest              |
| `npm run serve:ssr:ra-gaussmann.de` | SSR-Server starten      |

## Lizenz

MIT

---

> Erstellt mit ❤️ und modernem Angular für ra-gaussmann.de
