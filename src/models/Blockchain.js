// Blockchain
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
  
}
export default Blockchain
