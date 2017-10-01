// JavaScript Document

 <!--
 var x = 1; // global variable

 function start()
 {
 var x = 5; // variable local to function start

document.writeln( "local x in start is " + x );

functionA(); // functionA has local x
functionB(); // functionB uses global variable x
functionA(); // functionA reinitializes local x
functionB(); // global variable x retains its value

document.writeln(
"<p>local x in start is " + x + "</p>" );
} // end function start
 function functionA()
 {
 var x = 25; // initialized each time
 // functionA is called

 document.writeln( "<p>local x in functionA is " +
  x + " after entering functionA" );
++x;
 document.writeln( "<br />local x in functionA is " +
 x + " before exiting functionA" + "</p>" );
 } // end functionA

 function functionB()
 {
 document.writeln( "<p>global variable x is " + x +
 " on entering functionB" );
 x *= 10;
 document.writeln( "<br />global variable x is " +
 x + " on exiting functionB" + "</p>" );
 } // end functionB
 // -->

document.write("o valor de x no javascript é "+ x+("<br>"));
document.write(start(x));
//document.write(functionB(x));
//document.write(functionA(x));