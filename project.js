let choices = document.querySelectorAll(".choice");
let userscore = 0;
let compscore = 0;
const compscorepara = document.querySelector("#comp");
const userscorepara = document.querySelector("#my");
const msg = document.querySelector("#msg");

const gencompchoice = () => {
    const array = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return array[randidx];
}

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You Win.";
        msg.style.backgroundColor = 'green';
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You lose.";
        msg.style.backgroundColor = 'red';
    }
}

const drawgame = () => {
    msg.innerText = "Game was a draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
}

const playgame = (userchoice) => {
    const comp_choice = gencompchoice();
    if (comp_choice === userchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = comp_choice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = comp_choice === "scissors" ? true : false; // Corrected logic
        } else {
            userwin = comp_choice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});
