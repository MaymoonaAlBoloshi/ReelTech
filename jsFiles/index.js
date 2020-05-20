document.addEventListener("DOMContentLoaded", (event) => {
  const Newblog = document.querySelector(".mainbutton");
  const Bloglist = document.querySelector("#blogList");
  const bloglink = document.querySelector("#bloglink");
  const eventlink = document.querySelector("#eventlink");
  const editBu = document.querySelectorAll("#editBu");
  const deleteBu = document.querySelectorAll("#deleteBu");

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
    // console.log(blog.des.slice(0, 50));
    // to cut the long paragraph from 0 to 40 letters!
    des.textContent = blog.des.slice(0, 40) + "...";
    span.appendChild(des);

    const date = document.createElement("h5");
    date.textContent = blog.date;
    span.appendChild(date);

    const editButton = document.createElement("button");
    editButton.setAttribute("id", "editBu");
    editButton.textContent = "Edit";

    editButton.addEventListener("click", () => {
      console.log("gotoeditpage");
      window.location.href = "../CMS/editblog.html" + "?blogID=" + blog.id;
    });

    newDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "deleteBu");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      return fetch("http://localhost:3000/blog/" + blog.id, {
        method: "DELETE",
      });
    });
    newDiv.appendChild(deleteButton);
  };

  //   const goToEditBlog = (event) => {
  //     console.log("gotoeditpage");
  //     window.location.href = "../CMS/editblog.html" + "?blogID=" + this.blog.id;
  //   };

  //   const deleteBlog = (event) => {
  //     console.log("deletepage");
  //   };

  //   editBu.forEach((Button) => {
  //     Button.addEventListener("click", goToEditBlog);
  //   });

  //   deleteBu.forEach((Button) => {
  //     Button.addEventListener("click", deleteBlog);
  //   });
});
