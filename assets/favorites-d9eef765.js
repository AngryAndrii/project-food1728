import"./btn-scrollup-fd3d5107.js";const r=document.querySelector(".favorites-list"),a=document.querySelector(".favorites-error"),n=document.querySelector(".favorites-categories"),o=document.querySelector(".favorites-hero"),i=JSON.parse(localStorage.getItem("favorites"));function c(){const t=i.map(e=>`<button class="favorites-btn fav-btn is-active" name="main-cat-btn">
                     All categories
              </button>
              <button class="favorites-btn btn-categori is-active"
                  type="button">${e.category}
              </button>
                `).join("");n.insertAdjacentHTML("beforeend",t)}c();function l(t){return(t.toFixed(1)-Number.parseInt(t.toFixed(1))).toFixed(1)===0 .toFixed(1)?Math.round(t):t.toFixed(1)}function s(t,e){return Math.round(t)>=e?"filled-star-icon":"no-filled-star-icon"}function g(){const t=i.map(e=>`
    <article id="${e._id}" class="recipe" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url(${e.thumb})">
      <button class="recipe-heart-btn favorite-heard-btn">
        <svg class="recipe-heart-icon favorite-heard-icon" width="22" height="22">
          <use href="./images/sprite.svg#icon-heart"></use>
        <svg>
      </button>
      <div class="recipe-info">
        <h3 class="recipe-name">${e.title}</h3>
        <p class="recipe-desc">${e.description}</p>
        <div class="recipe-rating-and-btn-wrapper">
          <div class="recipe-rating-wrapper">
            <span class="recipe-rating-number">${l(e.rating)}</span>
            <ul class="recipe-rating-stars">
              <li class="recipe-rating-star-item">
                <svg class="${s(e.rating,1)}" width="14" height="14">
                  <use href="./images/sprite.svg#icon-star"></use>
                </svg>
              </li>
              <li class="recipe-rating-star-item">
                <svg class="${s(e.rating,2)}" width="14" height="14">
                  <use href="./images/sprite.svg#icon-star"></use>
                </svg>
              </li>
              <li class="recipe-rating-star-item">
                <svg class="${s(e.rating,3)}" width="14" height="14">
                  <use href="./images/sprite.svg#icon-star"></use>
                </svg>
              </li>
              <li class="recipe-rating-star-item">
                <svg class="${s(e.rating,4)}" width="14" height="14">
                  <use href="./images/sprite.svg#icon-star"></use>
                </svg>
              </li>
              <li class="recipe-rating-star-item">
                <svg class="${s(e.rating,5)}" width="14" height="14">
                  <use href="./images/sprite.svg#icon-star"></use>
                </svg>
              </li>
            </ul>
          </div>
          <button class="recipe-btn" type="button">See recipe</button>
        </div>
      </div>
    </article>
    `).join(" ");if(r.insertAdjacentHTML("beforeend",t),!i||i.length===0){a.classList.remove("visually-hidden"),window.innerWidth<768&&o.classList.add("visually-hidden");return}}g();
