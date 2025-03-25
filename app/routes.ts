import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layouts/auth-layout.tsx", [
    route("sign-in", "routes/sign-in.tsx"),
    route("sign-up", "routes/sign-up.tsx"),
  ]),
] satisfies RouteConfig;
