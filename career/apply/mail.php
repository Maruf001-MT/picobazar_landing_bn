<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "maruf@prozukty.com"; // Replace with your email address
    $subject = "Job Application Submission - Web Developer at PicoBazar";
    
    // Collect and sanitize form data
    $name = htmlspecialchars($_POST["Name"]);
    $email = htmlspecialchars($_POST["Email"]);
    $phone = htmlspecialchars($_POST["Phone"]);
    $age = htmlspecialchars($_POST["Age"]);
    $address = htmlspecialchars($_POST["Address"]);
    $experience = htmlspecialchars($_POST["Experiences"]);
    $skills = htmlspecialchars($_POST["Skills"]);
    $linkedin = htmlspecialchars($_POST["Linkedin"]);
    $github = htmlspecialchars($_POST["Github"]);

    // Validate form data
    if (empty($name) || empty($email) || empty($phone) || empty($age) || empty($address) || empty($experience) || empty($skills)) {
        echo "Please fill out all required fields.";
        exit();
    }

    // Check if the 'agree_terms' checkbox is selected
    if (isset($_POST['Agree']) && $_POST['Agree'] == 'on') {
        // Build the email message
        $message = "
        Job Application Details:
        \r\n ---------------------------------
        \r\n Full Name: $name
        \r\n Email: $email
        \r\n Phone Number: $phone
        \r\n Age: $age
        \r\n Address: $address
        \r\n \r\n Professional Experience: $experience
        \r\n Skills: $skills
        \r\n \r\n Social Profiles:
        \r\n - LinkedIn: $linkedin
        \r\n - Github: $github
        \r\n ---------------------------------";

        // Set additional email headers
        $headers = "From: $email" . "\r\n" .
            "Reply-To: $email" . "\r\n" .
            "X-Mailer: PHP/" . phpversion();

        // Send the email with error handling
        if (mail($to, $subject, $message, $headers)) {
            header("Location: step2.html");
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
