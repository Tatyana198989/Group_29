

function checkAge(age) { 
if (typeof(age) == "number") {
    if (age < 18) {
    console.log("You don’t have access cause your age is " + age + " It’s less then 18");
}
else if (age >= 18 && age < 60) {
    console.log("Welcome!");
}
else if (age  > 60) {
    console.log("Keep calm and look Culture channel");
}
    else{
    console.log("Technical work")
}
}
else {
    console.log("Error") }
}

checkAge(17)
checkAge("18")
checkAge(61)
checkAge('2gjk')

//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.