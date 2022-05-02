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
      <div className="overflow-hidden relative flex md:flex sm:hidden justify-center items-center">
        <UserPhoto
          url={
            "https://media-exp1.licdn.com/dms/image/C4D03AQHFiRX9HkB91g/profile-displayphoto-shrink_800_800/0/1651401259829?e=1657152000&v=beta&t=DaXV_O2x8nSIn_KzyiAWtxC2SpIjx7O6C-GBHGG1ceo"
          }
        />
      </div>
    </div>
  );
};

export default Welcome;
