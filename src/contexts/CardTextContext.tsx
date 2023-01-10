import { createContext, ReactNode, useState } from "react";

type CardContextProps = {
  children: ReactNode;
};

type CardTextContetType = {
  cardText: string;
  setCardText: (text: string) => void;
};

const initialValue = {
  cardText:
    "Essas são as técnologias que uso quando se trata de resolver qualquer problema que você possa ter, utilizando sempre as melhores práticas e padrões de mercado.",
  setCardText: (text: string) => {},
};

export const CardTextContext = createContext<CardTextContetType>(initialValue);

export const CardTextProvider = ({ children }: CardContextProps) => {
  const [cardText, setCardText] = useState(initialValue.cardText);

  return (
    <CardTextContext.Provider value={{ cardText, setCardText }}>
      {children}
    </CardTextContext.Provider>
  );
};

// import { createContext } from "react";

// type CardTextProviderProps = {
//   children: React.ReactNode;
// };

// interface CardTextContextData {
//   cardText: string;
// }

// const initalValue = {
//   cardText: "nome do container aqui",
//   setCardText: (value: string) => {},
// };

// export const CardTextContext = createContext<CardTextContextData>(initalValue);

// export const CardTextProvider = ({ children }: CardTextProviderProps) => {
//   return (
//     <CardTextContext.Provider value={initalValue}>
//       {children}
//     </CardTextContext.Provider>
//   );
// };
