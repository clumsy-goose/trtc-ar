export function setStorage(key: string, value: unknown) {
  const encoded = JSON.stringify(value);
  window.localStorage.setItem(key, encoded);
}

export function getStorage(key: string) {
  const encoded = window.localStorage.getItem(key);
  if (encoded === null) {
    return undefined;
  }
  try {
    return JSON.parse(encoded);
  } catch (e) {
    return undefined;
  }
}

export function removeStorage(key: string) {
  window.localStorage.removeItem(key);
}

// key is SpaceId+'-'+UserId
export function setSessionStorage(key: string, value: any) {
  const encoded = JSON.stringify(value);
  window.sessionStorage.setItem(key, encoded);
}

// key is SpaceId+'-'+UserId
export function getSessionStorage(key: string) {
  const encoded = window.sessionStorage.getItem(key);
  if (encoded === null) {
    return undefined;
  }
  try {
    return JSON.parse(encoded);
  } catch (e) {
    return undefined;
  }
}

export function removeSessionStorage(key: string) {
  window.sessionStorage.removeItem(key);
}

// 获取需要写入cookie的域名
function getCookieDomain() {
  const domainList = ['trtc.io', 'edgeone.ai', 'mps.live', 'timmerse.com', 'cloud.tencent.com'];
  const host = location.hostname;
  for (const domain of domainList) {
    if (host.includes(domain)) {
      return domain;
    }
  }
}

export function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};domain=${getCookieDomain()};path=/`;
}

export function getCookie(cname: string) {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${getCookieDomain()}`;
}
