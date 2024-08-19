const quotes = [
    "The more we value things outside our control, the less control we have. - Epictetus",
    "First learn the meaning of what you say, and then speak. - Epictetus",
    "We suffer more often in imagination than in reality. - Seneca",
    "Associate with people who are likely to improve you. - Seneca",
    "Waste no more time arguing about what a good man should be. Be one. - Marcus Aurelius",
    "The best way to avenge yourself is to not be like that. - Marcus Aurelius"
];

const btn = document.getElementById("btn");
const quoteElement = document.getElementById("quote");

btn.addEventListener("click", () => {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;
});

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}