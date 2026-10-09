import Title from "@/components/Title";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Title>Welcome to About Page</Title>
      <nav className="space-x-4 py-3">
        <Link href="/about/contact">Contact</Link>
        <Link href="/about/teams">Teams</Link>
      </nav>
    </div>
  );
};

export default About;
