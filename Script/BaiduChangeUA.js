/*
仅更改手机端百度全站的 User-Agent。
[Script]
BaiduChangeUA = type=http-request,pattern=^https?:\/\/(?!d\.pcs).*(?<!map)\.baidu\.com,script-path=https://raw.githubusercontent.com/iEwha/QuantumultX/master/Script/BaiduChangeUA.js

QX: ^https?:\/\/(?!d\.pcs).*(?<!map)\.baidu\.com url script-request-header https://raw.githubusercontent.com/iEwha/QuantumultX/master/Script/BaiduChangeUA.js
[MITM]
hostname = *.baidu.com
 */

let url = $request.url;
let headers = $request.headers;
if (url.indexOf("baidu.com") !== -1) {
	if (headers["User-Agent"].indexOf("iPhone") !== -1)
		headers["User-Agent"] =
			"Mozilla/5.0 (Linux; Android 10; NOH-AN00 Build/HUAWEINOH-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/76.0.3809.89 Mobile Safari/537.36 T7/12.20.0.0 SP-engine/2.33.0 NABar/1.0";
}
$done({ headers });
