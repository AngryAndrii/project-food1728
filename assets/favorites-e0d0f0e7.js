import{r as s}from"./btn-scrollup-e7e20f61.js";const i=document.querySelector(".favorites-list"),a=document.querySelector(".favorites-error"),t=document.querySelector(".favorites-categories"),n=document.querySelector(".favorites-hero"),e=JSON.parse(localStorage.getItem("favorites"));function c(){if(i.insertAdjacentHTML("beforeend",s(e)),e.length===0){a.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),window.innerWidth<767&&n.classList.add("visually-hidden");return}}c();function d(){const r=e.map(o=>`<button class="favorites-btn btn-categori is-active"
                  type="button">${o.category}
                </button>
                `).join("");t.insertAdjacentHTML("beforeend",r)}d();
