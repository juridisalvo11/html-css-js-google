//Intercetto il click sul menù dropbox
// $('.dropbox-icon').click(function(){
//     $('.dropbox').toggleClass('active');
// })

//Intercetto il click sull'icona del dropbox
$('.dropbox-icon').click(function() {
    //Controllo se ha la classe active
    if ($('.dropbox').hasClass('active')) {
        //Se ha la classe active la tolgo
        $('.dropbox').removeClass('active');
    } else {
        //Se non ha la classe active la metto
        $('.dropbox').addClass('active');
    }

})

//Intercetto il click sulla classe hide-popup
$('.hide-popup').click(function() {
    //Inerisco effetto fadeout per scomparire il popup
    $('.privacy-box').fadeOut()
})
