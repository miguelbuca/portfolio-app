import { NextPage } from 'next';
import { Card } from '../../molecules/card';

export interface Props {
  data: Job[]
}

const Worked: NextPage<Props> = ({ data: job }) => {

  return (
    <div
      id="worked"
      className="min-h-[calc(100vh-6rem)] flex-1 mb-[1rem] flex flex-col"
    >
      <div className="flex items-center justify-center py-10">
        <h1 className="text-[28pt]">Who I worked with ?</h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-1 grid-cols-3">
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
