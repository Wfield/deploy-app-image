FROM node:10.16.3

# 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的 works 文件夹下
ADD . /works/
# cd到 works 文件夹下
WORKDIR /works
RUN npm install

# 配置环境变量
ENV HOST 0.0.0.0
ENV PORT 8000

# 容器对外暴露的端口号
EXPOSE 8000

# 项目的默认命令，如果没有指定，则 ENTRYPOINT 必须被指定
# Dockerfile 中只能有一个 CMD 命令
CMD ["npm", "start"]
