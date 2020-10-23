function generateCapitalStringWithHashTag(str) {
    //1.是否为空 .length == 0 null "" !
    //2.是否超过140字 .length
    //3.# +
    //4.每个单词都大写
    //     if (str.length > 140) {
    //         console.log('字符串超过140字')
    //     } else if (str.length == 0) {
    //         console.log('字符串为空')
    //     } else {
    //         console.log(
    //             '#' + str
    //                 .split(' ')
    //                 .map(function (word) {
    //                     console.log(word);
    //                     return word.charAt(0).toUpperCase() + word.slice(1)
    //                 }) //es6 数组的新方法，遍历数组的每一项并用一个函数处理，返回新的数组
    //                 .join(' ')
    //         )
    //     }
    return str.length > 140 || str === '' ? false :
        '#' + str.split('').map(capitalize).join('')
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + word.slice(1)
}
generateCapitalStringWithHashTag('hello world')