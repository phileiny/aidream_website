// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://aidream.com.tw',
  redirects: {
    // MemoBot 已下架，舊連結導向首頁
    '/products/memobot': '/',
    // ContraX 已下架
    '/products/contrax': '/',
    // 產品總覽 2026-10 拿掉（只剩 Migato）
    '/products': '/products/migato/',
    // 英文版 2026-10 暫時下架，舊連結導向對應的中文頁
    '/en': '/',
    '/en/products': '/products/migato/',
    '/en/products/contrax': '/',
    '/en/products/migato': '/products/migato/',
    '/en/works': '/services/video/',
    // 作品頁 2026-10 併進 AI 影片製作頁
    '/works': '/services/video/',
    '/en/about': '/about/',
    '/en/contact': '/contact/',
  },
  i18n: {
    locales: ['zh'],
    defaultLocale: 'zh',
    routing: {
      // 中文維持原網址，不加 /zh/ 前綴
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});