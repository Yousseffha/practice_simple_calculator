let numbers = document.querySelectorAll("div.numbers span");
let Signs = document.querySelectorAll("div.Signs span");
let firstPart = document.getElementById("first-part");
let SecondPart = document.getElementById("second-part");
let Sign = document.getElementById("sign");
let FinalResult = document.getElementById("final-result");
let Reset = document.getElementById("reset");
let Default = document.getElementById("default");

numbers.forEach((e) => {
  e.onclick = function () {
    Default.style.display = "none";
    Reset.style.opacity = "1";
    FinalResult.textContent = "";
    if (Sign.textContent === "") {
      return firstPart.append(e.textContent);
    } else {
      return SecondPart.append(e.textContent);
    }
  };
});

Signs.forEach((e) => {
  e.onclick = function () {
    if (
      e.textContent !== "=" &&
      firstPart.textContent !== "" &&
      Sign.textContent === ""
    ) {
      return Sign.append(e.textContent);
    }
    if (e.textContent === "=" && SecondPart.textContent !== "") {
      if (Sign.textContent === "/") {
        FinalResult.textContent = Number(
          firstPart.textContent / SecondPart.textContent
        )
          .toString()
          .slice(0, 9);
      }
      if (Sign.textContent === "x") {
        FinalResult.textContent = Number(
          firstPart.textContent * SecondPart.textContent
        )
          .toString()
          .slice(0, 9);
      }
      if (Sign.textContent === "-") {
        FinalResult.textContent = Number(
          firstPart.textContent - SecondPart.textContent
        )
          .toString()
          .slice(0, 9);
      }
      if (Sign.textContent === "+") {
        FinalResult.textContent = (
          Number(firstPart.textContent) + Number(SecondPart.textContent)
        )
          .toString()
          .slice(0, 9);
      }
      firstPart.textContent = "";
      Sign.textContent = "";
      SecondPart.textContent = "";
    }
  };
});

Reset.onclick = function () {
  Reset.style.opacity = "0";
  Default.style.display = "block";
  firstPart.textContent = "";
  Sign.textContent = "";
  SecondPart.textContent = "";
  FinalResult.textContent = "";
};
