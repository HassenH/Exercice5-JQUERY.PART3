$(function(){
  //On stocke la largeur et la hauteur de la fenêtre dans des variables
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  //On stocke la largeur et la hauteur du carré dans des variables
  var squareWidth = $('#square').width();
  var squareHeight = $('#square').height();
  //Je met un évènement"keydown" sur mon Input.
  //Je met "event" en paramètre de ma fonction anonyme, grâce à ça je vais pouvoir récupérer la touche sur laquelle j'ai appuyé.
  $('#direction').keydown(function(event){
    var squarePositionLeft = $('#square').offset().left;
    var squarePositionTop = $('#square').offset().top;
    //Switch est utilisé lorsque l'on veut comparer une variable à plusieurs valeurs
    switch (event.keyCode) {
      case 37:
        squarePositionLeft -= 10;
      break;
      case 38:
        squarePositionTop -= 10;
      break;
      case 39:
        squarePositionLeft += 10;
      break;
      case 40:
        squarePositionTop += 10;
      break;
    }
    //  Quand le carré atteint la gauche de l'écran (réference point supérieur gauche = squarePositionLeft)
    // Alors on demande à ce point de revenir à droite de la fenêtre
    if(squarePositionLeft < 0){
      // Pour le faire apparaitre à droite on soustrait la largeur du carré à celle de la fenêtre
      squarePositionLeft = windowWidth - squareWidth;
      // Quand le point supérieur du carré atteint le bas de la fenêtre
    }else if(squarePositionTop < 0){
      //  Alors on demande a ce point de revenir en haut de la fenêtre
      squarePositionTop = windowHeight - squareHeight;
      // Si le carré se retrouve en haut de la fenêtre
      // On c'est que le carré a atteint le haut de la fenêtre quand la position (squarePositionTop) + la hauteur du carré sont supérieur à la hauteur de la fenêtre
    }else if((squarePositionTop + squareHeight) > windowHeight){
      // Pour que le carre revienne en bas, on remet la position (squarePositionTop) à 0
      squarePositionTop = 0;
    }else if((squarePositionLeft + squareWidth) > windowWidth){
      // on sait que le carré a atteint la droite de l'écran quand la position (squarePositionLeft) + la largeur du carré est supérier à la largeur de la fenêtre
      squarePositionLeft = 0;
    }
  //On définit la position du carré grâce à la fonction "Offset".
  $('#square').offset({top : squarePositionTop, left : squarePositionLeft});
  });
});
