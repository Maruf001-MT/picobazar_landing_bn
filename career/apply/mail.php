<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "maruf@prozukty.com"; // Replace with your email address
    $subject = "Job Application Submission - Web Developer at PicoBazar";
    
    // Collect form data
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $phone = $_POST["Phone"];
    $age = $_POST["Age"];
    $address = $_POST["Address"];
    $experience = $_POST["Experiences"];
    $skills = $_POST["Skills"];
    $linkedin = $_POST["Linkedin"];
    $github = $_POST["Github"];


    // Check if the 'agree_terms' checkbox is selected
    if (isset($_POST['Agree']) && $_POST['Agree'] == 'on') {

        // Build the email message
// Build the email message
$message = "
Job Application Details:
---------------------------------
Full Name: $name
Email: $email
Phone Number: $phone
Age: $age
Address: $address

Professional Experience:
$experience

Skills:
$skills

Social Profiles:
   - LinkedIn: $linkedin
   - Github: $github
---------------------------------
";



        // Set additional email headers
        $headers = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            header("Location: thank.html");
            exit();
        } else {
            echo "Sorry, there was an error sending your application. Please try again later.";
        }
    } else {
        echo "Please agree to the Terms and Conditions.";
    }
} else {
    // If the form was not submitted via POST, redirect or display an error message.
    echo "Access denied.";
}
?>