import { blogPosts } from "../data/blogPosts";
import { doctors } from "../data/doctors";
import { useNavigate } from "react-router-dom";
import { User, MessageCircle, ArrowLeft } from "lucide-react";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section className="bg-background min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-custom-black font-semibold underline underline-offset-4 hover:text-white hover:bg-custom-black transition px-4 py-2 rounded-lg w-fit font-neue-haas"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-neue-haas mb-2">
            Blog
          </h1>
          <p className="text-lg text-gray-600 font-neue-haas">
            Artigos completos sobre saúde, bem-estar e estilo de vida
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => {
            const author = doctors.find((d) => d.id === post.authorId);
            return (
              <div
                key={post.id}
                className="blog-card bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-zinc-950 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm font-neue-haas">
                    {post.category}
                  </span>
                  <div className="absolute bottom-0 right-0 bg-zinc-950 text-white text-xs font-semibold px-3 py-2 text-center leading-tight rounded-tl-lg font-neue-haas">
                    <div>{post.date.month}</div>
                    <div>{post.date.day}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-gray-500 text-xs mb-2 font-neue-haas">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{author?.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2 font-neue-haas">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 font-neue-haas">
                    {post.subtitle}
                  </p>

                  <button
                    className="text-slate-900-700 text-sm font-medium group font-neue-haas"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    Leia Mais{" "}
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
