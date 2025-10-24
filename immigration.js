const btn= document.getElementById('submitbtn');
btn.addEventListener("mouseenter", fillup);
btn.addEventListener("mouseleave", resetfill);
function fillup(){
    let height= 0;
    const step=2;
    const fill= setInterval(() => {
        height += step;
        btn.style.background = `linear-gradient(to top, #9dabf9 ${height}%, #0d6efd ${height}%)`;
        if (height >= 100) clearInterval(fill);
    }, 10);
}
function resetfill(){
    let height = 100;
    const step = 2;
    const empty = setInterval(() => {
        height -= step;
        btn.style.background = `linear-gradient(to top, #2dabf4 ${height}%, #0d6efd ${height}%)`;
        if (height <= 0) clearInterval(empty);
    }, 10);
}
const slides =document.querySelectorAll(".slides img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const indicatorsContainer = document.querySelector(".indicators");
let index = 0;
let interval;
slides.forEach((_,i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click" , () => {
        showslide(i);
    });
    indicatorsContainer.appendChild(dot);
});
const dots = document.querySelectorAll( ".indicators span" );
function showslide(i){
    slides.forEach(slide => slide.classList.remove( "active" ));
    dots.forEach(dot => dot.classList.remove( "active" ));
    slides[i].classList.add( "active" );
    dots[i].classList.add( "active" );
    index = i;
}
next.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showslide(index);
});
prev.addEventListener( "click", () => {
    index = (index+1) % slides.length;
    showslide(index);
});
function startautoslide() {
    interval = setInterval(() => {
        index = (index - 1 + slides.length) % slides.length;
        showslide(index);
    },3000);
}
function stopautoslide() {
    clearInterval(interval);
}
startautoslide();
document.querySelector(".slider").addEventListener("mouseenter", stopautoslide);
document.querySelector(".slider").addEventListener("mouseleave", startautoslide);