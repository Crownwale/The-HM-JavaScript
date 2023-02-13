let favoriteFoods = ["pizza", "ice cream"];
function randomFood()
{
  let math = Math.floor(Math.random() * favoriteFoods.length);
    console.log(favoriteFoods[math]);
};
randomFood();