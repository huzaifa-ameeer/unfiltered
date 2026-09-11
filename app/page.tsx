import BlogSection from "./components/home/BlogSection";
import SearchBar from "./components/home/SearchBar";
import ContainerLayout from "./components/layout/ContainerLayout";

export default function Home() {
  return (
    <ContainerLayout>
      <div className="space-y-10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-yellow-400/10 blur-[120px] rounded-full z-10 pointer-events-none" />
        <h1 className="text-3xl lg:text-5xl xl:text-6xl tracking-wide leading-tight text-center">
          <span className="font-bold">
            Welcome to really <br />
            <span className="relative inline-block">
              <span className="absolute -inset-x-1.5 top-1/2 h-[70%] -translate-y-1/2 -rotate-2 bg-orange-400/90"></span>
              <span className="relative z-10">unfiltered</span>
            </span>{" "}
            blogs
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-center mx-auto">
          Dive into real insights of what happening in
          <br /> pakistan and all over the world
        </p>
        <SearchBar />
        <BlogSection />
      </div>
    </ContainerLayout>
  );
}
