// Write code below 💖
const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
  ];
  const captionsArray = [
    "When you realize it's Monday... again.",
    "That moment when the Wi-Fi suddenly stops working.",
    "Me trying to adult, but life keeps throwing curveballs.",
    "When you say you’ll only watch one episode... 5 hours later.",
    "My face when someone asks if I’ve been productive today.",
    "Trying to stay positive but 2020 had other plans.",
    "When the Zoom call finally ends and you can go back to pajamas.",
    "When you finish all your snacks but the movie's just starting.",
    "That awkward moment when your joke falls flat.",
    "When you remember something embarrassing from years ago."
  ]
  const randomMeme = document.getElementById("random-meme");
  const randomCaption = document.getElementById("random-caption");
  const button = document.getElementById("generator-button");
  button.addEventListener("click", function(){
    const indexNumber1 = Math.floor(Math.random() * memeArray.length);
    const indexNumber2 = Math.floor(Math.random() * captionsArray.length);
    randomMeme.src = memeArray[indexNumber1];
    randomCaption.innerText = captionsArray[indexNumber2];
  
  })