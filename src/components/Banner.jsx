"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  //akhane akta special hook use korte hobe karon ata next js, jar karone link bebohar kora jabena btn handle a navigation korar khettre
  const router = useRouter();

  const handleBtn = () => {
    const password = prompt("Enter Your Password");
    if (password == "1234") {
      console.log(router);
      router.push("/dashboard");
    }
  };
  return (
    <div className="text-center space-y-3 bg-linear-60 to-sky-200 from-sky-300 text-black p-10 rounded">
      <h2 className="text-4xl mt-2">Welcome to Dev-Story</h2>
      <button
        onClick={handleBtn}
        className="px-4 py-2 bg-sky-500 text-white rounded cursor-pointer hover:bg-black duration-200"
      >
        Share Story
      </button>
    </div>
  );
};

export default Banner;
