const container = document.querySelector(".carousel-container");
const items = document.querySelectorAll(".carousel-item");
const pagination = document.querySelector(".carousel-pagination");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
let itemsPerPage = getItemsPerPage();

function getItemsPerPage() {
  const width = window.innerWidth;
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

items.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    if (img) {
      openModal(img.src);
    }
  });
});

// Update pagination with list of cards
function updatePagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(items.length / itemsPerPage);

  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("span");
    dot.className = "page-dot";
    dot.textContent = i + 1;
    if (i === currentIndex) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentIndex = i;
      updateView();
    });

    pagination.appendChild(dot);
  }
}

function updateView() {
  const scrollX = currentIndex * container.clientWidth;
  container.scrollTo({
    left: scrollX,
    behavior: "smooth",
  });

  document
    .querySelectorAll(".page-dot")
    .forEach((dot) => dot.classList.remove("active"));
  const activeDot = pagination.children[currentIndex];
  if (activeDot) activeDot.classList.add("active");
}

function goPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateView();
  }
}

function goNext() {
  const maxPage = Math.ceil(items.length / itemsPerPage) - 1;
  if (currentIndex < maxPage) {
    currentIndex++;
    updateView();
  }
}

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);

window.addEventListener("resize", () => {
  const newCount = getItemsPerPage();
  if (newCount !== itemsPerPage) {
    itemsPerPage = newCount;
    currentIndex = 0;
    updatePagination();
    updateView();
  }
});

function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Initial load
updatePagination();
updateView();
