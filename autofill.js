$(document).ready(function(){


    $("#person_info").hide();
    
    $("#show_name_button").click(function(event,ui){

             var staff_name_id = $('#name_input').val();                       
             $("#person_info").show();
                          
            $.ajax({
                type: 'POST',                
                url: 'ajax_autocomplete.php?first_name='+staff_name_id+'',
                success: function(data) {
                    var res = data.split("~");
                    $("#first_name").html(res[0]);
                    $("#last_name").html(res[1]);
                    $("#dob").html(res[2]);
                    $("#gender").html(res[3]);      
                }
            }); 
    });


});


