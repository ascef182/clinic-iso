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
import { BlogCard } from "@/components/BlogCard";

export function BlogSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-[#FFD700] font-semibold uppercase tracking-widest mb-2 font-neue-haas">
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
              {blogPosts.slice(0, 6).map((post) => (
                <CarouselItem
                  key={post.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <BlogCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-gradient-to-br from-[#FFD700] via-[#FFC300] to-[#B8860B] shadow-[0_0_10px_rgba(255,215,0,0.5)] text-black hover:brightness-110" />
            <CarouselNext className="right-4 bg-gradient-to-br from-[#FFD700] via-[#FFC300] to-[#B8860B] shadow-[0_0_10px_rgba(255,215,0,0.5)] text-black hover:brightness-110" />
          </Carousel>
        </div>

        {/* Botões */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
          <Link to="/blog">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-black text-black font-neue-haas"
            >
              <span>Ler todos os artigos</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </section>
  );
}
