import { mkdirSync, existsSync, copyFileSync, readdirSync } from "fs";
import path from "path";
import config from './config'
const ROOT = process.cwd()

export function theTemplate() {

    const { dirname, defaultTemplate } = config
    try {
        if (existsSync(`${ROOT}/${defaultTemplate}`)) return
        mkdirSync(`${ROOT}/${defaultTemplate}`)
        readdirSync(`${dirname}/ejs`).map(v => {
            const sourceFile = path.join(`${dirname}/ejs`, v);
            const targetFile = path.join(`${ROOT}/${defaultTemplate}/`, v);
            copyFileSync(sourceFile, targetFile)
        })
    } catch (error) {
        console.log('error', error)
    }
}