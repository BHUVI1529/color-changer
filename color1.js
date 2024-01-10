const button = document.querySelector("button");
const body = document.querySelector("body");

const color = ["red","green","blue","mediumvioletred","purple","yellow","black"];


document.querySelector("button").addEventListener('click',function(){
    const colorIndex =parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];

});