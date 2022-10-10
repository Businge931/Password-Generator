const chars =
  "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890`!@#$%^&*()_+-={};':\\|,.<>/?~";

const regexForLowercase = /[a-z]/g;
const regexForUppercase = /[A-Z]/g;
const regexForNumbers = /[0-9]/g;
const regexForSymbols = /[^a-zA-Z0-9 ]/g;

// const withoutUppercaseLetters = chars.match(regexForLowercase);
// const withoutLowercaseLetters = chars.match(regexForUppercase);
const withNumbers = chars.match(regexForNumbers);
const withSymbols = chars.match(regexForSymbols);
const withUppercaseLetters = chars.match(regexForUppercase);
const withLowercaseLetters = chars.match(regexForLowercase);

const randomPassGenerator = (length, chars) => {
  const randomArray = Array.from(
    { length: length },
    () => chars[Math.floor(Math.random() * chars.length)]
  );
  const randomPassword = randomArray.join("");
  return randomPassword;
};

export const generateUnionSet = (values, passwordLength) => {
  let newCharSet = "";
  const mapTOflags = {
    hasUpperCase: withUppercaseLetters.join(""),
    hasLowerCase: withLowercaseLetters.join(""),
    hasNumbers: withNumbers.join(""),
    hasSymbols: withSymbols.join(""),
  };

  Object.keys(values).forEach((key) => {
    // console.log(values[key]);
    if (values[key] && mapTOflags[key]) {
      newCharSet += mapTOflags[key];
      return newCharSet;
    } else {
      return newCharSet;
    }
  });
  console.log("char set", newCharSet);
  return randomPassGenerator(passwordLength, newCharSet);
};
