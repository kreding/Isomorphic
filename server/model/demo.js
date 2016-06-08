import Base from './Postgre.js'
import _values from 'lodash/values'

class JobInfo extends Base{
  constructor(obj){
    super();
    this.params = obj;
    this.sql_option = {
      "select_all":"SELECT * FROM job",
      "insert":"INSERT INTO job(user_id,title,company,isvip,area,jobyear,address,pay,content,mobile,email,ext) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)"
    }
  }

  save(){
    return this.query(this.sql_option.insert, _values(this.params))
      .then((result)=>{
        return result;
      }).catch((err)=>{
        return err;
      });
  }

  selectAll(){
    return this.query(this.sql_option.select_all, [])
      .then((result)=>{
        return result;
      }).catch((err)=>{
        return err;
      });
  }
}

export default JobInfo;
