import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 製品（センサー・計測器・制御機器）
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['センサー', '計測器', '制御機器']),
    model: z.string(),
    price: z.number(),
    releaseDate: z.coerce.date(),
    discontinued: z.boolean(),
    tags: z.array(z.string()).min(3).max(5),
    thumbnail: z.string(),
    featured: z.boolean(),
  }),
});

// お知らせ
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    category: z.enum(['プレスリリース', '製品情報', '採用', 'その他']),
    important: z.boolean(),
    author: z.string(),
  }),
});

// 導入事例
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    clientName: z.string(),
    industry: z.string(),
    // products の型番（model）を参照する緩い文字列配列。
    // Astro の reference() はファイル ID 参照のため、型番参照とは一致しない。意図的に文字列配列とする。
    relatedProducts: z.array(z.string()),
    publishDate: z.coerce.date(),
    published: z.boolean(),
  }),
});

// 固定ページ（会社概要・品質方針・お問い合わせ）
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    updatedAt: z.coerce.date(),
    showInNav: z.boolean(),
  }),
});

export const collections = { products, news, cases, pages };
