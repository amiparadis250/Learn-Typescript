// Simple ts program  to recive an array  of numbers and filter them depending on their signs


function filterPositive(arr:number[]) :void{
    let sumNegative:number = 0;
    let sumPositive:number = 0;
    let Negative:number[] =[];
    let Positive:number[] =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
           sumNegative += arr[i];
           Positive.push(arr[i]);
        }
        else{
            sumPositive += arr[i];
            Negative.push(arr[i]);
        }
}
console.log(`Sum of negative number is ${sumPositive} and those negative numbers are ${Negative.length} made by ${Negative}`);
console.log(`Sum of negative number is ${sumNegative} and those positive are ${Positive.length} made by ${Positive}`);
}

filterPositive([6,-4,4,4,0,-9]);