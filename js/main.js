document.getElementById('botonRojo').addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
    document.body.style.color = 'red';
});

document.getElementById('botonAzul').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
    document.body.style.color = 'blue';
});

document.getElementById('botonVerde').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightgreen';
    document.body.style.color = 'green';
});

document.getElementById('botonReset').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});
