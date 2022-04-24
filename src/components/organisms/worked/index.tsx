import { NextPage } from 'next';
import { Card } from '../../molecules/card';

const Worked: NextPage = () => {

  const job: Job[] = [
    {
      name: "SNIR, SA.",
      country: "Luanda, Angola",
      link: "http://snir.co.ao/",
      title: "Frontend Developer",
      image: "http://snir.co.ao/assets/images/logo1.png",
      description: "Banking and Insurance",
    },
    {
      name: "Genezys",
      country: "Brazil",
      link: "https://genezys.io/",
      title: "Fullstack Developer",
      image: "https://nft.genezys.io/media/svg/new_logo5.png",
      description: "Cryptocurrencies and NFT",
    },
    {
      name: "Uteis & Razoaveis Lda",
      country: "Porto, Portugal",
      link: "https://www.uteiserazoaveis.com",
      title: "Frontend Developer",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQH4oWxQIXR-Vw/company-logo_200_200/0/1529052075238?e=2147483647&v=beta&t=Fh6kE68kgBqNPiKnDp4mqvY1gQOXinjs50KGfr5EHQA",
      description: "IT and finance",
    },
  ];

  return (
    <div
      id="worked"
      className="h-[calc(100vh-6rem)] flex-1 mb-[1rem] flex flex-col"
    >
      <div className="flex items-center justify-center py-10">
        <h1 className="text-[28pt]">Who I worked with ?</h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="grid gap-10 grid-cols-3">
          {job.map((item) => (
            <Card variant="Job" key={item.name} details={{
              job: item
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Worked;
