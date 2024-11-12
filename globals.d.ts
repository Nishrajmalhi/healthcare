// globals.d.ts

export {};

declare global {
  interface Window {
    embeddedChatbotConfig: {
      chatbotId: string;
      domain: string;
    };
    gtranslateSettings: {
      default_language: string;
      detect_browser_language: boolean;
      wrapper_selector: string;
    };
  }
}