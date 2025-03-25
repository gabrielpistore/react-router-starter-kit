import { Link } from "react-router";
import AuthCard from "~/components/auth/auth-card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import type { Route } from "./+types/sign-up";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Sign Up | React Router Starter Kit" }];
}

export default function SignUp() {
  return (
    <AuthCard title="React Router Starter Kit" description="Create an account">
      <form>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="gabrielpistore@example.com"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="Gabriel" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Pistore" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/sign-in" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </form>
    </AuthCard>
  );
}
