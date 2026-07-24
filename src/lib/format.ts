/** 日付を「2024年2月5日」形式に整形する */
export function formatDate(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

/** 価格を「¥128,000」形式に整形する */
export function formatPrice(price: number): string {
  return `¥${price.toLocaleString('ja-JP')}`;
}
