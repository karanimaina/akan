
var form = document.getElementById("submitData");

form.addEventListener("click", function (e) {
    e.preventDefault();
  calculate();
});
var calculate= function (){
    console.log("I was called")
    let year=document.getElementById("year_born").value
    var date= document.getElementById("date_born").value
    var month= document.getElementById("Month_born").value
    var gender= document.getElementById("gender").value

    let femaleName=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua',"Ama"]
    let maleName=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']

     if(date<0 || date>31 ) {
         var message= document.getElementById("message")
         message.classList.remove("d-none");
         message.classList.remove("alert-success");
         message.classList.add("alert-secondary")
         message.innerHTML="Input a valid date";
         return
     }

     if(month<0  || month>12) {
        var message= document.getElementById("message")
        message.classList.remove("d-none");
        message.classList.remove("alert-success");
        message.classList.add("alert-secondary")
        message.innerHTML="Input a valid Month";_
        return;
    }
    

    console.log(date,month,year.slice(0,2),year)
    let day= dayOfWeek(date,month,year.slice(0,2),year)
    day=Math.trunc(day)
    let result= gender=="Male"? maleName[day] : femaleName[day];
    var message= document.getElementById("message")
    message.classList.remove("d-none");
    // message.classList.add("alert-success");
    console.log(result)
    message.innerHTML="Your Akan name is "+ result;
    

}

var dayOfWeek=(dd,mm,cc,yy)=>((cc/4) -(2*cc-1) + (5*yy/4)  + (26*(mm+1)/10) + dd ) % 7






