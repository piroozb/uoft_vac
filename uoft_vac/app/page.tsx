import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="rounded-3xl bg-green-300 w-3xl h-100 p-10 text-blue-500">
        <h1 className="p-2 px-4 bg-yellow-100 h-13 w-2xl rounded-4xl text-3xl">Our Goals:</h1>
        <div className="flex flex-row justify-center gap-16 p-5">
        <p className="p-2 bg-yellow-100 h-10 w-3xs rounded-4xl text-center">Create</p>
        <p className="p-2 bg-yellow-100 h-10 w-3xs rounded-4xl text-center">Share</p>
        <p className="p-2 bg-yellow-100 h-10 w-3xs rounded-4xl text-center">Connect</p>
        </div>
        </div>
      </main>
    </div>
  );
}
