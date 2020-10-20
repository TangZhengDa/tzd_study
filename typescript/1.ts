//es6 箭头函数
const getUserInfos = (user):string => {
    return `${user.name} 性别${user,sex} 就职于${user.company}`;
}
console.log(getUserInfos({name: '人康华', sex:'男',company: '字节'}))