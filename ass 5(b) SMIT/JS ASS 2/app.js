document.write("<h1>Question no 1</h1>" + "<br>")
var Name = prompt("Enter your city name")
if (Name==="karachi")
{
    document.write("Welcome to the city of light")

}
else{
    document.write("Welcome to " + Name)

}

document.write("<br>")
document.write("<h1>Question no 2</h1>" + "<br>")


var gender = prompt("Enter your gender")
if (gender==="male")
{
    document.write("Good morning sir")

}
else{
    document.write("Good morning mam")

}
document.write("<br>")
document.write("<h1>Question no 3</h1>" + "<br>")

var color = prompt("Enter signal color")
if (color==="red")
{
    document.write("must stop")

}
else if (color==="yellow")
{
    document.write("Ready to move")
}
else{
    document.write("Move now")

}
document.write("<br>")
document.write("<h1>Question no 4</h1>" + "<br>")

var fuel = +prompt("tell the remaining amount of fuel in car")
if (fuel<0.25)
{
    document.write("refil the fuel plz")
}
else{
    document.write("you can drive")
}
document.write("<br>")
document.write("<h1>Question no 6</h1>" + "<br>")

var obtMarks = +prompt("Enter your obtained amrks")
var totalMarks= +prompt("Enter your totaL amrks")
var percentage = (obtMarks/totalMarks)*100
document.write("<h1>Marksheet</h1>")
document.write("<br>")

if (percentage>=80)
{
    document.write("Total marks : "+totalMarks + "<br>")
    document.write("obtained marks : "+obtMarks  + "<br>")
    document.write("Grade :A+"  + "<br>")
    document.write("Percentage : "+percentage  + "<br>")
    document.write("Remaks : Excellent"  + "<br>")

}
else if(percentage<=80 && percentage>=70)
{
    document.write("Total marks : "+totalMarks  + "<br>")
    document.write("obtained marks : "+obtMarks + "<br>")
    document.write("Grade :A" + "<br>")
    document.write("Percentage : "+percentage + "<br>")
    document.write("Remaks : Good" + "<br>")

}
else if(percentage<=70 && percentage>=60)
{
    document.write("Total marks : "+totalMarks + "<br>")
    document.write("obtained marks : "+obtMarks + "<br>")
    document.write("Grade :B" + "<br>")
    document.write("Percentage : "+percentage + "<br>")
    document.write("Remaks : need improvement" + "<br>")

}
else if(percentage<60)
{
    document.write("Total marks : "+totalMarks + "<br>")
    document.write("obtained marks : "+obtMarks + "<br>")
    document.write("Grade :F" + "<br>")
    document.write("Percentage : "+percentage + "<br>")
    document.write("Remaks : Sorry" + "<br>")

}
var secretNum = 3;
var num = +prompt("Enter a number in range between 1 to 10")
document.write("<h1>Question no 7</h1>" + "<br>")

document.write("<h1>Guess Game </h1>")
if(num==secretNum)
{document.write("Bingo! Correct answer")
}
else if (--num==secretNum)
{
document.write("“Close enough to the correct answer”.")

}
else{
    document.write("Wrong!!")
}
document.write("<br>")
document.write("<h1>Question no 8</h1>" + "<br>")

var num = +prompt("Enter a number to find no is divisible by three or not")
if(num%3==0)
{
document.write( num + " is divisible by three")

}
else{
document.write( num + " is not divisible by three")
    

}
document.write("<br>")
document.write("<h1>Question no 9</h1>" + "<br>")

var num = +prompt("Enter a number to find the number is even or odd")
if(num%2==0)
{
document.write( num + " is even number")

}
else{
document.write( num + " is odd number")
    

}
document.write("<h1>Question no 10</h1>" + "<br>")

var temp = +prompt("Enter the weather in celcius")
if (temp>40)
{
    document.write("Its too hot outside")
}
else if (temp>30)
{
    document.write("“The Weather today is Normal.”")
}
else if (temp>20)
{
    document.write("“Todays Weather is cool.”")
}
else if (temp>=10)
{
    document.write("Its too cold outside")
}
document.write("<h1>Question no 11</h1>" + "<br>")

var firstNum = +prompt("Enter first number")
var secondNum = +prompt("Enter second number")
var operation = prompt("Enter operation") 
if(operation== "+")
{
document.write(firstNum+secondNum)
}
if(operation== "*")
{
document.write(firstNum*secondNum)
}
if(operation== "/")
{
document.write(firstNum/secondNum)
}

if(operation== "%")
{
document.write(firstNum%secondNum)
}
if(operation== "-")
{
document.write(firstNum-secondNum)
}


