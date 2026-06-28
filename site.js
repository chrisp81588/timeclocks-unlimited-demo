/* Time Clocks Unlimited — shared chrome (header, nav, footer, mobile menu) + interactions */
function icon(name, stroke){
  const s = stroke || 'currentColor';
  const I = {
    bell:`<path d="M6 6v8M18 6v8M5 10h14M8 19a4 4 0 0 0 8 0"/>`,
    speaker:`<rect x="4" y="8" width="9" height="8" rx="1.5"/><path d="M13 8l6-4v16l-6-4M17 10v4"/>`,
    face:`<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 9v1M16 9v1M8.5 15a4 4 0 0 0 7 0"/>`,
    clock:`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`,
    stamp:`<path d="M9 3h6v5l2 4H7l2-4zM5 16h14M5 20h14"/>`,
    supplies:`<rect x="4" y="6" width="16" height="12" rx="2"/><path d="M9 6V4h6v2M9 12h6"/>`,
    phone:`<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>`,
    clockmark:`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`,
    check:`<path d="M20 6 9 17l-5-5"/>`,
    arrow:`<path d="M5 12h14M13 6l6 6-6 6"/>`,
    cart:`<path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M6 6 5 3H3"/>`,
    search:`<circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/>`,
    pin:`<path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.6"/>`,
    mail:`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`,
    shield:`<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>`,
    truck:`<path d="M3 6h11v9H3zM14 9h4l3 3v3h-7M6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>`,
    wrench:`<path d="M14.7 6.3a4 4 0 0 0-5.4 5l-6 6a1.5 1.5 0 0 0 2.1 2.1l6-6a4 4 0 0 0 5-5.4l-2.6 2.6-2.1-2.1z"/>`,
  };
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[name]||''}</svg>`;
}

const PHONE = '888-734-1283';
const navItems = (CATEGORIES||[]).map(c=>`<a href="category.html?cat=${c.id}">${c.short||c.name}</a>`).join('');
const mmItems = (CATEGORIES||[]).map(c=>`<a class="mm-link" href="category.html?cat=${c.id}">${c.name}</a>`).join('');

function logoMark(size){return `<span class="mark" aria-hidden="true"><svg width="${size||24}" height="${size||24}" viewBox="0 0 24 24" fill="none" stroke="#f26a1b" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span>`;}

const HEADER = `
<div class="utility"><div class="wrap">
  <div class="u-left">
    <span class="u-badge"><span class="dot"></span> New England's #1 TimeForce Dealer</span>
    <a class="hide-sm" href="#">Free shipping on orders $99+</a>
  </div>
  <div class="u-right">
    <a class="u-phone" href="tel:8887341283"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">${'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>'}</svg> ${PHONE}</a>
    <a href="mailto:info@timeclocksunltd.com">info@timeclocksunltd.com</a>
    <a href="#">Order Status</a>
    <a href="#">Login / Register</a>
  </div>
</div></div>
<header class="site" id="hdr"><div class="wrap nav">
  <a class="logo" href="index.html">${logoMark(24)}<span>Time Clocks Unlimited<small>Workforce Management · Est. New England</small></span></a>
  <nav class="menu" aria-label="Primary">${navItems}<a href="index.html#why">About</a></nav>
  <div class="nav-cta">
    <button class="icon-btn" aria-label="Search">${icon('search')}</button>
    <a class="icon-btn" href="#" aria-label="Cart">${icon('cart')}<span class="cart-count" id="cartCount">0</span></a>
    <a href="index.html#contact" class="btn btn-primary"><span class="btn-text">Request a Quote</span></a>
    <button class="icon-btn hamburger" id="hamb" aria-label="Open menu" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
  </div>
