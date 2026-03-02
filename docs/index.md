---
hide:
  - navigation
  - toc
  - footer
search:
  exclude: true
---

<script>
  (function () {
    var path = window.location.pathname;
    // Detect language prefix, e.g. /pt/
    var langMatch = path.match(/^\/([a-z]{2}(?:-[a-z]{2,4})?)\//i);
    var lang = langMatch ? langMatch[1] : null;
    var base = document.querySelector('meta[name="site_url"]') 
               ? document.querySelector('meta[name="site_url"]').content 
               : '/';
    var target = lang ? '/' + lang + '/blocker/' : '/blocker/';
    window.location.replace(target);
  })();
</script>