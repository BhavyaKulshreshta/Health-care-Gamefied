// script.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("problem-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const problem = document.getElementById("problem").value;

    // You can send this data to a server for further processing
    // For example, using Fetch API or sending it to a backend endpoint

    // For now, let's just log the data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Problem Description:", problem);

    // Optionally, you can show a confirmation message or redirect the user
    alert("Problem report submitted successfully!");
    form.reset();
  });
});
