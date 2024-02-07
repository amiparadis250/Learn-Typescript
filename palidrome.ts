function isPalindrome(str:string):boolean{
    let newStr:string = "";
    for(let i=str.length-1; i>=0; i--){
        newStr+=str[i];
    }
    return newStr ===str;
}
let myWords:string = "ISHIMWE eeeee";
if(isPalindrome(myWords)){
    console.log("This is palindrome");
}
else{
    console.log("This is not palindrome");
}
