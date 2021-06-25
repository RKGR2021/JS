let number = 10
if (number === 10) {
  document.write('The Number is Equal 10')
} else {
  document.write('The number is not Equal 10')
}

let x = 6
if (x % 6 === 0) {
  document.write('<h3>Number is Even</h3>')
} else {
  document.write('<h3>Number is Odd</h3>')
}

let y = 5
if (y > 0) {
  document.write('<h3>Positive Number')
  if (y % 2 === 0) {
    document.write('<h3>Even Number</h3>')
  } else {
    document.write('<h3>Odd Numver</h3>')
  }
} else if (y < 0) {
  document.write('<h3>Negative Number</h3>')
} else {
  document.write('Number Equal 0')
}

let z = 3
if (z > 0 && z % 6 == 0) {
  document.write('<h2>Number is Positive and Even')
} else {
  document.write('<h2>Number is Negative and Odd</h2>')
}

let hour = 12
if (hour >= 6 && hour < 12) {
  document.write('<h1>Good Morning</h1>')
} else if (hour >= 12 && hour < 18) {
  document.write('<h1>Good Afternoon</h1>')
} else {
  document.write('<h1>Good Evening</h1>')
}
