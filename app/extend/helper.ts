module.exports = {
    async myReq( url, options ) {

      const backupResult = {
        data: null,
        message: null,
        status: 500,
      };

      try {

        options = Object.assign({ }, options, {
          dataType: 'json',
          contentType: 'json',
        });

        options.headers = Object.assign({ }, options.headers, {
        //   'x-auth-token': this.ctx.cookies.get('x-auth-token'),
        });

        this.ctx.logger.info(`[Api] ${url} request options: ${JSON.stringify( options)}`);

        const req = await this.ctx.curl( url, options );
        const status = req.data.status || req.data.statusCode;

        this.ctx.logger.info(`[Api] ${url} result: ${JSON.stringify( req.data )}`);

        if ( Number( status ) !== 0 && Number( status ) !== 200 ) {
          return Object.assign( backupResult, {
            message: req.data.message,
          });
        }

        const data = req.data;
        return Object.assign( data, {
          status: 200,
        });

      } catch ( e ) {
        this.ctx.logger.error(`[Api] ${url} error: ${JSON.stringify( e )}`);
        return Object.assign( backupResult, {
          message: JSON.stringify( e ),
        });
      }
    },
  };