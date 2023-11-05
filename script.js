var img = document.getElementById('box1');

var slides=['image/blog8.avif','image/bl1.avif','image/bl4.avif',];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,3000);


var img1 = document.getElementById('box5');

var slides1=['image/bl2.jpg','image/bl6.avif'];

var Start1=0;

function slider1(){
    if(Start1<slides1.length){
        Start1=Start1+1;
    }
    else{
        Start1=1;
    }
    console.log(img1);
    img1.innerHTML = "<img src="+slides1[Start1-1]+">";
   
}
setInterval(slider1,4000);


var img2 = document.getElementById('box4');

var slides2=['image/blog0.avif', 'image/bl3.avif'];

var Start2=0;

function slider2(){
    if(Start2<slides2.length){
        Start2=Start2+1;
    }
    else{
        Start2=1;
    }
    console.log(img2);
    img2.innerHTML = "<img src="+slides2[Start2-1]+">";
   
}
setInterval(slider2,6000);
