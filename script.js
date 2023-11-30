const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");


async function fetchRandomQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        
        const quote = data.content;
        const author = data.author;

        quoteElement.textContent = quote;
        authorElement.textContent = `- ${author}`;
    } catch (error) {
        console.error("Error fetching the quote:", error);
        quoteElement.textContent = "Failed to fetch a quote. Please try again later.";
        authorElement.textContent = "";
    }
}

newQuoteButton.addEventListener("click", fetchRandomQuote);

fetchRandomQuote();
