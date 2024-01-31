import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));
  const { pathname } = new URL(request.url);  

  if (!isLoggedIn) {
    throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);
  }
}