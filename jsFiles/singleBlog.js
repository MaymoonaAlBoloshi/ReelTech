document.addEventListener("DOMContentLoaded", (event) => {
  const title = document.querySelector(".Title");
  const des = document.querySelector(".Para");
  const img = document.querySelector(".Img");

  const queryString = window.location.search;
  //?BlogId = id
  const urlParams = new URLSearchParams(queryString);

  const id = urlParams.get("blogID");
  console.log(id);

  fetch("http://localhost:3000/blog/" + id)
    .then((response) => response.json())
    .then((blog) => addToBlog(blog));

  const addToBlog = (blog) => {
    console.log("hello world " + blog.title);

    title.textContent = blog.title;
    des.textContent = blog.des.slice(0, 100) + "...";
    img.setAttribute("src", `${blog.img}`);
  };
});
