const fs = require('fs')
const path = require('path')
const SAVE_FILE_PATH = path.resolve(__dirname, '../src/global-comp.js')

function uppercase(name) {
  return name.replace(/(^|-)\S/g, (a,b)=>{
    return a.toUpperCase()
  }).replace(/-/g, '')
}

function main() {
  const dirs = fs.readdirSync('uni_modules')

  const compNames = []

  const strList = dirs.map(dir => {
    const compsPath = `uni_modules/${dir}/components`
    
    // components文件夹存在
    if (fs.existsSync(compsPath)) {
      const comps = fs.readdirSync(compsPath)

       return comps.map(comp => {
         const compPath = `${compsPath}/${comp}/${comp}.vue`

        // 组件按照以下规范： 组件名/组件名.vue
        if (fs.existsSync(compPath)) {
          const compName = uppercase(comp)
          
          compNames.push(compName)
          
          console.log('正在处理: ', compPath)

          return  `import ${compName} from '../${compPath}'`
        }
      })
    }
  })
  .flat()
  .concat(compNames.map(name => {
    return `Vue.component('${name}',${name})`
  }))

  const content = ['import Vue from \'vue\''].concat(strList).join('\n')

  fs.writeFileSync(SAVE_FILE_PATH, content, {
    encoding: 'utf-8'
  })
}

main()