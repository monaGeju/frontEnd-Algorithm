// 实现const
function _const(obj,key,value){

  Object.defineProperty(obj,key,{

    configurable: false,
    get: function(){

      return value
    },
    set: function(newVal){

      if(newVal === value){

        return value
      } else {

        throw new Error('Assignment to constant variable')
      }
    }
  })
}

// 实现call
Function.prototype._call = function _call(context, ...arg){

  context.fn = this

  const res = context.fn(...arg)

  delete context[key]

  return res
}


// 实现apply
Function.prototype._apply = function _call(context, arg){

  context.fn = this

  const res = context.fn(...arg)

  delete context[key]

  return res
}

// 实现bind

Function.prototype.myBind = function(context, ...fArg){

  const fn = this
  fArg = fArg || []

  return  function newFn(...newArg){

    if(this instanceof newFn){

      return new fn(...fArg, ...newArg)
    }

    return fn.apply(context,[...fArg, ...newArg])
  }
}

// 实现forEach、map、filter

// forEach

Array.prototype.myForEach = function(callback){

  let i = 0, len = this.length;

  for(;i< len;i++){

    (callback)(this[i],i,this)
  }

}

// 测试：var arr = [6,23,7,2]  arr.myForEach((item,index,arr) => console.log(item,index,arr))

// map

Array.


// 实现class


// 实现promise


// 实现generate……yeild


// 实现C继承构造函数A/B


let reg = /\w{1,3}(?=(\w{3})+$)/g


window.a = 212122

const arrow = () => {

    console.log(this.a)
 }

const object = {
  a: 456
}

arrow.call(object)





/*
1. 编程题：给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。
示例1:
输入:”abcabcbb”
输出:3
解释: 因为无重复字符的最长子串是 “abc”，所以其长度为 3。

示例 2:
输入:”bbbbb”
输出: 1
解释: 因为无重复字符的最长子串是 “b”，所以其长度为 1。

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。

答题格式:
*/

var lengthOfLongestSubstr = function(s) {

    let sum = ''; // 最长无重复字符串
  	let max = 0; // 最大无重复字符串长度
    let i = 0, len = s.length; // 初始值

  	for(;i<len;i++){

      let now = s.charAt(i); // 当前位置的字符

      if(sum.indexOf(s.charAt(i)) > -1){

        sum = sum.substring(sum.indexOf(s.charAt(i)) + 1) + s.charAt(i);
      } else {

      	sum += now;
        max < sum.length ? max = sum.length : max;
      }
    }

  	return max; // 返回
};

/*
2. 编程题：

给定一个只包括 ‘(‘，’)’，’{‘，’}’，’[‘，’]’ 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

答题格式
*/

debugger;
var isValid = function(s) {

	// 特殊情况验证
   	const len = s.length;
  	let count = 0;

    if(len < 2 || len % 2 !== 0){

     	return true;
    }

  	while(count < len / 2){

    	s = s.replace("{}","").replace("[]","").replace("()","");

      	count++;
    }

	//  对替换完成的结果进行判断,如果合法组合替换完成还有字符，则不为合法结构
  	return s.length === 0

};
isValid('{[]}')
/*

3. 返回最接近输入值的数字，如果有多个，返回最大的那个
const arr = [1, 5, 9, 15, 28, 33, 55, 78, 99];
*/

/**
 * 返回最接近输入值的数字，如果有多个，返回最大的那个
 * @param {number} n
 * @return {number}
 */

function findNext(n, arr) {
   /**
   * 此处写代码逻辑
   */
  // 采用二分法

   const len = arr.length;

   const pivot = arr[Math.floor(len/2)];

   const halfArr = n < pivot ? arr.slice(0,  Math.floor(len/2)) : arr.slice(Math.floor(len/2));

   const res = halfArr.map(item => Math.abs(item - n));

   const nearVal = Math.min.apply(null, res);

   const nearValIndex = res.indexOf(nearVal);

   return res[nearValIndex] + n;

}

console.log(findNext(-5, [1, 5, 9, 15, 28, 33, 55, 78, 99])); // 55





// 寻找最大无重复字符串长度
function findLen(s){

  let len = s.length, i = 0, max = 0, sum = '';

  for(;i < len; i++){

    if(sum.includes(s[i])){

      sum = sum.substring(sum.indexOf(s[i])) + s[i];
    } else {

      sum += s[i];

      max = Math.max(sum.length, max)
    }
  }

  return max;
}

findLen('abcabcbb')



// 括号合法性检测
var isValid = function(s){

  const len = s.length;
  let i = 0;

  // 特殊情况判断
  if(len % 2 !== 0 || len < 2){

    return true;
  }

  while(i < len / 2){

    s = s.replace('()',"").replace('[]',"").replace('{}',"");

    i++
  }

  return s.length === 0
}


isValid('{([()])}')




// 找距离目标值最近且最大的值
var arr = [1, 5, 9, 15, 28, 33, 55, 78, 99];

function findNext(n, arr) {

   const len = arr.length;

   const pivot = arr[Math.floor(len/2)];

   const halfArr = n < pivot ? arr.slice(0,  Math.floor(len/2)) : arr.slice(Math.floor(len/2));

   const res = halfArr.map(item => Math.abs(item - n));

   const nearVal = Math.min.apply(null, res);

   const nearValIndex = res.indexOf(nearVal);

   return res[nearValIndex] + n;

}

console.log(findNext(-5, arr));