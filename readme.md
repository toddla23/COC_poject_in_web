GitHubConnected

check GIT Commit message 

GRANT EXECUTE, SELECT, SHOW VIEW, ALTER, ALTER ROUTINE, CREATE, CREATE ROUTINE, CREATE TEMPORARY TABLES, CREATE VIEW, DELETE, DROP, EVENT, INDEX, INSERT, REFERENCES, TRIGGER, UPDATE, LOCK TABLES  ON `coc_spring_mvc`.* TO 'coc_spring_mvc_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="http://www.springframework.org/schema/beans https://www.springframework.org/schema/beans/spring-beans.xsd">

 <!-- Root Context: defines shared resources visible to all other web components -->

 <!-- for mysql -->
 <bean id="dataSource"
  class="org.apache.commons.dbcp2.BasicDataSource"
  destroy-method="close">
  <property name="driverClassName"
   value="com.mysql.cj.jdbc.Driver" />
  <property name="url"
   value="jdbc:mysql://localhost:3306/coc_spring_mvc?serverTimezone=UTC&amp;useSSL=false&amp;useUnicode=true&amp;characterEncoding=UTF-8" />
  <property name="username" value="coc_spring_mvc_user" />
  <property name="password" value="1234" />
 </bean>

 <bean id="sqlSessionFactory"
  class="org.mybatis.spring.SqlSessionFactoryBean">
  <property name="dataSource" ref="dataSource" />
  <property name="mapperLocations"
   value="classpath:/sqlmap/**/*_SQL.xml" />
 </bean>
 <bean id="sqlSessionTemplate"
  class="org.mybatis.spring.SqlSessionTemplate">
  <constructor-arg index="0" ref="sqlSessionFactory" />
 </bean>  
</beans>



CREATE TABLE `coc_sheet` (
  `user_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `characterName` VARCHAR(200) NOT NULL,
  `playerName` VARCHAR(200) NOT NULL,
  `characterJob` VARCHAR(200) NOT NULL,
  `characterAge` VARCHAR(200) NOT NULL,
  `characterGender` VARCHAR(200) NOT NULL,

  `STR` INT NOT NULL,
  `DEX` INT NOT NULL,
  `POW` INT NOT NULL,
  `CON` INT NOT NULL,
  `APP` INT NOT NULL,
  `EDU` INT NOT NULL,
  `SIZ` INT NOT NULL,
  `intelligence` INT NOT NULL,
  `LUK` INT NOT NULL,
  `occupationScore` INT,
  `interestScore` INT,
  `bonusScore` INT,
  `totalScore` INT,
`a` INT,
`b` INT,
`c` INT,
`d` INT,
`e` INT,
`f` INT,
`g` INT,
`h` INT,
`i` INT,
`j` INT,
`k` INT,
`l` INT,
`m` INT,
`n` INT,
`o` INT,
`p` INT,
`q` INT,
`r` INT,
`s` INT,
`t` INT,
`u` INT,
`v` INT,
`w` INT,
`x` INT,
`y` INT,
`z` INT,
`aa` INT,
`ab` INT,
`ac` INT,
`ad` INT,
`ae` INT,
`af` INT,
`ag` INT,
`ah` INT,
`ai` INT,
`aj` INT,
`ak` INT,
`al` INT,
`am` INT,
`an` INT,
`ao` INT,
`ap` INT,
`aq` INT,
`ar` INT,
`aaa` INT,
`bbb` INT,
`ccc` INT,

 PRIMARY KEY (`user_id`)
)
COLLATE='utf8mb4_general_ci'
;



CREATE TABLE `user_table` (
  `user_cnt` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(200) NOT NULL,
  `id` VARCHAR(200) NOT NULL,
  `pw` VARCHAR(200) NOT NULL,
  `sheet_id1` INT,
  `sheet_id2` INT,
  `sheet_id3` INT,
  `sheet_id4` INT,
  `sheet_id5` INT,


 PRIMARY KEY (`user_CNT`)
)
COLLATE='utf8mb4_general_ci'
;

#{characterName}, #{playerName}, #{characterJob}, #{characterAge}, #{characterGender}, #{STR}, #{DEX}, #{POW}, #{CON}, #{APP}, #{EDU}, #{SIZ}, #{intelligence}, #{LUK}, #{occupationScore}, #{interestScore}, #{bonusScore}, #{totalScore}, #{a}, #{b}, #{c}, #{d}, #{e}, #{f}, #{g}, #{h}, #{i}, #{j}, #{k}, #{l}, #{m}, #{n}, #{o}, #{p}, #{q}, #{r}, #{s}, #{t}, #{u}, #{v}, #{w}, #{x}, #{y}, #{z}, #{aa}, #{ab}, #{ac}, #{ad}, #{ae}, #{af}, #{ag}, #{ah}, #{ai}, #{aj}, #{ak}, #{al}, #{am}, #{an}, #{ao}, #{ap}, #{aq}, #{ar}, #{aaa}, #{bbb}, #{ccc}
 value="#{data.}"