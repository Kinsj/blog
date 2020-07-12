(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{363:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hello-rails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-rails"}},[t._v("#")]),t._v(" Hello Rails")]),t._v(" "),a("h2",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),a("p",[a("code",[t._v("rails new morney-rails-1 --database=postgresql --skip-action-mailbox --skip-action-text --skip-sprockets --skip-javascript --skip-turbolinks --skip-system-test --skip-test --api --skip-webpack-install")]),a("br"),t._v("\n解释一下：\n"),a("code",[t._v("--database=postgresql")]),t._v("  数据库指定为 postgresql"),a("br"),t._v(" "),a("code",[t._v("--skip-action-mailbox")]),t._v("  跳过收件箱"),a("br"),t._v(" "),a("code",[t._v("--skip-action-text")]),t._v("  跳过富文本 默认的富文本用不到"),a("br"),t._v(" "),a("code",[t._v("--skip-sprockets")]),t._v("  跳过，不清楚用来干啥"),a("br"),t._v(" "),a("code",[t._v("--skip-javascript")]),t._v("  跳过js，前后端代码分离，rails不负责js"),a("br"),t._v(" "),a("code",[t._v("--skip-turbolinks")]),t._v("  跳过，不清楚用来干啥"),a("br"),t._v(" "),a("code",[t._v("--skip-system-test")]),t._v(" 跳过系统测试"),a("br"),t._v(" "),a("code",[t._v("--skip-test")]),t._v("  跳过测试 我们会自己添加测试，不用系统默认的测试"),a("br"),t._v(" "),a("code",[t._v("--api")]),t._v("   使用api模式 一个轻量的模式"),a("br"),t._v(" "),a("code",[t._v("--skip-webpack-install")]),t._v("  跳过webpack安装，前后分离后端不用负责这些")]),t._v(" "),a("h2",{attrs:{id:"hello-rails-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-rails-2"}},[t._v("#")]),t._v(" Hello rails")]),t._v(" "),a("p",[t._v("创建完成后就可以打开这个项目，这里用的rubymine\n找到 "),a("code",[t._v("routes.rb")]),t._v(" 文件\n这个文件用来添加路由：")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# do ... end 就是函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Rails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("routes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("draw "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("  \n    get "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first#hello'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# get('/hello', {to: 'first#hello'}) 的缩写  ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'first#hello' 代表 在 first 这个 controller 上 的 hello 方法 （controller 是 MVC 的 C）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("于是我们就去 app/controllers 文件夹下添加 "),a("code",[t._v("first_controller.rb")])]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个Controller 必须叫 FirstController 这是约定！ 并且继承自 ApplicationController。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ApplicationController 这个 Controller 是个基础的 controller")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FirstController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ApplicationController")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对应路由里的 first#hello  ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")])]),t._v("    \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# render plain: 'hello'  # 返回一个 hello 字符串  ")]),t._v("\n        render json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回一个json")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# render 'first/hello'  # 返回一个html 'first/hello'是html模板的路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("然后就可以尝试运行了！  命令： "),a("code",[t._v("rails server")])]),t._v(" "),a("h3",{attrs:{id:"数据库启动-及安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库启动-及安装"}},[t._v("#")]),t._v(" 数据库启动 及安装")]),t._v(" "),a("p",[t._v("但是运行还是会出现问题，因为rails会默认使用数据库，但是我们并没有启动一个数据库服务"),a("br"),t._v("\n所以这里需要用 docker 来启动一个数据库服务\n命令：\n"),a("code",[t._v("docker run -v morney-rails-1-data:/var/lib/postgresql/data -p 5001:5432 -e POSTGRES_USER=fang -e POSTGRES_PASSWORD=123456 -d postgres:12.1")]),t._v("\n解释：\n"),a("code",[t._v("-v morney-rails-1-data:/var/lib/postgresql/data")]),t._v(" 冒号前面的部分是本地数据库路径，但是windows用户只支持使用文件名，不支持绝对路径，所以只能这样写。冒号后面的部分就是虚拟机内部的路径"),a("br"),t._v(" "),a("code",[t._v("-p 5001:5432")]),t._v(" 左边是实体端口，右边是虚拟机里的端口"),a("br"),t._v(" "),a("code",[t._v("-e POSTGRES_USER=kin -e POSTGRES_PASSWORD=123456")]),t._v("  -e 是环境变量，用于配置数据库账号密码"),a("br"),t._v(" "),a("code",[t._v("-d")]),t._v(" 代表deamon模式，守护进程模式，也就是一直开着"),a("br"),t._v(" "),a("code",[t._v("postgres:12.2")]),t._v("  安装的镜像版本\n"),a("strong",[t._v("这个命令很慢，配了国内镜像还是好慢，好像配置没有效果")]),t._v(" "),a("strong",[t._v("最后尝试 在profixer里加入vbox的规则，成功代理，速度快了不少")])]),t._v(" "),a("h3",{attrs:{id:"数据库启动后-rails连接数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库启动后-rails连接数据库"}},[t._v("#")]),t._v(" 数据库启动后 rails连接数据库")]),t._v(" "),a("p",[a("code",[t._v("项目/config/database.yml")]),t._v(" 文件配置数据库连接信息\n贴代码：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&default")]),t._v("\n  adapter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgresql\n  encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unicode\n  pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' <%= ENV.fetch("RAILS_MAX_THREADS") '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" 5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 线程池数量")]),t._v("\n  username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fang\n  password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n  host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.99.100  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认为 localhost，但是docker toolbox用户需要填入对应ip")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5001")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("development")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  <<"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*default")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开发环境继承 default")]),t._v("\n  database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" morney_rails_1_development\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  <<"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*default")]),t._v("\n  database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" morney_rails_1_test\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("production")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  <<"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*default")]),t._v("\n  database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" morney_rails_1_production\n  username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" morney_rails_1\n  password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <%= ENV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MORNEY_RAILS_1_DATABASE_PASSWORD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 千万不要把真实密码放在这里，使用环境变量就不会导致密码泄露")]),t._v("\n")])])]),a("h3",{attrs:{id:"创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[t._v("#")]),t._v(" 创建数据库")]),t._v(" "),a("p",[t._v("数据库软件启动后，数据库还是需要创建的，否则还是会报错\n"),a("code",[t._v("rails db:create")]),t._v("  只需要输入这个命令就可以让rails根据配置自动创建数据库")]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("执行结果")]),a("br"),t._v("\nCreated database 'morney_rails_1_development'"),a("br"),t._v("\nCreated database 'morney_rails_1_test'"),a("br"),t._v("\n测试环境和开发环境的数据库会自动创建好，生产环境的话还是需要自己去创建的")])]),t._v(" "),a("p",[t._v("然后你的 Hello Rails 服务就可以跑起来了。"),a("br"),t._v("\n重新运行 "),a("code",[t._v("rails s")]),t._v(" # rails server 的缩写")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("补充命令")]),a("br"),t._v(" "),a("code",[t._v("rails db:drop")]),t._v(" 删除数据库")])]),t._v(" "),a("h3",{attrs:{id:"windows-用户配置热更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-用户配置热更新"}},[t._v("#")]),t._v(" windows 用户配置热更新")]),t._v(" "),a("p",[t._v("文件更新后需要重启 server才会变化，这就很蛋疼了。需要加一个配置：\n"),a("code",[t._v("config/environments/development.rb")]),t._v("文件最下面"),a("br"),t._v("\n取消注释："),a("code",[t._v("config.file_watcher = ActiveSupport::EventedFileUpdateChecker")]),t._v(" "),a("code",[t._v("Gemfile")]),t._v("文件"),a("br"),t._v("\n修改 "),a("code",[t._v("group :development")])]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("group "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":development")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  gem "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'listen'")]),t._v("\n  gem "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wdm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'>= 0.1.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" platforms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":mswin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":mingw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":x64_mingw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":jruby")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wdm全称 windows directory monitor")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("h3",{attrs:{id:"docker-相关命令补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-相关命令补充"}},[t._v("#")]),t._v(" docker 相关命令补充")]),t._v(" "),a("p",[a("code",[t._v("docker-machine create default --virtualbox-no-vtx-check")]),t._v(" 不检查hype-v创建虚default虚拟机"),a("br"),t._v(" "),a("code",[t._v("docker-machine ssh default")]),t._v("  ssh到虚拟机 default"),a("br"),t._v(" "),a("code",[t._v("docker-machine rm default")]),t._v("  删除虚拟机 default"),a("br"),t._v("\n在虚拟机中"),a("code",[t._v("exit")]),t._v(" 可以退回docker命令行")]),t._v(" "),a("p",[a("code",[t._v("sudo sed -i \"s|EXTRA_ARGS='|EXTRA_ARGS='--registry-mirror=https://docker.mirrors.ustc.edu.cn |g\" /var/lib/boot2docker/profile")]),t._v("  toolbox配置国内镜像,其他操作系统可以看这个 "),a("a",{attrs:{href:"http://guide.daocloud.io/dcs/daocloud-9153151.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("加速指南"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("docker ps -a")]),t._v(" 查看运行的容器"),a("br"),t._v(" "),a("code",[t._v("docker kill xxxx")]),t._v(" 关闭id为xxxx的容器（关机）"),a("br"),t._v(" "),a("code",[t._v("docker restart xxxx")]),t._v(" 重启关闭的容器"),a("br"),t._v(" "),a("code",[t._v("docker rm xxxx")]),t._v(" 删除容器，删除后重新创建容器就需要运行前面的 docker run命令"),a("br"),t._v(" "),a("code",[t._v("docker container prune")]),t._v(" 删除无用容器，节省空间"),a("br"),t._v(" "),a("code",[t._v("docker image prune")]),t._v("  删除无用镜像，节省空间")])])}),[],!1,null,null,null);s.default=n.exports}}]);