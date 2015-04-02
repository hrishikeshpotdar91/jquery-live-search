 $( ".search" ).keyup( function () {

     var data = $( ".search" ).val().trim().toLowerCase();

     $( "div" ).each( function () {
         var txt = $( this ).find( 'p' ).text().trim().toLowerCase();

         if ( txt.match( data ) && data != " " && data != "" ) {

             $( this ).css( {
                 display: 'block'
             } );

         } else {
             $( this ).css( {
                 display: 'none'
             } );
         }

         if ( data == null || data == " " || data == "" ) {
             $( this ).css( {
                 display: 'block'
             } );

         }

     } );

 } );
