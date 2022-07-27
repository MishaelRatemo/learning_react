import React, { useState, } from "react";
import memesData from "../memes.js";

function Meme() {
  const [memeImg, setMemeImg] = useState("https://i.chzbgr.com/full/9530114816/h6FC9B3EC/suit-rip-big-fart-and-say-does-someone-smell-popcorn-and-they-take-big-sniff");

  function getMemeImg() {
    const memesArr = memesData.data.memes
    // generae a radom nimber that can be used to ramdomly access
    // imagesfrom our array
    const randNum = Math.floor(Math.random() * memesArr.length)
    setMemeImg(memesArr[randNum].url);

  }

  return (
    <main>
      <button className="form--button"  onClick={getMemeImg}>Get new Meme</button>
      <img className="meme--image" src={memeImg} alt="memeImg" />
    </main>
  );
}

export default Meme;
