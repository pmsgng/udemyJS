'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let s = 0; s < 2; s++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                s--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('просмотрено довольно много фмльмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('вы киноман!');
        } else {
            console.log('Произошла ошибка!');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        // for (let i = 1; i <= 3; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();

            // if( genre === '' || genre == null) {
            //     console.log("вы ввели некорректные данные или не ввели их вообще");
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }
        for (let i = 1; i < 2; i++) { 
            let genre = prompt(`Введите Ваш любимый жанр через запятую!`).toLowerCase();

            if (genre === '' || genre == null) {
                console.log("вы ввели некорректные данные или не ввели их вообще");
                i--;
            } else {
                personalMovieDB.genres = genre.split(', ').sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
};
