function eventchange(ele) {
    var name = document.getElementById("name");

    if (name.value === "") {
        alert("name can not be empty");
        return;
    }

    var phoneNumber = document.getElementById("phoneNumber");

    if (phoneNumber.value === "") {
        alert("Phone Number can not be empty");
        return;
    }

    var qty = document.getElementById("qty");

    if (qty.value < 1) {
        alert("at least one quantity is required to proceed");
        return;
    }

    var products = {
        "laptop": 50000,
        "computer": 200000,
        "mouse": 2000,
        "keyboard": 1000,
        "mic": 5624
    };

    var selected = document.getElementById("choose").value;
    var quantity = document.getElementById("qty").value;

    var amount = 0;

    amount = products[selected] * quantity;

    // alert(amount);
    document.getElementById("total").innerHTML = "Total amount = " + amount ;
}
