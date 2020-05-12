document.addEventListener("DOMContentLoaded", (event) => {
  console.log("edit page loaded");

  const title = document.querySelector(".Title");
  const des = document.querySelector(".Dess");
  const img = document.querySelector(".Img");
  const editBu = document.querySelector(".editbu");
  const backBu = document.querySelector(".backbu");

  const queryString = window.location.search;
  //?BlogId = id
  const urlParams = new URLSearchParams(queryString);

  const id = urlParams.get("blogID");
  console.log(id);

  fetch("http://localhost:3000/blog/" + id)
    .then((response) => response.json())
    .then((blog) => addToInput(blog));

  const addToInput = (blog) => {
    console.log("hello world " + blog.title);

    title.value = blog.title;
    des.value = blog.des;
    img.value = blog.img;
  };

  const getData = () => {
    const newTitle = title.value;
    const newDes = des.value;
    const newImg = img.value;

    const datex = new Date();
    const date = datex.toLocaleDateString();

    // same vales in json
    return {
      title: newTitle,
      des: newDes,
      img: newImg,
      date: date,
    };
  };

  const updateBlog = (event) => {
    let newBlogUpdate = getData();

    return fetch("http://localhost:3000/blog/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newBlogUpdate),
    });
  };

  backBu.addEventListener("click", () => {
    console.log("gotoeditpage");
    window.location.href = "../CMS/blogs.html";
  });

  backBu.addEventListener("click", updateBlog);
});
