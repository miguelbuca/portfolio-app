import { NextPage } from "next";
import Link from "next/link";
import { useIntl } from "react-intl";

export interface Props{
  variant?: 'default' | 'iframe'
}

const Header: NextPage<Props> = ({ variant }) => {

  const { formatMessage: t } = useIntl()

  return (
    <>
      <header
        className={`flex flex-row items-center container md:container md:mx-auto h-[5rem] ${
          variant == "iframe" && "hidden"
        }`}
      >
        <div>
          <Link href={"/"}>
            <a className="flex flex-row items-center">
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
              <strong className="mr-1">Miguelbuca</strong>
              <span className="text-gray-200 text-[11pt]">
                {t({ id: "logoText" })}
              </span>
            </a>
          </Link>
        </div>
        <div className="flex lg:flex md:flex sm:hidden flex-1 flex-row items-center justify-end text-sm capitalize">
          <Link href={"#skills"}>
            <a className="text-[rgba(255,255,255,.4)] transition-all hover:text-white px-[.5rem]">
              {t({ id: "skills" })}
            </a>
          </Link>
          <Link href={"#worked"}>
            <a className="text-[rgba(255,255,255,.4)] transition-all hover:text-white px-[.5rem]">
              {t({ id: "work" })}
            </a>
          </Link>
          <Link href={"#projects"}>
            <a className="text-[rgba(255,255,255,.4)] transition-all hover:text-white px-[.5rem]">
              {t({ id: "projects" })}
            </a>
          </Link>
          <Link href={"#about"}>
            <a className="text-[rgba(255,255,255,.4)] transition-all hover:text-white px-[.5rem]">
              {t({ id: "about" })}
            </a>
          </Link>
          <Link href={"https://github.com/miguelbuca"}>
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              className="text-[rgba(255,255,255,.6)] transition-all hover:text-white px-[.5rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
        <div className="hidden lg:hidden md:hidden sm:flex flex-1 flex-row items-center justify-end">
          <svg
            width={30}
            version="1.1"
            className="fill-white"
            viewBox="0 0 56 56"
          >
            <path d="M28,0C12.561,0,0,12.561,0,28s12.561,28,28,28s28-12.561,28-28S43.439,0,28,0z M40,41H16c-1.104,0-2-0.896-2-2s0.896-2,2-2  h24c1.104,0,2,0.896,2,2S41.104,41,40,41z M40,30H16c-1.104,0-2-0.896-2-2s0.896-2,2-2h24c1.104,0,2,0.896,2,2S41.104,30,40,30z   M40,19H16c-1.104,0-2-0.896-2-2s0.896-2,2-2h24c1.104,0,2,0.896,2,2S41.104,19,40,19z" />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
      </header>
      {variant == "iframe" && (
        <header className="fixed right-[1rem] bottom-0 p-[.3rem] bg-[rgba(0,0,0,.5)] rounded-t-md">
          <Link href={"/"}>
            <a className="flex flex-row items-center">
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
            </a>
          </Link>
        </header>
      )}
    </>
  );
};

export default Header;
