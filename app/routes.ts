import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layouts/auth-layout.tsx", [
    route("auth/sign-in", "routes/auth/sign-in.tsx"),
    route("auth/sign-up", "routes/auth/sign-up.tsx"),
  ]),
] satisfies RouteConfig;
