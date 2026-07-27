/**
 * Common site scripts
 * Ready for migration to framework (can become a client component later)
 */
document.addEventListener('DOMContentLoaded', function () {
    // Scroll reveal
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        els.forEach(function (el) { el.classList.add('active'); });
        return;
    }
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(function (el) { observer.observe(el); });

    // Highlight current nav link based on path
    var path = window.location.pathname.replace(/\/$/, '') || '/';
    var links = document.querySelectorAll('header nav ul a');
    links.forEach(function (link) {
        var href = link.getAttribute('href');
        if (!href) return;
        // Normalize
        var linkPath = href.replace(/\.html$/, '').replace(/\/$/, '');
        if (linkPath === '' || linkPath === 'index') linkPath = '/';
        if (path.endsWith(linkPath) || (path === '/' && (href === 'index.html' || href === '/' || href === './'))) {
            link.classList.add('active');
        }
    });
});
