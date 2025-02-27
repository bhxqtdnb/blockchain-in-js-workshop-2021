// Blockchain
import UTXO from "./UTXO.js"
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name) {
    this.name=name
    this.genesis=null
    this.blocks={}
  }

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    var longestChain = []
    for(let hash in this.blocks){
      var currentBlock = this.blocks[hash]
      var chain = [currentBlock]
      while(currentBlock.previousHash != this.genesis){
        currentBlock = currentBlock.Blockchain.blocks[currentBlock.previousHash]
        chain.unshift(currentBlock)
      }
      if(chain.length > longestChain.length){
        longestChain = chain
      }
    }
    return longestChain
  }

  containsBlock (block) {
    return this.blocks[block.hash] != null
  }

  maxHeightBlock () {
    // return Block
    let maxHeightBlock = this.blocks.element(0)
    for (let hash in this.blocks) {
      currentBlock = this.blocks[hash]
      if (currentBlock.height > maxHeightBlock.height) {
        maxHeightBlock = currentBlock
      }
    }
    return maxHeightBlock
  }
  
  //添加区块
  _addBlock (block) {
    if (!block.isValid() || this.containsBlock(block)) {
      return
    } else {
      //将新区块添加至blocks
      this.blocks[block.hash] = block
      //添加 UTXO 快照与更新相关逻辑
      //复制新区块前一个区块交易池
      var preUTXOPool = block.getPreviousBlock().utxoPool.clone()
      block.utxoPool.utxos = preUTXOPool
      //添加创币交易
      let coinbaseUTXO = new UTXO(block.coinbaseBeneficiary, 12.5)
      //在交易池添加该笔交易
      block.utxoPool._addUTXO(coinbaseUTXO)
    }
  }

    //获取父区块的utxoPool结果
    getPreBlockUTXO (preHash) {
      if (preHash == "root") {
        return new UTXOPool(new Map())
      }
      return this.blocks[preHash].utxoPool
    }
  
    //根据coinBase交易更新UTXOPOOL的状态,即添加一个矿工的utxo
    coinBaseTransaction (preHash, coinbaseBeneficiary) {
      //用父区块的utxoPool来更新  
      let Pool = this.getPreBlockUTXO(preHash)
  
      Pool.addUTXO(coinbaseBeneficiary, 12.5)
      return Pool
    }
  
}
export default Blockchain
