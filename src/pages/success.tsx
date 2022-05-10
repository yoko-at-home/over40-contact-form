/* eslint-disable import/no-default-export */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Success: NextPage = () => {
  const router = useRouter();
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <iframe src="https://embed.lottiefiles.com/animation/83039"></iframe>
      <div className="container mt-20 p-3 text-lg">
        <div className="whitespace-pre-line break-words text-center">
          {router.query.text}
        </div>
      </div>
    </div>
  );
};

export default Success;
