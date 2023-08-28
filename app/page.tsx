import Navbar from "@/components/Navbar"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[600px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:md:w-[540px] after:w-[240px]  after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="mx-auto max-w-4xl font-display text-4xl text-center font-bold tracking-normal text-slate-900 dark:text-slate-100 sm:text-7xl">
            Restoring old photos{" "}
            <span className="text-[#3290EE] whitespace-nowrap">using IA</span>
          </h1>
        </div>
      </main>
    </>
  )
}
