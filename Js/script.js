const e = document.getElementById("e");
const b = document.getElementById("b");
const g = document.getElementById("g");
const d = document.getElementById("d");
const a = document.getElementById("a");
const E = document.getElementById("E");

const cordae = new Audio('../audio/e.mp4');
const cordab = new Audio('../audio/B.mp4');
const cordag = new Audio('../audio/G.mp4');
const cordad = new Audio('../audio/D.mp4');
const cordaa = new Audio('../audio/A.mp4');
const cordaE = new Audio('../audio/E.mp4');

let cont = [];

e.addEventListener('click',()=>{
    cont.push('1');
    cordae.play();
    if(cont.length == 2){
        cordae.pause();
        cont = [];
    }
});

b.addEventListener('click',()=>{
    cont.push('1');
    cordab.play();
    if(cont.length == 2){
        cordab.pause();
        cont = [];
    }
})

g.addEventListener('click',()=>{
    cont.push('1');
    cordag.play();
    if(cont.length == 2){
        cordag.pause();
        cont = [];
    }
})

d.addEventListener('click',()=>{
    cont.push('1');
    cordad.play();
    if(cont.length == 2){
        cordad.pause();
        cont = [];
    }
})

a.addEventListener('click',()=>{
    cont.push('1');
    cordaa.play();
    if(cont.length == 2){
        cordaa.pause();
        cont = [];
    }
})

E.addEventListener('click',()=>{
    cont.push('1');
    cordaE.play();
    if(cont.length == 2){
        cordaE.pause();
        cont = [];
    }
})




