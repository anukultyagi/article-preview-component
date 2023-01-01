const myFunction = () => {
    let x = document.querySelector('.share-profiles')
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
btn.addEventListener("click", myFunction)