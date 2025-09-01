import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-hepta text-4xl md:text-7xl text-center">
          Flaskcon 2025
        </h1>
        <em className="not-italic text-center block text-lg md:text-2xl max-w-[350px] mx-auto">
          Coming Soon!
        </em>
        <Link
          href="https://2024.flaskcon.com.ng/"
          className="bg-black text-white px-5 py-4 rounded-xl inline-block mt-10 w-[60%]"
        >
          See 2024 Recap
        </Link>
      </div>
    </div>
  );
}
