import {type DefaultTheme} from "vitepress";

const iconText = (name, logo, logoColor, label, labelColor) => {
    const urlTemplate = `https://img.shields.io/badge/-${label}-${labelColor}?logo=${logo}&logoColor=${logoColor}`
    return `<span class="side-iterm-text">${name}<img src="${urlTemplate}"></span>`
}

const sidebar: DefaultTheme.Sidebar = {
    '/md/network': generateNetworkSidebar(),
    '/md/algo': generateDataStructureAndAlgoSidebar(),
    '/md/os': generateOSSideBar(),
    '/md/design-pattern': generateDesignPatternSidebar(),
    '/md/distributed-system': generateDistributedSystemSidebar(),
    '/md/load-balance': generateLoadBalanceSidebar(),
    '/md/java': generateJavaSidebar(),
    '/md/frame/spring-boot': generateSpringBootSidebar(),
    '/md/frame/spring-cloud': generateSpringCloudSidebar(),
    '/md/frame/dubbo': generateDubboSidebar(),
    '/md/frame/netty': generateNettySidebar(),
    '/md/frame/mybatis': generateMybatisSidebar(),
    'md/exp-log/': generateExpLogSidebar(),

}

// network sidebar
function generateNetworkSidebar() {
    return [
        {
            text: '网络',
            items: [
                {text: '网络体系结构模型', link: '/md/network/01-网络体系结构模型.md'},
                {text: '应用层', link: '/md/network/02-应用层.md'},
                {text: '传输层', link: '/md/network/03-传输层.md'},
                {text: '网络层', link: '/md/network/04-网络层.md'},
            ]
        }]
}

