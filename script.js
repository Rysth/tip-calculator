const billAmount = document.querySelector("#bill");
const percentage = document.querySelector("#percentage");

const submitButton = document.querySelector("#app__button");
const result = document.querySelector("#app__result");

submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	const total = calculateTotal();
	result.innerText = `Total: ${total}`;
});

const calculateTotal = () => {
	const amount = Number(billAmount.value);
	const percent = Number(percentage.value);

	const formattedValue = percent / 100;
	const percentageValue = amount * formattedValue;
	const totalValue = amount + percentageValue;

	return totalValue;
};
