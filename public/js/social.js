document.getElementById('shareSpaMani').onclick = function() {
  FB.ui({
    method: 'share',
    display:'popup',
    title:'Bella Rouge | Kentfield',
    description: 'Spa Manicure :' +
                 'Nails are soaked in warm water'     +
                 'then shaped and filed. Cuticles'    +
                 'are cleaned and trimmed'            +
                 'afterwards. Received a soothing '   +
                 'hot oil  treatment with a massage ' +
                 'and awarm towel wrap. Nails are'    +
                 'finished with your choice of polish.',
    picture:'http://www.bellarougenailspa.com/images/slide-1.jpg',
    href:'http://www.bellarougenailspa.com/kentfield.html',
  }, function(response){});
}

document.getElementById('shareShellac').onclick = function() {
  FB.ui({
    method: 'share',
    display:'popup',
    title:'Bella Rouge | Kentfield',
    picture:'http://www.bellarougenailspa.com/images/services/shellac.jpg',
    description: 'Shellac Manicure :'   +
                 'File &amp; shape nails,' +
                 'cuticle care, base coat ' +
                 'shellac, two coats color '+
                 'shellac, top coat shellac' +
                 'UV cure ',
    href: 'http://www.bellarougenailspa.com/kentfield.html',
  }, function(response){});
}

document.getElementById('shareSpaPedi').onclick = function() {
  FB.ui({
    method: 'share',
    display:'popup',
    title:'Bella Rouge | Kentfield',
    picture:'http://www.bellarougenailspa.com/images/services/pedi-nails.jpg',
    description:'Spa Pedicure:'+
                 'Experience a relaxing soak in our luxurious'+
                 'spa chair. Includes nail shaping,' +
                 'cuticle trimming and hot oil and'+
                 'hot stone foot massage followed ' +
                 'by hot steam towels. Finished with a'+
                 'polish application to make your feet' +
                 'look and feel rejuvenated.',

    href: 'http://www.bellarougenailspa.com/kentfield.html',
  }, function(response){});
}

document.getElementById('shareDeluxePedi').onclick = function() {
  FB.ui({
    method: 'share',
    display:'popup',
    title:'Bella Rouge | Kentfield',
    picture:'http://www.bellarougenailspa.com/images/services/pedi-bowl.jpg',
    description:'Deluxe Pedicure:'+
                 'In addition to the Spa Pedicure experience the'+
                 'skin is exfoliated with Sea Salt ' +
                 'and essential herbs oil that will' +
                 'leave your skin smooth and fresh' +
                 'then rinse to prepare for a sooting'+
                 'hot lotion treatment that includes' +
                 'a 10min hot stone massage.'+
                 'Finally a milk-avocado application'+
                 'will finish this pedicure to leave your'+
                 'feet and legs soft and smooth.',

    href: 'http://www.bellarougenailspa.com/kentfield.html',
  }, function(response){});
}

var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-77739310-1', 'auto');
 ga('send', 'pageview');