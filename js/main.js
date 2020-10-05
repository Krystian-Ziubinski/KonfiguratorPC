const mb = [
    {
        id: 1,
        name: "MSI MPG X570 GAMING PLUS",
        price: 779

    },
    {
        id: 2,
        name:"Gigabyte Z390 AORUS PRO",
        price: 829
    },
    {
        id:3,
        name: "MSI B450 GAMING PLUS MAX",
        price: 329
    }
]
const gfx = [
    {
        id: 1,
        name: "MSI GeForce GTX 1650 D6 Gaming X 4GB GDDR6 (GTX 1650 D6 GAMING X)",
        price: 879

    },
    {
        id: 2,
        name:"Gigabyte GeForce GTX 1660 Gaming OC 6GB GDDR5 (GV-N1660GAMING OC-6GD) ",
        price: 999
    },
    {
        id:3,
        name: "XFX Radeon RX 580 GTS XXX OC+ 8GB GDDR5 (RX-580P8DFD6)",
        price: 829
    }
]
const cpu = [
    {
        id: 1,
        name: "Intel Core i5-10400F, 2.9GHz, 12 MB, BOX (BX8070110400F)",
        price: 699

    },
    {
        id: 2,
        name:"Intel Core i7-10700K, 3.8GHz, 16 MB, BOX (BX8070110700K)",
        price: 1749
    },
    {
        id:3,
        name: "Intel Core i9-10850K, 3.6GHz, 20 MB, BOX (BX8070110850K)",
        price: 2189
    }
]
var cart = [
    {
        name: 'mainboard',
        price:0
    },
    {
        name: 'graphic card',
        price:0
    },
    {
        name:'processor',
        price:0
    }
]










let summaryCompHandler = document.getElementById("summaryComp");

function addOpt(elem, optValue, textOpt) {
    let select1 = document.getElementById(elem);  // pobranie id miejsca do dodania opcji
    let option = document.createElement( "option"); //utworzenie elementu option
    option.setAttribute( "value", optValue); //dodaje atrybut value
    const textOption = document.createTextNode(textOpt);  // tekst do opcji
    option.appendChild(textOption); // dodanie tekstu do opcji
    select1.appendChild(option); // finalizacja dodanie opcji
}
function SelectedItemValue(SelectId){
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('value');
    console.log("Wybrany element ma ID:"+strAtt);

    const summaryCPU = document.getElementById("summaryCpu");
    const summaryMb = document.getElementById("summaryMb");
    const summaryGfx = document.getElementById("summaryGfx");

    if (SelectId == "cpu")
        summaryCPU.innerHTML = cpu[strAtt-1].name + " " + cpu[strAtt - 1].price
        cart[2].price = cpu[strAtt - 1].price
        cart[2].name = cpu[strAtt - 1].name
     else if (SelectId == "mb")
        summaryMb.innerHTML = mb[strAtt-1].name + " " + mb[strAtt - 1].price
        cart[2].price = mb[strAtt - 1].price
        cart[2].name = mb[strAtt - 1].name
    else if (SelectId == "gfx")
        summaryGfx.innerHTML = gfx[strAtt-1].name + " " + gfx[strAtt - 1].price
        cart[2].price = gfx[strAtt - 1].price
        cart[2].name = gfx[strAtt - 1].name
    else
    {}

}


for(let i=0; i<mb.length; i++) {
    addOpt("mb" , mb[i].id, mb[i].name)
}
for(let i=0; i<gfx.length; i++) {
    addOpt("gfx" , gfx[i].id, gfx[i].name)
}
for(let i=0; i<cpu.length; i++) {
    addOpt("cpu" , cpu[i].id, cpu[i].name)
}

