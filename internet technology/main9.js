const div = document.getElementById("myDiv");

div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "#f00"; /* Здесь меняем цвет фона на красный при наведении */
});

div.addEventListener("mouseout", function() {
    div.style.backgroundColor = "#ccc"; /* Возвращаем исходный фон при уходе мыши */
});
