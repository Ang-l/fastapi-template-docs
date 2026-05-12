#  快速开始

本指南将带你快速完成项目的依赖安装、服务启动以及第一个接口的开发全流程。

<!-- --- -->

##  环境准备与安装

确保你已经配置好了 Conda 虚拟环境（如 `ft`）并成功激活。在项目根目录下执行以下命令安装所需依赖：

```bash
pip install -r requ.txt
```

## 启动项目
依赖安装完成后，直接运行根目录下的启动脚本即可开启本地开发服务器

```bash
python run.py
```

启动成功后，终端会显示服务运行的地址（默认为 http://127.0.0.1:8000）。

## 快速创建应用接口
为了让你更好地理解项目的模块化设计，下面将以开发一个标准的 Health（健康检查） 模块为例，演示如何从零创建一个完整的业务接口。

### 1. 创建接口视图 (Controller)
在 controllers/ 目录下新建 health.py 文件，用于编写具体的业务逻辑。

```python
from libs.response import reply, ResponseModel
from libs.resource import ApiResource
from libs.decorators import require_auth, allow_anonymous, response_model


class Health(ApiResource):
    async def get(self):
        """
        健康检查接口
        
        Response body:
            {"code": 0, "message": "OK", "data": null}
        """
        return reply()
```

### 2. 定义路由 (URLs)
路由层负责将 HTTP 请求映射到对应的视图类上。

**第一步**： 在 urls/ 目录下新建 health.py，注册该模块的路由规则。
```python
from fastapi import APIRouter
from controllers.health import Health

# 实例化路由对象
router = APIRouter()

# 将 Health 视图类注册到路由中，'/' 代表该视图的基础路径
Health.register(router, '/')
```

**第二步**： 在 urls/router.py 主路由文件中引入并挂载该模块。通过 prefix 设置统一的前缀，tags 用于在 Swagger 文档中进行分组展示。
```python
from fastapi import APIRouter
from urls import health

# 全局路由实例
router = APIRouter()

# 挂载 health 模块路由，访问路径前缀为 /api/v1/health
router.include_router(health.router, prefix="/health", tags=["health"])
```

### 3.接口测试与验证
服务启动后，你可以通过 curl 命令或浏览器直接发起 GET 请求来验证接口是否正常工作。

**请求示例:**：
```bash
curl -X 'GET' \
  'http://127.0.0.1:8000/api/v1/health' \
  -H 'accept: application/json' \
  -H 'language: zh-CN' \
  -H 'tz: Asia/Shanghai'
```

**预期返回结果:**
```json
{
  "code": 0,
  "message": "OK",
  "data": null
}
```