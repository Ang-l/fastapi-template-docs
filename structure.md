## 项目结构
项目采用了经典的分层架构设计，各目录职责明确：

```text
backend/
├── controllers/            # [控制层] 接口业务逻辑处理
│   ├── __init__.py 
│   └── health.py           # 示例：健康检查接口
│
├── infrastructure/         # [基础设施层] 外部依赖配置
│   ├── __init__.py
│   ├── config.py           # 全局配置文件加载
│   └── database.py         # 数据库连接与会话管理
│
├── libs/                   # [公共组件库] 基础服务与工具类
│   ├── __init__.py
│   ├── security/           # 安全相关组件
│   │   ├── __init__.py
│   │   ├── password.py     # 密码哈希与校验
│   │   ├── token.py        # JWT Token 生成与解析
│   │   └── scheme.py       # API 文档安全方案配置
│   │
│   ├── authenticate.py     # 全局认证服务
│   ├── code.py             # 统一业务状态码定义
│   ├── constants.py        # 全局常量定义
│   ├── decorators.py       # 自定义装饰器
│   ├── exception.py        # 自定义异常类
│   ├── headers.py          # 请求头处理工具
│   ├── loader.py           # 动态加载工具
│   ├── logger.py           # 线程安全的日志封装
│   ├── resource.py         # 资源管理
│   └── response.py         # 统一 API 响应格式封装
│
├── models/                 # [数据模型层] ORM 模型定义
│   ├── __init__.py
│   ├── base.py             # 数据库基类
│   ├── user.py             # 用户表模型
│   └── role.py             # 角色表模型
│
├── urls/                   # [路由层] URL 路由分发配置
│   ├── __init__.py
│   ├── router.py           # 主路由注册
│   └── health.py           # 健康检查路由
│
├── migrations/             # [数据库迁移] Alembic 迁移脚本目录
├── logs/                   # [日志存储] 运行时日志文件输出目录
│
├── .env                    # 本地环境变量配置
├── .env.dev                # 开发环境变量配置
├── .env.prod               # 生产环境变量配置
├── .gitignore              # Git 忽略文件配置
├── alembic.ini             # Alembic 数据库迁移配置文件
├── env.py                  # Alembic 环境配置入口
├── main.py                 # FastAPI 应用主入口
├── run.py                  # 项目启动脚本
└── README.md               # 项目说明文档

```