"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const skills = [
  {
    id: 1,
    title: "HTML & CSS",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis",
    icon: "⚛️",
  },
  {
    id: 2,
    title: "JavaScript",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis",
    icon: "⚛️",
  },
  {
    id: 3,
    title: "Webflow",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis",
    icon: "⚛️",
  },
  {
    id: 4,
    title: "React",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis",
    icon: "⚛️",
  },
  {
    id: 5,
    title: "Node.js",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis",
    icon: "⚛️",
  },
  {
    id: 6,
    title: "TypeScript",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis",
    icon: "⚛️",
  },
];

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const nextSlide = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setCurrentIndex((prev) => (prev + 3 >= skills.length ? 0 : prev + 3));
    setIsLoading(false);
  };

  const prevSlide = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setCurrentIndex((prev) =>
      prev - 3 < 0 ? Math.max(0, skills.length - 3) : prev - 3
    );
    setIsLoading(false);
  };

  const visibleSkills = skills.slice(currentIndex, currentIndex + 3);

  return (
    <section className="bg-gray-900 dark:bg-black text-white py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <Badge
              variant="secondary"
              className="bg-gray-800 text-gray-300 mb-6 px-4 py-2 rounded-full inline-flex items-center space-x-2"
            >
              <X className="w-4 h-4" />
              <span>Why Choose me</span>
            </Badge>

            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              My Extensive
              <br />
              List of Skills
            </h2>

            <p className="text-gray-400 max-w-md">
              Building the world&apos;s best marketing websites. Your trusted
              partner for strategy, design, and dev
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={isLoading || currentIndex === 0}
              className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white disabled:opacity-50 bg-transparent"
              aria-label="Previous skills"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={isLoading || currentIndex + 3 >= skills.length}
              className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white disabled:opacity-50"
              aria-label="Next skills"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? // Skeleton Loading
              Array.from({ length: 3 }).map((_, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 animate-pulse"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg mb-6"></div>
                    <div className="h-6 bg-gray-700 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    </div>
                  </CardContent>
                </Card>
              ))
            : visibleSkills.map((skill, index) => (
                <Card
                  key={skill.id}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CardContent className="p-8">
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-center space-x-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={isLoading || currentIndex === 0}
            className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white disabled:opacity-50 bg-transparent"
            aria-label="Previous skills"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-gray-400 text-sm">
            {Math.floor(currentIndex / 3) + 1} / {Math.ceil(skills.length / 3)}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={isLoading || currentIndex + 3 >= skills.length}
            className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white disabled:opacity-50"
            aria-label="Next skills"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
