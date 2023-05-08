"use strict";

let aboutMe = {
  name: "Dillon",
  address: "1811 Belcher Pl",
  city: "Austell",
  state: "Georgia",
  zip: 30168,
};

function printContact(info) {
  console.log(info.name);
  console.log(info.address);
  console.log(`${info.city}, ${info.state} ${info.zip}`);
}

printContact(aboutMe);
