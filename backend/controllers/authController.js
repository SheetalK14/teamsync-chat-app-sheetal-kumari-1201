// controllers/authController.js

// 👉 User Login
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Simple demo logic — replace with DB logic later
  if (email === "admin@example.com" && password === "123456") {
    res.json({ message: "Login successful!", user: { email } });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

// 👉 User Register
export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // For now, no DB — just return a success response
  res.status(201).json({
    message: "User registered successfully!",
    user: { name, email },
  });
};
