$(document).ready(function () {
    $("#button").click(function () {

        $("#button").fadeOut();
        //inserir aqui o gif com a cena tipo portal (se ainda aplicável)
        $('body').fadeOut(2000);

        //depois da animação, muda de página (para a primeira página)
        (function () {
            setTimeout(function () {
                window.location.href = 'pages.html';
            }, 2000);
        })();

    });
});

/*
$("#button").click(function () {
    $("#button").fadeOut();
    //inserir aqui o gif com a cena tipo portal (se ainda aplicável)
    $('body').fadeOut(2000);

});
//depois da animação, muda de página (para a primeira página)

setTimeout(function () {
    nextPage = true;
    window.location.href = 'pages.html#secondPage';
}, 2000);
}

*/