// data structure & algo
function generateDataStructureAndAlgoSidebar() {
    return [
        {
            text: iconText('数据结构与算法', 'OpenJDK', 'FFF', 'Java','F78C40'),
            items: [
                {text: '基本理论', link: '/md/algo/Leetcode随想录00-基本理论.md'},
                {
                    text: '数组',
                    collapsed: true,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>704.二分查找|27.移除元素',
                            link: '/md/algo/Leetcode随想录01-数组||704.二分查找|27.移除元素.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>977.有序数组的平方|209.长度最小的子数组|59.螺旋矩阵II',
                            link: '/md/algo/Leetcode随想录02-数组||977.有序数组的平方|209.长度最小的子数组|59.螺旋矩阵II.md'
                        },
                    ]
                },
                {
                    text: '链表',
                    collapsed: true,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>203.移除链表元素|707.设计链表|206.反转链表',
                            link: '/md/algo/Leetcode随想录03-链表||203.移除链表元素|707.设计链表|206.反转链表.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>24.两两交换链表中的节点|19.删除链表的倒数第N个节点|02.07.链表相交|142.环形链表II',
                            link: '/md/algo/Leetcode随想录04-链表||24.两两交换链表中的节点|19.删除链表的倒数第N个节点|02.07.链表相交|142.环形链表II.md'
                        },
                    ]
                },
                {text: '数组链表复盘', link: '/md/algo/Leetcode随想录05-数组链表复盘.md'},
                {
                    text: '哈希表',
                    collapsed: true,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>242.有效的字母异位词|349.两个数组的交集|202.快乐数|1.两数之和',
                            link: '/md/algo/Leetcode随想录06-哈希表||242.有效的字母异位词|349.两个数组的交集|202.快乐数|1.两数之和.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>454.四数相加II|383.赎金信|15.三数之和|18.四数之和',
                            link: '/md/algo/Leetcode随想录07-哈希表||454.四数相加II|383.赎金信|15.三数之和|18.四数之和.md'
                        },
                    ]
                },
                {
                    text: '字符串',
                    collapsed: true,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>344.反转字符串|541.反转字符串II|路径加密|151.翻转字符串里的单词|动态口令',
                            link: '/md/algo/Leetcode随想录08-字符串||344.反转字符串|541.反转字符串II|路径加密|151.翻转字符串里的单词|动态口令.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>28.找出字符串中第一个匹配项的下标|459.重复的子字符串',
                            link: '/md/algo/Leetcode随想录09-字符串|28.找出字符串中第一个匹配项的下标|459.重复的子字符串.md'
                        },
                    ]
                },

                {text: '字符串哈希表复盘', link: '/md/algo/Leetcode随想录09-字符串哈希表复盘.md'},
                {
                    text: '栈与队列',
                    collapsed: true,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>232.用栈实现队列|225.用队列实现栈',
                            link: '/md/algo/Leetcode随想录10-栈与队列||232.用栈实现队列|225.用队列实现栈.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>20.有效的括号|1047.删除字符串中的所有相邻重复项|150.逆波兰表达式求值',
                            link: '/md/algo/Leetcode随想录11-栈与队列||20.有效的括号|1047.删除字符串中的所有相邻重复项|150.逆波兰表达式求值.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>239.滑动窗口最大值|347.前K个高频元素',
                            link: '/md/algo/Leetcode随想录12-栈与队列||239.滑动窗口最大值|347.前K个高频元素.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>栈与队列复盘',
                            link: '/md/algo/Leetcode随想录12-栈与队列复盘.md'
                        }
                    ]
                },

                {
                    text: '二叉树',
                    collapsed: true,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>145.二叉树的后序遍历|94.二叉树的中序遍历',
                            link: '/md/algo/Leetcode随想录13-二叉树||144.二叉树的前序遍历|145.二叉树的后序遍历|94.二叉树的中序遍历.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>层序遍历10题|226.翻转二叉树|101.对称二叉树II',
                            link: '/md/algo/Leetcode随想录14-二叉树||层序遍历10题|226.翻转二叉树|101.对称二叉树II.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>104.二叉树的最大深度|559.n叉树的最大深度|111.二叉树的最小深度|222.完全二叉树的节点个数',
                            link: '/md/algo/Leetcode随想录15-二叉树||104.二叉树的最大深度|559.n叉树的最大深度|111.二叉树的最小深度|222.完全二叉树的节点个数.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>110.平衡二叉树|257.二叉树的所有路径|404.左叶子之和',
                            link: '/md/algo/Leetcode随想录16-二叉树||110.平衡二叉树|257.二叉树的所有路径|404.左叶子之和.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>513.找树左下角的值|112.路径总和|113.路径总和II｜106.从中序与后序遍历序列构造二叉树|105.从前序与中序遍历序列构造二叉树',
                            link: '/md/algo/Leetcode随想录17-二叉树||513.找树左下角的值|112.路径总和|113.路径总和II｜106.从中序与后序遍历序列构造二叉树|105.从前序与中序遍历序列构造二叉树.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>654.最大二叉树|617.合并二叉树|700.二叉搜索树中的搜索|98.验证二叉搜索树',
                            link: '/md/algo/Leetcode随想录18-二叉树||654.最大二叉树|617.合并二叉树|700.二叉搜索树中的搜索|98.验证二叉搜索树.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>530.二叉搜索树的最小绝对差|501.二叉搜索树中的众数|236.二叉搜索树的最近公共祖先',
                            link: '/md/algo/Leetcode随想录19-二叉树||530.二叉搜索树的最小绝对差|501.二叉搜索树中的众数|236.二叉搜索树的最近公共祖先.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>235.二叉搜索树的最近公共祖先|701.二叉搜索树中的插入操作|450.删除二叉搜索树的节点',
                            link: '/md/algo/Leetcode随想录20-二叉树||235.二叉搜索树的最近公共祖先|701.二叉搜索树中的插入操作|450.删除二叉搜索树的节点.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>669.修剪二叉搜索树|108.将有序数组转换为二叉搜索树|538.把二叉搜索树转换为累加树',
                            link: '/md/algo/Leetcode随想录21-二叉树||669.修剪二叉搜索树|108.将有序数组转换为二叉搜索树|538.把二叉搜索树转换为累加树.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>二叉树复盘',
                            link: '/md/algo/Leetcode随想录21-二叉树复盘.md'
                        },
                    ]
                },
                {
                    text: '回溯',
                    collapsed: true,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>77.组合',
                            link: '/md/algo/Leetcode随想录22-回溯||77.组合.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>17.电话号码的字母组合',
                            link: '/md/algo/Leetcode随想录23-回溯||216.组合总和||||17.电话号码的字母组合.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>40.组合总和II|131.分割回文串',
                            link: '/md/algo/Leetcode随想录24-回溯||39.组合总和|40.组合总和II|131.分割回文串.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>93.复原IP地址|78.子集|90.子集||',
                            link: '/md/algo/Leetcode随想录25-回溯||93.复原IP地址|78.子集|90.子集||.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>491.递增子序列|46.全排列|47.全排列II',
                            link: '/md/algo/Leetcode随想录26-回溯||491.递增子序列|46.全排列|47.全排列II.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>332.重新安排行程|51.N皇后|37.解数独',
                            link: '/md/algo/Leetcode随想录27-回溯||332.重新安排行程|51.N皇后|37.解数独.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>回溯复盘',
                            link: '/md/algo/Leetcode随想录27-回溯复盘.md'
                        },
                    ]
                },
                {
                    text: '贪心算法',
                    collapsed: true,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>455.分发饼干|376.摆动序列|53.最大子序和',
                            link: '/md/algo/Leetcode随想录28-贪心算法||455.分发饼干|376.摆动序列|53.最大子序和.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>122.买卖股票的最佳时机II|55.跳跃游戏|45.跳跃游戏II',
                            link: '/md/algo/Leetcode随想录29-贪心算法||122.买卖股票的最佳时机II|55.跳跃游戏|45.跳跃游戏II.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>1005.K次取反后最大化的数组和|134.加油站|135.分发糖果',
                            link: '/md/algo/Leetcode随想录30-贪心算法||1005.K次取反后最大化的数组和|134.加油站|135.分发糖果.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>860.柠檬水找零|406.根据身高重建队列|452.用最少数量的箭引爆气球',
                            link: '/md/algo/Leetcode随想录31-贪心算法||860.柠檬水找零|406.根据身高重建队列|452.用最少数量的箭引爆气球.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>435.无重叠区间|763.划分字母区间|56.合并区间',
                            link: '/md/algo/Leetcode随想录32-贪心算法||435.无重叠区间|763.划分字母区间|56.合并区间.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>738.单调递增的数字|714.买卖股票的最佳时机含手续费|968.监控二叉树',
                            link: '/md/algo/Leetcode随想录33-贪心算法||738.单调递增的数字|714.买卖股票的最佳时机含手续费|968.监控二叉树.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>贪心算法复盘',
                            link: '/md/algo/Leetcode随想录33-贪心算法复盘.md'
                        },
                    ]
                },
                {
                    text: '动态规划',
                    collapsed: true,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>509.斐波那契数|70.爬楼梯|746.使用最小花费爬楼梯',
                            link: '/md/algo/Leetcode随想录34-动态规划||509.斐波那契数|70.爬楼梯|746.使用最小花费爬楼梯.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>62.不同路径|63.不同路径II',
                            link: '/md/algo/Leetcode随想录35-动态规划||62.不同路径|63.不同路径II.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>343.整数拆分|96.不同的二叉搜索树',
                            link: '/md/algo/Leetcode随想录36-动态规划||343.整数拆分|96.不同的二叉搜索树.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>416.分割等和子集',
                            link: '/md/algo/Leetcode随想录37-动态规划||416.分割等和子集.md'
                        }, {
                            text: '<span class="iterm-symbol"></span>1049.最后一块石头的重量II|494.目标和|474.一和零',
                            link: '/md/algo/Leetcode随想录38-动态规划||1049.最后一块石头的重量II|494.目标和|474.一和零.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>70.爬楼梯(进阶)|322.零钱兑换|279.完全平方数',
                            link: '/md/algo/Leetcode随想录40-动态规划||70.爬楼梯(进阶)|322.零钱兑换|279.完全平方数.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>139.单词拆分',
                            link: '/md/algo/Leetcode随想录41-动态规划||139.单词拆分.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>198.打家劫舍|213.打家劫舍|337.打家劫舍',
                            link: '/md/algo/Leetcode随想录42-动态规划||198.打家劫舍|213.打家劫舍|337.打家劫舍.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>121.买卖股票的最佳时机|122.买卖股票的最佳时机II',
                            link: '/md/algo/Leetcode随想录43-动态规划||121.买卖股票的最佳时机|122.买卖股票的最佳时机II.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>123.买卖股票的最佳时机III',
                            link: '/md/algo/Leetcode随想录44-动态规划||123.买卖股票的最佳时机III.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>309.买卖股票的最佳时机含冷冻期',
                            link: '/md/algo/Leetcode随想录45-动态规划||309.买卖股票的最佳时机含冷冻期.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>300.最长递增子序列|674.最长连续递增序列|718.最长重复子数组',
                            link: '/md/algo/Leetcode随想录46-动态规划||300.最长递增子序列|674.最长连续递增序列|718.最长重复子数组.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>1143.最长公共子序列|1035.不相交的线|53.最大子序和',
                            link: '/md/algo/Leetcode随想录47-动态规划||1143.最长公共子序列|1035.不相交的线|53.最大子序和.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>392.判断子序列|115.不同的子序列',
                            link: '/md/algo/Leetcode随想录48-动态规划||392.判断子序列|115.不同的子序列.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>583.两个字符串的删除操作|72.编辑距离',
                            link: '/md/algo/Leetcode随想录49-动态规划||583.两个字符串的删除操作|72.编辑距离.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>647.回文子串|516.最长回文子序列|5.最长回文串',
                            link: '/md/algo/Leetcode随想录50-动态规划||647.回文子串|516.最长回文子序列|5.最长回文串.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>动态规划复盘',
                            link: '/md/algo/Leetcode随想录51-动态规划复盘.md'
                        },
                    ]
                },
                {
                    text: '单调栈',
                    collapsed: true,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>739.每日温度|84.柱状图中最大的矩形|42.接雨水',
                            link: '/md/algo/Leetcode随想录52-单调栈||739.每日温度|84.柱状图中最大的矩形|42.接雨水.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>496.下一个更大元素 I|503.下一个更大元素 II',
                            link: '/md/algo/Leetcode随想录53-单调栈||496.下一个更大元素 I|503.下一个更大元素 II.md'
                        },
                    ]
                },
            ]
        },
    ]
}

