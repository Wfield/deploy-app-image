FROM node:10.16.3

WORKDIR /usr/src/deploy
COPY package.json .
RUN npm install
COPY . .

# 项目的默认命令，如果没有指定，则 ENTRYPOINT 必须被指定
# Dockerfile 中只能有一个 CMD 命令
CMD ["npm", "start"]
