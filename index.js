
/* ==============================
   TJ HUB - JAVASCRIPT
================================ */

// Get the HTML elements we need.
const quantityInputs = document.querySelectorAll(".quantity-input");
const orderItems = document.getElementById("order-items");
const orderTotal = document.getElementById("order-total");
const copyOrderButton = document.getElementById("copy-order");
const copyNumberButton = document.getElementById("copy-number");
const orderStatus = document.getElementById("order-status");
const paymentStatus = document.getElementById("payment-status");
const mpesaNumber = "0722103868";

// Format numbers as Kenyan shillings.
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0
  }).format(amount).replace("KES", "KSh");
}

// Get all selected products and calculate the total.
function getOrder() {
  const items = [];
  let total = 0;

  quantityInputs.forEach((input) => {
    const price = Number(input.dataset.price);
    const name = input.dataset.product;

    // Ignore invalid or negative quantities.
    const quantity = Math.max(
      0,
      Math.floor(Number(input.value) || 0)
    );

    // Keep the displayed quantity valid.
    input.value = quantity;

    if (quantity > 0 && Number.isFinite(price) && price > 0) {
      const subtotal = quantity * price;

      items.push({
        name,
        quantity,
        price,
        subtotal
      });

      total += subtotal;
    }
  });

  return { items, total };
}

// Display the current order on the webpage.
function updateOrder() {
  const { items, total } = getOrder();

  orderItems.replaceChildren();

  if (items.length === 0) {
    const message = document.createElement("p");

    message.className = "empty-message";
    message.textContent =
      "You have not selected any products yet.";

    orderItems.appendChild(message);
  } else {
    items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "order-line";

      const details = document.createElement("div");

      const name = document.createElement("div");
      name.className = "order-line-name";
      name.textContent = item.name;

      const quantity = document.createElement("div");
      quantity.className = "order-line-detail";
      quantity.textContent =
        `${item.quantity} × ${formatCurrency(item.price)}`;

      const subtotal = document.createElement("div");
      subtotal.className = "order-line-price";
      subtotal.textContent = formatCurrency(item.subtotal);

      details.append(name, quantity);
      row.append(details, subtotal);
      orderItems.appendChild(row);
    });
  }

  orderTotal.textContent = formatCurrency(total);

  // Disable copying an empty order.
  copyOrderButton.disabled = items.length === 0;
  copyOrderButton.style.opacity =
    items.length === 0 ? "0.6" : "1";
}

// Copy text using the browser clipboard where available.
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  // Fallback for browsers without Clipboard API support.
  const temporaryInput = document.createElement("textarea");

  temporaryInput.value = text;
  temporaryInput.setAttribute("readonly", "");
  temporaryInput.style.position = "fixed";
  temporaryInput.style.opacity = "0";

  document.body.appendChild(temporaryInput);
  temporaryInput.select();

  const copied = document.execCommand("copy");
  temporaryInput.remove();

  if (!copied) {
    throw new Error("Copying was not supported by this browser.");
  }
}

// Build a readable order summary.
function createOrderSummary() {
  const { items, total } = getOrder();

  if (items.length === 0) {
    return "";
  }

  const lines = [
    "TJ HUB - ORDER SUMMARY",
    "----------------------"
  ];

  items.forEach((item) => {
    lines.push(
      `${item.name} x ${item.quantity} - ${formatCurrency(item.subtotal)}`
    );
  });

  lines.push("----------------------");
  lines.push(`TOTAL: ${formatCurrency(total)}`);
  lines.push("");
  lines.push(`M-Pesa number: ${mpesaNumber}`);
  lines.push("");
  lines.push(
    "Please confirm the order and payment details with TJ Hub."
  );

  return lines.join("\n");
}

// Copy the order summary.
copyOrderButton.addEventListener("click", async () => {
  const summary = createOrderSummary();

  if (!summary) {
    orderStatus.textContent =
      "Please select at least one product first.";
    return;
  }

  try {
    await copyText(summary);

    orderStatus.textContent =
      "Order summary copied. You can now share it with TJ Hub.";
  } catch (error) {
    orderStatus.textContent =
      "Copy failed. Please select and copy your order manually.";
  }
});

// Copy the M-Pesa recipient number.
copyNumberButton.addEventListener("click", async () => {
  try {
    await copyText(mpesaNumber);

    paymentStatus.textContent =
      "M-Pesa number copied successfully.";
  } catch (error) {
    paymentStatus.textContent =
      "Copy failed. Please enter 0722103868 manually.";
  }
});

// Update the order whenever a quantity changes.
quantityInputs.forEach((input) => {
  input.addEventListener("input", () => {
    orderStatus.textContent = "";
    updateOrder();
  });

  input.addEventListener("change", () => {
    updateOrder();
  });
});

// Display the current year in the footer.
document.getElementById("current-year").textContent =
  new Date().getFullYear();

// Initialise the page.
updateOrder();
