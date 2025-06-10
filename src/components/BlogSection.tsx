
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
    image: "https://images.unsplash.com/photo-1606813909355-387c3c2c3c7e",
    category: "SAÚDE MENTAL",
    date: { month: "Jun", day: "10" },
    author: "Dr. Kennedy Pinheiro",
    title: "Cansaço constante e falta de foco: quando se preocupar?",
    excerpt:
      "Você sente que vive cansado(a), com insônia e desânimo? Descubra quando isso pode ser mais que estresse comum.",
    comments: 12,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1620799140404-9669cf79c706",
    category: "NUTROLOGIA",
    date: { month: "Jun", day: "08" },
    author: "Dra. Maria Fernanda",
    title: "Como emagrecer com saúde sem dietas restritivas?",
    excerpt:
      "Esqueça as fórmulas milagrosas: entenda como a nutrologia e o estilo de vida saudável ajudam no emagrecimento real.",
    comments: 9,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1615807710184-06a15f8a7e17",
    category: "PLÁSTICA OCULAR",
    date: { month: "Jun", day: "06" },
    author: "Dra. Rafaela Malagoli",
    title: "Blefaroplastia: função, estética e autoestima",
    excerpt:
      "A cirurgia das pálpebras pode melhorar sua visão e seu bem-estar. Saiba quando ela é indicada e como funciona.",
    comments: 6,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1588776814546-ec7e5c6ca9ba",
    category: "NUTROLOGIA",
    date: { month: "Jun", day: "05" },
    author: "Dra. Maria Fernanda",
    title: "5 pilares do emagrecimento saudável",
    excerpt:
      "Sono, alimentação, exercícios, saúde mental e equilíbrio hormonal: veja como esses fatores trabalham juntos.",
    comments: 7,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1613553507747-27f3dc8d3087",
    category: "SAÚDE INTEGRATIVA",
    date: { month: "Jun", day: "04" },
    author: "Dr. Kennedy Pinheiro",
    title: "Quando corpo e mente pedem ajuda: sinais de alerta",
    excerpt:
      "Ansiedade, falta de energia e alterações no apetite podem ser sinais de desequilíbrio integrativo. Saiba como agir.",
    comments: 4,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1607082349410-b6b6fa3f1f43",
    category: "ESTÉTICA NATURAL",
    date: { month: "Jun", day: "02" },
    author: "Dra. Rafaela Malagoli",
    title: "Harmonização com botox: como manter a naturalidade",
    excerpt:
      "O botox pode suavizar expressões sem tirar sua identidade. Descubra como um olhar técnico faz toda a diferença.",
    comments: 10,
  },
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
