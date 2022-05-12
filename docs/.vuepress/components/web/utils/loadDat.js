import axios from "axios"
import fs from "fs"
// !!!!需要修改区域
import { day03 } from "../dat/allWords.js"

// const axios = require('axios');
// const fs = require("fs")
// const {day01} = require('../dat/allWords')
// ！！！！ 需要修改区域
let wordDat = day03
let datArray = '';
let dat = '';
let matchDat = '';

async function load(i) {
    datArray = `[`
    for (let i = 0; i < wordDat.length; i++) {
        const tempAry = wordDat[i]
        datArray += '['
        for (let j = 0; j < tempAry.length; j++) {
            const res = await axios({
                method: 'get',
                url: `https://dict.cn/${tempAry[j]}`
            })
            dat = res.data.toString()
            matchDat = dat.match(/<strong>(.+)<\/strong>/)[1]
            console.log(matchDat)
            console.log(matchDat.match(/[\u4e00-\u9fa5]*/)[0])

            if (j == tempAry.length - 1) {
                datArray += `'${matchDat.match(/[\u4e00-\u9fa5]*/)}'`
            } else {
                datArray += `'${matchDat.match(/[\u4e00-\u9fa5]*/)}',`
            }
            console.log(datArray)
        }
        datArray += '],'
        console.log('??????')
    }
    datArray += ']'
    console.log('--完整格式--');
    console.log(datArray)
    const writeDat = `
    export const mday02=${datArray}
  `

    fs.writeFileSync('../dat/allMean.js', writeDat, { flag: 'a+' })
}



// console.log(wordDat.toString())
// console.log(matchDat)
// loadString()
load()