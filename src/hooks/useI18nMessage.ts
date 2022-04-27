import en from "../locales/en.json";
import pt from "../locales/pt.json";
import fr from "../locales/fr.json";

const messages = {
  en,
  "pt-PT": pt,
  "pt-BR": pt,
  fr,
} as any;

export const useI18nMessage = (locale: any) => {
  const sms = Object.keys(messages).includes(locale)
    ? messages[locale]
    : messages["en"];
  return {
    messages: sms,
  };
};
