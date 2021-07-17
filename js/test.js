// let number = 10
// if (number === 10) {
//   document.write('The Number is Equal 10')
// } else {
//   document.write('The number is not Equal 10')
// }

// let x = 6
// if (x % 6 === 0) {
//   document.write('<h3>Number is Even</h3>')
// } else {
//   document.write('<h3>Number is Odd</h3>')
// }

// let y = 5
// if (y > 0) {
//   document.write('<h3>Positive Number')
//   if (y % 2 === 0) {
//     document.write('<h3>Even Number</h3>')
//   } else {
//     document.write('<h3>Odd Numver</h3>')
//   }
// } else if (y < 0) {
//   document.write('<h3>Negative Number</h3>')
// } else {
//   document.write('Number Equal 0')
// }

// let z = 3
// if (z > 0 && z % 6 == 0) {
//   document.write('<h2>Number is Positive and Even')
// } else {
//   document.write('<h2>Number is Negative and Odd</h2>')
// }

// let hour = 12
// if (hour >= 6 && hour < 12) {
//   document.write('<h1>Good Morning</h1>')
// } else if (hour >= 12 && hour < 18) {
//   document.write('<h1>Good Afternoon</h1>')
// } else {
//   document.write('<h1>Good Evening</h1>')
// }

// let day=8;
// switch (day) {
//   case 1:
//     document.write('شنبه')
//     break;
//   case 2:
//     document.write('یکشنبه')
//     break;
//     case 3:
//       document.write('دوشنبه')
//       break;
//       case 4:
//         document.write('سه شنبه')
//         break;
//         case 5:
//           document.write('چهارشنبه')
//           break;
//           case 6:
//             document.write('پنجشنبه')
//             break;
//             case 7:
//               document.write('جمعه')
//               break;
//   default:
//     document.write('<h2>خارج از ایام هفته</h2>')
//     break;
// }


// document.write("<table border='3'>")
// for(let i=1;i<=10;i++){
//   document.write("<tr>")
//   for(let j=1;j<=10;j++){
//     document.write("<td>"+j*i+"</td>")
//   }
//   document.write("</tr>")
// }
// document.write("</table>")


// // let i=0;
// // while (i<10) {
// //   console.log(i)
// //   i=i+2;
// // }

// // let i=0;
// // let text = ""
// // while (i<10) {
// //   text ="<br/>The Number is " + i
// //   i=i+2;
// //   document.write('<h2>'+text+'</h2>')
  
// // }

// // let b=10;
// // do {
// //   document.write('<h2>'+b+'</h2>')
// //   b++
// // } while (b<=50);

// let m=10;
// do{
//   document.write('<h2>'+"The Number is "+m+'</h2>')
//   if(m===50)
//   break;
//   m++
// }while (m<50)
// document.write('<h2>oops</h2>')

// function addnumber() {
//   let a=5
//   let b=3
//   let c=a+b
//   document.write('<h3>'+c+'</h3>')
// }
// addnumber()

// function numb(a,b) {
//   let d=a+b
//   document.write('<h3>'+d+'</h3>')
// }
// numb(5,10)

// function myval(a,b) {
//   return a*b
// }
// const result = myval(5,100)
// document.write('<h1>'+result+'</h1>')

// function getday(day) {
//   switch(day){
//     case 1:
//       document.write('<h2>'+"شنبه"+'</h2>')
//       break;
//       case 2:
//       document.write('<h2>'+"یکشنبه"+'</h2>')
//       break;
//       case 3:
//       document.write('<h2>'+"دوشنبه"+'</h2>')
//       break;
//       case 4:
//       document.write('<h2>'+"سه شنبه"+'</h2>')
//       break;
//       case 5:
//       document.write('<h2>'+"چهارشنبه"+'</h2>')
//       break;
//       case 6:
//       document.write('<h2>'+"پنجشنبه"+'</h2>')
//       break;
//       case 7:
//       document.write('<h2>'+"جمعه"+'</h2>')
//       break;
//      default:
//        document.write('<h1>'+"اشتباه میزنی"+'</h1>')
//        break;
//   }
// }
// getday(5)


// const user ={
//   fname:'kourosh',
//   lname:'kabiri',
//   age:28,
//   printage:function(){
//     console.log(user.age)
//   }
// }
// user.printage()
// user.username ='admin'
// console.log(user)
// user.age = 29
// delete user.username
// console.log(user)

// window.onload = function(){
//   const newparagraph = document.createElement(
//     'p'
//   )
//   newparagraph.innerText = 'kourosh hi how are u?';
//   document.body.appendChild(newparagraph)
// }

// function clickhandler(){
//   const link = document.getElementById('link')
//   console.log(link.getAttribute('href'))
//   link.setAttribute('href','https://yahoo.com')
//   link.innerText = 'Reza'
//   link.style.textDecoration = 'none'
//   link.className = 'change'
//   let str = document.querySelector('.change').innerText
//   console.log(str)
// }


let index = 0
setInterval(writetext,50)

function writetext(){
  const text = "Kourosh is Great and Good Boy"
  document.getElementById('text2').innerText = text.slice(0,index)
  index++
if(index>text.length-1){
  index = 0
}
  
}
