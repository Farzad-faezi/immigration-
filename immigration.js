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
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-form-btn');
    const formContent = document.getElementById('form-content');

    // تابع برای مدیریت نمایش/پنهان‌سازی
    function toggleForm() {
        // افزودن یا حذف کردن کلاس is-open 
        formContent.classList.toggle('is-open');

        // به‌روزرسانی ویژگی aria-expanded برای دسترس‌پذیری
        const isExpanded = formContent.classList.contains('is-open');
        toggleBtn.setAttribute('aria-expanded', isExpanded);
    }

    // بررسی اینکه آیا دکمه و فرم در صفحه وجود دارند و افزودن Event Listener
    if (toggleBtn && formContent) {
        toggleBtn.addEventListener('click', toggleForm);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdown-btn');
    const dropdownContent = document.getElementById('dropdown-content');
    const dropdownIcon = document.getElementById('dropdown-icon');

    dropdownButton.addEventListener('click', function() {
        // 1. نمایش یا پنهان کردن لیست (با max-height)
        dropdownContent.classList.toggle('show'); 
        
        // 2. چرخش نرم فلش
        dropdownIcon.classList.toggle('rotate'); 
    });

    // 3. بستن دراپ‌داون هنگام کلیک در بیرون آن
    window.onclick = function(event) {
        if (!event.target.matches('#dropdown-btn') && !event.target.matches('#dropdown-icon')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                // برگرداندن آیکون به حالت عادی
                dropdownIcon.classList.remove('rotate'); 
            }
        }
    }
});
