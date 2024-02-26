import "./style.css";

window.onload = function() {
  //write your code here
  console.log(
    "Hello programmer! This is an excuse generator, perfect for avoid an uncomfortable situation HAHAHA"
  );

  let who = [
    "The dog",
    "My grandma",
    "My brother",
    "Their mother",
    "A vagabond",
    "Dua Lipa"
  ];
  let action = ["ate", "peed", "crushed", "broke", "kissed"];
  let what = [
    "my homework",
    "my favourite T-shirt",
    "the car",
    "my smartphone",
    "the cake"
  ];
  let where = [
    "at home",
    "in the park",
    "on the beach",
    "in my room",
    "in the kitchen"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I was going poop",
    "during my lunch",
    "while I was working out"
  ];

  function excusegenerator() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhere = where[Math.floor(Math.random() * where.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhere} ${randomWhen}`;
  }

  document.getElementById("excuse").innerHTML = excusegenerator();
};
