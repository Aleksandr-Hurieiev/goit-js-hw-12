import{a as d,S as g,i as n}from"./assets/vendor-ee72e1a4.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();async function _(s){const{key:i,q:e,image_type:l,orientation:t,safesearch:r,per_page:o}=s;try{const a=await d.get("https://pixabay.com/api/",{params:{key:i,q:e,image_type:l,orientation:t,safesearch:r,per_page:o}});if(a.status!==200)throw new Error(`Request failed with status ${a.status}`);return a.data}catch(a){throw new Error(a.message)}}const f=document.querySelector("#list-js");let h=new g(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const i=s.hits.map(e=>`<li class="list__item">
                <div class="gallery">
          <a href="${e.webformatURL}"><img class="list__img" src="${e.webformatURL}" alt="${e.user}"</a>
      </div>
    <ul class="item__list">
      <li class="item__list-item">
        <h3 class="item__list-title">Likes</h3>
        <p class="item__list-text">${e.likes}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Views</h3>
        <p class="item__list-text">${e.views}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Comments</h3>
        <p class="item__list-text">${e.comments}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Downloads</h3>
        <p class="item__list-text">${e.downloads}</p>
      </li>
    </ul>
  </li>`).join("");f.insertAdjacentHTML("beforeend",i),h.refresh()}const c={key:"44329356-b9318945d135833e2eb07a97b",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30},p=document.querySelector(".form_js"),b=document.querySelector("#loader"),m=document.querySelector(".form__button"),w=document.querySelector(".form__input");p.addEventListener("submit",q);async function q(s){s.preventDefault(),f.innerHTML="";const i=s.target[0].value.trim();if(!i)return s.target[0].value="",n.warning({title:"Warning",message:"Enter more than one character",position:"topRight"});c.q=i,u(!0);try{const e=await _(c);console.log(e),e.hits.length?y(e):n.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(e){console.log(e),n.error({title:`${e}`,message:"Page not found",position:"topRight"})}finally{u(!1),p.reset()}}function u(s){b.classList.toggle("loader",s),m.classList.toggle("form__button-active",s),w.disabled=s,m.disabled=s}
//# sourceMappingURL=commonHelpers.js.map
