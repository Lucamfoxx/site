document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('click', (event) => {
            const squareColor = getComputedStyle(square).backgroundColor;
            const expandingBall = createExpandingBall(squareColor, event.clientX, event.clientY);
            document.body.appendChild(expandingBall);

            // Aguarde a animação de expansão da bola
            expandingBall.addEventListener('transitionend', () => {
                setTimeout(() => {
                    expandBackground(squareColor); // Altere o background para a cor da bola com opacidade
                    startFading(expandingBall); // Inicie o processo de desaparecimento da bola após a mudança de background
                }, 100); // Tempo para aguardar antes de iniciar as transições (100 milissegundos)
            });

            // Execute a expansão da bola
            setTimeout(() => {
                expandBall(expandingBall);
            }, 100);
        });
    });

    function createExpandingBall(color, mouseX, mouseY) {
        const expandingBall = document.createElement('div');
        expandingBall.classList.add('expanding-ball');
        expandingBall.style.left = `${mouseX}px`;
        expandingBall.style.top = `${mouseY}px`;
        expandingBall.style.backgroundColor = color;
        return expandingBall;
    }

    function expandBall(ball) {
        setTimeout(() => {
            ball.style.width = '4000px';
            ball.style.height = '4000px';
            ball.style.backgroundSize = 'cover';
            ball.classList.add('finished');
        }, 100);
    }

    function expandBackground(color) {
        // Altere o background da página para a cor da bola com opacidade gradual
        document.body.style.backgroundColor = color;
        document.body.style.transition = 'background-color 1s ease'; // Adicione uma transição de cor de fundo
    }

    function startFading(ball) {
        setTimeout(() => {
            ball.style.opacity = '0'; // Defina a opacidade da bola para 0
        }, 1000); // Tempo para aguardar antes de iniciar o esmaecimento da bola (1 segundo)
    }
});
