let data: {id: string, content: string, author: string} = {
  id: "",
  content: "",
  author: ""
}

const contentQoute: HTMLElement = document.querySelector(".content-qoute") as HTMLElement;
const contentAuthor: HTMLElement = document.querySelector(".content-author") as HTMLElement;
const generateButton: HTMLButtonElement = document.querySelector(".generate-qoute") as HTMLButtonElement;

generateButton?.addEventListener("click", () => {
  start();
})

async function start() {
  await fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((res) => {
      data.id = res._id;
      data.content = res.content;
      data.author = res.author;
      console.log("data updated");
      
    });
  
  console.log(data.content);

  contentQoute.innerText = data.content;
  contentAuthor.innerText = "- " + data.author;
  console.log("function done")
  
}

start();