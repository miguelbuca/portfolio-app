import { NextPage } from 'next';
import { Button } from '../../atoms/button';
import { UserPhoto } from '../../molecules/userPhoto';

interface Props {
  userPhoto: any
}

const Welcome: NextPage<Props> = ({ userPhoto: { url } }) => {
  return (
    <div className="h-[calc(100vh-6rem)] mb-[1rem] grid grid-cols-2">
      <div className="flex items-center">
        <div className="flex flex-col">
          <h1 data-testid="welcome-title" className="text-[48pt]">
            Welcome!
          </h1>
          <h4>
            Over the past{" "}
            <span className="p-[.1rem_.5rem] mx-1 bg-[rgba(255,255,255,.06)]">
              4 years
            </span>
            as a software developer, I have worked with mid-sized companies and
            up-and-coming startups to help them reach their full potential and
            attract new customers.
          </h4>
          <div className="flex flex-row mt-5">
            <Button className="mr-4">Download CV &#8595;</Button>
            <Button variant="secondary">Get in touch &#8594;</Button>
          </div>
        </div>
      </div>
      <div className="relative flex justify-end items-center">
        <div className="w-[60%]">
          <UserPhoto url={url} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
