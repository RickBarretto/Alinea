// Interaction study only: no filesystem writes, document compilation, or editor backend.
const $ = s => document.querySelector(s);
const root = document.documentElement;
root.dataset.theme = new URLSearchParams(location.search).get('theme') === 'dark' ? 'dark' : 'light';
const themeButton = $('#theme-toggle');
const figureSource = decodeURIComponent(document.querySelector('.figure-image img').getAttribute('src').split(',').slice(1).join(','));
function syncTheme() { const dark=root.dataset.theme==='dark';let image=figureSource;if(dark){for(const [light,tone] of [['#e8ede3','#303b30'],['#344930','#e4e8d5'],['#5a6f53','#b3bea6'],['#657c5a','#bf9f65']])image=image.replaceAll(light,tone);}document.querySelector('.figure-image img').src='data:image/svg+xml,'+encodeURIComponent(image); themeButton.setAttribute('aria-pressed',String(root.dataset.theme==='dark')); themeButton.setAttribute('aria-label',root.dataset.theme==='dark'?'Usar tema claro':'Usar tema escuro'); document.querySelectorAll('[data-workspace]').forEach(a=>{const u=new URL(a.getAttribute('href'),location.href);u.searchParams.set('theme',root.dataset.theme);u.searchParams.set('model',new URLSearchParams(location.search).get('model')==='sbc'?'sbc':'abnt');a.href=u.href;}); }
syncTheme();
themeButton.addEventListener('click',()=>{ root.dataset.theme=root.dataset.theme==='light'?'dark':'light'; syncTheme(); });
const review = $('#review-panel'), reviewToggle=$('#review-toggle'), connector=$('#comment-connector'), anchor=$('#comment-anchor');
function setReview(open) { review.hidden=!open; reviewToggle.setAttribute('aria-expanded',String(open)); reviewToggle.classList.toggle('active',open); updateConnector(); }
reviewToggle.addEventListener('click',()=>setReview(review.hidden));
$('#review-close').addEventListener('click',()=>{setReview(false);reviewToggle.focus();});
$('#comment-selection').addEventListener('click',()=>{setReview(true);activeReviewTarget='comment';$('#anchored-thread').focus({preventScroll:true});updateConnector();});
const dock=$('#insertion-dock'), launcher=$('#insert-launcher'), dockArea=$('.bottom-tools');
let dockPointerInside=false, lastInput="pointer";
document.addEventListener("keydown",()=>lastInput="keyboard",true);
document.addEventListener("pointerdown",()=>lastInput="pointer",true);
function setDock(open) { dock.hidden=!open;launcher.hidden=open;launcher.setAttribute('aria-expanded',String(open)); }
dockArea.addEventListener('pointerenter',()=>{dockPointerInside=true;setDock(true);});
dockArea.addEventListener('pointerleave',()=>{dockPointerInside=false;if(lastInput!=='keyboard'||!dockArea.contains(document.activeElement)){if(dockArea.contains(document.activeElement))document.activeElement.blur();setDock(false);}});
dockArea.addEventListener('focusin',e=>{setDock(true);if(e.target===launcher)dock.querySelector('button').focus();});
dockArea.addEventListener('focusout',()=>setTimeout(()=>{if(!dockPointerInside&&!dockArea.contains(document.activeElement))setDock(false);},0));
launcher.addEventListener('click',()=>{setDock(true);dock.querySelector('button').focus();});
let feedbackTimer;
function feedback(text) { const box=$('#demo-feedback');box.textContent=text;box.hidden=false;clearTimeout(feedbackTimer);feedbackTimer=setTimeout(()=>box.hidden=true,3500); }
document.querySelectorAll('[data-demo]').forEach(b=>b.addEventListener('click',()=>feedback(b.dataset.demo+' · comando ilustrativo neste conceito.')));
const scrollArea=$('#document-scroll');
let activeReviewTarget='comment';
function updateConnector(){const runtime=activeReviewTarget==='suggestion';const target=runtime?$('#runtime-anchor'):anchor;const item=runtime?$('#runtime-suggestion'):$('#anchored-thread');const a=target.getBoundingClientRect(),p=item.getBoundingClientRect();const view=scrollArea.getBoundingClientRect();const visible=!review.hidden&&!item.hidden&&a.bottom>130&&a.top<view.bottom-20;connector.style.display=visible?'block':'none';if(!visible)return;const x=a.right+9,y=a.top+a.height/2,x2=p.left-19,y2=p.top+45;$('#connector-path').setAttribute('d',`M${x} ${y} C${x+45} ${y},${x2-45} ${y2},${x2} ${y2}`);}

