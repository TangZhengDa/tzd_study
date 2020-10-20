const cfw = {
    name: '陈方闻',
    company: '百度',
    sex: '男',
}

//console.log(`${ cfw.name }, 性别${ cfw.sex }, 就职于${ cfw.company }`)
const yds = {
    name: '叶弘丰',
    company: '滴滴',
    sex: '男'
}
//功能重复了，函数 功能的封装
// const getUserInfo = function (name, company, sex) {
//     this.name = name;
//     this.company = company;
//     this.sex = sex;
//     console.log(`${this.name},性别${this.sex},就业于${this.company}`);
// }
function getUserInfo(user) {
    //if (!user) return;
    console.log(`${user.name},性别${user.sex},就职于${user.company}`)
};
getUserInfo({name: '汤政达', company: '微软'})
