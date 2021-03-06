/**
 * 主框架模板
 * @param  {[type]} templateParams [description]
 * @return {[type]}                [description]
 */
module.exports = function( templateParams ){
  const HTML = '\
      <!DOCTYPE html>\
      <html>\
        <head>\
          <meta charset="utf-8">\
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\
          <title>'+ templateParams.htmlWebpackPlugin.options.title +'</title>\
          <script>\
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}\
          </script>\
        </head>\
        <body>\
          <div id="app">${componentHTML}</div>\
        </body>\
      </html>\
  ';

  return HTML;
}
