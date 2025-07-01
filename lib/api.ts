import sha256 from 'crypto-js/sha256';
// export const API_DOMAIN = 'test-api.trtc.io';
// export const webArSignature = async () =>
//   process.env.NODE_ENV === 'development' ? request({ method: 'post', url: '/api/common/signature' }) : fetch('/common/signature',{method:'post'})

const config = {
    appid: '1321485964',
    token: 'de9ddc912579a8a30213e2ed36a91dd8',
}
export const webArSignature = function() {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = sha256(timestamp + config.token + config.appid + timestamp).toString().toUpperCase(); // 使用上面获取到的token和appid合成加密串返回
    return { signature, timestamp: timestamp.toString() };
}