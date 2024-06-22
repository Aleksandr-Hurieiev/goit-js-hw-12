import{a as w,S as v,i as l}from"./assets/vendor-ee72e1a4.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&m(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();async function g(e,i){const{key:t,q:m,image_type:s,orientation:r,safesearch:o,per_page:b}=e;try{const a=await w.get(`https://pixabay.com/api/?&page=${i}`,{params:{key:t,q:m,image_type:s,orientation:r,safesearch:o,per_page:b}});if(a.status!==200)throw new Error(`Request failed with status ${a.status}`);return a.data}catch(a){throw new Error(a.message)}}const p=document.querySelector("#list-js");let L=new v(".list__item a",{captionsData:"alt",captionDelay:250});function _(e){const i=e.hits.map(t=>`<div class="gallery">
      <li class="list__item">        
          <a href="${t.webformatURL}"><img class="list__img" src="${t.webformatURL}" alt="${t.user}"</a>      
    <ul class="item__list">
      <li class="item__list-item">
        <h3 class="item__list-title">Likes</h3>
        <p class="item__list-text">${t.likes}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Views</h3>
        <p class="item__list-text">${t.views}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Comments</h3>
        <p class="item__list-text">${t.comments}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Downloads</h3>
        <p class="item__list-text">${t.downloads}</p>
      </li>
    </ul>
  </li>
  </div>`).join("");p.insertAdjacentHTML("beforeend",i),L.refresh()}const u={key:"44329356-b9318945d135833e2eb07a97b",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12},y=document.querySelector(".form_js"),q=document.querySelector("#loader"),h=document.querySelector(".form__button"),S=document.querySelector(".form__input"),c=document.querySelector(".button-js");y.addEventListener("submit",$);let n=1,f=0;async function $(e){e.preventDefault(),c.classList.add("isActive"),p.innerHTML="";const i=e.target[0].value.trim();if(u.q=i,n=1,f=0,!i)return e.target[0].value="",l.warning({title:"Warning",message:"Enter more than one character",position:"topRight"});try{const t=await g(u,n);t.hits.length?(f=Math.ceil(t.totalHits/u.per_page),d(!0),setTimeout(()=>{if(_(t),d(!1),t.totalHits<12){c.classList.add("isActive"),l.error({title:"Sorry",message:"We're sorry, but you've reached the end of search results."});return}c.classList.remove("isActive")},500)):l.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(t){l.error({title:`${t}`,message:"Page not found",position:"topRight"})}finally{y.reset()}}c.addEventListener("click",async()=>{n+=1;try{const e=await g(u,n);if(d(!0),setTimeout(()=>{_(e),d(!1),E()},500),n<f)return;c.classList.add("isActive"),l.error({title:"Sorry",message:"We're sorry, but you've reached the end of search results."})}catch{}});function E(){const{height:e}=p.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2.5,behavior:"smooth"})}function d(e){q.classList.toggle("loader",e),h.classList.toggle("form__button-active",e),S.disabled=e,h.disabled=e}
//# sourceMappingURL=commonHelpers.js.map
