class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含

  */
  constructor(blockchain,previoushash,nonce,timestamp) {
    this.blockchain=blockchain
    this.previoushash=previoushash
    this.nonce=nonce
    this.timestamp=timestamp
  }
}

export default Block
