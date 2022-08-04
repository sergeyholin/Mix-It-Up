// import $ from "jquery";
// import DisplayResults from "@3d-dice/dice-ui/src/displayResults";
// import AdvancedRoller from "@3d-dice/dice-ui/src/advancedRoller";
// import BoxControls from "@3d-dice/dice-ui/src/boxControls";

import DiceBox from '@3d-dice/dice-box';

const PORT = 5000;
const diceEl = $('#dice-box');


const diceBox = new DiceBox("#dice-box", {
  assetPath: '/assets/dice-box/',
  id: diceEl
})

const init = () => {
  diceBox.init().then(() => {
    diceBox.roll('2d20')
  })
}
