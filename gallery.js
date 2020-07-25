// var p1Button=document.getElementById("p1");
// var p2Button=document.getElementById("p2");
// var p3Button=document.getElementById("p3");
// var p1Display =document.getElementById("p1display");
// var p2Display =document.getElementById("p2display");
// var p3Display =document.getElementById("p3display");
// var p1score=0;
// var p2score=0;
// var p3score=0;
// var gameOver=false;
// var winningScore=5;

// p1Button.addEventListener("click", function(){
//   if(!gameOver){
// 		p1score++;
// 		if(p1score===winningScore){
// 		 p1display.classList.add("winner");
// 		 gameOver=true;
// 	    }
// 	  p1Display.textContent=p1score;
// 	  if(p1score===winningScore){
// 	  alert("1st pic won");
// 	}
    
// }
// });

// p2Button.addEventListener("click",function(){
// 	if(!gameOver){
// 		p2score++;
// 		if(p2score===winningScore){
// 		 p2display.classList.add("winner");
// 		 gameOver=true;
// 	    }
// 	  p2Display.textContent=p2score;
// 	  if(p2score===winningScore){
// 	  alert("2nd pic won");
// 	}
//     }
// });

// p3Button.addEventListener("click",function(){
// 	if(!gameOver){
// 		p3score++;
// 		if(p3score===winningScore){
// 		 p3display.classList.add("winner");
// 		 gameOver=true;
// 	    }
// 	  p3Display.textContent=p3score;
// 	  if(p3score===winningScore){
// 	  alert("3rd pic won");
// 	}
//     }
// });


var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'E:\my web\new\pics\SI_20180626_212530.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'E:\my web\new\pics\SI_20180627_004754.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'E:\my web\new\pics\SI_20180627_004602.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'E:\my web\new\pics\SI_20180707_135457.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'E:\my web\new\pics\SI_20180707_135855.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'E:\my web\new\pics\SI_20180627_013213.jpg';

// var pics =document.querySelectorAll(".pics");

var colors=[
"rgb(255, 0, 0)",
"rgb(0, 255, 0)",
"rgb(0, 0, 255)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)",
"rgb(0, 255, 255)",
]

var pics =document.querySelectorAll(".pics");
for(var i=0; i<6;i++){
	pics[i].style.backgroundColor = Image[i]
}


// (function($){
//     $.randomImage = {
//         defaults: {
//             //you can change these defaults to your own preferences.
//             path: 'http://mysite.com/wp-content/uploads/2013/06/', //change this to the path of your images
//             myImages: ['SI_20180627_013213.jpg', 'SI_20180707_135855.jpg', 'Testimonials2.png', 'Testimonials2.png', 'Testimonials4.png' ] //put image names in this bracket. ex: 'harold.jpg', 'maude.jpg', 'etc'
//         }
//     };
    
//     $.fn.extend({
//         randomImage: function (config) {
//             var config = $.extend({}, $.randomImage.defaults, config);
            
//             return this.each(function() {
//                 var imageNames = config.myImages,
                
//                 //get size of array, randomize a number from this
//                 // use this number as the array index
//                 imageNamesSize = imageNames.length,
                
//                 lotteryNumber = Math.floor(Math.random()*imageNamesSize),
//                 winnerImage = imageNames[lotteryNumber],
//                 fullPath = config.path + winnerImage;
                
//                 //put this image into DOM at class of randomImage
//                 // alt tag will be image filename.
//                 $(this).attr({
//                     src: fullPath,
//                     alt: winnerImage
//                 });
//             }); 
//         }
//     });
// }(jQuery));

// $('body').append('<img/>')
// $('img').randomImage();