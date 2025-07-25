import sha256 from 'crypto-js/sha256';

export const envConfig = {
  appId: process.env.NEXT_PUBLIC_APPID,
  token: process.env.NEXT_PUBLIC_LICENSE_TOKEN,
  licenseKey: process.env.NEXT_PUBLIC_LICENSE_KEY,
};
console.log('🚀 ~ envConfig:', envConfig);
console.log('🚀 ~ process.env.APPID:', process.env.NEXT_PUBLIC_APPID);
console.log('🚀 ~ process.env.NODE_ENV:', process.env.NODE_ENV);

const authFunc = async () => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = sha256(timestamp + (envConfig.token || '') + (envConfig.appId || '') + timestamp)
    .toString()
    .toUpperCase();
  return { signature, timestamp: timestamp.toString() };
};

export const authConfig = {
  appId: envConfig.appId,
  licenseKey: envConfig.licenseKey,
  authFunc,
};
