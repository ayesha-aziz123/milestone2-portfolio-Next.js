"use client"
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" body-font bg-slate-800 text-white flex flex-wrap">
      <div className="container md:flex-row flex-col mx-auto flex md:text-left px-4 md:px-9 py-20 ">
        <div className="animate1 md:w-[40%] md:text-center  ">
          <Image
            className="img hover:scale-105 duration-300 ease-linear mt-7 cursor-pointer rounded-full object-cover object-center mx-auto sm:w-[22rem] w-[16rem]"
            width={400}
            height={400}
            src={require("../../../public/assets/picture/about.jpg")}
            alt={"hero"}
          />
        </div>


        <div className="animate2 mx-auto  text-center md:text-center md:w-[50%] mt-16 ">
          <h2 className="md:text-4xl text-3xl m-5 ">
            Hi I'm,   
            <span className="text-pink-600 text-3xl md:text-4xl "> Ayesha </span>
          </h2>

          <div className=" border-b-2 border-pink-500  w-[30%] md:w-[40%] m-auto"></div>

          <p className=" py-4 md:px-1 text-left md:text-[1.2rem] text-[14px] mb-6">
           I built this portfolio using Next.js and Tailwind CSS,
            and I'm currently expanding my expertise in Next.js and React. I
            specialize in HTML, CSS, and JavaScript, with growing proficiency in
            TypeScript. I believe in continuous learning and enjoy working on
            projects that not only challenge me but also help enhance my skills
            both technically and creatively.
          </p>
          <button className="btn py-2 px-6 rounded-xl text-white  bg-pink-700 ">
            Hire ME
          </button>
        </div>
      </div>
    </section>
  );
}
