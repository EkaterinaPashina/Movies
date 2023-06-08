//Создание массива с именем, должностью, фильмографией и лучшим фильмом режиссера
const directors = [{
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

//Определение мест вставки двух секций текста
const directors__list = document.getElementById('directors__list');
const topMovies = document.getElementById('movies__top');

//Перебор элементов массива
directors.forEach((item) => {

    //Создание элемента списка, вложенного в него дива и дива под ссылку
    const listItem = document.createElement('li');
    listItem.className = 'listItem';
    const nameAndCareer = document.createElement('div');
    nameAndCareer.className = 'name_and_career';
    const filmography = document.createElement('div');
    filmography.className = 'filmography';

    //Создание параграфа для имени
    const directorName = document.createElement('p');
    directorName.textContent = item.name;
    directorName.className = 'director__name';

    //Создание параграфа для должности
    const career = document.createElement('p');
    career.textContent = item.career;
    career.className = 'director__career';

    //Создание ссылки для фильмографии и открытия ее в новом окне
    const films = document.createElement('a');
    films.textContent = "Фильмография";
    films.className = 'director__films';
    films.href = item.films;
    films.target = "_blank";

    //Укладывание элементов в родителей
    directors__list.append(listItem);
    listItem.append(nameAndCareer, filmography);
    nameAndCareer.append(directorName, career);
    filmography.append(films);

    //Создание массива из лучших фильмов
    const topFilmList = [];

    //Перебор элементов существующего массива в новый массив
    directors.forEach((item) => {
        topFilmList.push(item.top_rated_film);
    })

    //Отображение элементов массива
    topMovies.innerText = topFilmList.join(', ');
});