import BackButton from "@/app/components/general/BackButton";
import ContainerLayout from "@/app/components/layout/ContainerLayout";
import Image from "next/image";

export default function PostPage() {
  return (
    <ContainerLayout>
      <main className="max-w-2xl mx-auto">
        <BackButton />

        <span className="text-sm text-[#ffde21] font-medium ml-4">
          Technology
        </span>

        <h1 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
          Building a Fullstack Blog with Next.js
        </h1>

        <div className="mt-3 text-sm text-gray-400 flex gap-3">
          <span>September 2026</span>
          <span> | </span>
          <span>5 min read</span>
        </div>

        {/* author */}

        <div className="flex items-center gap-3 mt-6">
          <div className="h-8 w-8 rounded-full relative overflow-hidden">
            <Image src="/avatar.png" alt="author" fill />
          </div>

          <span className="text-sm text-gray-400">By Huzaifa Ameer</span>
        </div>

        <div className="mt-8 rounded-xl overflow-hidden w-full h-60 relative sm:h-100">
          <Image
            src="/blog1.png"
            alt="blog-cover-image"
            className="object-cover"
            fill
          />
        </div>

    <article className="mt-10 text-gray-200 space-y-6">

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eius corrupti tempore quidem voluptatum vitae architecto excepturi commodi consequatur totam.</p>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos consequatur facere voluptate, molestias ad eum unde assumenda reiciendis ut tempora tempore molestiae culpa qui porro accusamus quisquam aliquid ex magni.</p>

    </article>

      </main>
    </ContainerLayout>
  );
}
