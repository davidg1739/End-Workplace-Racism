$(function () {
    var active = $('.home-item');
    $('.nav-link').click(function () {
       var page = $(this).html();
       console.log(page);
       
       if (page == "Home") {
           $(".about").css('display','none');
           $(".resources").css('display','none');
           $(active).toggleClass('active');
           active = $('.home-item');
           $(active).toggleClass('active');
           $(".home").css('display','block');
           
       }
       else if (page == "About Us") {
           $(".home").css('display','none');
           $(".resources").css('display','none');
           $(active).toggleClass('active');
           active = $('.about-item');
           $(active).toggleClass('active');
           $(".about").css('display','block');
       }
       else if (page == "Resources") {
           $(".home").css('display','none');
           $(".about").css('display','none');
           $(active).toggleClass('active');
           active = $('.resources-item');
           $(active).toggleClass('active');
           $(".resources").css('display','block');
       }
    });
})