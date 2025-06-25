import { request } from './request';

export const API_DOMAIN = 'test-api.trtc.io';
export const webArSignature = async () =>
  request({ method: 'post', url: process.env.NODE_ENV === 'development' 
      ? `/api/common/signature`
      : `https://${API_DOMAIN}/common/signature` });
