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

## 5. Blueprint: Die GEO/SEO-perfekte Content-Struktur
Klassisches Blogging (lange Einleitungen, Romane über persönliche Erfahrungen) funktioniert für KI-Crawler nicht gut. Texte müssen nach dem **"Answer-First-Prinzip"** strukturiert sein:
1.  **H1 oder H2 (Die genaue Frage):** Formuliert exakt so, wie ein Nutzer (oder Prompter) sie stellen würde.
2.  **Die kurze Antwort (Answer Capsule):** 40–60 Wörter, die direkt die Fakten und die Lösung nennen (ohne langes Vorgeplänkel).
3.  **Hintergrund / Das Warum:** Der detaillierte Kontext (für tiefere Informationssuche).
4.  **Konkrete Schritte:** 3–5 praktische, nummerierte Handlungsanweisungen.
5.  **FAQ-Sektion:** Weitere direkte Kurzfragen zur Thematik (ausgestattet mit FAQPage Schema).
6.  **Klarer CTA:** Ein Absprungpunkt (Link) zur passenden Dienstleistung/zum Kauf.

## 6. Strikte On-Page-Regeln
Selbst beim Einsatz moderner Frameworks (Astro) gelten knallharte HTML-Regeln, die oft versehentlich durch Designentscheidungen gebrochen werden:
*   **Die H1-Regel:** Es darf pro URL *immer nur exakt EINE H1* geben. Die H1 ist reserviert für das primäre Keyword (z.B. "Familiencoaching nach GFK") und darf nicht für emotionale Willkommensgrüße ("Herzlich Willkommen auf meiner Seite") verschwendet werden.
*   **Die Meta-Description Formel:** Sie generiert den Klick. Aufbau: `[Problem/Schmerz] + [Die eigene Methode/Lösung] + [CTA]`. Maximal 155 Zeichen.

## 7. KI-Crawler & robots.txt
Für traditionelles SEO hat man früher oft Bots blockiert, um Server-Traffic zu sparen. Im GEO-Zeitalter ist das fatal.
*   **Learning:** Wer in den Antworten von ChatGPT, Claude oder Perplexity erscheinen will, darf deren Crawler nicht aussperren.
*   Zu erlauben sind u.a.: `GPTBot` (OpenAI), `ClaudeBot` (Anthropic), `PerplexityBot` / `omgili` (Perplexity) und `CCBot` (Common Crawl für Trainingsdaten).
*   *Tipp:* Eine einfache `User-agent: *` mit `Allow: /` in der robots.txt reicht meist aus, solange nicht explizit etwas anderes konfiguriert ist.

## 8. Interne Architektur & Linkjuice
*   Die Homepage hat die meiste Autorität ("Linkjuice"). Sie muss auf die wichtigsten Kernkategorien und "Money Pages" (Angebote) verweisen.
*   **Siloing:** Jeder Blogpost (Content) hat die Aufgabe, Traffic einzufangen und dann gezielt (mit harten Keyword-Links im Text) auf *eine* spezifische Angebots-Seite weiterzuleiten. Es gibt keinen Content, der einfach im luftleeren Raum verpufft.
