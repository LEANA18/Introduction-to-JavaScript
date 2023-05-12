document.getElementById("but1").addEventListener("click",decrement)
document.getElementById("but2").addEventListener("click",increment)
let x=0;
function increment()
{
    x++;
    document.getElementById("count").innerHTML = x;
}
function decrement()
{
    x--;
    document.getElementById("count").innerHTML = x;
}
