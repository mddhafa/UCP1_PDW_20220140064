function updateGreetings() {
    var today = new Date();
    var currentHour = today.getHours();
    var greetingsElement = document.getElementById('greetings');
    var currentTimeElement = document.getElementById('current-time');
    var greetings = '';

    if (currentHour < 12) {
        greetings = 'Pagi semua ngopi dulu kuy! ☀️';
    } else if (currentHour < 18) {
        greetings = 'Siang semua jangan lupa makan!🌤️';
    } else if (currentHour < 20) {
        greetings = 'Sore semua mandi yok udah bau!🌥️';
    } else {
        greetings = 'Malam semua tidur hari esok tambah berat!🌑';
    }

    greetingsElement.innerText = greetings;
    currentTimeElement.innerText = 'Waktu Sekarang: ' + today.toLocaleTimeString();
}

updateGreetings();
setInterval(updateGreetings, 1000);

// JavaScript for carousel
var slideIndex = 0;

function showSlide() {
    var slides = document.querySelectorAll('.card');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    slideIndex++;
    showSlide();
}

function prevSlide() {
    slideIndex--;
    showSlide();
}

showSlide();