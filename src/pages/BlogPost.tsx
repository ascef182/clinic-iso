import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { doctors } from "../data/doctors";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.id === parseInt(id || "0"));
  const author = post ? doctors.find((d) => d.id === post.authorId) : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4 font-neue-haas">
            Artigo não encontrado
          </h1>
          <button
            onClick={() => navigate("/blog")}
            className="text-custom-black font-semibold underline underline-offset-4 hover:text-white hover:bg-custom-black transition px-4 py-2 rounded-lg font-neue-haas"
          >
            Voltar ao Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Banner Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950 bg-opacity-40"></div>
        <div className="absolute top-6 left-6">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors font-neue-haas"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar ao Blog
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 font-neue-haas">
            <span className="bg-zinc-950 text-white px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {post.date.month} {post.date.day}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight font-neue-haas">
            {post.title}
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-700 mb-6 font-neue-haas">
            {post.subtitle}
          </h2>

          {/* Author Info */}
          {author && (
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl">
              <img
                src={author.photo}
                alt={author.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 font-neue-haas">
                  {author.name}
                </h3>
                <p className="text-gray-600 font-neue-haas">
                  {author.specialty}
                </p>
                <p className="text-sm text-gray-500 font-neue-haas">
                  CRM: {author.crm}
                </p>
              </div>
            </div>
          )}
        </header>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <div className="text-lg leading-relaxed text-gray-800 font-neue-haas whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-custom-black font-semibold underline underline-offset-4 hover:text-white hover:bg-custom-black transition px-4 py-2 rounded-lg font-neue-haas"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Blog
            </button>
            <div className="text-sm text-gray-500 font-neue-haas">
              Publicado em {post.date.month} {post.date.day}
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
