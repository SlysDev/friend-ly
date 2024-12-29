import FormTextField from '../components/FormTextField';

function LoginView() {
    function handleLogin() {
        // Call the login function from the LoginForm component
    }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
          <FormTextField props={label="email"} />
    </div>
  );
}