## 项目结构

```
.
├── src
|   ├── components      // 项目中各类组件
|   ├── config          // 项目配置
│   ├── controller      // controller层
│   ├── service         // 业务层
│   ├── utils           // 工具
│   └── index.ts        // 项目入口index.ts
├── ecosystem.config.js // pm2配置
├── nodemon.json        // 监视文件改动
├── package.json
└── tsconfig.json
```

## 使用
- yarn 或者 npm i
- yarn start 或 npm start
- 在浏览器中开打`localhost:3000`

### 打包
- yarn build 或 npm run build

### 生产环境启动
- 生产环境使用 pm2 启动 可以达到负载均衡 执行：yarn pro 或 npm run pro （生产环境端口默认：8080）
