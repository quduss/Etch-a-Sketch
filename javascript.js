const div = document.querySelector('div');

for (let i = 0; i < 16; i++) {
    const container = document.createElement('div');
    container.classList.add('container');
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.append(square);
    }
    div.appendChild(container);
}