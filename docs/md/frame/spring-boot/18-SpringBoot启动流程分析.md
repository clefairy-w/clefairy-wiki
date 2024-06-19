```java
@SpringBootApplication
public class WikiBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(WikiBootApplication.class, args);
    }
    
}
```

调用SpringApplication的静态run方法，进入run方法后，可以发现最终调用的是其重载的run方法。重载的run方法可以将启动的动作拆解成两步：创建SpringApplication对象；启动SpringApplication。以下代码截取至SpringBoot 3.2.4版本。

#### 1. 创建SpringApplication(服务构建)

```java
public static ConfigurableApplicationContext run(Class<?>[] primarySources, String[] args) {
    return (new SpringApplication(primarySources)).run(args);
}

public SpringApplication(Class<?>... primarySources) {
    this((ResourceLoader)null, primarySources);
}

public SpringApplication(ResourceLoader resourceLoader, Class<?>... primarySources) {
    this.sources = new LinkedHashSet();
    this.bannerMode = Mode.CONSOLE;
    this.logStartupInfo = true;
    this.addCommandLineProperties = true;
    this.addConversionService = true;
    this.headless = true;
    this.registerShutdownHook = true;
    this.additionalProfiles = Collections.emptySet();
    this.isCustomEnvironment = false;
    this.lazyInitialization = false;
    this.applicationContextFactory = ApplicationContextFactory.DEFAULT;
    this.applicationStartup = ApplicationStartup.DEFAULT;
    this.resourceLoader = resourceLoader;
    Assert.notNull(primarySources, "PrimarySources must not be null");
    // 将主启动类放入primarySources(主配置资源来源)中，明确主启动类的位置及名称
    this.primarySources = new LinkedHashSet(Arrays.asList(primarySources));
    // 判断应用环境
    this.webApplicationType = WebApplicationType.deduceFromClasspath();
    // BootstrapRegistryInitializer 是函数式接口，接口只定义了一个 initialize 方法，该方法只有一个参数是 BootstrapRegistry；
    // BootstrapRegistry 是一个用于存储和共享对象的注册表
    this.bootstrapRegistryInitializers = new ArrayList(this.getSpringFactoriesInstances(BootstrapRegistryInitializer.class));
    // 设置应用初始化器，利用Spring SPI机制，从spring.factories中加载一组ApplicationContextInitializer的初始化器应用到当前项目
    // 它可以在IOC容器创建之后，未触发刷新动作之前执行额外的逻辑处理
    this.setInitializers(this.getSpringFactoriesInstances(ApplicationContextInitializer.class));
    // 设置Spring Boot全局监听器
    this.setListeners(this.getSpringFactoriesInstances(ApplicationListener.class));
    // 确定主启动类
    this.mainApplicationClass = this.deduceMainApplicationClass();
}
```

#### 2. 启动SpringApplication(环境准备-容器创建-填充容器)

```java
public ConfigurableApplicationContext run(String... args) {
    Startup startup = SpringApplication.Startup.create();
    if (this.registerShutdownHook) {
        shutdownHook.enableShutdownHookAddition();
    }
    // 遍历执行bootstrapRegistryInitializers的initialize方法
    DefaultBootstrapContext bootstrapContext = this.createBootstrapContext();
    ConfigurableApplicationContext context = null;
    // 设置java.awt.headless属性后，在启动SpringBoot应用时即使没有检测到显示器叶允许其继续启动
    this.configureHeadlessProperty();
    // 获取SpringApplicationRunListeners，并调用starting(回调机制)，利用Spring SPI机制加载listeners
    SpringApplicationRunListeners listeners = this.getRunListeners(args);
    listeners.starting(bootstrapContext, this.mainApplicationClass);

    Throwable ex;
    try {
        ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);
        // 准备运行时环境,步骤：先创建运行时环境、配置运行时环境，回调SpringApplicationRunListener的environmentPrepared方法、将环境与应用绑定
        // 组装启动参数(先构造可配置的环境，然后加载系统环境变量、jvm系统属性、启动时传入的环境参数等，将这些属性加载到propertysources内存中)
        // 发布环境准备完成事件，监听器进行相应的处理；比如环境配置后处理监听器会加载spring.factories配置文件中的环境配置后处理器EnvironmentPostProcessor
        // 监听器是通过观察者模式设计
        // 在propertysources首部添加空配置:configurationProperties，后续使用
        ConfigurableEnvironment environment = this.prepareEnvironment(listeners, bootstrapContext, applicationArguments);
        // 打印Banner
        Banner printedBanner = this.printBanner(environment);
        // 创建空的IOC容器，根据类型创建ConfigurableApplicationContext：AnnotationConfigServletWebServerApplicationContext
        // 这个过程中会构造生产和存放Bean实例的“beanFactory”，DefaultListableBeanFactory，     
        // ConfigurationClassPostProcessor、AutowiredAnnotationBeanPostProcessor、CommonAnnotationBeanPostProcessor将这些放入容器中
        context = this.createApplicationContext();
        context.setApplicationStartup(this.applicationStartup);
        // 初始化IOC容器，对容器中的部分属性进行初始化
        // 先通过postProcessApplicationContext方法设置Bean名称生成器、资源加载器、类型转换器等
        // 执行之前加载进来的上下文初始化
        // 发布容器准备完成事件
        // 陆续为容器注册启动参数、Banner、Bean引用策略、懒加载策略等
        // 通过BeanDefinitionLoader将启动类在内的资源加载到beanDefinitionMap，为后续根据BeanDefinition创建Bean对象作准备
        // 发布资源加载完成事件
        // 到这里容器就创建完成了
        this.prepareContext(bootstrapContext, context, environment, listeners, applicationArguments, printedBanner);
        // 刷新IOC容器
        this.refreshContext(context);
        // 刷新后回调
        this.afterRefresh(context, applicationArguments);
        startup.started();
        // 打印启动耗时日志
        if (this.logStartupInfo) {
            (new StartupInfoLogger(this.mainApplicationClass)).logStarted(this.getApplicationLog(), startup);
        }
        // 回调SpringApplicationRunListeners的started方法， IOC容器已刷新
        listeners.started(context, startup.timeTakenToStarted());
        // 回调所有运行器
        this.callRunners(context, applicationArguments);
    } catch (Throwable var10) {
        ex = var10;
        throw this.handleRunFailure(context, ex, listeners);
    }

    try {
        if (context.isRunning()) {
            listeners.ready(context, startup.ready());
        }

        return context;
    } catch (Throwable var9) {
        ex = var9;
        throw this.handleRunFailure(context, ex, (SpringApplicationRunListeners)null);
    }
}
```

