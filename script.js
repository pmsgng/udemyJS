'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// const a = prompt('Один из последних просмотренных фильмов?' , '');
// const b = prompt('На сколько оцените его?' , '');
// const c = prompt('Один из последних просмотренных фильмов?' , '');
// const d = prompt('На сколько оцените его?' , '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let s = 0; s < 2; s++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');

    if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        s--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('просмотрено довольно много фмльмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('вы киноман!');
} else {
    console.log('Произошла ошибка!');
}

console.log(personalMovieDB);



//-------------------------------------
// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('Слишком много');
// } else {
//     console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!') : console.log('Error!');

// switch (num) {
//     case 49:
//         console.log('Неверно!');
//         break;
//     case 100:
//         console.log('Неверно!');
//         break;
//     case 50:
//         console.log('Ok!');
//         break;
//     default:                                        //прописваем если нет верного ответа
//         console.log('Нет праивльного ответа');
//         break;
// }

// let number = 50;

// while (number < 55) {
//     console.log(number);
//     number++;
// } 

// do {
//     console.log(number);
//     number++;
// } while (number < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(number);
//     number++;
// }

// for (let t = 1; t < 10; t++) {
//     if(t === 6) {
//         break;
//         // continue;      оператор не прерывает цикл,а пропускает число 6 в цикле
//     }
//     console.log(t);
// }