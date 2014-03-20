$(document).ready(function(){
    $('#countdown_div').countdown({date: "August 31, 2014 16:00:00"});

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
    	$('#rsvpModal').modal('show');
    });
    $('#social_icon').click(function(){
    	$('#socialModal').modal('show');
    });
    $('#story_icon').click(function(){
    	$('#storyModal').modal('show');
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
});