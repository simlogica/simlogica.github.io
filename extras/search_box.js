
// --- Search trigger button ---
document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.getElementById("page-search-trigger");
    if (!trigger) return;

    const openSearch = () => {
        const searchLabel = document.querySelector("label[for='__search']");
        if (searchLabel) searchLabel.click();
    };

    trigger.addEventListener("click", openSearch);
    trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openSearch();
        }
    });
});

