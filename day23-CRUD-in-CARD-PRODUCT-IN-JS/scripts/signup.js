const Register_URL = "http://localhost:8085/users/register";
const signUp = async (e) => {
  e.preventDefault();
  // console.log("clicked");

  let fullname = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = {
    fullname,
    email,
    password,
  };

  // validation in required field
  if (fullname === "")
    document.getElementById("err-emptyname").innerHTML = "* required";

  if (email === "")
    document.getElementById("err-emptyemail").innerHTML = "* required";

  if (password === "")
    document.getElementById("err-emptypassword").innerHTML = "* required";

  // fetch api hit
  const response = await fetch(Register_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // response
  const res = await response.json();
  console.log(res);

  if (res.status) {
    document.getElementById("error-message").innerText = "";
    ("User is already registered");
    window.location.href = "index.html"; //in response staus true case go to login page as here indx.html is the loginpage
  } else {
    document.getElementById("error-message").innerText = res.message;
  }
};
