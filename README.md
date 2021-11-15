> 使用 nginx 部署前端项目

> 初始化
```
# 安装 nginx
yum install nginx

# 查看 nginx 安装位置
rpm -ql nginx

# 进入 nginx 配置文件目录
cd /etc/nginx/nginx.conf

# /etc/nginx/conf.d/ 对应nginx子配置项存放文件夹
# /etc/nginx/nginx.conf 主配置文件会默认把这个文件夹中所有子配置项都引入

# 设置开机启动 
systemctl enable nginx

# 启动 nginx
systemctl start nginx
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
  listen 8888;
	server_name demo;

  add_header 'Access-Control-Allow-Origin' $http_origin;   # 全局变量获得当前请求origin，带cookie的请求不支持*
	add_header 'Access-Control-Allow-Credentials' 'true';    # 为 true 可带上 cookie
	add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';  # 允许请求方法
	add_header 'Access-Control-Allow-Headers' $http_access_control_request_headers;  # 允许请求的 header，可以为 *
	add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';

	location / {
		root  /workspace/demo/dist;
		index index.html;
	}
}
```

> 参考
https://juejin.cn/post/6844904144235413512
