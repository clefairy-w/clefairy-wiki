import {type DefaultTheme} from "vitepress";


const nav:DefaultTheme.NavItem[] = [
    { text: '主页', link: '/' },
    {
        text: '计算机基础',
        items: [
            {
                // 该部分的标题
                text: '网络',
                link: '#',
                activeMatch: ''
            },
            {
                text: '数据结构与算法',
                link: '/md/algo/Leetcode随想录00-基本理论'
            },
            {
                // 该部分的标题
                text: '设计模式',
                link: '#'
            },
            {
                // 该部分的标题
                text: '分布式',
                link: '#'
            },
            {
                // 该部分的标题
                text: '负载均衡',
                link: '#'
            },
        ]
    },
    {
        text: '编程语言',
        items: [
            { text: 'java', link: '#' }
        ]
    },
    {
        text: '框架与组件',
        items: [
            { text: 'SpringBoot', link: '#' },
            { text: 'Mybatis', link: '#' },
            { text: 'Redis', link: '#' },
            { text: 'MySQL', link: '#' },
            { text: 'RabbitMQ', link: '#' },
            { text: 'Nacos', link: '#' },
            { text: 'Netty', link: '#' },
            { text: 'Elasticsearch', link: '#' },
            { text: 'ElasticJob', link: '#' },
            { text: 'Activiti', link: '#' }
        ]
    },
    {
        text: '运维',
        items: [
            { text: 'Docker', link: '#' },
            { text: 'Jenkins', link: '#' },
            { text: 'Prometheus', link: '#' },
            { text: 'Nginx', link: '#'},
            { text: '常用命令', link: '#' },
        ]
    },
    { text: '经验日志', link: '#' },
    { text: '阅读日志', link: '#' }
]
export default nav
