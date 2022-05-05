// Add your code here
function submitData(name, email) {

const conObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        "name": name,
        "email": email,
    }),
};

return fetch("http://localhost:3000/users", conObj)
    .then(res => res.json())
    .then(body => handleNewUser(body.id))
    .catch(error => handleError(error))
}

function handleNewUser(newID){
    document.getElementsByTagName("body")[0].innerHTML = newID;
    document.body.append();
}

function handleError(){
    let message = 'Unauthorized Access'
    document.getElementsByTagName("body")[0].innerHTML = message;
    document.body.append();
    return message;
}


submitData("steve", "steven@steven.com")