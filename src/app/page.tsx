"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="text-center">
        <h1 className="font-semibold text-7xl font-serif text-center mt-16">
          temerity
        </h1>
        <Button color="primary"> Next Button Test </Button>
      </main>
    </NextUIProvider>
  );
}
