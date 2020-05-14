document.addEventListener("DOMContentLoaded", (event) => {
  console.log("fetch Blog Page");

  const mainDiv = document.querySelector(".card-container");
  // const mainDiv = document.querySelector("#blog");
  const secDiv = document.querySelector("#tableRow");
  const secDivR = document.querySelector("#RightColumn");
  const secDivL = document.querySelector("#LeftColumn");
  const title = document.querySelector(".Title");
  const pragraph = document.querySelector(".Para");
  const img = document.querySelector(".Img");

  fetch("http://localhost:3000/blog")
    .then((response) => response.json())
    .then((blog) => blog.forEach(pastInDiv));

  const pastInDiv = (blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog");
    mainDiv.appendChild(blogDiv);

    const tablerow = document.createElement("div");
    tablerow.classList.add("tableRow");
    blogDiv.appendChild(tablerow);

    const Leftcolum = document.createElement("div");
    Leftcolum.classList.add("LeftColumn");
    tablerow.appendChild(Leftcolum);

    const img = document.createElement("img");
    img.classList.add("Img");
    img.setAttribute("src", `${blog.img}`);
    Leftcolum.appendChild(img);

    const Rightcolum = document.createElement("div");
    Rightcolum.classList.add("RightColumn");
    tablerow.appendChild(Rightcolum);

    // newDiv.dataset.id = blog.id;
    const title = document.createElement("h1");

    title.addEventListener("click", () => {
      console.log("gotoeditpage");
      window.location.href = "../firstblog.html";

      title.classList.add("Title");
      title.textContent = blog.title;
      Rightcolum.appendChild(title);
    });

    const paragraph = document.createElement("p");
    paragraph.classList.add("Para");
    // blog.paragraph frtch from Json.. so the name should be same in JSON!
    paragraph.textContent = blog.des;
    Rightcolum.appendChild(paragraph);
  };
});
