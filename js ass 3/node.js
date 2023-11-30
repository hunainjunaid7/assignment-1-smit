document.write("<h1>QUESTION No 1</h1>")

var studentsName = []
var studentsName = ["Hunain" , "ammar" , "Fasih"]
document.write(studentsName + "<br>") 
document.write("<h1>QUESTION No 3</h1>")

var numbers =[1,2,3,4]
document.write(numbers + "<br>")
document.write("<h1>QUESTION No 4</h1>")

var bool = [true,false]
document.write("<h1>QUESTION No 5</h1>")

var mixed =[1,,"a", ]
document.write(mixed + "<br>")


document.write("<h1>QUESTION No 7</h1>")
document.write("<h1>Qualifications</h1>")

var qualifocations = []
qualifocations[0] = 1+")"+"SSC" + "<br>"
qualifocations[1] = 2+")"+"HSC"  + "<br>"
qualifocations[2] = 3+")"+"BSC"  + "<br>"
qualifocations[3] = 4+")"+"BS"  + "<br>"
qualifocations[4] = 5+")"+"BCOM"  + "<br>"
qualifocations[5] = 6+")"+"MS"  + "<br>"
qualifocations[6] = 7+")"+"M.Phil"  + "<br>"
qualifocations[7] = 8+")"+"PHD"  + "<br>"

document.write(qualifocations)
document.write("<h1>QUESTION No 8</h1>")
var students = ["mitchel" , "John" ,"Tony"]
var score =[250,450,350]
document.write(students[0] + " score is " + score[0] + " " + "and % =" + (score[0]/500)*100 + "<br>")
document.write(students[1] + " score is " + score[1] + " " + "and % =" + (score[1]/500)*100+ "<br>" )

document.write(students[2] +  " score is" + score[2] + " " + "and % =" + (score[2]/500)*100 + "<br>")
document.write("<h1>QUESTION No 9</h1>")
// var colors = ["Blue","Green","Red"]
// document.write(" Default array "+colors + "<br>")
// var color = prompt("which color do you want add to begining")
// colors.unshift(color)
// document.write("after addition at begining " + colors + "<Br>" )
// var color = prompt("which color do you want add to end")
// colors.push(color)
// document.write("after addition at End " + colors + "<br>")
// var color = prompt("which color do you want add to first at begining")
// var color1 = prompt("which color do you want add to second at begining")

// colors.unshift(color,color1)
// document.write("after addition of two colors " + colors + "<br>")
// colors.shift()
// document.write("after deletion of first color " + colors + "<br>")
// colors.pop()
// document.write("after deletion of last color " + colors + "<br>")
// var color = prompt("which color do you want to add")

// var pos = prompt("at which pos do you want to add color")
// colors.splice(pos,0,color)
// document.write("after addition at any pos " + colors + "<br>")
// var pos = prompt("at which pos do you want to delete color")
// var quantity = prompt("How many colors you want to delete")
// colors.splice(pos,quantity)
// document.write("after deletion from any pos " + colors + "<br>")
document.write("<h1>QUESTION No 10</h1>")
var unsorted = [40,20,30,100,66,78,88,10]
document.write(unsorted + "<br>")
unsorted.sort()
document.write(unsorted + "<br>")
document.write("<h1>QUESTION No 11</h1>")
var cities = ["karahi", "lahore" , "Islamabad" , "quetta" , "Peshawar"]
document.write(cities + "<br>")

var subcities = cities.slice(2,4)
document.write(subcities  + "<br>")
document.write("<h1>QUESTION No 12</h1>")
var sentence = ["this " , " is " , " my " , " Cat"]
 
document.write(sentence.join())





























