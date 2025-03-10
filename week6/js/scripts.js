document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault()

    // Get input values
    const username = document.getElementById("username").value.trim()
    const password = document.getElementById("password").value

    // Reset error messages
    document.getElementById("usernameError").style.display = "none"
    document.getElementById("passwordError").style.display = "none"

    // Simple validation
    let isValid = true

    if (username === "") {
      document.getElementById("usernameError").style.display = "block"
      isValid = false
    }

    if (password.length < 6) {
      document.getElementById("passwordError").style.display = "block"
      isValid = false
    }

    if (isValid) {
      alert("Login successful! (This is just a demo)")

    }
  })
