import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{S as p}from"./assets/vendor-78be7656.js";const s=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],n={instance:null,image:null},c=document.querySelector(".gallery");c.addEventListener("click",d);c.insertAdjacentHTML("beforeend",r(s));function r(e){return e.length?e.map(l).join(""):""}function l({preview:e,original:t,description:o}){return`
		<li class="gallery__item">
		  <a class="gallery__link" href="${t}">
		    <img
		      class="gallery__image"
		      src="${e}"
		      data-source="${t}"
		      alt="${o}"
		    />
		  </a>
		</li>
	`}function d(e){e.preventDefault();const t=e.target;t.classList.contains("gallery__image")&&h(t)}function h(e){const t=e.dataset.source;(!n.image||!n.instance)&&g(t),n.image.setAttribute("src",t),n.instance.show()}function g(e){const t={onShow:()=>document.addEventListener("keydown",i),onClose:()=>document.removeEventListener("keydown",i)},o=m(e),a=new p(o,t);n.image=a.element.querySelector("img"),n.instance=a}function m(e){const t=document.createElement("img");t.src=e,t.alt="modal",t.width=1200,t.height=800;const o=document.createElement("div");return o.appendChild(t),o}function i(e){var t;e.key==="Escape"&&((t=n.instance)==null||t.close())}
//# sourceMappingURL=commonHelpers.js.map