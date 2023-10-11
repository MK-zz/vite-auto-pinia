import chokidar from 'chokidar'
import config from './config'
import { renderFile } from 'ejs'
import { createFile, getPlatform } from './tool';
import generatePiniaConfig from'./generatePiniaConfig'
export default function () {
    const { root, getFile } = config
    const watcher = chokidar.watch(`${root}/${getFile}`, { ignoreInitial: true, depth: 0 });
    watcher.on('add', (p) => {
        // 区分是什么系统
        const split = p.split(`${getPlatform()}`)
        const docName = split[split.length - 1]
        if (docName.split('.')[1] === 'ts') {
            addDoc(p, docName)
        }
    });
    watcher.on('unlink', (filePath) => {
        generatePiniaConfig()
    });
    async function addDoc(p: string, docName: string) {
        const { root, defaultTemplate } = config
        createFile(
            p,
            await renderFile(
                `${root}/${defaultTemplate}/template.pinia.ejs`, //读取ejs 数据
                {
                    // 生成入口名称
                    name: `${docName.split('.')[0]}`
                }
            )
        )
    }
}