SpringBoot自动装配的核心是，本应该由开发者编写的配置，转为框架自动根据项目中整合的场景依赖，合理地做出判断并装配合适的Bean到IOC容器中(控制反转来了，哈哈哈)。Spring Boot的自动装配实际是由模块装配+条件装配+SPI机制组合使用实现的。Spring Boot主启动类的`@SpringBootApplication`注解凝结了这一功能。`@SpringBootApplication`注解是由三个注解组合而来的复合注解。`@EnableAutoConfiguration`是自动装配的核心注解，自动装配的实际执行者，它会导入`AutoConfigurationImportSelector`类，这个类会读取类路径上的`META-INF/spring.factories`文件(SpringBoot2.7之后有变动)，此文件中列出了所有的自动配置类。自动配置通常带有`@Configuration`注解，包含一系列的`@Bean`方法，这些方法会根据条件来创建和配置Bean。这些条件可以是类路径上是否存在某个类、某个Bean是否已经被注册、某个配置的属性值等。大量使用了条件注解，如`@ConditionalOnClass`,`@ConditionalOnMissingBean`,`@ConditionalOnProperty`等，这些注解确保了只有在特定条件满足时，相应的自动配置类或者`@Bean`方法才会被激活，被包含在最终的应用上下文中。开发者配置的Bean会优先于自动配置的Bean。

#### 1. 模块装配

@Import注解可以导入配置类、ImportSelector的实现类、ImportBeanDefinitionRegistrar的实现类以及普通类，这几个是用来做模块注入的。

#### 2. 条件装配

Spring提供了两种条件装配的方式：基于Profile和基于Conditional相关注解，这种方式是为了解决在不同场景或者条件下满足不同组件的装配。

@ConditionalOnClass&@ConditionalOnMissingClass：检查当前项目的类路径下是否包含/缺少指定类

@ConditionalOnBean&@ConditionalOnMissingBean：检查当前容器中是否注册/缺少指定Bean

@ConditionOnproperty：检查当前应用的属性配置

@ConditionOnWebApplication&@ConditionalOnNotWebApplication：检查当前应用是否为Web应用

@ConditionalOnExpression：根据指定的SpEL表达式确定条件是否满足

Spring Boot官方文档建议Conditional相关注解最适用的场景是在自动配置的类上，其他普通类不建议使用。

#### 3. SpringBoot SPI机制

Spring Boot 2.7之后有变化：不再是读取META-INF/spring.factories而是读取META-INF/spring/%s.imports文件，且文件里不再是k，v结构，直接将v写进一行。

#### 4. 整合JDBC的核心自动装配

以下截取自Spring Boot 2.7.X版本

```java
@AutoConfiguration(before = SqlInitializationAutoConfiguration.class)
@ConditionalOnClass({ DataSource.class, EmbeddedDatabaseType.class })
@ConditionalOnMissingBean(type = "io.r2dbc.spi.ConnectionFactory")
@EnableConfigurationProperties(DataSourceProperties.class)
@Import(DataSourcePoolMetadataProvidersConfiguration.class)
public class DataSourceAutoConfiguration {
```

```java
@AutoConfiguration(after = DataSourceAutoConfiguration.class)
@ConditionalOnClass({ DataSource.class, JdbcTemplate.class })
@ConditionalOnSingleCandidate(DataSource.class)
@EnableConfigurationProperties(JdbcProperties.class)
@Import({ DatabaseInitializationDependencyConfigurer.class, JdbcTemplateConfiguration.class,
		NamedParameterJdbcTemplateConfiguration.class })
public class JdbcTemplateAutoConfiguration {
```

引入JDBC数据访问场景后，需要用到事务，DataSource创建完成后，SpringBoot再创建DataSourceTransactionManagerAutoConfiguration，用于数据源的事务控制。

```java
@AutoConfiguration(before = TransactionAutoConfiguration.class)
@ConditionalOnClass({ JdbcTemplate.class, TransactionManager.class })
@AutoConfigureOrder(Ordered.LOWEST_PRECEDENCE)
@EnableConfigurationProperties(DataSourceProperties.class)
public class DataSourceTransactionManagerAutoConfiguration
```



#### 5. 整合MyBatis的核心自动装配

以下截取自Mybatis Spring Boot 3.0.X版本

```java
@org.springframework.context.annotation.Configuration(proxyBeanMethods = false)
@ConditionalOnClass({ SqlSessionFactory.class, SqlSessionFactoryBean.class })
// 仅在BeanFactory中已经包含指定类的bean并且可以确定单个候选时才匹配。如果BeanFactory中已经包含多个匹配的bean实例但已定义了主要候选者，条件也将匹配；基本上，如果使用定义类型自动装配一个bean将成功，则条件匹配
@ConditionalOnSingleCandidate(DataSource.class)
@EnableConfigurationProperties(MybatisProperties.class)
// 当前自动配置会在以下几个配置类的解析后再处理
@AutoConfigureAfter({ DataSourceAutoConfiguration.class, MybatisLanguageDriverAutoConfiguration.class })
public class MybatisAutoConfiguration implements InitializingBean
```

#### 6. 整合WebMvc的核心自动装配

以下截取自Spring Boot 2.7.X版本

```java
// 当前自动配置会在以下几个配置类的解析后再处理
@AutoConfiguration(after = { DispatcherServletAutoConfiguration.class, TaskExecutionAutoConfiguration.class,
       ValidationAutoConfiguration.class })
// 当前运行环静必须是WebMvc
@ConditionalOnWebApplication(type = Type.SERVLET)
// 当前运行环境的classpath中必须有Servlet类、DispatcherServlet类、WebMvcConfigurer类
@ConditionalOnClass({ Servlet.class, DispatcherServlet.class, WebMvcConfigurer.class })
// 如果没有自定义WebMvc的配置类，则使用本自动配置
@ConditionalOnMissingBean(WebMvcConfigurationSupport.class)
@AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE + 10)
public class WebMvcAutoConfiguration
```

