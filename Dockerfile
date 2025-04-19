# Estágio de construção
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de configuração
COPY package*.json ./
COPY next.config.js ./
COPY tsconfig.json ./
COPY tailwind.config.js ./
COPY postcss.config.mjs ./

# Instala as dependências
RUN npm ci

# Copia o código fonte
COPY src ./src
COPY public ./public

# Constrói a aplicação
RUN npm run build

# Estágio de produção
FROM node:20-alpine AS runner

WORKDIR /app

# Define como não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia apenas os arquivos necessários do estágio de construção
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Define o usuário não-root
USER nextjs

# Expõe a porta 3000
EXPOSE 3000

# Define variáveis de ambiente
ENV PORT 3000
ENV NODE_ENV production
ENV HOSTNAME "0.0.0.0"

# Comando para iniciar a aplicação
CMD ["node", "server.js"] 