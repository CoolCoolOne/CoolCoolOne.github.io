
// id="cover">
// id="contain">
// id="no-rpt">
// id="yes-rpt">
// id="reset">
// .flowerCover{
//     background-size:cover;
// }
// .flowerContain{
//     background-size:contain;
// }
// .flowerNoRepeat{
//     background-repeat: no-repeat;
// }
// .flowerRepeat{
//     background-repeat: repeat;
// }

// 30.03.24
// Код громоздок потому что я не знаю как работать с данными и вынужден использовать самое простое innerHTML свойство


const cover = document.querySelector('#cover');
// console.log(cover);
const contain = document.querySelector('#contain');
const no_rpt = document.querySelector('#no-rpt');
const yes_rpt = document.querySelector('#yes-rpt');
const reset = document.querySelector('#reset');


const flowerPix = document.querySelector('#flowerPix');

const prop1 = document.querySelector('#propertie1');
const prop2 = document.querySelector('#propertie2');
const prop3 = document.querySelector('#propertie3');
const prop4 = document.querySelector('#propertie4');

function resetFunc(){
    flowerPix.classList.remove('flowerCover');
    flowerPix.classList.remove('flowerContain');
    flowerPix.classList.remove('flowerNoRepeat');
    flowerPix.classList.remove('flowerRepeat');
};
reset.addEventListener('click',function(){ resetFunc() ;});

function resetFunc(){
    flowerPix.classList.remove('flowerCover');
    flowerPix.classList.remove('flowerContain');
    flowerPix.classList.remove('flowerNoRepeat');
    flowerPix.classList.remove('flowerRepeat');
    prop1.innerHTML = '';
    prop2.innerHTML = '';
    prop3.innerHTML = '';
    prop4.innerHTML = '';
};


cover.addEventListener('click',function(){
    flowerPix.classList.add('flowerCover');
    // console.log(flowerPix);
    prop1.innerHTML = 'background-size:cover;';
});
contain.addEventListener('click',function(){
    flowerPix.classList.add('flowerContain');
    prop2.innerHTML = 'background-size:contain;';
});
no_rpt.addEventListener('click',function(){
    flowerPix.classList.add('flowerNoRepeat');
    prop3.innerHTML = 'background-repeat: no-repeat;';
});
yes_rpt.addEventListener('click',function(){;
    flowerPix.classList.add('flowerRepeat');
    prop4.innerHTML = 'background-repeat: repeat;';
});

