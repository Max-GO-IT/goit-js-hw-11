import{i as a,S as l}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function u(i){const r=`https://pixabay.com/api/?key=44433569-eda6d7623baf54ab2611b04f8&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(e=>{if(!e.ok)throw new Error("Не вдалося отримати дані від Pixabay API");return e.json()}).then(e=>{if(e.hits.length===0)throw a.error({title:"Помилка!",message:"Нічого не знайдено за вашим запитом"});return e.hits}).catch(e=>{throw a.error({title:"Помилка!",message:e.message}),e})}function f(i){const r=document.querySelector("#gallery"),e=i.map(s=>`
      <div class="photo-card">
        <a class="gallery-link" href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>${s.likes}</b> likes
          </p>
          <p class="info-item">
            <b>${s.views}</b> views
          </p>
          <p class="info-item">
            <b>${s.comments}</b> views
          </p>
          <p class="info-item">
            <b>${s.downloads}</b> views
          </p>
        </div>
      </div>
    `).join("");r.insertAdjacentHTML("beforeend",e)}const d=document.querySelector("#search-form"),c=document.querySelector("#gallery");document.querySelector("#loading");d.addEventListener("submit",i=>{i.preventDefault();const r=document.querySelector("#search-input").value.trim();r!==""&&(c.innerHTML="",u(r).then(e=>{f(e)}).catch(e=>{}))});new l(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"});c.addEventListener("click",i=>{if(i.target.classList.contains("gallery-image")){const r=i.target.dataset.source;console.log("Ссылка на большое изображение:",r)}});
//# sourceMappingURL=commonHelpers.js.map
