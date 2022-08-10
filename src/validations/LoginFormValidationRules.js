function validateName(name) {
  let errors = [];

  if (!name) errors.push("Name can not be empty");

  if (name?.length < 3) {
    errors.push("Name must be 3 characters long at least");
  }
  return errors.length ? errors : null;
}

function validateEmail(email) {
  let errors = [];

  if (!email) errors.push("Email can not be empty");

  if (!email?.includes("@")) errors.push('Email must include "@"');

  if (typeof email === "string" && !email.match(/^[^@]+@[^@]+\.[^@]+$/i)) {
    errors.push("Invalid email address");
  }

  return errors.length ? errors : null;
}

function validatePass(pass) {
  let errors = [];

  if (!pass) errors.push("Password can not be empty");

  if (pass?.length < 6)
    errors.push("Password must be 6 characters long at least");

  return errors.length ? errors : null;
}

export { validateName, validateEmail, validatePass };
