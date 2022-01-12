'use strict';

// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);  //метод позволяет посмотреть все узлы(ноды) родителя body
// console.log(document.body.firstChild); //получение первого узла родителя 
// console.log(document.body.firstElementChild); // получение первого ЭЛЕМЕНТА родителя
// console.log(document.body.lastChild);   //получение последнего узла родителя
// console.log(document.body.lastElementChild); // получение последнего ЭЛЕМЕНТА

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector("[data-current = '3']").nextSibling); //получение следующего узла
// console.log(document.querySelector("[data-current = '3']").previousSibling); //получение предыдущего узла 


// console.log(document.querySelector("[data-current = '3']").nextElementSibling); //получение следующего ЭЛЕМЕНТА
// console.log(document.querySelector("[data-current = '3']").previousElementSibling); //получение предыдущего ЭЛЕМЕНТА

for (let node of document.body.childNodes) {
    if(node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}