function generateOSSideBar(){
    return [
        {
            text: '操作系统',
            items: [
                {text: '操作系统结构', link: '/md/os/01-开篇词.md'},
                {text: '进程与线程', link: '/md/os/02-进程与线程.md'},
                {text: '内存管理', link: '/md/os/03-内存管理.md'},
                // {text: '文件管理', link: '/md/os/04-文件管理.md'},
                // {text: 'I/O管理', link: '/md/os/05-IO管理.md'},
            ]
        }]
}

function generateDesignPatternSidebar() {
    return [
        {
            text: iconText('设计模式', 'textpattern','FFDA44', 'Design_Pattern', 'Grey'),
            items: [
                {text: '概论', link: '/md/design-pattern/00-前言之六大设计原则.md'},
                {
                    text: '创建型设计模式',
                    collapsed: false,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>工厂方法模式',
                            link: '/md/design-pattern/01-创建型模式之工厂方法模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>抽象工厂模式',
                            link: '/md/design-pattern/02-创建型模式之抽象工厂模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>建造者模式',
                            link: '/md/design-pattern/03-创建型模式之建造者模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>原型模式',
                            link: '/md/design-pattern/04-创建型模式之原型模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>单例模式',
                            link: '/md/design-pattern/05-创建型模式之单例模式.md'
                        },
                    ]
                },
                {
                    text: '结构型设计模式',
                    collapsed: false,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>适配器模式',
                            link: '/md/design-pattern/06-结构型模式之适配器模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>桥接模式',
                            link: '/md/design-pattern/07-结构型模式之桥接模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>组合模式',
                            link: '/md/design-pattern/08-结构型模式之组合模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>装饰器模式',
                            link: '/md/design-pattern/09-结构型模式之装饰器模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>外观模式',
                            link: '/md/design-pattern/10-结构型模式之外观模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>享元模式',
                            link: '/md/design-pattern/11-结构型模式之享元模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>代理模式',
                            link: '/md/design-pattern/12-结构型模式之代理模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>门面模式',
                            link: '/md/design-pattern/13-结构型模式之门面模式.md'
                        },
                    ]
                },
                {
                    text: '行为型设计模式',
                    collapsed: false,
                    items: [
                        {
                            text: '<span class="iterm-symbol"></span>责任链模式',
                            link: '/md/design-pattern/14-行为型模式之责任链模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>命令模式',
                            link: '/md/design-pattern/14-行为型模式之命令模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>迭代器模式',
                            link: '/md/design-pattern/15-行为型模式之迭代器模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>备忘录模式',
                            link: '/md/design-pattern/17-行为型模式之备忘录模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>观察者模式',
                            link: '/md/design-pattern/18-行为型模式之观察者模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>状态模式',
                            link: '/md/design-pattern/19-行为型模式之状态模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>策略模式',
                            link: '/md/design-pattern/20-行为型模式之策略模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>模板模式',
                            link: '/md/design-pattern/21-行为型模式之模板模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>访问者模式',
                            link: '/md/design-pattern/22-行为型模式之访问者模式.md'
                        },
                        {
                            text: '<span class="iterm-symbol"></span>解释器模式',
                            link: '/md/design-pattern/23-行为型模式之解释器模式.md'
                        },

                    ]
                },
            ]
        },
    ]
}

