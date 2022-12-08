
const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".center");
let btn = document.getElementsByClassName("btn");
const submit = document.querySelector(".submit");
const thankText = document.querySelector(".note p")


Array.from(btn).forEach( (element) => {
    element.addEventListener("click", (e) => {
        const valNote = element.innerHTML;
        thankText.innerText = "you selected "+valNote+" out of 5"
        if(element.classList.contains("active")){
            element.classList.remove("active")
        }
        else{
            element.classList.add("active")
        }
    })
})

submit.addEventListener("click", () => {
    block1.classList.add("rating")
    block2.classList.remove("Thanks")
})

for(i=0; i<5; i++){
    console.log(btn[i])
    btn[i].classList.remove("active")
}
