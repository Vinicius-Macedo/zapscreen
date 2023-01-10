import { useState, useEffect } from "react";

type EffectState = "Typing" | "Erasing" | "Waiting";

function useTyping(wordsArray: Array<string>) {
  const [words, setWords] = useState(wordsArray);
  const [typedWord, setTypedWord] = useState("");
  const [effectState, setEffectState] = useState<EffectState>("Typing");

  function moveTheFirstWordElementToTheEndOfArray() {
    const firstWord = words[0];
    words.shift();
    words.push(firstWord);
  }

  function eraseLastLetter() {
    if (effectState == "Erasing") {
      setTimeout(() => {
        setTypedWord((value) => value.slice(0, value.length - 1));
      }, 50);
    }
  }

  function TypeTheNextLetter(text: string) {
    if (effectState == "Typing") {
      setTimeout(() => {
        setTypedWord(text.slice(0, typedWord.length + 1));
      }, 75);
    }
  }

  useEffect(() => {
    switch (effectState) {
      case "Typing":
        // checa se terminou de digitar a palavra
        if (typedWord == words[0]) {
          setEffectState("Waiting");
        } else {
          TypeTheNextLetter(words[0]);
        }
        break;
      case "Erasing":
        if (typedWord && effectState == "Erasing") {
          eraseLastLetter();
        } else {
          moveTheFirstWordElementToTheEndOfArray();
          setEffectState("Typing");
        }
        break;
      case "Waiting":
        setTimeout(() => {
          setEffectState("Erasing");
          eraseLastLetter();
        }, 3000);
    }
  }, [effectState, typedWord]);

  return typedWord;
}

export default useTyping;
