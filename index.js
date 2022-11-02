        /* Assign global variables */
     
        /* INR/CONC ISI (1.5) Input */
let num1 = document.getElementById("ptnum-el")
        /* PT Outputs */
let pt = document.getElementById("pt-el")
let pt2 = document.getElementById("pt-el2")
/* --------------------------------------------------------- */

        /* INR/CONC ISI (1.0) Input */
let num2 = document.getElementById("ptnum-spec")
        /* PT Outputs */
let ptspec = document.getElementById("pt-spec")
let ptspec2 = document.getElementById("pt-spec2")
/* --------------------------------------------------------- */

        /* Urea / BUN Inputs */
let bunNum = document.getElementById("bun-num")
let ureaNum = document.getElementById("urea-num")
        /* Urea / BUN Outputs */
let bun = document.getElementById("bun")
let urea = document.getElementById("urea")
/* --------------------------------------------------------- */

        /* Anion Gap Inputs */
let naNum = document.getElementById("naNum")
let kNum = document.getElementById("kNum")
let hco3Num = document.getElementById("hco3Num")
let clNum = document.getElementById("clNum")
        /* Anion Gap Output */
let sod = document.getElementById("sodium")
let pota = document.getElementById("potassium")
let bica = document.getElementById("bicarb")
let chlor = document.getElementById("chloride")
let anionGap = document.getElementById("anionGap")
/* --------------------------------------------------------- */

        /* Lipid Profile Outputs */
let cholesterol = document.getElementById("cholesterol")
let triglyceride = document.getElementById("triglyceride")
let hdl = document.getElementById("hdl")
let ldl = document.getElementById("ldl")
let vldl = document.getElementById("vldl")
let riskfactor1 = document.getElementById("riskfactor1")
let riskfactor2 = document.getElementById("riskfactor2")
        /* Lipid Inputs */
let cholestel = document.getElementById("cholest-el")
let tgel = document.getElementById("tg-el")
let hdlel = document.getElementById("hdl-el")
/* --------------------------------------------------------- */

        /* Calcium (Ionized) Inputs*/
let totalCalcium = document.getElementById("cal-el")
let albumin = document.getElementById("alb-el")
        /* Calcium Outputs */
let ionizedCalcium = document.getElementById("ion-cal")
/* --------------------------------------------------------- */

/* Invoke your functions in case of invoking all of ur funcs at once */
/* function doMath() {
    myPT()
    myspecPT()
    myLipid()
    ionCalcium()
} */

/* Create your functions */

function myPT() {
    
    // Calculations.
    let ptINR = ( num1.value / 13 ) ** 1.5
    let ptCONC = ( 13 / num1.value ) * 100
    
    // Using textContent method to display the outcome of my calculations
    // Using toFixed() method to specify the numbers of decimals needed
    // Using .value to get the value of my object (the number)
    pt.textContent = " INR = " + ptINR.toFixed(3)
    pt2.textContent = " PT Concenteration = " + ptCONC.toFixed(3)
}

function myspecPT() {
    
        // Calculations.
        let ptspecINR = ( num2.value / 13 ) ** 1
        let ptspecCONC = ( 13 / num2.value ) * 100
        
        // Using textContent method to display the outcome of my calculations
        // Using toFixed() method to specify the numbers of decimals needed
        // Using .value to get the value of my object (the number)
        ptspec.textContent = " INR = " + ptspecINR.toFixed(3)
        ptspec2.textContent = " PT Concenteration = " + ptspecCONC.toFixed(3)
}

function myBUrea() {

        // Calculations.
        /* 
        BUN (mg/dl) = Urea (mg/dl) / 2.1428
        Urea (mmol/l) = BUN (mg/dl)* 0.357
        */

        let myBun = ( ureaNum.value ) / 2.1428 
        let myUrea = ( bunNum.value ) * 2.1428
        // Using textContent method to display the outcome of my calculations
        // Using toFixed() method to specify the numbers of decimals needed
        // Using .value to get the value of my object (the number)
        bun.textContent = " BUN = " + myBun.toFixed(3)
        urea.textContent = " Urea = " + myUrea.toFixed(2)
}

function aGap() {

        // Calculation.
        /* 
        Anion Gap = [Na + K] - [HCO3 + Cl]
        */

        // Using .value to get the value of my object (the number)
        let sodium = naNum.value
        let potassium = kNum.value
        let bicarb = hco3Num.value
        let chloride = clNum.value
        /* Using parseFloat Method to parse or convert a string to return the first number */
        let gapCalc = parseFloat(sodium) + parseFloat(potassium)
        let gapCalc2 = parseFloat(bicarb) + parseFloat(chloride)
        let gapTotal = gapCalc2 - gapCalc
        // Using textContent method to display the outcome of my calculations
        // Using toFixed() method to specify the numbers of decimals needed
        sod.textContent = "Na = " + sodium
        pota.textContent = "K = " + potassium
        bica.textContent = "HCO3 = " + bicarb
        chlor.textContent = "Cl = " + chloride
        /* https://www.w3schools.com/jsref/jsref_parsefloat.asp */
        anionGap.textContent = "Anion Gap = " + gapTotal.toFixed(2)
}

function myLipid() {
    // Calculations.

    /* 
    LDL = Cholest - (TG/5) - HDL
    VLDL = TG / 5
    RISK FACTOR 1 = Cholest / HDL
    RISK FACTOR 2 = LDL / HDL
    */

 
    let ldlCalc = cholestel.value - (tgel.value/5) - hdlel.value
    let vldlCalc = tgel.value / 5
    let rf1Calc = cholestel.value / hdlel.value
    let rf2Calc = ldlCalc / hdlel.value

    cholesterol.textContent = "Cholesterol = " + cholestel.value
    triglyceride.textContent = "Triglyceride = " + tgel.value
    hdl.textContent = "HDL = " + hdlel.value
    ldl.textContent =  "LDL =  " + ldlCalc
    vldl.textContent = "VLDL = " + vldlCalc
    riskfactor1.textContent = "Risk Factor1 = " + rf1Calc.toFixed(2)
    riskfactor2.textContent = "Risk Factor2 = " + rf2Calc.toFixed(2)
}

function ionCalcium() {
    // Calculations.
    /* ionCalcium = (Ca(total) - Alb + 4) / 2 * 0.25 */

    let caTotal = totalCalcium.value
    let alb = albumin.value

    ionizedCalcium.textContent = "Calcium (Ionized) = " + (caTotal - alb + 4) / 2 * 0.25
}