import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// @ts-ignore
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "爱做梦的皮皮檬",
  description: "knowledge magician",
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        forceLocale:true
      }
    },

    nav: [
      { text: 'Home', link: '/' },
      {
        text: '计算机基础',
        items: [
          {
            // 该部分的标题
            text: '网络',
            link: '/md/network/markdown-examples'
          },
          {
            text: '数据结构与算法',
            link: '/md/algo/Leetcode随想录00-基本理论'
          },
          {
            // 该部分的标题
            text: '设计模式',
            link: '/md/design-pattern/00-前言之六大设计原则'
          },
          {
            // 该部分的标题
            text: '分布式',
            link: '/md/distributed-system/markdown-examples'
          },
          {
            // 该部分的标题
            text: '负载均衡',
            link: '/md/load-balance/markdown-examples'
          },
        ]
      },
      {
        text: '编程语言',
        items: [
          { text: 'java', link: '/md/java/Java基础知识' }
        ]
      },
      {
        text: '框架与组件',
        items: [
          { text: 'SpringBoot', link: '/md/frame' },
          { text: 'Redis', link: '...' },
          { text: 'Mysql', link: '...' },
          { text: 'RabbitMQ', link: '...' },
          { text: 'Nacos', link: '...' },
          { text: 'Netty', link: '...' },
          { text: 'Elasticsearch', link: '...' },
          { text: 'ElasticJob', link: '...' },
          { text: 'Activiti', link: '...' }
        ]
      },
      {
        text: '运维',
        items: [
          { text: 'Docker', link: '...' },
          { text: 'Jenkins', link: '...' },
          { text: 'Prometheus', link: '...' },
          { text: '常用命令', link: '...' },
        ]
      },
      { text: '经验日志', link: '/guide/markdown-examples' },
      { text: '阅读日志', link: '/guide/markdown-examples' }
    ],

    sidebar: {
      '/md/network': generateNetworkSidebar(),
      '/md/algo': generateDataStructureAndAlgoSidebar(),
      '/md/design-pattern': generateDesignPattern(),
      '/md/distributed-system':[
        {
          text: '分布式',
          items: [
            { text: 'Markdown Examples', link: '/guide/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
      ],
      '/md/load-balance':[
        {
          text: '负载均衡',
          items: [
            { text: 'Markdown Examples', link: '/guide/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
      ],
      '/md/java':[
        {
          text: 'Java',
          items: [
            { text: 'Java基础知识', link: '/md/java/Java基础知识' },
            { text: 'Java集合', link: '/md/java/Java集合' },
            { text: 'Java并发', link: '/md/java/Java并发' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],



    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2018-present 爱做梦的皮皮檬'
    }
  }
})

// network sidebar
function generateNetworkSidebar() {
    return [
      {
        text: '网络',
        items: [
          { text: 'Markdown Examples', link: '/network/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }]
}

// data structure & algo
function generateDataStructureAndAlgoSidebar(){
    return [
      {
        text: '数据结构与算法',
        items: [
          { text: '基本理论', link: '/md/algo/Leetcode随想录00-基本理论.md' },
          {
            text: '数组',
            collapsed: true,
            items: [
              {
                text: '704.二分查找|27.移除元素',
                link: '/md/algo/Leetcode随想录01-数组||704.二分查找|27.移除元素.md'
              },
              {
                text: '977.有序数组的平方|209.长度最小的子数组|59.螺旋矩阵II',
                link: '/md/algo/Leetcode随想录02-数组||977.有序数组的平方|209.长度最小的子数组|59.螺旋矩阵II.md'
              },
            ]
          },
          {
            text: '链表',
            collapsed: true,
            items: [
              {
                text: '203.移除链表元素|707.设计链表|206.反转链表',
                link: '/md/algo/Leetcode随想录03-链表||203.移除链表元素|707.设计链表|206.反转链表.md'
              },
              {
                text: '24.两两交换链表中的节点|19.删除链表的倒数第N个节点|02.07.链表相交|142.环形链表II',
                link: '/md/algo/Leetcode随想录04-链表||24.两两交换链表中的节点|19.删除链表的倒数第N个节点|02.07.链表相交|142.环形链表II.md'
              },
            ]
          },
          { text: '数组链表复盘', link: '/md/algo/Leetcode随想录05-数组链表复盘.md' },
          {
            text: '哈希表',
            collapsed: true,
            items: [
              {
                text: '242.有效的字母异位词|349.两个数组的交集|202.快乐数|1.两数之和',
                link: '/md/algo/Leetcode随想录06-哈希表||242.有效的字母异位词|349.两个数组的交集|202.快乐数|1.两数之和.md'
              },
              {
                text: '454.四数相加II|383.赎金信|15.三数之和|18.四数之和',
                link: '/md/algo/Leetcode随想录07-哈希表||454.四数相加II|383.赎金信|15.三数之和|18.四数之和.md'
              },
            ]
          },
          {
            text: '字符串',
            collapsed: true,
            items: [
              {
                text: '344.反转字符串|541.反转字符串II|路径加密|151.翻转字符串里的单词|动态口令',
                link: '/md/algo/Leetcode随想录08-字符串||344.反转字符串|541.反转字符串II|路径加密|151.翻转字符串里的单词|动态口令.md'
              },
              {
                text: '28.找出字符串中第一个匹配项的下标|459.重复的子字符串',
                link: '/md/algo/Leetcode随想录09-字符串|28.找出字符串中第一个匹配项的下标|459.重复的子字符串.md'
              },
            ]
          },

          { text: '字符串哈希表复盘', link: '/md/algo/Leetcode随想录09-字符串哈希表复盘.md' },
          {
            text: '栈与队列',
            collapsed: true,
            items: [
              {
                text: '232.用栈实现队列|225.用队列实现栈',
                link: '/md/algo/Leetcode随想录10-栈与队列||232.用栈实现队列|225.用队列实现栈.md'
              },
              {
                text: '20.有效的括号|1047.删除字符串中的所有相邻重复项|150.逆波兰表达式求值',
                link: '/md/algo/Leetcode随想录11-栈与队列||20.有效的括号|1047.删除字符串中的所有相邻重复项|150.逆波兰表达式求值.md'
              },
              {
                text: '239.滑动窗口最大值|347.前K个高频元素',
                link: '/md/algo/Leetcode随想录12-栈与队列||239.滑动窗口最大值|347.前K个高频元素.md'
              },
              { text: '栈与队列复盘', link: '/md/algo/Leetcode随想录12-栈与队列复盘.md' }
            ]
          },

          {
            text: '二叉树',
            collapsed: true,
            items: [
              {
                text: '145.二叉树的后序遍历|94.二叉树的中序遍历',
                link: '/md/algo/Leetcode随想录13-二叉树||144.二叉树的前序遍历|145.二叉树的后序遍历|94.二叉树的中序遍历.md'
              },
              {
                text: '层序遍历10题|226.翻转二叉树|101.对称二叉树II',
                link: '/md/algo/Leetcode随想录14-二叉树||层序遍历10题|226.翻转二叉树|101.对称二叉树II.md'
              },
              {
                text: '104.二叉树的最大深度|559.n叉树的最大深度|111.二叉树的最小深度|222.完全二叉树的节点个数',
                link: '/md/algo/Leetcode随想录15-二叉树||104.二叉树的最大深度|559.n叉树的最大深度|111.二叉树的最小深度|222.完全二叉树的节点个数.md'
              },
              {
                text: '110.平衡二叉树|257.二叉树的所有路径|404.左叶子之和',
                link: '/md/algo/Leetcode随想录16-二叉树||110.平衡二叉树|257.二叉树的所有路径|404.左叶子之和.md'
              },
              {
                text: '513.找树左下角的值|112.路径总和|113.路径总和II｜106.从中序与后序遍历序列构造二叉树|105.从前序与中序遍历序列构造二叉树',
                link: '/md/algo/Leetcode随想录17-二叉树||513.找树左下角的值|112.路径总和|113.路径总和II｜106.从中序与后序遍历序列构造二叉树|105.从前序与中序遍历序列构造二叉树.md'
              },
              {
                text: '654.最大二叉树|617.合并二叉树|700.二叉搜索树中的搜索|98.验证二叉搜索树',
                link: '/md/algo/Leetcode随想录18-二叉树||654.最大二叉树|617.合并二叉树|700.二叉搜索树中的搜索|98.验证二叉搜索树.md'
              },
              {
                text: '530.二叉搜索树的最小绝对差|501.二叉搜索树中的众数|236.二叉搜索树的最近公共祖先',
                link: '/md/algo/Leetcode随想录19-二叉树||530.二叉搜索树的最小绝对差|501.二叉搜索树中的众数|236.二叉搜索树的最近公共祖先.md'
              },
              {
                text: '235.二叉搜索树的最近公共祖先|701.二叉搜索树中的插入操作|450.删除二叉搜索树的节点',
                link: '/md/algo/Leetcode随想录20-二叉树||235.二叉搜索树的最近公共祖先|701.二叉搜索树中的插入操作|450.删除二叉搜索树的节点.md'
              },
              {
                text: '669.修剪二叉搜索树|108.将有序数组转换为二叉搜索树|538.把二叉搜索树转换为累加树',
                link: '/md/algo/Leetcode随想录21-二叉树||669.修剪二叉搜索树|108.将有序数组转换为二叉搜索树|538.把二叉搜索树转换为累加树.md'
              },
              { text: '二叉树复盘', link: '/md/algo/Leetcode随想录21-二叉树复盘.md' },
            ]
          },
          {
            text: '回溯',
            collapsed: true,
            items: [
              {
                text: '77.组合',
                link: '/md/algo/Leetcode随想录22-回溯||77.组合.md'
              },
              {
                text: '17.电话号码的字母组合',
                link: '/md/algo/Leetcode随想录23-回溯||216.组合总和||||17.电话号码的字母组合.md'
              },
              {
                text: '40.组合总和II|131.分割回文串',
                link: '/md/algo/Leetcode随想录24-回溯||39.组合总和|40.组合总和II|131.分割回文串.md'
              },
              {
                text: '93.复原IP地址|78.子集|90.子集||',
                link: '/md/algo/Leetcode随想录25-回溯||93.复原IP地址|78.子集|90.子集||.md'
              },
              {
                text: '491.递增子序列|46.全排列|47.全排列II',
                link: '/md/algo/Leetcode随想录26-回溯||491.递增子序列|46.全排列|47.全排列II.md'
              },
              {
                text: '332.重新安排行程|51.N皇后|37.解数独',
                link: '/md/algo/Leetcode随想录27-回溯||332.重新安排行程|51.N皇后|37.解数独.md'
              },
              { text: '回溯复盘', link: '/md/algo/Leetcode随想录27-回溯复盘.md' },
            ]
          },
          {
            text: '贪心算法',
            collapsed: true,
            items: [
              {
                text: '455.分发饼干|376.摆动序列|53.最大子序和',
                link: '/md/algo/Leetcode随想录28-贪心算法||455.分发饼干|376.摆动序列|53.最大子序和.md'
              },
              {
                text: '122.买卖股票的最佳时机II|55.跳跃游戏|45.跳跃游戏II',
                link: '/md/algo/Leetcode随想录29-贪心算法||122.买卖股票的最佳时机II|55.跳跃游戏|45.跳跃游戏II.md'
              },
              {
                text: '1005.K次取反后最大化的数组和|134.加油站|135.分发糖果',
                link: '/md/algo/Leetcode随想录30-贪心算法||1005.K次取反后最大化的数组和|134.加油站|135.分发糖果.md'
              },
              {
                text: '860.柠檬水找零|406.根据身高重建队列|452.用最少数量的箭引爆气球',
                link: '/md/algo/Leetcode随想录31-贪心算法||860.柠檬水找零|406.根据身高重建队列|452.用最少数量的箭引爆气球.md'
              },
              {
                text: '435.无重叠区间|763.划分字母区间|56.合并区间',
                link: '/md/algo/Leetcode随想录32-贪心算法||435.无重叠区间|763.划分字母区间|56.合并区间.md'
              },
              {
                text: '738.单调递增的数字|714.买卖股票的最佳时机含手续费|968.监控二叉树',
                link: '/md/algo/Leetcode随想录33-贪心算法||738.单调递增的数字|714.买卖股票的最佳时机含手续费|968.监控二叉树.md'
              },
              { text: '贪心算法复盘', link: '/md/algo/Leetcode随想录33-贪心算法复盘.md' },
            ]
          },
          {
            text: '动态规划',
            collapsed: true,
            items: [
              {
                text: '509.斐波那契数|70.爬楼梯|746.使用最小花费爬楼梯',
                link: '/md/algo/Leetcode随想录34-动态规划||509.斐波那契数|70.爬楼梯|746.使用最小花费爬楼梯.md'
              },
              {
                text: '62.不同路径|63.不同路径II',
                link: '/md/algo/Leetcode随想录35-动态规划||62.不同路径|63.不同路径II.md'
              },
              {
                text: '343.整数拆分|96.不同的二叉搜索树',
                link: '/md/algo/Leetcode随想录36-动态规划||343.整数拆分|96.不同的二叉搜索树.md'
              },
              {
                text: '416.分割等和子集',
                link: '/md/algo/Leetcode随想录37-动态规划||416.分割等和子集.md'
              },              {
                text: '1049.最后一块石头的重量II|494.目标和|474.一和零',
                link: '/md/algo/Leetcode随想录38-动态规划||1049.最后一块石头的重量II|494.目标和|474.一和零.md'
              },
              {
                text: '70.爬楼梯(进阶)|322.零钱兑换|279.完全平方数',
                link: '/md/algo/Leetcode随想录40-动态规划||70.爬楼梯(进阶)|322.零钱兑换|279.完全平方数.md'
              },
              {
                text: '139.单词拆分',
                link: '/md/algo/Leetcode随想录41-动态规划||139.单词拆分.md'
              },
              {
                text: '198.打家劫舍|213.打家劫舍|337.打家劫舍',
                link: '/md/algo/Leetcode随想录42-动态规划||198.打家劫舍|213.打家劫舍|337.打家劫舍.md'
              },
              {
                text: '121.买卖股票的最佳时机|122.买卖股票的最佳时机II',
                link: '/md/algo/Leetcode随想录43-动态规划||121.买卖股票的最佳时机|122.买卖股票的最佳时机II.md'
              },
              {
                text: '123.买卖股票的最佳时机III',
                link: '/md/algo/Leetcode随想录44-动态规划||123.买卖股票的最佳时机III.md'
              },
              {
                text: '309.买卖股票的最佳时机含冷冻期',
                link: '/md/algo/Leetcode随想录45-动态规划||309.买卖股票的最佳时机含冷冻期.md'
              },
              {
                text: '300.最长递增子序列|674.最长连续递增序列|718.最长重复子数组',
                link: '/md/algo/Leetcode随想录46-动态规划||300.最长递增子序列|674.最长连续递增序列|718.最长重复子数组.md'
              },
              {
                text: '1143.最长公共子序列|1035.不相交的线|53.最大子序和',
                link: '/md/algo/Leetcode随想录47-动态规划||1143.最长公共子序列|1035.不相交的线|53.最大子序和.md'
              },
              {
                text: '392.判断子序列|115.不同的子序列',
                link: '/md/algo/Leetcode随想录48-动态规划||392.判断子序列|115.不同的子序列.md'
              },
              {
                text: '583.两个字符串的删除操作|72.编辑距离',
                link: '/md/algo/Leetcode随想录49-动态规划||583.两个字符串的删除操作|72.编辑距离.md'
              },
              {
                text: '647.回文子串|516.最长回文子序列|5.最长回文串',
                link: '/md/algo/Leetcode随想录50-动态规划||647.回文子串|516.最长回文子序列|5.最长回文串.md'
              },
              { text: '动态规划复盘', link: '/md/algo/Leetcode随想录51-动态规划复盘.md' },
            ]
          },
          {
            text: '单调栈',
            collapsed: true,
            items: [
              {
                text: '739.每日温度|84.柱状图中最大的矩形|42.接雨水',
                link: '/md/algo/Leetcode随想录52-单调栈||739.每日温度|84.柱状图中最大的矩形|42.接雨水.md'
              },
              {
                text: '496.下一个更大元素 I|503.下一个更大元素 II',
                link: '/md/algo/Leetcode随想录53-单调栈||496.下一个更大元素 I|503.下一个更大元素 II.md'
              },
            ]
          },
        ]
      },
    ]
}

function generateDesignPattern(){
  return [
    {
      text: '设计模式',
      items: [
        { text: '概论', link: '/md/design-pattern/00-前言之六大设计原则.md' },
        {
          text: '创建型设计模式',
          collapsed: false,
          items: [
            {
              text: '工厂方法模式',
              link: '/md/design-pattern/01-创建型模式之工厂方法模式.md'
            },
            {
              text: '抽象工厂模式',
              link: '/md/design-pattern/02-创建型模式之抽象工厂模式.md'
            },
            {
              text: '建造者模式',
              link: '/md/design-pattern/03-创建型模式之建造者模式.md'
            },
            {
              text: '原型模式',
              link: '/md/design-pattern/04-创建型模式之原型模式.md'
            },
            {
              text: '单例模式',
              link: '/md/design-pattern/05-创建型模式之单例模式.md'
            },
          ]
        },
        {
          text: '结构型设计模式',
          collapsed: false,
          items: [
            {
              text: '适配器模式',
              link: '/md/design-pattern/06-结构型模式之适配器模式.md'
            },
            {
              text: '桥接模式',
              link: '/md/design-pattern/07-结构型模式之桥接模式.md'
            },
            {
              text: '组合模式',
              link: '/md/design-pattern/08-结构型模式之组合模式.md'
            },
            {
              text: '装饰器模式',
              link: '/md/design-pattern/09-结构型模式之装饰器模式.md'
            },
            {
              text: '外观模式',
              link: '/md/design-pattern/10-结构型模式之外观模式.md'
            },
            {
              text: '享元模式',
              link: '/md/design-pattern/11-结构型模式之享元模式.md'
            },
            {
              text: '代理模式',
              link: '/md/design-pattern/12-结构型模式之代理模式.md'
            },
            {
              text: '门面模式',
              link: '/md/design-pattern/13-结构型模式之门面模式.md'
            },
          ]
        },
        {
          text: '行为型设计模式',
          collapsed: false,
          items: [
            {
              text: '责任链模式',
              link: '/md/design-pattern/14-行为型模式之责任链模式.md'
            },
            {
              text: '命令模式',
              link: '/md/design-pattern/14-行为型模式之命令模式.md'
            },
            {
              text: '迭代器模式',
              link: '/md/design-pattern/15-行为型模式之迭代器模式.md'
            },
            {
              text: '备忘录模式',
              link: '/md/design-pattern/17-行为型模式之备忘录模式.md'
            },
            {
              text: '观察者模式',
              link: '/md/design-pattern/18-行为型模式之观察者模式.md'
            },
            {
              text: '状态模式',
              link: '/md/design-pattern/19-行为型模式之状态模式.md'
            },
            {
              text: '策略模式',
              link: '/md/design-pattern/20-行为型模式之策略模式.md'
            },
            {
              text: '模板模式',
              link: '/md/design-pattern/21-行为型模式之模板模式.md'
            },
            {
              text: '访问者模式',
              link: '/md/design-pattern/22-行为型模式之访问者模式.md'
            },
            {
              text: '解释器模式',
              link: '/md/design-pattern/23-行为型模式之解释器模式.md'
            },

          ]
        },
      ]
    },
  ]
}
