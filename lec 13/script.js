var database= [
    {user:"ahmad",
    password:"123"},
    {user:"bhatti",
    password:"456"},
    {user:"ali",
    password:"789"}];

var newsfeed=[
    {
        user:"usman",
        status:"happy"
    },
    {
        user:"haider",
        status:"upset"
    }
];
var x=function()
{
    var n=prompt("enter name");
    var a=prompt("enter password");
    for(var i=0;i<database.length ;i++)
    {
        if(n===database[i].user && a===database[i].password)
        {
            console.log(newsfeed);
        }
        else
        {
            console.log("wrong user name or password");
        }
    }
}
x();