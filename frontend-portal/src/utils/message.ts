import { ElMessage } from 'element-plus'

/** 未开放功能的统一占位提示，文案调整只需维护这一处 */
export const showNotImplemented = (): void => {
  ElMessage.info('功能开发中，敬请期待')
}
