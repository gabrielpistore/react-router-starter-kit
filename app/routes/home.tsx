import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home | React Router Starter Kit" }];
}

export default function Home() {
  return (
    <div>
      <h1>React Router Starter Kit</h1>
    </div>
  );
}
