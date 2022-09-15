import Counter from "../islands/Counter.tsx";
import Header from "../islands/Header.tsx";
import Countdown from "../islands/Countdown.tsx";

import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello World");
    return resp;
  },
};

export default function Home(props: PageProps) {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <Header b2b_domain={"fnlawfirm fags"} />
      <p>
      The big event is happening <Countdown target={date.toISOString()} />.
    </p>
      <div>You are on the page {props.url.href}.</div>
    </div>
  );
}
