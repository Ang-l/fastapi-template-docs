# 基础状态码

| 常量名 (Constant) | 状态码 (Value) | 英文消息 (Message) | 中文释义 |
| :--- | :--- | :--- | :--- |
| `Code.SUCCESS` | 0 | OK | 操作成功 |
| `Code.ERROR` | 99 | Error | 通用错误 |
| `Code.VALIDATION_ERROR` | 400 | Validation Error | 参数校验错误 |
| `Code.UNAUTHORIZED` | 401 | Unauthorized | 未授权 |
| `Code.FORBIDDEN` | 403 | Forbidden | 禁止访问 |
| `Code.NOT_FOUND` | 404 | Not Found | 资源不存在 |
| `Code.SERVER_ERROR` | 500 | Internal Server Error | 服务器内部错误 |
| `Code.USER_NOT_FOUND` | 50404 | User Not Found | 用户不存在 |
| `Code.USER_OR_PASSWORD_ERROR` | 50500 | User Or Password Error | 用户名或密码错误 |