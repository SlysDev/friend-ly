import FormTextField from '../components/FormTextField';
import PrimaryButton from '../components/PrimaryButton';

function LoginView() {
    function handleLogin() {
        // Call the login function from the LoginForm component
    }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
          <FormTextField label="email" />
          <FormTextField label="password" />
          <PrimaryButton text="Login" onClick={handleLogin} />
    </div>
  );
}