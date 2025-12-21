# 星智未來官網架構規劃

## 專案概述

- **公司名稱**：星智未來 AI Dream 
- **Slogan**：用 AI 簡化工作的繁瑣
- **核心理念**：讓 AI 處理瑣事，你專注重要的事
- **定位策略**：雙軌並行 — 公司品牌保持彈性，產品各自針對目標客群

### 產品線

| 產品 | 定位 | 目標客群 | 型態 |
|------|------|----------|------|
| ContraX | 中小企業的合約管家 | 中小企業 | 單機桌面軟體 |
| MemoBot（咩猛） | 你的 AI 行程秘書 | 個人工作者、自由接案者、小團隊 | LINE Bot |

### 品牌調性

- 專業但不冰冷
- 科技感但平易近人
- 強調「簡化」「效率」「專注」

---

## 技術規格

| 項目 | 規格 |
|------|------|
| 框架 | Astro |
| 樣式 | Tailwind CSS |
| 部署 | GitHub Pages |
| 網域 | aidream.com.tw |
| 表單服務 | Formspree（免費方案） |
| 圖示 | Lucide Icons |
| 語言 | 繁體中文為主，預留英文擴充 |
| 設計參考 | Cal.com 官網風格 |
| 主題模式 | Light（預設）/ Dark（星空）雙模式 |

---

## 網站結構

```
/
├── index.html                 # 首頁
├── /products/                 # 產品總覽
│   ├── index.html            # 產品列表頁
│   ├── contrax.html          # ContraX 產品頁
│   └── memobot.html          # MemoBot（咩猛）產品頁
├── /about/                    
│   └── index.html            # 關於我們
├── /contact/
│   └── index.html            # 聯繫我們
├── /assets/
│   ├── /images/              # 圖片資源
│   │   ├── /products/        # 產品截圖
│   │   └── /icons/           # 圖示
│   └── /css/                 # 樣式檔
├── /js/
│   └── main.js               # 共用 JavaScript
└── 404.html                   # 404 頁面
```

---

## 頁面規劃

### 1. 首頁 (`index.html`)

#### 區塊結構

```
[Header] 導覽列
    - Logo（星智未來）
    - 導覽連結：產品、關於我們、聯繫
    - CTA 按鈕：立即諮詢
    - 深色透明背景，滾動後加深

[Hero Section] 宇宙星空主題
    - 背景：深空漸層 + 星星閃爍 + 行星浮動
    - 主標題：用 AI 簡化工作的繁瑣
    - 副標題：讓 AI 處理瑣事，你專注重要的事
    - 說明文字：我們打造實用的 AI 工具，為中小企業與個人工作者解決日常管理難題
    - CTA：探索產品（主要）/ 聯繫我們（次要）

[Pain Points Section] 痛點區塊
    - 標題：工作中的繁瑣，消耗你的專注力
    - 兩類痛點並列：
      【中小企業】
        1. 合約散落各處，到期日漏追蹤
        2. 收款排程靠記憶，發票開立常遺漏
        3. 紙本作業效率低，查找耗時
      【個人工作者】
        1. 行程分散多平台，難以統整
        2. 想快速記事，還要打開 App 慢慢填
        3. 重要約會容易忘，缺少主動提醒

[Solution Section] 解決方案
    - 標題：讓 AI 幫你處理
    - 說明：針對不同需求，我們打造專屬工具
    - 三個核心價值：
        1. 專注本業 — 瑣事交給系統
        2. 簡單上手 — 不需要學習成本
        3. 可靠穩定 — 該提醒的不會漏

[Products Section] 產品展示
    - 標題：我們的產品
    - 產品卡片（動態擴展設計）
        - 圖示/截圖
        - 產品名稱
        - 一句話描述
        - 了解更多連結

[CTA Section] 行動呼籲
    - 標題：準備好提升團隊戰力了嗎？
    - 按鈕：預約免費諮詢

[Footer]
    - 公司資訊
    - 快速連結
    - 社群連結（如有）
    - 版權聲明
```

