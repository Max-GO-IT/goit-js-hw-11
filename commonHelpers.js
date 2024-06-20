import{i as c,S as d}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function u(n){const o=`https://pixabay.com/api/?key=44433569-eda6d7623baf54ab2611b04f8&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Не вдалося отримати дані від Pixabay API");return e.json()}).then(e=>{if(e.hits.length===0)throw iziToast.info({title:"Не знайдено зображень!",message:"На жаль, немає зображень, що відповідають вашому пошуковому запиту. Спробуйте ще раз!"}),new Error("Не знайдено зображень");return e.hits}).catch(e=>{throw iziToast.error({title:"Помилка!",message:e.message}),e})}function f(n){const o=document.querySelector("#gallery"),e=n.map(s=>`
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
  `).join("");o.insertAdjacentHTML("beforeend",e)}const m=document.querySelector("#search-form"),p=document.querySelector("#gallery"),i=document.querySelector("#loading");i.style.display="none";let a=null;m.addEventListener("submit",n=>{n.preventDefault();const o=document.querySelector("#search-input").value.trim();if(o===""){c.warning({title:"Введіть запит!",message:"Будь ласка, введіть пошуковий запит"});return}i.classList.remove("hidden"),p.innerHTML="",i.style.display="block",u(o).then(e=>{f(e),a?a.refresh():a=new d(".gallery-link",{captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"})}).then(()=>{i.style.display="none"}).catch(e=>{i.style.display="none",c.error({title:"Помилка!",message:e.message})})});
//# sourceMappingURL=commonHelpers.js.map
