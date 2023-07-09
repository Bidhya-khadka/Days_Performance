const loginURL = "http://localhost:8085/users/login";

const login = async (e) => {
  e.preventDefault();
  // console.log("clicked");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const data = {
    email,
    password,
  };
  // validation empty
  if (email === "")
    document.getElementById("err-email").innerHTML = "* required";

  if (password === "")
    document.getElementById("err-password").innerHTML = "* required";
  // fetch api hit to the server
  const response = await fetch(loginURL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // response
  const resp = await response.json();
  console.log(resp);

  if (resp.status) {
    window.location.href = "products.html";
  } else {
    document.getElementById("toast-message").innerText = resp.message;
  }
};
