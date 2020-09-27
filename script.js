// Variables
const itemSelection = document.querySelector(".item");
const order = document.querySelector(".order");
document.querySelector(".pricing-div").style.display = "none";
// kilometer calculator
var kiloCalc = (kilo) => {
  //   1 kilometer costs 300 rand
  return kilo * 300;
};

// getting and setting price of item
var itemCalc = () => {
  const selectedItem = itemSelection.value;
  switch (selectedItem) {
    case "Bread":
      return { item: selectedItem, price: 3500 };
    case "Egg":
      return { item: selectedItem, price: 500 };
    case "Juice":
      return { item: selectedItem, price: 10000 };
    default:
      return { msg: "no item selected" };
  }
};

// bill calculator
var billCalc = () => {
  // returns only integers
  const kilometer = parseInt(document.querySelector(".kilometer").value);

  const { item, price } = itemCalc();
  const transport = kiloCalc(kilometer);

  var total = parseInt(price) + parseInt(transport);

  return { item, transport, price, total };
};

// order function
var orderItem = (ev) => {
  ev.preventDefault();
  const kilometer = document.querySelector(".kilometer").value;

  if (!kilometer) {
    document.querySelector(".err").textContent =
      "Enter kilometers of the journey";
  } else {
    document.querySelector(".pricing-div").style.display = "inline";

    const itemTag = document.querySelector(".itemValue");
    const transportTag = document.querySelector(".transport");
    const costTag = document.querySelector(".cost");
    const totalTag = document.querySelector(".total");

    const { item, transport, price, total } = billCalc();

    itemTag.textContent = item;
    transportTag.textContent = `${transport}`;
    costTag.textContent = `${price}`;
    totalTag.textContent = `${total}`;
  }

  console.log(billCalc());
};

// action events
order.addEventListener("click", orderItem);
document.querySelector(".cancel").addEventListener("click", () => {
  document.querySelector(".kilometer").value = ' ';
  document.querySelector(".pricing-div").style.display = "none";
});
