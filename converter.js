'use strict';

//selectors
const fromOption = document.querySelector("#from-select");
const toOption = document.querySelector("#to-select");
const inp = document.querySelector("#from-input");
const out = document.querySelector("#to-output");
const err = document.querySelector("#error");
const convertbtn = document.querySelector("#ConvertBtn");
const swap = document.querySelector("#SwapBtn");

let numFrom= "Binary" , numTo= "Binary" ;

//events

fromOption.addEventListener("change", function () {
    numFrom = fromOption.options[fromOption.selectedIndex].text;
    inp.placeholder = numFrom + " Number";
 });
 
 toOption.addEventListener("change", function () {
    numTo = toOption.options[toOption.selectedIndex].text;
    out.placeholder = numTo + " Number";
 });
 

 //conversions
 
 convertbtn.addEventListener("click", ()=> {
   
   let inpVal = inp.value;
    switch (numFrom) {
       case "Binary":
         if(/^[01]*$/.test(inpVal)){
             switch (numTo) {
                case "Decimal": out.value = parseInt(inpVal, 2); //binary to decimal
                   break;
                case "Hexadecimal": out.value = parseInt(inpVal, 2).toString(16).toUpperCase(); //binary to hex
                   break;
                case "Octal": out.value = parseInt(inpVal, 2).toString(8); //binary to octal
                   break;
                default: out.value = inpVal;
             }
         }
         else{
            to.value = "";
            alert("Invalid " + numFrom + " Number!!! Please write a valid " + numFrom + " number.")
         }
         break;

        case "Decimal":
         if(/^[0-9]*$/.test(inpVal)){
            switch (numTo) {
                case "Binary": out.value = Math.abs(inpVal).toString(2);
                  break;
                case "Octal": out.value = Math.abs(inpVal).toString(8);
                  break;
                case "Hexadecimal": out.value = Math.abs(inpVal).toString(16).toUpperCase();
                  break;
                default: out.value = inpVal;
            }
         }
         else{
            to.value = "";
            alert("Invalid " + numFrom + " Number!!! Please write a valid " + numFrom + " number.")
         }
          break;

        case "Octal":
         if(/^[0-7]*$/.test(inpVal)){
            switch (numTo) {
                case "Binary": out.value = parseInt(inpVal, 8).toString(2);
                break;
                case "Decimal": out.value = parseInt(inpVal, 8);
                break;
                case "Hexadecimal": out.value = parseInt(inpVal, 8).toString(16).toUpperCase();
                break;
                default: out.value = inpVal;
            }
         }
         else{
            to.value = "";
            alert("Invalid " + numFrom + " Number!!! Please write a valid " + numFrom + " number.")
         }
            break;

        case "Hexadecimal":
         if(/^[0-9a-fA-F]*$/.test(inpVal)){
            switch(numTo){
                case "Binary": out.value = parseInt(inpVal, 16).toString(2);
                break;
                case "Decimal": out.value = parseInt(inpVal, 16);
                break;
                case "Octal": out.value = parseInt(inpVal, 16).toString(8);
                break;
                default: out.value = inpVal;
            }
         }
         else{
            to.value = "";
            alert("Invalid " + numFrom + " Number!!! Please write a valid " + numFrom + " number.")
         }
            break;

        }
    });

    //swapping

    swap.addEventListener("click", function (){
        let temp = fromOption.options[fromOption.selectedIndex].text;
        //let valueTemp = inp.value;
        
        numFrom = toOption.options[toOption.selectedIndex].text;
        inp.placeholder = numFrom + " Number";
        fromOption.options[fromOption.selectedIndex].text = numFrom;
        //inp.value = out.value;

        numTo = temp;
        out.placeholder = numTo + "Number";
        toOption.options[toOption.selectedIndex].text = numTo;
        //out.value = valueTemp;
    })