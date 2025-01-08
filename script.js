// 1. Scenario: Online Library Membership
// ---------------------------------------
// Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:

// Basic Membership: Access to only free books.

// Standard Membership: Access to free books and discounted paid books.

// Premium Membership: Access to all books, including exclusive content.

// Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid.
 var membership = "standard";
 if(membership == "basic"){
    console.log("you have access to only free books")
 }
else if( membership == "standard"){
    console.log("you have access to fress books and discounted paid books")
}
else if ( membership == "premium" ){
    console.log( "you have access to all books ,including exclusive content")
}
else {
    console.log("invalid membership")
}
console.log(`------------------------------------------------------------------------------------`)

// 2. Scenario: E-Commerce Discount Application
// ---------------------------------------------
// Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:

// Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.

// VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.

// Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.

var membershipstatus = "VIP";
var purchase = 700;
if (membershipstatus === "regular") {
    if (purchase < 100 && purchase>0) {
        console.log("no discount")
    }
    else if (purchase >= 100 && purchase <= 499) {
        console.log("5% discount applied")
    }
    else if (purchase >500){
        console.log("10% discount applied")
    }
    else {
        console.log( "negavtive value invalid")
    }
}
else if( membershipstatus === "VIP"){
    if (purchase < 100 && purchase >0) {
        console.log("10% discount")
    }
    else if (purchase >= 100 && purchase <= 499) {
        console.log("15% discount applied")
    }
    else if (purchase >500){
        console.log("20% discount applied")
    }
    else {
        console.log("negative value invalid")
    }
}
else{
     console.log(" unrecognised membership returned")
}
console.log(`------------------------------------------------------------------------------------`)

// 3. Scenario: Academic Scholarship Eligibility
// ----------------------------------------------
// Context: A university offers scholarships to students based on their GPA and extracurricular involvement:

// Merit-Based Scholarship: Requires a GPA of 3.5 or higher.

// Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.

// Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.

// Question: Given variables that store a student's GPA, number of extracurricular activities, and community service hours, use conditional statements to determine which scholarships the student is eligible for. Consider scenarios where a student qualifies for multiple scholarships or none.

var gpa = 3.6; 
var numExtracurriculars = 3; 
var communityServiceHours = 120; 


var eligibleMeritBased = gpa >= 3.5;
var eligibleLeadership = numExtracurriculars >= 2 && gpa >= 3.0;
var eligibleCommunityService = communityServiceHours >= 100 && gpa >= 2.5;


if (eligibleMeritBased) {
    console.log("Eligible for Merit-Based Scholarship.");
}
 else if (eligibleLeadership) {
    console.log("Eligible for Leadership Scholarship.");
}
 else if (eligibleCommunityService) {
    console.log("Eligible for Community Service Scholarship.");
}
 else (!eligibleMeritBased && !eligibleLeadership && !eligibleCommunityService);{
    console.log("Not eligible for any scholarships.");
 }
console.log(`------------------------------------------------------------------------------------`)

// 4. Scenario: Movie Ticket Pricing
// ----------------------------------
// Context: A movie theater charges different prices based on the day of the week and the customer's age:

// Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.
// Weekends: Standard price of $15. Seniors and children receive a 30% discount.

// Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.
var dayOfWeek = "Saturday";  
var customerAge = 70; 

function calculateTicketPrice(day, age) {
    var ticketPrice;
}

    // if (day !== "Monday" && day !== "Tuesday" && day !== "Wednesday" && day !== "Thursday" && day !== "Friday" && day !== "Saturday" && day !== "Sunday") {
    //     console.log("Invalid day of the week.");
    //     return;
    // }
    // if (age < 0 || isNaN(age)); {
    //     console.log("Invalid age.");
    //     return;
    // }

   
   
    //    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
    //      ticketPrice = 12;

    //     if (age >= 65 || age < 12) {
    //         ticketPrice *= 0.5;
    //     }
    // } else if (day === "Saturday" || day === "Sunday") {
       
    //     ticketPrice = 15;

    //     if (age >= 65 || age < 12) {
    //         ticketPrice *= 0.7;
    //     }
    // }

   
    // console.log(`The ticket price for a ${age}-year-old on ${day} is $${ticketPrice.toFixed(2)}.`);



calculateTicketPrice(dayOfWeek, customerAge);
console.log(`------------------------------------------------------------------------------------`)

// 5. Scenario: Event Registration Validation
// -------------------------------------------
// Context: An event registration system needs to validate user inputs before confirming their registration:

// The user must be 18 years or older to register.

// The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.

// The user must provide a valid email address.

// Question: You have variables for the user’s age, the number of participants already registered, and their email address. Use conditional statements to validate whether the user can register for the event. Think about how to handle cases where some or all conditions are not met.

var userAge = 20;  
var participantsRegistered = 95;  
var userEmail = "user@example.com";  


function validateRegistration(age, participants, email) {
   
    if (age < 18) {
        console.log("You must be 18 years or older to register.");
    } 
   
    else if (participants >= 100) {
        console.log("Sorry, the event is full. No more registrations are accepted.");
    }
   
    else if (!isValidEmail(email)) {
        console.log("Invalid email address. Please provide a valid email.");
    } 
   
    else {
        console.log("Registration successful! You are now registered for the event.");
    }
}


function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}


validateRegistration(userAge, participantsRegistered, userEmail);
