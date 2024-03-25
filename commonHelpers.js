import{i as l,S as p}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function u(e){const o="https://pixabay.com/api/?key="+"43065562-482e0c4e1ab6b062f2c90306d"+"&q="+e+"&image_type=photo&orientation=horizontal&safesearch=true";return fetch(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>(r.hits.length===0&&l.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),r)).catch(r=>console.log(r))}const a=document.querySelector(".gallery");function d(e){return`<li class="gallery-list-item">
       <a href="${e.largeImageURL}"> <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></a>
        <ul class="img-description">
          <li class="img-description-item">
            <p class="description-key">Likes</p>
            <p class="description-value">${e.likes}</p>
          </li>
          <li class="img-description-item">
            <p class="description-key">Views</p>
            <p class="description-value">${e.views}</p>
          </li>
          <li class="img-description-item">
            <p class="description-key">Comments</p>
            <p class="description-value">${e.comments}</p>
          </li>
          <li class="img-description-item">
            <p class="description-key">Downloads</p>
            <p class="description-value">${e.downloads}</p>
          </li>
        </ul>
      </li>`}function m(e){a.innerHTML="";const i=e.hits.map(d).join("");a.innerHTML=i;const o={captionsData:"alt",captionDelay:250},r=new p(".gallery a",o);r.on("show.simplelightbox"),r.refresh()}const f=document.querySelector(".form"),c=document.querySelector(".loader");f.addEventListener("submit",g);function g(e){e.preventDefault(),c.classList.add("is-open");const i=e.target.search.value.trim();if(i===""){c.classList.remove("is-open"),l.error({title:"Error",message:"Please enter a search word",position:"topRight"});return}c.classList.remove("is-open"),u(i).then(o=>m(o)).catch(o=>{l.error({title:"Error",message:"Error fetching images",position:"topRight"})}).finally(()=>{e.target.reset()})}
//# sourceMappingURL=commonHelpers.js.map
