# 从React UI组件库项目研究前端工程化思路

前端工程化意味着，你所有的代码都需要经过
* 开发
* 单元测试
* 持续集成
* 发布 

等步骤。这里分开说：

## 单元测试

单元测试就是在自己写的组件下添加单元测试用例。<br>
这里用的是 React 御用的 jest
下面是jest的配置：
```js
module.exports = {
    verbose: true,
    clearMocks: false,
    reporters: ['default', 'jest-junit'], // 配置分析报表
    
    // 覆盖率相关配置
    collectCoverage: true, // 是否生成测试报表
    collectCoverageFrom: ['lib/**/*.{ts,tsx}', '!**/node_modules/**'],
    coverageDirectory: 'coverage', // 生成的报告存放路径
    coverageReporters: ['text', 'lcov'], // 生成报告的种类： text: 控制台输出， lcov: 业内知名分析报告
    
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: { // 将以下对应后缀的文件默认导出为指定格式（__mocks__目录下的js指定）
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootdir>/test/__mocks__/file-mock.js',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    testMatch: ['<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}'],
    transform: {
      '^.+unit\\.(js|jsx)$': 'babel-jest',
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>test/setupTests.js']
};
```

jest配置还需要添加一些其他的配置文件如 **文件mock**， 如依赖等

在项目根目录下配置 

setupTest 里配置一些依赖项，**setupTests.js**

```js
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({adapter: new Adapter()});
```
\_\_mocks\_\_ 下有以下两个文件：
<br>file-mock.js
<br>`module.exports = 'test-file-stub';`
<br>object-mock.js
<br>`module.exports = {};`


文件mock主要是因为 **jest只认识 js(x) 和 ts(x)** 文件。
所以一些图片啊，css啊这些都需要被mock成一个字符串或 空对象

坑：直接指定空对象失败，后来在网上找到以上方式mock css文件。成功！


## 持续集成

单元测试只是对写的组件做一些测试，这个只能代表你测试的这个单元的质量  
我们需要把整个项目的所有单元测试都跑一边，才能完整得得出测试结果。  
但是可能有些组件没写单元测试，或者有些组件单元测试写得并不完善。这时候就需要引入一个概念叫 “**覆盖率**”  
配置合适的测试会生成一些报表，这些报表就包含了测试覆盖率，会从 语句，函数，分支，行数做一个全面的覆盖率分析  
所以 **覆盖率 几乎就代表了代码质量的高低**。一个测试覆盖率 100%且全部通过的的项目可以说是质量非常高，bug一定比没有测试的质量高

每次手动测试代码非常麻烦，而且没有外人监督，迟早会出现偷懒的情况。于是就引入了 **CI（持续集成）**
这里主要是用了 **CircleCi** 去做持续集成。
在CircleCi 官网用github账号登录，并关联仓库。
在本地项目编写 CircleCi的配置文件： 


*config.yml:*
```yaml
defaults: &defaults
  docker:
    - image: circleci/node:12

version: 2
jobs:
  prepare:
    <<: *defaults
    steps:
      - checkout
      - restore_cache:
          keys:
            - v2-dependencies-{{ checksum "package.json" }}
      - run: yarn install
      - save_cache:
          paths:
            - node_modules
          key: v2-dependencies-{{ checksum "package.json" }}
      - persist_to_workspace:
          root: .
          paths:
            - node_modules
  build:
    <<: *defaults
    steps:
      - checkout
      - attach_workspace:
          at: .
      - run: yarn build
      - persist_to_workspace:
          root: .
          paths:
            - dist
  test:
    <<: *defaults
    steps:
      - checkout
      - attach_workspace:
          at: .
      - run: yarn ci
      - store_test_results:
          path: test-results

workflows:
  test-and-build:
    jobs:
      - prepare
      - test:
          requires:
            - prepare
      - build:
          requires:
            - test
  version: 2
```

配置文件期间报了很多错误，看了yml的语法才解决了这些问题。  
CircleCI会根据 `workflows` 里的 脚本去执行相应的操作，并输出测试结果到网站上，  
每次代码push都会跑一遍你编写的持续集成测试脚本。并把测试结果发送到你的邮箱  
如果这个邮箱是你的领导，或者项目主程。。。~~你的代码质量就有保障了！哈哈~~


## 发布：

发布其实就是一条命令的事，`npm publish`
不过有一些前置条件：
1. 得有npm账号
2. 需要在命令行环境登录npm账号：
    `npm adduser` -> 输入用户名+密码+邮箱
3. 需要指定哪些文件发布到npm中去，在package.json里加入如下代码：**(指定 /dist/目录下的所有文件发布到npm中去。发布的包名和版本就是name 和 version)**
    ```json
    {
      "name": "gulu-kin",
      "version": "0.0.2",
      "files": [
        "/dist/**/*"
      ]
    }
    ```
  
发布出来的样子：  
![发布后的目录结构]( /engineering/1.png "npm publish")

其实就是build出来的东西


## 自动持续集成+发布：

1. 在之前的ci配置文件里增加一个自动发布工作流
    ```yaml
    publish:
        <<: *defaults
        steps:
          - attach_workspace:
              at: .  # attach_workspace 就是进入工作区
          - run: npm config set //registry.npmjs.org/:_authToken $NPM_TOKEN
          - run: npm publish
    ```
    此处：`npm config set //registry.npmjs.org/:_authToken $NPM_TOKEN`  这句主要是告诉circleci用环境变量`NPM_TOKEN`去登录npm
    token 由 **npm官网提供(添加)**， 在circleci里配置


2. 自动发布完成后需要自动升级版本号。npm提供了这样的方法：
   <br>`npm version (patch|minor|major)`
    >版本号：major.minor.patch  
    <16.8.2 -> 16.8.3  API不变，修复了bug，命令：`npm version patch`  
    <16.8.2 -> 16.9.0  API有变化，变化不大，不影响现有代码，命令：`npm version minor`  
    <16.8.2 -> 17.0.0  API变化很大，影响现有代码，命令：`npm version major`  

    有了这个命令，就可以写一个脚本根据参数去发布版本了。
    下面就是最简单的发布脚本：
    ```shell script
     #!/bin/env bash
     npm version $1 && git push origin master
    ```
    调用的时候就是 sh ./deploy.sh patch (最后这个参数可指定 patch minor major)

3. 配置CircleCi只 publish 发布脚本发布出来的分支（使用npm version xxx 命令会自动创建 以 v版本号 为tag的分支）
   publish工作流改为以下配置： **只有deploy后才会跑publish**
   ```yaml
   - publish:
       requires:
         - build
       filters: # 只在以下条件指定的分支tag下面才会跑 publish 工作流
         tags:
           only: /^v[0-9]+(\.[0-9]+)*/
         branches:
           ignore: /.*/  # 忽略所有分支，只看tag
   ```

有了以上3个步骤，我们就可以实现 ：  
普通 push 自动测试  
deploy 脚本发布 自动测试并发布








