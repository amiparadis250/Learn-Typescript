function myName(names: string): string {
    return `Hello My name is ${names} and I am full stack developer with diverse skills in typescript`;
}
console.log(myName('ISHIMWE'));

// som generic datatypes
const Favourites =<T> (fav:T): T =>{
    return fav;
}

let foods = Favourites<string>('Umutobe');
console.log(foods);
let GirlFriend=Favourites<string>('Divine Benihirwe');
console.log(GirlFriend);
let FavSalary = Favourites<number>(500000);
console.log(FavSalary);
