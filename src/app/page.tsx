"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="text-center">
        <Navbar />
        <h1 className="mt-16 font-serif font-semibold text-center text-7xl">
          temerity
        </h1>
        <Button color="primary"> Next Button Test </Button>
      </main>
    </NextUIProvider>
  );
}
