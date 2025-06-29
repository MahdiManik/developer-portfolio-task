"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

const previousClients = [
  { name: "CSS Winner", variant: "light" },
  { name: "Waywards", variant: "dark" },
  { name: "ThoughtWorks", variant: "light" },
  { name: "Facebook", variant: "light" },
  { name: "Autodesk", variant: "light" },
  { name: "Codepen.io", variant: "light" },
];

export default function AboutSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-lime-300 via-yellow-200 to-green-300 dark:from-lime-800 dark:via-yellow-800 dark:to-green-700 px-6 lg:px-12 py-16 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-400 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full opacity-25 animate-bounce"></div>
      </div>

      {/* About Button */}
      <div className="relative z-10 flex justify-end mb-12">
        <Button
          variant="outline"
          className="bg-white/80 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-white hover:text-gray-900 rounded-full px-6 py-2"
        >
          About
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
            I&apos;ve been{" "}
            <span className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 inline-block">
              Developing
            </span>
            <br />
            Websites since{" "}
            <span className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 inline-block">
              2013
            </span>
          </h2>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-yellow-400 border-2 border-gray-900 p-4 rounded-lg shadow-lg">
              <p className="text-gray-900 font-medium text-sm lg:text-base">
                We start every new client interaction with an in-depth discovery
                call where we get to know each other and recommend the best
                course of action.
              </p>
            </div>
          </div>
        </div>

        {/* Previously Worked On Section */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
            PREVIOUSLY WORKED ON
          </h3>

          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            {previousClients.map((client, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`
                  px-6 py-3 text-sm lg:text-base font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-pointer
                  ${
                    client.variant === "dark"
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
                  }
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {client.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
