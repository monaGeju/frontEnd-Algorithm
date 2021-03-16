
// 两数之和为target
var  arr = [1,8,2,7,6,9,3,4,5,0];

findRes(arr, 8);

function findRes(arr, target){

  arr = arr.sort((a, b) => a - b)

  let left = 0; len = arr.length; res = [], right = len - 1;

  while(right > left && left < len - 1){

    if(arr[left] + arr[right] === target){

      res.push([arr[left], arr[right]])

      left++;
      right = len - 1;

    } else if(arr[left] + arr[right]  < target){

      left++;
      right = len - 1;

    } else {

      right--;
    }
  }

  return res;
}



// 三数之和为target
var num = [-1, 0, 1, 2, -1, 4];

findRes(num, 7);

function findRes(arr, target){

  // 数组排序：双指针依赖于有序数组
  arr.sort((a,b) => a - b);

  // 初始声明，存储变量
  let i = 0, len = arr.length, res = [];

  // 因为是三数之和，小于三个不用考虑了
  if(len < 3){

    return result
  }

  // 固定一个变量
  for(;i < len - 2; i++){

    let left = i + 1;
    let right = len - 1;


    // 如果最小值都大于target就不用考虑了
    if(arr[i] > target){

      continue;
    }

    // 改变另外两个指针
    while(right > left){

      const sum = arr[i] + arr[left] + arr[right];

      // 相等时
      if(sum === target){

        res.push([arr[i], arr[left++], arr[right--]]);

        // 排除重复的组合
        while(arr[left] === arr[left - 1] ){

          left++;
        }

        // 排除重复的组合
        while(arr[right] === arr[right - 1] ){

          right--;
        }

      } else if(sum > target){

        right--;
      } else {

        left++;
      }
    }
  }

  return res;
}
