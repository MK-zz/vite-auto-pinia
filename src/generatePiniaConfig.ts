// 配置文件
import config from './config'
import { readdirSync } from "fs";
import { renderFile } from 'ejs'
import { createFile } from './tool';
export default async function () {
    const { getFile, root, goalPath, defaultTemplate } = config
    try {
        // 读取目录列表，整理结构
        const storePath = readdirSync(`${root}${getFile}`).map((val) => {
            // 切割.ts
            const name = val.replace('.ts', '')
            if (name !== 'index') {
                return {
                    name,
                    alias: `${name}Store`,
                    path: `@/store/${name}`
                }
            }
        }).filter((val) => val !== undefined) as ({
            name: string;
            alias: string;
            path: string;
        })[];  // 使用 .filter() 移除 undefined 值
        // 写入数据
        createFile(`${root}${goalPath}`, await renderFile(`${root}/${defaultTemplate}/config.ejs`, //读取ejs 数据
            {
                // 生成引入部分数据
                importPath: storePath.map(({ alias, path }) => `import ${alias} from '${path}';`).join('\n'),
                // 生成storeMap数据结构
                storeMap: `const storeMap = {\n  ${storePath.map(({ name, alias }) => `${name}: ${alias},`).join('\n  ')}\n}`
            }))
    } catch (error) {
        console.log('error', error)
    }

}