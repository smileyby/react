> 使用 nginx 部署前端项目

> 初始化
```
# 安装 nginx
yum install nginx

# 查看 nginx 安装位置
rpm -ql nginx

# 进入 nginx 配置文件目录
cd /etc/nginx/nginx.conf

# 对应nginx子配置项存放文件夹
cd /etc/nginx/conf.d/ 

# nginx 默认 html 文件存放文件夹
cd /usr/share/nginx/html

# 主配置文件会默认把这个文件夹中所有子配置项都引入
cd /etc/nginx/nginx.conf 

# 如需 nginx 指向root下的文件夹，需要给 nginx 添加访问 root权限如下
# 设置 nginx 访问 root 权限(需要重启nginx才能生效)
usermod -G root nginx
systemctl restart nginx

# 设置开机启动 
systemctl enable nginx

# 启动 nginx
systemctl start nginx

# 查看 nginx 运行情况
ps -A | grep nginx

# 移动文件到文件夹
cat 文件名 ../文件夹名
```

> centos下操作nginx 相关命令

```
systemctl start nginx    # 启动 Nginx
systemctl stop nginx     # 停止 Nginx
systemctl restart nginx  # 重启 Nginx
systemctl reload nginx   # 重新加载 Nginx，用于修改配置后
systemctl enable nginx   # 设置开机启动 Nginx
systemctl disable nginx  # 关闭开机启动 Nginx
systemctl status nginx   # 查看 Nginx 运行状态
```

> 新增子配置指向demo目录
```
server {
  listen 8888; # 监听 8888 端口
	server_name demo; # 服务名

  add_header 'Access-Control-Allow-Origin' $http_origin;   # 全局变量获得当前请求origin，带cookie的请求不支持*
	add_header 'Access-Control-Allow-Credentials' 'true';    # 为 true 可带上 cookie
	add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';  # 允许请求方法
	add_header 'Access-Control-Allow-Headers' $http_access_control_request_headers;  # 允许请求的 header，可以为 *
	add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';

	location / {
		root  /root/workspace/demo/dist; # 设置根目录
		index index.html; # 使用根目录下 index.html 作为启动页
	}
}
```
