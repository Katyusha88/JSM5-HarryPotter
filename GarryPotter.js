const input = document.querySelector("#search");
const boxBook = document.querySelectorAll(".container");


input.addEventListener('keyup', function(event) {
    const word = event.target.value.toLowerCase();
    boxBook.forEach(item => {
        item.querySelector("h4").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })

})
