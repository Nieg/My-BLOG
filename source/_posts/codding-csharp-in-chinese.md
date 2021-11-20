---
title: "用汉字编写C#代码"
date: 2021-11-18 16:04:29
tags: [C#, Lambda表达式, 基础, doge] 
categories: 后端
typora-root-url: ..
---
知乎对于我们这些网上冲浪的选手来说，真的是个快乐源泉。
如果大家想要用中文编码，第一个想到的是什么？ 易语言？ visual basic 的中文版。对于这种想法，我只能说，格局，格局小了。
![格局小了](/images/meme/patterns/tinyone.jpg)
<!-- more -->
现在这个年代，至少还是得玩点更高级的。就像知乎问答[《如何评价用汉字编写C#代码的公司？》](https://bbs.csdn.net/topics/380159364)那样。这个问答中的公司指的是N年前的CSDN神贴 [《跳槽误入一家用汉字编写C#代码的公司，望各位大师指点~》](https://bbs.csdn.net/topics/380159364)中的公司。
![格局打开](/images/meme/patterns/open.jpg)
## 万恶之源
![CSDN-中文编程-疑问图](/images/posts/codding-csharp-in-chinese/coding-in-csharp-csdn-screenshot.jpg)

## 开干
最近赋闲在家，也在做自我调整，找工作过程中，一边整理之前的工作资料，看看自己技能点，哪些继续学习，哪些打算废弃等等。这次换工作牵扯着我之后的职业规划，行业选择。也有很多以前都没有考虑过的问题，需要在下一份工作中做好决定，毕竟从年纪上也迈入了老工程师的行列了，对于我deadline是第一生产力。邀约，面试，offer选择，家里人催促，各方压力也挺大的。顶着这些压力，想搞点事情解解压，还是写个代码分散下注意力吧。
然后想起了之前看过的这帖子，试着把帖子上的内容实现了一下。
![放弃思考](/images/meme/fav/Give-up-thinking.jpg)
先根据帖子整理下需求点：

* “用汉字”
* “不光是类，还有关键字也进行了中文化。”
* “全部用Lambda实现”
* “而他们的官方解释有二（一、文章统一都是汉字；二、c#的关键字效率低，他们有更好的方式)”

除了最后的 “更好的方式” 我觉得不太可能实现外。大部分也有比较容易实现的思路。
为什么不太可能实现

* 重写关键字本身是吃力不讨好的，为了编码方便，你得做对新关键字和对应的类型做转换包括隐式和显式。

* 自己定义的struct包裹了原来的类型更耗性能。

* System.Linq 下基于IEnumerable [使用 yield 关键字返回数据的方案](https://referencesource.microsoft.com/#System.Core/System/Linq/Enumerable.cs)，远比文章中的叠代器实现得优雅和功能强大。

但是既然已经接受了要用汉字搞事情的设定，还是开搞吧。
![challenge-accepted](/images/meme/fav/challenge-accepted.jpg)

## 实现
首先是关键字的重写：
int->整型，long->长整型。
类型转换还得符合原来的关键字的表现，例如：

```c#
public static implicit operator 整型(int 值);
public static implicit operator int(整型 值);

public static implicit operator 长整型(long 值);
public static implicit operator long(长整型 值);

public static implicit operator 长整型(整型 值);
public static explicit operator 整型(长整型 值);

//上述代码实现后，可以让以下代码成立：
整型 整值1=1235; //int intVal1=123;
长整型 长整值1=整值1; //long longVal1=intVal1;
整型 整值2=(整型)长整值1; int intVal2=(int)longVal1;
```

然后是判断和异常的重写，实现的 if else if，try catch finally 结构

```c#
异常.对以下语句进行异常检测(() =>
{
    判断.如果是(false).则(() =>
    {
    }).否则如果是(true).则(() =>
    {
    }).否则(() =>
    {
    });
}).发现异常则<被除零异常>(异常 =>
{
}).发现异常则(异常 =>
{
}).最终执行(() =>
{
});
```

要做的东西太多了，最后放一个主程序的代码：

```C#
public class 登录信息
{
    public 字符串 姓名 { get; set; }
    public 布尔 是有效用户 { get; set; }
    public 整型 总工作年限 { get; set; }
    public 整型 总获奖次数 { get; set; }
    public override string ToString()
    {
        return $"姓名[{姓名}],有效[{是有效用户}],工作年限[{总工作年限}],获奖次数[{总获奖次数}]";
    }
}

遍历器<登录信息>.计数遍历(详细信息集合).从(0).到(详细信息集合.长度()).每隔(1).执行((当前行索引, 登陆信息) =>
{
    异常.对以下语句进行异常检测(() =>
    {
        控制台.输出字符串("{0}获奖次数:{1}", 登陆信息.姓名, 登陆信息.总获奖次数);

        判断.如果是(登陆信息.总获奖次数 > 0).则(() =>
        {
            控制台.输出字符串("挺优秀的，拿过奖。");            
        }).否则如果是(登陆信息.总工作年限<3).则(() =>
        {
            控制台.输出字符串("新员工，未来可期。");            
        }).否则(() =>
        {
            控制台.输出字符串("要加把劲了。");            
        });                    
        控制台.输出字符串("尝试计算获奖一次大概花了多少年。");
        整型 平均时间 = 登陆信息.总工作年限 / 登陆信息.总获奖次数;
        
    }).发现异常则<被除零异常>(异常 =>
    {
        控制台.输出字符串("发生被除零异常");
    }).发现异常则(异常 =>
    {
        控制台.输出字符串("曾经出现过异常");

    }).最终执行(() =>
    {
        控制台.输出字符串("介绍结束\n");
    });
});
```
## 后记

看了看上面的代码，我大概知道英语为母语的外国人写代码的时候，大概是怎样的一种感觉了。不过写代码时切输入法是真的痛。
![](/images/meme/fav/Hematemesis.jpg)
可惜C# 不支持 C++ 的 #define 不然会更好玩。

我目前只是实现了 int，long，临时实现了String，但这个实现与原生string在赋值上的表现不一致，也不是基于 字符 结构重新开发的一个新字符串。
目前也只实现了这些部分功能，看看什么时候需要再解压的时候，继续来这里搞后续。包括上面说的string啊等。后续可能会进一步优化好各个基础类型，包括浮点型，双精度浮点型，decimal，byte等。 然后常用的 system下的转换方法、编码方法，循环等。然后搞网络。搞。。。

这玩意实际上是个无底洞啊。

## 源码

此文章所有代码都放在了我的 github 仓库 [Nieg/codedemo4blog](https://github.com/Nieg/codedemo4blog/tree/main/gh-pages/codding-csharp-in-chinese/) 下。



-EOF-