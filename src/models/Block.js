class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含

  */
  constructor(blockchain,previoushash,height,hash) {
    this.blockchain=blockchain
    this.previousHash=previoushash
    this.height=height
    this.hash=hash
  }
}

export default Block
