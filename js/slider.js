const images = [
  "images/banner1.png",
  "images/banner2.png",
  "images/banner3.png",
  "images/blog-1.png",
  "images/blog-2.png",
  "images/blog-3.png",
  "images/blog-4.png",
];

let imgIndex = 0;
const img = document.getElementById("slider-img");
setInterval(() => {
  if (imgIndex === images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  //   console.log(imgIndex, imgUrl);
  img.setAttribute("src", imgUrl);
  imgIndex++;
}, 2000);
