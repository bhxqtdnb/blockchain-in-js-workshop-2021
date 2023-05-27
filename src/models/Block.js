class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含

  */
  constructor(blockchain,previoushash,height,hash) {
    this.blockchain=blockchain
    this.previousHash=previoushash
    this.height=height
    this.hash=hash
    this.coinbaseBeneficiary = miner
    this.utxoPool = new UTXOPool({})
  }

  getPreviousBlock () {
    // 判断是否为高度为1的区块
    if (this.height == 1) {
      return this.blockchain.genesis
    }
    return this.blockchain.blocks[this.parentHash]
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
