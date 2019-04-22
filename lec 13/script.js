var database=
{
    user:"ahmad",
    age:19
}

var newsfeed=[
    {
        user:"usman",
        status:"happy"
    }
]

var x=function () {
    n=prompt("eneter name");
    a=prompt("enter age");
    if(n===database.user && a===Number(database.age))
    {
        console.log(newsfeed);
    }
    else
    {
        alert("wrong");
    }
}