let lenght;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById('lenght').value);
    width = parseFloat(document.getElementById('width').value);

    let area = lenght * width;
}

document.getElementById('result').innerText = `The area of the rectangle is: ${area}`