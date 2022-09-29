const information = require("./information");
const cowsay = require("cowsay");
const { myName, myCampus } = require("./information");
console.log(cowsay.say({
    text: `I'm not MMMAAAARRRRCCCC!!! I'm ${myName} from ${myCampus}!`,
    e: "oO",
    t: "U",
}));
