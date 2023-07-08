import type { SetupWorkerApi } from "msw";
import { rest } from "msw";
import format from "format-util";
import { ApiUrls } from "../services";
import { Response500Handle, Response200Handle } from "./handlers";

export class ApiMocksDirector {
  constructor(
    private readonly worker: SetupWorkerApi,
    private readonly baseUrl: string
  ) {}

  public getPodcast(status: "ok" | "failed"): void {
    const url = format(
      `${this.baseUrl}${ApiUrls.getPodcasts}`,
      ":limit",
      ":genre"
    );
    const handler = status === "ok" ? Response200Handle : Response500Handle;
    this.worker.use(rest.get(url, handler));
  }
}
