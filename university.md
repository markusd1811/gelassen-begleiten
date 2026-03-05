# Handoff University: Case Study "Gelassen Begleiten" 🎓
## Seminar: Konzeption interaktiver Medien (Fokus Marketing & KI)

Dieses Dokument dient als konzeptionelle Basis für das Seminar "Konzeption interaktiver Medien". Es dokumentiert den technologischen und strategischen Sprung von herkömmlichen CMS-Systemen hin zu einer KI-gestützten, hochperformanten Web-Architektur (Jamstack).

---

### 1. Projekt-Überblick & Zielsetzung (Executive Summary)
Das Projekt **"Gelassen Begleiten"** (gelassen-begleiten.de) ist eine moderne Case Study für die Transformation einer Personenmarke (Laura Drühe) in ein digitales Ökosystem. 

**Kernziele:**
*   **Performance:** Ladezeiten unter 1 Sekunde für optimale User Experience.
*   **Unabhängigkeit:** Verzicht auf monatliche Abomodelle durch "Self-Hosting" von CMS und Inhalten.
*   **Sichtbarkeit:** Maximale SEO- und GEO-Optimierung (Generative Engine Optimization).

---

### 2. Interactive Media Architecture (Tech-Stack)
Im Seminar wird gezeigt, wie man durch die Kombination spezialisierter Tools "Best-of-Breed"-Lösungen baut:

*   **Astro.build (Frontend):** Ein "Static Site Generator", der Code-Splitting und "Islands Architecture" nutzt. Er liefert reines HTML ohne unnötigen JavaScript-Ballast – essenziell für SEO.
*   **Decap CMS (Content Management):** Ein clientseitiges, Git-basiertes Interface. Es benötigt keine Datenbank-Server (SQL), da es Änderungen direkt als strukturierte Dateien (Markdown/JSON) in GitHub speichert.
*   **Deployment & DevOps:** Automatisierte Workflows über GitHub Actions, die den Content via SFTP-Mirror (lftp) in Echtzeit auf den Webspace synchronisieren.

---

### 3. KI-DRIVEN DEVELOPMENT WORKFLOW (Der Seminar-Fokus)
Dies ist der entscheidende Teil für die Marketing-Studierenden: **Wie steuere ich eine KI, um komplexe Medienprodukte zu erschaffen?**

*   **Prompt-Engineering im Pair-Programming:** Die UI wurde nicht "von Hand" entworfen, sondern durch iteratives Prompting mit der KI entwickelt. Studenten lernen, technische Spezifikationen in präzise Prompts zu übersetzen.
*   **Inhalts-Architektur:** KI-gestützte Aufarbeitung der "LilaLiebe® Methode" in segmentierte FAQ-Bausteine, Blog-Posts und Landingpages.
*   **UX-Optimierung:** Entwicklung einer "Laura-sicheren" Oberfläche im CMS, die die tatsächliche Website-Struktur eins-zu-eins abbildet (Website-Zentrale).

---

### 4. Strategische GEO (Generative Engine Optimization)
Klassisches SEO (Google) reicht heute nicht mehr aus. Dieses Projekt wurde gezielt auf **GEO** vorbereitet:
*   **Answer Capsules:** Kurze, prägnante Antworten am Anfang jeder Seite, die gezielt von KI-basierten Suchmaschinen (Perplexity, ChatGPT, Gemini) ausgelesen werden können.
*   **Strukturierte Daten:** Hinterlegung von JSON-LD Schemas, um der KI Kontext über die Person und ihre Dienstleistungen zu geben.

---

### 5. Budget-Rechtfertigung für KI-Tools in der Lehre
Warum benötigt das Seminar Budget für KI-Lizenzen (z.B. Claude, ChatGPT Plus, GitHub Copilot)?

1.  **Zeiteffizienz:** Reduktion der technischen Einstiegshürden um ca. 70%. Marketing-Studierende kommen schneller zur Konzeption und Strategie, da die KI bei der technischen Umsetzung assistiert.
2.  **Qualitätsstandard:** Die Studierenden erlernen, wie man Barrierefreiheit, Performance und modernen Code auf Industriestandard erzeugt – Fähigkeiten, die ohne KI-Support in einem Marketing-Seminar kaum vermittelbar wären.
3.  **Zukunftsfähigkeit:** "AI Literacy" ist die Schlüsselqualifikation im Marketing. Das Erlernen des produktiven Umgangs mit diesen Tools ist ein Wettbewerbsvorteil für die Universität.

---

### 6. Vorschlag: Seminar-Ablauf (Module)

| Modul | Titel | Fokus-Themen |
| :--- | :--- | :--- |
| **01** | **Marken-Strategie** | Markenpositionierung, Wettbewerbs-Audit, Keyword-Intent. |
| **02** | **Interaktions-Design** | CMS-Strukturierung, User Journeys, "No-Code" Management von Inhalten. |
| **03** | **Prompt-Engineering** | Code-Generation mit KI, CSS-Styling für moderne UIs (Glassmorphism, etc.). |
| **04** | **Content & AI (GEO)** | Erstellung von "Answer Capsules" und Schema-Architekturen. |
| **05** | **Live-Gang & Analyse** | Git-Deployment, Ladezeiten-Messung (Lighthouse), Search Console. |

---

### Fazit für die Lehre
Der Case "Gelassen Begleiten" beweist, dass moderne interaktive Medien nicht mehr durch starre Baukästen limitiert sein müssen. Durch KI-Support können Studierende zu Meta-Architekten werden, die die volle Kontrolle über Design, Daten und Performance behalten.
