'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?' , '');
const b = prompt('На сколько оцените его?' , '');
const c = prompt('Один из последних просмотренных фильмов?' , '');
const d = prompt('На сколько оцените его?' , '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

if (1) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;

if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log('Слишком много');
} else {
    console.log('Ok!');
}

(num == 50) ? console.log('Ok!') : console.log('Error!');

switch (num) {
    case 49:
        console.log('Неверно!');
        break;
    case 100:
        console.log('Неверно!');
        break;
    case 50:
        console.log('Ok!');
        break;
    default:                                        //прописваем если нет верного ответа
        console.log('Нет праивльного ответа');
        break;
}


