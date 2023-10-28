const родитель = document.body; 

function изменитьЦвет(event) {
    if (event.target.classList.contains('цветная-кнопка')) {
        // Генерировать новый цвет
        const новыйЦвет = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

        // Изменить цвет кнопки
        event.target.style.backgroundColor = новыйЦвет;
    }
}
родитель.addEventListener('click', изменитьЦвет);