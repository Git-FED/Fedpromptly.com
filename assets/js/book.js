(function(){
  const bookKey='fedpromptly_small_build_book';
  const state=JSON.parse(localStorage.getItem(bookKey)||'{}');
  const checks=[...document.querySelectorAll('[data-chapter-check]')];
  const progress=document.querySelector('[data-book-progress]');
  const progressLabel=document.querySelector('[data-book-progress-label]');
  const status=document.querySelector('[data-save-status]');
  const notes=[...document.querySelectorAll('[data-book-note]')];
  const total=checks.length;
  function save(){localStorage.setItem(bookKey,JSON.stringify(state));}
  function update(){
    const done=checks.filter(c=>c.checked).length;
    const percent=total?Math.round(done/total*100):0;
    if(progress)progress.value=percent;
    if(progressLabel)progressLabel.textContent=`${done} of ${total} chapters complete · ${percent}%`;
    state.completed=checks.filter(c=>c.checked).map(c=>c.value); save();
  }
  checks.forEach(c=>{c.checked=(state.completed||[]).includes(c.value);c.addEventListener('change',update);});
  notes.forEach(n=>{n.value=state[n.dataset.bookNote]||'';n.addEventListener('input',()=>{state[n.dataset.bookNote]=n.value;save();if(status){status.textContent='Saved locally';clearTimeout(n._saveTimer);n._saveTimer=setTimeout(()=>status.textContent='All notes stay in this browser.',1200);}});});
  function download(){
    const lines=['THE SMALL BUILD — PERSONAL WORKBOOK','',`Progress: ${progressLabel?progressLabel.textContent:''}`,''];
    notes.forEach(n=>{lines.push(n.dataset.bookNote.toUpperCase(),n.value||'(blank)','');});
    const blob=new Blob([lines.join('\n')],{type:'text/plain'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='the-small-build-workbook.txt';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);
  }
  document.querySelector('[data-download-workbook]')?.addEventListener('click',e=>{e.preventDefault();download();});
  update();
  const readerProgress=document.querySelector('[data-reader-progress]');
  function scrollUpdate(){const max=document.documentElement.scrollHeight-innerHeight; if(readerProgress)readerProgress.style.transform=`scaleX(${max>0?scrollY/max:0})`;}
  addEventListener('scroll',scrollUpdate,{passive:true});scrollUpdate();
})();
