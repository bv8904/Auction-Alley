document.getElementById("sellerForm").onsubmit = function(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById("sellerForm"));

    fetch("/api/sellProduct", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert("Product listed successfully!");
    })
    .catch(error => {
        console.error("Error:", error);
    });
};