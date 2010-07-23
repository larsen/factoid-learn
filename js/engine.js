var state_to_guess;

function my_debug( string ) {
    // alert( string );
}

function pick( map ) {

    var keys = new Array();
    $.each( factoids, function( key, value ) { keys.push( key ) } )
    var l = keys.length;

    return keys[ Math.floor(Math.random()*l +1) ];
}

$(document).ready( 

    function() {

        $("#new_game").click( 
            function() {
                my_debug( "here" );
                $('#answer').val("");
                $('#evaluation').html("");
                state_to_guess = pick( factoids );
                $('#state').html( state_to_guess );
                $('#answer').focus();
            }
        );

        $("#answer").change( 
            function() {

                var answer = $("#answer").val();

                if ( answer == factoids[ state_to_guess ] ) {
                    $("#evaluation").html( "YEAH" );
                }
                else {
                    $("#evaluation").html( "No, the correct answer was " 
                        + factoids[ state_to_guess ] );
                }
            }
        );

    }
);