function generateLoadBalanceSidebar(){
    return [
        {
            text: '负载均衡',
            items: [
                {text: '负载均衡模型', link: '/md/load-balance/负载均衡模型.md'},
                {text: '负载均衡算法', link: '/md/load-balance/负载均衡算法.md'}
            ]

        }
    ]
}

function generateDistributedSystemSidebar(){
    return [
        {
            text: '分布式',
            items: [
                {text: 'CAP原则', link: '/md/distributed-system/CAP原则.md'},
                {text: '分布式事务', link: '/md/distributed-system/分布式事务.md'},
                {text: '分布式锁', link: '/md/distributed-system/分布式锁.md'},
                {text: '分布式一致性算法', link: '/md/distributed-system/一致性算法.md'}
            ]
        }
    ]
}

function generateJavaSidebar(){
    return [
        {
            text: iconText('Java', 'OpenJDK', 'FFF', 'Java','F78C40'),

            items: [
                {
                    text: 'Java基础',
                    collapsed: true,
                    items: [
                        {text:'基础',link: '/md/java/Java基础/01-基础.md'},
                        {text:'面向对象编程',link: '/md/java/Java基础/02-面向对象编程.md'},
                        {text:'异常处理',link: '/md/java/Java基础/03-异常处理.md'},
                        {text:'日志与断言',link: '/md/java/Java基础/04-日志与断言.md'},
                        {text:'Array',link: '/md/java/Java基础/05-Arrays.md'},
                        {text:'List',link: '/md/java/Java基础/06-List.md'},
                        {text:'Queue',link: '/md/java/Java基础/07-Queue.md'},
                        {text:'Map',link: '/md/java/Java基础/08-Map.md'},
                        {text:'Set',link: '/md/java/Java基础/09-Set.md'},
                        {text:'I/O',link: '/md/java/Java基础/10-IO.md'},
                        // {text:'Lambda表达式',link: '/md/java/Java基础/11-lambda表达式.md'},
                        // {text:'Java新特性(8|17)',link: '/md/java/Java基础/12-新特性.md'},

                    ]
                },
                {
                    text: 'Java并发',
                    collapsed: true,
                    items: [
                        {text: '线程', link: '/md/java/Java并发/01-线程.md'},
                        {text: '线程池', link: '/md/java/Java并发/08-线程池.md'},
                        {text:'volatile',link: '/md/java/Java并发/02-volatile.md'},
                        {text:'synchronized',link: '/md/java/Java并发/03-synchronized.md'},
                        {text:'CAS',link: '/md/java/Java并发/05-CAS.md'},
                        {text:'AQS',link: '/md/java/Java并发/06-AQS.md'},
                        {text:'JUC中的锁',link: '/md/java/Java并发/04-JUC中的锁.md'},
                        {text:'并发容器',link: '/md/java/Java并发/07-并发容器.md'},
                    ]
                },
                {
                    text: 'JVM',
                    collapsed: true,
                    items: [
                        {text:'内存结构',link: '/md/java/JVM/01-内存结构.md'},
                        {text:'垃圾收集',link: '/md/java/JVM/02-垃圾收集.md'},
                        {text:'性能监控与调优',link: '/md/java/JVM/04-性能监控与调优.md'},
                        {text:'字节码与类加载',link: '/md/java/JVM/03-字节码与类加载.md'},
                    ]
                },
            ]
        }
    ]
}

