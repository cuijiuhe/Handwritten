// 写一个 mySetInterVal(fn, a, b),每次间隔 a, a+b, a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal 

class mySetInterVal {
  constructor(fn ,a, b) {
    this.a = a;
    this.b = b
    this.fn = fn
    this.count = 0
  }

  mySetInterVal() {
    this.handle = setTimeout(() => {
      this.mySetInterVal()
      this.fn()
      console.log(this.a + this.count * this.b)
      this.count ++
    }, this.a + this.count * this.b)
  }
  myClear() {
    clearTimeout(this.handle)
    this.count = 0
  }
}

let myInter = new mySetInterVal(() => {
  console.log('*****')
}, 1000, 1000)
myInter.mySetInterVal()