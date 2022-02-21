FROM node

RUN curl -sL https://unpkg.com/@pnpm/self-installer | node
RUN pnpm install