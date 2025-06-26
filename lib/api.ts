import { request } from './request';

export const API_DOMAIN = 'test-api.trtc.io';
export const webArSignature = async () =>
  process.env.NODE_ENV === 'development' ? request({ method: 'post', url: '/api/common/signature' }) : fetch('https://test-api.trtc.io/api/common/signature',{method:'post'})