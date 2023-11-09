for (let i = 0; i < passwords.length; i++) {
  const password = passwords[i];
  console.log(`Checking password ${password}`);

  let specialCharCount = 0;

  // För varje tecken i specialChars, kolla om password innehåller det tecknet
  for (let i = 0; i < specialChars.length; i++) {
    const specialChar = specialChars[i];
    // console.log(`At index ${i}, does password contain '${specialChar}'?`, password.includes(specialChar));

    if (password.includes(specialChar)) {
      specialCharCount++;
      if (specialCharCount === 2) {
        // if we found 2 special chars, break free from the loop
        break; // i want to
      }
    }
  }

  // is password long enough?
  if (password.length >= 16) {
    console.log("🔐 That's a long password!");
  } else if (password.length >= 12 && password.includes("-")) {
    console.log("🔐 That's also a pretty good password!");
  } else if (password.length >= 8 && specialCharCount >= 1) {
    console.log("🔐 That's also a very secure password!");
  } else if (password.length >= 6 && specialCharCount >= 2) {
    console.log("🔐 That's a VERY secure password home-boi! 🛟");
  } else {
    console.log("🚨 Insecure password!");
  }
}
