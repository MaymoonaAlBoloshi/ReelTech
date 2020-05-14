document.addEventListener("DOMContentLoaded", (event) => {
  console.log("fetch blog");

  const secDiv = document.querySelector(".image11");
  const mainDiv = document.querySelector("#section6");
  const img = document.querySelector(".Img");
  const title = document.querySelector(".Title");

  fetch("http://localhost:3000/blog?_limit=3")
    .then((response) => response.json())
    .then((blog) => blog.forEach(pastInDiv));

  const pastInDiv = (blog) => {
    const newDiv = document.createElement("div");
    // newDiv.dataset.id = blog.id;
    newDiv.classList.add("image11");
    mainDiv.appendChild(newDiv);

    const img = document.createElement("img");
    img.classList.add("Img");
    img.setAttribute("src", `${blog.img}`);
    newDiv.appendChild(img);

    const title = document.createElement("h2");
    title.classList.add("Title");
    title.textContent = blog.title;
    newDiv.appendChild(title);
  };
});