---

### 2. 產品列表頁 (`/products/index.html`)

```
[Header]

[Hero]
    - 標題：我們的產品
    - 說明：為微型團隊打造的 AI 工具套件

[Product Grid] 產品網格（可擴展）
    - 每個產品卡片包含：
        - 產品圖示/縮圖
        - 產品名稱
        - 簡短描述（50字內）
        - 標籤（如：合約管理、AI 助理）
        - 連結到產品詳細頁

[Footer]
```

#### 產品資料結構（方便擴展）

```json
{
  "products": [
    {
      "id": "contrax",
      "name": "ContraX",
      "tagline": "中小企業的合約管家",
      "description": "專為中小企業設計的合約管理系統，從建立、追蹤、收款到歸檔，一站式管理合約生命週期。",
      "icon": "file-contract",
      "tags": ["合約管理", "中小企業", "桌面軟體"],
      "targetAudience": "中小企業",
      "type": "單機桌面軟體",
      "platform": ["macOS", "Windows"],
      "features": [
        "合約編號自動產生",
        "七階段進度追蹤",
        "收款與發票提醒",
        "Google Calendar 整合",
        "合約文件調閱",
        "多條件快速查詢"
      ],
      "highlights": [
        { "icon": "shield", "text": "單機運作，資料安全" },
        { "icon": "bell", "text": "主動提醒，不漏款項" },
        { "icon": "calendar", "text": "Google 日曆同步" }
      ],
      "status": "active"
    },
    {
      "id": "memobot",
      "name": "MemoBot",
      "nickname": "咩猛",
      "tagline": "你的 AI 行程秘書",
      "description": "LINE Bot 智能行程助理，用自然語言對話管理行程。像和朋友聊天一樣，輕鬆掌控工作與生活。",
      "icon": "message-circle",
      "tags": ["行程管理", "LINE Bot", "AI 助理"],
      "targetAudience": "個人工作者、自由接案者、小團隊",
      "type": "LINE Bot",
      "platform": ["LINE"],
      "features": [
        "自然語言建立行程",
        "Google Calendar 雙向同步",
        "智能時間識別",
        "時間空檔查詢",
        "智能衝突檢測",
        "Google Meet 整合"
      ],
      "highlights": [
        { "icon": "message-circle", "text": "用說的就能管理" },
        { "icon": "sync", "text": "Google 日曆同步" },
        { "icon": "clock", "text": "智能衝突檢測" }
      ],
      "pricing": "免費",
      "status": "active"
    }
  ]
}
```

---

### 3. 產品詳細頁模板 (`/products/[product].html`)

```
[Header]

[Product Hero]
    - 產品名稱（+ 暱稱，如 MemoBot 咩猛）
    - Tagline（一句話價值主張）
    - 產品類型標籤（LINE Bot / 桌面軟體）
    - 主要 CTA：
        - ContraX：下載試用 / 聯繫我們
        - MemoBot：加入好友 / 了解方案
    - 產品主視覺/截圖

[Problem Section]
    - 這個產品解決什麼問題？
    - 針對目標客群的具體痛點

[Features Section]
    - 核心功能列表（4-6 個）
    - 每個功能：圖示 + 標題 + 說明
    - ContraX 強調：自動編號、進度追蹤、收款提醒、合約調閱
    - MemoBot 強調：自然語言、雙向同步、衝突檢測、空檔查詢

[How It Works] 使用流程
    - ContraX：新增合約 → 追蹤進度 → 收款提醒 → 完成歸檔
    - MemoBot：加入好友 → 授權 Google → 開始對話

[Use Cases] 適用情境
    - ContraX：中小企業日常、收款管理、合約查詢
    - MemoBot：行程安排、會議管理、時間空檔查詢

[Pricing] 定價（如適用）
    - ContraX：聯繫我們取得報價（或試用下載）
    - MemoBot：免費使用

[Tech Specs] 技術規格（選配）
    - 支援平台
    - 系統需求
    - 資料安全說明

[CTA Section]
    - ContraX：下載試用 / 預約 Demo
    - MemoBot：立即加入 LINE 好友

[Footer]
```

