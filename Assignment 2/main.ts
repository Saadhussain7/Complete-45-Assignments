let personName: string = "Saad Hussain";

// Printing a person's name in lowercase
console.log("lowerCase:", personName.toLowerCase());

// Printing a person's name in uppercase
console.log("uppercase:", personName.toUpperCase());

// Function to convert a string to title case
function toTitleCase(str: string): string {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// Printing a person's name in title case
console.log("Titlecase:", toTitleCase(personName));
