# 财新 VIP · Quantumult X

财新 App（8.6+）付费文章 / 音频鉴权，以及**财新周刊**独立 App 的付费阅读，适用于 iOS 与 iPadOS。

| 文件 | 作用 |
| --- | --- |
| `quantumultx/caixin.snippet` | QX 远程重写资源（规则 + MITM 主机名） |
| `scripts/caixin.js` | 主 App：`gateway.caixin.com` 鉴权请求改写 |
| `scripts/caixin-weekly.js` | 周刊 App：`ipadcms.caixin.com` 响应改写 |

### 在 Quantumult X 中安装

1. 开启 MITM，安装并信任 QX 证书。
2. **设置 → 重写 → 规则资源 → +**  
   资源路径：

   ```
   https://raw.githubusercontent.com/olivercxu/shiny-octo-funicular/main/quantumultx/caixin.snippet
   ```

3. 打开 **解析**，保存后右滑 **更新**（无 404 即成功）。
4. 确认重写总开关已开，`hostname` 中出现 `gateway.caixin.com`、`ipadcms.caixin.com`。
5. 先登录财新账号，再打开付费内容测试；周刊请用「财新周刊」App 单独测试。

### 替换失效的墨鱼链接

若配置里仍有：

```ini
https://ddgksf2013.top/rewrite/CaiXinVip.conf, tag=财新VIP, ...
```

该地址已失效，请删除并改用上方 `caixin.snippet`，例如：

```ini
https://raw.githubusercontent.com/olivercxu/shiny-octo-funicular/main/quantumultx/caixin.snippet, tag=财新VIP@Oliver, update-interval=86400, opt-parser=true, enabled=true
```

同时可删除已指向本仓库旧 `hdmgdj.snippet` 的订阅行（本仓库已不再包含黄豆短剧规则）。

### 说明

- 主 App 解锁依赖共享鉴权参数；服务端策略变更可能导致失效，需更新 `scripts/caixin.js` 中的版本号或参数。
- 脚本仅供学习交流，请支持正版订阅。