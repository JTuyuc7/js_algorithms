
function takeShower() {
  console.log("Showering!");
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  console.log('meal', meal)
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  console.log(items[Math.floor(Math.random() * items.length)], 'food picked')
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

wakeUp();