
var screen = document.querySelector('tbody th[colspan="3"]');
var buttons = document.querySelectorAll('tbody th');

var currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', function () {
        var buttonText = button.textContent;

        if (buttonText === '=') {
            
            try {
                var result = eval(currentInput);
                screen.textContent = result;
                currentInput = result.toString();
            } catch (error) {
                screen.textContent = 'Error';
                currentInput = '';
            }
        } else if (buttonText === 'C') {
            
            screen.textContent = '';
            currentInput = '';
        } else {
            
            currentInput += buttonText;
            screen.textContent = currentInput;
        }
    });
});
