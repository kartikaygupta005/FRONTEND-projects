
function eventChange(ele) {
    var qty = document.getElementById("qty").value;

    if (qty < 1) {
        alert("Quantity should be greater than 0");
        return false;
    }
    else {
        var products = {
            "laptop": 50000,
            "mobile": 10000,
            "keyboard": 5000,
            "mouse": 1000,
            "mic": 800,
            "headphones": 1200
        };

        var selectedproduct = document.getElementById("name").value;
        var quantity = document.getElementById("qty").value;
        var number = document.getElementById("no").value;

        alert(selectedproduct);

        var total = 0;
        total += products[selectedproduct] * quantity;

        alert("Product No: " + number);
        alert("Total Price: " + total);
    }
}