function generateSpringBootSidebar(){
    return [
        {
            // https://img.shields.io/badge/-Spring%20Boot-6DB33F?logo=Spring-Boot&logoColor=FFF
            // https://springdoc.cn/spring-boot/index.html
            text: iconText('Spring Boot', 'Spring-Boot', 'FFF', 'Spring%20Boot','6DB33F'),
            items: [
                // {text: '简单入门', link: '/md/frame/spring-boot/01-简单入门'},
                // {text: '使用Spring Boot', link: '/md/frame/spring-boot/02-使用Spring Boot'},
                {text: '核心特性', link: '/md/frame/spring-boot/03-核心特性'},
                {text: '整合常用开发场景', link: '/md/frame/spring-boot/04-整合常用开发场景'},
                {text: '容器镜像支持', link: '/md/frame/spring-boot/08-容器镜像支持'},
                // {text: '生产就绪功能', link: '/md/frame/spring-boot/09-生产就绪功能'},
                // {text: '应用部署', link: '/md/frame/spring-boot/10-应用部署'},
                // {text: 'GraalVM原生镜像支持', link: '/md/frame/spring-boot/11-GraaIVM原生镜像支持'},
                // {text: '其他', link: '/md/frame/spring-boot/12-其他'},
            ]
        }
    ]
}

