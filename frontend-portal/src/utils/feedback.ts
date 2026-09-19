/**
 * 全站统一的交互反馈
 *
 * “功能开发中”这类提示文案只在此处维护一份，
 * 各页面的占位入口（分享、加载更多、外链等）统一调用。
 */
import { ElMessage } from 'element-plus'

/** 功能开发中提示文案 */
export const NOT_IMPLEMENTED_MESSAGE = '功能开发中，敬请期待'

/** 弹出“功能开发中”提示，用于尚未上线的交互入口 */
export const notifyNotImplemented = (): void => {
  ElMessage.info(NOT_IMPLEMENTED_MESSAGE)
}
