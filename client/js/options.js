"use strict";

let dairy = [];
let espresso = [];
let sweeteners = [];
let flavors = [];

document.getElementById('place-order-btn').addEventListener('click', () => {
    dairy = getDairy();
    espresso = getEspress();
    sweeteners = getSweeteners();
    flavors = getFlavors();
});

// retrieving data from each checkbox section
function getDairy() {
    dairy = $('#dairy input[type=checkbox]');
}

function getEspresso() {
    espresso = $('#espresso input[type=checkbox]');
}

function getSweeteners() {
    sweeteners = $('#sweetener input[type=checkbox]');
}

function getFlavors() {
    flavors = $('#flavor input[type=checkbox]');
}

async function postOrder(){
    let order = {
        "dairy": dairy,
        "espresso": espresso,
        "sweeteners": sweeteners,
        "flavors": flavors
    }

    let newOrder = await fetch("/newOrder", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(order),
    });
    
}

async function logoutUser() {
  localStorage.clear();
  await fetch("/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.text())
    .then((result) => {});
}
