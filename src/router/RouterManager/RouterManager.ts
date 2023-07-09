import type { ReverseParams } from "named-urls";
import { reverse } from "named-urls";
import { router } from "../index";
import { RouteName } from "./RouteName";
import { RoutePath } from "./RoutePath";

export interface RouteParams {
  path?: string;
  params?: ReverseParams;
  extra?: string;
  state?: object;
  replace?: boolean;
}

export class BaseRouterManager {
  constructor(private routes: Record<RouteName, string>) {}

  private getPath(path: RouteName, { params, extra = "" }: RouteParams) {
    const pattern = this.routes[path] + extra;
    return reverse(pattern, params);
  }

  to(path: RouteName, { state, replace, ...params }: RouteParams) {
    const pathname = this.getPath(path, params);
    return router.navigate({ pathname }, { state, replace });
  }

  getUrl(namedUrl: RouteName, params?: ReverseParams, extra?: string) {
    return reverse(`${this.routes[namedUrl]}${extra || ""}`, params);
  }

  goBack() {
    return router.navigate(-1);
  }
}

export const RouterManager = new BaseRouterManager(RoutePath);