#### 3. IOC容器的刷新(填充容器)

```java
public void refresh() throws BeansException, IllegalStateException {
    this.startupShutdownLock.lock();

    try {
        this.startupShutdownThread = Thread.currentThread();
        StartupStep contextRefresh = this.applicationStartup.start("spring.context.refresh");
        // 初始化前预处理
        // 在前面的环境准备阶段也设置了一些参数，在这一步需要设置servletContextInitParams和servletConfigInitParams参数
        // 然后通过validateRequiredProperties校验必填的参数
        // 完成监听器和事件初始化
        this.prepareRefresh();
        // 获取BeanFactory，加载所有Bean的定义信息(尚未实例化)
        ConfigurableListableBeanFactory beanFactory = this.obtainFreshBeanFactory();
        // BeanFactory的预处理配置
        // 主要是类加载器、表达式解析器、PropertyEditorRegistrar、Bean后置处理器(用来解析Aware接口的ApplicationContextAwareProcessor
        // 以及用来处理自定义监听器注册和销毁的ApplicationListenerDetector)，同时还有一些其他Bean的注册等准备
        this.prepareBeanFactory(beanFactory);

        try {
            // 准备BeanFactory完成后进行的后置处理
            // 主要定义了包括request、session及application在内的servlet相关作用域，
            // 同时也注册了与servlet相关的Bean，包括ServletRequest、ServletResponse、HttpSession、WebRequest等
            this.postProcessBeanFactory(beanFactory);
            StartupStep beanPostProcess = this.applicationStartup.start("spring.context.beans.post-process");
            // 执行BeanFactory创建后的后置处理器
            // 执行在容器创建中注册的BeanFactoryPostProcessors
            // 将各类Bean加载到beanDefinitionMap中
            this.invokeBeanFactoryPostProcessors(beanFactory);
            // 注册Bean的后置处理器，在bean初始化前和后执行
            this.registerBeanPostProcessors(beanFactory);
            beanPostProcess.end();
            // 初始化MessageSource
            this.initMessageSource();
            // 初始化事件广播器
            this.initApplicationEventMulticaster();
            // 供子类扩展的模版方法onRefresh，构造并启动Web服务器
            this.onRefresh();
            // 注册监听器
            this.registerListeners();
            // 生产Bean，整体包括构造对象、填充属性、初始化实例、注册销毁四步骤
            // 创建实例：通过反射创建实例对象
            // 填充属性：填充依赖，注入的其他属性
            // 初始化：先检测Aware接口，依次执行，然后执行BeanPostProcessor前置处理，然后检测初始化方法（InitializingBean或者init-method）并执行，然后             // 执行BeanPostProcessor的后置处理
            // 销毁：并不是立即销毁，先将注册的销毁方法检测到并记录下来（DisposableBean或者destroy-method），然后等到bean使用完后，真正要销毁时，再调用销 
            // 毁方法来销毁bean
            // 生成的Bean放在单例池中
            this.finishBeanFactoryInitialization(beanFactory);
            // 完成容器创建工作
            this.finishRefresh();
        } catch (Error | RuntimeException var12) {
            Throwable ex = var12;
            if (this.logger.isWarnEnabled()) {
                this.logger.warn("Exception encountered during context initialization - cancelling refresh attempt: " + ex);
            }
            // 销毁Bean
            this.destroyBeans();
            // 清除缓存
            this.cancelRefresh(ex);
            throw ex;
        } finally {
            contextRefresh.end();
        }
    } finally {
        this.startupShutdownThread = null;
        this.startupShutdownLock.unlock();
    }

}
```

