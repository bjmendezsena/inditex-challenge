import type { ReverseParams } from "named-urls";
import { reverse } from "named-urls";
import { router } from "../index";
import { RouteKey, RouteName,  } from "./RouteName";
import { RoutePath } from "./RoutePath";

export interface RouteParams {
  name?: RouteKey;
  path?: string;
  params?: ReverseParams;
  extra?: string;
  state?: object;
  replace?: boolean;
}

export class BaseRouterManager {
  constructor(private routes: Record<RouteName, string>) {}

  private getPath({ name, params, extra = "", path }: RouteParams) {
    if (path) return path;
    if (!name) throw new Error("name or path is required");
    const pattern = this.routes[name] + extra;
    console.log("pattern", pattern);
    return reverse(pattern, params);
  }

  to({ state, replace, ...params }: RouteParams) {
    const pathname = this.getPath(params);
    console.log("pathname", pathname);
    return router.navigate({ pathname }, { state, replace });
  }

  getUrl(params: RouteParams) {
    const path = this.getPath(params);
    return reverse(path);
  }

  goBack() {
    return router.navigate(-1);
  }
}

export const RouterManager = new BaseRouterManager(RoutePath);
