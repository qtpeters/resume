

module.exports = ( function() {

   var graceland = require( 'graceland' );

      graceland.register({
         id: 'assembler',
         factory: require( './assembler' )
      });

      graceland.register({
         id: 'Q',
         lib: require( 'q' )
      });
      
      graceland.register({
         id: 'fs',
         lib: require( 'fs' )
      });

      graceland.register({
         id: '_',
         lib: require( 'lodash' )
      });
 
      graceland.play();

})();
