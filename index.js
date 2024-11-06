document.querySelector('.button').addEventListener('click', function(){
    const num = parseInt(document.getElementById('number').value);

    const selectElement = document.getElementById('types');
    const selectedValue = selectElement.value;
    if (selectedValue === " ") {
        alert("OOPS!!, SOMETHING WENT WRONG... PLEASE MAKE A SELECTION. ");
        document.getElementById('output').innerText = " Ensure to make a selection";

        exit;
    }

    const decimal = num.toString(10);
    const binary = num.toString(2);
    const octal = num.toString(8);
    const hexadecimal = num.toString(16);


if (`${num} `> 0 ) {
    document.getElementById('output').innerText = 
    `the representation of ${num} in decimal is :  ${decimal}\n`+
     `the representation of ${num} in binary is :  ${binary}\n`+
     `the representation of ${num} in octal is :  ${octal} \n`+
     `the representation of ${num} in hexadecimal is :  ${hexadecimal}\n`;
        

    }else if (isNaN(num) ) {

        document.getElementById('output').innerText = " Wrong input....\n\n Enter a valid number";
    }

});

