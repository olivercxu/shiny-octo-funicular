/**
 * 财新 App：解锁文章阅读与音频鉴权（Quantumult X script-request-header）
 *
 * 基于 R·E / Functional-Store-Hub 的 CaiXin.js，适配 CaixinV5/8.6.0，
 * 按请求区分 iPhone / iPad（deviceType 1 / 2）。
 * 仅供学习交流，勿用于商业用途。
 */
const AUDIO_APPINFO =
  '75SU0e5TW70SSqRtJ/F6dN60qhTR/VmZTj9JQB4m3Uwq7sM2Mqb98OoOmr%2BJGjxMer45axESuqqrtjbo%2Bm5AYRzduI5eFvoYMcmS35ifWwfGXmPy6G3ZfPagiTWEn%2BM%2BPAUiArgEuqyBgwc3OMuvj5jYaliJKDZ6LuUieXHIFRTu/7a7DCFvIxZFQkeQjA4dDHXMWIqoT1Vx7k7vkaRp7rVdzSUSO5SaMvFbYOY1VWBz8n8d4JbNklAPNWS7sjK3umhjWq70j8MbjSCItzxFw88h49NsDs8fH47fALaZvQR63FgsF/Ab0HP46n/5Q0sDF2C9WTk/r6tIh/Rg%2BMTQZVSYimZ6XctG8QciSjRKgNs/xQUwYap6FnT2XT6QNtNzdutTVUUH43crJm51OyLzYC66vdKsBdZQAT5SRD9TLgA41tQIv/ixuxeSREnoZVBoVFTe2PIQ2IdmbE12Hjz8F38ZIgJbXNKzysRQwi7RRhrc9fGcRRcUQYFW0nCxMl/SkT42OtjQklw%3D';

const headers = $request.headers;
const originalUrl = $request.url;
const uaIn = String(headers['User-Agent'] || headers['user-agent'] || '');

const isPad = /deviceType=2\b/.test(originalUrl) || /\biPad\b/i.test(uaIn);
const deviceType = isPad ? '2' : '1';

headers['User-Agent'] = isPad
  ? 'Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CaixinV5/8.6.0 deviceType/2'
  : 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CaixinV5/8.6.0 deviceType/1';

const url = originalUrl
  .replace(/uid=(\d+|)/g, 'uid=8401805')
  .replace(/code=(\w+|)/g, 'code=4DC3A37D00671789D41F17E77E46A89F')
  .replace(/device=(\w+|)/g, 'device=699440d159f8b18216b678d3261c91afa3a8a444')
  .replace(/deviceType=(\d+|)/g, `deviceType=${deviceType}`);

if (originalUrl.indexOf('validateAudioAuth') !== -1) {
  headers.appinfo = AUDIO_APPINFO;
}

$done({ url, headers });