function checkpass(event){
    var pass = document.getElementById('ServerPassword').value;
    var cpass = document.getElementById('ConfirmPassword').value;
    console.log("Password called");
    
    if(pass != cpass){
        alert("Error : Confirm Password is not matching with Server Password");
        return false;
    }
    else    
        return true;
}

function checkusername(){
    user = document.getElementById("ServerUsername").value;
    uppercase =/[A-Z]/.test(user);
    digit = /[0-9]/.test(user);
    if(!uppercase || !digit){
        document.getElementById("username-err").innerHTML="Error: Invalid Username";
        }
    
    else{
        document.getElementById("username-err").innerHTML="";
    }
}

//---Handlers for 'dragged element'-----
function dragstartHandler(event){
    event.dataTransfer.setData("MyDraggedElementId",event.target.id);
}

//------handlers for 'drop target'----

function dragoverHandler(event){
    event.preventDefault();
}

function dropHandler(event){
    evt.preventDefault();

    var elementId =event.dataTransfer.getData("MyDraggedElementsId");
    event.tartget.appendChild(document.getElementById(elementId));
}