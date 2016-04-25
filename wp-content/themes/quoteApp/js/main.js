
jQuery(document).ready( function( $ ) {
  $(window).load( function(e) {
    e.preventDefault();
    $.ajax( {
      type: 'GET',
      dataType: 'json',
      url: main_script_vars.rest_url+'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',

      success: function ( data ) {
        console.log(data);
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $( '#quote-title' ).html( post.title.rendered );
        $( '#quote-content' ).html( post.content.rendered );
      },
      cache: false
    } );
  });

  $( '#get-another-quote-button' ).on( 'click', function ( e ) {
    e.preventDefault();
    $.ajax( {
      type: 'GET',
      dataType: 'json',
      url: main_script_vars.rest_url+'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',

      success: function ( data ) {
        console.log(data);
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $( '#quote-title' ).text( post.title.rendered );
        $( '#quote-content' ).html( post.content.rendered );
      },
      cache: false
    } );
  } );
} );
