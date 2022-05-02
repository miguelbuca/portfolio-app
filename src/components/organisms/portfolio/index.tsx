import { NextPage } from "next";
import { useIntl } from "react-intl";
import { Card } from "../../molecules/card";

export interface Props{
  data: Job[]
}

const Portfolio: NextPage<Props> = ({ data: project }) => {
  const { formatMessage: t } = useIntl();
  return (
    <div
      id="projects"
      className="min-h-[calc(100vh-6rem)] flex-1 mb-[1rem] flex flex-col"
    >
      <div className="flex items-center flex-col justify-center py-10">
        <h1 className="text-[28pt]">{t({ id: "projects" })}</h1>
        <p className="mb-[1rem] text-violet-300">{t({ id: "pressToSee" })}</p>
      </div>
      <div className="flex-1 grid gap-10 lg:grid-cols-3 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pb-8">
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
