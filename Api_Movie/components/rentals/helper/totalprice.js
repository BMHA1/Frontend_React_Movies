const Movie = require('../../movie/model');


module.exports.totalprice= async(...price)=>{

    const res = await Movie.findOne().map(res => {
        // Sets a `loadedAt` property on the doc that tells you the time the
        // document was loaded.
        return res == null ?
          res :
          Object.assign(res, { loadedAt: new Date() });
      });
    

}

   