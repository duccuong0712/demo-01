function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        let inc = Math.ceil(finalNumber / (duration / 17))
        if (currentNumber + inc > finalNumber) {
          currentNumber = finalNumber
          clearInterval(interval)
        } else {
          currentNumber += inc
        }
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(5, 3000000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('transaction-count').innerText = formattedNumber
    })
    
    animateNumber(20, 30000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('city-count').innerText = formattedNumber
    })
    
    animateNumber(400, 30000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('customer-count').innerText = formattedNumber
    })
  })