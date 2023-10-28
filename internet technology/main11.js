const firstImage = document.getElementById("image1");
const secondImage = document.getElementById("image2");

firstImage.addEventListener("click", function() {
    firstImage.style.display = "none"; // Скрываем первую картинку
    secondImage.style.display = "block"; // Показываем вторую картинку
});

secondImage.addEventListener("click", function() {
    secondImage.style.display = "none"; // Скрываем вторую картинку
    firstImage.style.display = "block"; // Показываем первую картинку
});
