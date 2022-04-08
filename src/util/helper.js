let pDate = function(){
    let currentDate = new Date()
    console.log('current date is :',currentDate.getDate())
}
let  pMonth = function(){
    let currentDate=new Date ()
    console.log('current month',currentDate.getMonth()+1)
}
let bachinfo = function(){
    console.log("Uranium, W2D3, the topic for today is Nodejs module system")
}
module.exports.printDate = pDate
module.exports.printMonth=pMonth
module.exports.printbatchinfo= bachinfo