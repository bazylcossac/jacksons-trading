import { z } from "zod";

export const TickerSchema = z.object({
  e: z.literal("24hrTicker"), // event type
  E: z.number(), // event time
  s: z.string(), // symbol, np. "BTCUSDT"
  p: z.string(), // price change
  P: z.string(), // price change percent
  w: z.string(), // weighted avg price
  x: z.string(), // prev close price
  c: z.string(), // last price
  Q: z.string(), // last qty
  b: z.string(), // best bid
  B: z.string(), // bid qty
  a: z.string(), // best ask
  A: z.string(), // ask qty
  o: z.string(), // open price
  h: z.string(), // high price
  l: z.string(), // low price
  v: z.string(), // volume
  q: z.string(), // quote volume
  O: z.number(), // open time
  C: z.number(), // close time
  F: z.number(), // first trade ID
  L: z.number(), // last trade ID
  n: z.number(), // trades count
});

export type TickerSchema = z.infer<typeof TickerSchema>;

export const TickerWebSocketSchema = z.object({
  stream: z.string(),
  data: TickerSchema,
});

export type TickerWebSocketType = z.infer<typeof TickerWebSocketSchema>;
