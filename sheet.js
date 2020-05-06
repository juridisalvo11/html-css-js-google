//Intercetto il click sul menù dropbox
// $('.dropbox-icon').click(function(){
//     $('.dropbox').toggleClass('active');
// })


$('.dropbox-icon').click(function() {
    if ($('.dropbox').hasClass('active')) {
        $('.dropbox').removeClass('active');
    } else {
        $('.dropbox').addClass('active');
    }
})