---

### 3a. ContraX 產品頁內容 (`/products/contrax.html`)

```
[Hero]
    標題：ContraX 合約管理系統
    Tagline：中小企業的合約管家
    說明：專為中小企業設計，一站式管理合約生命週期
    CTA：下載試用（macOS / Windows）

[痛點]
    - 合約散落 Excel、資料夾、Email，找不到
    - 收款到期日靠記憶，常常漏追
    - 發票開立時程沒系統提醒

[功能亮點]
    1. 自動編號 — 三段式編碼，永不重複
    2. 進度追蹤 — 七階段狀態，清楚掌握每份合約
    3. 收款提醒 — 系統啟動自動檢查，Google 日曆同步
    4. 合約調閱 — 上傳原始檔，隨時預覽下載
    5. 快速查詢 — 多條件組合，秒找目標合約
    6. 資料匯出 — Excel 報表，便於分析存檔

[使用流程]
    新增合約 → 設定收款排程 → 追蹤進度 → 收款確認 → 完成歸檔

[適用對象]
    - 中小企業行政人員
    - 合約管理專員
    - 財務收款人員

[技術規格]
    - 支援：macOS 11+、Windows 10+ (64-bit)
    - 單機運作，資料存本機，安全可靠
    - 選配 Google Calendar 同步（需網路）

[CTA]
    下載試用 / 聯繫我們
```

---

### 3b. MemoBot 產品頁內容 (`/products/memobot.html`)

```
[Hero]
    標題：MemoBot 智能行程助理
    暱稱：咩猛
    Tagline：你的 AI 行程秘書
    說明：用說的就能管理行程，LINE 上的智能助理
    CTA：加入 LINE 好友

[痛點]
    - 行程分散在不同 App，難以統整
    - 想快速記事，還要打開 App 慢慢填
    - 重要約會容易忘，缺少主動提醒

[功能亮點]
    1. 自然語言 — 說「明天下午 3 點開會」就建立行程
    2. 雙向同步 — 與 Google Calendar 即時同步
    3. 智能識別 — 自動識別時間、地點、參與者
    4. 衝突檢測 — 自動偵測時間衝突，避免重複預約
    5. 時間空檔 — 快速查詢可用時段
    6. Google Meet — 建立線上會議自動產生連結

[使用流程]
    加入 LINE 好友 → 授權 Google 帳號 → 開始對話管理行程

[適用對象]
    - 個人工作者與自由接案者
    - 業務人員
    - 需要整合行程管理的專業人士

[定價]
    免費使用，所有功能皆可使用

[CTA]
    加入 LINE 好友
```

---

### 4. 關於我們 (`/about/index.html`)

```
[Header]

[Hero]
    - 標題：關於星智未來
    - 副標：用 AI 簡化工作的繁瑣

[Mission Section]
    - 我們的使命
    - 讓每個人都能專注在真正重要的事情上，
      把繁瑣的管理工作交給 AI。

[Values Section]
    - 核心價值
    1. 簡單至上 — 最好的工具是讓人感覺不到它的存在
    2. 專注核心 — 不追求大而全，專注解決微型團隊最痛的問題
    3. AI 賦能 — 善用 AI 處理重複性工作，讓人專注創意和判斷

[Team Section]
    - 團隊成員
    | 姓名 | 職責 | 專長 |
    |------|------|------|
    | 猛姊 | AI 專案管理 | 創新產品創新開發 |
    | 阿瑞 | 軟體系統開發 | AI 賦能技術創新 |
    | 妮可 | 商務資源開發 | 企業經營管理 |

[Company Info Section]
    - 公司資訊
    - 公司名稱：星智未來 AI Dream
    - 成立時間：2024 年
    - 專注領域：AI 應用工具開發
    - 服務對象：微型團隊、個人工作者

[Footer]
```

