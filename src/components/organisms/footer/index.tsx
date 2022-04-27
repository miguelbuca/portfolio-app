import { NextPage } from "next";
import { useIntl } from "react-intl";

const Footer: NextPage = () => {

  const { formatMessage: t } = useIntl();

  const social: Anchor[] = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/miguelbuca/",
    },
    {
      name: "GitHub",
      link: "https://github.com/miguelbuca",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/miguel_buca/",
    },
  ];

  const contact: Anchor[] = [
    {
      name: "Email",
      link: "mailto:miguelpedrobuca@gmail.com",
    },
    {
      name: "(+244) 948 600 567",
      link: "tel:+244948600567",
    },
  ];

  return (
    <footer
      id="about"
      className="h-auto border-t-[rgba(255,255,255,.06)] flex flex-col border-t border-solid"
    >
      <div className="container md:container md:mx-auto flex-1 pb-[6rem] pt-[3rem] lg:flex-row md:flex-row  sm:flex-col flex flex-row">
        <div className="flex-1 flex flex-col sm:mb-[1rem]">
          <div className="flex-1 flex flex-row items-center">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 mr-1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.8405 9.12566C22.664 8.82165 22.379 8.68282 22.379 8.68282L28.6047 5.08841C28.9199 4.90641 29.323 5.01442 29.505 5.32966C29.687 5.64489 29.579 6.04799 29.2637 6.22999L23.4049 9.61256C23.8869 10.1258 24.3179 10.7022 24.6851 11.3384C27.2569 15.7928 25.7307 21.4887 21.2762 24.0604C17.8784 26.0222 13.7581 25.5995 10.8533 23.3114L19.1524 18.5199C19.4676 18.3379 19.5756 17.9348 19.3936 17.6196C19.2116 17.3044 18.8085 17.1963 18.4933 17.3783L9.83451 22.3775C9.35249 21.8642 8.92146 21.2877 8.55416 20.6516C5.98238 16.1971 7.50859 10.5012 11.963 7.92946C15.3609 5.96769 19.4812 6.39044 22.3861 8.6785L14.3072 13.3428C13.9919 13.5248 13.8839 13.9279 14.0659 14.2432C14.2479 14.5584 14.651 14.6664 14.9662 14.4844L23.4008 9.6148C23.3917 9.61041 23.015 9.42602 22.8405 9.12566ZM3.32965 26.1328C3.01442 26.3149 2.90641 26.7179 3.08841 27.0332C3.27041 27.3484 3.67351 27.4564 3.98875 27.2744L10.8629 23.3056C10.8629 23.3056 10.6025 22.9497 10.4108 22.7516C10.2192 22.5534 9.82492 22.3828 9.82492 22.3828L3.32965 26.1328Z"
                fill="currentColor"
              ></path>
            </svg>
            <strong className="mr-1">{t({ id: "allEightsReserved" })}</strong>
          </div>
          <div>
            <span className="text-[rgba(255,255,255,.4)] text-[11pt]">
              Luanda, Angola
            </span>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-10 child:grid child:grid-rows-1">
            <div>
              <span className="text-[rgba(255,255,255,.4)] mb-2 capitalize">
                {t({ id: "follow" })}
              </span>
              {social.map(({ name, link }, index) => (
                <a
                  key={index}
                  target={"_blank"}
                  href={link}
                  className="hover:text-[rgba(255,255,255,.4)] transition-all text-white"
                >
                  {name}
                </a>
              ))}
            </div>
            <div>
              <span className="text-[rgba(255,255,255,.4)] mb-2 capitalize">
                {t({ id: "contact" })}
              </span>
              {contact.map(({ name, link }, index) => (
                <a
                  key={index}
                  target={"_blank"}
                  href={link}
                  className="hover:text-[rgba(255,255,255,.4)] transition-all text-white"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
