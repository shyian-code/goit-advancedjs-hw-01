// Додавання імпортів SimpleLightbox та стилів
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const modalRef = {
  instance: null,
  image: null,
};

const galleryElement = document.querySelector(".gallery");

galleryElement.addEventListener("click", onGalleryClick);

galleryElement.insertAdjacentHTML("beforeend", populateGallery(galleryItems));

function populateGallery(imagesList) {
  if (!imagesList.length) return ""; // Перевірка на пустий масив
  return imagesList.map(galleryItemLayout).join("");
}

function galleryItemLayout({ preview, original, description }) {
  return `
		<li class="gallery__item">
		  <a class="gallery__link" href="${original}">
		    <img
		      class="gallery__image"
		      src="${preview}"
		      data-source="${original}"
		      alt="${description}"
		    />
		  </a>
		</li>
	`;
}

function onGalleryClick(e) {
  e.preventDefault();

  const target = e.target;
  const isGalleryImage = target.classList.contains("gallery__image");

  if (!isGalleryImage) return;

  showModal(target);
}

function showModal(element) {
  const src = element.dataset.source;
  if (!modalRef.image || !modalRef.instance) {
    createModalInstance(src);
  }
  modalRef.image.setAttribute("src", src);
  modalRef.instance.show();
}

function createModalInstance(src) {
  const options = {
    onShow: () => document.addEventListener("keydown", onModalClick),
    onClose: () => document.removeEventListener("keydown", onModalClick),
  };
  const content = modalImageLayout(src);
  const modalInstance = new SimpleLightbox(content, options);

  modalRef.image = modalInstance.element.querySelector("img");
  modalRef.instance = modalInstance;
}

function modalImageLayout(src) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "modal";
  img.width = 1200;
  img.height = 800;

  const container = document.createElement("div");
  container.appendChild(img);

  return container;
}

function onModalClick(e) {
  if (e.key === "Escape") {
    modalRef.instance?.close();
  }
}