</div></header>
<div class="mm-overlay" id="mmOverlay" hidden></div>
<nav class="mobile-menu" id="mobileMenu" aria-label="Mobile" hidden>
  <div class="mm-head">
    <a class="logo" href="index.html" style="font-size:18px">${logoMark(20)}<span style="color:#fff">Time Clocks Unlimited</span></a>
    <button class="icon-btn" id="mmClose" aria-label="Close menu" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.18);color:#fff"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
  </div>
  ${mmItems}
  <a class="mm-link" href="index.html#why">About Us</a>
  <div class="mm-cta">
    <a href="index.html#contact" class="btn btn-primary" style="width:100%;justify-content:center">Request a Quote</a>
    <a href="tel:8887341283" class="btn btn-ghost" style="width:100%;justify-content:center;border-color:rgba(255,255,255,.3);color:#fff">${icon('phone')} Call ${PHONE}</a>
  </div>
</nav>`;

const FOOTER = `
<footer class="site"><div class="wrap">
  <div class="foot-grid">
    <div class="foot-brand">
      <a class="logo" href="index.html">${logoMark(22)}<span>Time Clocks Unlimited</span></a>
      <p>New England's largest TimeForce dealer — time &amp; attendance systems, break bells, biometrics and the personal service to back them.</p>
      <div class="socials">
        <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2 0-3 1.3-3 3v2H8v3h3v7h3v-7h2.5l.5-3H14V9.3c0-.2.2-.3.5-.3z"/></svg></a>
        <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
      </div>
    </div>
    <div><h5>Categories</h5><ul>${(CATEGORIES||[]).map(c=>`<li><a href="category.html?cat=${c.id}">${c.name}</a></li>`).join('')}</ul></div>
    <div><h5>Company</h5><ul>
      <li><a href="index.html#why">About Us</a></li><li><a href="index.html#contact">Contact Us</a></li>
      <li><a href="#">Shipping &amp; Deliveries</a></li><li><a href="#">Returns &amp; Exchanges</a></li><li><a href="#">Site Help / FAQ</a></li>
    </ul></div>
    <div><h5>Contact</h5><div class="foot-contact">
      <span>${icon('pin')} 383 Gardiner Road<br>West Kingston, RI 02892</span>
      <a href="tel:8887341283">${icon('phone')} ${PHONE}</a>
      <a href="mailto:info@timeclocksunltd.com">${icon('mail')} info@timeclocksunltd.com</a>
    </div></div>
  </div>
  <div class="copy"><span>© 2026 Time Clocks Unlimited, LLC. All rights reserved.</span><span>New England's largest TimeForce dealer</span></div>
</div></footer>`;

document.addEventListener('DOMContentLoaded', ()=>{
  document.body.insertAdjacentHTML('afterbegin', HEADER);
  document.body.insertAdjacentHTML('beforeend', FOOTER);

  const hdr=document.getElementById('hdr');
  addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>12));

  const menu=document.getElementById('mobileMenu'), overlay=document.getElementById('mmOverlay'), hamb=document.getElementById('hamb');
  const open=()=>{menu.hidden=false;overlay.hidden=false;requestAnimationFrame(()=>{menu.classList.add('open');overlay.classList.add('open');});hamb.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';};
  const close=()=>{menu.classList.remove('open');overlay.classList.remove('open');hamb.setAttribute('aria-expanded','false');document.body.style.overflow='';setTimeout(()=>{menu.hidden=true;overlay.hidden=true;},320);};
  hamb.addEventListener('click',open);
  document.getElementById('mmClose').addEventListener('click',close);
  overlay.addEventListener('click',close);
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open'))close();});

  // highlight active category in nav
  const cat=new URLSearchParams(location.search).get('cat');
  if(cat){document.querySelectorAll('.menu a').forEach(a=>{if(a.getAttribute('href')==='category.html?cat='+cat)a.classList.add('active');});}

  // cart demo
  let cart=+(localStorage.getItem('tcuCart')||0);
  const badge=document.getElementById('cartCount'); if(badge)badge.textContent=cart;
  document.addEventListener('click',ev=>{
    const b=ev.target.closest('[data-add]'); if(!b)return; ev.preventDefault();
    cart++; localStorage.setItem('tcuCart',cart); if(badge)badge.textContent=cart;
    const t=b.textContent; b.style.background='#16a34a'; b.innerHTML='Added ✓';
    setTimeout(()=>{b.innerHTML=t;b.style.background='';},1100);
  });

  // reveal
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
});