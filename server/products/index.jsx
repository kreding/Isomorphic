import fs from 'fs';
import express from 'express';

import JobInfo from 'server/controller/demo'

const router = express.Router();

router.post('/cart/update', (req, res) => {
    fs.writeFile('./server/mock/fake-database-cart.js', `var cart = ${JSON.stringify(req.body.cart)};\n\nexport default cart;`, () => {
        console.log('Cart updated!');
    });
    
    JobInfo.save().then((result)=>{
      return JobInfo.selectAll()
    }).then((result)=>{
      let rows = result.rows;
      res.send(rows);
    }).catch((err)=>{
      res.status(500).send({error: err})
    });

});

export default router;
