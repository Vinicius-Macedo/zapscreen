import React from "react";
import { DefaultMarginSection } from "../DefaultMarginSection";
import { FaqItemsArray } from "../FaqItemsArray";

export default function FaqSection() {
  return (
    <DefaultMarginSection
      id="faq"
      hasEffect={true}
      className="flex flex-col gap-16"
    >
      <h2 className="title font-ubuntu font-bold text-center">
        Dúvidas <span className="text-gradient">Frequentes</span>
      </h2>
      <FaqItemsArray
        question={[
          {
            title: "O que tipo de conexão à internet é necessário?",
            text: "Para usar o nosso serviço, é necessário ter uma conexão 3G/4G estável no local do evento. Em áreas remotas, como fazendas e chácaras, pode haver problemas de sinal. Se houver uma conexão wifi disponível no local, é recomendado usá-la.",
          },
          {
            title: "Posso realizar testes antes do evento?",
            text: "Sim, é possível. Temos um modo de teste disponível assim que finalizar a configuração do evento. Assim que se certificar de que tudo está funcionando como desejado, basta iniciar o slideshow no dia do evento.",
          },
          {
            title: "Como a moderação das fotos é feita?",
            text: "A moderação das fotos é feita através do navegador de um computador ou celular, acessando a área restrita e selecionando a opção de moderação do evento.\nCom o nosso serviço, você pode reunir as fotos tiradas pelos convidados em um só lugar, e as imagens podem ser transmitidas em tempo real no telão, monitoradas e com tecnologias de segurança, garantindo o sucesso do evento.",
          },
        ]}
      />
    </DefaultMarginSection>
  );
}
