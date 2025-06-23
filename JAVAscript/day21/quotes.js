const quotes = [
    "The best way to predict the future is to invent it. – Alan Kay",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "Dream big and dare to fail. – Norman Vaughan",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Try not to become a man of success. Rather become a man of value. – Albert Einstein",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt"
];


function generatequotes() {
    const text = document.getElementById('quote');
    // text.innerHTML="New word to change ";
    const index = Math.floor(Math.random() * quotes.length);
    text.innerText = quotes[index];
}
setInterval(generatequotes, 1000);
