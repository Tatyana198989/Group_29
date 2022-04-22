function checkAge(age) { 
    age = Number(age)      //Преобразовали в тип Number
    if(!isNaN(age)) {
    if (age < 18) {
        console.log("You don’t have access cause your age is " + age + " It’s less then 18");
    }
    else if (age >= 18 && age < 60) {
        console.log("Welcome!");
    }
    else if (age > 60) {
        console.log("Keep calm and look Culture channel");
    }
        else{
        console.log("Technical work")
    }
    }
    else {
        console.log("It is not a number") 
    }
    }
    
    checkAge("17")
    checkAge("18")
    checkAge("61")
    checkAge('hkgd')
    checkAge("52gjk")
    checkAge(60)

    let agePrompt = prompt( "Enter age" )
    checkAge(agePrompt)
