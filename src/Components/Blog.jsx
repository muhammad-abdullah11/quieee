import React from "react";
import { useParams } from "react-router-dom";
import Blogs from "../assets/blogs.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Blog = () => {
  const { id } = useParams();
  const blog = Blogs.find((b) => b.slug === id);

  if (!blog) return <div className="p-10 text-center">Blog not found</div>;

  return (
    <main className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      <article className="w-full md:w-2/3 bg-white  p-6 space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {blog.title}
          </h1>
          <p className="text-zinc-600 text-sm md:text-base">{blog.excerpt}</p>
          <img
            src={blog.featuredImage.url}
            alt={blog.title}
            className="w-full h-56 md:h-72 object-cover rounded-xl"
          />
        </header>

        <section className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">Introduction</h2>
          <p className="text-zinc-600 leading-relaxed text-justify">
            {blog.content.introduction.text}
          </p>
        </section>

        {blog.content.sections.map((section, i) => (
          <section key={i} className="space-y-6 border-t pt-6">
            <h2
              id={section.heading}
              className="text-xl md:text-2xl font-semibold"
            >
              {section.heading}
            </h2>

            {section.subsections.map((item, j) => (
              <div key={j} className="space-y-3">
                <h3 className="text-lg md:text-xl font-medium">
                  {item.subheading}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{item.content}</p>

                {item.codeSnippets?.length > 0 && (
                  <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow">
                    <div className="flex justify-end bg-slate-800 px-4 py-2 text-xs text-slate-300 font-mono">
                      .{item.codeSnippets[0].language}
                    </div>
                    <SyntaxHighlighter
                      language={item.codeSnippets[0].language}
                      style={oneDark}
                      showLineNumbers
                      customStyle={{
                        margin: 0,
                        padding: "20px",
                        background: "transparent",
                        fontSize: "14px",
                      }}
                      codeTagProps={{ style: { fontFamily: "monospace" } }}
                    >
                      {item.codeSnippets[0].code}
                    </SyntaxHighlighter>
                  </div>
                )}
              </div>
            ))}
          </section>
        ))}

        <section className="space-y-3 border-t pt-6">
          <h2 className="text-xl md:text-2xl font-semibold">Conclusion</h2>
          <p className="text-zinc-600 leading-relaxed text-justify">
            {blog.content.conclusion?.text}
          </p>
        </section>
      </article>

      <aside className="w-full md:w-1/3 space-y-6">
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 space-y-3">
          <h3 className="text-lg font-semibold border-b pb-2">
            Table of Contents
          </h3>

          {blog.content.sections.map((s, i) => (
            <a
              key={i}
              href={`#${s.heading}`}
              className="block text-sm md:text-base text-zinc-700 hover:text-[#4a95b6] hover:translate-x-1 transition-all duration-200 border-l-2 border-transparent hover:border-[#4a95b6] pl-3 py-1"
            >
              {s.heading}
            </a>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h3 className="text-lg font-semibold border-b pb-2">
            About the Author
          </h3>

          <div className="flex items-center gap-4">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-20 h-20 rounded-full object-cover border"
            />
            <div>
              <h4 className="font-medium">{blog.author.name}</h4>
              <p className="text-sm text-zinc-600">{blog.author.bio}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            {Object.entries(blog.author.socialLinks).map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a95b6] hover:underline transition"
              >
                @{value.split("/").pop()}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-3 text-sm">
          <p>
            <span className="font-medium">Published:</span> {blog.publishedDate}
          </p>
          <p>
            <span className="font-medium">Updated:</span> {blog.updatedDate}
          </p>
          <p>
            <span className="font-medium">Read Time:</span> {blog.readTime}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h4 className="font-medium mb-3">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-zinc-100 rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-2 text-sm">
          <p>
            <span className="font-medium">Views:</span> {blog.engagement.views}
          </p>
          <p>
            <span className="font-medium">Likes:</span> {blog.engagement.likes}
          </p>
          <p>
            <span className="font-medium">Shares:</span>{" "}
            {blog.engagement.shares}
          </p>
          <p>
            <span className="font-medium">Comments:</span>{" "}
            {blog.engagement.comments}
          </p>
          <p>
            <span className="font-medium">Bookmarks:</span>{" "}
            {blog.engagement.bookmarks}
          </p>
        </div>
      </aside>
    </main>
  );
};

export default Blog;
