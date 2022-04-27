import { IntlProvider } from "react-intl";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useI18nMessage } from "../src/hooks/useI18nMessage";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  const { messages } = useI18nMessage(locale);
  
  return (
    <IntlProvider locale={locale as string} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
