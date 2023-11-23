"use client";
import Trip from "@/components/Trip";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="pt-24">
      <h1 className="text-[2rem] font-bold px-7 mt-2">Your Trips</h1>
      <Trip></Trip>
      <Button></Button>
    </main>
  );
}
