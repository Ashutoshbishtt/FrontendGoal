let container = document.getElementById("star-container")
let star = document.querySelectorAll(".star");
let counter = document.getElementById("count")
console.log(star)
let filled = 0;

container.addEventListener("click",function (e) {
    let targetStar = e.target.dataset.index;
    console.log(e.target.dataset.index)
    let i = 0;
    for(i ; i < targetStar ; i++){
        star[i].style.color="yellow"
    }
    filled = targetStar;

    for(i ; i < star.length ; i++){
        star[i].style.color="grey"
    }
    counter.innerText = `Rating is : ${filled}`

})
container.addEventListener("mouseover",function (e) {
    let targetStar = e.target.dataset.index; //Inside data set we will get the index, that we had assigned in the html named data-index, "data-" will be common in all
    let i = 0;
    for(i ; i < targetStar ; i++){
        star[i].style.color="yellow"
    }
})


container.addEventListener("mouseleave",function (e) {
    for(i = filled ; i < star.length ; i++){
        star[i].style.color="grey"
    }
})