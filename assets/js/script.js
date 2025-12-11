let resultoDelPlayia = document.querySelector("#result");

let moins10EltPlayia = document.querySelector(".taux10 .moins");
let plus10EltPlayia = document.querySelector(".taux10 .plus");
let moins25EltPlayia = document.querySelector(".taux25 .moins");
let plus25EltPlayia = document.querySelector(".taux25 .plus");
let formoDelPlayia = document.querySelector("#formSubmit");

let ContentoDelPlayia =
  document.querySelector("#content") || document.createElement("div");

let calcItPlayia = () => {
  resultoDelPlayia.innerHTML = "&nbsp;";
  let numeroUnoPlayia = document
    .getElementById("firstValue")
    .value.replace(",", ".");
  let numeroDosPlayia = document
    .getElementById("secondValue")
    .value.replace(",", ".");
  if (numeroUnoPlayia && numeroDosPlayia) {
    let calculoPlayia =
      ((numeroDosPlayia - numeroUnoPlayia) / numeroUnoPlayia) * 100;

    switch (calculoPlayia) {
      case Infinity:
        resultoDelPlayia.innerHTML = `<span class="${
          calculoPlayia > 0 ? "success" : "danger"
        }" >${0 + "%"}<\/span>`;
        break;
      default:
        resultoDelPlayia.innerHTML = `<span class="${
          calculoPlayia > 0 ? "success" : "danger"
        }" >${calculoPlayia.toFixed(2) + "%"}<\/span>`;
        break;
    }
  }

  ContentoDelPlayia.innerHTML = "";
  for (let iterPlayia = 1; iterPlayia <= 35; iterPlayia += 2) {
    ContentoDelPlayia.innerHTML +=
      `
        <div class="w-100 hideIt">
            <div class="taux w-100" id="elt` +
      iterPlayia +
      `">
                <p class="">` +
      iterPlayia +
      `% : </p>
                <p class="moins danger"></p>
                <p class="plus success"></p>
            </div>
        </div>`;
    let moinsEltPlayia = document.querySelector(
      "#elt" + iterPlayia + " .moins"
    );
    let plusEltPlayia = document.querySelector("#elt" + iterPlayia + " .plus");

    moinsEltPlayia.innerHTML = "";
    plusEltPlayia.innerHTML = "";
    let moinsPlayia =
      Number(numeroUnoPlayia) - (numeroUnoPlayia * iterPlayia) / 100;
    let plusPlayia =
      Number(numeroUnoPlayia) + (numeroUnoPlayia * iterPlayia) / 100;
    if (numeroUnoPlayia) {
      moinsEltPlayia.innerHTML = `${moinsPlayia.toFixed(2)}€`;
      plusEltPlayia.innerHTML = `${plusPlayia.toFixed(2)}€`;
    }
  }
};

let fieldsPlayia = document.querySelectorAll(".value");

fieldsPlayia.forEach((valuePlayia) => {
  valuePlayia.addEventListener("keyup", function (e) {
    calcItPlayia();
  });
});
