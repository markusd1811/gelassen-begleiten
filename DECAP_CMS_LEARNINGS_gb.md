# Decap CMS: Dokumentation & Learnings (Ortho Mohnhof)

## Was ist Decap CMS?

**Decap CMS** (ehemals Netlify CMS) ist ein quelloffenes Content-Management-System für statische Websites und Single-Page-Applications (SPAs). Im Gegensatz zu klassischen Systemen wie Directus oder WordPress benötigt Decap CMS **keine eigene Datenbank** und **kein eigenes Backend**.

Es agiert als **Git-basiertes CMS**. Das bedeutet:
1. Das eigentliche Admin-Interface ist lediglich eine kleine React-App (eine einzelne JavaScript-Datei), die im Browser geladen wird.
2. Anstatt Inhalte in einer Datenbank zu speichern, committet Decap CMS (nach dem Klick auf "Speichern") alle Änderungen direkt als Dateientwürfe (z.B. JSON, Markdown, YAML) und Bilder in unser verknüpftes GitHub-Repository.
3. Die App (bspw. unser Vite-React-Frontend) lädt diese lokalen/statischen JSON-Dateien dann ganz normal über `fetch()` ein.

**Vorteile für unser Vorhaben:**
- Verursacht keine laufenden Server-/Datenbank-Kosten.
- Lässt sich statisch hosten (z.B. über IONOS FTP oder Netlify).
- Alle Inhalte sind versioniert (in Git) und untrennbar mit dem Code-Stand der Seite verbunden.

---

## 🏗️ Architektur: Warum Astro + Decap CMS?

Das Setup nutzt ein "Auto-Metapher"-Prinzip, um maximale Performance mit einfacher Bedienung zu vereinen:

### Astro (Der Motor & das Fahrwerk)
Astro ist das technische Herzstück. Es "baut" die Website.
- **Performance:** Es verwandelt die CMS-Daten in reines, pfeilschnelles HTML. Besucher laden keinen unnötigen Code, was zu 100/100 PageSpeed-Werten führt.
- **SEO-Automatisierung:** Astro generiert im Hintergrund Sitemaps, optimiert Bilder (WebP) und setzt Meta-Tags sowie JSON-LD Schemas (SEO) automatisch.

### Decap CMS (Das Cockpit)
Das CMS ist die Fernsteuerung für Laura.
- **Editierbarkeit:** Ohne Code-Wissen kann Laura Artikel schreiben, Bilder hochladen und die Startseite anpassen.
- **Unabhängigkeit:** Das CMS speichert direkt in GitHub. Es gibt keine externe Cloud und keine monatlichen Mietkosten für das CMS-System.

**Synergie:** Zusammen ermöglichen sie den "Jamstack"-Vorteil: Eine Website, die so sicher und schnell ist wie eine statische Seite, aber so einfach zu pflegen wie WordPress.

---

## 🚀 Implementierungs-Anweisungen (Frontend)

Die Einrichtung gliedert sich bei uns in drei wesentliche Bereiche:

### 1. Das CMS-Frontend (`public/admin/`)
Damit wir das Interface aufrufen können, wird unter `/admin/` eine einfache, statische `index.html` abgelegt, die per CDN das `decap-cms.js` Script lädt. 
Zusammen mit der `config.yml` wird dort das Interface aufgebaut.

### 2. Die CMS-Konfiguration (`public/admin/config.yml`)
Das Herzstück. In dieser Datei wird beschrieben, wie das CMS funktionieren soll:
- `local_backend: true`: Erlaubt uns, einen lokalen Proxy Server (`localhost:8081`) zu nutzen, um direkt in unsere lokalen Dateien zu speichern (ohne Git-Commits und ohne Netlify-Login machen zu müssen).
- `locale: 'de'`: Übersetzt das CMS-Interface auf Deutsch.
- `media_folder / public_folder`: Definiert den relativen Speicherort für hochgeladene Bilder (`public/images/cms`).
- `collections`: Hier beschreiben wir die Datenstrukturen (z.B. Teamliste mit Namen, Bildern und Schwerpunkten), definieren, wie die Felder heißen, und ordnen sie einer bestimmten Datei zu (z.B. `public/content/team.json`).

### 3. Vite + lokales Backend (Dev-Server)
Damit React-Router (SPA) uns das `/admin/` Verzeichnis überhaupt aufrufen lässt, haben wir ein kleines **Plugin (Middleware)** in der `vite.config.js` geschrieben. Es fängt Anfragen an `/admin/` ab und schickt gezielt die `index.html` aus dem public-Ordner zurück.
Damit Local-Storage mit DecapCMS klappt, nutzen wir das npm-Package `decap-server`.
Durch den Befehl `npm run cms` laufen unser Frontend (`vite`) und der Decap-Proxy-Server (`decap-server`) zeitgleich.


## 🧠 Unsere Learnings & Optimierungen

Während der Migration von Directus zu Decap CMS haben wir mehrere Dinge optimiert, die auch für zukünftige Projekte extrem wertvoll sind:

### 1. Bild-Uploads (Widget: `image`) statt reiner Strings
Ursprünglich enthielten die Felder in Directus/JSON nur "Strings" (Textfelder) mit einer reinen URL zu einem Bild.  
**Learning:** Durch den Einsatz des Widgets `widget: image` in der `config.yml` wird im Decap CMS ein nativer **Media-Manager** aktiviert. Der Redakteur muss keine Links mehr kopieren, sondern kann Bilder direkt am PC auswählen, hochladen und sie werden automatisch an den korrekten Ort kopiert.

