---
hide:
  - navigation
  - toc
  - footer
search:
  exclude: true
social:
  cards: false
meta:
  - property: og:title
    content: "SimLogica.com – Criadora do Blocker Controle de Chamadas"
  - property: og:description
    content: "Blocker transforma chamadas telefônicas perturbadoras em notificações agradáveis."
  - property: og:image
    content: "https://simlogica.github.io/common/images/blocker_feature_graphic.png"
  - property: og:url
    content: "https://simlogica.github.io/"
  - property: og:type
    content: website
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