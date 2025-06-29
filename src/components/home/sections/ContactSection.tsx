"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-lime-200 via-yellow-100 to-lime-300 px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Contact Button */}
        <div className="mb-12">
          <Button
            variant="outline"
            className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6 py-2 font-medium"
          >
            Contact
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - CTA */}
          <div className="bg-white border-4 border-orange-400 rounded-2xl p-8 lg:p-12">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Interested in{" "}
              <span className="bg-gray-900 text-white px-4 py-2 inline-block">
                work
              </span>{" "}
              together?
            </h2>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other
            </p>

            <Button className="bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-50 rounded-full px-8 py-3 font-medium inline-flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>Schedule a Call</span>
            </Button>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-12">
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white placeholder:text-gray-400 focus:border-lime-400 focus:ring-0 px-0 py-4 text-lg"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white placeholder:text-gray-400 focus:border-lime-400 focus:ring-0 px-0 py-4 text-lg"
                />
              </div>

              <div>
                <Textarea
                  name="project"
                  placeholder="Describe your project"
                  value={formData.project}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-transparent border-0 border-b-2 border-gray-700 rounded-none text-white placeholder:text-gray-400 focus:border-lime-400 focus:ring-0 px-0 py-4 text-lg resize-none"
                />
              </div>

              <div className="flex items-center space-x-4 pt-6">
                <Button
                  type="submit"
                  className="bg-lime-400 text-gray-900 hover:bg-lime-300 rounded-full px-8 py-3 font-medium"
                >
                  Send
                </Button>
                <span className="text-gray-400">or</span>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full px-6 py-3 font-medium"
                >
                  Contact me
                </Button>
              </div>
            </form>

            {/* Social Media */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 font-medium">@williamvey</span>
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
