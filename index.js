import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(e){if(e.ep)return;e.ep=!0;const l=r(e);fetch(e.href,l)}})();const d="https://pixabay.com/api/",y="46311357-e3a4e4c71d54a60b91a510c1d";function m(o){const s=new URLSearchParams({key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${s.toString()}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function p(o){const s=document.querySelector(".gallery"),r=o.hits.map(t=>`<li class="gallery-query">
    <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image"
    src="${t.webformatURL}"
    data-source="${t.largeImageURL}"
    alt="${t.tags}"
    width="360"  onclick="return false">
    <ul class="gallery-descr">
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Likes</p>
                        <p class="gallery-value">${t.likes}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Views</p>
                        <p class="gallery-value">${t.views}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Comments</p>
                        <p class="gallery-value">${t.comments}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Downloads</p>
                        <p class="gallery-value">${t.downloads}</p>
                    </li>
                </ul>
            </a>
       </li>`).join("");s.insertAdjacentHTML("beforeend",r)}const i=document.querySelector(".form"),f=document.querySelector(".gallery");let n=null;i.addEventListener("submit",o=>{o.preventDefault();const s=i.elements.query.value.trim();if(s===""){c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f.innerHTML="",g(),m(s).then(r=>{if(r.hits.length===0){c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else p(r);n?n.refresh():n=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:200})}).catch(r=>{console.log(r)}).finally(()=>{h(),i.reset()})});function g(){document.querySelector(".loader").classList.remove("visually-hidden")}function h(){document.querySelector(".loader").classList.add("visually-hidden")}
//# sourceMappingURL=index.js.map
