/**
 * Postgres连接配置
 */
import pg from 'pg';
import config from 'server/config/db';

class Base{
  connect(){
    return new Promise((resolve, reject)=>{
      pg.connect(config.pg_connect, (err, client, done)=>{
        if(err){
          reject(err);
        }else{
          resolve({client, done});
        }
      });
    });
  }

  query(sql, params){
    if(!params){
      params=[]
    }

    if(!sql){
      throw new Error("SQL is empty!");
    }

    //是否打印SQL语句
    if (config.debug) {
        console.log('[SQL:]', sql, '[:SQL]');
        console.log('[PARAMS:]', params, '[:PARAMS]');
    }
    return this.connect()
      .then((result)=>{
        let client = result.client;
        let done = result.done;

        return new Promise((resolve, reject)=>{
          client.query(sql, params, (err, res)=>{
            done();

            if(err){
              reject(err);
            }else{
              resolve(res);
            }
          });
        });

      });
  }
}

export default Base;
