import { Form, Link } from "react-router";
import AuthCard from "~/components/auth/auth-card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import type { Route } from "./+types/sign-in";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Sign In | React Router Starter Kit" }];
}

export async function loader({ request }: Route.LoaderArgs) {}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch("http://127.0.0.1:8000/api/accounts/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = (await response).json().then((data) => {
      console.log(data);
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function SignIn() {
  return (
    <AuthCard
      title="React Router Starter Kit"
      description="Sign in to your account"
    >
      <Form method="POST">
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="gabrielpistore@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/auth/sign-up" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </Form>
    </AuthCard>
  );
}
