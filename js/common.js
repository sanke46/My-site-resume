$(document).ready(function() {


	$(function(){
	    var BV = new $.BigVideo({useFlashForFirefox:false});
		BV.init();
	    BV.show('http://video-js.zencoder.com/oceans-clip.mp4',{ambient:true});
	});

	$(".form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Thank for you message, i will answer you soon");
            $(".form").trigger("reset");
           window.location.href = '/';
        });
        return false;
    });

}); 

jQuery(function($){
	$(".navitor a").mPageScroll2id({
	    offset : 50,
	    speed : 200
	});
});
	