function generateSpringCloudSidebar(){
    return [
        {
            //https://img.shields.io/badge/-Spring-6DB33F?logo=Spring&logoColor=FFF
            text: iconText('Spring Cloud', 'Spring', 'FFF', 'Spring%20Cloud','6DB33F'),
            items: [
                {text: '概览', link: '/md/frame/spring-cloud/01-guide'},
                {text: 'Spring Cloud Config', link: '/md/frame/spring-cloud/02-Spring Cloud Config'},
                {text: 'Spring Cloud Alibaba', link: '/md/frame/spring-cloud/04-Spring Cloud Alibaba'},
                {text: 'Spring Cloud Gateway', link: '/md/frame/spring-cloud/05-Spring Cloud Gateway'},
                {text: 'Spring Cloud OpenFeign', link: '/md/frame/spring-cloud/06-Spring Cloud OpenFeign'},
                {text: 'Spring Cloud Bus', link: '/md/frame/spring-cloud/03-Spring Cloud Bus'},
                {text: 'Spring Cloud Consul', link: '/md/frame/spring-cloud/07-Spring Cloud Consul'},
                {text: 'Spring Cloud Security', link: '/md/frame/spring-cloud/08-Spring Cloud Security'},
            ]
        }
    ]
}

function generateDubboSidebar(){
    return [
        {
            text: 'Dubbo',
            collapsed: false,
            items: [
                {text: '概览', link: '/md/frame/dubbo/01-开篇词.md'},
                {text: '入门使用', link: '/md/frame/dubbo/02-入门使用.md'},
                {text: '核心特性', link: '/md/frame/dubbo/03-核心特性.md'},
            ]
        }
    ]
}

function generateNettySidebar(){
    return [
        {
            text: 'Netty',
            items: [
                {text: '开篇词', link: '/md/frame/netty/01-开篇词.md'},
                {text: '初识Netty', link: '/md/frame/netty/02-初识Netty.md'},
                {text: '引导器', link: '/md/frame/netty/03-引导器.md'},
                {text: '事件调度层', link: '/md/frame/netty/04-事件调度层.md'},
                {text: '服务编排层', link: '/md/frame/netty/05-服务编排层.md'},
                {text: '粘包拆包', link: '/md/frame/netty/06-粘包拆包.md'},
                {text: '自定义协议通信', link: '/md/frame/netty/07-自定义协议通信.md'},
                {text: '解码器', link: '/md/frame/netty/08-解码器.md'},
                {text: '数据传输', link: '/md/frame/netty/09-数据传输.md'},
                {text: 'Netty内存管理', link: '/md/frame/netty/10-Netty内存管理.md'},
                {text: '对象池技术', link: '/md/frame/netty/11-对象池技术.md'},
                {text: 'Netty零拷贝技术', link: '/md/frame/netty/12-Netty零拷贝技术.md'},
            ]
        }
    ]
}

function generateMybatisSidebar(){
    return [
        {
            // https://img.shields.io/badge/-Hibernate-59666C?logo=Hibernate&logoColor=FFF
            text: iconText('Mybatis', '', 'FFF', 'Mybatis', '59666C'),
            items: [
                {text: '开篇词', link: '/md/frame/mybatis/01-开篇词'},
                {text: '配置', link: '/md/frame/mybatis/02-配置'},
                {text: 'XML映射器', link: '/md/frame/mybatis/03-XML映射器'},
                {text: '动态SQL', link: '/md/frame/mybatis/04-动态SQL'},
                {text: 'SQL语句构建器', link: '/md/frame/mybatis/05-SQL语句构建器'},
                {text: '缓存', link: '/md/frame/mybatis/06-缓存'},
            ]
        }
    ]
}

function generateExpLogSidebar(){
    return [
        {
            text: '经验日志',
            collapsed: false,
            items: [
                {text: 'OpenEuler安装Docker', link: '/md/exp-log/02-OpenEuler安装Docker和踩坑分析'},
            ]
        }
    ]
}

export default sidebar