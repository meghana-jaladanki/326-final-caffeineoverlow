"use strict";
let dairy = "";
let espresso = "";
let sweeteners = [];
let flavors = [];

window.addEventListener("load", async function () {
    dairy = getDairy();
    espresso = getEspress();
    sweeteners = getSweeteners();
    flavors = getFlavors();
});


function getDairy() {
    return "";
}

function getEspresso() {

}

function getSweeteners() {

}

function getFlavors() {

}

function validateOrder(){

}

function postOrder(){
    let drink = {
        "dairy": dairy,
        "espresso": espresso,
        "sweeteners": sweeteners,
        "flavors": flavors
    }

    let userID = localStorage.getItem('userID');

    let drinkResponse = await fetch("/drink/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(drink),
    });

    if (drinkResponse.ID !== null){
        let order = {
            "userID": userID,
            "drinkID": drinkResponse.drinkID,
        }
        let orderResponse = await fetch("/orders/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(order),
        });

        if (orderResponse.status === 200) {
            window.open("/orders", _self);
        } else {
            // Diplay error with creating the order in the database
        }
    } else {
        // Display error with creating new drink for user
    }
    
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
