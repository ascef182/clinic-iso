export interface BlogPost {
  id: number;
  image: string;
  category: string;
  date: { month: string; day: string };
  authorId: string;
  title: string;
  subtitle: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "./photos/cansaco.jpg",
    category: "SAÚDE MENTAL",
    date: { month: "Jun", day: "10" },
    authorId: "kennedy",
    title: "Cansaço constante e falta de foco: quando se preocupar?",
    subtitle:
      "Quando o cansaço e a falta de foco podem indicar algo além do estresse?",
    content: `Sentir-se cansado(a) ocasionalmente é normal, mas quando o cansaço se torna constante, acompanhado de insônia, desânimo e dificuldade de concentração, é hora de ligar o sinal de alerta. Esses sintomas podem indicar desde sobrecarga emocional até transtornos como ansiedade e depressão. Buscar ajuda médica é fundamental para identificar a causa e iniciar o tratamento adequado. Mudanças no estilo de vida, alimentação equilibrada, prática de exercícios e acompanhamento psicológico podem transformar sua qualidade de vida. Não ignore sinais persistentes: cuidar da saúde mental é tão importante quanto cuidar do corpo.`,
  },
  {
    id: 2,
    image: "./photos/emagrecer.jpg",
    category: "NUTROLOGIA",
    date: { month: "Jun", day: "08" },
    authorId: "maria",
    title: "Como emagrecer com saúde sem dietas restritivas?",
    subtitle: "O caminho sustentável para o emagrecimento saudável.",
    content: `Dietas restritivas podem até trazer resultados rápidos, mas raramente são sustentáveis e podem prejudicar sua saúde. O emagrecimento saudável envolve reeducação alimentar, acompanhamento profissional e mudanças graduais de hábitos. A nutrologia foca no equilíbrio nutricional, respeitando as necessidades individuais. Exercícios físicos, sono de qualidade e saúde mental também são pilares essenciais. Esqueça fórmulas milagrosas: o segredo está na constância e no cuidado integral com o corpo e a mente.`,
  },
  {
    id: 3,
    image: "./photos/palprebra.jpg",
    category: "PLÁSTICA OCULAR",
    date: { month: "Jun", day: "06" },
    authorId: "rafaela",
    title: "Blefaroplastia: função, estética e autoestima",
    subtitle: "A cirurgia das pálpebras vai além da estética.",
    content: `A blefaroplastia é uma cirurgia que remove o excesso de pele e bolsas de gordura das pálpebras, melhorando não só a aparência, mas também a visão em alguns casos. O procedimento é indicado para quem sente peso nas pálpebras, dificuldade para enxergar ou deseja rejuvenescer o olhar. Além dos benefícios funcionais, a autoestima costuma aumentar após a cirurgia. O acompanhamento com um especialista é fundamental para avaliar indicações, expectativas e garantir resultados naturais e seguros.`,
  },
  {
    id: 4,
    image: "./photos/nutrição.jpeg",
    category: "NUTROLOGIA",
    date: { month: "Jun", day: "05" },
    authorId: "maria",
    title: "5 pilares do emagrecimento saudável",
    subtitle:
      "Sono, alimentação, exercícios, saúde mental e equilíbrio hormonal.",
    content: `O emagrecimento saudável depende de múltiplos fatores: sono reparador, alimentação balanceada, prática regular de exercícios, saúde mental em dia e equilíbrio hormonal. Ignorar qualquer um desses pilares pode dificultar o processo. O acompanhamento multidisciplinar é o melhor caminho para resultados duradouros e para o bem-estar geral. Pequenas mudanças diárias fazem grande diferença ao longo do tempo.`,
  },
  {
    id: 5,
    image: "./photos/terapia.jpg",
    category: "SAÚDE INTEGRATIVA",
    date: { month: "Jun", day: "04" },
    authorId: "kennedy",
    title: "Quando corpo e mente pedem ajuda: sinais de alerta",
    subtitle: "Reconheça os sinais de desequilíbrio integrativo.",
    content: `Ansiedade, falta de energia, alterações no apetite e insônia são sinais de que corpo e mente podem estar em desequilíbrio. A saúde integrativa considera o ser humano como um todo, buscando a origem dos sintomas e promovendo o equilíbrio entre físico, mental e emocional. Não hesite em procurar ajuda profissional ao perceber mudanças persistentes. O cuidado preventivo é sempre o melhor caminho.`,
  },
  {
    id: 6,
    image: "./photos/botox.jpeg",
    category: "ESTÉTICA NATURAL",
    date: { month: "Jun", day: "02" },
    authorId: "rafaela",
    title: "Harmonização com botox: como manter a naturalidade",
    subtitle: "Botox pode realçar sua beleza sem perder a identidade.",
    content: `O botox é um dos procedimentos estéticos mais procurados para suavizar linhas de expressão. Quando realizado por um profissional experiente, é possível manter a naturalidade e a identidade facial. O segredo está na avaliação individualizada e na aplicação precisa. O objetivo é realçar a beleza, preservar a expressão e promover autoestima, sempre com segurança e responsabilidade.`,
  },
];
