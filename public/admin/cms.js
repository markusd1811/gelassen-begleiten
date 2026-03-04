CMS.registerPreviewStyle('/styles.css');

// Preview für FAQ
var FAQPreview = createClass({
    render: function () {
        var entry = this.props.entry;
        var question = entry.getIn(['data', 'question']);
        var answer = entry.getIn(['data', 'answer']);
        var category = entry.getIn(['data', 'category']);

        return h('div', { className: "container", style: { padding: "2rem" } },
            h('div', { className: "faq-item", style: { background: "white", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", marginBottom: "1rem" } },
                h('div', { className: "faq-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" } },
                    h('h4', { style: { margin: 0, color: "var(--clr-text-primary)", fontSize: "1.1rem" } }, question),
                    h('span', { className: "badge", style: { fontSize: "0.8rem", padding: "0.2rem 0.6rem", background: "var(--clr-accent-2)", color: "white", borderRadius: "1000px" } }, category)
                ),
                h('div', { className: "faq-content" },
                    h('p', { style: { margin: 0, color: "var(--clr-text-secondary)", lineHeight: "1.6" } }, answer)
                )
            )
        );
    }
});
CMS.registerPreviewTemplate("faq", FAQPreview);

// Preview für Blog
var BlogPreview = createClass({
    render: function () {
        var entry = this.props.entry;
        var title = entry.getIn(['data', 'title']);
        var capsule = entry.getIn(['data', 'answer_capsule']);
        var image = entry.getIn(['data', 'image']);
        var body = this.props.widgetFor('body');

        // Asset auflösen
        var bg = image ? this.props.getAsset(image) : null;

        return h('div', { className: "container", style: { padding: "2rem", maxWidth: "800px", margin: "0 auto" } },
            h('article', { className: "blog-post" },
                bg ? h('img', { src: bg.toString(), style: { width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "16px", marginBottom: "2rem" } }) : null,
                h('h1', { style: { fontSize: "2.5rem", color: "var(--clr-text-primary)", marginBottom: "1rem" } }, title),

                capsule ? h('div', { style: { background: "#FFF4E6", borderLeft: "4px solid #FFBE6B", padding: "1.5rem", borderRadius: "0 12px 12px 0", marginBottom: "2rem" } },
                    h('h3', { style: { margin: "0 0 0.5rem 0", fontSize: "1.1rem", color: "#B36B00" } }, "Die schnelle Antwort"),
                    h('p', { style: { margin: 0, color: "#333", lineHeight: "1.6" } }, capsule)
                ) : null,

                h('div', { className: "content-body", style: { lineHeight: "1.8", color: "var(--clr-text-secondary)", fontSize: "1.1rem" } }, body)
            )
        );
    }
});
CMS.registerPreviewTemplate("blog", BlogPreview);
