document.addEventListener('DOMContentLoaded', function() {
    const choiceBtns = document.querySelectorAll('.choice-btn');
    const playerChoiceIcon = document.getElementById('player-choice-icon');
    const computerChoiceIcon = document.getElementById('computer-choice-icon');
    const resultContainer = document.getElementById('result');
    const playAgainBtn = document.getElementById('play-again');
    
    const choices = ['pedra', 'papel', 'tesoura'];
    const choiceIcons = {
        pedra: '<i class="fas fa-hand-rock"></i>',
        papel: '<i class="fas fa-hand-paper"></i>',
        tesoura: '<i class="fas fa-hand-scissors"></i>'
    };
    
    choiceBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const playerChoice = this.dataset.choice;
            playGame(playerChoice);
        });
    });
    
    playAgainBtn.addEventListener('click', resetGame);
    
    function playGame(playerChoice) {
        
        playerChoiceIcon.innerHTML = choiceIcons[playerChoice];
        
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        computerChoiceIcon.innerHTML = choiceIcons[computerChoice];
        
        const result = determineWinner(playerChoice, computerChoice);
        
        resultContainer.innerHTML = `<p>${result}</p>`;
        
        playAgainBtn.classList.remove('hidden');
        
        choiceBtns.forEach(btn => {
            btn.disabled = true;
            btn.classList.add('disabled');
        });
    }
    
    function determineWinner(player, computer) {
        if (player === computer) {
            return 'Empate!';
        }
        
        if (
            (player === 'pedra' && computer === 'tesoura') ||
            (player === 'papel' && computer === 'pedra') ||
            (player === 'tesoura' && computer === 'papel')
        ) {
            return 'Você ganhou!';
        }
        
        return 'Você perdeu!';
    }
    
    function resetGame() {
        playerChoiceIcon.innerHTML = '';
        computerChoiceIcon.innerHTML = '';
        resultContainer.innerHTML = '<p>Faça sua jogada!</p>';
        playAgainBtn.classList.add('hidden');
        
        choiceBtns.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('disabled');
        });
    }
});