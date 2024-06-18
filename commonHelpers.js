import{i as a,S as d}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function u(s){const o=`https://pixabay.com/api/?key=44433569-eda6d7623baf54ab2611b04f8&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Не вдалося отримати дані від Pixabay API");return e.json()}).then(e=>{if(e.hits.length===0)throw a.error({title:"Помилка!",message:"Нічого не знайдено за вашим запитом"});return e.hits}).catch(e=>{throw a.error({title:"Помилка!",message:e.message}),e})}function f(s){const o=document.querySelector("#gallery"),e=s.map(n=>`
      <div class="photo-card">
        <a class="gallery-link" href="${n.largeImageURL}">
          <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>${n.likes}</b> likes
          </p>
          <p class="info-item">
            <b>${n.views}</b> views
          </p>
          <p class="info-item">
            <b>${n.comments}</b> comments
          </p>
          <p class="info-item">
            <b>${n.downloads}</b> downloads
          </p>
        </div>
      </div>
    `).join("");o.insertAdjacentHTML("beforeend",e)}const p=document.querySelector("#search-form"),c=document.querySelector("#gallery"),l=document.querySelector("#loading");p.addEventListener("submit",s=>{s.preventDefault();const o=document.querySelector("#search-input").value.trim();o!==""&&(c.innerHTML="",document.getElementById("loading").style.display="none",l.style.display="none",u(o).then(e=>{f(e),l.style.display="none"}).catch(e=>{l.style.display="flex"}))});c.addEventListener("click",s=>{s.preventDefault(),console.log(s.currentTarget),new d(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"})});
//# sourceMappingURL=commonHelpers.js.map
