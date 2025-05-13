import { Sandpack } from "@codesandbox/sandpack-react";
import { FC } from "react";
import ExpandCollapse from "../../components/expand-collapse/ExpandCollapse";

const Part22: FC = () => {
  return (
    <div>
      <p className="text-lg mb-4 mt-8">
        2. Style the product carousel using CSS to achieve the following:
      </p>
      <ExpandCollapse>
        <p className="mb-2">
          <span className="text-red-400">*Note:</span>To test responsiveness,
          simply drag the editor's edge — there's no need to open the browser's
          developer tools. You can click on the Card to see the Larger State
        </p>

        <Sandpack
          template="static"
          theme="dark"
          options={{
            wrapContent: true,
            showLineNumbers: false,
            editorWidthPercentage: 30,
            editorHeight: 800,
            resizablePanels: true,
          }}
          files={{
            "/index.html": {
              code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Part 1.2: Responsive Product Carousel</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
     <div class="carousel">
      <div class="carousel-container">
        <!-- Product 1 -->
        <div class="carousel-item">
          <div class="carousel-item-content">
            <img
              src="https://dst.assets.gameloft.com/assets/DS_article_thumbnail_season4_1920x1080_EN_2c64867ea1.jpg"
              alt="Product 1"
            />
            <h3>SEASON 04</h3>
            <p>Disney Speedstorm season 4 the cave of wonders available now</p>
          </div>
        </div>

        <!-- Product 2 -->
        <div class="carousel-item">
          <div class="carousel-item-content">
            <img
              src="https://dst.assets.gameloft.com/assets/DS_23037_S_Season3_Key_Art_XBOX_HERO_EN_1310aad214.jpg"
              alt="Product 2"
            />
            <h3>SEASON 3</h3>
            <p>Disney Speedstorm season 3 ‘ohana available now</p>
          </div>
        </div>
        <!-- Product 3 -->
        <div class="carousel-item">
          <div class="carousel-item-content">
            <img
              src="https://dst.assets.gameloft.com/assets/DS_Season12_Banner_Background_EN_001c87e540.jpg"
              alt="Product 3"
            />
            <h3>SEASON 12</h3>
            <p>Disney Speedstorm tron-inspired season 12 available now</p>
          </div>
          <!-- Product 4 -->
        </div>
         <div class="carousel-item">
          <div class="carousel-item-content">
            <img
              src="https://dst.assets.gameloft.com/assets/DS_24035_S_Season11_Keyart_A_01_LS_1920x1080_EN_1_6efb792dab.png"
              alt="Product 4"
            />
            <h3>SEASON 11</h3>
            <p>
              Disney Speedstorm the incredibles-inspired season 11 available now
            </p>
          </div>
        </div>
        <!-- Product 5 -->
        <div class="carousel-item">
          <div class="carousel-item-content">
            <img
              src="https://dst.assets.gameloft.com/assets/DS_23037_S_Season3_Key_Art_XBOX_HERO_EN_1310aad214.jpg"
              alt="Product 5"
            />
            <h3>SEASON 3</h3>
            <p>Disney Speedstorm season 3 ‘ohana available now</p>
          </div>
        </div>
        <!-- Product 6 -->
        <div class="carousel-item">
          <div class="carousel-item-content">
            <img
              src="https://dst.assets.gameloft.com/assets/DS_Season12_Banner_Background_EN_001c87e540.jpg"
              alt="Product 6"
            />
            <h3>SEASON 12</h3>
            <p>Disney Speedstorm tron-inspired season 12 available now</p>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <button id="prev" class="page-dot left-arrow" aria-label="Previous Slide">
        &lt;
      </button>
      <div class="carousel-pagination">
        <span class="page-dot active">1</span>
        <span class="page-dot">2</span>
        <span class="page-dot">3</span>
      </div>
      <button id="next" class="page-dot right-arrow" aria-label="Next Slide">
        &gt;
      </button>
    </div>
    <!-- Modal -->
    <div id="imageModal" class="modal">
      <span class="close" onclick="closeModal()">&times;</span>
      <img class="modal-content" id="modalImage" />
    </div>
    <script src="./index.js"></script>
  </body>
</html>
`,
            },
            "/styles.css": {
              code: `*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
}

.carousel {
  max-width: 1200px;
  margin: auto;
}

.carousel-container {
  display: flex;
  overflow: auto;
  padding: 1rem 0;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

.carousel-container::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}

.carousel-item {
  padding: 10px;
}

.carousel-item-content:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.carousel-item-content {
  background-color: #fff;
  border-radius: 10px;
  height: 100%;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

/* Mobile: 1 item per row */
.carousel-item {
  flex: 0 0 100%;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  margin: 0 auto;
}

.carousel-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.carousel-item h3 {
  margin: 10px 0;
}

.carousel-item p {
  color: #555;
}

.carousel-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  position: relative;
}

.page-dot {
  border: 1px solid #d9d9d9;
  cursor: pointer;
  color: #333;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  font-size: 14px;
  background-color: #fff;
  aspect-ratio: 1 / 1;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.page-dot:hover {
  border-color: #40a9ff;
  color: #40a9ff;
}

.page-dot.active {
  border-color: #1677ff;
  background-color: #1677ff;
  box-shadow: unset;
  color: #fff;
}

.arrow {
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 0.5rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 10;
}

.arrow:hover {
  border-color: #40a9ff;
  background-color: #f0f8ff;
}

.arrow.left-arrow {
  left: 10px;
}

.arrow.right-arrow {
  right: 10px;
}

/* Modal Styling */
.modal {
  display: none;
  position: fixed;
  z-index: 10;
  padding-top: 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  animation: fadeIn 0.2s ease-in-out;
}

.modal-content {
  display: block;
  margin: auto;
  max-width: 90%;
  max-height: 80%;
  animation: zoomIn 0.2s ease;
  border-radius: 10px;
}

.close {
  position: absolute;
  top: 25px;
  right: 35px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Tablet: 2 items per row */
@media (min-width: 768px) {
  .page-dot {
    width: 36px;
    height: 36px;
  }
  .carousel-item {
    flex: 0 0 calc(100% / 2);
  }
}

/* Desktop: 3 items per row */
@media (min-width: 1024px) {
  .page-dot {
    width: 40px;
    height: 40px;
  }

  .carousel-item {
    flex: 0 0 calc(100% / 3);
  }
}

      `,
            },
            "/index.js": {
              code: `const container = document.querySelector(".carousel-container");
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

      `,
            },
          }}
        />
      </ExpandCollapse>
    </div>
  );
};

export default Part22;
