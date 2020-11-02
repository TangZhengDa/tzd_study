export default class stack {
    //`属性 java c# -> js
    //items按一定的方法去操作
    private items: any[];
    constructor() {
        //初始化
        this.items = [];

    }
    push(item: any) {
        this.items.push(item)
    }
    pop() {
        return this.items.pop()
    }
    //返回栈顶元素
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length == 0
    }
    clear() {
        this.items = []
    }
    size(): number {
        return
    }
    toString() {

    }
}