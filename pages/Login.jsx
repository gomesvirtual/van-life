import { Form, redirect, useActionData, useLoaderData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  if (JSON.parse(localStorage.getItem("loggedin"))) {
    throw redirect("/host");
  }
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await loginUser({ email, password });  
    localStorage.setItem("loggedin", true);  
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host";
    return redirect(pathname);
  } catch (err) {
    return err.message
  }  
}

function Login() {  
  const message = useLoaderData(); 
  const errorMessage = useActionData();
  const { state } = useNavigation();

  return ( 
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && !errorMessage && <h3 className="red">{message}</h3>}
      {errorMessage && <h3 className="red">{errorMessage}</h3>}
      <Form method="post" className="login-form" replace>
        <input
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
        <button disabled={state === "submitting"}>{state === "submitting" ? "Logging in..." : "Log in"}</button>
      </Form>
    </div>
   );
}

export default Login;