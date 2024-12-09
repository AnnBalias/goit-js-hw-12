import{a as y,i as n,S as p}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const L="47396593-fa81edaacd7e53da3770e0abc";async function g(i,e){const{data:r}=await y("https://pixabay.com/api/?",{params:{key:L,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}});return r}const m=i=>i.map(e=>`<li class="gallery-item">
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
        </li>`).join("");n.settings({position:"topRight",maxWidth:"432px"});const v=document.querySelector(".form"),o=document.querySelector(".loader"),l=document.querySelector(".gallery-list"),a=document.querySelector(".more"),h=new p(".gallery-item .gallery-link",{captionsData:"alt"});let f="",c=1;v.addEventListener("submit",w);a.addEventListener("click",b);function w(i){if(i.preventDefault(),f=i.target.elements.input.value.trim(),c=1,f===""){o.classList.add("visually-hidden"),a.classList.add("visually-hidden"),n.warning({message:"The field is empty!"});return}g(f,c).then(e=>{if(e.total===0)throw l.innerHTML="",new Error;return o.classList.add("visually-hidden"),a.classList.remove("visually-hidden"),e}).then(e=>{e.total<=15&&(l.innerHTML="",l.innerHTML=m(e.hits),h.refresh(),o.classList.add("visually-hidden"),a.classList.add("visually-hidden"),setTimeout(()=>{n.warning({message:"We're sorry, but you've reached the end of search results."})},1500)),e.total>15&&(l.innerHTML="",l.innerHTML=m(e.hits),h.refresh(),o.classList.add("visually-hidden"),a.classList.remove("visually-hidden"))}).catch(()=>{o.classList.add("visually-hidden"),a.classList.add("visually-hidden"),n.error({iconColor:"#ffffff",messageColor:"#ffffff",progressBarColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{i.target.elements.input.value=""})}async function b(i){c+=1,a.disabled=!0;try{const e=await g(f,c);l.insertAdjacentHTML("beforeend",m(e.hits)),h.refresh(),(e.hits.length<15||c===Math.ceil(e.totalHits/15))&&(a.classList.add("visually-hidden"),setTimeout(()=>{n.warning({message:"We're sorry, but you've reached the end of search results."})},2e3));const r=document.querySelector(".gallery-item");let d=Math.ceil(r.getBoundingClientRect().height);window.scrollBy({left:0,top:d*2,behavior:"smooth"})}catch(e){console.log(e.message)}finally{a.disabled=!1}}
//# sourceMappingURL=index.js.map
