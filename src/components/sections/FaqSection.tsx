import React from "react";
import { DefaultMarginSection } from "../DefaultMarginSection";
import { FaqItemsArray } from "../FaqItemsArray";
import Link from "next/link";

export default function FaqSection() {
  return (
    <DefaultMarginSection
      id="faq"
      hasEffect={true}
      className="flex flex-col items-center gap-16"
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
          {
            title: "Como funciona o ZapScreen?",
            text: "O ZapScreen é uma ferramenta que permite que os convidados de um evento compartilhem suas fotos, vídeos e áudios diretamente para telões e TVs, através do WhatsApp. O usuário envia as mídias para um número pré-cadastrado no ZapScreen e elas são processadas e exibidas em tempo real.",
          },
          {
            title: "Como os convidados utilizam o ZapScreen?",
            text: "Os convidados precisam apenas salvar o número pré-cadastrado no ZapScreen no seu contato do WhatsApp e enviar as mídias para esse número. É necessário que tenham internet no celular para enviar as mídias.",
          },
          {
            title: "As fotos são moderadas antes de exibidas?",
            text: "Sim, todas as fotos, vídeos e áudios enviados passam por uma moderação antes de serem exibidos nos telões e TVs. Isso garante que somente conteúdo apropriado seja exibido.",
          },
          {
            title: "O ZapScreen suporta fotos, vídeos e áudios?",
            text: "Sim, o ZapScreen suporta fotos, vídeos e áudios enviados pelos convidados.",
          },
          {
            title: "O ZapScreen é compatível com todos os dispositivos?",
            text: "O ZapScreen é compatível com qualquer dispositivo que tenha acesso à internet e possa rodar o WhatsApp.",
          },
          {
            title: "Existe algum custo para o usuário?          ",
            text: "Não, o uso do ZapScreen é gratuito para os convidados do evento.          ",
          },
          // {
          //   title: "Como o ZapScreen gera receita?",
          //   text: "O ZapScreen gera receita através de pacotes de serviços vendidos para os anfitriões dos eventos, como personalização do layout dos telões, integração com redes sociais, entre outros.",
          // },
          // {
          //   title: "Como a inteligência artificial é usada no ZapScreen?",
          //   text: "A inteligência artificial é usada para processar as fotos e vídeos enviados pelos usuários através do WhatsApp, aplicando efeitos e melhorando a qualidade das imagens antes de serem exibidas nos telões e TVs.",
          // },
          // {
          //   title: "O ZapScreen é seguro para usar?",
          //   text: "Sim, a segurança é uma prioridade para nós. Todas as fotos e vídeos passam por uma moderação antes de serem exibidos e armazenamos os dados dos usuários de acordo com as normas da LGPD.",
          // },
          // {
          //   title: "O ZapScreen é compatível com todos os tipos de eventos?",
          //   text: "Sim, o ZapScreen é compatível com todos os tipos de eventos, desde festas de aniversário até eventos corporativos e casamentos.",
          // },
          // {
          //   title: "Há limitações de uso do ZapScreen?",
          //   text: "O único requisito é que o evento tenha acesso à internet. Além disso, o número de fotos e vídeos enviados pode ser limitado de acordo com o pacote escolhido pelo cliente.",
          // },
          // {
          //   title:
          //     "Como posso acompanhar o desempenho do ZapScreen durante o evento?",
          //   text: "Oferecemos uma área de administração onde é possível acompanhar o desempenho do ZapScreen em tempo real, incluindo o número de fotos e vídeos enviados, o ranking de usuários mais ativos e a exibição das fotos e vídeos no telão.",
          // },
        ]}
      />
      <Link
        href="https://wa.me/5548999999"
        target={"_blank"}
        className="text-white px-16 py-6 underline font-bold"
      >
        Ainda estou com dúvidas
      </Link>
    </DefaultMarginSection>
  );
}