---

### 5. 聯繫我們 (`/contact/index.html`)

```
[Header]

[Hero]
    - 標題：與我們聯繫
    - 說明：有任何問題或合作想法，歡迎聯繫

[Contact Form] Formspree
    - 姓名
    - Email
    - 公司/團隊名稱（選填）
    - 詢問類型（下拉選單）
        - 產品諮詢
        - 合作提案
        - 技術支援
        - 其他
    - 訊息內容
    - 送出按鈕

[Contact Info]
    - Email: contact@aidream.com.tw
    - LINE 官方帳號（如有）

[Footer]
```

---

### 6. 404 頁面 (`404.html`)

```
[簡潔設計]
    - 404 圖示
    - 標題：頁面不存在
    - 說明：您要找的頁面可能已移除或網址錯誤
    - 返回首頁按鈕
```

---

## 設計規範

### 視覺主題：白天/黑夜雙模式

參考 Cal.com 官網的簡潔現代風格，預設為明亮的白天模式，切換後可體驗星空夜晚模式。

**設計關鍵字**：簡潔、現代、專業、科技、友善

### 主題切換機制

- 預設：Light Mode（白天）
- 切換：Dark Mode（星空夜晚）
- 切換按鈕：Header 右上角，太陽/月亮圖示
- 記憶偏好：localStorage 儲存使用者選擇
- 系統偏好：可選擇跟隨系統 `prefers-color-scheme`

### 色彩系統

#### Light Mode（預設 - 白天）

```css
:root {
  /* 背景色 */
  --bg-primary: #FFFFFF;       /* 主背景 */
  --bg-secondary: #F9FAFB;     /* 次要背景 */
  --bg-tertiary: #F3F4F6;      /* 卡片背景 */

  /* 主色 - 藍紫 */
  --primary: #6366F1;          /* Indigo */
  --primary-dark: #4F46E5;
  --primary-light: #818CF8;

  /* 強調色 - 橘色（CTA） */
  --accent: #F97316;           /* Orange */
  --accent-hover: #EA580C;

  /* 文字色 */
  --text-primary: #111827;     /* 主要文字 */
  --text-secondary: #4B5563;   /* 次要文字 */
  --text-muted: #9CA3AF;       /* 弱化文字 */

  /* 邊框 */
  --border: #E5E7EB;
  --border-hover: #D1D5DB;
}
```

#### Dark Mode（星空夜晚）

```css
[data-theme="dark"] {
  /* 背景色 - 宇宙深空 */
  --bg-primary: #0B0D1A;       /* 最深背景 */
  --bg-secondary: #121530;     /* 主要背景 */
  --bg-tertiary: #1A1F4E;      /* 星雲區塊 */

  /* 主色 - 星光藍紫 */
  --primary: #6B7FFF;
  --primary-dark: #4F5BD5;
  --primary-light: #8B9FFF;
  --primary-glow: rgba(107, 127, 255, 0.3);

  /* 強調色 - 金色（CTA） */
  --accent: #F5A623;
  --accent-hover: #FFB940;
  --accent-glow: rgba(245, 166, 35, 0.4);

  /* 輔助色 - 星光 */
  --star-white: #FFFFFF;
  --star-blue: #A5C4FF;
  --star-pink: #FFB5E8;

  /* 文字色 */
  --text-primary: #FFFFFF;
  --text-secondary: #A0AEC0;
  --text-muted: #718096;

  /* 邊框 */
  --border: rgba(255, 255, 255, 0.1);
  --border-glow: rgba(107, 127, 255, 0.5);
}
```

#### 共用語意色

```css
:root {
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
}
```

### 漸層定義

#### Light Mode

