function eventchange(event) {
    // Prevents the browser from refreshing the page on form submit
    event.preventDefault();

    // Capture values from inputs
    let name = document.getElementById("idname").value;
    let roll = document.getElementById("rollid").value;
    let book = document.getElementById("selectid").value;
    let date = document.getElementById("dateid").value;

    // Display issued book details
    alert(`Book Issued Successfully!\nName: ${name}\nRoll No: ${roll}\nBook: ${book}\nDate: ${date}`);
}
