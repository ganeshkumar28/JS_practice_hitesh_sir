//genarate random colors

const randomColor=function(){
    const hex = '0123456789ABCDEF';
    let color ='#'

    for(i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)]
    }

    return color
}

let intervalId;
const startChange = function(){
    if(!intervalId){   // safety check ...good code practice 
    intervalId=setInterval(function(){
        document.body.style.backgroundColor=randomColor()
    },1000);
}
}

const stopChange = function(){
    clearInterval(intervalId);
    intervalId =null //This is clean code techinque . this is written to flush the intervalId's past data i,e to jus save the memory
}


document.getElementById('start').addEventListener('click',startChange)

document.getElementById('stop').addEventListener('click',stopChange)