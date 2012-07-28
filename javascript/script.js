var i = 2;



$(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);

    if(keycode == '97'){
      $('.runner').css("left", i+"%").toggleClass('run-2');
    
      i = i+2;
      console.log(i);
    }



    // if(keycode == '115') {
    // }
});

// $(document).keyup(function(e){
//     //find out which key was pressed
//     switch(e.keyCode){
//         case 65    :    console.log('a');    break;    // a
//         case 66    :    console.log('b');    break;    // b
//         case 67    :    console.log('c');    break;    // c
//         case 68    :    console.log('d');    break;    // d
//         case 69    :    console.log('e');    break;    // e
//         case 70    :    console.log('f');    break;    // f
//         case 71    :    console.log('g');    break;    // g
//         case 72    :    console.log('h');    break;    // h
//         case 73    :    console.log('i');    break;    // i
//         case 74    :    console.log('j');    break;    // j
//         case 75    :    console.log('k');    break;    // k
//         case 76    :    console.log('l');    break;    // l
//         case 77    :    console.log('m');    break;    // m
//         case 78    :    console.log('n');    break;    // n
//         case 79    :    console.log('o');    break;    // o
//         case 80    :    console.log('p');    break;    // p
//         case 81    :    console.log('q');    break;    // q
//         case 82    :    console.log('r');    break;    // r
//         case 83    :    console.log('s');    break;    // s
//         case 84    :    console.log('t');    break;    // t
//         case 85    :    console.log('u');    break;    // u
//         case 86    :    console.log('v');    break;    // v
//         case 87    :    console.log('w');    break;    // w
//         case 88    :    console.log('x');    break;    // x
//         case 89    :    console.log('y');    break;    // y
//         case 90    :    console.log('z');    break;    // z
//     }
// });