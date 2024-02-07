function Reverse(str: string): string{
    let newString:string ="";
    for(let i= str.length-1 ; i>=0 ; i--){
        newString+= str[i];
    }
    return `The reversse of ${str} is ${newString}`;
}
let text = 'ISHIMWE Ami Paradis';

console.log(Reverse(text));
