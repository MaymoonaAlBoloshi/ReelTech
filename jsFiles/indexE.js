document.addEventListener("DOMContentLoaded", (event) => {
  const NewEvent = document.querySelector(".mainbutton");
  const BlogLink = document.querySelector("#bloglink");
  const EventLink = document.querySelector("#blogevent");
  const eventlist = document.querySelector("#eventList");
  const updateBu = document.querySelectorAll("#editBu");
  const backBu = document.querySelectorAll("#deleteBu");

  // take data from DB.json
  fetch("http://localhost:3000/event")
    .then((response) => response.json())
    .then((event) => event.forEach(pastInDiv));

  const pastInDiv = (event) => {
    const newDiv = document.createElement("Div");
    newDiv.dataset.id = event.id;
    newDiv.classList.add("part1");
    eventlist.appendChild(newDiv);

    const img = document.createElement("img");
    img.setAttribute("src", `${event.img}`);
    newDiv.appendChild(img);

    const span = document.createElement("span");
    // newDiv.classList.add("part1");
    newDiv.appendChild(span);

    const title = document.createElement("h4");
    title.textContent = event.title;
    // newDiv.classList.add("part1");
    span.appendChild(title);

    const des = document.createElement("p");
    des.textContent = event.des;
    span.appendChild(des);

    const date = document.createElement("h5");
    date.textContent = event.date;
    span.appendChild(date);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    newDiv.appendChild(editButton);

    editButton.addEventListener("click", () => {
      console.log("gotoeditpage");
      window.location.href = "../CMS/editevent.html" + "?eventID=" + event.id;
    });
    newDiv.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "deleteBu");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      return fetch("http://localhost:3000/event/" + event.id, {
        method: "DELETE",
      });
    });
    newDiv.appendChild(deleteButton);
  };
});
