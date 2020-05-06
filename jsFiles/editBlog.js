document.addEventListener("DOMContentLoaded", (event) => {

    console.log('edit page loaded');

    const queryString = window.location.search;
    //?BlogId = id
    const urlParams = new URLSearchParams(queryString);

    const id = urlParams.get('blogID')
    console.log(id)

})