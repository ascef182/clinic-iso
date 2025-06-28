import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { doctors } from "../data/doctors";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function BlogSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-amber-500 font-semibold uppercase tracking-widest mb-2 font-neue-haas">
            Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-neue-haas">
            Posts & Artigos
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {blogPosts.map((post) => {
                const author = doctors.find((d) => d.id === post.authorId);
                return (
                  <CarouselItem
                    key={post.id}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-zinc-900 border-zinc-700">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-56 object-cover"
                          loading="lazy"
                        />
                        <span className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-medium px-3 py-1 rounded-full shadow-sm font-neue-haas">
                          {post.category}
                        </span>
                        <div className="absolute bottom-0 right-0 bg-amber-500 text-black text-xs font-semibold px-3 py-2 text-center leading-tight rounded-tl-lg font-neue-haas">
                          <div>{post.date.month}</div>
                          <div>{post.date.day}</div>
                        </div>
                      </div>
                      <CardContent className="p-5">
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
                        <p className="text-sm text-white/80 mb-4 line-clamp-2 font-neue-haas">
                          {post.subtitle}
                        </p>

                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-amber-500 text-sm font-medium group font-neue-haas hover:text-amber-400"
                          onClick={() => navigate(`/blog/${post.id}`)}
                        >
                          Leia Mais{" "}
                          <span className="ml-1 group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-amber-500 text-black hover:bg-amber-400" />
            <CarouselNext className="right-4 bg-amber-500 text-black hover:bg-amber-400" />
          </Carousel>
        </div>

        {/* Botões */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
          <Link to="/blog">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-black text-white font-neue-haas"
            >
              <span>Ler todos os artigos</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </section>
  );
}
