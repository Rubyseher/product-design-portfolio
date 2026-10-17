// reveal.js: scroll reveal shared by the ShadeMatch and LinkedIn case studies.
// Loaded from the <head>, so the "js" class is on <html> before first paint.
// The page is planned once the DOM is parsed: every block that should arrive on
// scroll gets .reveal, one IntersectionObserver adds .in when it is 12% in view,
// and reveal.css does the rest. Each element plays once and is then let go.

(function(){
  var root = document.documentElement;
  root.classList.add('js');

  // if the planning below throws or never runs, hand the page back as plain HTML
  var bail = setTimeout(function(){
    if (!root.classList.contains('rv-ready')) root.classList.remove('js');
  }, 4000);

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var STEP = 80;        // between children of a group: stats, rows, cards
  var FLOW = 150;       // between the steps of a flow: status, measurement, screens
  var COUNT_MS = 1200;  // big numbers counting up

  // ---- the plan: what arrives how ----
  var SKIP = 'script, style, template, br, [hidden]';
  var HEADING = '.sec-eyebrow, h2, h3, h4, .fb-num';
  var MEDIA = 'figure, figure > a, .cs-video, .comp-media, .venn, .matrix-wrap, .phone-step';

  // containers that hand their children to the plan one by one
  var FLATTEN = [
    '.cs-section', '.band', '.flow-block', '.fb-grid', '.fb-grid > div', '.fb-media > figure',
    '.comp-row', '.comp-body', '.closing-statement', '.nsm', '.gates', '.blackhole', '.rv-cols',
    '.persona-grid', '.persona-card', '.cs-intro .wrap', '.site-footer .wrap'
  ].join(',');

  // children arrive 80ms apart, left to right and top to bottom. [container, children]
  var GROUPS = [
    ['.meta-grid'], ['.statgrid'], ['.stat-six'], ['.market-row'], ['.feature-grid'], ['.criteria-row'],
    ['.chiprow'], ['.tc'], ['.vo-cards'], ['.sm-cols'], ['.sm-rows'], ['.vv'], ['.gr-list'], ['.def-rows'],
    ['.cl-rows'], ['.ba-rows'], ['.fr-list'], ['.cw'], ['.qa'], ['.lw'], ['.vd-list'], ['.ins-rows'],
    ['.fx-list'], ['.id-rows'], ['.p-stats'], ['.overview-mock'], ['.versus'], ['.stack-steps'],
    ['.vt'], ['.vr-list'], ['.src-rows'], ['.swatch-strip'], ['.gap-compare'], ['.why-primary'],
    ['.comp-grid'], ['.foot-links'], ['.venn-legend'], ['.g-top'], ['.rv-col'],
    ['.audit-table, .cut-table', 'tr']
  ];

  // steps and arrows arrive 150ms apart, as if updates were coming in. [stage, items]
  var FLOWS = [
    ['.bh-lane', '.dgm-lab, .bh-s, .bh-arr, .bh-held-tag'],
    ['.stepper', '.stp'], ['.nsm-steps'], ['.phone-row'], ['.id-ba'], ['.plan-vs'], ['.g-cols'], ['.fnl']
  ];

  // parts of a block that draw themselves once it has arrived.
  // [selector, kind, ms after the block (or a function of the index among siblings)]
  var SUBS = [
    ['.mb-fill', 'bar', function(i){ return 200 + i * STEP; }],
    ['.ms-fill', 'bar', function(i){ return 200 + i * STEP; }],
    ['.p-bar-fill', 'bar', 200],
    ['.tl-bar i', 'bar', function(i){ return 200 + i * 250; }],
    ['.rng-base', 'bar', 200], ['.rng-seg', 'bar', 500],
    ['.evid-bars i.on', 'bar', function(i){ return 200 + i * STEP; }],
    // guardrail scales: the bar, then the healthy band, then the warning marker.
    // the band and marker hang off the bar, so their times add to its own
    ['.sc-track', 'bar', 0], ['.sc-ok', 'bar', 250], ['.sc-warn', 'pop', 550],
    ['.nl-bar', 'bar', 0], ['.nl-ok', 'bar', 250], ['.nl-pin', 'pop', 550],
    // dot grids fade in, then the lit dots come on one by one
    ['.rf-grid', 'fade', 100], ['.rf-grid i.is-reply', 'lit', function(i){ return 450 + i * 220; }],
    ['.dotgrid', 'fade', 100], ['.dotgrid i.on', 'lit', function(i){ return 450 + i * 200; }],
    ['.fnl-dots.is-out i.on', 'lit', function(i){ return 250 + i * 140; }],
    ['.g-dot', 'pop', 120],
    // positioning quadrants: axes first, then each point with its label
    ['.matrix', 'axes', 0], ['.mx-axis', 'fade', 350], ['.mx-pt', 'pop', function(i){ return 550 + i * 100; }],
    ['.qd-axis', 'draw', 0], ['.qd-ax', 'fade', 350],
    ['.qd-dot', 'pop', function(i){ return 600 + i * 100; }], ['.qd-pt', 'pop', function(i){ return 600 + i * 100; }]
  ];

  // big numbers: they count up and land on exactly the text that was written
  var COUNTERS = '[data-grad-num]:not(.g-num):not(.ss-n), [data-count], .gs-num, .rf-figure b, .dn-mid b';

  // ---- helpers ----
  function $(sel, ctx){ return [].slice.call((ctx || document).querySelectorAll(sel)); }
  function find(list, el){
    for (var i = 0; i < list.length; i++) if (el.matches(list[i][0])) return list[i];
    return null;
  }
  function inDocOrder(a, b){ return a.compareDocumentPosition(b) & 4 ? -1 : 1; }
  function docTop(el){ return el.getBoundingClientRect().top + window.pageYOffset; }

  var io, pending = new Set();

  function tag(el, kind){
    el.classList.add('reveal', 'rv-' + kind);
    el._rvk = kind;
  }
  function watch(el){ pending.add(el); io.observe(el); }
  function hostOf(el){
    for (var p = el.parentElement; p; p = p.parentElement) {
      if (p.classList.contains('reveal') || p._stage) return p;
    }
    return null;
  }
  function attach(el, host, off){
    el._off = off;
    (host._kids = host._kids || []).push(el);
  }
  function hook(el, fn){ (el._hooks = el._hooks || []).push(fn); }
  function kindOf(el){ return el.matches(MEDIA) ? 'media' : 'rise'; }

  // ---- planning ----
  function block(el, mode, key){
    if (el._rvk || el._stage) return;
    tag(el, kindOf(el));
    el._mode = mode;
    el._key = key;
    el._head = el.matches(HEADING);
    watch(el);
    if (el.matches('.chiprow .chip.is-out')) hook(el, function(){ el.classList.add('is-struck'); });
  }

  function group(el, kidsSel){
    el._planned = true;
    (kidsSel ? $(kidsSel, el) : [].slice.call(el.children)).forEach(function(k){
      if (!k.matches(SKIP)) block(k, 'group', el);
    });
  }

  function flow(stage, itemsSel){
    stage._planned = stage._stage = true;
    var items = itemsSel ? $(itemsSel, stage) : [].slice.call(stage.children);
    items.forEach(function(it, i){
      if (it._rvk) return;
      tag(it, kindOf(it));
      attach(it, stage, i * FLOW);
      // the dots of a status stepper fill in order, as each step lands
      if (it.matches('.stp.is-done, .stp.is-now')) {
        hook(it, function(instant, d){ later(function(){ it.classList.add('on'); }, instant ? 0 : d + 220); });
      }
    });
    watch(stage);
  }

  function plan(el, mode, key){
    if (!el || el.nodeType !== 1 || el.matches(SKIP)) return;
    var f = find(FLOWS, el);
    if (f) return flow(el, f[1]);
    var g = find(GROUPS, el);
    if (g) return group(el, g[1]);
    if (el.matches(FLATTEN)) {
      var inSection = el.matches('.cs-section');
      [].forEach.call(el.children, function(c){ plan(c, inSection ? 'sect' : 'solo', el); });
      return;
    }
    block(el, mode, key);
  }

  function later(fn, ms){ if (ms > 0) setTimeout(fn, ms); else fn(); }

  // ---- showing ----
  function show(el, instant, delay){
    if (el._shown) return;
    el._shown = true;
    pending.delete(el);
    io.unobserve(el);
    var d = (delay || 0) + (el._off || 0);

    if (instant) el.classList.add('rv-now');
    else el.style.setProperty('--rv-d', d + 'ms');
    if (el.classList.contains('reveal')) el.classList.add('in');
    // the few old effects in style.css keyed on is-in: the sweep, the donut arc, the glow
    if (el.matches('mark.sweep, h2, .donut-row, .hmw, .northstar, .quote-band')) {
      if (instant) { el.classList.add('is-in'); } else { later(function(){ el.classList.add('is-in'); }, d); }
    }
    (el._kids || []).forEach(function(k){ show(k, instant, d); });
    (el._hooks || []).forEach(function(fn){ fn(instant, d); });
  }

  // the observer hands over a batch. what enters together is staggered by what
  // it is: group children 80ms apart, and under a heading the line after it
  // follows 120ms later and the content 240ms later
  function arrive(batch){
    batch.sort(inDocOrder);
    var runs = new Map();
    batch.forEach(function(el){
      var r = runs.get(el._key) || { n: 0, after: -1 };
      runs.set(el._key, r);
      var d = 0;
      if (el._mode === 'group') {
        d = r.n * STEP;
      } else if (el._mode === 'sect') {
        if (el._head) r.after = 0;
        else if (r.after >= 0) { r.after++; d = Math.min(r.after, 2) * 120; }
      }
      r.n++;
      show(el, false, d);
    });
  }

  function showNow(el){ show(el, true, 0); }

  // everything whose bottom edge sits above y: the reader is already past it
  function revealAbove(y){
    var done = [];
    pending.forEach(function(el){
      if (el.getBoundingClientRect().bottom + window.pageYOffset <= y + 1) done.push(el);
    });
    done.forEach(showNow);
  }

  function showAll(){ Array.from(pending).forEach(showNow); }

  // ---- big numbers ----
  var NUM = /\d[\d,]*(?:\.\d+)?/g;

  function parts(txt){
    var out = [], last = 0, m;
    NUM.lastIndex = 0;
    while ((m = NUM.exec(txt))) {
      var clean = m[0].replace(/,/g, '');
      out.push({
        pre: txt.slice(last, m.index),
        val: parseFloat(clean),
        dec: (clean.split('.')[1] || '').length,
        pad: /^0\d/.test(clean) ? clean.split('.')[0].length : 0,
        comma: m[0].indexOf(',') > -1
      });
      last = m.index + m[0].length;
    }
    return { list: out, tail: txt.slice(last) };
  }

  function fmt(p, v){
    var s = v.toFixed(p.dec);
    if (p.pad) while (s.split('.')[0].length < p.pad) s = '0' + s;
    if (p.comma) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return s;
  }

  function counter(el){
    var txt = el.textContent;
    var p = parts(txt);
    // nothing to count: no digits, a zero, or an ordinal like 1st
    if (!p.list.length || el.children.length || /\d(st|nd|rd|th)\b/.test(txt) ||
        !p.list.some(function(x){ return x.val > 0; })) return null;
    el.setAttribute('aria-label', txt);
    if (!el.getAttribute('role')) el.setAttribute('role', 'img');
    return { el: el, text: txt, p: p, frame: 0 };
  }

  function lock(c, on){
    var s = c.el.style;
    if (on) {
      var w = c.el.getBoundingClientRect().width;
      if (getComputedStyle(c.el).display === 'inline') { s.display = 'inline-block'; c.inline = true; }
      s.minWidth = s.maxWidth = w + 'px';
      s.whiteSpace = 'nowrap';
    } else {
      s.removeProperty('min-width'); s.removeProperty('max-width'); s.removeProperty('white-space');
      if (c.inline) s.removeProperty('display');
    }
  }

  function render(c, k){
    c.el.textContent = c.p.list.map(function(x){ return x.pre + fmt(x, x.val * k); }).join('') + c.p.tail;
  }

  function finish(c){
    cancelAnimationFrame(c.frame);
    if (c.locked) { lock(c, false); c.locked = false; }
    c.el.textContent = c.text;
  }

  function count(c, instant, delay){
    if (instant) { finish(c); return; }
    lock(c, true);
    c.locked = true;
    render(c, 0);
    setTimeout(function(){
      var t0 = null;
      (function step(now){
        if (t0 === null) t0 = now;
        var t = Math.min((now - t0) / COUNT_MS, 1);
        if (t >= 1) { finish(c); return; }
        render(c, 1 - Math.pow(1 - t, 3));       // ease-out, lands softly
        c.frame = requestAnimationFrame(step);
      })(performance.now());
    }, delay);
  }

  // ---- toggles: Show more, Why it matters ----
  function slide(d){
    var sum = d.querySelector(':scope > summary');
    if (!sum) return;
    sum.addEventListener('click', function(e){
      if (reduced || !d.animate) return;
      e.preventDefault();
      if (d._anim) return;                 // mid slide: let it land first
      var opening = !d.open;
      var from = d.offsetHeight, to;
      if (opening) { d.open = true; to = d.offsetHeight; }
      else { d.open = false; to = d.offsetHeight; d.open = true; }
      var body = [].slice.call(d.children).filter(function(c){ return c !== sum; });
      d.style.overflow = 'hidden';
      d.style.boxSizing = 'border-box';
      var opts = { duration: 300, easing: 'ease' };
      d._anim = d.animate({ height: [from + 'px', to + 'px'] }, opts);
      body.forEach(function(c){ c.animate({ opacity: opening ? [0, 1] : [1, 0] }, opts); });
      d._anim.onfinish = function(){
        if (!opening) d.open = false;
        d.style.overflow = d.style.boxSizing = '';
        d._anim = null;
      };
    });
  }

  // ---- build ----
  function build(){
    io = new IntersectionObserver(function(entries){
      var batch = [];
      entries.forEach(function(e){
        var el = e.target;
        if (el._shown) return;
        var rb = e.rootBounds;
        if (e.isIntersecting) {
          var vh = rb ? rb.height : window.innerHeight;
          // 12% of it in view, or (for something taller than the screen) a good bite of the screen
          if (e.intersectionRatio >= 0.12 || e.intersectionRect.height >= vh * 0.4) batch.push(el);
        } else if (e.boundingClientRect.bottom <= (rb ? rb.top : 0)) {
          showNow(el);        // already above the viewport: no animation
        }
      });
      if (batch.length) arrive(batch);
    }, { rootMargin: '0px 0px -12% 0px', threshold: [0, 0.12] });

    // the old hand-placed .reveal classes give way to the plan
    var legacy = $('.reveal');
    legacy.forEach(function(el){ el.classList.remove('reveal'); });

    // 1. the hero: headline and the line under it play on load
    var h1 = document.querySelector('h1.stage-statement');
    var sub = document.querySelector('.stage-center .stage-sub');
    var intro = [h1, sub].filter(Boolean);
    intro.forEach(function(el, i){ tag(el, 'rise'); el._off = i * 120; });

    // 2. blocks, groups and flows
    ['.swatch-strip', '.cs-intro .wrap', '.cs-content', '.site-footer .wrap'].forEach(function(sel){
      $(sel).forEach(function(c){
        if (sel === '.cs-content') $('.cs-section', c).forEach(function(s){ plan(s, 'solo', null); });
        else plan(c, 'solo', c);
      });
    });
    // groups and flows tucked inside a block still get their own arrival
    GROUPS.forEach(function(g){ $(g[0]).forEach(function(el){ if (!el._planned) group(el, g[1]); }); });
    FLOWS.forEach(function(f){ $(f[0]).forEach(function(el){ if (!el._planned) flow(el, f[1]); }); });

    // 3. parts that draw themselves inside a block
    SUBS.forEach(function(s){
      var seen = new Map();
      $(s[0]).forEach(function(el){
        if (el._rvk) return;
        var host = hostOf(el);
        tag(el, s[1]);
        if (el.matches('.ms-fill.down')) el.classList.add('rv-r');   // a drop grows leftwards from the centre line
        if (s[1] === 'draw') el.style.setProperty('--len', el.getTotalLength());
        var n = host ? (seen.get(host) || 0) : 0;
        if (host) seen.set(host, n + 1);
        var off = typeof s[2] === 'function' ? s[2](n, el) : s[2];
        if (host) attach(el, host, off);
        else { el._off = off; watch(el); }
      });
    });

    // 4. big numbers ride on whatever block holds them
    $(COUNTERS).forEach(function(el){
      var c = counter(el);
      if (!c) return;
      var host = hostOf(el);
      if (!host) { tag(el, 'rise'); watch(el); host = el; }
      hook(host, function(instant, d){ count(c, instant, d); });
    });

    // 5. anything that was hand-marked before and is still unplanned
    legacy.forEach(function(el){
      if (!el._rvk && !el._stage && !el.closest('.reveal') && !el._planned) block(el, 'solo', el.parentNode);
    });

    // 6. marker sweeps are not hidden, they just wait until they are seen
    $('mark.sweep').forEach(watch);

    $('details').forEach(slide);

    root.classList.add('rv-ready');
    clearTimeout(bail);

    if (reduced) { intro.forEach(showNow); showAll(); return; }

    // anything already above the screen (a reload partway down, a #link) is simply there
    var hash = location.hash && document.getElementById(location.hash.slice(1));
    revealAbove(hash ? docTop(hash) : window.pageYOffset);

    // the hero plays on load
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){ intro.forEach(function(el){ show(el, false, 0); }); });
    });
  }

  // ---- anchors: left nav, scroll cue, #links, back to top ----
  // the page scrolls smoothly (html { scroll-behavior }). what lies above the
  // destination is revealed first, with no animation, so the glide passes over
  // finished content instead of a trail of things fading in
  document.addEventListener('click', function(e){
    if (!io || !e.target.closest) return;
    var a = e.target.closest('a[href^="#"], [data-target]');
    if (!a) return;
    var id = a.getAttribute('data-target') || a.getAttribute('href').slice(1);
    var dest = id ? document.getElementById(id) : null;
    var y = 0;
    if (dest) y = docTop(dest) - (parseFloat(getComputedStyle(dest).scrollMarginTop) || 0);
    revealAbove(y);
  }, true);

  // the last stretch of the page can never climb above the observer's bottom
  // margin, so at the very bottom whatever is on screen simply arrives
  var checking = false;
  window.addEventListener('scroll', function(){
    if (checking || !io) return;
    checking = true;
    requestAnimationFrame(function(){
      checking = false;
      var vh = window.innerHeight;
      if (vh + window.pageYOffset < document.documentElement.scrollHeight - 2) return;
      var batch = [];
      pending.forEach(function(el){
        var r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) batch.push(el);
      });
      if (batch.length) arrive(batch);
    });
  }, { passive: true });

  window.addEventListener('hashchange', function(){
    var dest = location.hash && document.getElementById(location.hash.slice(1));
    if (io && dest) revealAbove(docTop(dest));
  });

  // tabbing into something not yet shown shows it
  document.addEventListener('focusin', function(e){
    var el = e.target.closest && e.target.closest('.reveal');
    for (; el; el = el.parentElement && el.parentElement.closest('.reveal')) showNow(el);
  });

  // printing: all of it, finished
  window.addEventListener('beforeprint', function(){ if (io) showAll(); });

  function start(){
    try { build(); }
    catch (err) {
      root.classList.remove('js');
      if (window.console) console.error('reveal.js:', err);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
