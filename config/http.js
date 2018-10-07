/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
   *                                                                           *
   * Sails/Express middleware to run for every HTTP request.                   *
   * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
   *                                                                           *
   * https://sailsjs.com/documentation/concepts/middleware                     *
   *                                                                           *
   ****************************************************************************/

  middleware: {

    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP requests.           *
     * (This Sails app's routes are handled by the "router" middleware below.)  *
     *                                                                          *
     ***************************************************************************/

    // order: [
    //   'cookieParser',
    //   'session',

    //   'compress',
    //   'poweredBy',
    //   'router',
    //   'www',
    //   'favicon',
    // ],
    order: [
      'webLogWriter',
      'bodyParser',
    ],



    // https://jwt.io

    
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1Mzg3NTk1MjYsImV4cCI6MTUzODc2MDcyNn0.E7xKgEfWjE0QQGZKDWGQka5N9Wx8SmWcIMuQsh1D_do
    
    /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests.       *
     *                                                                          *
     * https://sailsjs.com/config/http#?customizing-the-body-parser             *
     *                                                                          *
     ***************************************************************************/

    bodyParser: (function _configureBodyParser() {
      var skipper = require('skipper');
      var middlewareFn = skipper({
        strict: true
      });
      return middlewareFn;
    })(),


    webLogWriter: function (req, res, next) {
      //write everything to a log file
      var fs = require('fs');
      var logEntry = (new Date()) + ' ' + req.method + ' ' + req.url;
      fs.writeFileSync('./weblog.log', logEntry, function (err) {
        if (err) throw err;
      });

      return next();
    },
  },

};