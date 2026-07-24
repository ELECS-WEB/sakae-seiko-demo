# サカエ精工株式会社 コーポレートサイト（デモ）

> ⚠️ **これは CMS 検証用のダミーサイトです。**
> Git ベースの Headless CMS「[Sitepins](https://sitepins.com/)」の動作検証用リポジトリとして作成された、**架空企業のコーポレートサイト**です。
> 登場する企業名・製品・型番・価格・お知らせ・導入事例・連絡先などは**すべて架空**であり、実在の団体・製品とは一切関係ありません。

## 目的

CMS（Sitepins）側から編集される「多様な型の front matter を持つ Markdown コンテンツ」を、Astro 5 の Content Collections（Content Layer API）で正しく型付け・描画できることを検証するためのサンプルです。front matter の型は `string` / `number` / `date` / `boolean` / `enum` / `string[]`（min-max 制約付き）など、意図的に多様化しています。

## 技術スタック

- **[Astro 5](https://astro.build/)** — Content Layer API（`src/content.config.ts` + `glob()` ローダー）
- **TypeScript**（strict）
- **Tailwind CSS v4**（`@tailwindcss/vite` プラグイン方式）
- コンテンツ：Markdown（`.md`）＋ YAML front matter、日本語

## コンテンツ構成

| コレクション | 場所 | 件数 | 主な front matter |
| --- | --- | --- | --- |
| 製品 | `src/content/products/` | 6 | title, category(enum), model, price(number), releaseDate(date), discontinued(bool), tags(string[]), thumbnail, featured(bool) |
| お知らせ | `src/content/news/` | 8 | title, publishDate(date), category(enum), important(bool), author |
| 導入事例 | `src/content/cases/` | 4 | title, clientName, industry, relatedProducts(string[]), publishDate(date), published(bool) |
| 固定ページ | `src/content/pages/` | 3 | title, updatedAt(date), showInNav(bool) |

スキーマ定義は [`src/content.config.ts`](src/content.config.ts) を参照してください。

## ディレクトリ構成

```
src/
├── content.config.ts     # 4 コレクションの zod スキーマ
├── content/              # Markdown コンテンツ（CMS が編集する対象）
├── layouts/              # BaseLayout
├── components/           # Header / Footer / ProductCard / NewsItem
├── lib/                  # 日付・価格フォーマッタ
├── styles/global.css     # Tailwind エントリ + Markdown 本文スタイル
└── pages/                # ルーティング（一覧・詳細・固定ページ）
public/images/            # プレースホルダ画像（ダミー SVG）
```

## セットアップ

```bash
npm install       # 依存関係のインストール
npm run dev       # 開発サーバ（http://localhost:4321）
npm run check     # 型チェック（astro check）
npm run build     # 本番ビルド（dist/ に出力）
npm run preview   # ビルド結果のプレビュー
```

## 主なページ

- `/` — トップ（製品ピックアップ、最新お知らせ 3 件）
- `/products/` — 製品一覧、`/products/<slug>/` — 製品詳細
- `/news/` — お知らせ一覧、`/news/<slug>/` — お知らせ詳細
- `/cases/` — 導入事例一覧、`/cases/<slug>/` — 事例詳細（`published: true` のみ生成）
- `/company/`・`/quality/`・`/contact/` — 固定ページ

## ライセンス / 注意

本リポジトリは検証・学習目的のサンプルです。掲載内容はすべてフィクションです。
