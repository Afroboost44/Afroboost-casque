// -----------------------------
// Afroboost App – Full Version
// -----------------------------

// Splashscreen control
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  if (splash) {
    splash.style.opacity = 1;
    setTimeout(() => {
      splash.style.opacity = 0;
      setTimeout(() => splash.remove(), 600);
    }, 1200);
  }
});

// Promo code system
function applyPromoCode(price, codeValue) {
  if (!codeValue || codeValue <= 0) return price;
  const finalPrice = price - codeValue;
  return finalPrice <= 0 ? 0 : finalPrice;
}

// Forgot password (fake modal)
function forgotPassword() {
  alert("Un lien de réinitialisation a été envoyé à votre email.");
}

// CSV export
function downloadCSV() {
  const data = [
    ["Nom", "Email", "Cours"],
    ["Bassi", "test@afroboost.com", "Afroboost Silent"],
  ];

  let csvContent = "data:text/csv;charset=utf-8,";
  data.forEach((row) => {
    csvContent += row.join(",") + "\n";
  });

  const link = document.createElement("a");
  link.href = encodeURI(csvContent);
  link.download = "reservations.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// React component
function App() {
  return React.createElement(
    "div",
    { style: { padding: "20px", color: "#fff", fontFamily: "Arial" } },
    [
      React.createElement("h1", { key: 1 }, "Afroboost App"),
      React.createElement("p", { key: 2 }, "Bienvenue dans Afroboost-casque !"),
      React.createElement(
        "button",
        { key: 3, onClick: () => forgotPassword() },
        "Mot de passe oublié"
      ),
      React.createElement(
        "button",
        { key: 4, onClick: () => downloadCSV(), style: { marginLeft: "10px" } },
        "Télécharger CSV"
      ),
    ]
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
