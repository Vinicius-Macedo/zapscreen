import { DefaultMarginSection } from "../components/DefaultMarginSection";
import Image from "next/image";
import HeroSection from "../components/sections/HeroSection";
import SectionWithImage from "../components/sections/SectionWithImage";
import StepSection from "../components/sections/StepSection";
import imageLoader from "../loader";
import FaqSection from "../components/sections/FaqSection";
import Testimonial from "../components/Testimonial";
import { SectionWithVideo } from "../components/SectionWithVideo";
import Link from "next/link";
import Icone from "../components/Icone";
import Topic from "../components/Topic";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionWithVideo />
      <DefaultMarginSection
        id="como-funciona"
        hasEffect={true}
        className="flex flex-col gap-32"
      >
        <h2 className="title font-ubuntu font-bold text-center">
          Como <span className="text-gradient">funciona?</span>
        </h2>
        <div className="flex flex-col items-center gap-16">
          <StepSection
            title={"Envio da foto"}
            description={
              "Envie sua foto para o telão de forma fácil e rápida! Basta tirar uma foto com seu celular e enviá-la para o número de WhatsApp fornecido pelo ZapScreen. Em poucos segundos, sua foto será exibida nos telões, permitindo que todos possam compartilhar os melhores momentos do evento."
            }
            number={"01"}
            isClockWise={false}
            imageUrl={"/img/step-image-01.webp"}
            imageAlt={"Pessoa segurando celular e tirando foto em um casamento"}
          />
          <Image
            src={"/img/arrow-down.svg"}
            alt={""}
            width={93}
            height={94}
            className={"object-contain opacity-20"}
            loader={imageLoader}
            unoptimized
          />
          <StepSection
            title={"Moderação da foto"}
            description={
              "Para eventos que precisam de moderação, todas as fotos enviadas serão verificadas por um operador do ZapScreen. Isso garante que imagens inadequadas ou ofensivas sejam descartadas antes de serem exibidas nos telões."
            }
            number={"02"}
            isClockWise={true}
            imageUrl={"/img/step-image-02.webp"}
            imageAlt={"Pessoa com a mão no mouse e olhando uma tela"}
          />
          <Image
            src={"/img/arrow-down.svg"}
            alt={""}
            width={93}
            height={94}
            className={"object-contain opacity-20 -scale-x-100"}
            loader={imageLoader}
            unoptimized
          />
          <StepSection
            title={"Melhoria da Foto"}
            description={
              "Nós queremos que sua foto fique ainda melhor! Utilizamos inteligência artificial para fazer ajustes na cor, brilho e nitidez e sua imagem estará perfeita para ser exibida nos telões do evento."
            }
            number={"03"}
            isClockWise={false}
            imageUrl={"/img/step-image-03.webp"}
            imageAlt={
              "Laptop e pessoa segurando celuar que possui várias imagens"
            }
          />
          <Image
            src={"/img/arrow-down.svg"}
            alt={""}
            width={93}
            height={94}
            className={"object-contain opacity-20"}
            loader={imageLoader}
            unoptimized
          />
          <StepSection
            title={"A foto é exibida no telão"}
            description={
              "Chegou a hora de ver sua foto brilhar nos telões! Depois de passar pelas etapas de moderação e melhoria, sua imagem será exibida para que todos possam vê-la e compartilhar a experiência. Sinta-se um verdadeiro fotógrafo profissional!"
            }
            number={"04"}
            isClockWise={true}
            imageUrl={"/img/step-image-04.webp"}
            imageAlt={
              "Laptop e pessoa segurando celuar que possui várias imagens"
            }
          />
          <Image
            src={"/img/arrow-down.svg"}
            alt={""}
            width={93}
            height={94}
            className={"object-contain opacity-20 -scale-x-100"}
            loader={imageLoader}
            unoptimized
          />
          <StepSection
            title={"Download de todas as fotos"}
            description={
              "Conteúdo: Após o evento, os anfitriões podem fazer o download de todas as fotos recebidas através do ZapScreen. Isso permite que eles guardem todas as memórias do evento para sempre."
            }
            number={"05"}
            isClockWise={false}
            imageUrl={"/img/step-image-05.webp"}
            imageAlt={
              "Laptop e pessoa segurando celuar que possui várias imagens"
            }
          />
        </div>
      </DefaultMarginSection>
      <SectionWithImage
        id="o-que-e"
        title={
          <>
            O que é o <span className="text-gradient">ZapScreen?</span>
          </>
        }
        description={
          <>
            O ZapScreen é mais do que uma ferramenta tecnológica, é uma forma de
            eternizar os momentos mais especiais de seu evento. Imagine ter
            centenas de fotógrafos registrando cada detalhe, cada emoção, cada
            sorriso.
            <br />
            <br /> Com o ZapScreen, isso é possível! Nossa ferramenta permite
            que seus convidados capturem fotos e vídeos através do WhatsApp e
            essas mídias são exibidas em tempo real em telões
          </>
        }
        callToAction={"Fale com a gente"}
        imageUrl={"/img/section-image.webp"}
        imageAlt={"section-image.webp"}
      />
      <DefaultMarginSection
        hasEffect={true}
        containerClassName={"bg-cover bg-center bg-no-repeat"}
        styles={{ backgroundImage: "url('/img/section-background.webp')" }}
      >
        <div className="flex flex-col items-center gap-16 md:gap-32 py-32">
          <h2 className="font-ubuntu font-bold text-center text-[32px] lg:text-[54px]">
            Transforme suas fotos em memórias inesquecíveis com Zapscreen
          </h2>
          <Link
            href="https://wa.me/5548999999"
            target={"_blank"}
            className="bg-gradient text-white px-16 py-6 rounded font-bold"
          >
            Quero no meu evento
          </Link>
        </div>
      </DefaultMarginSection>
      <SectionWithImage
        invertOrder={true}
        title={
          <>
            Compartilhe <span className="text-gradient">suas memórias</span> em
            tempo real com Zapscreen
          </>
        }
        description={
          <>
            Uma ferramenta inovadora que permite aos convidados de um evento
            capturar fotos, vídeos e textos através de um grupo no WhatsApp e
            exibi-las em tempo real em telões e televisores espalhados pelo
            evento.
          </>
        }
        callToAction={"Fale com a gente"}
        imageUrl={"/img/section-image-2.webp"}
        imageAlt={"section-image.webp"}
      />
      <DefaultMarginSection
        id="testemunhos"
        hasEffect={true}
        className="flex flex-col items-center gap-16 lg:gap-32"
      >
        <h2 className="title font-ubuntu font-bold text-center">
          O que <span className="text-gradient">dizem</span> sobre nós?
        </h2>
        <div className="flex flex-col items-center justify-center w-full gap-15 lg:grid lg:grid-cols-3">
          <Testimonial
            author={"Ana Souza"}
            description={
              "Nunca vi uma forma tão incrível de envolver meus convidados em um evento! Com o Zapscreen, todos se sentiram parte da festa e puderam compartilhar suas memórias de maneira única. Obrigado por tornar meu evento ainda mais especial!"
            }
            imageUrl={"/img/avatar-example-2.png"}
            imageAlt={"Descrição da foto"}
          />
          <Testimonial
            author={"Pedro Almeida"}
            description={
              "Eu não poderia estar mais feliz com o Zapscreen! Foi incrível ver minhas fotos sendo exibidas em um telão, e sentir a energia contagiante que tomou conta do evento. Com certeza recomendarei o serviço para todos os meus amigos!"
            }
            imageUrl={"/img/avatar-example.png"}
            imageAlt={"Descrição da foto"}
          />
          <Testimonial
            author={"Juliana Oliveira"}
            description={
              "Que experiência incrível! Nunca imaginei que uma simples foto pudesse se tornar uma lembrança tão emocionante. Com o Zapscreen de fotos em tempo real, pude reviver os momentos mais especiais do evento e compartilhar com todos os presentes. Obrigado por criar essa experiência única e inesquecível!"
            }
            imageUrl={"/img/avatar-example-3.png"}
            imageAlt={"Descrição da foto"}
          />
        </div>
        <Link
          href="https://wa.me/5548999999"
          target={"_blank"}
          className="bg-gradient text-white px-12 py-6 rounded font-bold"
        >
          Tenha no seu evento
        </Link>
      </DefaultMarginSection>

      <DefaultMarginSection
        hasEffect={true}
        className="flex flex-col items-center gap-16 lg:gap-32"
      >
        <article className="flex flex-col gap-8">
          <h2 className="title font-ubuntu font-bold text-center">
            Para todos os tipos de <span className="text-gradient">evento</span>
          </h2>
          <p className="text text-whitegray text-center">
            Nosso sistema de exibição de fotos em tempo real é perfeito para
            todos os tipos de eventos, desde casamentos até festas de
            aniversário!
          </p>
        </article>

        <div className="flex justify-center flex-wrap items-end gap-15 lg:justify-between">
          <Icone
            imageUrl={"/img/icone-01.svg"}
            imageAlt={"Icone de evento"}
            title={"Aniversários"}
          />
          <Icone
            imageUrl={"/img/icone-02.svg"}
            imageAlt={"Icone de evento"}
            title={"Festas"}
          />
          <Icone
            imageUrl={"/img/icone-03.svg"}
            imageAlt={"Icone de evento"}
            title={"Casamentos"}
          />
          <Icone
            imageUrl={"/img/icone-04.svg"}
            imageAlt={"Icone de evento"}
            title={"Shows"}
          />
          <Icone
            imageUrl={"/img/icone-05.svg"}
            imageAlt={"Icone de evento"}
            title={"Palestras"}
          />
          <Icone
            imageUrl={"/img/icone-06.svg"}
            imageAlt={"Icone de evento"}
            title={"Báres"}
          />
        </div>
        <Link
          href="https://wa.me/5548999999"
          target={"_blank"}
          className="bg-gradient text-white px-12 py-6 rounded font-bold"
        >
          Tenha no seu evento
        </Link>
      </DefaultMarginSection>
      <DefaultMarginSection className="flex flex-col gap-8 sm:gap-16 lg:gap-32">
        <h2 className="title font-ubuntu font-bold text-center">
          Título aqui <span className="text-gradient">com destaque aqui</span>
        </h2>
        <div className="grid gap-15 lg:grid-cols-3">
          <Topic
            title={"Título do Card"}
            desc={
              "O ZapScreen é mais do que uma ferramenta tecnológica, é uma forma de eternizar os momentos mais especiais de seu evento. Imagine ter centenas de fotógrafos registrando cada detalhe, cada emoção, cada sorriso."
            }
          />
          <Topic
            title={"Título do card"}
            desc={
              "O ZapScreen é mais do que uma ferramenta tecnológica, é uma forma de eternizar os momentos mais especiais de seu evento. Imagine ter centenas de fotógrafos registrando cada detalhe, cada emoção, cada sorriso."
            }
          />
          <Topic
            title={"Título do card"}
            desc={
              "O ZapScreen é mais do que uma ferramenta tecnológica, é uma forma de eternizar os momentos mais especiais de seu evento. Imagine ter centenas de fotógrafos registrando cada detalhe, cada emoção, cada sorriso."
            }
          />
        </div>
      </DefaultMarginSection>
      <FaqSection />
      <DefaultMarginSection className="flex flex-col items-center gap-16">
        <div className="flex-col gap-4 flex">
          <h2 className="title font-ubuntu font-bold text-center">
            Ainda não ficou <span className="text-gradient">satisfeito?</span>
          </h2>
          <p className="text text-whitegray text-center">
            Por que simplesmente não fala com gente?
            <br /> Ficaremos feliz com o seu contato
          </p>
        </div>
        <Link
          href="https://wa.me/5548999999"
          target={"_blank"}
          className="bg-gradient text-white px-12 py-6 rounded font-bold"
        >
          quero falar
        </Link>
      </DefaultMarginSection>
    </main>
  );
}
