
let field = document.querySelector('#field');
let ball = document.querySelector('#ball');

field.onclick = function(event) {

    let maxX = field.clientWidth - ball.offsetWidth;

    let maxY = field.clientHeight - ball.offsetHeight;

    let fieldCoords = field.getBoundingClientRect();

    let x = event.clientX - fieldCoords.left - field.clientLeft  - (ball.offsetWidth / 2);

    let y = event.clientY - fieldCoords.top - field.clientTop  - (ball.offsetHeight / 2);

    x = Math.max(x, 0);

    y = Math.max(y, 0);

    x = Math.min(x, maxX);

    y = Math.min(y, maxY);


    ball.style.left = x + 'px';

    ball.style.top = y + 'px';

};
