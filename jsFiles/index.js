document.addEventListener("DOMContentLoaded", (event) => {
  const Newblog = document.querySelector(".mainbutton");
  const Bloglist = document.querySelector("#blogList");
  const bloglink = document.querySelector("#bloglink");
  const eventlink = document.querySelector("#eventlink");

  // take data from DB.json
  fetch("http://localhost:3000/blog")
    .then((response) => response.json())
    .then((blog) => blog.forEach(pastInDiv));

  const pastInDiv = (blog) => {
    const newDiv = document.createElement("Div");
    newDiv.dataset.id = blog.id;
    newDiv.classList.add("part1");
    Bloglist.appendChild(newDiv);

    const img = document.createElement("img");
    img.setAttribute("src", `${blog.img}`);
    newDiv.appendChild(img);

    const span = document.createElement("span");
    // newDiv.classList.add("part1");
    newDiv.appendChild(span);

    const title = document.createElement("h4");
    title.textContent = blog.title;
    // newDiv.classList.add("part1");
    span.appendChild(title);

    const des = document.createElement("p");
    des.textContent = blog.des;
    span.appendChild(des);

    const date = document.createElement("h5");
    date.textContent = blog.date;
    span.appendChild(date);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    newDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    newDiv.appendChild(deleteButton);
  };
});
