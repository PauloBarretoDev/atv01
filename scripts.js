let x = prompt("Digite uma palarva para verificar se é palindromo: ");
function reverseString(str){
    let y = str.split("");
    let reverseY = y.reverse();
    var joinY = reverseY.join("");
    return joinY;
}
if(x === reverseString(x)){
    alert("Palindromo");
}
else{
    alert("Não é palindromo");
}