//Activity 1: Basic Regular Expressions

//Task 1: Write a regular expressions to match a simple pattern (e.g., match all occurrences of the word "Javascript" in a string).
//Log the matches.

// Sample text
let text = "Javascript is a popular programming language. Many developers love Javascript.";

// Regular expression to match "Javascript" (case-insensitive)
let regex = /Javascript/gi;

// Find all matches
let matches = text.match(regex);

// Log the matches
console.log(matches);

//Task 2: Write a regular expression to match all digits in a string.
//Log the matches.

// Sample text containing digits
let txt = "The house number is 1234, and the zip code is 56789.";

// Regular expression to match all digits
let reg = /\d+/g;

// Find all matches
let match = txt.match(reg);

// Log the matches
console.log(match);

//Activity 1 end

//Activity 2: Character Classes and Quantifiers

//Task 3: Write a regular expressions to match all words in a string that start with a captial letter.
//Log the matches.

// Sample text containing words with capital letters
let textval = "Alice went to Wonderland and met the White Rabbit. The Queen of Hearts was angry.";

// Regular expression to match words starting with a capital letter
let capitalregex = /\b[A-Z][a-z]*\b/g;

// Find all matches
let matchtext = textval.match(capitalregex);

// Log the matches
console.log(matchtext);

//Task 4: Write a regular expressions to match all sequences of one or more digits in a string.
//Log the matches.

// Sample text containing sequences of digits
let sampletext = "My phone number is 12345, and my zip code is 67890. I also have 2 cats.";

// Regular expression to match all sequences of one or more digits
let digitregex = /\d+/g;

// Find all matches
let matchcases = sampletext.match(digitregex);

// Log the matches
console.log(matchcases);

//Activity 2 end

//Activity 3: Grouping and Capturing

//Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123)456-7890).
//Log the captures.


// Sample phone number
let phoneNumber = "(123)456-7890";

// Regular expression to capture area code, central office code, and line number
let regexphonenum = /\((\d{3})\)(\d{3})-(\d{4})/;

// Find matches
let matcheval = phoneNumber.match(regexphonenum);

// Log the captures
if (matches) {
    console.log("Area Code: " + matcheval[1]);
    console.log("Central Office Code: " + matcheval[2]);
    console.log("Line Number: " + matcheval[3]);
} else {
    console.log("No matches found.");
}

//Task 6: Write a regular expression to capture the username and domain from an email address.
//Log the captures.

// Sample email address
let email = "username@example.com";

// Regular expression to capture the username and domain
let regexfordomainandemail = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

// Find matches
let matchesvalues = email.match(regexfordomainandemail);

// Log the captures
if (matches) {
    console.log("Username: " + matchesvalues[1]);
    console.log("Domain: " + matchesvalues[2]);
} else {
    console.log("No matches found.");
}

//Activity 3 end

//Activity 4: Assertions and Boundaries

//Task 7: Write a regular expressions to match a word only if it is at the beginning of a string.
//Log the matches.

// Sample text
let expression = "Hello world, this is an example. Hello again!";

// Regular expression to match a word at the beginning of the string
let wordregex = /^\w+/;

// Find matches
let matchesword = expression.match(wordregex);

// Log the matches
if (matchesword) {
    console.log("Match at the beginning of the string: " + matchesword[0]);
} else {
    console.log("No match found at the beginning of the string.");
}

//Task 8: Write a regular expressions to match a word only if it at the end of a string.
//Log the matches.

// Sample text
let sampletxt = "This is an example sentence with a word at the end.";

// Regular expression to match a word at the end of the string
let regextomatch = /\b\w+\b$/;

// Find matches
let matchdata = sampletxt.match(regextomatch);

// Log the matches
if (matchdata) {
    console.log("Match at the end of the string: " + matchdata[0]);
} else {
    console.log("No match found at the end of the string.");
}

//Activity 4 end

//Activity 5: Practical Applications

//Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character).
//Log whether the password is valid.

// Sample password
let password = "Password123!";

// Regular expression to validate the password
let Passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

// Validate the password
let isValid = regex.test(Passregex);

// Log whether the password is valid
if (isValid) {
    console.log("The password is valid.");
} else {
    console.log("The password is invalid.");
}

//Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

// Sample URL
let url = "https://www.example.com/path?name=value#anchor";

// Regular expression to validate the URL
let urlregex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;

// Validate the URL
let isValidurl = urlregex.test(url);

// Log whether the URL is valid
if (isValidurl) {
    console.log("The URL is valid.");
} else {
    console.log("The URL is invalid.");
}

//Activity 5 end