function updateOutline(){const list=[...document.querySelectorAll('.manuscript section')];let active=list[0];for(const s of list) if(s.getBoundingClientRect().top<190)active=s;document.querySelectorAll('.outline a').forEach(a=>{if(a.dataset.section===active.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});updateConnector();}
scrollArea.addEventListener('scroll',updateOutline,{passive:true});
window.addEventListener('resize',()=>{setFigureWidth(figure.getBoundingClientRect().width);updateOutline();});
document.querySelectorAll('.outline a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const s=document.getElementById(a.dataset.section);s.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});s.setAttribute('tabindex','-1');s.focus({preventScroll:true});}));
$('#anchored-thread').setAttribute('tabindex','-1');
function jumpTo(target,item){activeReviewTarget=item;target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'center'});updateConnector();}
$('#return-to-text').addEventListener('click',()=>jumpTo(anchor,'comment'));
$('#show-suggestion').addEventListener('click',()=>jumpTo($('#runtime-anchor'),'suggestion'));
// Plain document comment: no author, timestamps, reply thread or resolution metadata.
const commentNode=[...anchor.parentNode.childNodes].find(n=>n.nodeType===Node.COMMENT_NODE);
$('#comment-source').textContent='<!-- '+commentNode.data.trim()+' -->';
// Runtime analysis never creates or changes a Markdown/HTML comment node.
function analyzeLongSentence(){const text=$('#runtime-anchor').textContent;const count=[...new Intl.Segmenter('pt-BR',{granularity:'word'}).segment(text)].filter(s=>s.isWordLike).length;const enabled=$('#long-sentence-rule').checked;const flagged=enabled&&count>25;$('#suggestion-title').textContent=flagged?'Período com '+count+' palavras':'Nenhuma sugestão desta regra';$('#suggestion-count').textContent=flagged?'1':'0';reviewToggle.querySelector('.count').textContent=flagged?'2':'1';$('#show-suggestion').hidden=!flagged;$('.suggestion-explanation').hidden=!flagged;$('#runtime-anchor').classList.toggle('writing-warning',flagged);if(!flagged&&activeReviewTarget==='suggestion')activeReviewTarget='comment';updateConnector();}
$('#long-sentence-rule').addEventListener('change',analyzeLongSentence);

const figure=$('#figure-image'), sizeOutput=$('#figure-size');
function setFigureWidth(width){const max=Math.min(700,document.querySelector('.manuscript').clientWidth),v=Math.round(Math.max(320,Math.min(max,width)));figure.style.setProperty('--figure-width',v+'px');sizeOutput.textContent=v+' px';document.querySelectorAll('.resize-edge').forEach(h=>{h.setAttribute('aria-valuenow',v);h.setAttribute('aria-valuemax',max);});}
document.querySelectorAll('.resize-edge').forEach(handle=>{handle.addEventListener('pointerdown',e=>{e.preventDefault();handle.setPointerCapture(e.pointerId);const start=e.clientX,width=figure.getBoundingClientRect().width,sign=handle.dataset.side==='right'?1:-1;figure.classList.add('resizing');const move=ev=>setFigureWidth(width+2*(ev.clientX-start)*sign);const end=()=>{figure.classList.remove('resizing');handle.removeEventListener('pointermove',move);handle.removeEventListener('pointerup',end);handle.removeEventListener('pointercancel',end);};handle.addEventListener('pointermove',move);handle.addEventListener('pointerup',end);handle.addEventListener('pointercancel',end);});handle.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const current=figure.getBoundingClientRect().width,sign=handle.dataset.side==='right'?1:-1;setFigureWidth(e.key==='Home'?320:e.key==='End'?700:current+(e.key==='ArrowRight'?1:-1)*sign*(e.shiftKey?40:10));});});
// Actual text selections reuse the same small toolbar without changing manuscript layout.
const toolbar=$('#selection-toolbar');
document.addEventListener('selectionchange',()=>{const sel=getSelection();if(!sel.rangeCount||sel.isCollapsed)return;const range=sel.getRangeAt(0);if(!document.querySelector('.manuscript').contains(range.commonAncestorContainer))return;const r=range.getBoundingClientRect();if(!r.width)return;toolbar.style.position='fixed';toolbar.style.bottom='auto';toolbar.style.left=Math.max(12,Math.min(innerWidth-toolbar.offsetWidth-12,r.left))+'px';toolbar.style.top=Math.max(105,r.top-toolbar.offsetHeight-7)+'px';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!review.hidden){setReview(false);reviewToggle.focus();}else if(!dock.hidden){setDock(false);document.activeElement.blur();}}});
setFigureWidth(640);analyzeLongSentence();requestAnimationFrame(updateConnector);

if(new URLSearchParams(location.search).get('focus')==='1'){setReview(false);setDock(false);}
