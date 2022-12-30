// import react
import { useEffect, useState, useRef } from "react";

type WordsArray = string[];

const useTypeWriter = (text: string) => {
  const [currentText, setCurrentText] = useState("");

  

  useEffect(() => {
    setTimeout(() => {
      setCurrentText((value) => value.substring(0, value.length - 1));
    }, 1000);
  }, []);

  return <span>{currentText}</span>;
};

export default useTypeWriter;
