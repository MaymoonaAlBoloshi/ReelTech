document.addEventListener("DOMContentLoaded", (event) => {
  console.log("fetch event");

  const mainDiv = document.querySelector("#section4");
  const secDiv = document.querySelector(".card1");
  const img = document.querySelector(".Img");
  const title = document.querySelector(".Title");
  const time = document.querySelector(".Time");
  const RsBu = document.querySelector(".RSbu");

  fetch("http://localhost:3000/event")
    .then((response) => response.json())
    .then((event) => event.forEach(pastInDiv));

  const pastInDiv = (event) => {
    //     var i;
    // for (i = 0; i < cars.length; i++) {
    //   text += cars[i] + "<br>";
    // }

    const newDiv = document.createElement("div");

    newDiv.classList.add("card1");
    mainDiv.appendChild(newDiv);

    const img = document.createElement("img");
    img.classList.add("Img");
    img.setAttribute("src", `${event.img}`);
    newDiv.appendChild(img);

    const title = document.createElement("h2");
    title.classList.add("Title");
    title.textContent = event.title;
    newDiv.appendChild(title);

    const time = document.createElement("h3");
    time.classList.add("Time");
    time.textContent = event.time;
    newDiv.appendChild(time);

    const RsButton = document.createElement("button");
    RsButton.classList.add("RSbu");
    RsButton.setAttribute("id", "RSbu");
    RsButton.textContent = "RSVP";

    RsButton.addEventListener("click", () => {
      console.log("gotoeditpage");
      // window.location.href = "../CMS/editblog.html";
    });
    newDiv.appendChild(RsButton);
  };
});
