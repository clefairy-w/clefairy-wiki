import {type DefaultTheme} from "vitepress";


const nav:DefaultTheme.NavItem[] = [
    { text: '主页', link: '/' },
    {
        text: '基础',
        items: [
            {
                // 该部分的标题
                text: '网络',
                link: '/md/network/01-网络体系结构模型',
            },
            {
                text: '数据结构与算法',
                link: '/md/algo/Leetcode随想录00-基本理论'
            },
            {
                text: '操作系统',
                link: '/md/os/01-开篇词',
            },
            {
                // 该部分的标题
                text: '设计模式',
                link: '/md/design-pattern/00-前言之六大设计原则'
            },
            {
                // 该部分的标题
                text: '分布式',
                link: '/md/distributed-system/CAP原则'
            },
            // {
            //     // 该部分的标题
            //     text: '负载均衡',
            //     // link: '/md/load-balance/负载均衡模型'
            //     link: '#'
            // },
        ]
    },
    {
        text: '编程语言',
        items: [
            { text: 'Java', link: '/md/java/Java基础/01-基础' }
        ]
    },
    {
        text: '框架',
        items: [
            { text: 'Spring Boot', link: '/md/frame/spring-boot/03-核心特性' },
            { text: 'Spring Cloud', link: '/md/frame/spring-cloud/01-guide' },
            { text: 'Mybatis', link: '/md/frame/mybatis/01-开篇词' },
            { text: 'Netty', link: '/md/frame/netty/01-开篇词' },
            // { text: 'Dubbo', link: '/md/frame/dubbo/01-开篇词' },
            // { text: 'JUnit', link: '#' },
        ]
    },
    {
        text: '组件',
        items: [
            { text: 'MySQL', link: '/md/component/mysql/01-MySQL体系结构' },
            { text: 'Redis', link: '#' },
            { text: 'MQ', link: '#' },
            { text: 'Nacos', link: '#' },
            { text: 'Elasticsearch', link: '#' },
            { text: 'Activiti', link: '#' },
            // { text: 'ElasticJob', link: '#' },
            { text: 'Seata', link: '#' },
            // { text: 'Flink', link: '#' },
            // { text: 'Spark', link: '#' },
        ]
    },
    // {
    //     text: '源码阅读',
    //     items: [
    //         { text: 'SpringBoot', link: '#' },
    //         { text: 'Mybatis', link: '#' },
    //         { text: 'Netty', link: '#' },
    //         { text: 'Guava', link: '#' },
    //         { text: 'Dubbo', link: '#' },
    //         // { text: 'RocketMQ', link: '#' },
    //         { text: 'Nacos', link: '#' },
    //     ]
    // },
    {
        text: '运维',
        items: [
            { text: 'CMD', link: '/md/cmd/01-Linux常用命令' },
            { text: 'Docker', link: '#' },
            { text: 'Nginx', link: '#'},
            // { text: 'Jenkins', link: '#' },
            // { text: 'Prometheus', link: '#' },
        ]
    },
    { text: '经验日志', link: '/md/exp-log/02-OpenEuler安装Docker和踩坑分析' },
    // { text: '阅读日志', link: '#' }
]
export default nav
