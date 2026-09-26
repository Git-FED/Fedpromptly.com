(function(){
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const root=document.documentElement;
  const body=document.body;

  // Page progress: visual feedback without layout thrashing.
  const progress=document.createElement('div');
  progress.className='scroll-progress';
  progress.setAttribute('aria-hidden','true');
  body.prepend(progress);
  let ticking=false;
  function updateProgress(){
    const max=document.documentElement.scrollHeight-window.innerHeight;
    progress.style.transform=`scaleX(${max>0?window.scrollY/max:0})`;
    ticking=false;
  }
  window.addEventListener('scroll',()=>{if(!ticking){window.requestAnimationFrame(updateProgress);ticking=true;}},{passive:true});
  updateProgress();

  // Theme toggle is an anchor with a real fallback page, not an inert button.
  const nav=document.querySelector('.site-nav');
  if(nav && !nav.querySelector('[data-theme-toggle]')){
    const theme=document.createElement('a');
    theme.className='theme-toggle';
    theme.href=(nav.querySelector('.brand')?.getAttribute('href')||'index.html').replace(/[^/]*$/,'')+'theme.html';
    theme.dataset.themeToggle='';
    theme.textContent='Theme';
    theme.setAttribute('aria-label','Toggle dark and light theme');
    nav.appendChild(theme);
  }
  const saved=localStorage.getItem('fedpromptly_theme');
  root.dataset.theme=saved==='light'?'light':'dark';
  document.addEventListener('click',e=>{
    const toggle=e.target.closest('[data-theme-toggle]');
    if(toggle){
      e.preventDefault();
      const next=root.dataset.theme==='dark'?'light':'dark';
      root.dataset.theme=next;
      localStorage.setItem('fedpromptly_theme',next);
    }
  });

  // Reveal content as it enters view. Only opacity and transform are animated.
  const revealables=document.querySelectorAll('main section, .panel, .metric, .callout, .doc-article > *');
  revealables.forEach((el,i)=>{el.classList.add('reveal'); if(i<5) el.classList.add('reveal--early');});
  if('IntersectionObserver' in window && !reduceMotion.matches){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    }),{threshold:.12,rootMargin:'0px 0px -40px'});
    revealables.forEach(el=>observer.observe(el));
  }else revealables.forEach(el=>el.classList.add('is-visible'));

  // Gentle hero depth effect; disabled for reduced-motion preferences.
  const heroArt=document.querySelector('.hero-art');
  if(heroArt && !reduceMotion.matches){
    heroArt.addEventListener('pointermove',e=>{
      const r=heroArt.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      heroArt.style.setProperty('--mx',`${x*2}%`); heroArt.style.setProperty('--my',`${y*2}%`);
    });
    heroArt.addEventListener('pointerleave',()=>{heroArt.style.setProperty('--mx','0%');heroArt.style.setProperty('--my','0%');});
  }

  // Tilt cards with transform only; no layout properties are animated.
  document.querySelectorAll('[data-tilt]').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      if(reduceMotion.matches)return;
      const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(700px) rotateX(${y*-3}deg) rotateY(${x*3}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave',()=>card.style.transform='');
  });

  const grid=document.querySelector('#project-grid');
  if(grid){
    const dataPath=location.pathname.includes('/projects/')||location.pathname.includes('/support/')?'../data/portfolio.json':'data/portfolio.json';
    fetch(dataPath).then(r=>r.json()).then(data=>{
      grid.innerHTML=data.projects.map(p=>`<article class="panel project-card" data-tilt><div class="eyebrow">${p.type}</div><h3>${p.name}</h3><p>${p.description}</p><p class="muted"><strong>Status:</strong> ${p.status}<br><strong>For:</strong> ${p.audience}</p><p><strong>Try this:</strong> ${p.whatYouCanDo}</p><a href="${p.url}" aria-label="Open ${p.name}">Explore project →</a></article>`).join('');
      grid.querySelectorAll('.project-card').forEach(el=>el.classList.add('reveal','is-visible'));
    }).catch(()=>{grid.innerHTML='<p class="muted">Project catalog is temporarily unavailable. The ecosystem is still being built.</p>';});
  }
})();
