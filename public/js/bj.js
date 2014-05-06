$(document).ready(function(){
    $('#countdown_div').countdown({date: "August 31, 2014 16:00:00"});
    $('.carousel').each(function(){
        $(this).carousel({
            pause: true,
            interval: false
        });
    });

    $('#travel_icon').click(function(){
    	$('#travelModal').modal('show');
    });
    $('#details_icon').click(function(){
    	$('#detailsModal').modal('show');
    });
    $('#photos_icon').click(function(){
    	$('#photosModal').modal('show');
    });
    $('#registry_icon').click(function(){
    	$('#registryModal').modal('show');
    });
    $('#rsvp_icon').click(function(){
    	$("#rsvp_success").hide();
    	$("#rsvp_error").hide();
    	$("#rsvp_warning").hide();
    	$('#rsvpModal').modal('show');
    });
    $('#tourney_icon').click(function(){
    	$('#tourneyModal').modal('show');
    });

    $('.modal').on('hide.bs.modal', function(){
    	$('#body_div').show();
    });
    $('.modal').on('show.bs.modal', function(){
    	$('#body_div').hide();
    });

    $('input[name="rsvp_options"]').on('change', function(){
    	if($(this).val() == 'rsvp_yes'){
    		$('#rsvp_number_div').show();
    		$('#rsvp_attending').val(true);
    	}else{
			$('#rsvp_number_div').hide();
			$('#rsvp_attending').val(false);
    	}
    	quickValidation();
    });
    $('#rsvp_name').on('keyup', function(){
    	quickValidation();
    });
    $('#rsvp_number').on('change', function(){
    	quickValidation();
    });

    var quickValidation = function(){
    	if($('#rsvp_attending').val() && $('#rsvp_attending').val() != ''
    		&& $('#rsvp_name').val() && $('#rsvp_name').val() != ''){
    		$('#rsvp_submit').removeClass('disabled');
    	}else{
    		$('#rsvp_submit').addClass('disabled');
    	}
    };

    $('#rsvp_submit').click(function(){
    	var $this = $(this);
    	$this.button('loading');

    	$('#rsvp_submit').addClass('disabled');
    	$("#rsvp_success").hide();
    	$("#rsvp_error").hide();
    	$("#rsvp_warning").hide();

    	var rsvp_data = {
    		'rsvp_attending' : $('#rsvp_attending').val(),
    		'rsvp_name' : $('#rsvp_name').val(),
    		'rsvp_number' : $('#rsvp_number').val(),
    	};
    	$.post(
    		'./rsvp',
    		rsvp_data,
    		function(data){
    			if($('#rsvp_attending').val() == "true"){
    				$("#rsvp_success").show();
    			}else{
    				$("#rsvp_warning").show();
    			}
    			$this.button('reset');
    			$('#rsvp_submit').removeClass('disabled');
    		})
    	.fail(function() {
    		$("#rsvp_error").show();
    		$this.button('reset');
    		$('#rsvp_submit').removeClass('disabled');
  		});
    });
});