```css
/* Hero 背景 - 簡潔漸層 */
.bg-hero-light {
  background: linear-gradient(
    180deg,
    #FFFFFF 0%,
    #F9FAFB 50%,
    #F3F4F6 100%
  );
}

/* 卡片 */
.card-light {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

#### Dark Mode（星空夜晚）

```css
/* Hero 背景漸層 */
.bg-hero-dark {
  background: linear-gradient(
    180deg,
    #0B0D1A 0%,
    #121530 30%,
    #1A1F4E 60%,
    #0B0D1A 100%
  );
}

/* 星雲效果 */
.bg-nebula {
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(107, 127, 255, 0.15) 0%,
    transparent 70%
  );
}

/* 卡片玻璃效果 */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### 字體

```css
/* 主要字體 */
font-family: 'Noto Sans TC', -apple-system, BlinkMacSystemFont, sans-serif;

/* 標題字重 */
h1: 700 (Bold)
h2: 600 (Semibold)
h3: 600 (Semibold)

/* 內文 */
body: 400 (Regular)

/* 標題可選用特殊字體增加科技感 */
/* 備選：Orbitron, Exo 2（英文標題） */
```

### 間距系統

使用 Tailwind 預設間距（4px 基準）

### RWD 斷點

```css
/* Tailwind 預設 */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

---

## 動態效果規劃

### 整體原則

- 效果服務於體驗，不過度花俏
- 優先使用 CSS 動畫（效能最佳）
- 行動裝置減少粒子/複雜動畫
- 所有動畫可被 `prefers-reduced-motion` 關閉
- **星空動畫僅在 Dark Mode 顯示**

### Hero 區塊動效

#### Light Mode
| 效果 | 實現方式 | 優先級 |
|------|----------|--------|
| 簡潔背景 | 純色或微漸層 | 必要 |
| 幾何裝飾 | SVG 圓形/線條裝飾 | 選配 |
| 微動畫 | 元素緩慢浮動 | 選配 |

#### Dark Mode（星空效果）
| 效果 | 實現方式 | 優先級 |
|------|----------|--------|
| 星空背景 | CSS 漸層 + 多層偽元素星點 | 必要 |
| 星星閃爍 | CSS animation，隨機延遲 | 必要 |
| 行星浮動 | PNG/SVG + CSS transform 微移動 | 建議 |
| 流星劃過 | CSS animation，偶爾觸發 | 選配 |
| 星雲脈動 | CSS radial-gradient + opacity 動畫 | 選配 |

**星星閃爍 CSS 範例**
```css
@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.star {
  animation: twinkle 3s ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}
```

**行星浮動 CSS 範例**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.planet {
  animation: float 6s ease-in-out infinite;
}
```

### 通用頁面動效

| 元素 | 效果 | 實現方式 |
|------|------|----------|
| 區塊進場 | 滾動時淡入上滑 | AOS 或 Intersection Observer |
| 產品卡片 | Hover 浮起 + 光暈 | CSS transform + box-shadow |
| CTA 按鈕 | 微光脈動 + Hover 放大 | CSS animation |
| 連結/按鈕 | Hover 漸變色 | CSS transition |
| 導覽列 | 滾動後加深背景 | JavaScript scroll 監聽 |

**卡片 Hover 效果範例**
```css
.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(107, 127, 255, 0.2);
}
```

**CTA 按鈕光暈效果**
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(245, 166, 35, 0.4); }
  50% { box-shadow: 0 0 30px rgba(245, 166, 35, 0.6); }
}

.btn-cta {
  animation: pulse-glow 2s ease-in-out infinite;
}
```

### 建議使用的輕量庫

| 名稱 | 用途 | 大小 | 必要性 |
|------|------|------|--------|
| AOS | 滾動觸發動畫 | ~14KB | 建議 |
| Vanilla-tilt.js | 卡片 3D 傾斜 | ~4KB | 選配 |

> 大部分效果用純 CSS 即可實現，盡量減少外部依賴

### 行動裝置優化

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

@media (max-width: 768px) {
  /* 行動版減少行星數量 */
  .planet-secondary { display: none; }
  
  /* 簡化星星效果 */
  .stars-layer-2, .stars-layer-3 { display: none; }
}
```

