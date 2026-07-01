document$.subscribe(function() {

    const languages = Array.from(document.querySelectorAll("link[rel='alternate'][hreflang]"))
        .map(link => link.getAttribute("hreflang"))
    const defaultLang = languages[0]

    const search = document.querySelector(".md-search__input")
    if (!search || !defaultLang) return

    // Monitor search results appearing in the DOM
    const observer = new MutationObserver(function() {
        const results = document.querySelectorAll(".md-search-result__item")
        const currentLang = document.documentElement.lang
        // console.log("DEBUG Search Languages: ", defaultLang)

        const otherLanguages = languages.filter(lang => lang !== defaultLang)

        results.forEach(result => {
            const link = result.querySelector("a.md-search-result__link").getAttribute("href")

            // console.log("DEBUG Search Link: ", link)

            let shouldShow = true

            if (currentLang === defaultLang) {
                // If default lang, hide any link that contains another language prefix
                if (otherLanguages.some(lang => link.includes(`/${lang}/`) || link.startsWith(`${lang}/`))) {
                    shouldShow = false
                }
            } else {
                // If non-default (e.g. 'pt'), keep only links with the current language prefix
                if (!link.includes(`/${currentLang}/`) && !link.startsWith(`${currentLang}/`)) {
                    shouldShow = false
                }
            }

            if (shouldShow) {
                result.style.display = ""
            } else {
                result.style.display = "none"
            }
        });
    });

    const searchResultsList = document.querySelector(".md-search-result__list")
    if (searchResultsList) {
        observer.observe(searchResultsList, { childList: true });
    }
})