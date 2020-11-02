//存储结构 JSONObject
//o(n) o(1)
//必须实现以下属性和方法
interface StackObj {
    [propName: number]: any;
}

export default class ObjStack {
    //定义栈并规定其类型
    private items: StackObj;//先声明再使用 items 是json
    private count: number;//array  .length -1

    constructor() {
        this.items = {};//json object
        this.count = 0;

    }

    push(item: any) {
        this.items[this.count] = item;
        this.count++;
    }

    top() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result
    }
    peak() {
        if (this.isEmpty) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    isEmpty() {
        return this.count === 0;
    }
    clear() {
        this.items = {}
        this.count = 0
    }
    size(): number {
        return this.count
    }
    toString() {
        if (this.isEmpty()) {
            return ""
        }
        let objString = `${this.items[0]}`
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}
