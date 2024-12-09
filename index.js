import{a as p,i as u,S as y}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const L="47396593-fa81edaacd7e53da3770e0abc";async function g(s,e){const{data:r}=await p("https://pixabay.com/api/?",{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}});return r}const m=s=>s.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-img"
                src="${e.webformatURL}" 
                alt="${e.tags}" 
                width="360" 
                height="200"/>
                <ul class="img-info-list">
                    <li class="img-info-item">
                        <p class="info-title">Likes</p>
                        <p class="info-value">${e.likes}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Views</p>
                       <p class="info-value">${e.views}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Comments</p>
                        <p class="info-value">${e.comments}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Downloads</p>
                        <p class="info-value">${e.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>`).join("");u.settings({position:"topRight",maxWidth:"432px"});const v=document.querySelector(".form"),o=document.querySelector(".loader"),a=document.querySelector(".gallery-list"),l=document.querySelector(".more"),h=new y(".gallery-item .gallery-link",{captionsData:"alt"});let d="",n=1;v.addEventListener("submit",w);l.addEventListener("click",b);function w(s){if(s.preventDefault(),d=s.target.elements.input.value.trim(),n=1,d===""){o.classList.add("visually-hidden"),l.classList.add("visually-hidden"),u.warning({message:"The field is empty!"});return}g(d,n).then(e=>{if(e.total===0)throw a.innerHTML="",new Error;return o.classList.add("visually-hidden"),l.classList.remove("visually-hidden"),e}).then(e=>{e.total<=15&&(a.innerHTML="",a.innerHTML=m(e.hits),h.refresh(),o.classList.add("visually-hidden"),l.classList.add("visually-hidden")),e.total>15&&(a.innerHTML="",a.innerHTML=m(e.hits),h.refresh(),o.classList.add("visually-hidden"),l.classList.remove("visually-hidden"))}).catch(()=>{o.classList.add("visually-hidden"),l.classList.add("visually-hidden"),u.error({iconColor:"#ffffff",messageColor:"#ffffff",progressBarColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{s.target.elements.input.value=""})}async function b(s){n+=1,l.disabled=!0;try{const e=await g(d,n);a.insertAdjacentHTML("beforeend",m(e.hits)),h.refresh(),(e.hits.length<15||n===Math.ceil(e.totalHits/15))&&l.classList.add("visually-hidden");const r=document.querySelector(".gallery-item");let c=Math.ceil(r.getBoundingClientRect().height);window.scrollBy({left:0,top:c*2,behavior:"smooth"})}catch(e){console.log(e.message)}finally{l.disabled=!1}}
//# sourceMappingURL=index.js.map
