// setting up variables

let resultCon = document.querySelector(".result");
let btn = document.querySelector(".btn");
let numIns = document.querySelector(".num-ins");
let currOne = document.querySelector(".currOne");
let currTwo = document.querySelector(".currTwo");
let numberInserted = document.querySelector(".result .number");
let firCurr = document.querySelector(".result .fir-curr");
let result = document.querySelector(".result .res");
let secCurr = document.querySelector(".result .sec-curr");

// remove result section by default

resultCon.style.display = "none";

function getdata() {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let objData = JSON.parse(this.responseText);
      console.log(objData);
      btn.onclick = function () {
        //................................................................... USA
        if (
          currOne.value === `US Dollar` &&
          currTwo.value === `Great Britain Pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (objData.gbpfromusa.rate * numIns.value).toFixed(
            2
          );
        } else if (
          currOne.value === `US Dollar` &&
          currTwo.value === `US Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = numIns.value;
        } else if (
          currOne.value === `US Dollar` &&
          currTwo.value === `Canadian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.cadfromusa.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `US Dollar` &&
          currTwo.value === `Australian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.audfromusa.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (currOne.value === `US Dollar` && currTwo.value === `Euro`) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.eurfromusa.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `US Dollar` &&
          currTwo.value === `Russian ruble`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.rubfromusa.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `US Dollar` &&
          currTwo.value === `Turkish lira`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.tryfromusa.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `US Dollar` &&
          currTwo.value === `United Arab Emirates dirham`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.aedfromusa.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `US Dollar` &&
          currTwo.value === `Saudi riyal`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.sarfromusa.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `US Dollar` &&
          currTwo.value === `Egyptian pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.egpfromusa.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `US Dollar` &&
          currTwo.value === `Kuwaiti dinar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.kwdfromusa.rate * numberInserted.textContent
          ).toFixed(2);
        }
        //............................................................................. UK
        if (
          currOne.value === `Great Britain Pound` &&
          currTwo.value === `US Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.usdfromuk.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Great Britain Pound` &&
          currTwo.value === `Great Britain Pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = numIns.value;
        } else if (
          currOne.value === `Great Britain Pound` &&
          currTwo.value === `Canadian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.cadfromuk.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Great Britain Pound` &&
          currTwo.value === `Australian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.audfromuk.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Great Britain Pound` &&
          currTwo.value === `Euro`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.eurfromuk.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Great Britain Pound` &&
          currTwo.value === `Russian ruble`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.rubfromuk.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Great Britain Pound` &&
          currTwo.value === `Turkish lira`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.tryfromuk.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Great Britain Pound` &&
          currTwo.value === `United Arab Emirates dirham`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.aedfromuk.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Great Britain Pound` &&
          currTwo.value === `Saudi riyal`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.sarfromuk.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Great Britain Pound` &&
          currTwo.value === `Egyptian pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.egpfromuk.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Great Britain Pound` &&
          currTwo.value === `Kuwaiti dinar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.kwdfromuk.rate * numberInserted.textContent
          ).toFixed(2);
        }
        //............................................................................. AUSTRALIA

        if (
          currOne.value === `Australian Dollar` &&
          currTwo.value === `Great Britain Pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.gbpfromaus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Australian Dollar` &&
          currTwo.value === `US Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.usdfromaus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Australian Dollar` &&
          currTwo.value === `Canadian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.cadfromaus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Australian Dollar` &&
          currTwo.value === `Australian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = numIns.value;
        } else if (
          currOne.value === `Australian Dollar` &&
          currTwo.value === `Euro`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.eurfromaus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Australian Dollar` &&
          currTwo.value === `Russian ruble`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.rubfromaus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Australian Dollar` &&
          currTwo.value === `Turkish lira`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.tryfromaus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Australian Dollar` &&
          currTwo.value === `United Arab Emirates dirham`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.aedfromaus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Australian Dollar` &&
          currTwo.value === `Saudi riyal`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.sarfromaus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Australian Dollar` &&
          currTwo.value === `Egyptian pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.egpfromaus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Australian Dollar` &&
          currTwo.value === `Kuwaiti dinar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.kwdfromaus.rate * numberInserted.textContent
          ).toFixed(2);
        }
        //..................................................................................... CANADA
        if (
          currOne.value === `Canadian Dollar` &&
          currTwo.value === `Great Britain Pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.gbpfromcan.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Canadian Dollar` &&
          currTwo.value === `US Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.usdfromcan.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Canadian Dollar` &&
          currTwo.value === `Canadian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = numIns.value;
        } else if (
          currOne.value === `Canadian Dollar` &&
          currTwo.value === `Australian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.audfromcan.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Canadian Dollar` &&
          currTwo.value === `Euro`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.eurfromcan.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Canadian Dollar` &&
          currTwo.value === `Russian ruble`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.rubfromcan.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Canadian Dollar` &&
          currTwo.value === `Turkish lira`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.tryfromcan.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Canadian Dollar` &&
          currTwo.value === `United Arab Emirates dirham`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.aedfromcan.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Canadian Dollar` &&
          currTwo.value === `Saudi riyal`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.sarfromcan.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Canadian Dollar` &&
          currTwo.value === `Egyptian pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.egpfromcan.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Canadian Dollar` &&
          currTwo.value === `Kuwaiti dinar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.kwdfromcan.rate * numberInserted.textContent
          ).toFixed(2);
        }
        //.................................................................................. EURO
        if (
          currOne.value === `Euro` &&
          currTwo.value === `Great Britain Pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.gbpfromeuro.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (currOne.value === `Euro` && currTwo.value === `US Dollar`) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.usdfromeuro.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Euro` &&
          currTwo.value === `Canadian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.cadfromeuro.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Euro` &&
          currTwo.value === `Australian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.audfromeuro.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (currOne.value === `Euro` && currTwo.value === `Euro`) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = numIns.value;
        } else if (
          currOne.value === `Euro` &&
          currTwo.value === `Russian ruble`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.rubfromeuro.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Euro` &&
          currTwo.value === `Turkish lira`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.tryfromeuro.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Euro` &&
          currTwo.value === `United Arab Emirates dirham`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.aedfromeuro.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Euro` &&
          currTwo.value === `Saudi riyal`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.sarfromeuro.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Euro` &&
          currTwo.value === `Egyptian pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.egpfromeuro.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Euro` &&
          currTwo.value === `Kuwaiti dinar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.kwdfromeuro.rate * numberInserted.textContent
          ).toFixed(2);
        }
        //........................................................................... TURKEY
        if (
          currOne.value === `Turkish lira` &&
          currTwo.value === `Great Britain Pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.gbpfromtur.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Turkish lira` &&
          currTwo.value === `US Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.usdfromtur.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Turkish lira` &&
          currTwo.value === `Canadian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.cadfromtur.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Turkish lira` &&
          currTwo.value === `Australian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.audfromtur.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Turkish lira` &&
          currTwo.value === `Euro`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.eurfromtur.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Turkish lira` &&
          currTwo.value === `Russian ruble`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.rubfromtur.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Turkish lira` &&
          currTwo.value === `Turkish lira`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = numIns.value;
        } else if (
          currOne.value === `Turkish lira` &&
          currTwo.value === `United Arab Emirates dirham`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.aedfromtur.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Turkish lira` &&
          currTwo.value === `Saudi riyal`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.sarfromtur.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Turkish lira` &&
          currTwo.value === `Egyptian pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.egpfromtur.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Turkish lira` &&
          currTwo.value === `Kuwaiti dinar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.kwdfromtur.rate * numberInserted.textContent
          ).toFixed(2);
        }
        //........................................................................... SAUDIARABIA
        if (
          currOne.value === `Saudi riyal` &&
          currTwo.value === `Great Britain Pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.gbpfromsaudi.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Saudi riyal` &&
          currTwo.value === `US Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.usdfromsaudi.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Saudi riyal` &&
          currTwo.value === `Canadian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.cadfromsaudi.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Saudi riyal` &&
          currTwo.value === `Australian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.audfromsaudi.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Saudi riyal` &&
          currTwo.value === `Euro`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.eurfromsaudi.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Saudi riyal` &&
          currTwo.value === `Russian ruble`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.rubfromsaudi.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Saudi riyal` &&
          currTwo.value === `Turkish lira`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.tryfromsaudi.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Saudi riyal` &&
          currTwo.value === `United Arab Emirates dirham`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.aedfromsaudi.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Saudi riyal` &&
          currTwo.value === `Saudi riyal`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = numIns.value;
        } else if (
          currOne.value === `Saudi riyal` &&
          currTwo.value === `Egyptian pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.egpfromsaudi.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Saudi riyal` &&
          currTwo.value === `Kuwaiti dinar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.kwdfromsaudi.rate * numberInserted.textContent
          ).toFixed(2);
        }
        //......................................................................... EGYPT
        if (
          currOne.value === `Egyptian pound` &&
          currTwo.value === `Great Britain Pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.gbpfromeg.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Egyptian pound` &&
          currTwo.value === `US Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.usdfromeg.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Egyptian pound` &&
          currTwo.value === `Canadian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.cadfromeg.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Egyptian pound` &&
          currTwo.value === `Australian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.audfromeg.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Egyptian pound` &&
          currTwo.value === `Euro`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.eurfromeg.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Egyptian pound` &&
          currTwo.value === `Russian ruble`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.rubfromeg.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Egyptian pound` &&
          currTwo.value === `Turkish lira`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.tryfromeg.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Egyptian pound` &&
          currTwo.value === `United Arab Emirates dirham`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.aedfromeg.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Egyptian pound` &&
          currTwo.value === `Saudi riyal`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.sarfromeg.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Egyptian pound` &&
          currTwo.value === `Egyptian pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = numIns.value;
        } else if (
          currOne.value === `Egyptian pound` &&
          currTwo.value === `Kuwaiti dinar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.kwdfromeg.rate * numberInserted.textContent
          ).toFixed(2);
        }
        //............................................................................ RUSSIA
        if (
          currOne.value === `Russian ruble` &&
          currTwo.value === `Great Britain Pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.gbpfromrus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Russian ruble` &&
          currTwo.value === `US Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.usdfromrus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Russian ruble` &&
          currTwo.value === `Canadian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.cadfromrus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Russian ruble` &&
          currTwo.value === `Australian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.audfromrus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Russian ruble` &&
          currTwo.value === `Euro`
        ) {
          //....................
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.eurfromrus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Russian ruble` &&
          currTwo.value === `Russian ruble`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = numIns.value;
        } else if (
          currOne.value === `Russian ruble` &&
          currTwo.value === `Turkish lira`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.tryfromrus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Russian ruble` &&
          currTwo.value === `United Arab Emirates dirham`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.aedfromrus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Russian ruble` &&
          currTwo.value === `Saudi riyal`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.sarfromrus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Russian ruble` &&
          currTwo.value === `Egyptian pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.egpfromrus.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Russian ruble` &&
          currTwo.value === `Kuwaiti dinar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.kwdfromrus.rate * numberInserted.textContent
          ).toFixed(2);
        }
        //.................................................................. UNITED ARAB EMIRATES
        if (
          currOne.value === `United Arab Emirates dirham` &&
          currTwo.value === `Great Britain Pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.gbpfromuae.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `United Arab Emirates dirham` &&
          currTwo.value === `US Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.usdfromuae.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `United Arab Emirates dirham` &&
          currTwo.value === `Canadian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.cadfromuae.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `United Arab Emirates dirham` &&
          currTwo.value === `Australian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.audfromuae.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `United Arab Emirates dirham` &&
          currTwo.value === `Euro`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.eurfromuae.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `United Arab Emirates dirham` &&
          currTwo.value === `Russian ruble`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.rubfromuae.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `United Arab Emirates dirham` &&
          currTwo.value === `Turkish lira`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.tryfromuae.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `United Arab Emirates dirham` &&
          currTwo.value === `United Arab Emirates dirham`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = numIns.value;
        } else if (
          currOne.value === `United Arab Emirates dirham` &&
          currTwo.value === `Saudi riyal`
        ) {
          resultCon.style.display = "United Arab Emirates dirham";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.sarfromuae.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `United Arab Emirates dirham` &&
          currTwo.value === `Egyptian pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.egpfromuae.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `United Arab Emirates dirham` &&
          currTwo.value === `Kuwaiti dinar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.kwdfromuae.rate * numberInserted.textContent
          ).toFixed(2);
        }
        //........................................................................... KUWEIT
        if (
          currOne.value === `Kuwaiti dinar` &&
          currTwo.value === `Great Britain Pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.gbpfromkew.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Kuwaiti dinar` &&
          currTwo.value === `US Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.usdfromkew.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Kuwaiti dinar` &&
          currTwo.value === `Canadian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.cadfromkew.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Kuwaiti dinar` &&
          currTwo.value === `Australian Dollar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.audfromkew.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Kuwaiti dinar` &&
          currTwo.value === `Euro`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.eurfromkew.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Kuwaiti dinar` &&
          currTwo.value === `Russian ruble`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.rubfromkew.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Kuwaiti dinar` &&
          currTwo.value === `Turkish lira`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.tryfromkew.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Kuwaiti dinar` &&
          currTwo.value === `United Arab Emirates dirham`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.aedfromkew.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Kuwaiti dinar` &&
          currTwo.value === `Saudi riyal`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.sarfromkew.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Kuwaiti dinar` &&
          currTwo.value === `Egyptian pound`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = (
            objData.egpfromkew.rate * numberInserted.textContent
          ).toFixed(2);
        } else if (
          currOne.value === `Kuwaiti dinar` &&
          currTwo.value === `Kuwaiti dinar`
        ) {
          resultCon.style.display = "block";
          numberInserted.textContent = numIns.value;
          firCurr.textContent = currOne.value;
          secCurr.textContent = currTwo.value;
          result.textContent = numIns.value;
        }
        //.............................................................................. END
      };
    }
  };

  request.open("GET", "ALL.JSON", true);
  request.send();
}
getdata();
