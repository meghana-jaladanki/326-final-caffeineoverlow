"use strict";

// await fetch(`/orders`, {
// 			method: "GET",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		})
//     .then((response) => response.text())
// 		.then((result) => {
//       let new_item = document.getElementById("new_item");
//       let new_json = JSON.parse(result);
//       new_item.innerText = new_item;
//       console.log(new_json);
//     });


let plus_1 = document.getElementById("+1");
let minus_1 = document.getElementById("-1");
let plus_2 = document.getElementById("+2");
let minus_2 = document.getElementById("-2");
let count_1 = document.getElementById("count1");
let count_2 = document.getElementById("count1");
let amt1 = document.getElementById("amt1");
let amt2 = document.getElementById("amt2");

plus_1.addEventListener('click', () => {
  let temp_price = parseInt(amt1.value);
  count_1.value = parseInt(count_1.value) + 1;
  amt1.value = temp_price*count_1.value;
});

plus_2.addEventListener('click', () => {
  let temp_price = parseInt(amt2.value);
  count_2.value = parseInt(count_2.value) + 1;
  amt2.value = temp_price*count_2.value;
});

minus_1.addEventListener('click', () => {
  let temp_price = parseInt(amt1.value);
  count_1.value = parseInt(count_1.value) - 1;
  amt1.value = temp_price*count_1.value;
});

minus_2.addEventListener('click', () => {
  let temp_price = parseInt(amt2.value);
  count_2.value = parseInt(count_2.value) + 1;
  amt2.value = temp_price*count_2.value;
});
