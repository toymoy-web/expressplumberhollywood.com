(function () {
  var t = document.getElementById('mob-toggle'),
      d = document.getElementById('mob-drawer'),
      o = document.getElementById('mob-overlay'),
      c = document.getElementById('drawer-close');
  if (t && d && o) {
    var open = function () {
      d.removeAttribute('hidden'); o.classList.add('visible');
      t.setAttribute('aria-expanded', 'true'); t.setAttribute('aria-label', 'Close navigation menu');
      document.documentElement.style.overflow = 'hidden';
    };
    var close = function () {
      d.setAttribute('hidden', ''); o.classList.remove('visible');
      t.setAttribute('aria-expanded', 'false'); t.setAttribute('aria-label', 'Open navigation menu');
      document.documentElement.style.overflow = '';
    };
    t.addEventListener('click', function () { t.getAttribute('aria-expanded') === 'true' ? close() : open(); });
    if (c) c.addEventListener('click', close);
    o.addEventListener('click', close);
    d.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 768) close(); });
  }
  document.querySelectorAll('[data-triage]').forEach(function (box) {
    var btns = box.querySelectorAll('.triage-btn'), panels = box.querySelectorAll('.triage-panel');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var target = b.getAttribute('data-target'), already = b.getAttribute('aria-pressed') === 'true';
        btns.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        panels.forEach(function (p) { p.hidden = true; });
        if (!already) { b.setAttribute('aria-pressed', 'true'); var p = box.querySelector('#' + target); if (p) p.hidden = false; }
      });
    });
  });
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
})();
