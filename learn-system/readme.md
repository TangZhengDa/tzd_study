# 学习系统
    客户？我
    需求 存储同学信息， OA
 - 学籍
  1. 同学信息登录及完善系统
     原型设计表单 小piu
  2. 照片上传功能
     云开发文件上传
- 项目形式
  1. 小程序 用户端
      vant + 云开发
      微信/QQ小程序
  2. pc端的Admin 后台系统
      vue + ElementUI
      分班级 分页 列表
      详情

- 功能要求
  1. 角色区分
      Admin/teacher/stuAdmin/student|tryStudent
       user _id uid(学号 10000) pro_num has_resume has_job shixi_danwei zhuanzheng_danwei shixi_payment zhuanzheng_payment score score(荣誉) bid
  2. 试听功能|邀请功能 运营 分享
      生成图功能 百度一下
      https://juejin.im/post/6844903663840788493
  3. 学习跟进系统
    - github 提交记录
     收集用户账号
    - 主动提交
     1. 每个人都一张图 新的覆盖旧的
         gitpic _id url uid bid
     2. ts 标红
     3. 列表 班级
    - 文章
     articles
     _id uid title desc ts is_top love_num url
     love_num 怎么计算
     user love_num 0 articles count sava >0写文章
     post_article
    - 项目
    - leetcode 算法 github
    - 外包
     计时计件 倒计时
     提交代码记录
     付费记录
     开源出去
      


