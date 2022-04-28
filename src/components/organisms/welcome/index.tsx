import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useIntl } from "react-intl";
import { Button } from "../../atoms/button";
import { UserPhoto } from "../../molecules/userPhoto";

const Welcome: NextPage = () => {
  const { formatMessage: t } = useIntl();

  return (
    <div className="h-[calc(100vh-6rem)] overflow-hidden mb-[4rem] grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
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
            <Link href={"mailto:miguelpedobuca@gmail.com"}>
              <a>
                <Button variant="secondary">
                  {t({ id: "getInTouch" })} &#8594;
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-radial-gradient overflow-hidden h-[90%] relative flex md:flex sm:hidden justify-end items-center">
        <Image
          alt="dev-Image"
          height={800}
          width={550}
          style={{
            marginTop: '150px'
          }}
          src={
            "https://images.prismic.io/miguelbuca-portfolio/c486e0cb-1820-4bdc-a6df-1dfa19abb604_photo1651043361%281%29.png?auto=compress,format"
          }
          className="z-[-1]"
        />
        {/*<div className="w-full bg-contain rounded-full bg-no-repeat bg-[url(https://images.prismic.io/miguelbuca-portfolio/ab3d6808-37dc-4039-8e61-bedb74c16069_photo1651043361.png?auto=compress,format)]">
          <UserPhoto
            url={
              "https://images.prismic.io/miguelbuca-portfolio/ab3d6808-37dc-4039-8e61-bedb74c16069_photo1651043361.png?auto=compress,format"
            }
          />
          </div>*/}
      </div>
    </div>
  );
};

export default Welcome;
