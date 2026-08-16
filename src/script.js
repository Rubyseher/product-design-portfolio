// ---- open at the top of the page ----
// a plain reload otherwise drops you back at whatever you were scrolled to,
// which reads as the page "starting" halfway down at the case studies.
// the head of each page already flips scrollRestoration to 'manual'; this
// keeps pinning the top until the last late asset has finished laying out,
// because browsers take another run at restoring once the page settles
(function(){
  var nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
  if (nav && nav.type === 'back_forward') return;   // the back button should land where they left off
  if (location.hash) return;                        // a real #anchor still gets to jump

  function toTop(){ window.scrollTo(0, 0); }

  toTop();
  document.addEventListener('DOMContentLoaded', toTop);
  window.addEventListener('load', function(){
    toTop();
    requestAnimationFrame(function(){ requestAnimationFrame(toTop); });
  });
})();

// ---- scroll reveal ----
(function(){
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function(el){ io.observe(el); });
  } else {
    items.forEach(function(el){ el.classList.add('in'); });
  }
})();

// ---- sidebar scroll-spy (case study pages) ----
(function(){
  var sections = document.querySelectorAll('.cs-section[id]');
  var links = document.querySelectorAll('.cs-sidebar [data-target]');
  if (!sections.length || !links.length) return;

  var map = {};
  links.forEach(function(l){ map[l.getAttribute('data-target')] = l; });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        var link = map[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(function(l){ l.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    sections.forEach(function(s){ io.observe(s); });
  }

  links.forEach(function(l){
    l.addEventListener('click', function(e){
      e.preventDefault();
      var id = l.getAttribute('data-target');
      var target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

// ---- carousel: continuous auto scroller ----
(function(){
  var track = document.querySelector('.carousel-track');
  if (!track) return;
  var items = Array.from(track.querySelectorAll('.carousel-item'));
  if (!items.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // duplicate the set so the loop can wrap seamlessly
  items.forEach(function(item){
    var clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    var img = clone.querySelector('img');
    if (img) img.setAttribute('alt', '');
    track.appendChild(clone);
  });

  var SPEED = 60; // px per second

  function sync(){
    var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    var shift = items.reduce(function(sum, item){
      return sum + item.getBoundingClientRect().width + gap;
    }, 0);
    track.style.setProperty('--marquee-shift', shift + 'px');
    track.style.setProperty('--marquee-duration', (shift / SPEED) + 's');
  }

  sync();
  window.addEventListener('resize', sync);
  window.addEventListener('load', sync);
})();

// ---- hero: design <-> code morph ----
(function(){
  var morph = document.getElementById('morph');
  if (!morph) return;

  var btns  = Array.prototype.slice.call(morph.querySelectorAll('.mt-btn'));
  var views = Array.prototype.slice.call(morph.querySelectorAll('.morph-view'));
  var caps  = Array.prototype.slice.call(morph.querySelectorAll('.morph-cap'));
  var order = ['design', 'code'];
  var timer = null;

  function setView(name){
    btns.forEach(function(b){
      var on = b.getAttribute('data-view') === name;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    views.forEach(function(v){
      var on = v.getAttribute('data-view') === name;
      v.classList.toggle('is-on', on);
      v.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
    caps.forEach(function(c){
      c.classList.toggle('is-on', c.getAttribute('data-cap') === name);
    });
  }

  function current(){
    var on = morph.querySelector('.morph-view.is-on');
    return on ? on.getAttribute('data-view') : 'design';
  }

  function stop(){
    if (timer) { clearInterval(timer); timer = null; }
  }

  function start(){
    stop();
    timer = setInterval(function(){
      setView(order[(order.indexOf(current()) + 1) % order.length]);
    }, 3200);
  }

  btns.forEach(function(b){
    b.addEventListener('click', function(){
      stop();                                  // hand control to the visitor for good
      setView(b.getAttribute('data-view'));
    });
  });

  morph.addEventListener('mouseenter', stop);

  setView('design');

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced) {
    // hold on the design frame first, then reveal that it's also shipped code
    setTimeout(start, 1800);
  }
})();

// ---- hero video: one play per page load ----
(function(){
  var vid = document.querySelector('.hero-video video');
  if (!vid) return;

  // returning via the back button restores the page from cache with the video
  // parked on its last frame, so replay it as if this were a fresh load
  window.addEventListener('pageshow', function(e){
    if (!e.persisted) return;
    vid.currentTime = 0;
    var p = vid.play();
    if (p && p.catch) p.catch(function(){});
  });
})();

// ---- card videos: only fetch once the card is nearly in view ----
// these sit below the fold and weigh several MB each, so the src stays
// parked in data-src until it's worth spending the bandwidth
(function(){
  var vids = document.querySelectorAll('.card-video[data-src]');
  if (!vids.length) return;

  function load(v){
    if (!v.dataset.src) return;
    v.src = v.dataset.src;
    delete v.dataset.src;
    var p = v.play();
    if (p && p.catch) p.catch(function(){});
  }

  if (!('IntersectionObserver' in window)){
    Array.prototype.forEach.call(vids, load);
    return;
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (!e.isIntersecting) return;
      load(e.target);
      io.unobserve(e.target);
    });
  }, { rootMargin: '300px 0px' });

  Array.prototype.forEach.call(vids, function(v){ io.observe(v); });
})();

// ---- scroll progress bar (case study pages) ----
(function(){
  var bar = document.getElementById('scrollProgress');
  if (!bar) return;

  var ticking = false;
  function update(){
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    bar.style.width = pct + '%';
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

// ---- stat numbers: count up once, on first view ----
// only the cells carrying data-count animate; ranges like "32-200+" are left
// alone because counting them up would be nonsense
(function(){
  var nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return;

  function run(el){
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    var suffix   = el.getAttribute('data-suffix') || '';
    var decimals = (String(target).split('.')[1] || '').length;
    var start = null, DURATION = 800;

    function frame(now){
      if (start === null) start = now;
      var t = Math.min((now - start) / DURATION, 1);
      var eased = 1 - Math.pow(1 - t, 3);          // ease-out, lands softly
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    el.textContent = (0).toFixed(decimals) + suffix;
    requestAnimationFrame(frame);
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (!e.isIntersecting) return;
      run(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.5 });

  Array.prototype.forEach.call(nums, function(el){ io.observe(el); });
})();

// ---- back to top ----
(function(){
  var link = document.getElementById('backToTop');
  if (!link) return;
  link.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ---- dot grids: 100 dots, N of them lit ----
// written by script so the markup stays a single element instead of 100 spans
(function(){
  var grids = document.querySelectorAll('[data-dots]');
  Array.prototype.forEach.call(grids, function(el){
    var total = parseInt(el.getAttribute('data-dots'), 10) || 0;
    var on    = parseInt(el.getAttribute('data-on'), 10) || 0;
    var frag  = document.createDocumentFragment();
    for (var i = 0; i < total; i++){
      var dot = document.createElement('i');
      if (i < on) dot.className = 'on';
      frag.appendChild(dot);
    }
    el.appendChild(frag);
  });
})();

// ---- scroll animation layer (case study pages) ----
// one observer drives everything: elements marked .anim get .is-in once they
// enter view, and containers listed in STAGGER hand each child an index so the
// CSS can cascade the delay. Nothing re-hides on scroll back up.
(function(){
  var root = document.querySelector('.cs-content');
  if (!root && !document.querySelector('.stage-statement')) return;

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // containers whose children should arrive in sequence rather than together
  var STAGGER = [
    '.meta-grid', '.statgrid', '.feature-grid', '.insight-grid', '.friction-grid',
    '.criteria-row', '.val-cols', '.option-grid', '.persona-grid', '.market-row',
    '.chiprow', '.sketch-grid', '.guardrails', '.learnings', '.vlist',
    '.qa', '.ba-grid', '.outcome-pair', '.cluster', '.tc'
  ].join(',');

  // things that get their own entrance, no children involved
  var SOLO = [
    '.cs-content h2', 'mark.sweep', '.matrix', '.quote-band', '.northstar',
    '.hmw', '.flow-block', '.inset', '.band',
    // charts draw themselves once they are on screen
    '.rate-funnel', '.donut-row'
  ].join(',');

  var targets = [];

  Array.prototype.forEach.call(document.querySelectorAll(STAGGER), function(box){
    // a staggered box owns its children's entrance, so drop the blanket fade
    box.classList.remove('reveal');
    box.classList.add('stagger');
    Array.prototype.forEach.call(box.children, function(child, i){
      child.style.setProperty('--i', i);
    });
    targets.push(box);
  });

  Array.prototype.forEach.call(document.querySelectorAll(SOLO), function(el){
    el.classList.remove('reveal');
    targets.push(el);
  });

  // figures reveal with a wipe rather than a plain fade
  Array.prototype.forEach.call(document.querySelectorAll('.cs-content figure > .visual-slot, .cs-content figure > img, .cs-content figure > video'), function(el){
    var fig = el.parentNode;
    if (fig.closest('.sketch-grid, .ba-grid, .option-grid')) return;  // already staggered by their box
    el.classList.add('anim-wipe');
    fig.classList.remove('reveal');
    fig.classList.add('wipe-host');
    targets.push(fig);
  });

  // matrix points need their index for the one-at-a-time landing
  Array.prototype.forEach.call(document.querySelectorAll('.matrix .mx-pt'), function(pt, i){
    pt.style.setProperty('--i', i);
  });

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function(el){ el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function(el){ io.observe(el); });
  }

  // the hero sits above the fold, so it plays on load rather than on scroll
  var heroBits = document.querySelectorAll('.stage-statement, .stage-center .cs-eyebrow, .stage-center .stage-sub');
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      Array.prototype.forEach.call(heroBits, function(el){ el.classList.add('is-in'); });
    });
  });
})();
