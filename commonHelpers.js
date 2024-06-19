import{i as c,S as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function d(n){const o=`https://pixabay.com/api/?key=44433569-eda6d7623baf54ab2611b04f8&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Не вдалося отримати дані від Pixabay API");return e.json()}).then(e=>{if(e.hits.length===0)throw c.error({title:"Помилка!",message:"Sorry, there are no images matching your search query. Please try again!"});return e.hits}).catch(e=>{throw c.error({title:"Ошибка при загрузке",message:e.message}),e})}function f(n){const o=document.querySelector("#gallery"),e=n.map(s=>`
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
            <b>${s.comments}</b> comments
          </p>
          <p class="info-item">
            <b>${s.downloads}</b> downloads
          </p>
        </div>
      </div>
    `).join("");o.insertAdjacentHTML("beforeend",e)}const p=document.querySelector("#search-form"),l=document.querySelector("#gallery"),i=document.querySelector("#loading");i.style.display="none";p.addEventListener("submit",n=>{n.preventDefault();const o=document.querySelector("#search-input").value.trim();o!==""&&(i.classList.remove("hidden"),l.innerHTML="",i.style.display="block",d(o).then(e=>{f(e)}).then(e=>{i.style.display="none"}).catch(e=>{i.style.display="none",c.error({title:"Ошибка!",message:"Ошибка на странице!!"})}))});l.addEventListener("click",n=>{n.preventDefault(),console.log(n.currentTarget),new u(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"})});
//# sourceMappingURL=commonHelpers.js.map
