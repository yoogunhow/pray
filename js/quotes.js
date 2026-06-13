const quotes = [
    {
        quote: "Never put off till tomorrow what you can do the day after tomorrow.",
        author: "- Procrastinates"
    },
    {
        quote: "My bed is a magical place where I suddenly remember everything I forgot to do.",
        author: "- Sir Snooze-a-Lot"
    },
    {
        quote: "Doing nothing is hard, because you never know when you're done.",
        author: "- Professor Productivityn't"
    },
    {
        quote: "If you can't convince them, confuse them.",
        author: "- Mr.Kim"
    },
    {
        quote: "Knowledge is knowing a tomato is a fruit. Wisdom is not putting it in a fruit salad.",
        author: "- Chef Philosophy"
    },
    {
        quote: "I'll start tomorrow.",
        author: "- Me, since 2012."
    },
    {
        quote: "It works on my machine.",
        author: "- Every Developer Ever"
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        author: "- John Johnson"
    },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "- Martin Fowler"
    },
    {
        quote: "It worked yesterday.",
        author: "- Every Junior Developer, moments before panic"
    },
    {
        quote: "Computers are fast; developers keep them slow.",
        author: "- CPU Manufacturers Association"
    },
    {
        quote: "Software and cathedrals are much the same — first we build them, then we pray.",
        author: "- Sam Redwine"
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;