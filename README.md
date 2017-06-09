# webpack常规配置
## npm init --yes  创建package.json
## npm install --save-dev webpack webpack-dev-server 安装相应包
## npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-stage-2
## 新建src和dist目录，并且新建webpack配置文件webpack.config.js并配置如下
## 在package.json中的scripts中新增一句 "dev" : "webpack-dev-server --hot --inline"
## 新建index.html文件并引入bundle.js <script src="http://localhost:8888/bundle.js"></script>
## 运行npm dev开启服务，即可在浏览器访问http://localhost:8888
## 在src目录下新建main.js并写入需要转换的代码
## 运行index.html即可看到效果
