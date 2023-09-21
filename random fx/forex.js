// List of Forex currency pairs
const forexPairs = [
    "AUD/CAD",
    "AUD/CHF",
    "AUD/JPY",
    "AUD/NZD",
    "AUD/USD",
    "CAD/CHF",
    "CAD/JPY",
    "CHF/JPY",
    "EUR/AUD",
    "EUR/CAD",
    "EUR/CHF",
    "EUR/GBP",
    "EUR/JPY",
    "EUR/NZD",
    "EUR/USD",
    "GBP/AUD",
    "GBP/CAD",
    "GBP/CHF",
    "GBP/JPY",
    "GBP/NZD",
    "GBP/USD",
    "NZD/CAD",
    "NZD/CHF",
    "NZD/JPY",
    "NZD/USD",
    "USD/CAD",
    "USD/CHF",
    "USD/JPY",
    // Add more pairs here
];

// Function to select and display a random Forex pair
function generateRandomPair() {
    const randomIndex = Math.floor(Math.random() * forexPairs.length);
    const selectedPair = forexPairs[randomIndex];
    document.getElementById('selected-pair').textContent = selectedPair;
}

// Add an event listener to the button
document.getElementById('generate-button').addEventListener('click', generateRandomPair);

// Initial random pair on page load
generateRandomPair();
