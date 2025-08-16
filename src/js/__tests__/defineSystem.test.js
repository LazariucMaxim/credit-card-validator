import defineSystem from "../defineSystem";

test.each([
    //visa
    ["4024007161030951", "visa"],
    ["4916308951171497", "visa"],
    ["4532971303716537700", "visa"],
    ["4175006686381102", "visa"],
    ["4917093369674741", "visa"],
    ["4844478189937683", "visa"],
    //mastercard
    ["5284975546881516", "mastercard"],
    ["5301822342570076", "mastercard"],
    ["5129382369642928", "mastercard"],
    //amex
    ["372054222440858", "amex"],
    ["346594825310167", "amex"],
    ["375946860598664", "amex"],
    //discover
    ["6011539728432551", "discover"],
    ["6011218372106874", "discover"],
    ["6011990893941451768", "discover"],
    //jcb
    ["3529993544553896", "jcb"],
    ["3532548591766570", "jcb"],
    ["3533898828237423112", "jcb"],
    //diners
    ["30543546244230", "diners"],
    ["30000829192446", "diners"],
    ["30496048951424", "diners"],
    ["36312703604600", "diners"],
    ["36437628837470", "diners"],
    ["36197612704181", "diners"],
    //maestro
    ["5893935013465659", "maestro"],
    ["6761796309500659", "maestro"],
    ["6759127450405940", "maestro"],
    //unionpay
    ["6240665537622455", "unionpay"],
    ["6234002333617802", "unionpay"],
    ["6255321051272366", "unionpay"],
    //mir
    ["2202200100000015", "mir"],
    ["2200000000000053", "mir"],
    ["2200255555555555", "mir"]
])("Define system of card %s (%s)", (number, system) => {
    expect(defineSystem({value: number}, test=true)()).toBe(system);
})