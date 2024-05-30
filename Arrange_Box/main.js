"use strict";
(function(){
    let selected = [];
    const items = document.querySelectorAll('.js-item');
    const container1 = document.querySelector('.js-container1');
    const container2 = document.querySelector('.js-container2');


    function handleClick(event) {
        if (event.target.classList.contains("js-item")) {
            event.target.classList.toggle("active");
            // встроенная стрелочная коллбэк функция
            // метод find принимает функцию как аргумент. 
            //тут ф-я callback вызывается с опр. тремя арг.
            // const found = selected.find((item) => {Number(item.dataset.id) === Number(event.target.dataset.id)});
            const found = selected.find(isAlreadyActive);
            if (found) {
                console.log ('click1');
                // let remo = selected.splice(Number(event.target.dataset.id),1);
                // console.log (remo);
                // пересоздать массив добавив все элем кроме тыкнутого
                selected = selected.filter(delAlreadyActive);
            } else {
                console.log ('click2');
                selected.push(event.target);
            }            

            function isAlreadyActive (item) {
                let res = Number(item.dataset.id) === Number(event.target.dataset.id);
                return res;
            };
            function delAlreadyActive (item) {
                let res = Number(item.dataset.id) !== Number(event.target.dataset.id);
                return res;
            }
        }
    }

    container1.addEventListener("click", handleClick);
    container2.addEventListener("click", handleClick);

    const left = document.querySelector('.js-left');
    const right = document.querySelector('.js-right'); 
    const leftAll = document.querySelector('.js-left-all');
    const rightAll = document.querySelector('.js-right-all');

    function handleMove(event) {
        const target = event.target;
        if (target.classList.contains("js-right")) {
            selected.forEach((item) => {
                if (item.parentElement === container1) {
                container2.appendChild(container1.removeChild(item));
                // item.classList.remove("active");
                }
            });
            // selected = [];
            
        } else if (target.classList.contains("js-left-all")) {
            Array.from(container2.querySelectorAll(".js-item")).forEach((item) => {
                container1.appendChild(container2.removeChild(item));
                // item.classList.remove("active");
            });
            // selected = [];
        } else if (target.classList.contains("js-right-all")) {
            Array.from(container1.querySelectorAll(".js-item")).forEach((item) => {
                container2.appendChild(container1.removeChild(item));
                // item.classList.remove("active");
            });
            // selected = [];
        } else if (target.classList.contains("js-left")) {
            selected.forEach((item) => {
                if (item.parentElement === container2) {
                    container1.appendChild(container2.removeChild(item));
                    // item.classList.remove("active");
                }                
            });
            // selected = [];
        }
    }
    
    left.addEventListener("click", handleMove);
    right.addEventListener("click", handleMove);
    leftAll.addEventListener("click", handleMove);
    rightAll.addEventListener("click", handleMove);   
})()