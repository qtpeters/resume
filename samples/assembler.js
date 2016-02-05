#!/usr/local/bin/node

module.exports = ( function() {
   
   var fs = require( 'fs' );
   var Q = require( 'Q' );
   var folder = process.argv[2];

   if ( typeof folder === 'undefined' ) {
      console.log( "Specify a folder" );
   } else {
      var mainFile = folder + '/' + folder + '.json';
      var options = {
         encoding: 'utf8'
      }

      fs.readFile( mainFile, options, function( err, data ) {
         var main = JSON.parse( data );

         
         console.log( main ); 
         fs.readir( folder, function( err, items ) {
            
         });
      });
   }
}());

