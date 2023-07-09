const submitBTN = document.querySelector("#submit-btn");

submitBTN.addEventListener("click", async (event) => {
  event.preventDefault();
  // console.log("clicked");

  // after btton click value show garnu paryo as js follows top-to-bottom-approach
  const uname = document.getElementById("userName").value;
  const pswd = document.getElementById("password").value;
  console.log(`username:${uname} password:${pswd}`);

  // validation
  if (uname === "") {
    document.querySelector("#req1").innerHTML = "* required";
  }
  if (pswd === "") {
    document.querySelector("#req2").innerHTML = "* required";
  }

  // fetch api hit with method post
  // Login user and get token
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      // key:value pair
      username: uname,
      password: pswd,
    }),
  });
  const data = await response.json();
  console.log(data);
});
