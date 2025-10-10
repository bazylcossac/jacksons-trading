"use client";

import useFavouriteCryptoBear from "@/store/Crypto/FavouriteCrypto/favouriteCrypto.bear";
import {
  CandlestickSeries,
  createChart,
  CrosshairMode,
  IChartApi,
  ISeriesApi,
} from "lightweight-charts";
import { useEffect, useRef } from "react";

export default function CryptoChart() {
  const favouriteCrypto = useFavouriteCryptoBear((s) => s.tickerCrypto);

  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  // 🟢 Tworzymy wykres (raz)
  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      width: containerRef.current.clientWidth,
      height: 350,
      layout: {
        background: { color: "#3C3F46" }, // 🖤 ciemny motyw
        textColor: "#ddd",
      },
      grid: {
        vertLines: { color: "#1e1e1e" },
        horzLines: { color: "#1e1e1e" },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: true,
        borderColor: "#303030",
      },
      rightPriceScale: {
        borderColor: "#303030",
      },
    });
    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    chart.timeScale().scrollToRealTime();

    chartRef.current = chart;
    seriesRef.current = candlestickSeries;

    const handleResize = () =>
      chart.applyOptions({
        width: containerRef.current?.clientWidth ?? 0,
      });

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  // 🟣 Aktualizacja świec w czasie rzeczywistym
  useEffect(() => {
    if (!favouriteCrypto || !seriesRef.current) return;

    seriesRef.current.update({ ...favouriteCrypto });
    chartRef.current?.timeScale().scrollToRealTime();
  }, [favouriteCrypto]);

  return (
    <div
      style={{
        width: "100%",
        height: 350,
        position: "relative",
        backgroundColor: "#0f0f0f",
        borderRadius: "6px",
        overflow: "hidden",
        boxShadow: "inset 0 0 10px #000",
      }}
    >
      {!favouriteCrypto && (
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#999",
          }}
        >
          Loading chart...
        </p>
      )}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
