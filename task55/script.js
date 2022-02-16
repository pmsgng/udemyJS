'use strict';

console.log('Запрос данных...');

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных');

        const product = {
            name: 'TV',
            price: 2000,
        };

        resolve(product);
        // reject();
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            // console.log(product);
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('Произошла ошибка');
}).finally(() => {
    console.log('finally');
});


// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         },time);
//     });
// };

// // test(1000).then(() => console.log('1000 ms'));
// // test(1000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {    // ждёт выполнение всех промисов
//     console.log('Последний промис');
// });

// Promise.race([test(1000), test(2000)]).then(() => {  // ждет выполнения первого промиса 
//     console.log('Первый промис');
// });


// мой пример 

let p = new Promise((resolve, reject) => {
    const sum = 1 + 1;

    if (sum === 2) { // так как условие верно, resolve true ,будет then. 
        resolve('Правильный ответ');
    } else {
        reject('Ошибка');
    }
});

p.then((answer) => {
    console.log(`${answer} лежит в .then`);
}).catch((answer) => {
    console.log(`${answer} лежит в .catch`);
});

// пример с коллбеками,переписанный на промис
const userStillHere = false;
const userLeft = true;

function showUserState(callback, errorCallback) {
    if (userStillHere) {
        callback({
            name: 'Masha',
            status: 'Сидит на сайте'
        });
    } else if (userLeft) {
        callback({
            name: 'Masha',
            status: 'Ушла с сайта'
        });
    } else {
        errorCallback('Ошибка!');
    }
}

showUserState(
    (obj) => {
        console.log(`${obj.name}: ${obj.status}`);
    }, (message) => {
        console.log(`${message} Попробуй сделать по другому!`);
    }
);


const prms = function showUserStatePromise() {
    return new Promise((resolve, reject) => {
        if (userStillHere) {
            resolve({
                name: 'Masha',
                status: 'Сидит на сайте'
            });
        } else if (userLeft) {
            resolve({
                name: 'Masha',
                status: 'Ушла с сайта'
            });
        } else {
            reject('Ошибка!');
        }
    });
}

prms().then((obj) => {
    console.log(`${obj.name}: ${obj.status}`);
}).catch((message) => {
    console.log(`${message} Попробуй сделать по другому!`);
});


// задачка с learnJS

function delay(ms) {
    // ваш код
    return new Promise((resolve,reject) => {
        if (ms > 2000) {
            setTimeout(() => {
                resolve(delay);
            },ms);
        } else {
            reject('Мало времени');
        }

    });
  }
  
  delay(2000).then(() => console.log('выполнилось через 3 секунды')).catch((text) => console.log(text));

  const objj = {
      a: 2,
      b: {
          c: 3,
          d: {
              e: 4,
              f: 5,
          }
      }
  };

  const cloneObjj = JSON.stringify(objj);

//   cloneObjj.b.d.f = 4;

  console.log(objj, cloneObjj);
