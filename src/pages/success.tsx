/* eslint-disable @next/next/no-img-element */
import { Overpass } from "@next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  const [score, setScore] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    setScore(localStorage.getItem("chosenRating"));
  }, []);

  return (
    <>
      <main
        className={`min-h-screen w-full flex items-center justify-center bg-[#121417] text-white ${overpass.className}`}
      >
        {/* Card */}

        <div className="w-[25rem] h-[25rem] p-8 bg-gradient-to-b shadow-md rounded-3xl from-[#252d37] to-[#121417] flex flex-col items-center gap-6">
          <img
            src="/images/illustration-thank-you.svg"
            alt=""
            className="w-1/3 h-1/3"
            loading="lazy"
          />
          <p className="bg-[#282D39] px-6 py-2 rounded-full text-[#fb7413]">
            You selected {score} out of 5
          </p>
          <h1 className="font-bold text-4xl leading-tight">Thank you!</h1>
          <p className="text-sm text-[#7c8798] text-center leading-tight">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don&apos;t hesitate to get in touch!.
          </p>
        </div>
      </main>
    </>
  );
}
