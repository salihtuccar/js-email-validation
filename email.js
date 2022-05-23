function emailChecker(email){
    if(!(email.includes("@"))){
      return false
    }
    else if(!(email.includes("."))){
      return false
    }
    else if(email.indexOf("@") > email.lastIndexOf(".")){
      return false
    }
    let index = email.lastIndexOf(".") + 1
    if(email.slice(index).length === 2 || email.slice(index).length === 3){
      return true
    }
    return false
  }
  
  console.log(emailChecker("burakcan.karasel@gmail.com"))