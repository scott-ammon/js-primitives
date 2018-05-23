var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var newArray = friends.split(',');
newArray.sort().reverse();

console.log(newArray);