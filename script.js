const createCanvas = document.getElementById('createCanvas'); 

 // Добавляем функцию создания холста по нажатию кнопки

createCanvas.addEventListener('click', function (event) {

    const width = document.getElementById('widthInput').value;
    const height = document.getElementById('heightInput').value;
    const canvas = document.getElementById('canvas');

    canvas.innerHTML = '';

    for (let i = 0; i < height; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            const cell = document.createElement('td');
            cell.addEventListener('click', function () {
                cell.style.backgroundColor = document.getElementById('colorPicker').value;
                coloredCells.push(cell);
            });
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
      
})

const resetCell = document.getElementById('resetCell');

// Добавляем функцию очистки последней окрашенной ячейки по нажатию на кнопку

let coloredCells = [];
resetCell.addEventListener('click', function() {
  if (coloredCells.length > 0) {
    coloredCells.pop().style.backgroundColor = '';
  }
});



const clearCanvas = document.getElementById('clearCanvas')

// Добавляем функцию очистки всего холста по нажатию на кнопку

clearCanvas.addEventListener('click', function() {
    const cells = document.querySelectorAll('td');
    cells.forEach(function(cell) {
        cell.style.backgroundColor = '';
    });
});