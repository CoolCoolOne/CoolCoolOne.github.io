// document.querySelector('.themes').addEventListener('change',(event)=>{
//     if (event.target.nodeName === 'INPUT') {
//         // console.log(bbhbjhbh);
//         document.documentElement.classList.remove('dark','light');
//         document.documentElement.classList.add(event.target.value);
//     }
// });

console.log('hello!!')
const lightT = document.querySelector('#light');
const DarkT = document.querySelector('#dark');
const htmldiv = document.querySelector('#htmlId');


lightT.addEventListener('click',function(){
    console.log('click!!!');
    htmldiv.classList.remove('dark');
    htmldiv.classList.add('light');
})

DarkT.addEventListener('click',function(){
    console.log('click!!!');
    htmldiv.classList.remove('light');
    htmldiv.classList.add('dark');
})