
<script src="<?php echo URLROOT; ?>/js/scripts.js"></script>
<script src="<?php echo URLROOT; ?>/js/social.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
<script src="<?php echo URLROOT; ?>/js/lightslider.js"></script>

<script type="text/javascript">

$(document).ready(function(){
$('.slider').slider({full_width: true});
$(".button-collapse").sideNav();

$('#image-gallery').lightSlider({
                gallery:true,
                item:1,
                thumbItem:7,
                slideMargin: 0,
                loop: true,

            });
$('#image-gallery1').lightSlider({
     gallery:true,
    item:1,
    thumbItem:7,
    slideMargin: 0,
    loop:true,
});
$('#image-gallery2').lightSlider({
     gallery:true,
    item:1,
    thumbItem:7,
    slideMargin: 0,
    loop:true,
});    
$('#image-gallery3').lightSlider({
     gallery:true,
    item:1,
    thumbItem:7,
    slideMargin: 0,
    loop:true,
});   
$('#image-gallery4').lightSlider({
     gallery:true,
    item:1,
    thumbItem:7,
    slideMargin: 0,
    loop:true,
});  

$('#slider-new-products').lightSlider({
    gallery:false,
    item:1,
    pauseOnHover:true,
    slideMargin: 0,
    loop:true,
});  
});
</script>

<footer class="container" >
    <p class="rights-reserved">
         &copy;<span id="year"> </span> Bella Rouge Nail Salon &amp; Spa. All rights reserved.
   </p>
 </footer>
</body>
</html>