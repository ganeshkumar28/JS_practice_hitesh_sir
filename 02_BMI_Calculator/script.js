const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')

    if(height === '' || height<0 || isNaN(height))
    {
        height.innerHTML = `Please give valid height.`
    }
    else if(weight === '' || weight<0 || isNaN(weight))
    {
        weight.innerHTML = `Please give valid weight.`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi <=18.6)
        result.innerHTML = `<span>${bmi} , You come under <span style="color: orange;">Under Weight</span> category </span> `;
        else if (bmi >18.6 && bmi <= 24.9)
        result.innerHTML = `<span>${bmi} , You come under <span style="color: green;">Normal Weight</span> category </span> `;
        else
        result.innerHTML = `<span>${bmi} , You come under <span style="color: Red;">Over Weight</span> category </span> `;
    }
})
