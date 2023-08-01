import{o as c,s,f as d}from"./change-theme-bd629773.js";const l=document.querySelector(".favorites-list"),a=document.querySelector(".favorites-error"),o=document.querySelector(".favorites-categories"),n=document.querySelector(".favorites-hero");document.querySelector(".nav-link-home").classList.remove("current");document.querySelector(".nav-link-fav").classList.add("current");l.addEventListener("click",c);const r=JSON.parse(localStorage.getItem("favorites"));r===null&&(a.classList.remove("visually-hidden"),o.classList.add("visually-hidden"),n.classList.add("visually-hidden"),window.innerWidth>768&&n.classList.remove("visually-hidden"));function u(){const t=r.map(e=>`<button class="favorites-btn btn-categori is-active"
                  type="button">${e.category}
              </button>
                `).join("");o.insertAdjacentHTML("beforeend",t)}u();function g(t){return(t.toFixed(1)-Number.parseInt(t.toFixed(1))).toFixed(1)===0 .toFixed(1)?Math.round(t):t.toFixed(1)}function i(t,e){return Math.round(t)>=e?"filled-star-icon":"no-filled-star-icon"}function v(){const t=r.map(e=>`
    <article id="${e._id}" class="recipe recipe-favorites" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url(${e.thumb})">
      <button class="recipe-heart-btn favorite-heard-btn">
        <svg class="recipe-heart-icon" width="22" height="22">
          <use href="${s}#icon-heart"></use>
        <svg>
      </button>
      <div class="recipe-info">
        <h3 class="recipe-name">${e.title}</h3>
        <p class="recipe-desc">${e.description}</p>
        <div class="recipe-rating-and-btn-wrapper">
          <div class="recipe-rating-wrapper">
            <span class="recipe-rating-number">${g(e.rating)}</span>
            <ul class="recipe-rating-stars">
              <li class="recipe-rating-star-item">
                <svg class="${i(e.rating,1)}" width="14" height="14">
                  <use href="${s}#icon-star"></use>
                </svg>
              </li>
              <li class="recipe-rating-star-item">
                <svg class="${i(e.rating,2)}" width="14" height="14">
                  <use href="${s}#icon-star"></use>
                </svg>
              </li>
              <li class="recipe-rating-star-item">
                <svg class="${i(e.rating,3)}" width="14" height="14">
                  <use href="${s}#icon-star"></use>
                </svg>
              </li>
              <li class="recipe-rating-star-item">
                <svg class="${i(e.rating,4)}" width="14" height="14">
                  <use href="${s}#icon-star"></use>
                </svg>
              </li>
              <li class="recipe-rating-star-item">
                <svg class="${i(e.rating,5)}" width="14" height="14">
                  <use href="${s}#icon-star"></use>
                </svg>
              </li>
            </ul>
          </div>
          <button class="recipe-btn" type="button">See recipe</button>
        </div>
      </div>
    </article>
    `).join(" ");if(l.insertAdjacentHTML("beforeend",t),!r||r.length===0){a.classList.remove("visually-hidden"),o.classList.add("visually-hidden"),window.innerWidth<768&&(n.classList.add("visually-hidden"),a.classList.add("favorites-error-js"));return}d()}v();
