/**
 * 全站统一的日期展示工具
 *
 * 列表页、卡片、正文页等所有页面的日期都通过本模块格式化，
 * 日期口径（语言、格式选项、缺值占位）只在此处维护一份。
 */

/** 日期展示风格，对应各页面原有的展示口径 */
export type DateFormatStyle = 'short' | 'long' | 'numeric'

/** 字段没有值时的统一占位（保持与原有表现一致：不渲染任何内容） */
export const EMPTY_DATE_PLACEHOLDER = ''

const DATE_FORMAT_OPTIONS: Record<
  DateFormatStyle,
  Intl.DateTimeFormatOptions
> = {
  // 列表页（新闻列表、首页资讯等）
  short: {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  },
  // 文章正文页
  long: {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  },
  // 卡片等紧凑场景（2024/03/15）
  numeric: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }
}

/**
 * 将日期字符串格式化为页面统一的中文日期文案
 * @param dateStr 后端返回的日期字符串（如 '2024-03-15'）
 * @param style 展示风格，默认使用列表页口径
 * @returns 格式化后的日期文案；入参为空或无法解析时返回统一占位
 */
export const formatDate = (
  dateStr?: string | null,
  style: DateFormatStyle = 'short'
): string => {
  if (!dateStr) return EMPTY_DATE_PLACEHOLDER

  const date = new Date(dateStr)
  if (Number.isNaN(date.getTime())) return EMPTY_DATE_PLACEHOLDER

  return date.toLocaleDateString('zh-CN', DATE_FORMAT_OPTIONS[style])
}
