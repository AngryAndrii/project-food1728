import{r as o}from"./btn-scrollup-33cb7586.js";const s=document.querySelector(".favorites-list"),i=document.querySelector(".favorites-error"),a=document.querySelector(".favorites-categories"),n=document.querySelector(".favorites-hero"),e=JSON.parse(localStorage.getItem("favorites"));function c(){if(s.insertAdjacentHTML("beforeend",o(e)),e.length===0){i.classList.remove("visually-hidden");return}if(window.innerWidth<767){n.classList.add("visually-hidden");return}}c();function l(){const t=e.map(r=>`<button class="favorites-btn fav-btn is-active" name="main-cat-btn">
                     All categories
              </button>
              <button class="favorites-btn btn-categori is-active"
                  type="button">${r.category}
              </button>
                `).join("");a.insertAdjacentHTML("beforeend",t)}l();
