const Login = () => {
  const handleLogin = () => {
    localStorage.setItem("authToken", "123"); // Simulate login
    window.location.href = "/dashboard"; // Redirect to protected page
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
