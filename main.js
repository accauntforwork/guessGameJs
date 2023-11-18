// let pastga = Math.floor(-5.9); //-6
// let yuqoriga = Math.ceil(1.1); //2
// let haqiqiyYaxlitlash = Math.round(5.5); //6
// let shunchakiOlibTashlaydi = Math.trunc(-2.7); //2

// let tasodifiySon = Math.ceil(Math.random() * 10);
// let ildiz = Math.sqrt();
// let katta = Math.max();
// let kichik = Math.min();

// // let myMath = {
// //     floor:function (number) {
// //         return number | 0;
// //     }
// // }
// // console.log(myMath.floor(-7.99));

// const ildizTop = (son) => son ** (1 / 2);
// console.log(ildizTop(100));

// function kopaytirishJadvali(dan, gacha, tadan) {
//   let natija = "";
//   for (let i = dan; i <= gacha; i += tadan) {
//     for (let j = 1; j <= gacha; j++) {
//       let qator = "";
//       for (let k = 0; k < tadan; k++) {
//         let birinchiKopaytuvchi = i + k;
//         if (birinchiKopaytuvchi <= gacha) {
//           qator += `${birinchiKopaytuvchi} x ${j} = ${
//             birinchiKopaytuvchi * j
//           }\t`;
//         }
//       }
//       natija += qator + "\n";
//     }
//     natija += "\n";
//   }

//   return natija;
// }
// let natija = kopaytirishJadvali(2, 9, 3);
// console.log(natija);

// const secretNumber = Math.floor(Math.random() * 30) + 1;
// console.log(secretNumber);

const secretNumber = Math.floor(Math.random() * 30) + 1;
console.log(secretNumber);
let attempts = 0;

function playGame() {
  alert("Faqat 1 dan 30 gacha oraliqdagi raqamlarni kiriting: ");
  let lastAttempts = "";
  while (attempts < 10) {
    const guess = prompt(
      `O'z taxminingizni kiriting: (Attempt ${++attempts}): Avvalgi taxminlaringiz: ${lastAttempts}`
    );
    if (guess === null || isNaN(guess) || guess < 1 || guess > 30) {
      alert(
        "Faqat 1 dan 30 gacha oraliqdagi raqamlarni kiriting: o'qishni bilasizmi yozib qo'yilganku"
      );
      lastAttempts += ` ${guess} ==>`;
    } else if (parseInt(guess) === secretNumber) {
      alert(
        `Tabriklaymiz ! Kompyuter o'ylagan son ${secretNumber} ni ${attempts} urinishda topdingiz`
      );
      break;
    } else {
      const feedback = guess < secretNumber ? "Kichikroq" : "Kattaroq";
      lastAttempts += ` ${guess} ==>`;
      alert(`${feedback} taxmin bo'ldi.`);
    }
  }
  if (attempts === 10) {
    alert("Bunday omadsiz odamni dunyo ko'rmagan");
  }
}
playGame();
