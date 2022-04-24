import { NextPage } from "next";
import { Card } from "../../molecules/card";

const Portfolio: NextPage = () => {
  const project: Project[] = [
    {
      uuid: '854s55d4fs65',
      website: 'teta',
      name: "SNIR, SA.",
      link: "http://snir.co.ao/",
      github: "http://snir.co.ao/",
      preview:
        "https://cdn.dribbble.com/users/501822/screenshots/5312532/media/999b45ba7e293832e32d9352f6750fa4.gif",
      description: "Banking and Insurance",
      figma: "http://snir.co.ao/assets/images/logo1.png",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-[calc(100vh-6rem)] flex-1 mb-[1rem] flex flex-col"
    >
      <div className="flex items-center justify-center py-10">
        <h1 className="text-[28pt]">Projects</h1>
      </div>
      <div className="flex-1 grid gap-10 grid-cols-3 pb-8">
        {project.map((item) => (
          <Card
            variant="Project"
            key={item.name}
            details={{
              project: item,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
