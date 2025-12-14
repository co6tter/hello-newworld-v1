# Hello New World V1

## Overview

スイートショップ「Sweet Shop」のランディングページです。ケーキやドーナツなどのスイーツを扱うお店のウェブサイトで、レスポンシブデザインに対応しています。

主な機能：
- About: 当店についての紹介セクション
- Menu: 今月のケーキメニュー（画像モーダル表示機能付き）
- Shop: ショップ情報とメールアドレス登録フォーム
- スムーズスクロール＆トップへ戻るボタン

## Tech Stack

- **HTML5**: セマンティックなマークアップ
- **Tailwind CSS** (v3.4.17): ユーティリティファーストのCSSフレームワーク
- **JavaScript/jQuery** (v3.7.1): インタラクティブ機能の実装
- **Node.js** (v22): ビルド環境
- **AWS CodeBuild**: デプロイ自動化

## Setup

### 前提条件
- Node.js 22以上がインストールされていること

### インストール手順

```bash
# 依存関係のインストール
npm ci

# Tailwind CSSのビルド
npx tailwindcss -i ./src/css/index.css -o ./src/css/style.css --minify
```

### 開発環境でのビルド（watch モード）

```bash
# ファイル変更を監視して自動ビルド
npx tailwindcss -i ./src/css/index.css -o ./src/css/style.css --watch
```

## Usage

ビルド後、`index.html`をブラウザで開くか、ローカルサーバーで実行してください。

```bash
# 例: Python の簡易サーバー
python -m http.server 8000

# 例: npx の serve を使用
npx serve
```

ブラウザで `http://localhost:8000` にアクセスしてください。

## Directory Structure

```
.
├── index.html              # メインHTMLファイル
├── src/
│   ├── css/
│   │   ├── index.css      # Tailwind CSS入力ファイル
│   │   └── style.css      # ビルド済みCSSファイル
│   ├── js/
│   │   └── script.js      # JavaScriptファイル
│   └── img/               # 画像ファイル
│       ├── logo.svg
│       ├── fv.jpg
│       ├── menu1.jpg
│       ├── menu2.jpg
│       └── menu3.jpg
├── buildspec.yml           # AWS CodeBuildの設定ファイル
├── tailwind.config.js      # Tailwind CSS設定ファイル
├── package.json            # プロジェクト設定と依存関係
├── favicon.ico             # ファビコン
├── apple-touch-icon.png    # Appleタッチアイコン
├── android-chrome-*.png    # Androidアイコン
└── site.webmanifest        # Webアプリマニフェスト
```

## License

This repository is for personal/private use only.
