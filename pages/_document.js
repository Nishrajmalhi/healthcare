// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Chatbot scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "jCthwPBZbHLoC5domMkWl",
                domain: "www.chatbase.co"
              };
            `,
          }}
        />
        <script
          src="https://www.chatbase.co/embed.min.js"
          chatbotId="jCthwPBZbHLoC5domMkWl"
          domain="www.chatbase.co"
          defer
        ></script>

        {/* Google Translate scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.gtranslateSettings = {
                "default_language": "en",
                "detect_browser_language": true,
                "wrapper_selector": ".gtranslate_wrapper"
              };
            `,
          }}
        />
        <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Chatbot iframe */}
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/jCthwPBZbHLoC5domMkWl"
          width="100%"
          style={{ height: '100%', minHeight: '700px' }}
          frameBorder="0"
        ></iframe>

        {/* Google Translate wrapper */}
        <div className="gtranslate_wrapper"></div>
      </body>
    </Html>
  );
}