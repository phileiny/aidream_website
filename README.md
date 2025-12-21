# 星智未來官網 Star Intelligence Future

> 用 AI 簡化工作的繁瑣

## 專案概述

星智未來（Star Intelligence Future）官方網站，用於展示公司品牌與產品線。

### 核心理念

讓 AI 處理瑣事，你專注重要的事

### 品牌調性

- 專業但不冰冷
- 科技感但平易近人
- 強調「簡化」「效率」「專注」

## 產品線

| 產品 | 定位 | 目標客群 | 型態 |
|------|------|----------|------|
| ContraX | 經紀公司的合約管家 | 影視/出版/內容經紀公司 | 單機桌面軟體 |
| MemoBot（咩猛） | 你的 AI 行程秘書 | 個人工作者、自由接案者、小團隊 | LINE Bot |

## 技術規格

| 項目 | 規格 |
|------|------|
| 框架 | Astro 或純 HTML/CSS/JS（靜態網站） |
| 樣式 | Tailwind CSS |
| 部署 | GitHub Pages |
| 表單服務 | Formspree |
| 圖示 | Lucide Icons |
| 語言 | 繁體中文為主 |

## 網站結構

```
/
├── index.html                 # 首頁
├── /products/
│   ├── index.html            # 產品列表頁
│   ├── contrax.html          # ContraX 產品頁
│   └── memobot.html          # MemoBot 產品頁
├── /about/
│   └── index.html            # 關於我們
├── /contact/
│   └── index.html            # 聯繫我們
├── /assets/
│   ├── /images/              # 圖片資源
│   └── /css/                 # 樣式檔
├── /js/
│   └── main.js               # 共用 JavaScript
└── 404.html                   # 404 頁面
```

## 視覺主題

宇宙星空風格，以深藍紫色調為主：

- 背景：深空漸層 + 星星閃爍 + 行星浮動
- 主色：星光藍紫 `#6B7FFF`
- 強調色：金色 `#F5A623`（CTA 按鈕）
- 玻璃擬態卡片效果

## 開發階段

### Phase 1（MVP）

- [ ] 首頁
- [ ] 產品列表頁
- [ ] ContraX 產品頁
- [ ] MemoBot 產品頁
- [ ] 聯繫頁

### Phase 2

- [ ] 關於我們頁面
- [ ] 404 頁面
- [ ] SEO 優化

### Phase 3

- [ ] 部落格整合
- [ ] 多語系（英文版）

## 文件

產品說明文件位於 `/docs` 目錄：

- `starfuture-website-spec.md` - 網站架構規劃
- `ContraX_產品說明.md` - ContraX 產品說明
- `MemoBot_產品說明.md` - MemoBot 產品說明
