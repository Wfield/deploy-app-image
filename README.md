# download app install package using nodejs and docker

## 创建 docker 镜像
docker build -t deployapp:1.0 . 

`-t` 表示标记，此镜像的标记为 deployapp:1.0，最后的一个点（.) 代表此目录下的所有文件



## 运行 image 的 container
docker run -d -p 9000:8000 deployapp:1.0

`-d` 表示在后台运行，`-p` 表示通过本机的 9000 端口转到 docker 的 8000 端口，deployapp:1.0 代表要运行的镜像


## 标记
`docker image tag [image name] [image tag value]`

## 上传到 docker hub
`docker push [image tag value]`

## 从 docker hub 下载镜像
`docker pull [image tag value]`