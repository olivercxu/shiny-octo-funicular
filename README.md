# Surge modules

## 黄豆短剧 (hdmgdj)

`modules/hdmgdj.sgmodule` — Surge module for the 黄豆短剧 (hdmgdj 系) app. Script: `scripts/hdmgdj.js`.

### Install in Surge

Surge → Modules → Install New Module from URL:

```
https://raw.githubusercontent.com/olivercxu/shiny-octo-funicular/main/modules/hdmgdj.sgmodule
```

or open this link on the device: `surge:///install-module?url=https%3A%2F%2Fraw.githubusercontent.com%2Folivercxu%2Fshiny-octo-funicular%2Fmain%2Fmodules%2Fhdmgdj.sgmodule`

Surge must have **MITM enabled** and its CA certificate installed and trusted. The module appends the app's 43 domains to the MITM hostname list.

### Arguments

Editable in Surge's module settings.

| Argument | Default | Meaning |
| --- | --- | --- |
| `previewFallback` | `true` | Paid episodes play the public preview clip instead of the paywall. `false` keeps the original paywall dialog. |
| `previewFile` | `preview-r10.mp4` | Preview file name (`preview-r10.mp4` ≈ 10.5 s, `preview.mp4` ≈ 6 s). |
| `stripAds` | `true` | Remove splash screen, popups and ad slots. |
| `fakeVip` | `true` | Show VIP status and balance on the account pages (display only). |
| `debug` | `false` | Log to the Surge script log. |

### Limits

Paid episodes are gated on the server (403 on the m3u8, signed CDN segments), so the script cannot unlock full paid episodes. It only changes what the client displays and falls back to the public preview clip.

### Changes from the original script

Based on `7452323/QuantumultX` `lzlukvca.js` v3.1.0 (the script is vendored here so the module does not depend on a third-party URL).

- **Script:** `requestId` / `deviceType` are now taken from the current request's headers, then the response echo, then the cache. The original always overrode them with the cache from the last `drama/play` request, so responses to other endpoints were decrypted with a stale key and silently passed through.
- **Module:** the request rule now matches only `/api/drama/play`, the one request the script needs. It also covers the same 43 domains as the response rule (the original request rule lacked 9).
- **Module:** `argument` now uses `&` separators (a comma would be parsed by Surge as the next rule option), and the Chinese `{{{…}}}` placeholders became declared `#!arguments`.
- **Module:** `max-size=-1` became `max-size=0` (no limit).
