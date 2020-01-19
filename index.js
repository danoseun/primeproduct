let body = document.querySelector("body .calculate");
let container = document.querySelector(".parent-table");
let changeInput= document.querySelector(".table-input")


function clearInput(){
    container.innerHTML="";
}


function generatePrimeNumbers(e){
        e.preventDefault();
        let n = document.querySelector(".table-input").value;
        if(/[^0-9\s]+/.test(n) || n.trim() === ""){
            container.style.textAlign = 'center';
            container.style.display = 'inline-block';
            container.style.fontFamily = 'sans-serif,Verdana,"Times New Roman';
            return container.innerHTML = `Input values should be from 2 and above`
        }

        let convertToNumber = Number(n)
        let array=[2,3];
        let arrayCopy;
        for (var i = 5; i <= convertToNumber; i += 2) {
            if (array.every(function(p) { return i % p; })) {
                array.push(i);
            }
        }
        arrayCopy=array.slice();
         
        arrayCopy.forEach((i)=>{
            let divPrime = document.createElement("div");
            divPrime.innerHTML=i
            divPrime.style.width= "" + 90/arrayCopy.length + "%";
            divPrime.style.marginBottom='5px';
            container.appendChild(divPrime); 
            })
        
        
        for(let i=0; i<array.length; i++){

            for(let j=0; j<arrayCopy.length; j++){
                
                let div = document.createElement("div");   
               
                div.innerHTML =  array[i] * arrayCopy[j]               
                
                
                div.style.width= "" + 90/arrayCopy.length + "%";
                container.appendChild(div);
            }
        }
    }
    
    body.addEventListener('click',generatePrimeNumbers)
    changeInput.addEventListener('keyup',clearInput)