### 2. Lokalisierung (`locale: 'de'`) und bekannte Bugs
Decap CMS bietet grundsätzlich deutsche Übersetzungen für das Interface an. 
**Achtung / Bug-Warnung:** Wenn man `locale: 'de'` in die `config.yml` einträgt, bevor das entsprechende Sprachpaket geladen ist, kann es aufgrund einer "Race Condition" im CMS-Skript zu einem fatalen Fehler (`Error loading the CMS configuration`) kommen, der das gesamte CMS blockiert. 
**Lösung/Workaround:** Wir lassen das CMS vorerst in der Standardsprache (Englisch) weiterlaufen, um die Stabilität sicherzustellen, bis Decap CMS dieses Problem (verursacht durch das fehlende Caching von Sprach-Skripten via CDN) auf ihrer Seite korrigiert hat.

### 3. Lesbare Item-Listen durch `summary`
Setzt man ein `widget: list` ein, benennt Decap CMS die Einträge im linken Panel standardmäßig nur mit Nummern oder kryptischen Inhalten.
**Lösung:** Man kann in der Collection ein `summary`-Template festlegen (z.B. `summary: '{{fields.name}}'`). So erscheint im seitlichen Menü beispielsweise direkt der Name der Leistung (z.B. "Arthrose-Therapie") oder des Arztes ("Dr. Stäcker").

### 4. Custom Styling & Formattierung (`cms.js` & `cms.css`)
Out-of-the-Box rendert Decap CMS in der rechten **Live-Vorschau** nur ein unübersichtliches Platzhalter-Format (bei JSON oft nichts). Die Standard-Font ist nicht gerade hübsch.
**Lösung:**
Wir haben globale Fonts (Montserrat) über die `index.html` injiziert.  
Noch wichtiger: Über eine `cms.js`-Datei haben wir **Custom React Preview-Templates** geschrieben:
```js
// Beispiel: Registriert ein Custom-Template für die Leistungen
CMS.registerPreviewTemplate('services', createClass({ render: function() { ... } }));
```
So können wir live im CMS das tatsächliche Look & Feel der Seite nachbauen (inkl. Badges, Rändern, Schriftfarben) und die Vorschau direkt aus den `entry`-Props des CMS füttern.

### 5. Netlify Limits vs. Self-Hosted GitHub OAuth (Das "Laura-Setup")
**Das Problem:** Bei der Nutzung von Netlify "Identity / Git Gateway" als Login-Türsteher (für Projekte, die auf externen Servern wie IONOS liegen) stößt Netlify in den Free-Tiers an seine Kapazitätsgrenzen (`{"error":"usage_exceeded"}`). Ist das Kontingent des Accounts erschöpft, blockiert das CMS komplett und Nutzer können sich nicht mehr einloggen.

**Unsere Lösung (100% unabhängig):** Wir haben Netlify komplett aus der Architektur gestrichen und das CMS Backend auf `github` umgestellt. Weil Decap CMS bei externem Hosting zwingend einen OAuth-Proxy Server benötigt, um sicherheitstechnisch den GitHub Client Secret zu verstecken, haben wir diesen Proxy in nur zwei kleinen PHP Dateien direkt auf IONOS selbst gebaut:
- `public/auth/index.php`: Leitet den Nutzer (Laura) von `/admin` elegant zu GitHubs Authentifizierungsseite weiter.
- `public/callback/index.php`: Nimmt die Antwort von GitHub entgegen, tauscht den temporären Code im Hintergrund mit unserem verborgenen `Client Secret` in ein langlebiges Access Token um, und sendet dieses Token an das Decap Frontend Fenster zurück.

**Vorteile dieses Setups:** Absolute Autarkie. Keine Netlify Account Einschränkungen. Der Redakteur klickt im CMS lediglich auf "Mit GitHub einloggen", bestätigt es, und ist sofort (ohne weitere Passwörter) eingeloggt. Es fallen nie Server-Kosten von Drittanbietern an.

---

### 6. High-Speed Deployment via `lftp` (Delta-Sync)
**Das Problem:** Standardmäßige SFTP-Deploy-Actions schieben oft den gesamten `dist`-Ordner bei jeder Änderung stur neu auf den Server. Bei IONOS (Port 22 erforderlich) führt dies bei wachsendem Content zu langen Wartezeiten (gelbe Balken in GitHub), was den CMS-Workflow ausbremst.

**Unsere Lösung:** Einsatz von `lftp` mit dem `mirror -R` Befehl in der GitHub Action.
- **Delta-Sync:** `lftp` vergleicht lokal und remote und überträgt *nur* die Dateien, die sich tatsächlich geändert haben.
- **Parallelität:** Es kann mehrere Dateien gleichzeitig hochladen.
- **Sicherheit:** Läuft stabil über SFTP (Port 22), was bei IONOS zwingend erforderlich ist (Timeouts auf Port 21 umgangen).
*Ergebnis:* Die Deploy-Zeit nach einem CMS-Save wurde von Minuten auf wenige Sekunden reduziert.

### 7. Custom Branding & White Labeling
Um das CMS für den Endnutzer (Laura) vertrauenswürdig und professionell zu gestalten, haben wir CSS-Injections in der `admin/index.html` genutzt.
- **Login-Screen:** Das Markenlogo wurde über dem Login-Button platziert.
- **Dashboard:** Das Decap-Icon in der Navbar wurde durch das "Gelassen Begleiten" Logo ersetzt.
- **Favicon & Title:** Volle Integration der Markenidentität im Browser-Tab.

---

### Fazit
Mit Decap CMS haben wir eine schlanke, wartungsarme und völlig serverunabhängige Content-Struktur aufgebaut, die dennoch dem Endnutzer im Dashboard großen Komfort (Bild-Upload, Live-Vorschau mit Injected-CSS, lokalisierte UI, Marken-Branding und einen High-Speed SFTP-Mirror über lftp) bietet.
