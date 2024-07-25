'use strict';

let sum = 0;
let total;

function addProduct(event) {
    let curDiv = document.querySelector('.products');
    let hr = document.querySelector('hr');
    let divProd = document.createElement("div");
    divProd.classList.add('product');
    curDiv.insertBefore(divProd, hr);    
    let divTask = document.createElement('div');
    divTask.classList.add('task');
    divTask.classList.add('task-prod');
    divProd.append(divTask); 
     
    let divTotal = document.createElement('div');
    divProd.append(divTotal); 
    divTotal.classList.add('total');
    divTotal.classList.add('total-prod');
    let text = event.target.innerText.split(':');
    
    divTask.textContent = text[0];
    divTotal.textContent = text[1];

    event.target.setAttribute('disabled', true);

    let btnRemove = document.createElement('button');
    divTask.append(btnRemove);
    btnRemove.classList.add('btn-remove');
    btnRemove.innerHTML = 'Remove';
   
    btnRemove.addEventListener('click', removeProduct);

    total = parseInt(text[1].split('$')[1]);
    sum = sum + total;
    document.querySelector('.sum').textContent = '$'+sum;
}



    function removeProduct(event) {
        total =  parseInt(event.target.parentElement.nextElementSibling.textContent.split('$')[1]);
        sum -= total;
        event.target.parentElement.parentElement.remove();
        document.querySelector('.sum').textContent = '$'+sum;
        for (let i = 0; i< button.length; i++) {
           if(total == parseInt(button[i].textContent.split('$')[1])){
            button[i].disabled = false;
           } 
            
        }
    }

    let button = document.querySelectorAll('.btn-prod');

    for (let i = 0; i< button.length; i++)
        button[i].addEventListener('click', addProduct);

