正则练习题

1、找到字符串中首个仅出现一次的字符
  const str = 'Aibee apple'
  let res = ''

  for(let i = 0;i<str.length;i++){

    const reg = new RegExp(`${str[i]}`,'g')

    if(reg.exec(str[i]).length === 1){

      res = str[i]

      break;
    }
  }

  console.log(res)

2、找到首个只出现一次的单词
  const str = 'good good study, day day up'

  // 匹配单词
  const reg = /(\b[A-Za-z]{1,}\b)/g;
  // 获取匹配到的单词数组
  const arr = str.match(reg);
  let res = ''

  // 方法一：indexOf
  arr.forEach(item => {

    if(arr.indexOf(item) === arr.lastIndexOf(item) && !res){

      res = item
    }
  })

  console.log(res)

3、找到出现次数最多的字符和首次出现的位置

  const str = 'Aibee apple'
  let res = []

  for(let i =0;i<str.length;i++){

    const reg = new RegExp(str[i], 'g')

    res.push(str.match(reg).length)
  }

  const maxTimes = Math.max.apply(null, res)

  const word = str[res.indexOf(maxTimes)]

  console.log(word,res.indexOf(maxTimes))


4、找到出现次数最多的单词以及出现了几次

  const str = 'good good study, day day up, day in day,no rest'

  const reg = /\b[A-Za-z]+\b/g;

  let res = [];

  const arr = str.match(reg);

  for(let i = 0; i< arr.length; i++){

    const tempReg = new RegExp(arr[i], 'g')

    res.push(arr.join(',').match(tempReg).length)
  }

  const maxTimes = Math.max.apply(null, res)

  const words = arr[res.indexOf(maxTimes)]

  console.log(words,maxTimes)


5、单词首字母大写

let str = 'good good study, day day up, day in day,no rest'
const wordsReg = /\b([A-z])[A-z]*\b/g;


str = str.replace(wordsReg, (...arg) => {

  let [content, $1] = arg

  return $1.toUpperCase() + content.slice(1)

})

console.log(str)


5、get-element-by-id转化成驼峰形式

let str = 'get-element-by-id';
const reg = /-([A-z])/g

str = str.replace(reg, (...arg) => {

  let [content, $1] = arg

  return $1.toUpperCase()
})

console.log(str)


6、增加千分位分隔符

let str = '92323223423'

const reg = /\d{1,3}(?=(\d{3})+$)/g;

str = str.replace(reg, content => content + ',')

console.log(str)

// 方法二：
let str = 92323223423
console.log(str.toLocaleString())

    // 分隔

    const str = 'jiashuangxi';

    const res = str.replace(/\w{1,3}(?=(\w{3})+$)/g, value =>  value + '|')

    console.log(res)



7、匹配一个字符串中两个相邻单词（它们之间可以有一个或者多个空白，如空格、制表符或者任何其他UNICODE空白符）

let str = 'good good study, day day up,  day in day,   no rest'

const reg = /\b([A-z]+)\W([A-z]+)\b/g

console.log(str.match(reg))




