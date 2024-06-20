import{a as w,S as L,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function g(e,i){const{key:s,q:n,image_type:t,orientation:r,safesearch:o,per_page:b}=e;try{const a=await w.get(`https://pixabay.com/api/?&page=${i}`,{params:{key:s,q:n,image_type:t,orientation:r,safesearch:o,per_page:b}});if(a.status!==200)throw new Error(`Request failed with status ${a.status}`);return a.data}catch(a){throw new Error(a.message)}}const f=document.querySelector("#list-js");let v=new L(".list__item a",{captionsData:"alt",captionDelay:250});function _(e){const i=e.hits.map(s=>`<div class="gallery">
      <li class="list__item">        
          <a href="${s.webformatURL}"><img class="list__img" src="${s.webformatURL}" alt="${s.user}"</a>      
    <ul class="item__list">
      <li class="item__list-item">
        <h3 class="item__list-title">Likes</h3>
        <p class="item__list-text">${s.likes}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Views</h3>
        <p class="item__list-text">${s.views}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Comments</h3>
        <p class="item__list-text">${s.comments}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Downloads</h3>
        <p class="item__list-text">${s.downloads}</p>
      </li>
    </ul>
  </li>
  </div>`).join("");f.insertAdjacentHTML("beforeend",i),v.refresh()}const m={key:"44329356-b9318945d135833e2eb07a97b",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};let l=1;const p=Math.ceil(50/m.per_page),y=document.querySelector(".form_js"),q=document.querySelector("#loader"),h=document.querySelector(".form__button"),S=document.querySelector(".form__input"),d=document.querySelector(".button-js");y.addEventListener("submit",$);async function $(e){e.preventDefault(),l=1,f.innerHTML="";const i=e.target[0].value.trim();if(m.q=i,!i)return e.target[0].value="",c.warning({title:"Warning",message:"Enter more than one character",position:"topRight"});try{const s=await g(m,l);s.hits.length?(u(!0),setTimeout(()=>{_(s),d.classList.remove("isActive"),u(!1)},500)):c.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(s){c.error({title:`${s}`,message:"Page not found",position:"topRight"})}finally{y.reset()}}d.addEventListener("click",async()=>{l+=1,console.log(p);try{const e=await g(m,l);if(u(!0),setTimeout(()=>{_(e),u(!1),E()},500),l<p)return;d.classList.add("isActive"),c.error({title:"Sorry",message:"We're sorry, but you've reached the end of search results."})}catch{}});function E(){const{height:e}=f.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}function u(e){q.classList.toggle("loader",e),h.classList.toggle("form__button-active",e),S.disabled=e,h.disabled=e}
//# sourceMappingURL=commonHelpers.js.map
