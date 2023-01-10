import React, { useContext, useState } from "react";
import { CardTextContext } from "../contexts/CardTextContext";

type SkillCardProps = {
  reactIcon: React.ReactNode;
  title: string;
};

const skillText = {
  Figma:
    "Capacitado para criar protótipos que compreendem as necessidades e expectativas tanto de clientes quanto de desenvolvedores.",
  "UI/UX Design":
    "Criação de sites e aplicativos intuitivos e de aparência agradável. Capaz de projetar interfaces de usuário eficientes que sejam fáceis de usar e atraentes visualmente.",
  "Html Css Javascript":
    "Vasto conhecimento em Html, Css e JavaScript, posso criar soluções de front-end incríveis que sejam atraentes visualmente, fáceis de usar e de alta performance.",
  Tailwind:
    "Usado em quase todos os meus projetos. Ele aumenta consideravelmente minha produtividade, permitindo que eu crie layouts atraentes e de alta performance de forma rápida e eficiente.",
  Bootstrap:
    "Bootstrap é uma ferramenta valiosa em meu arsenal de design em trabalhos em equipe, pois facilita o processo de criação de layouts responsivos e a comunicação do time.",
  Typescript: `Utilizo desde o "Hello World" em React. Permite códigos mais legíveis e de fácil compreensão tornando minha experiência com o React ainda mais agradável e eficiente.`,
  NextJS:
    "O NextJS tem me proporcionado produtividade e facilidade de manutenção do código. Me ajuda principalmente para atingir notas máximas no PageSpeed e bom SEO com React.",
  "React Native":
    "Me permite aproveitar meus conhecimentos em React criar aplicativos de alta qualidade para Android e iOS, também na conversão para PWA.",
  Laravel:
    "Me ajuda a padronizar meus projetos para facilitar a manutenção e o uso por outros desenvolvedores, utilizo prinicpalmente para criar APIs que serão integradas no frontend com NextJS",
  SQL: "Principalmente com MariaDB e MySQL e integrando com Laravel. Posso gerenciar e manipular dados em um banco de dados de forma eficiente e criar consultas complexas para extrair informações específicas.",
  Wordpress:
    "Criação de sites utilizando Wordpress, com temas e plugins específicos para a sua necessidade, além de serviços de manutenção",
  "Web Core Vitals":
    "Sem muito o que falar por aqui, notas acima de 95 para celular e fixado em 100 para desktop, além de todos os outros pontos no máximo segundo o PageSpeed.",
};

export default function SkillCard(props: SkillCardProps) {
  const { cardText, setCardText } = useContext(CardTextContext);
  const [wasClicked, setWasClicked] = useState(false);

  return (
    <div
      // onClick={() => { setCardText(skillText[props.title as keyof typeof skillText]) }}

      onMouseEnter={() => {
        setCardText(skillText[props.title as keyof typeof skillText]),
          setWasClicked(true);
      }}
      onMouseLeave={() => {
        setWasClicked(false);
      }}
      className={
        "flex flex-col justify-start items-center h-[173px] w-80 bg-black p-16 rounded gap-4 cursor-pointer border" +
        (wasClicked ? " border-white " : " border-black")
      }
    >
      <figure className={"w-25 h-25 flex justify-center items-start"}>
        {props.reactIcon}
      </figure>
      <h3 className={"text-center text-[20px] w-[102px]"}>{props.title}</h3>
    </div>
  );
}
