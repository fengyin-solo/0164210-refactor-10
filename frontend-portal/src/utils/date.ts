/**
 * 全站统一的日期展示口径。
 * 列表、卡片、正文页各有既定样式，新增页面从这里选用，
 * 不要在页面内再写私有的格式化实现。
 */

/** 列表页 / 首页动态等常规展示，如：2024年3月15日 */
export const formatListDate = (dateStr: string): string =>
  new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

/** 新闻卡片，如：2024/03/15 */
export const formatCardDate = (dateStr: string): string =>
  new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

/** 文章正文页及相关推荐 */
export const formatDetailDate = (dateStr: string): string =>
  new Date(dateStr).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
