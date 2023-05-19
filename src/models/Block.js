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

  isValid () {
    const leadingZero = '0'.repeat(DIFFICULTY)

    return (this.nonce + "").startsWith(leadingZero)
  }
  setNonce (nonce) {
    this.nonce = nonce
  }
}

export default Block
export const DIFFICULTY = 3
