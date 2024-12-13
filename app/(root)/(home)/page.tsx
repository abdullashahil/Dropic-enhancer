// 'use client'
import CardGrid from "@/components/CardGrid"

const Home = () => {


  return (
    <section className="flex size-full flex-col gap-5 text-gray">
      <div className="border bg-orange-500 text-white p-2">
        <p>Note: this website is under development:</p>
        <h1>Completed feature: Text to image</h1>
      </div>

      <div className="h-[90px] w-full rounded-[20px] mt-4 flex flex-col items-center justify-center">
        <h1 className="pt-5 text-3xl md:text-4xl font-bold lg:text-4xl text-center text-theme-1">
          Transform Your Images with AI Magic
        </h1>
        <p className="text-black text-xl font-light poppins mt-3 text-center">
          Use AI-powered tools to enhance, edit, and transform.
        </p>
      </div>

      <CardGrid />
    </section>
  )
}

export default Home