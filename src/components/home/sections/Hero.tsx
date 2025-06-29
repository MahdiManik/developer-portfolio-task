"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Github, Instagram, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-200 via-yellow-200 to-green-300 dark:from-green-900 dark:via-yellow-900 dark:to-green-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-400 rounded-full opacity-50"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          DEVLOP.ME
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Blog
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="default"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-700 dark:text-gray-300"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 rounded-full px-6">
            Start Project
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12 lg:py-20">
        {/* Left Side - Social Icons */}
        <div className="hidden lg:flex flex-col items-center space-y-6 absolute left-6 top-1/2 transform -translate-y-1/2">
          <span className="text-sm text-gray-600 dark:text-gray-400 transform -rotate-90 whitespace-nowrap mb-8">
            Follow me
          </span>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Center Content */}
        <div className="flex-1 text-center lg:text-left max-w-4xl mx-auto">
          {/* Name Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            <Badge
              variant="secondary"
              className="bg-yellow-400 text-gray-900 px-4 py-2 text-sm font-medium"
            >
              Forhad Hossain
            </Badge>
            <Badge
              variant="secondary"
              className="bg-blue-400 text-white px-4 py-2 text-sm font-medium"
            >
              salekin imran Abdullah Mukdam
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Trusted{" "}
            <span className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 inline-block transform -rotate-1">
              Partner
            </span>{" "}
            for Your Website{" "}
            <span className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 inline-block">
              Develop.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            Building the world&apos;s best marketing websites for over a decade.
            Your trusted partner for strategy, design, and dev.
          </p>

          {/* CTA Button */}
          <Button className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-300 rounded-full px-8 py-3 text-lg font-medium inline-flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Schedule a Call</span>
          </Button>
        </div>

        {/* Right Side - Avatars */}
        <div className="hidden lg:flex flex-col items-center space-y-4 absolute right-12 top-1/2 transform -translate-y-1/2">
          <div className="flex -space-x-2">
            <Avatar className="w-12 h-12 border-2 border-white">
              <AvatarImage src="/placeholder.svg?height=48&width=48" />
              <AvatarFallback className="bg-purple-500 text-white">
                M
              </AvatarFallback>
            </Avatar>
            <Avatar className="w-12 h-12 border-2 border-white">
              <AvatarImage src="/placeholder.svg?height=48&width=48" />
              <AvatarFallback className="bg-pink-500 text-white">
                M
              </AvatarFallback>
            </Avatar>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            3
          </span>
        </div>
      </div>
    </section>
  );
}
