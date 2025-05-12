# Landing Page - Dra. Laís Carolina

Landing page moderna e responsiva para a Dra. Laís Carolina, desenvolvida com Next.js, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons

## Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd odontolais
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

```
odontolais/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   └── images/
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## Personalização

1. Substitua as imagens na pasta `public/images/` com suas próprias imagens
2. Atualize os textos e informações de contato nos componentes
3. Ajuste as cores no arquivo `tailwind.config.js` conforme necessário

## Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

Para iniciar a versão de produção:

```bash
npm run start
# ou
yarn start
```

## Licença

Este projeto está sob a licença MIT.

## Contato

Para mais informações, entre em contato com:
- Email: contato@draLaisCarolina.com
- Telefone: (XX) XXXXX-XXXX
- Instagram: @dralaiscarolina 