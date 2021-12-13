### 记录常用知识

> 作为笔记使用



## 代理 mitmproxy

安装教程： https://www.jianshu.com/p/bfa21e0252b6



https://mitmproxy.org/



https://github.com/mitmproxy/mitmproxy

`brew install mitmproxy`

https://www.jianshu.com/p/bea984d27cd2



## 修改brew的镜像



```bash
# 替换brew.git
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

# 替换homebrew-core.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

# 刷新源
brew update
```



```bash
替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.cloud.tencent.com/homebrew/brew.git

替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-core.git

# 刷新源
brew update
```



1. 启动： `mitmproxy -p 8888`

2. 手机配置代理，在WiFi里面，手机输入IP和端口号

3. 手机安装证书

4. IOS：浏览器输入网址 [mitm.it](http://mitm.it/)  按照步骤下载安装，然后，设置-通用-描述文件-已下载的描述文件-选择mitmproxy，安装；设置-关于本机-证书信任设置-mitmproxy开启

5. ##### Android安装

   * 1)设置-无线局域网-点击wifi名称-配置代理-手动，服务器写入测试工具对应的IP地址，端口亦然，存储
   * 2)chrome或者火狐浏览器访问地址- [mitm.it](http://mitm.it/)，如第一步设置正确，此时可看到证书下载页，点击Android证书
   * 3)允许下载
   * 4)选择证书，安装即可

##### PC安装

* 1)设置-网络-高级-网页代理（HTTP）,网页代理服务器写入对应的IP地址，端口亦然
* 2)网页代理（HTTPS）,安全网页代理服务器写入对应的IP地址，端口亦然
* 3)存储以上配置
* 4)safari或者chrome访问地址-[mitm.it](http://mitm.it/)，选择macOS证书
* 5)下载后双击安装
* 6)打开-钥匙串访问（在启动台内可找到，是一个应用）
* 7)种类-所有项目-右上角搜索-mitmproxy-双击
* 8)信任-使用此证书时-选择-始终信任-关闭，输入密码即可