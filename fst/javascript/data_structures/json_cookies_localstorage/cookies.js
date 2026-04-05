// Set a cookie
function setCookie() {
  const name = document.getElementById("username").value;

  // expires in 7 days
  const days = 7;
  const date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000));
  const expires = "expires=" + date.toUTCString();

  document.cookie = "username=" + name + ";" + expires + ";path=/";
}

// Get a cookie
function getCookie() {
  const name = "username=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');

  for(let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(name) === 0) {
      document.getElementById("output").innerText = c.substring(name.length);
      return;
    }
  }

  document.getElementById("output").innerText = "No cookie found";
}