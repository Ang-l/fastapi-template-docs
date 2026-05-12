# 配置
---
```python
class Settings(BaseSettings):
    APP_HOT: str = "127.0.0.1"              # Service start hot
    APP_PORT: int = 8000                    # Service start prot
    APP_TZ: str = "Asia/Shanghai"           # Set default time zone
    APP_LANG: str = "zh-CN"                 # Set default language
    APP_TITLE: str = "My FastAPI Project"
    APP_VERSION: str = "1.0.0"              # Service version
    APP_NAME: str = ""                      # Service Name
    DEBUG: bool = False

    METHOD_NAME_LIST: list = ["get", "post", "put", "delete"]  # Registration request method

    DATABASE_URL: str
    DB_COMMIT_LIST: list = ["post", "put", "delete"] # Can execute requests submitted to the database

    REDIS_HOST: str = "127.0.0.1"
    REDIS_PORT: int = 6379
    REDIS_DB: int = 0
    REDIS_PASSWORD: str = ""
    REDIS_DECODE_RESPONSE: bool = True
    REDIS_SOCKET_TIMEOUT: int = 5
    REDIS_SOCKET_CONNECT_TIMEOUT: int = 5
    REDIS_RETRY_ON_TIMEOUT: bool = True
    REDIS_MAX_CONNECTIONS: int = 100

    JWT_SECRET: str = "your-secret-key"                 # authentication key
    JWT_ALGORITHM: str = "HS256"                        # Authentication encryption method
    JWT_KEY: str = "Bearer"                             # Start prefix
    JWT_EXPIRE_SECONDS: int = 60 * 60 * 24 * 360        # Token validity period
    # Token expiration in seconds
    ACCESS_TOKEN_EXPIRE_SECONDS: int = 1800
    REFRESH_TOKEN_EXPIRE_SECONDS: int = 7 * 24 * 3600

    # Auth framework behavior settings
    AUTH_MULTI_LOGIN: bool = True
    AUTH_MAX_SESSIONS: int = 5
    AUTH_REFRESH_ROTATION: bool = True
    AUTH_REFRESH_REUSE_PROTECTION: bool = True
    AUTH_KICK_OUT_OLD_SESSION: bool = False

    # Token type names
    ACCESS_TOKEN_TYPE: str = "access"
    REFRESH_TOKEN_TYPE: str = "refresh"

    # ===== Redis Key 前缀 / Redis key prefixes =====
    SESSION_PREFIX: str = "auth:session"
    USER_SESSION_SET_PREFIX: str = "auth:user_sessions"

    REFRESH_PREFIX: str = "auth:refresh"
    ACCESS_DENYLIST_PREFIX: str = "auth:denylist:access"

    AUTH_USER_MODEL: Optional[str] = None          # none or models.user.User
    AUTH_IDENTIFIER_FIELD: str = "username"
```