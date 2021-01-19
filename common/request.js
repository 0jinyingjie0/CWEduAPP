import Base64 from "./crypto-js/enc-base64.js";
import hmacSHA256 from "./crypto-js/hmac-sha256.js";



function request(obj) {
	var token = uni.getStorageSync("token");
	var time = new Date().getTime();
	if(uni.getStorageSync("timeH") && obj.url.indexOf("user/login") == -1) {
		if((time - uni.getStorageSync("timeH"))/1000/60 > 20) {
			uni.showModal({
				title:"提示",
				content:"登录身份信息超时，请重新登录",
				showCancel:false,
				success:function(res) {
					if(res.confirm) {
						uni.reLaunch({
							url:"/pages/login/login"
						});
					}
				}
			});
			return;
		}
	}
	uni.setStorageSync("timeH",time);
	var secret = Base64.stringify(hmacSHA256(token + "" + time, "0Q4icRHjJY2BRdTJdJrCFixD6OMhhd01"));
	var url = obj.url; //地址
	var data = obj.data || {};
	var success = obj.success;
	var method = obj.method || "POST";
	var responseType = obj.responseType || "";
	uni.request({
		url: url,
		data: data,
		header: {
			"token": token,
			"time": time,
			"secret": secret
		},
		responseType: responseType,
		method: method,
		success: function(res) {
			success(res);
		},
		fail: function(res) {}
	});
}

function uploadFile(obj) {
	var token = uni.getStorageSync("token");
	var time = new Date().getTime();
	if(uni.getStorageSync("timeH") && obj.url.indexOf("user/login") == -1) {
		if((time - uni.getStorageSync("timeH"))/1000/60 > 20) {
			uni.showModal({
				title:"提示",
				content:"登录身份信息超时，请重新登录",
				showCancel:false,
				success:function(res) {
					if(res.confirm) {
						uni.reLaunch({
							url:"/pages/login/login"
						});
					}
				}
			});
			return;
		}
	}
	uni.setStorageSync("timeH",time);
	var secret = Base64.stringify(hmacSHA256(token + "" + time, "0Q4icRHjJY2BRdTJdJrCFixD6OMhhd01"));
	var url = obj.url; //服务器地址
	var filePath = obj.filePath; //要上传文件资源的路径。
	var formData = obj.formData;
	var success = obj.success;
	var name = obj.name; //文件对应的 key
	var method = obj.method || "POST"; //默认post请求
	uni.uploadFile({
		url: url,
		filePath: filePath,
		name: name,
		formData: formData,
		header: {
			"token": token,
			"time": time.toString(),
			"secret": secret
		},
		method: method,
		success: function(res) {
			success(res);
		},
		fail: function(res) {}
	});
}
export {
	request,
	uploadFile
};