import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        🧑🏽‍💻 About Me
      </h1>
      <p className="mb-4">
        {`I’m a backend-focused software engineer, designing server-side logic, managing databases, and ensuring smooth performance between front-end and backend systems. I excel in async, remote environments, and love tackling complex problems with clean, scalable solutions.`}
      </p>


      <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Link
          href="/about"
          title="Get quote now"
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          🌈 Connect With Me
        </Link>
      </div>
      <h1 className="my-8 text-2xl font-semibold tracking-tighter">
        📚 Articles
      </h1>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
