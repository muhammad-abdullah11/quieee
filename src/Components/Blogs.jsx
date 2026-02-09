import React from "react";
import Blogss from "../assets/blogs.json";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const blog = Blogss;
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-zinc-50 px-2 py-12 md:px-8">
      <button
        onClick={() => window.location.href = "/"}
        className="px-5 py-2.5 mb-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-sm">
        Home
      </button>
      <section className="grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blog?.map((b, i) => (
          <article
            key={i}
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={b.featuredImage.url}
                alt={b.title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <h2 className="line-clamp-2 text-lg font-semibold tracking-tight text-zinc-900">
                {b.title}
              </h2>

              <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600">
                {b.excerpt}
              </p>

              <button
                onClick={() => navigate(`/blog/${b.slug}`)}
                className="rounded flex justify-center items-center py-2 w-24 text-sm transition group-hover:bg-zinc-900 group-hover:text-white"
              >
                Read more
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Blogs;