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

// ---- carousel controls ----
(function(){
  var track = document.querySelector('.carousel-track');
  if (!track) return;
  var items = Array.from(track.querySelectorAll('.carousel-item'));
  if (!items.length) return;
  var activeIndex = 0;

  function scrollToActive(){
    var target = items[activeIndex];
    if (target) {
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
  }

  function advance(){
    activeIndex = (activeIndex + 1) % items.length;
    scrollToActive();
  }

  var interval = setInterval(advance, 3000);
  track.addEventListener('mouseenter', function(){ clearInterval(interval); });
  track.addEventListener('mouseleave', function(){ interval = setInterval(advance, 3000); });
  scrollToActive();
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
