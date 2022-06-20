<?php


if (empty($_POST["name"]) == false) {
  echo $_POST["name"];
} else {
  echo "Name not provided";
}

if (empty($_POST["username"]) == false) {
  echo $_POST["name"];
} else {
  echo "Username not provided";
}

if (empty($_POST["password"]) == false) {
  echo $_POST["password"];
} else {
  echo "Password not provided";
}

if (empty($_POST["address"]) == false) {
  echo $_POST["address"];
} else {
  echo "Address not provided";
}

if (empty($_POST["country"]) == false) {
  echo $_POST["country"];
} else {
  echo "Country not provided";
}

if (empty($_POST["zip"]) == false) {
  echo $_POST["zip"];
} else {
  echo "Zip not provided";
}

if (empty($_POST["email"]) == false) {
  echo $_POST["name"];
} else {
  echo "Email not provided";
}

if (empty($_POST["sex"]) == false) {
  echo $_POST["sex"];
} else {
  echo "Sex not provided";
}

if (empty($_POST["language"]) == true) {
  echo "Language not provided";
} else {
  for ($i = 0; $i < sizeof($_GET["language"]); $i++) {
    echo $_GET["language"][$i] . "<br>";
  }
}


if (empty($_POST["about"]) == false) {
  echo $_POST["about"];
} else {
  echo "About not provided";
}
