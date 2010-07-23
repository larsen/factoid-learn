var state_to_guess;
var score = 0;
var questions = 0;

function my_debug( string ) {
    // alert( string );
}

function pick( map ) {

    var keys = [];
    $.each( factoids, function( key, value ) { keys.push( key ) } )
    var l = keys.length;

    return keys[ Math.floor(Math.random()*l +1) ];
}

function update_score() {
    $('#score').html( score );
    $('#questions').html( questions );
}

function new_game() {
    my_debug( "here" );
    $('#answer').val("");
    $('#evaluation').html("");
    state_to_guess = pick( factoids );
    $('#state').html( state_to_guess );
    $('#answer').focus();
    questions++;
    update_score();
}

$(document).ready( 

    function() {

        $("#new_game").click( 
            function() {
                new_game();
            }
        );

        $("#answer").change( 
            function() {

                var answer = $("#answer").val();

                if ( answer == factoids[ state_to_guess ] ) {
                    $("#evaluation").html( "YEAH" );
                    score++;
                }
                else {
                    $("#evaluation").html( "No, the correct answer was " 
                        + factoids[ state_to_guess ] );
                }
                $("#new_game").focus();
            }
        );

        new_game();
    }
);