---

## 背景素材規劃

### 方案 A：純 CSS 生成（推薦）

- 星空用 CSS 漸層 + box-shadow 生成星點
- 零圖片依賴，載入快
- 範例：https://css-tricks.com/snippets/css/star-wars-crawl-text/

### 方案 B：混合使用

- 主背景用 CSS 漸層
- 行星用 2-3 張 PNG（壓縮後 < 100KB）
- 星雲用 SVG 或 CSS

### 素材清單（若採方案 B）

```
/assets/images/
├── planet-large.png      # 主行星（左側或右側）
├── planet-small-1.png    # 小行星 1
├── planet-small-2.png    # 小行星 2
└── nebula-overlay.svg    # 星雲疊加層（選配）
```

---

## 元件清單

### 共用元件

1. **Header** - 導覽列（深色透明 + RWD 漢堡選單）
2. **Footer** - 頁尾（深色主題）
3. **Button** - 按鈕（primary 金色, secondary 透明邊框, ghost）
4. **Card** - 卡片（玻璃擬態效果）
5. **Section** - 區塊容器（含星雲背景變體）
6. **Badge** - 標籤（發光效果）

### 星空主題元件

1. **StarField** - 星空背景層（CSS 生成星點 + 閃爍動畫）
2. **Planet** - 行星元素（浮動動畫）
3. **Nebula** - 星雲光暈層
4. **GlowButton** - 發光 CTA 按鈕

### 頁面專用元件

1. **HeroSection** - 主視覺區塊（含星空背景完整組合）
2. **ProductCard** - 產品卡片（玻璃擬態 + Hover 光暈）
3. **FeatureCard** - 功能卡片
4. **ContactForm** - 聯繫表單（深色主題）
5. **PricingTable** - 定價表（未來擴充）

---

## 擴展性設計

### 新增產品流程

1. 在 `/products/` 目錄新增 `[product-id].html`
2. 更新產品資料檔（`products.json` 或直接寫入）
3. 產品列表頁會自動顯示（若使用模板引擎）

### 未來可擴展功能

- [ ] 多語系支援（i18n）
- [ ] 部落格系統（或連結到 blog.aidream.com.tw）
- [ ] 客戶案例頁面
- [ ] 常見問題 FAQ
- [ ] 電子報訂閱
- [ ] 線上預約系統整合

---

## 實作優先順序

### Phase 1（MVP）
1. ✅ 首頁
2. ✅ 產品列表頁
3. ✅ ContraX 產品頁
4. ✅ MemoBot（咩猛）產品頁
5. ✅ 聯繫頁（含表單）

### Phase 2
1. ✅ 關於我們頁面
2. ✅ 404 頁面
3. ✅ SEO 優化（meta tags, sitemap）

### Phase 3
1. 部落格整合（連結到 blog.aidream.com.tw）
2. 多語系（英文版）
3. 更多產品頁面（未來新產品）

---

## 待確認事項

- [x] 公司 Logo 檔案（Light/Dark 雙版本）— 已加入 /public/images/logo_white.png, logo_black.png
- [x] ContraX 產品截圖 — 已加入 /public/images/products/contraX.png
- [x] MemoBot 產品截圖 — 已加入 /public/images/products/memobot.png
- [ ] MemoBot LINE Bot 加入好友連結 / QR Code
- [x] Formspree 表單 ID — mjgbogzr
- [ ] LINE 官方帳號（如有）
- [ ] GitHub 組織/帳號名稱
- [ ] ContraX 下載連結或試用申請方式

---

## 參考資源

- [Cal.com 官網](https://cal.com/) - 設計風格參考
- [Tailwind CSS 文件](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons/)
- [Formspree](https://formspree.io/)
- [GitHub Pages 部署指南](https://docs.github.com/en/pages)

---

*文件版本：v1.0*  
*建立日期：2025-01-XX*  
*維護者：星智未來團隊*
