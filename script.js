console.log("JS NYALA");
window.onload = function() {

const form = document.getElementById("laundryForm");

console.log(form);

}
const tableBody = document.getElementById("laundryTableBody");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const name =
    document.getElementById("customerName").value;

  const weight =
    document.getElementById("weight").value;

  const service =
    document.getElementById("service").value;

  const row = `
    <tr>
      <td>${name}</td>
      <td>${weight} kg</td>
      <td>${service}</td>
      <td>
        <span class="status process">
          Diproses
        </span>
      </td>
    </tr>
  `;

  tableBody.innerHTML += row;

  form.reset();

});