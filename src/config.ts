import path from "path";
import { fileURLToPath } from "url";
export default {
    // 需要读取的目录地址
    getFile: '/src/store',
    // 生成结果路径
    goalPath: '/src/store/index.ts',
    // 根地址
    root: process.cwd(),
    // 自动化地址
    dirname:getDirname(),
    defaultTemplate:'_vap_template'
}
function getDirname (){
    try {
        return __dirname
    } catch (error) {
        return path.dirname(fileURLToPath(import.meta.url))
    }
}