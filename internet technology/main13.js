const красныеДивы = document.querySelectorAll('.красный-див');

function сменитьЦвет(событие) {
    if (this.style.backgroundColor === 'red') {
        this.style.backgroundColor = 'green';
        this.removeEventListener('click', сменитьКрасныйЦвет);
        this.addEventListener('click', сменитьЗеленыйЦвет);
    } else {
        this.style.backgroundColor = 'yellow';
        this.removeEventListener('click', сменитьЗеленыйЦвет);
        this.addEventListener('click', сменитьКрасныйЦвет);
    }
}

function сменитьКрасныйЦвет(событие) {
    this.style.backgroundColor = 'blue';
    this.removeEventListener('click', сменитьКрасныйЦвет);
    this.addEventListener('click', сменитьЗеленыйЦвет);
}

function сменитьЗеленыйЦвет(событие) {
    this.style.backgroundColor = 'yellow';
    this.removeEventListener('click', сменитьЗеленыйЦвет);
    this.addEventListener('click', сменитьКрасныйЦвет);
}

красныеДивы.forEach(function (див) {
    див.addEventListener('click', сменитьКрасныйЦвет);
});