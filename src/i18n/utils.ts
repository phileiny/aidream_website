export type Lang = 'zh' | 'en';

export const defaultLang: Lang = 'zh';

export function getLang(currentLocale: string | undefined): Lang {
  return currentLocale === 'en' ? 'en' : defaultLang;
}

/** 將中文站路徑（如 /products）轉成指定語系的路徑 */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return path === '/' ? '/en/' : `/en${path}`;
}

/** 取得目前頁面在另一語系的對應路徑 */
export function getAlternatePath(pathname: string, targetLang: Lang): string {
  const basePath = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return localizePath(basePath, targetLang);
}

export const lineStickerUrl = {
  zh: 'https://store.line.me/stickershop/product/33243782/zh-Hant',
  en: 'https://store.line.me/stickershop/product/33243782/en',
};
