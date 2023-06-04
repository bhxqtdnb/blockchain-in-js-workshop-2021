# 实验报告模板

## 小组成员

- 2021131137-耿翔宇 （组长）
- 2021131138-刘骐宁
- 2021131139-徐睿骐
- 2021131140-曹梁
- 2021131153-谭子悦
- 2021131156-常爻羽


## 代码仓库链接

https://github.com/bhxqtdnb/blockchain-in-js-workshop-2021



## 第一课代码


### 代码 commint 地址

https://github.com/bhxqtdnb/blockchain-in-js-workshop-2021/commits


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)
file:///C:/Users/%E6%9F%92%E5%B0%8F%E6%B2%AB/AppData/Local/Temp/baiduyunguanjia/onlinedit/cache/0aa2909d0f5d17fd7f1bcb7d71bb961a/Snipaste_2023-05-11_21-00-50.png

file:///C:/Users/%E6%9F%92%E5%B0%8F%E6%B2%AB/AppData/Local/Temp/baiduyunguanjia/onlinedit/cache/eb76a3103e996d53fbb1ccb48d919623/Snipaste_2023-05-11_21-00-27.png


### 主观与讨论题内容

---



## 第一课代码


### 代码 commint 地址

https://github.com/bhxqtdnb/blockchain-in-js-workshop-2021


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)


### 主观与讨论题内容


---



## 第二课代码


### 代码 commint 地址

https://github.com/bhxqtdnb/blockchain-in-js-workshop-2021/commits/lesson1

### 代码截图

> 将截图上传至网盘，放入链接即可

file:///C:/Users/%E6%9F%92%E5%B0%8F%E6%B2%AB/AppData/Local/Temp/baiduyunguanjia/onlinedit/cache/bfa6367d12664a79897624ca6d112faa/Snipaste_2023-05-19_22-41-34.png

file:///C:/Users/%E6%9F%92%E5%B0%8F%E6%B2%AB/AppData/Local/Temp/baiduyunguanjia/onlinedit/cache/776564e30d275208d83f3dc02a155df4/Snipaste_2023-05-19_22-41-46.png

### 主观与讨论题内容链接
file:///C:/Users/%E6%9F%92%E5%B0%8F%E6%B2%AB/AppData/Local/Temp/baiduyunguanjia/onlinedit/cache/a70b2f0505895a6e3970b1995cfebe01
%E6%96%B0%E5%BB%BA%E6%96%87%E6%9C%AC%E6%96%87%E6%A1%A3%20(2).txt

### 主观与讨论题内容


51%攻击是指一个实体获得了区块链51%的哈希运算能力的控制权。

在区块链网络中，如果遇到两条冲突的链，会优先选择使用最长的链。因为它成功完成的交易最多，它是一个好的行为者的可能性就最高。获得超过51%的运算能力的人或组织可以比其他矿工更快地挖矿，可以快速创建最长的链，然后进行恶意操作。而区块链网络只会选择攻击者的链，因为它是最长的链。

通常，攻击者不会直接向区块链公布他们的区块，而是私下挖矿来创建自己的链。这样他们就可以在操纵公共区块链之前获得最长的链。在此期间，攻击者在真实的区块链上大肆的消费，但是不把这些消费记录写入到自己正在挖的区块链上，因此当发布自己的区块链时，由于51%的算力带来了比其他人更长的链，因此这个链会成为公共链，从而达到免费消费。一段时间后，攻击者会向网络公布他们的区块链版本，由于它比其他任何链都长，所以不得不被接受。

51%攻击会导致什么？
①修改交易
一旦侵略者拥有51%的哈希计算能力，他们可以修改由网络节点验证的交易。
②反向交易
攻击者掌权时发生的交易也可以被逆转，造成双重消费问题。
③垄断采矿
攻击者在向网络广播自己的版本之前，在自己的私人网络中阻止所有矿工的交易。这意味着攻击者基本上可以从网络中审查矿工，直到他们是唯一剩下的矿工，就创造了一个垄断。这将意味着区块链现在是中心化的，而以前的矿工奖励不复存在。

避免：
尽可能扩大节点的规模。
提高区块链中的加密哈希值，使节点更难被攻破
提高对区块链中的交易池的监控，及时发现异常交易信息

POW:
优点：

1）去中心化，将记账权公平的分派到其他节点。能够获得的币的数量，取决于挖矿贡献的有效工作量，多劳多得。

2）安全性高，破坏系统需要投入极大的成本，如果想作弊，要有超过51%的算力。因为作弊要付出一定成本，作弊者就会谨慎对待了。

3）公平，PoW 是非常公平的挖矿，任何计算机都可以进行挖矿。

4）安全，比 PoS 更难攻击

缺点：

1）PoW 挖矿涉及非常浪费的计算，会消耗大量电力并且对环境有害。

2）网络性能太低，需要等待多个确认，容易产生分叉，区块的确认共识达成的周期较长，不适合商业应用。

3）PoW算力集中化，慢慢的偏离了原来的去中心化轨道。

4）权力分裂，由矿工验证网络，持币人无法参与决定。

如何提高挖矿效率：

1、使用更好的硬件

比特币挖矿需要大量的计算能力和电力。因此，使用更好的硬件可以提高挖矿的效率。如：ASIC


2、选择适当的矿池

矿池是一组矿工的集合，他们合作挖掘比特币，并分享收益。选择一个具有良好声誉的矿池可以提高挖矿效率并减少挖矿风险。

3、优化矿机设置

设置矿机的频率和功率，以确保它们的运行稳定和高效。通常情况下，更高的频率可以提高挖矿速度，但也会增加电力消耗。因此，需要找到一个平衡点，以提高挖矿效率并节省电力成本。


4、优化电力成本

例如：购买便宜的电力、使用节能型矿机、适当降低矿机的功率消耗等等。优化电力成本可以在挖矿中获得更大的利润，更快地回本。


5、使用专业挖矿软件

6、掌握挖矿技巧

7、确认市场的策略

虚拟货币市场在不断波动，了解市场的走势，有助于选择挖矿策略、购买挖矿设备。


---


## 第三课代码


### 代码 commint 地址

https://github.com/bhxqtdnb/blockchain-in-js-workshop-2021/commit/f80cf48a8286d44ac93222d9c0a62a0abad78376


### 代码截图

链接：https://pan.baidu.com/s/1v9FvY-znT-zcxftbXd0HJA?pwd=nuex 
提取码：nuex

### 主观与讨论题内容



---




## 第四课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

链接：https://pan.baidu.com/s/1K6DUNxCMLCzUh3azeyqqnw?pwd=6zi2 
提取码：6zi2

### 主观与讨论题内容



---




## 第五课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)


### 主观与讨论题内容



---




## 第六课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

> 将截图上传至网盘，放入链接即可

![](图片链接放这里)


### 主观与讨论题内容



---


## 结课报告





