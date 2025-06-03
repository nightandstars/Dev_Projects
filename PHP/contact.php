<?php include "header.php";
session_start();

$errors = [];
//Checks form when submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    //stores values entered by the user
    $_SESSION["form"]["last_name"] = $_POST["last_name"];
    $_SESSION["form"]["message"] = $_POST["message"];
    $_SESSION["form"]["email"] = $_POST["email"];
    $_SESSION["form"]["subject"] = $_POST["subject"];
    $_SESSION["form"]["first_name"] = $_POST["first_name"];
    $_SESSION["form"]["civility"] = $_POST["civility"];

    //Checks if message is at least 5 characters
    if (!isset($_POST["message"]) || strlen(trim($_POST["message"])) < 5) {
        $errors["message"] = "Your message must be at least 5 characters long";
    }
    //Checks if email is valid
    if (!isset($_POST["email"]) || !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $errors["email"] = "Please enter a valid email address";
    }
    // Checks if contact subject has been selected
    $subject = ["information", "suggestion"];
    if (!isset($_POST["subject"]) || !in_array($_POST["subject"], $subject)) {
        $errors["subject"] = "Please enter a valid subject";
    }
    //Checks if first and last name have been filled
    if (empty($_POST["last_name"])) {
        $errors["last_name"] = "Last name is mandatory";
    }
    if (empty($_POST["first_name"])) {
        $errors["first_name"] = "First name is mandatory";
    }
    //If no error, proceed
    if (empty($errors)) {
        $data = "=== NEW CONTACT MESSAGE ===\n";
        $data .= "Date: " . date("d-m-Y H:i:s") . "\n";
        $data .= "Civility: " . $_POST["civility"] . "\n";
        $data .= "First Name: " . $_POST["first_name"] . "\n";
        $data .= "Last Name: " . $_POST["last_name"] . "\n";
        $data .= "Email: " . $_POST["email"] . "\n";
        $data .= "Subject: " . $_POST["subject"] . "\n";
        $data .= "Message: " . $_POST["message"] . "\n";
        $data .= "=====================================\n\n";

        //creates the file or adds to it, add $data, at the end of the doc (file append)
        file_put_contents("form_answers.txt", $data, FILE_APPEND | LOCK_EX);

        $success = "Your message was sent!";
        echo $success;
        unset($_SESSION["form"]);
    }
}
?>
    <h1 class="ms-5 p-2">Contact Us!</h1>
    <form class="row g-4 p-4 mx-4 w-50" method="POST" action="index.php?page=contact">
        <div class="col-md-2">
            <label for="civility" class="form-label">Civility</label>
            <select id="civility" class="form-select" name="civility">
                <option value="choose" selected>Choose...</option>
                <option value="mr" <?php if (isset($_SESSION["form"]["civility"]) && $_SESSION["form"]["civility"] == "mr") echo "selected"; ?>>Mr.</option>
                <option value="mrs" <?php if (isset($_SESSION["form"]["civility"]) && $_SESSION["form"]["civility"] == "mrs") echo "selected"; ?>>Mrs.</option>
            </select>
        </div>
        <div class="col-md-3">
            <label for="last_name" class="form-label">Last Name</label>
            <input type="text" class="form-control" name="last_name" id="last_name" value="<?php if (isset($_SESSION["form"]["last_name"])) echo htmlspecialchars($_SESSION["form"]["last_name"]); ?>">
            <?php
            if($errors["last_name"]){
                echo $errors["last_name"];
            }
            ?>
        </div>
        <div class="col-md-3">
            <label for="first_name" class="form-label">First Name</label>
            <input type="text" class="form-control" name="first_name" id="first_name" value="<?php if (isset($_SESSION["form"]["first_name"])) echo htmlspecialchars($_SESSION["form"]["first_name"]); ?>">
            <?php
            if($errors["first_name"]){
                echo $errors["first_name"];
            }
            ?>
        </div>
        <div class="col-md-8">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" name="email" id="email" value="<?php if (isset($_SESSION["form"]["email"])) echo htmlspecialchars($_SESSION["form"]["email"]); ?>">
            <?php
            if($errors["email"]){
                echo $errors["email"];
            }
            ?>
        </div>
        <div class="col-12">
            <label for="subject" class="form-label">Subject</label>
            <?php
            if(isset($errors["subject"])){
                echo $errors["subject"];
            }
            ?><br>
            <label for="information" class="form-label">Information</label>
            <input class="form-check-input" type="radio" name="subject" id="information" value="information" <?php if (isset($_SESSION["form"]["subject"]) && $_SESSION["form"]["subject"] == "information") echo "checked"; ?>><br>
            <label for="suggestion" class="form-label">Suggestion</label>
            <input class="form-check-input" type="radio" name="subject" id="suggestion" value="suggestion" <?php if (isset($_SESSION["form"]["subject"]) && $_SESSION["form"]["subject"] == "suggestion") echo "checked"; ?>>
        </div>
        <div class="col-md-4">
            <label for="message" class="form-label">Message</label>
            <?php
            if($errors["message"]){
                echo $errors["message"];
            }
            ?>
            <textarea class="form-control" id="message" name="message"><?php if (isset($_SESSION["form"]["message"])) echo htmlspecialchars($_SESSION["form"]["message"]); ?></textarea>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>



<?php include "footer.php" ?>