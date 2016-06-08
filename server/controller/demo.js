import JobInfo from 'server/model/demo'

export default {
  save(){
    //实例化时传入一个对象
    var jobInfo=new JobInfo({
        user_id:'11111',
        title:"测试1",
        company:"aaa",
        isvip:false,
        area:"玉泉",
        jobyear:5,
        address:"bbbbb",
        pay:"10",
        content:"cccccc",
        mobile:"13800138000",
        email:"dd@ee.com",
        ext:""
    });
    //调用 jobInfo 对象上的 save 方法.
    return jobInfo.save();
  },

  selectAll(){
    var jobInfo=new JobInfo();
    return jobInfo.selectAll();
  }
}
