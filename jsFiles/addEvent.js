document.addEventListener("DOMContentLoaded", (event) => {
  const titleE = document.querySelector(".Title");
  const desE = document.querySelector(".Dess");
  const imgE = document.querySelector(".Img");
  const addbuE = document.querySelector(".addbu");
  const cancelbuE = document.querySelector(".cancelbu");

  //   collect data
  const getData = () => {
    const newTitleE = titleE.value;
    const newDesE = desE.value;
    const newImgE = imgE.value;

    const datex = new Date();
    const dateE = datex.toLocaleDateString();

    return {
      title: newTitleE,
      des: newDesE,
      img: newImgE,
      date: dateE,
    };
  };

  const createNewEvent = (event) => {
    let newEvent = getData();

    return fetch("http://localhost:3000/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newEvent),
    });
  };
  addbuE.addEventListener("click", createNewEvent);
});
