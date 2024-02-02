function makeid(length) {
  // write your code here
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result='';
	for (let i = 0; i < length; i++) {
    // Generate a random ASCII code for alphanumeric characters (48-57: 0-9, 65-90: A-Z, 97-122: a-z)
    // const randomCharCode = Math.floor(Math.random() * (57 - 48 + 1 + 90 - 65 + 122 - 97 + 1)) + 48;
		let index=Math.floor(Math.random()*characters.length);
    // Convert ASCII code to character and append to result
    // result += String.fromCharCode(randomCharCode);
		result+=characters.charAt(index);
  }
	return result;
}
// makeid(1);

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
