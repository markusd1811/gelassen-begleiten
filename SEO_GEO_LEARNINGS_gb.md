# SEO & GEO Learnings: Best Practices (Astro + KI-Suche)

Dieses Dokument fasst die wichtigsten "Aha-Momente" und Best Practices zusammen, die wir während der Entwicklung von `gelassen-begleiten.de` für zukünftige Projekte im Bereich SEO (Google) und GEO (Generative Engine Optimization) gesammelt haben.

## 1. Schema.org (Strukturierte Daten) für KIs
Viele klassische SEO-Tools und vor allem moderne KI-Crawler (wie Perplexity, ChatGPT Search) haben Schwierigkeiten mit stark verschachtelten JSON-LD Arrays (dem sog. `@graph` Ansatz).
*   **Learning:** Schemas (Organization, Person, Service) sollten idealerweise **explizit und als separate Skript-Tags** (`<script type="application/ld+json">`) in den `<head>` geladen werden.
*   **Person Schema ist Pflicht:** Bei Personenmarken ("Coaches", "Berater") muss zwingend ein `Person` Schema mit dem `knowsAbout` Array hinterlegt werden. Das signalisiert den KIs, bei welchen Themenkomplexen (z.B. "Gewaltfreie Kommunikation") sie diese Person als Antwortquelle heranziehen sollen.
*   **Services direkt auf der Startseite auszeichnen:** Dienstleistungen (mit Preis und Beschreibung) sollten nicht nur tief auf den Unterseiten, sondern per `Service`-Schema direkt als Kurzzusammenfassung im Head der Startseite verankert werden. So können KIs Preise direkt zitieren.

## 2. Sitemap-Verwirrung bei SEO-Scannern
Astro generiert moderne Sitemaps standardmäßig als `sitemap-index.xml`. Manche einfache SEO-Scanner (und alte Plugins) suchen aber stur nach `sitemap.xml` und werfen fälschlicherweise einen 404-Error aus.
*   **Fix / Learning:** Um diese Fehlalarme abzustellen (und Crawlern wie Google ohnehin schnellstmöglich den Weg zu weisen), muss in der `robots.txt` immer explizit der Pfad zur Sitemap definiert werden:
    ```txt
    User-agent: *
    Disallow: 
    Sitemap: https://meinedomain.de/sitemap-index.xml
    ```

## 3. Open Graph (OG) Tags als absolutes Basis-Element
Ohne Meta-Tags für Social Media (Facebook, LinkedIn, Slack, WhatsApp) ziehen sich soziale Netzwerke willkürliche Texte und Bilder (oder gar keine). Ein geteilter Link wirkt unprofessionell.
*   **Learning:** Jedes Projekt benötigt zwingend ein vollständiges Set an `og:` und `twitter:` Meta-Tags im globalen Layout.
*   **Dynamische Bilder:** Wenn ein spezieller Inhalt (z.B. Blog-Post) geteilt wird, muss Astro das `image` Property dynamisch aus dem Artikel in das `Layout` durchreichen, damit auf LinkedIn oder WhatsApp das Artikel-Foto (Hero Image) als Vorschaubild der Link-Karte erscheint (und nicht immer nur das Standard-Logo).

## 4. GEO-Spezifisch: Answer Capsules
Die wichtigste Erkenntnis für das Texten der Zukunft: Künstliche Intelligenzen lesen ungern lange Einleitungen durch, wenn sie Nutzern eine direkte Antwort geben wollen.
*   **Learning:** Jede wichtige Unterseite und jeder Blogpost sollte ganz oben im Frontend (und/oder im Meta-Code) eine "Answer Capsule" haben. Eine direkte Zusammenfassung (1-2 Sätze) der Antwort (z.B. "LilaLiebe ist ein Konzept von Kathy Weber, das GFK in den Erziehungsalltag integriert..."). 
*   Diese Capsule wird im CMS als separates Pflichtfeld angelegt (`answer_capsule`) und sowohl in der UI als auch im `description`-Tag oder `FAQPage`-Schema ausgespielt.
