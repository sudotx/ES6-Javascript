document.getElementById("button1").addEventListener("click", loadCustomer); //listens to clicks on button1 then calls the function

document.getElementById("button2").addEventListener("click", loadCustomers); //listens to clicks on button2 then calls the function

//load single customer
function loadCustomer() {
  const xhr = new XMLHttpRequest(); //new instance of xhr, native to javascript

  xhr.open("GET", "customer.json", true); //first calls GET a "customer.json" file

  xhr.onload = function () {
    if (this.status == 200) {
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText); //if call is successful, return the respective response text

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Country: ${customer.country}</li>
        <li>Email: ${customer.email}</li>
      </ul>
      `;
      document.getElementById("customer").innerHTML = output; //injects html into page -- method unsafe as malicious script parsed as HTML can be injected into the page
    }
  };

  xhr.send();
}

//load multiple customers
function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      // console.log(this.responseText);
      const customers = JSON.parse(this.responseText);

      let output = "";

      customers.forEach((customer) => {
        output += `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Country: ${customer.country}</li>
        <li>Email: ${customer.email}</li>
      </ul>
      `;
      });
      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
