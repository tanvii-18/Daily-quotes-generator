
const cont_color = document.querySelector(".main")
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.getElementById("newQuote");

let allQuotes = [];

cont_color.addEventListener("click",()=>{
    changeColor()
});

function changeColor()
{
    const codeNum = Math.floor(Math.random() * 16777215).toString(16);
    const color = "#" + codeNum;
    cont_color.style.backgroundColor = color;
}

function showQuote() {

  const index = Math.floor(Math.random() * allQuotes.length);
  const quoteData = allQuotes[index];

  quote.textContent = `"${quoteData.content}"`;
  author.textContent = `— ${quoteData.author}`;
  changeColor();
}

function generateQuote() {
  fetch("quote.json")
    .then((response) => response.json())
    .then((data) => {
      allQuotes = data;
      showQuote();
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
      quote.textContent = "Oops! Couldn't load a quote.";
      author.textContent = "";
    });
}
  
btn.addEventListener("click", showQuote);

icon.addEventListener("click", () => {
  const textToCopy = `${quote.textContent}`;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Quote copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
});

  

generateQuote();
changeColor();

