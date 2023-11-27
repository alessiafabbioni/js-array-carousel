const carousel = document.getElementById('car');
const prevButton = document.querySelector('button[onclick="prevSlide()"]');
const nextButton = document.querySelector('button[onclick="nextSlide()"]');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;