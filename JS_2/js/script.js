function userForm() {
    console.info("Submit - Home")
    
    //? Get values from inputs
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let email = document.getElementById("email").value
    let address = document.getElementById("address").value
    let city = document.getElementById("city").value
    let province = document.getElementById("province").value
    let country = document.getElementById("country").value
    let membership
    if (document.getElementById("premium-membership").checked) {
      membership = document.getElementById("premium-membership").value
    } else if (document.getElementById("standard-membership").checked) {
      membership = document.getElementById("standard-membership").value
    } else if (document.getElementById("basic-membership").checked) {
      membership = document.getElementById("basic-membership").value
    }
  

    if (isValidHome()) {
      createNewDivOutput("output-name", "<b>Full Name:</b> " + fname + " " + lname)
      createNewDivOutput("output-email", "<b>Email:</b> " + email)
      createNewDivOutput("output-address", "<b>Address:</b> " + address + ", " + city + ", " + province + ", " + country)
      createNewDivOutput("output-membership", "<b>Membership:</b> " + membership)
    } else {
      displayErrorsHome()
    }
  }
  
  function createNewDivOutput(id, text) {
    if (document.getElementById(id) == null) {
      console.log("new " + id)
      let newDiv = document.createElement("div")
      newDiv.className = ""
      newDiv.id = id
      newDiv.innerHTML = text
      document.getElementById("output").appendChild(newDiv)
    } else {
      console.log("update " + id)
      document.getElementById(id).innerHTML = text
    }
  }
  
  function isValidHome() {
    if (isValidTextId("fname") && isValidTextId("lname") && isValidEmailId("email") && isValidTextId("address") && isValidTextId("city") && isValidTextId("province")) {
      return true
    }
    return false
  }
  
  function isValidText(text) {
    if (text == null || text == "" || text === undefined) {
      return false
    }
    return true
  }
  
  function isValidTextId(id) {
    if (id == null) {
      return false
    }
    if (isValidText(document.getElementById(id).value)) {
      document.getElementById(id).classList.remove("error-input")
      return true
    }
    document.getElementById(id).classList.add("error-input")
    return false
  }
  
  function isValidEmail(email) {
    if (email == null || email == "" || email === undefined) {
      return false
    }
    let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(email)) {
      return false
    }
    return true
  }
  
  function isValidEmailId(id) {
    if (id == null) {
      return false
    }
    if (isValidEmail(document.getElementById(id).value)) {
      document.getElementById(id).classList.remove("error-input")
      return true
    }
    document.getElementById(id).classList.add("error-input")
    return false
  }
  
  function resetErrorsHome() {
    document.getElementById("fname").classList.remove("error-input")
    document.getElementById("lname").classList.remove("error-input")
    document.getElementById("email").classList.remove("error-input")
    document.getElementById("address").classList.remove("error-input")
    document.getElementById("city").classList.remove("error-input")
    document.getElementById("province").classList.remove("error-input")
  }
  
  function displayErrorsHome() {
    resetErrorsHome()
  
    console.warn("Errors!")

    isValidTextId("fname")
    isValidTextId("lname")
    isValidEmailId("email")
    isValidTextId("address")
    isValidTextId("city")
    isValidTextId("province")
  }
  

  
  function myExcelFuns() {
    console.info("Submit - Excel")
  
    if (isValidNumberStr('numbers')) {
      resetErrorsExcel()
  
      let numbers = inputStringToArrayNumber('numbers')
  
      let result
      if (document.getElementById("sum").checked) {
        result = autoSum(numbers)
      } else if (document.getElementById("avg").checked) {
        result = average(numbers)
      } else if (document.getElementById("max").checked) {
        result = max(numbers)
      } else if (document.getElementById("min").checked) {
        result = min(numbers)
      } else {
        result = "Error"
      }

      document.getElementById("result").value = result
    } else {
      displayErrorsExcel()
    }
  }
  
  function isValidNumberStr(id) {
    let inputStr = document.getElementById(id).value
  
    let inputArr = inputStr.split("")

    let regexArray = ['0','1','2','3','4','5','6','7','8','9',' ','.',',']

    inputArr.forEach(character => {
      if (!matchInArray(character, regexArray)) {
        return false
      }
    })
  
    let numbers = inputStringToArrayNumber(id)
    if (numbers.length > 0) {
      return true
    } else {
      return false
    }
  }
  
  function isValidNumberStrDisplay(id) {
    if (isValidNumberStr(id)) {
      resetErrorsExcel()
    } else {
      displayErrorsExcel()
    }
  }
  
  function inputStringToArrayNumber(id) {
    let numberStr = document.getElementById(id).value
  
    let numberArr = numberStr.split(" ")
  
    let numbers = new Array()
    numberArr.forEach(element => {
      if (element != null && element != "") {
        let number = Number(element)
        if (!isNaN(number)) {
          numbers.push(number)
        }
      }
    })
  
    return numbers;
  }
  
  function matchInArray(string, array) {
    for (let i = 0; i < array.length; i++) {
      if (string.match(array[i])) {
        return true
      }
    }
    return false
  }
  
  function displayErrorsExcel() {
    document.getElementById("numbers").classList.add("error-input")
    document.getElementById("result").value = "Wrong input!"
  
  }
  
  function resetErrorsExcel() {
    document.getElementById("numbers").classList.remove("error-input")
  }
  
  function autoSum(array) {
    let sum = 0
    array.forEach(element => {
      sum += element
    });
    return sum
  }
  
  function average(array) {
    let sum = 0
    let length = 0
    array.forEach(element => {
      sum += element
      length++
    });
    return sum/length
  }
  
  function max(array) {
    return Math.max(...array)
  }
  
  function min(array) {
    return Math.min(...array)
  }

  function switchTheme(theme) {
    document.body.className = theme;
  }