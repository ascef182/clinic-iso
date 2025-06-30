import { blogPosts } from "../data/blogPosts";
import { doctors } from "../data/doctors";
import { useNavigate } from "react-router-dom";
import { User, MessageCircle, ArrowLeft } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section className="bg-background min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white font-semibold underline underline-offset-4 px-4 py-2 rounded-lg w-fit font-neue-haas"
            // removi hover para texto ficar sempre branco
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-neue-haas mb-2">
            Blog
          </h1>
          <p className="text-lg text-white font-neue-haas">
            Artigos completos sobre saúde, bem-estar e estilo de vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
