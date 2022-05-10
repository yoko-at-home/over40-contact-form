import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/contact");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="text-blue-500">Welcome to Over 40 Web Club勉強会✨</div>
      <button
        type="button"
        className="mx-auto mt-10 bg-gradient-to-r from-gray-400 to-gray-500 p-2 font-medium text-gray-200"
        onClick={handleOnClick}
      >
        お問合せ
      </button>
    </div>
  );
};

export default Home;
