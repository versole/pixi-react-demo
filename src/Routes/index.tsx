import React, {lazy} from "react";
const routes = [
  {
    path: "/home",
    component: lazy(
      () =>
        import(/* webpackChunkName: "home" */ "@/Pages/Home/index.tsx") as any,
    ),
    exact: true,
  },
];

export default routes;
