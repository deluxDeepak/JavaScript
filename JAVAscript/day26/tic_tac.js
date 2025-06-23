// Initialize the game

// Set the initial turn to 'O'
turn = 'O';
// Keep track of the total number of turns
total_turn = 0;

// Define winning combinations
let winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] // Corrected the typo here
];

// Take a array to store the matching answer 
let board_array = new Array(9).fill('E');
// ['e','e','e','e','e','e','e','e','e']


// Function to check if there is a winner
function check_winner() {
    for (let [index0, index1, index2] of winner) {
        if (board_array[index0] != "E" && board_array[index0] == board_array[index1] && board_array[index1] == board_array[index2])
            return 1;
    }
    return 0;
}

// event listner bhi hatana par sakta hai (ki wo further act na kare )
// Function to handle a player's move
const printer = (event) => {
    const element = event.target;

    // Check if the cell is empty
    if (board_array[element.id] == "E") {

        total_turn++;
        // If it's O's turn
        if (turn == 'O') {
            element.innerHTML = 'O';
            board_array[element.id] = 'O';
            // Check if O wins
            if (check_winner()) {
                document.getElementById('winningMessage').innerHTML = "Winner is O";
                board.removeEventListener('click', printer);
                // Remove event listener to prevent further moves
                return;
            }
            // Switch turn to X
            turn = 'X';
        }
        // If it's X's turn
        else {
            element.innerHTML = 'X';
            board_array[element.id] = 'X';
            // Check if X wins
            if (check_winner()) {
                document.getElementById('winningMessage').innerHTML = "Winner is X";
                // Remove event listener to prevent further moves
                board.removeEventListener('click', printer);
                return;
            }
            // Switch turn to O
            turn = "O";
        }
        // Check for a draw
        if (total_turn == 9)
            document.getElementById('winningMessage').innerHTML = "Match Is Draw";

    }
}

// Add event listener to the board
const board = document.querySelector('.board');
board.addEventListener('click', printer);

// Restart button functionality
// Restart button 
const Restart = document.getElementById('restartButton');
Restart.addEventListener('click', () => {
    const cell = document.getElementsByClassName('cell');

    Array.from(cell).forEach((value) => {
        value.innerHTML = "";
    })
    
    // Setting the default value again 
    turn ="O";
    total_turn=0;
    board_array=new Array(9).fill('E');

    // set the winning message 
    document.getElementById('winningMessage').innerHTML = "";
    
    // Restart the listener
    board.addEventListener('click', printer);

})