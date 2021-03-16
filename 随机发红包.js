//洗牌 //抽牌法优化牌
function shuffle_pick(arr) {
    //每次抽出一张牌，放在另一堆。把最后一张未抽的牌放在空位子上。
    const arr2 = []
    for (let len = arr.length;len>0;) {
        let rnd = Math.floor(Math.random() * len)
        arr2.push(arr[rnd])
        arr[rnd] = arr[--len]
    }
    return arr2
}

function randomRange(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
/**
 * 针对不同的阈值，随机红包函数的生成器
 * @param threshold = 0.618 阈值
 */
function randomRedPacketGenerator(threshold = 0.618) {
    if (threshold < 0 || threshold > 1) {
        throw new TypeError('range of threshold\'s value is wrong, it\'s value expect in range of [0, 1]')
    }
    return function(money, count) {
        let result = []
        for (let i=0;i<count - 1;i++) {
            const value = randomRange(0.01, money * threshold)
            result.push(value)
            money = money - value
        }
        result.push(parseFloat(money.toFixed(2)))
        console.log('before shuffle:', result)
        // 将结果数组洗牌
        result = shuffle_pick(result)
        return result
    }
}
// 示例：
// 得到随机红包函数
const randomRedPacket = randomRedPacketGenerator(0.6)
const arr = randomRedPacket(10, 10)
// log打印
const sum = arr.reduce((pre, cur) => {
    cur += pre
    return cur
}, 0)
console.log('arr:', arr)
console.log('sum:', parseFloat(sum.toFixed(10)))