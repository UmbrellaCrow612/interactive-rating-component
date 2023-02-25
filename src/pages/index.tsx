import Head from "next/head";
import { Overpass } from "@next/font/google";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  const numbers = [1, 2, 3, 4, 5];
  const [chosenNumber, setChosenNumber] = useState<any>(null);

  const handleSubmit = (chosenNumber: any) => {
    if (chosenNumber === null) {
      alert("Rating is empty please select one before submitting it");
    }
  };

  return (
    <>
      <Head>
        <title>Interactive rating component</title>
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <main
        className={`min-h-screen w-full flex items-center justify-center bg-[#121417] text-white ${overpass.className}`}
      >
        {/* Card */}

        <div className="w-[25rem] h-[25rem] p-8 bg-gradient-to-b shadow-md rounded-3xl from-[#252d37] to-[#121417] flex flex-col items-start gap-5">
          <div className="bg-[#282D39] rounded-full p-4">
            <AiFillStar className="text-[#fb7413]" />
          </div>
          <h1 className="text-3xl font-bold">How did we do?</h1>
          <p className="text-[#7c8798] leading-tight text-base">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve out offering!
          </p>
          <div className="flex items-center w-full justify-between p-2">
            {numbers.map((item) => (
              <button
                className={` ${
                  chosenNumber == item ? "bg-[#fb7413]" : "bg-[#282D39]"
                } transition-all ease-in-out hover:bg-[#fb7413] rounded-full w-[3rem] h-[3rem]`}
                key={item}
                onClick={() => setChosenNumber(item)}
                onDoubleClick={() => setChosenNumber(null)}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className={`w-full py-2 bg-[#fb7413] rounded-3xl hover:bg-white hover:text-[#fb7413] transition-all ease-in-out`}
            onClick={() => handleSubmit(chosenNumber)}
          >
            Submit
          </button>
        </div>
      </main>
    </>
  );
}
