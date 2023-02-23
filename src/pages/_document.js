import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Zapscreen - Compartilhando memórias em tempo real</title>
        <meta
          name="title"
          content="Zapscreen - Compartilhando memórias em tempo real"
        />
        <meta
          name="description"
          content="Crie momentos inesquecíveis em seu evento com nosso serviço de exibição de fotos em tempo real. Com nosso sistema, as fotos tiradas pelos seus convidados ganham vida em um telão, capturando a emoção e alegria do momento. Experimente agora e faça do seu evento um verdadeiro sucesso!"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="URL_DO_SITE_AQUI" />
        <meta
          property="og:title"
          content="Zapscreen - Compartilhando memórias em tempo real"
        />
        <meta
          property="og:description"
          content="Crie momentos inesquecíveis em seu evento com nosso serviço de exibição de fotos em tempo real. Com nosso sistema, as fotos tiradas pelos seus convidados ganham vida em um telão, capturando a emoção e alegria do momento. Experimente agora e faça do seu evento um verdadeiro sucesso!"
        />
        <meta
          property="og:image"
          content="/social-media-image.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="URL_DO_SITE_AQUI" />
        <meta
          property="twitter:title"
          content="Zapscreen - Compartilhando memórias em tempo real"
        />
        <meta
          property="twitter:description"
          content="Crie momentos inesquecíveis em seu evento com nosso serviço de exibição de fotos em tempo real. Com nosso sistema, as fotos tiradas pelos seus convidados ganham vida em um telão, capturando a emoção e alegria do momento. Experimente agora e faça do seu evento um verdadeiro sucesso!"
        />
        <meta
          property="twitter:image"
          content="/social-media-image.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        {/* FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
