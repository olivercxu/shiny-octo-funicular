/**
 * 财新周刊 App：解锁付费阅读（Quantumult X script-response-body）
 *
 * 逻辑来自 R·E / Functional-Store-Hub CaiXinWeekly.js。
 * 覆盖 ipadcms.caixin.com 文章与 myfree 接口。
 * 仅供学习交流。
 */
const PATH_ARTICLE_API = '//ipadcms.caixin.com/api/article/';
const PATH_ARTICLE_TMP = '//ipadcms.caixin.com/tmp/articles/';
const PATH_MYFREE = '//ipadcms.caixin.com/power/myfree/';
const PATH_MYFREE_V3 = '//ipadcms.caixin.com/power/myfreev3/';

const reqUrl = $request.url;
let body = $response.body;

if (reqUrl.indexOf(PATH_ARTICLE_API) !== -1 || reqUrl.indexOf(PATH_ARTICLE_TMP) !== -1) {
  body = body.replace(/"isfree":0/g, '"isfree":1');
}

if (reqUrl.indexOf(PATH_MYFREE) !== -1) {
  body =
    '{"info":[{"type":2,"subscriptDescription":"通过财新通兑换码白嫖","uid":null,"endtime":1893427200,"magazineid":1000,"starttime":1656604800}],"list":[{"UID":null,"END_DT":1893427200,"subscriptDescription":"通过财新通兑换码白嫖","MAGAZINEID":1000,"START_DT":1656604800,"TYPE":2,"ID":null}]}';
}

if (reqUrl.indexOf(PATH_MYFREE_V3) !== -1) {
  body =
    '{"msg":"success","data":{"flag":true,"list":[{"goodsTypeId":20,"goodsCode":"TAG","permanent":0,"list":[{"endTime":"2030-01-01 00:00:00","startTime":"2022-07-01 00:00:00","status":1}]},{"goodsTypeId":11,"goodsCode":"QZSF","permanent":0,"list":[{"endTime":"2030-01-01 00:00:00","startTime":"2022-07-01 00:00:00","status":1}]}]},"code":0}';
}

$done({ body });