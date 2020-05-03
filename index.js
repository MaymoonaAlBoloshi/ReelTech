document.addEventListener("DOMContentLoaded", (event) => {
  const Newblog = document.querySelector(".mainbutton");
  const Bloglist = document.querySelector("#blogList");
  const bloglink = document.querySelector("#bloglink");
  const eventlink = document.querySelector("#eventlink");

  fetch("http://localhost:3000/blog")
    .then((response) => response.json())
    .then((blog) => blog.forEach(pastInDiv));

  const pastInDiv = () => {
    const newDiv = document.createElement("Div");
  };
});
