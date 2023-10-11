import { writeFileSync, mkdirSync } from "fs";
import { platform } from 'os';
/**
 * 创建文件
 * @param filePath 
 * @param fileContent 
 */
export function createFile(filePath: string, fileContent: string) {
    try {
        // 使用 writeFileSync 方法创建文件并写入内容
        writeFileSync(filePath, fileContent);
    } catch (err) {
        console.error('写入文件时出错：', err);
    }
}
/**
 * 创建文件夹
 * @param directoryPath 
 */
export async function createMkdir(directoryPath: string) {
    try {
        // 使用 writeFileSync 方法创建文件并写入内容
        mkdirSync(directoryPath);
    } catch (err) {
        console.error('文件夹出错：', err);
    }
}

/**
 * 首字母大写
 * @param str 
 * @returns 
 */
export function capitalizeFirstWord(str: string) {
    return str.replace(/^\w/, (match) => match.toUpperCase());
}
/**
 * 验证平台
 * @returns string
 */
export function getPlatform(){
    return platform() === 'win32' ? '\\' : '/'
}