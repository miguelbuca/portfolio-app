import { NextPage } from "next";
import Link from "next/link";
import { useIntl } from "react-intl";
import { Button } from "../../atoms/button";
import { UserPhoto } from "../../molecules/userPhoto";

const Welcome: NextPage = () => {
  const { formatMessage: t } = useIntl();

  return (
    <div className="min-h-[calc(100vh-6rem)] mb-[1rem] grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      <div className="flex items-center">
        <div className="flex flex-col">
          <h1 data-testid="welcome-title" className="text-[48pt]">
            {t({ id: "welcome" })}
          </h1>
          <h4>
            {t({ id: "OverThePastResume" })}
            <span className="p-[.1rem_.5rem] mx-1 bg-[rgba(255,255,255,.06)]">
              4 {t({ id: "year" })}
            </span>
            {t({ id: "devResume" })}
          </h4>
          <div className="flex flex-row mt-5">
            <Link href={"/"}>
              <a>
                <Button className="mr-4">{t({ id: "downloadCV" })}</Button>
              </a>
            </Link>
            <Link href={'mailto:miguelpedobuca@gmail.com'}>
              <a>
                <Button variant="secondary">
                  {t({ id: "getInTouch" })} &#8594;
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex md:flex sm:hidden justify-end items-center">
        <div className="w-[60%]">
          <UserPhoto
            url={
              "https://images.prismic.io/miguelbuca-portfolio/c52fb187-f199-4a63-aa5f-ae3c12576c11_photo1650620976.jpeg?auto=compress,format"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
