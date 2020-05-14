document.addEventListener("DOMContentLoaded", (event) => {
  console.log("update page loaded");

  const title = document.querySelector(".Title");
  const des = document.querySelector(".Dess");
  const img = document.querySelector(".Img");
  const editBu = document.querySelector(".editbu");
  const backBu = document.querySelector(".backbu");

  const queryString = window.location.search;
  //?BlogId = id
  const urlParams = new URLSearchParams(queryString);

  const id = urlParams.get("eventID");
  console.log(id);

  fetch("http://localhost:3000/event/" + id)
    .then((response) => response.json())
    .then((event) => addToInput(event));

  const addToInput = (event) => {
    console.log("hello world " + event.title);

    title.value = event.title;
    des.value = event.des;
    img.value = event.img;
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

  const updateEvent = (event) => {
    let newEventUpdate = getData();

    return fetch("http://localhost:3000/event/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newEventUpdate),
    });
  };

  backBu.addEventListener("click", () => {
    console.log("gotoeditpage");
    window.location.href = "../CMS/events.html";
  });

  editBu.addEventListener("click", updateEvent);
});
