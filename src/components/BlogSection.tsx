
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

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      category: "MEDICAL",
      date: { month: "May", day: "02" },
      author: "Admin",
      title: "Medical Of This Working Health Blog",
      excerpt: "Medical standard chunk ofl nibh velit auctor aliquet sollic tudin.",
      comments: 5,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
      category: "MEDICAL",
      date: { month: "May", day: "05" },
      author: "Admin",
      title: "There Is Only One Thing That Is Hospital.",
      excerpt: "Medical standard chunk ofl nibh velit auctor aliquet sollic tudin.",
      comments: 8
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
      category: "MEDICAL",
      date: { month: "May", day: "08" },
      author: "Admin",
      title: "This Working World and Infection Prevention.",
      excerpt: "Medical standard chunk ofl nibh velit auctor aliquet sollic tudin.",
      comments: 3
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e",
      category: "MEDICAL",
      date: { month: "May", day: "12" },
      author: "Admin",
      title: "Advanced Medical Technology Solutions",
      excerpt: "Medical standard chunk ofl nibh velit auctor aliquet sollic tudin.",
      comments: 6
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063",
      category: "MEDICAL",
      date: { month: "May", day: "15" },
      author: "Admin",
      title: "Healthcare Innovation and Patient Care",
      excerpt: "Medical standard chunk ofl nibh velit auctor aliquet sollic tudin.",
      comments: 4
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34",
      category: "MEDICAL",
      date: { month: "May", day: "18" },
      author: "Admin",
      title: "Future of Medical Research and Development",
      excerpt: "Medical standard chunk ofl nibh velit auctor aliquet sollic tudin.",
      comments: 7
    }
  ];

   return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-amber-500 font-semibold uppercase tracking-widest mb-2">
            Our Largest Blog
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Latest Posts & Articles
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {blogPosts.map((post) => (
                <CarouselItem
                  key={post.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 bg-amber-100 text-amber-600 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                        {post.category}
                      </span>
                      <div className="absolute bottom-0 right-0 bg-slate-900 text-white text-xs font-semibold px-3 py-2 text-center leading-tight rounded-tl-lg">
                        <div>{post.date.month}</div>
                        <div>{post.date.day}</div>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between text-gray-500 text-xs mb-2">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments} comments</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-amber-600 hover:text-amber-700 text-sm font-medium group"
                      >
                        Read More{" "}
                        <span className="ml-1 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
