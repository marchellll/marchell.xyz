import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        🧑🏽‍💻 Hi! I'm Marchell
      </h1>
      <p className="mb-4">
        {`I’m a backend-focused software engineer, designing server-side logic, managing databases, and ensuring smooth performance between front-end and backend systems. I excel in async, remote environments, and love tackling complex problems with clean, scalable solutions.`}
      </p>


      <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Link
          href="/pages/contact"
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          🌈 Connect With Me
        </Link>
      </div>


      <h1 className="mt-8 mb-8 text-2xl font-semibold tracking-tighter">
        📚 My Skills
      </h1>

      <h2 className="mb-8 text-xl font-semibold tracking-tighter">
        🍥 Back End
      </h2>
      <p className="mb-4">
        As a backend developer, I am familiar with the following technologies:
      </p>
      <ul className="mb-8">
        <li>Node.js, Golang, Ruby, Java</li>
        <li>MySQL, PostgreSQL, MongoDB, ElasticSearch, Kafka, Google PubSub, Redis</li>
        <li>Kubernetes, Docker, Google Cloud Platform, AWS</li>
        <li>Grafana, Datadog, New Relic</li>
      </ul>

      <p className="mb-4">
        🐣 Front End
      </p>
      <p className="mb-4">
        As a curious person, I am also familiar with the following technologies:
      </p>
      <ul className="mb-8">
        <li>next.js for frontend related stuff
        </li>
      </ul>



      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      🔭 Experiences
      </h1>
      <ul className="mb-8">
        <li>
          Senior Software Engineer (Backend) at wagely (2022 - now)
          <Link
            href="/pages/20240208_172424_wagely"
          >
            learn more
          </Link>
        </li>
        <li>
          Software Engineer at Bukalapak (2018 - 2022)
          <Link
            href="/pages/20240208_172423_bukalapak"
          >
            learn more
          </Link>
        </li>
        <li>
          Software Engineer at Jenius (2015 - 2018)
          <Link
            href="/pages/20240208_164317_jenius"
          >
            learn more
          </Link>
        </li>
      </ul>


      <h1 className="my-8 text-2xl font-semibold tracking-tighter">
        📚 Articles
      </h1>

      <div className="my-8">
        <BlogPosts />
      </div>





    </section>
  );
}
