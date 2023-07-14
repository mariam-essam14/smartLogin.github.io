var userEmailInput =document.getElementById("userEmail")
var UserpassInput =document.getElementById("Userpass")
var userNameRegInput =document.getElementById("userNameReg")
var userEmailRegInput =document.getElementById("userEmailReg")
var userPassRegInput =document.getElementById("userPassReg")
var userName = ""
userName=localStorage.getItem("name")
var userDataList=[]
if(localStorage.getItem("userDataList")==null){
    userDataList=[]
}
else{
    userDataList = JSON.parse(localStorage.getItem("userDataList"))
}

function sinUp(){
    var  user={
        userNameReg:userNameRegInput.value,
        userEmailReg:userEmailRegInput.value,
        userPassReg: userPassRegInput.value,
    }
    var count=0
    for(var i=0;i<userDataList.length;i++){
        if(userDataList[i].userNameReg == userNameRegInput.value){
            count++
        }
    }
    if(count==0){
        if(userNameRegInput.value==""){
            document.getElementById("valid2").style.display="block"
        }
        else if(userEmailRegInput.value==""){
            document.getElementById("valid2").style.display="block"
        }
        else if(userPassRegInput.value==""){
            document.getElementById("valid2").style.display="block"
        }
        else{
            document.getElementById("valid2").style.display="none"
            document.getElementById("valid3").style.display="block"
        

            userDataList.push(user)
            localStorage.setItem("userDataList",JSON.stringify(userDataList))

        }

    }
    else{
        document.getElementById("valid3").style.display="none"   
        document.getElementById("valid4").style.display="block"
    }
}


function logIn(){
 var email =userEmailInput.value
 var pass=UserpassInput.value
var count=0
for(var i=0;i<userDataList.length;i++){
    if(email.toLowerCase()==userDataList[i].userEmailReg.toLowerCase() && pass.toLowerCase()==userDataList[i].userPassReg.toLowerCase()){
        count++
        userName =userDataList[i].userNameReg
        localStorage.setItem("name",userName)
    }
}
if(count!=0){
    document.getElementById("valid1").style.display="none" 
    window.location.assign("welcomePage.html")

}
else if(userEmailInput.value ==""||UserpassInput.value ==""){
    document.getElementById("valid1").style.display="block"
    document.getElementById("valid").style.display="none"
}
else{
    document.getElementById("valid").style.display="block"
    document.getElementById("valid1").style.display="none"
}

    
}

function welcomeName(){
    document.getElementById("addWord").innerHTML=`Welcome ${userName} `
}

// function logout(){
//     localStorage.removeItem("name")
// }