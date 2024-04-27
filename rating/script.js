const stars = document.querySelector("#star-container")
const allStar = document.querySelectorAll(".star")
const count = document.querySelector("#count")

stars.addEventListener('mouseover',(e)=>{
    let cur = e.target
    let curT = cur.getAttribute('data-index')
    allStar.forEach((elem)=>{
        let cur = elem.getAttribute('data-index')
        elem.classList.toggle("star-filled",
           parseInt(cur,10)<=parseInt(curT,10)
        )
    })
})
stars.addEventListener('click',(e)=>{
    let current = e.target
    let curVal = current.getAttribute('data-index')
    value(curVal)
})

function value(curVal){
    allStar.forEach((elem)=>{
        let cur = elem.getAttribute('data-index')
        elem.classList.toggle("star-filled",
           parseInt(cur,10)<=parseInt(curVal,10)
        )
    })
    count.innerText = curVal
}