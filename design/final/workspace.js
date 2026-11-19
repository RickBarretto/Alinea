// Shared interaction-study controls. No registry requests or application persistence.
(() => {
  const params = new URLSearchParams(location.search);
  const state = {theme: params.get('theme') === 'dark' ? 'dark' : 'light', model: params.get('model') === 'sbc' ? 'sbc' : 'abnt'};
  const root = document.documentElement;
  let toastTimer;
  function routes() { document.querySelectorAll('[data-route]').forEach(a => { const u = new URL(a.dataset.route, location.href); u.searchParams.set('theme',state.theme);u.searchParams.set('model',state.model);a.href=u.href; }); }
  function theme() { root.dataset.theme=state.theme;const b=document.getElementById('theme-toggle');b.setAttribute('aria-pressed',String(state.theme==='dark'));b.setAttribute('aria-label',state.theme==='dark'?'Usar tema claro':'Usar tema escuro');routes(); }
  document.getElementById('theme-toggle').addEventListener('click',()=>{state.theme=state.theme==='light'?'dark':'light';theme();});
  function notice(text) {const n=document.getElementById('notice');n.textContent=text;n.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>n.hidden=true,4500);}
  function route(path,extra={}){const u=new URL(path,location.href);u.searchParams.set('theme',state.theme);u.searchParams.set('model',state.model);for(const [k,v]of Object.entries(extra))u.searchParams.set(k,v);return u.href;}
  window.AlineaConcept={state,params,routes,route,notice};theme();
})();
