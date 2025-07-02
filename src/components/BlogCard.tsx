import { User, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "../data/blogPosts";
import { doctors } from "../data/doctors";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  post: BlogPost;
  showExcerpt?: boolean;
  showButton?: boolean;
}

export function BlogCard({
  post,
  showExcerpt = true,
  showButton = true,
}: BlogCardProps) {
  const navigate = useNavigate();
  const author = doctors.find((d) => d.id === post.authorId);

  return (
    <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-zinc-900 border border-zinc-700 flex flex-col h-full">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 object-cover"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute top-4 left-4 bg-gradient-to-br from-[#FFD700] via-[#FFC300] to-[#B8860B] shadow-[0_0_10px_rgba(255,215,0,0.5)] text-black text-xs font-medium px-3 py-1 rounded-full font-neue-haas">
          {post.category}
        </span>
        <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#FFD700] via-[#FFC300] to-[#B8860B] shadow-[0_0_10px_rgba(255,215,0,0.5)] text-black text-xs font-semibold px-3 py-2 text-center leading-tight rounded-tl-lg font-neue-haas">
          <div>{post.date.month}</div>
          <div>{post.date.day}</div>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between text-white/60 text-xs mb-2 font-neue-haas">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{author?.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 font-neue-haas">
          {post.title}
        </h3>
        {showExcerpt && (
          <p className="text-sm text-white/80 mb-4 line-clamp-2 font-neue-haas">
            {post.subtitle}
          </p>
        )}
        {showButton && (
          <Button
            variant="ghost"
            className="p-0 h-auto text-[#FFD700] text-sm font-medium group font-neue-haas hover:brightness-110 mt-auto"
            onClick={() => navigate(`/blog/${post.id}`)}
          >
            Leia Mais{" "}
            <span className="ml-1 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Button>
        )}
      </div>
    </div>
  );
}
