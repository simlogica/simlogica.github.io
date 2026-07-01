/**
 * Assembles mailto: links at runtime to protect the email address from scrapers.
 *
 * Usage in HTML:
 *   <a href="#" class="mail-link" data-name="support" data-domain="simlogica.com"
 *      data-subject="[Track-Bug] Blocker">...</a>
 */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a.mail-link").forEach((link) => {
        const user    = link.dataset.u;
        const domain  = link.dataset.d;
        const subject = link.dataset.s || "";

        if (!user || !domain) return;

        link.addEventListener("click", (e) => {
            e.preventDefault();
            const addr = `${user}@${domain}`;
            const mailto = `mailto:${addr}?subject=${encodeURIComponent(subject)}`;
            window.location.href = mailto;
        });
    });
});