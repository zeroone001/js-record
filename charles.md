主要用途-抓包
支持平台
电脑端
iOS端
Android端
支持协议
HTTP、HTTPS (SMZDM业务已此协议为主)
SOCKS
配置
电脑端配置
安装证书
Charles -> Help -> SSL Proxying -> Install Charles Root Certificate

http://redmine.team.bq.com:1080/attachments/download/30406/3-证书安装菜单.png

授信证书
证书添加成功后，设置为“始终信任”

http://redmine.team.bq.com:1080/attachments/download/30411/5-PC上证书信任设置.png

SSL Proxying Settings
Charles -> Proxy -> SSL Proxying Settings -> 勾选 “Enable SSL Proxying”
然后 Add -> Host: * Port: 443， 保存

http://redmine.team.bq.com:1080/attachments/download/30410/8-ssl.png

Charles 默认端口为 8888， 如果电脑端的 8888 端口已经被其他服务占用，需要在 Charles 中修改 port， 在 Charles -> Proxy -> Proxy Settings -> Proxies -> HTTP Proxy -> Port 可以对其进行修改。
移动端配置
电脑和手机接入同一个局域网
手机中在连接的 wifi 上设置代理，如：
proxy: 172.16.24.100
port: 8888

安装证书，在手机浏览器中输入下面显示的地址
Charles -> Help -> SSL Proxying -> Install Charles Root Certificate Device or Remote Browser 获取下载证书的地址 “chls.pro/ssl”

备注：
10.x系统的ios设备需要在通用--关于本机--证书信任设置中选择始终信任

其他功能
在抓到的 URL 上点击右键，有很多好用的功能，下面是一些比较常用的
Repeat | 对这个 URL 重复进行一次请求。
Repeat Advanced | 可以设置重复请求 n 次，每次间隔 x ms
Compose | 对请求的内容：get/post、url、参数、cookies、user-agent等进行修改
Breakpoints | 对当前 URL 设置断点，可以修改拦截到的请求内容后，在发送到服务器，可以对返回的内容进行修改后在发送到手机端
Export | 将请求内容保存下来，下次再次使用时，可以直接打开进行请求，不需要再使用手机
限制网速
通过限速进行弱网络测试
此限速方式比在路由其中限速准确，稳定。
Charles -> Proxy -> Throttle Settings

修改时注意点:

1: 例如修改："article_mall_domain": "http:\/\/www.tmall.com\/", 中的value，需要复制""中的全部内容，不能忽略转义符。一般从json text中不会有问题。
