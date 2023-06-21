import './UTXO.js'
import UTXO from './UTXO.js'
import Transaction from './Transaction.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos = utxos
  }

  addUTXO (utxo) {
    // 将新的交易添加进UTXO池中并更新余额
    if (this.utxos[utxo.publicKey] != null) {
      this.utxos[utxo.publicKey] = { amount: this.utxos[utxo.publicKey].amount + utxo.amount }
    } else {
      this.utxos[utxo.publicKey] = { amount: utxo.amount }
    }
  }

  // 处理交易函数
  handleTransaction (trx, miner) {
    if (!this.isValidTransaction(trx)) {
      return false
    }
    //对输入进行扣除
    this.utxos[trx.in].amount -= (trx.amount + trx.fee)
    //给矿工小费fee lesson6
    this.utxos[miner].amount += trx.fee
    //给输出转账
    if (this.utxos[trx.out]) {
      this.utxos[trx.out].amount += trx.amount
    } else {
      this.utxos[trx.out] = new UTXO(trx.amount)
    }
    return true
  }


  // 验证交易合法性
  /**
   * 验证余额
   * 返回 bool 
   */
  isValidTransaction (miner, num) {

    return this.utxos[miner].amount > num
  }
  // 添加交易函数
  /**
   * 将交易的信息更新至 UTXOPool 中
   */
  _addUTXO (utxo) {
    // 根据公钥判断当前utxo池是否为空
    // 如果utxo池不为空，新增该utxo的amount
    if (this.utxos[utxo.publicKey] != null) {
      this.utxos[utxo.publicKey] = { amount: this.utxos[utxo.publicKey].amount + utxo.amount }
      // 若该utxo为utxo池第一个utxo，则令该utxo的amount等于交易池amount
    } else {
      this.utxos[utxo.publicKey] = { amount: utxo.amount }
    }
  }

  // 将当前 UXTO 的副本克隆
  clone () {
    return this.utxos
  }
}

export default UTXOPool