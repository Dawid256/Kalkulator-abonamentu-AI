const plany = {
    starter: {
        nazwa: "Starter",
        cena: 49,
        prompty: 20
    },
    pro: {
        nazwa: "Pro",
        cena: 129,
        prompty: 100
    },
    business: {
        nazwa: "Business",
        cena: 249,
        prompty: 250
    }
};

function oblicz() {
    let wybranyPlan = document.querySelector('input[name="plan"]:checked').value;
    let okres = document.querySelector('input[name="okres"]:checked').value;

    let plan = plany[wybranyPlan];

    let pakiety = Number(document.getElementById("pakiety").value);

    if (pakiety < 0) {
        pakiety = 0;
        document.getElementById("pakiety").value = 0;
    }

    if (pakiety > 10) {
        pakiety = 10;
        document.getElementById("pakiety").value = 10;
    }

    let suma = plan.cena + pakiety * 15;

    if (document.getElementById("pdf").checked) {
        suma += 19;
    }

    if (document.getElementById("konkurencja").checked) {
        suma += 29;
    }

    let roczna = suma * 12 * 0.9;
    let oszczednosc = suma * 12 - roczna;
    let cena = suma;

    if (okres === "roczny") {
        cena = roczna;
    }

    document.getElementById("nazwa").textContent = plan.nazwa;
    document.getElementById("prompty").textContent = plan.prompty + pakiety * 10;
    document.getElementById("miesieczna").textContent = suma.toFixed(2) + " zł";
    document.getElementById("oszczednosc").textContent =
        (okres === "roczny" ? oszczednosc : 0).toFixed(2) + " zł";
    document.getElementById("cena").textContent = cena.toLocaleString("pl-PL", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " zł";
}

document.querySelectorAll("input").forEach(function(element) {
    element.addEventListener("change", oblicz);
    element.addEventListener("input", oblicz);
});