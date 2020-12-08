import React, { useState } from "react";
import bg from "./christmas.jpg";
import "./styles.css";

const santaEmoticon = {
  "🎅": "Santa Claus",
  "🎄": "Christmas Tree",
  "🍪": "Cookie",
  "🕯️": "Candle",
  "⛄": "Snowman",
  "🧦": "Socks",
  "🍷": "Wine Glass",
  "🦌": "Deer",
  "❄️": "Snowflake",
  "🎁": "Wrapped Gift",
  "🔔": "Bell",
  "🛐": "Place of Worship",
  "✝️": "Latin Cross",
  "⛪": "Church",
  "🌟": "Glowing Star"
};

var emojiWeKnow = Object.keys(santaEmoticon);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    // console.log(userInput);
    var meaning = santaEmoticon[userInput];
    setMeaning(meaning);
  }
  function emojiOnClickHandler(emoji) {
    // console.log({meaning});
    var meaning = santaEmoticon[emoji];
    setMeaning(meaning);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover ",
        minHeight: "600px"
      }}
    >
      <div className="App">
        <h1 style={{ padding: "1rem", color: "red" }}>Christmas is Here</h1>
        <input placeHolder="Put your emoji here" onChange={emojiInputHandler} />

        <span
          style={{
            display: "block",
            padding: "1rem",
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "rgba(225, 8, 8)"
          }}
        >
          {meaning}
        </span>

        <h3 style={{ color: "white" }}>All we have </h3>

        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiOnClickHandler(emoji)}
              style={{
                margin: "auto",
                display: "inline",
                textAlign: "center",
                padding: "2rem 2rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
        {/* <h2
          style={{ backgroundColor: "red", padding: "0.7rem", color: "grey" }}
        >
          Choose emoji to see their meaning
        </h2> */}
      </div>
    </div>
  );
}
