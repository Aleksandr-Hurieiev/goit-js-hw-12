import{a as u,S as y,i as a}from"./assets/vendor-ee72e1a4.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();async function p(t){u.defaults.baseURL="https://pixabay.com/api/?";const i=new URLSearchParams({key:"44460301-2102a6dd6fc86b62b9707eae5",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12,limit:40});try{return await u.get(`&q=${t}&${i}&${n}`)}catch{}}const h=document.querySelector("#list-js");let b=new y(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){const i=t.data.hits.map(e=>`<li class="list__item">
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
  </li>`).join("");h.insertAdjacentHTML("beforeend",i),b.refresh()}let l,n=1,L=48;const v=Math.ceil(100/L),_=document.querySelector(".form_js"),w=document.querySelector("#loader"),d=document.querySelector(".form__button"),S=document.querySelector(".form__input"),r=document.querySelector(".button-js");_.addEventListener("submit",q);r.addEventListener("click",$);async function $(t){if(n>=v)return r.classList.add("button-active"),r.disabled=!0,a.info({title:"Sorry",message:"no more photos!"});const i=await p(l);g(i),n+=1,console.log(n)}function q(t){t.preventDefault(),r.classList.add("isActive"),h.innerHTML="";const i=t.target[0].value.trim();if(l=t.target[0].value.trim(),!i)return t.target[0].value="",a.warning({title:"Warning",message:"Enter more than one character",position:"topRight"});l=i,f(!0),setTimeout(()=>{p(l).then(e=>{e.data.hits.length?(g(e),r.classList.remove("isActive")):(r.classList.add("isActive"),a.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}))}).catch(e=>{console.log(e),a.error({title:`${e}`,message:"Page not found",position:"topRight"})}).finally(()=>{f(!1)})},1e3),_.reset()}function f(t){w.classList.toggle("loader",t),d.classList.toggle("form__button-active",t),S.disabled=t,d.disabled=t}
//# sourceMappingURL=commonHelpers.js.map
