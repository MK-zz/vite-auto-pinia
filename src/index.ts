import { HmrContext } from "vite";
// 配置文件 测试
import PiniaConfig from './config'
import generatePiniaConfig from'./generatePiniaConfig'
import onWatcher from './watcher'
import { theTemplate } from "./theTemplate";
export default function (config?:Config) {
    // 初始化的时候执行一次
    generatePiniaConfig()
    // 初始化模板
    theTemplate()
    if(config?.watcher===false?false:true){
        onWatcher()
    }
    return {
        name: 'vite-auto-pinia',
        // 热更新触发事件
        handleHotUpdate(ctx: HmrContext) {
            const { getFile } = PiniaConfig
            // includes 字符串匹配
            if (ctx.file.includes(getFile)) {
                generatePiniaConfig()
            }
        }
    }
}
interface Config {
    watcher?:boolean
}