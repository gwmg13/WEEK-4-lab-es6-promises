// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
function addElement(step1) {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
}
function callbackError(error){
  console.error(error);
}
getInstruction("mashedPotatoes", 0, addElement, callbackError); 


  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); 
  */

// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
  getInstruction("mashedPotatoes", 1, (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstruction("mashedPotatoes", 2, (step) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
      getInstruction("mashedPotatoes", 3, (step) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
        getInstruction("mashedPotatoes", 4, (step) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready!</li>`;
        })
      })
    })
  })
}, (error) => console.log(error));

// Iteration 2 - using promises
// ...

obtainInstruction("steak", 0)
  .then(function (step) {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`
    obtainInstruction("steak", 1)
      .then(function (step) {
        document.querySelector("#steak").innerHTML += `<li>${step}</li>`
        obtainInstruction("steak", 2)
          .then(function (step) {
            document.querySelector("#steak").innerHTML += `<li>${step}</li>`
            obtainInstruction("steak", 3)
              .then(function (step) {
                document.querySelector("#steak").innerHTML += `<li>${step}</li>`
                obtainInstruction("steak", 4).then((step) => {
                  document.querySelector("#steak").innerHTML += `<li>${step}</li>`
                  document.querySelector("#steak").innerHTML += `<li>Steak is ready!.</li>`
                })
                  .catch((error) => console.error(error))
              })
              .catch(function (error) {
                console.error(error);
              })
          }
          ).catch(function (error) {
            console.error(error);
          })
      }).catch(function (error) {
        console.error(error);
      })
  }).catch(function (error) {
    console.error(error);
  });

// Iteration 3 using async/await
// ...


async function makeBroccoli() {
  try {
    let step;
    step = await obtainInstruction("broccoli", 0);
    printStep(step);
    step = await obtainInstruction("broccoli", 1);
    printStep(step);
    step = await obtainInstruction("broccoli", 2);
    printStep(step);
    step = await obtainInstruction("broccoli", 3);
    printStep(step);
    step = await obtainInstruction("broccoli", 4);
    printStep(step);
    step = await obtainInstruction("broccoli", 5);
    printStep(step);
    step = await obtainInstruction("broccoli", 6);
    printStep(step);
  } catch (error) {
    console.log(error);
  }
}

function printStep(step) {
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
}

makeBroccoli();




// Bonus 2 - Promise all

const p1 = obtainInstruction("brusselsSprouts", 0);
const p2 = obtainInstruction("brusselsSprouts", 1);
const p3 = obtainInstruction("brusselsSprouts", 2);
const p4 = obtainInstruction("brusselsSprouts", 3);
const p5 = obtainInstruction("brusselsSprouts", 4);
const p6 = obtainInstruction("brusselsSprouts", 5);
const p7 = obtainInstruction("brusselsSprouts", 6);
const p8 = obtainInstruction("brusselsSprouts", 7);
Promise.all([p1, p2, p3, p4, p5, p6, p7, p8])
  .then((steps) => {
    for (let i = 0; i < steps.length; i++) {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps[i]}</li>`
    }
  }).catch((error) => console.log(error));