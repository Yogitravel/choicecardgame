
import React, { useState } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard';

const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  }
};

export default function App() {

  let [result, setResult] = useState("")


  // let userC = {}
  // let computerC = {}

  let [userC, setUserC] = useState({})
  let [computerC, setComputerC] = useState({})


  const onplay = (userChoice) => {
    //user chon dua tren du lieu co san, bua , keo , giay



    //computer chon mot gia tri ngau nhien o CHOICE - nhung ma CHOICE la 1 object, phai bien thanh array
    let itemArray = Object.keys(CHOICES)

    //tao ra dc array, bat may tinh chon ra 1 index ngau nhien
    let randomNum = Math.floor(Math.random() * 3)

    //gia tri random tra ra la index, phai chuyen thanh object lam sao
    let itemName = itemArray[randomNum]
    //lay gia tri tu CHOICE bao gom ca hinh va itemName
    setComputerC(CHOICES[itemName])
    setUserC(CHOICES[userChoice])

    console.log("random number", CHOICES[userChoice])

    //Tao bang ket qua

    if (userChoice === "rock") {
      result = itemName === "scissors" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "paper") {
      result = itemName === "rock" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "scissors") {
      result = itemName === "paper" ? "Victory!" : "Defeat!";
    }

    if (userChoice === itemName) result = "Tie game!";


    setResult(result)

  }


  // //Tao ket qua hien len tren nguoi choi va computer
  // let judgment = (userChoice, itemName) => {
  //   if (userChoice === itemName) {
  //     return "TIE"
  //   } else if (userChoice === "rock") {
  //     return itemName === "scissors" ? "WIN" : "LOSE"
  //   } else if (userChoice === "scissors") {
  //     return itemName === "paper" ? "WIN" : "LOSE"
  //   } else if (userChoice === "paper") {
  //     return itemName === "rock" ? "WIN" : "LOSE"
  //   }


  // }






  return (
    <div className="App" >
      <ChoiceCard title="YOU" choice={userC} />

      <div>
        <button onClick={() => onplay("rock")}>Rock</button>
        <button onClick={() => onplay("paper")}>Paper</button>
        <button onClick={() => onplay("scissors")}>Scissors</button>
        <h1>{result}</h1>
      </div>

      <div>
        <ChoiceCard title="COMPUTER" choice={computerC} />

      </div>





    </div>

  );
}