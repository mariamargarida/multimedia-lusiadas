$(document).ready(function () {
    var sunRotated = false,
        adamOpacity = false,
        personHover = false,
        sword = false,
        heart = false,
        adamClose = false,
        adamRun = false,
        heartBroken = false,
        neptunoVanish = false,
        weather = false,
        time2 = false, //section 2
        alltext = false, //section 3
        cloudDropped = false, //section 4
        exclamationClicked = false, //section 6
        shipDropped = false;


    //index 3
    var indeximages38 = 0,
        images = [];
    images[0] = "img/38-Speech_bubble.png";
    images[1] = "img/38-Speech_bubble2.png";
    images[2] = "img/38-Speech_bubble3.png";
    images[3] = "img/38-Speech_bubble4.png";


    var img = document.getElementById("speech-38-2"),
        //index 8
        boolean8 = false,
        boolean9 = false,
        boolean11 = false,
        //index 15
        sword1 = false,
        sword2 = false,
        sword3 = false,
        //index 16
        zoo = 20,
        opacity52 = 0,
        leftTetis = 43,
        //index17
        clicks = 0,
        //index18
        clicksC = 0,
        //index 19
        tetisReveal = false,
        //index 20
        clicksB = 0,
        brokenHeart = $("#broken-heart"),
        //index 21
        opacityW = 1;

    $("#tetis52").css("width", zoo + "%");
    $('#tetis-clothes-52').css("opacity", opacity52);
    $('#tetis-clothes-52').css("margin-left", leftTetis + "%");

    myAudioPrincipal = new Audio("audio/Haunting_Dreams.mp3");

    myAudioPrincipal.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudioPrincipal.play();


    $('#fullpage').fullpage({
        touchSensitivity: 1,

        onLeave: function (anchorLink, index) {

            if (index === 2 && sunRotated === false) {
                // console.log("");
                sunMove();

                if (days < 1) {

                    return false;
                }

            }

            if (index === 3 && time2 === false) {
                setTimeout(function () {
                    time2 = true;
                    // console.log("time2 a true");
                }, 1000);


                return false;

            }

            if (index === 4 && alltext === false) {
                moveWaves38();
                moveShip38();
                setTimeout(function () {
                    alltext = true;
                }, 2000);

                if (alltext === false) {
                    return false;
                }
            }

            if (index === 5 && cloudDropped === false) {
                $("#arrow-39").css("display", "block");
                $("#arrow-2-39").css("display", "block");
                return false;

            }

            if (index === 6 && adamOpacity === false) {
                var opacity = 0;
                if (opacity < 1) {
                    setInterval(function () {
                        opacity += 0.01;
                        $("#Adam39").css('opacity', opacity);
                    }, 20);
                }

                setTimeout(function () {
                    adamOpacity = true;
                }, 2000);
                return false;
            }





            if (index === 7 && exclamationClicked === false) {
                return false;




            }
            if (index === 8 && boolean8 === false) {
                setTimeout(function () {
                    boolean8 = true;
                    // console.log("time2 a true");
                }, 1000);
                return false;
            }



            if (index === 9 && boolean9 === false) {
                var widthShip46 = $('.ship-46-48-2').width() / 2,
                    heightShip46 = $('.ship-46-48-2').height() / 2;

                $(window).mousemove(function (e) {
                    var angulo = e.pageX / $(window).width() * 5;

                    $('.ship-46-48-2').css('transform', 'rotate(' + angulo + 'deg)');

                    var leftShip = e.pageX / $(window).width() * 7 - 3.5 + 12;
                    $('.ship-46-48-2').css("margin-left", leftShip + "%");

                });
                setTimeout(function () {
                    boolean9 = true;
                    // console.log("time2 a true");
                }, 2000);
                return false;


            }

            if (index === 10 && shipDropped === false) {
                return false;
            }

            if (index === 11 && boolean11 === false) {
                var images = [],
                    x = 0;

                images[0] = "img/49SpeechBallon1.png";
                images[1] = "img/49SpeechBallon2.png";
                //$('#speech_38').fadeIn('fast').delay(1000);

                function changeImage() {
                    var img = document.getElementById("speech_50");
                    img.src = images[x];
                    x += 1;

                    if (x >= images.length) {
                        x = 0;
                    }
                    setTimeout(changeImage, 3000);
                }
                changeImage();

                setTimeout(function () {
                    boolean11 = true;
                    // console.log("time2 a true");
                }, 2000);
                return false;
            }

            if (index === 12 && personHover === false) {


                $('#person-46-48-light').hover(function () {
                    $('#person-46-48-light').animate({
                        opacity: 0
                    }, 3000);
                    $('#person-46-48-3').animate({
                        opacity: 1
                    }, 3000, function () {
                        personHover = true;
                    });
                });

                return false;
            }


            if (index === 15 && sword === false) {




                $(window).mousemove(function (e) {

                    var angulo = -50 + 100 * e.pageX / $(window).width(),
                        swordSize = e.pageY / $(window).height() * 30 + 40,
                        largura = $('.sword-50-51').width() / 2,
                        altura = $('.sword-50-51').height()/1.5;

                    $('.sword-50-51').css('transform', 'rotate(' + angulo + 'deg)');
                    $('.sword-50-51').css({

                        left: e.pageX - largura,
                        top: e.pageY - altura,
                        width: swordSize + "%"
                    });

                    $('.sword-50-51').css("opacity", 1);
                    //  console.log(sword1 + " " + sword2 + " " + sword3);
                    if (sword1 === true && sword2 === true && sword3 === true) {

                        sword = true;

                    }

                });

                $("#cloudGreen").click(function () {
                    sword1 = true;
                    $("#cloudGreen").fadeOut(1000);

                });
                $("#cloudRed").click(function () {
                    sword2 = true;
                    $("#cloudRed").fadeOut(1000);

                });
                $("#cloudYellow").click(function () {
                    sword3 = true;
                    $("#cloudYellow").fadeOut(1000);


                });

                return false;
            }




            if (index === 16 && neptunoVanish === false) {

                $(window).bind('mousewheel', function () {


                    if (zoo < 100) {
                        zoo += 0.01;
                        $('#tetis-clothes-52').css("width", zoo + "%");
                        opacity52 += 0.0001;
                        $('#tetis-clothes-52').css("opacity", opacity52);
                        leftTetis -= 0.0045;
                        $('#tetis-clothes-52').css("margin-left", leftTetis + "%");
                    } else if (zoo >= 100 && zoo <= 150) {
                        zoo += 0.01;
                    } else if (zoo > 150 && zoo < 250) {
                        zoo += 0.005;
                        //$('.adam-53').css("width", 200 - zoo  + "%");
                        $('.adam-53').css("margin-left", 150 - zoo + "%");

                    } else {

                        neptunoVanish = true;
                    }

                });

                return false;
            }

            if (index === 17 && heart === false) {


                if (clicks > 10) {
                    heart = true;
                }
                return false;
            }

            if (index === 18 && adamClose === false) {


                $('.tetis-without-clothes').click(function () {
                    clicksC += 1;
                    if (clicksC < 3) {
                        $('.tetis-without-clothes').animate({
                            width: "+=50",
                            left: "-=25"
                        }, 1000);
                    }
                    if (clicksC >= 3) {

                        $(".tetis-without-clothes").fadeOut(3000);



                        adamClose = true;
                    }

                });

                return false;
            }


            // #56
            /*if (index == 18 && adamRun == false) {
             $('.tetis-without-clothes').click(function () {
             if (e.keyCode == 37) { // left
             $("#showroom").animate({
             left: "-=980"
             });
             }
             else if (e.keyCode == 39) { // right
             $("#showroom").animate({
             left: "+=980"
             });
             }
             });
             setTimeout(function () {
             adamRun = true;
             }, 1000);
             return false;
             } */

            if (index === 19 && tetisReveal === false) {

                setTimeout(function () {
                    tetisReveal = true;
                }, 1000);
                return false;
            }

            if (index === 20 && heartBroken === false) {


                $(brokenHeart).click(function () {
                    clicksB += 1;
                    if (clicksB === 1) {
                        $(brokenHeart).attr("src", "img/57-59Coracao2.png");
                    }
                    if (clicksB === 2) {
                        $(brokenHeart).attr("src", "img/57-59Coracao3.png");
                    }
                    if (clicksB === 3) {
                        $(brokenHeart).attr("src", "img/57-59Coracao4.png");
                    }
                    if (clicksB === 4) {
                        $(brokenHeart).attr("src", "img/57-59Coracao5.png");
                    }
                    if (clicksB === 5) {
                        $(brokenHeart).attr("src", "img/57-59Coracao6.png");
                    }
                    if (clicksB === 6) {
                        $(brokenHeart).attr("src", "img/57-59Coracao7.png");
                    }
                    if (clicksB === 7) {
                        $(brokenHeart).attr("src", "img/57-59Coracao8.png");
                    }
                    if (clicksB === 8) {
                        $(brokenHeart).attr("src", "img/57-59Coracao9.png");
                    }

                });

                if (clicksB > 9) {
                    heartBroken = true;
                }
                return false;
            }

            if (index === 21 && weather === false) {

                $(window).bind('mousewheel', function () {
                    console.log("entrou ultima secção");
                    if (opacityW > 0) {
                        opacityW -= 0.0002;
                        $("#backgroundGone").css('opacity', opacityW);
                        $("#cloud-57").css('opacity', opacityW);
                        $("#cloud-57-3").css('opacity', opacityW);
                    } else {
                        weather = true;
                    }
                });

                return false;
            }
            if (index === 22) {

            }
            if (index === 23) {

            }
        },

        //first slide of the second section
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage', 'sixPage', 'sevenPage', 'eightPage', 'ninePage', 'tenPage', 'elevenPage',
            'twelvePage', 'thirteenPage', 'fourteenPage', 'fifteenPage', 'sixteenPage', 'seventeenPage', 'eighteenPage', 'nineteenPage', 'twentyPage', 'twentyOnePage'],

        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);
        }
    });

    function moveWaves38() {
        $("#wave-38").animate({
            marginTop: 8
        }, 1500, function () {
            $("#wave-38").animate({
                marginTop: 0
            }, 1500, function () {
                moveWaves38();
            });
        });
    }

    function moveShip38() {
        $("#ship-38").animate({
            marginTop: 14
        }, 1000, function () {
            $("#ship-38").animate({
                marginTop: 0
            }, 1000, function () {
                moveShip38();
            });
        });
    }


    var sunAngle = Math.PI / 3,
        days = 0,
        topVar = 25 * Math.cos(sunAngle + Math.PI) + 10,

        sTopVar = topVar + "%";

    document.getElementById("sun").style.marginBottom = sTopVar;

    var leftVar = 35 * Math.sin(sunAngle) + 50,
        leftBoat = $("#ship-37").position().left;

    $("#sun").css({
        left: leftVar + "%"
    });

    function sunMove() {
        $(window).bind('mousewheel', function () {

            if (days < 1) {
                sunAngle += 0.0003;

                var topVar = 25 * Math.cos(sunAngle + Math.PI) + 10;
                var sTopVar = topVar + "%";
                var leftVar = 35 * Math.sin(sunAngle) + 45;

                document.getElementById("sun").style.marginBottom = sTopVar;
                $("#sun").css({
                    left: leftVar + "%"
                });

                leftBoat += 0.008;
                $("#ship-37").css({
                    left: leftBoat + "px"
                });

                if (sunAngle % (2.65 * Math.PI) < 0.00031) { //9.65
                    console.log("deu 5 voltas");
                    days += 1;

                }
            }

        });
    }



    setInterval(function () {

        indeximages38 += 1;
        if (indeximages38 >= images.length) {
            indeximages38 = 0;

        }
        img.src = images[indeximages38];

    }, 2000);



    $("#cloudDrag1").draggable({
        snap: ".target",
        revert: 'invalid'
    });


    $("#targetCloud").droppable({
        accept: ".drag",
        hoverClass: "ok"
    });

    $("#targetCloud").on("dropover", function (event, ui) {
        cloudDropped = true;
        $("#arrow-39").css("display", "none");
        $("#arrow-2-39").css("display", "none");

    });


    $("#points1").click(exclamationPoints40);
    $("#points2").click(exclamationPoints40);


    function exclamationPoints40() {
        var images = [],
            x = 0;

        images[0] = "img/40-41BaloesDeFala1.png";
        images[1] = "img/40-41BaloesDeFala2.png";
        images[2] = "img/40-41BaloesDeFala3.png";
        images[3] = "img/40-41BaloesDeFala4.png";
        images[4] = "img/40-41BaloesDeFala5.png";
        images[5] = "img/40-41BaloesDeFala6.png";
        images[6] = "img/40-41BaloesDeFala1.png";
        images[7] = "img/40-41BaloesDeFala1.png";


        $("#points1").removeClass('exclamation-points');
        $("#points1").css("opacity", 0);
        $("#points2").removeClass('exclamation-points');
        $("#points2").css("opacity", 0);

        function moveAdam() {

            $("#adamastor-background-40").animate({
                marginLeft: -200
            }, 1500, function () {
                $("#speech-ballon-40").animate({
                    opacity: 1
                }, 1000, function () {

                    function changeImage() {
                        var img = document.getElementById("speech-ballon-40");
                        img.src = images[x];
                        x = x + 1;

                        if (x >= images.length) {
                            x = 0;
                        }
                        setTimeout(changeImage, 3000);

                    }
                    changeImage();


                    exclamationClicked = true;
                });
            });

        }
        moveAdam();

    }

    $("#puzzlePieces").draggable({
        snap: "#puzzleTarget",
        revert: 'invalid'
    });


    $("#puzzleTarget").droppable({
        accept: "#puzzlePieces",
        hoverClass: "ok"
    });

    $("#puzzleTarget").on("dropover", function (event, ui) {
        shipDropped = true;

    });



    function animateFloating(elementFloat) {
        var elX = elementFloat.position().left,
            elY = elementFloat.position().top,
            vX = Math.random() * 2 - 1,
            vY = Math.random() * 2 - 1,
            opacityC = Math.random() * 0.5 + 0.5;

        elX += vX;
        elY += vY;
        elementFloat.css("left", elX);
        elementFloat.css("top", elY);
        elementFloat.css("opacity", opacityC);
        if (elX > $(window).innerWidth || elX < 0) {
            vX *= -1;
        }
        if (elY > $(window).innerHeight || elY < 0) {
            vY *= -1;
        }
    }

    setInterval(function () {
        animateFloating($("#cloudGreen"));
        animateFloating($("#cloudRed"));
        animateFloating($("#cloudYellow"));
    }, 50);




    $('#heart-random1').css("opacity", 0);
    $('#heart-random2').css("opacity", 0);
    $('#heart-random3').css("opacity", 0);
    $('#heart-random4').css("opacity", 0);
    $('#heart-random5').css("opacity", 0);
    var opacityHearts = 0;
    $('#heart').click(function () {
        console.log("clicou no coração");
        opacityHearts += 0.1;
        clicks += 1;

        $('#heart').animate({
            width: "+=50",
            left: "-=25"
        }, 200, function () {
            $('#heart').animate({
                width: "-=50",
                left: "+=25"
            }, 300);
        });

        $('#heart-random1').css("opacity", opacityHearts);
        $('#heart-random1').animate({
            width: "+=50",
            left: "-=25"
        }, 200, function () {
            $('#heart-random1').animate({
                width: "-=50",
                left: "+=25"
            }, 300);
        });


        $('#heart-random2').css("opacity", opacityHearts - 0.2);
        $('#heart-random2').animate({
            width: "+=50",
            left: "-=25"
        }, 200, function () {
            $('#heart-random2').animate({
                width: "-=50",
                left: "+=25"
            }, 300);
        });


        $('#heart-random3').css("opacity", opacityHearts - 0.4);
        $('#heart-random3').animate({
            width: "+=50",
            left: "-=25"
        }, 200, function () {
            $('#heart-random3').animate({
                width: "-=50",
                left: "+=25"
            }, 300);
        });


        $('#heart-random4').css("opacity", opacityHearts - 0.6);
        $('#heart-random4').animate({
            width: "+=50",
            left: "-=25"
        }, 200, function () {
            $('#heart-random4').animate({
                width: "-=50",
                left: "+=25"
            }, 300);
        });


        $('#heart-random5').css("opacity", opacityHearts - 0.8);
        $('#heart-random5').animate({
            width: "+=50",
            left: "-=25"
        }, 200, function () {
            $('#heart-random5').animate({
                width: "-=50",
                left: "+=25"
            }, 300);
        });
    });

});