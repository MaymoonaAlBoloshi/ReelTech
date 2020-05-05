document.addEventListener("DOMContentLoaded", (event) => {
  const title = document.querySelector(".Title");
  const des = document.querySelector(".Dess");
  const img = document.querySelector(".Img");
  const addBu = document.querySelector(".addbu");
  const cancelBu = document.querySelector(".cancelbu");

  //   collect the data!
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

  // send those to json
  const createnewblog = (event) => {
    let newBlog = getData();

    return fetch("http://localhost:3000/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newBlog),
    });
  };

  addBu.addEventListener("click", createnewblog);
});
