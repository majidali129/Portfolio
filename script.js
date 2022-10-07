let flag=0 // because array index strart from 0;
function swapImage(x){
    flag = flag + x;
    if(flag>4){
        flag = 0;
    }else if(flag<0){
        flag = 4;
    };
    slideImage(flag)
}

function slideImage(slideNumber){
    let images = Array.from(document.querySelectorAll(".image"));
    for(let image of images){
        image.style.display = "none"
    }

    images[slideNumber].style.display = "block"

}
slideImage(flag)