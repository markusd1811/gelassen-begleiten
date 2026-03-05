# SEO & GEO-Optimierung: gelassen-begleiten.de
**Auftraggeber:** Laura Drühe | Familiencoaching nach GFK  
**Ziel:** Mehr organische Sichtbarkeit bei Google + Sichtbarkeit in KI-Suchantworten (ChatGPT, Perplexity, Google AI Overviews)  
**Dokument-Typ:** Technisches Briefing für Entwickler/Agentur  
**Stand:** März 2026

---

## Inhaltsverzeichnis

1. [Ausgangslage & Strategie](#1-ausgangslage--strategie)
2. [Neue Website-Architektur (50+ Seiten)](#2-neue-website-architektur)
3. [Keyword-Zuweisung je Seite](#3-keyword-zuweisung-je-seite)
4. [Technisches SEO-Checkliste](#4-technisches-seo--checkliste)
5. [Schema Markup – Implementierung](#5-schema-markup--implementierung)
6. [On-Page-Regeln für alle Seiten](#6-on-page-regeln-für-alle-seiten)
7. [GEO: Answer-First-Prinzip](#7-geo-answer-first-prinzip)
8. [robots.txt – Anforderung](#8-robotstxt--anforderung)
9. [Content-Briefings für Top-Seiten](#9-content-briefings-für-top-seiten)
10. [Audit-Prompt für Claude Code](#10-audit-prompt-für-claude-code)

---

## 1. Ausgangslage & Strategie

### Ist-Zustand (Startseite)
*(Bezieht sich auf die erste Analyse der bestehenden Homepage, bevor die neuen Unterseiten live gingen)*

- Aktuelle Website ist eine **Single-Page-Scrollseite** (alle Inhalte auf einer URL)
- Kein Blog / kein Content-Hub
- Kein Schema Markup vorhanden
- Kein Google Business Profile
- Kein Bing Webmaster Tools Eintrag
- AI-Crawler möglicherweise blockiert (robots.txt prüfen)

### Strategischer Kern

Laura Drühe ist **zertifizierte LilaLiebe®-Beraterin** (BDVT-zertifizierte Methode, staatlich geprüfte Ausbildung ZFU, entwickelt von Kathy Weber – SPIEGEL-Bestseller-Autorin und Betreiberin des #1 Elternpodcasts Deutschland).

> **Kernstrategie:** Nicht gegen Kathy Weber ranken – sondern IM LilaLiebe®-Ökosystem sichtbar werden. Alle, die nach „LilaLiebe® Beratung", „zertifizierte LilaLiebe® Beraterin" oder „LilaLiebe® Coach online" suchen, sollen gelassen-begleiten.de finden.

Das Suchvolumen für LilaLiebe®-Begriffe wächst mit der Bekanntheit von Kathy Weber – und auf Beraterebene gibt es kaum SEO-Konkurrenz. Das Fenster steht offen.

---

## 2. Neue Website-Architektur [GILT FÜR DIE GESAMTE WEBSITE]

Die Website muss von einer Single-Page zu einer **Multi-Page-Struktur** erweitert werden. Jede URL ist eine eigenständige Ranking-Einheit.

### Empfohlene Seitenstruktur

```
gelassen-begleiten.de/
├── index.html                        → Homepage (bestehend, optimieren)
├── lilaliebe/                        → Was ist LilaLiebe®? [PRIO 1]
├── methode/                          → Die LilaLiebe®-Methode erklärt
├── gfk-eltern/                       → Gewaltfreie Kommunikation für Eltern
├── angebote/
│   ├── audio-quick-beratung/         → Audio-Quick-Beratung 29 €
│   ├── einzelcoaching/               → 1:1-Coaching 200 €
│   └── paarberatung/                 → Paarberatung 300 €
├── blog/
│   ├── wutanfall-kleinkind/          → Problem-Seite [PRIO 2]
│   ├── kind-sagt-nein/               → Problem-Seite
│   ├── schlafroutine-kinder/         → Problem-Seite
│   ├── autonomiephase-begleiten/     → Problem-Seite
│   └── geschwisterstreit-gfk/        → Problem-Seite
├── faq/                              → FAQ-Hauptseite mit Schema [PRIO 3]
├── ueber-mich/                       → Über Laura Drühe (erweitert)
└── familiencoaching-online/          → Lokale/Service-Landingpage
```

**Mindestens diese 13 Seiten bis Monat 2 umsetzen.**

---

## 3. Keyword-Zuweisung je Seite [GILT FÜR DIE GESAMTE WEBSITE]

| URL | Primäres Keyword | Sekundäre Keywords |
|-----|------------------|--------------------|
| `/` | Familiencoaching GFK online | Elterncoaching Gewaltfreie Kommunikation |
| `/lilaliebe/` | LilaLiebe® Beratung | LilaLiebe® Beraterin online, zertifizierte LilaLiebe® |
| `/methode/` | LilaLiebe® Methode erklärt | GFK Methode Kinder, Bedürfnisorientierte Erziehung |
| `/gfk-eltern/` | Gewaltfreie Kommunikation Kinder | GFK Eltern lernen, Marshall Rosenberg Erziehung |
| `/angebote/audio-quick-beratung/` | Elterncoaching WhatsApp | Kurzberatung Eltern online |
| `/angebote/einzelcoaching/` | Familiencoaching online buchen | Elterncoaching Zoom Kosten |
| `/angebote/paarberatung/` | Elterncoaching Paare | Paarberatung Erziehung online |
| `/blog/wutanfall-kleinkind/` | Wutanfall Kind was tun | Wutanfälle Kleinkind GFK |
| `/blog/kind-sagt-nein/` | Kind sagt ständig nein | Kind verweigert Kooperation |
| `/blog/schlafroutine-kinder/` | Einschlafen Kind Hilfe | Schlafroutine ohne Tränen |
| `/blog/autonomiephase-begleiten/` | Autonomiephase Trotzphase Hilfe | Kind 2 Jahre trotzig |
| `/blog/geschwisterstreit-gfk/` | Geschwisterstreit was tun | Geschwister streiten GFK |
| `/faq/` | Elterncoaching FAQ | Familiencoaching Fragen |
| `/ueber-mich/` | LilaLiebe® Beraterin zertifiziert | Laura Drühe Familiencoach |
| `/familiencoaching-online/` | Familiencoach online Deutschland | Familienberatung online |

---

## 4. Technisches SEO-Checkliste [GILT FÜR DIE GESAMTE WEBSITE]

### Sofort umzusetzen (Woche 1)

- [ ] **Google Search Console** einrichten und verifizieren
- [ ] **XML-Sitemap** generieren und in Search Console einreichen
- [ ] **Bing Webmaster Tools** Konto anlegen (wichtig für Perplexity/Copilot-Index)
- [ ] **robots.txt** prüfen und anpassen (siehe Kapitel 8)
- [ ] **Core Web Vitals** via Google PageSpeed Insights prüfen
- [ ] Alle Bilder in **WebP** konvertieren und komprimieren
- [ ] **HTTPS** sicherstellen (kein Mixed Content)
- [ ] **Canonical Tags** auf allen Seiten setzen
- [ ] Jede Seite hat einen einzigartigen `<title>` und `<meta description>`
- [ ] **Hreflang** für DE: `<link rel="alternate" hreflang="de" href="..." />`

### Interne Verlinkung

- Jede Blog-Seite verlinkt auf mindestens **eine Angebotsseite** (mit Anchor-Text, der das Keyword enthält)
- Jede FAQ-Antwort verlinkt auf die **thematisch passende Unterseite**
- Homepage verlinkt auf **alle Hauptkategorien**
- `/lilaliebe/` erhält interne Links von **allen anderen Seiten** (höchste interne Authority)

### PageSpeed-Fix-Workflow

```
1. https://pagespeed.web.dev/ → URL eingeben
2. Alle Fehler aus dem Report kopieren
3. In Claude Code einfügen mit Prompt:
   "Fix all these PageSpeed issues in the codebase automatically."
4. Änderungen deployen, erneut testen
```

---

## 5. Schema Markup – Implementierung [GILT FÜR DIE GESAMTE WEBSITE & STARTSEITE]

*Wichtig zur Unterscheidung: Einige Schemas müssen zwingend auf jeder Seite sein, andere gehören strikt nur auf eine bestimmte Seite.*

### 5.1 FAQPage Schema [GILT FÜR EINZELNE UNTERSEITEN & BLOGPOSTS]

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist die LilaLiebe® Methode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LilaLiebe® ist ein BDVT-zertifiziertes Erziehungs- und Beratungskonzept, das auf der Gewaltfreien Kommunikation nach Marshall B. Rosenberg basiert. Es erklärt die Bedürfniswelt von Kindern und gibt Eltern konkrete Werkzeuge für einen gelasseneren Alltag. Die Methode wurde von Kathy Weber entwickelt und ist staatlich anerkannt (ZFU)."
      }
    },
    {
      "@type": "Question",
      "name": "Was kostet ein Familiencoaching bei Laura Drühe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das Angebot beginnt bei 29 € für eine Audio-Quick-Beratung per WhatsApp. Das 1:1-Coaching kostet 200 € für zwei Zoom-Termine (je 60 Minuten). Die Paarberatung für Elternteams umfasst drei Termine für 300 €. Ein kostenfreies Erstgespräch (15–20 Minuten) ist jederzeit buchbar."
      }
    }
    // Weitere Fragen analog ergänzen
  ]
}
```

### 5.2 Service Schema [GILT SPEZIFISCH FÜR STARTSEITE & ANGEBOTS-UNTERSEITEN]

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "1:1-Familiencoaching nach LilaLiebe® und GFK",
  "description": "Zwei Online-Coaching-Termine à 60 Minuten auf Basis der LilaLiebe®-Methode und Gewaltfreien Kommunikation. Mit Selbst- oder Fremdeinfühlung und sofort umsetzbaren Alltagswerkzeugen.",
  "provider": {
    "@type": "Person",
    "name": "Laura Drühe",
    "url": "https://gelassen-begleiten.de"
  },
  "offers": {
    "@type": "Offer",
    "price": "200",
    "priceCurrency": "EUR"
  },
  "serviceType": "Familiencoaching",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://gelassen-begleiten.de/angebote/einzelcoaching/",
    "serviceType": "Online (Zoom)"
  }
}
```

### 5.3 Person Schema [GILT SPEZIFISCH FÜR STARTSEITE & ÜBER-MICH SEITE]

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Laura Drühe",
  "url": "https://gelassen-begleiten.de",
  "jobTitle": "Zertifizierte LilaLiebe®-Beraterin und Familiencoach",
  "description": "Laura Drühe ist zertifizierte LilaLiebe®-Beraterin und bietet Familiencoaching auf Basis der Gewaltfreien Kommunikation (GFK) nach Marshall B. Rosenberg online an.",
  "knowsAbout": [
    "Gewaltfreie Kommunikation",
    "LilaLiebe® Methode",
    "Familiencoaching",
    "Bedürfnisorientierte Erziehung"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Zertifizierung",
    "name": "Zertifizierte LilaLiebe®-Beraterin (BDVT, ZFU-anerkannt)"
  }
}
```

### 5.4 LocalBusiness Schema / Organization [GILT EXKLUSIV FÜR DIE STARTSEITE]

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gelassen begleiten – Laura Drühe",
  "url": "https://gelassen-begleiten.de",
  "email": "hallo@gelassen-begleiten.de",
  "description": "Familiencoaching nach GFK und LilaLiebe® Methode. Online via Zoom, alltagstauglich und ohne Wertung.",
  "priceRange": "€€",
  "areaServed": "Deutschland",
  "serviceType": "Familiencoaching"
}
```

> **Implementierung:** Schema-Blöcke als `<script type="application/ld+json">` im `<head>` der jeweiligen Seite einfügen. Validierung: https://search.google.com/test/rich-results

---

## 6. On-Page-Regeln (Title, Meta, H1) [GILT FÜR DIE GESAMTE WEBSITE]

### Title-Tag-Format

```
[Primäres Keyword] | Gelassen begleiten – Laura Drühe
```

Beispiele:
- `LilaLiebe® Beratung online | Gelassen begleiten – Laura Drühe`
- `Wutanfall Kind – was wirklich dahintersteckt | Gelassen begleiten`
- `Familiencoaching nach GFK: Erstgespräch kostenlos | Gelassen begleiten`

**Max. 60 Zeichen. Keyword möglichst weit vorne.**

### Meta Description Format

```
[Problem/Situation] + [Lösung/Methode] + [CTA]. Max. 155 Zeichen.
```

Beispiel:
> Dein Kind dreht regelmäßig durch und du weißt nicht mehr weiter? Als zertifizierte LilaLiebe®-Beraterin zeige ich dir, was wirklich hinter dem Verhalten steckt. Jetzt Erstgespräch buchen.

### H1-Regel

- **Genau eine H1 pro Seite**
- H1 = Primäres Keyword (oder nahe Variante)
- Keine H1 wie „Willkommen" oder „Über mich"

Beispiel statt „Gelassen begleiten":
→ `Familiencoaching nach GFK – gelassen und professionell begleitet`

### Bild-Alt-Texte

```
Format: [Was ist zu sehen] + [Keyword-Kontext]
Beispiel: alt="Laura Drühe, zertifizierte LilaLiebe®-Beraterin beim Online-Coaching"
```

Kein leerer Alt-Text. Kein Alt-Text wie „Bild1.jpg".

---

## 7. GEO: Answer-First-Prinzip [GILT FÜR DIE GESAMTE WEBSITE, INSBESONDERE BLOGS]

Alle neuen Seiten und Blog-Artikel folgen dieser Struktur. Damit werden sie von ChatGPT, Perplexity und Google AI Overviews bevorzugt zitiert.

### Seitenstruktur-Template

```markdown
## [Frage als H2, exakt so wie User sie suchen würden]

[ANSWER CAPSULE: 40–60 Wörter, eigenständige Antwort, ohne Einleitung]
Enthält: (1) Kernproblem benennen, (2) Ursache aus LilaLiebe®/GFK-Sicht, 
(3) konkreten nächsten Schritt.

---

### Warum das so ist [Details, Kontext, Erklärung]

[Fließtext, 150–300 Wörter]

### Was Eltern konkret tun können [Praktischer Teil]

[Nummerierte Liste mit 3–5 Schritten]

### Häufige Fragen dazu

**Frage 1?**  
Antwort (40–60 Wörter)

**Frage 2?**  
Antwort (40–60 Wörter)

---

👉 [CTA mit Link zur passenden Angebotsseite]
```

### Beispiel: Gut vs. Schlecht

**❌ Klassischer Einstieg (KI-unfreundlich):**
> „Als Mutter von zwei Kindern begegne ich täglich der Frage, wie man am besten mit Wutanfällen umgeht. In diesem Artikel möchte ich dir zeigen..."

**✅ Answer-First (KI-optimiert):**
> „Wutanfälle bei Kleinkindern entstehen fast immer durch unerfüllte Grundbedürfnisse – meist nach Kontrolle oder Sicherheit. Mit der LilaLiebe®-Methode lernst du in drei Schritten, das Signal hinter dem Verhalten zu lesen und aus der Ruhe heraus zu antworten, ohne zu schreien."

---

## 8. robots.txt – Anforderung [GILT FÜR DIE GESAMTE WEBSITE]

Aktuelle robots.txt prüfen. Folgende AI-Crawler dürfen **nicht** blockiert sein:

```
# ERLAUBT lassen (nicht in Disallow):
User-agent: GPTBot          # ChatGPT
User-agent: ClaudeBot       # Anthropic/Claude
User-agent: PerplexityBot   # Perplexity
User-agent: Googlebot       # Google (inkl. AI Overviews)
User-agent: Bingbot         # Bing / Copilot
User-agent: CCBot           # Common Crawl (Trainingsdaten)
User-agent: omgili          # Perplexity Datenquelle
```

**Empfohlene robots.txt (minimal, offen):**

```
User-agent: *
Allow: /

Sitemap: https://gelassen-begleiten.de/sitemap.xml
```

Falls bestimmte Seiten (z.B. Datenschutz, Impressum) nicht indexiert werden sollen:

```
User-agent: *
Disallow: /datenschutz
Disallow: /impressum
Allow: /

Sitemap: https://gelassen-begleiten.de/sitemap.xml
```

---

## 9. Content-Briefings für Top-Seiten

### Seite 1 (PRIO 1): `/lilaliebe/`

| Feld | Inhalt |
|------|--------|
| **URL** | `/lilaliebe/` |
| **Title** | `LilaLiebe® Beratung online – zertifizierte Beraterin \| Gelassen begleiten` |
| **Meta Description** | `Was ist LilaLiebe®? Als zertifizierte Beraterin erkläre ich das BDVT-zertifizierte Konzept von Kathy Weber – und wie es deinen Familienalltag verändert. Erstgespräch kostenlos.` |
| **H1** | `Was ist LilaLiebe®? Das Erziehungskonzept von Kathy Weber – erklärt von einer zertifizierten Beraterin` |
| **Zielwörter** | 700–900 Wörter |
| **Schema** | FAQPage + Person |
| **Interne Links** | → /angebote/einzelcoaching/, → /methode/, → /gfk-eltern/ |
| **Answer Capsule** | `LilaLiebe® ist ein BDVT-zertifiziertes Erziehungs- und Beratungskonzept von Kathy Weber, das auf der Gewaltfreien Kommunikation basiert. Es zeigt Eltern, welche Grundbedürfnisse hinter dem Verhalten ihrer Kinder stecken – und gibt konkrete Werkzeuge für mehr Gelassenheit im Alltag. Als zertifizierte LilaLiebe®-Beraterin begleite ich Eltern online in diesem Prozess.` |
| **FAQ-Fragen (min. 6)** | Was unterscheidet LilaLiebe® von klassischer Erziehungsberatung? / Für welches Alter ist LilaLiebe® geeignet? / Was bedeutet die Zertifizierung? / Wie finde ich eine zertifizierte LilaLiebe®-Beraterin? / Kann ich LilaLiebe® auch ohne Partner umsetzen? / Was kostet eine LilaLiebe®-Beratung? |

---

### Seite 2 (PRIO 2): `/blog/wutanfall-kleinkind/`

| Feld | Inhalt |
|------|--------|
| **URL** | `/blog/wutanfall-kleinkind/` |
| **Title** | `Wutanfall Kind – was wirklich dahintersteckt (GFK-Perspektive) \| Gelassen begleiten` |
| **Meta Description** | `Wutanfälle bei Kleinkindern sind kein Trotz – sie sind ein Signal. Mit der LilaLiebe®-Methode verstehst du das Bedürfnis dahinter und reagierst gelassen. Jetzt lesen.` |
| **H1** | `Wutanfall beim Kind: Was steckt wirklich dahinter – und wie reagierst du gelassen?` |
| **Zielwörter** | 600–800 Wörter |
| **Schema** | FAQPage |
| **Interne Links** | → /lilaliebe/, → /angebote/audio-quick-beratung/ |
| **Answer Capsule** | `Wutanfälle bei Kleinkindern entstehen fast immer durch unerfüllte Grundbedürfnisse – meist nach Kontrolle, Autonomie oder Sicherheit. Das Kind „funktioniert" nicht absichtlich nicht: Es zeigt durch sein Verhalten, was es braucht. Mit der LilaLiebe®-Methode lernst du, dieses Signal zu lesen und ruhig zu antworten.` |
| **CTA** | Audio-Quick-Beratung (29 €): „Du hast gerade eine akute Situation? Sende mir eine Sprachnachricht – ich antworte mit konkreten Tipps." |

---

### Seite 3 (PRIO 3): `/faq/`

| Feld | Inhalt |
|------|--------|
| **URL** | `/faq/` |
| **Title** | `FAQ: Familiencoaching nach GFK und LilaLiebe® \| Gelassen begleiten` |
| **H1** | `Häufige Fragen zum Familiencoaching` |
| **Schema** | FAQPage (alle Fragen) |
| **Anzahl Fragen** | Mindestens 15 |
| **Struktur** | Fragen als `<details>`/`<summary>` HTML oder als H3 mit direkter Antwort |
| **Kategorien** | Methode & Ansatz / Ablauf & Formate / Kosten & Buchung / Für wen ist es geeignet |

---

## 10. Audit-Prompt für Claude Code

Diesen Prompt direkt in Claude Code eingeben, nachdem die Website-Dateien geladen sind:

```
Go through this website in extreme detail. Ultra think about this. 

Analyze and fix all of the following:

1. TECHNICAL SEO
   - Missing or duplicate title tags and meta descriptions
   - Missing canonical tags
   - Broken internal links
   - Missing alt text on images
   - Missing or incorrect heading hierarchy (H1, H2, H3)
   - Page speed issues (identify render-blocking resources, unoptimized images)
   - Missing XML sitemap or incorrect sitemap entries
   - robots.txt issues (especially: are AI crawlers blocked?)

2. SCHEMA MARKUP
   - Add FAQPage schema to all pages with FAQ sections
   - Add Service schema to all offer pages
   - Add Person schema to the about page and homepage
   - Add LocalBusiness schema to homepage
   - Validate all schema against schema.org specs

3. ON-PAGE SEO
   - Optimize all title tags (max 60 chars, keyword first)
   - Optimize all meta descriptions (max 155 chars, with CTA)
   - Check keyword placement in H1, first 100 words, and last paragraph
   - Improve internal linking: every page should link to at least one offer page

4. GEO OPTIMIZATION
   - Identify all FAQ-style sections and ensure they follow Answer-First structure
   - Each FAQ answer should be 40–60 words, standalone and direct
   - Add FAQ schema to every page with Q&A content

5. OUTPUT
   - Create a prioritized list of all issues found
   - Fix all issues automatically where possible
   - For content issues, provide specific rewrite suggestions

Goal: Dominate German-language search for LilaLiebe® coaching and GFK family coaching keywords.
```

---

## Referenzen & Tools

| Tool | Zweck | URL |
|------|-------|-----|
| Google Search Console | Indexierung, Keywords, Fehler | search.google.com/search-console |
| Bing Webmaster Tools | Bing/Perplexity-Index | bing.com/webmasters |
| Google PageSpeed Insights | Core Web Vitals | pagespeed.web.dev |
| Rich Results Test | Schema Markup prüfen | search.google.com/test/rich-results |
| Schema Markup Validator | Schema validieren | validator.schema.org |
| Google Business Profile | Lokales SEO | business.google.com |

---

*Dokument erstellt für die technische Übergabe an die Entwickler-Agentur. Rückfragen: hallo@gelassen-begleiten.de*
