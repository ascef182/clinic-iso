# ISO - Instituto Seu Olhar | Clínica Médica

![ISO - Instituto Seu Olhar](https://img.shields.io/badge/ISO-Instituto%20Seu%20Olhar-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-blue)
![Vite](https://img.shields.io/badge/Vite-5.0+-blue)

## 📋 Descrição

Site institucional moderno e responsivo para o **ISO - Instituto Seu Olhar**, uma clínica médica especializada em Oftalmologia, Saúde Mental, Obesidade e Estilo de Vida. O projeto oferece uma experiência de usuário excepcional com animações suaves, design elegante e funcionalidades completas para contato.

## 🚀 Tecnologias Utilizadas

- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário para design responsivo
- **Vite** - Build tool rápida e moderna
- **React Router DOM** - Roteamento para aplicações React
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas
- **Lucide React** - Ícones modernos
- **GSAP** - Animações avançadas com ScrollTrigger
- **FormSubmit** - Envio de formulários sem backend

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/ascef182/clinic-tailwind-react.git
   cd clinic-tailwind-react
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse o projeto**
   ```
   http://localhost:8080
   ```

## 🏗️ Estrutura do Projeto

```
clinic-tailwind-react/
├── public/
│   ├── photos/           # Imagens do projeto
│   └── fonts/           # Fontes personalizadas
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── ui/         # Componentes de UI base
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   ├── AboutSection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   ├── SpecialtiesSection.tsx
│   │   └── BlogSection.tsx
│   ├── pages/          # Páginas da aplicação
│   │   ├── Index.tsx
│   │   ├── Sobre.tsx
│   │   ├── Especialidades.tsx
│   │   ├── Equipe.tsx
│   │   └── Contato.tsx
│   ├── data/           # Dados estáticos
│   │   ├── doctors.ts
│   │   └── specialties.ts
│   ├── hooks/          # Hooks customizados
│   ├── lib/            # Utilitários e configurações
│   └── App.tsx         # Componente principal
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎯 Funcionalidades

### ✨ Páginas Principais

- **Home** - Hero section com animações GSAP, especialidades e equipe
- **Sobre** - História, missão e valores da clínica
- **Especialidades** - Detalhes sobre cada área médica
- **Equipe** - Perfil dos profissionais
- **Contato** - Informações de contato e formulário

### 🎨 Design e UX

- **Design Responsivo** - Adaptável a todos os dispositivos
- **Animações GSAP** - ScrollTrigger para entrada suave de elementos
- **Tipografia Personalizada** - Fonte Neue Haas Grotesk
- **Glassmorphism** - Efeitos visuais modernos
- **Hover Effects** - Interações elegantes

### 📝 Formulários

- **Validação Completa** - React Hook Form + Zod
- **Envio de Email** - Integração com FormSubmit
- **LGPD Compliance** - Termos de privacidade
- **Feedback Visual** - Estados de loading e sucesso

### 🗺️ Integrações

- **Google Maps** - Localização da clínica
- **WhatsApp** - Contato direto via WhatsApp
- **FormSubmit** - Envio de formulários sem backend

## 🎬 Animações GSAP

O projeto utiliza GSAP com ScrollTrigger para criar animações suaves:

- **Hero Section** - Texto e card lateral com entrada diferenciada
- **About Section** - Lados esquerdo e direito deslizam de direções opostas
- **WhyChooseUs** - Itens aparecem em cascata de cima para baixo
- **Specialties** - Cards com fade-in ao entrar na viewport

## 🎨 Personalização

### Cores

O projeto utiliza uma paleta de cores personalizada definida no `tailwind.config.js`:

- `custom-black` - Preto principal
- `custom-dark-gray` - Cinza escuro
- `custom-medium-gray` - Cinza médio
- `custom-light-gray` - Cinza claro

### Fontes

- **Neue Haas Grotesk** - Fonte principal do projeto
- Configurada como `font-neue-haas` nas classes Tailwind

## 🚀 Deploy

### Build para produção

```bash
npm run build
# ou
yarn build
```

### Preview do build

```bash
npm run preview
# ou
yarn preview
```

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:

- **Desktop** - Layout completo com grid de 2 colunas
- **Tablet** - Layout adaptado com flexbox
- **Mobile** - Layout em coluna única com navegação otimizada

## 📄 Licença

Este projeto é desenvolvido para o ISO - Instituto Seu Olhar. Todos os direitos reservados.

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---
