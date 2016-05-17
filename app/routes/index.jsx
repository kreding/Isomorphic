if(typeof require.ensure !== 'function') require.ensure = (d, c) => c((t)=>{let s = require(t);s.default = s; return s});

import App from 'components/App';
import Home from 'components/Home';
import Me from 'components/Me';

export default {
  path: "/",
  component: App,
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [ require("./about").default ])
    })
  },
  indexRoute: {
    component: Me
  }
}
