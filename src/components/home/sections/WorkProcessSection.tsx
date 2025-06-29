"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/Card";
import { X, ArrowRight } from "lucide-react";

const processSteps = [
  {
    id: "discovery",
    title: "Discovery",
    color: "bg-teal-500",
    textColor: "text-teal-500",
    borderColor: "border-teal-500",
    description:
      "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    isHighlighted: true,
  },
  {
    id: "strategy",
    title: "Strategy",
    color: "bg-lime-400",
    textColor: "text-lime-400",
    borderColor: "border-lime-400",
    description:
      "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth goals analysis, we're here to set the stage for success.",
    isHighlighted: false,
  },
  {
    id: "design",
    title: "Design",
    color: "bg-teal-500",
    textColor: "text-teal-500",
    borderColor: "border-teal-500",
    description:
      "After we have a comprehensive understanding of your brand, we'll be ready to craft design. Each page or will be designed, reviewed, and given your stamp of approval.",
    isHighlighted: false,
  },
  {
    id: "build",
    title: "Build",
    color: "bg-lime-400",
    textColor: "text-lime-400",
    borderColor: "border-lime-400",
    description:
      "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    isHighlighted: false,
  },
];

export default function WorkProcessSection() {
  const [activeStep, setActiveStep] = useState("discovery");

  return (
    <section className="bg-gray-900 dark:bg-black text-white py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Badge
            variant="secondary"
            className="bg-gray-800 text-gray-300 mb-8 px-4 py-2 rounded-full inline-flex items-center space-x-2"
          >
            <X className="w-4 h-4" />
            <span>Work Process</span>
          </Badge>

          <h2 className="text-4xl lg:text-6xl font-bold mb-8">My Work Process</h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <Card
              key={step.id}
              className={`
                bg-gray-800 border-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer
                ${step.isHighlighted ? `border-2 ${step.borderColor}` : ""}
                ${activeStep === step.id ? "ring-2 ring-gray-600" : ""}
              `}
              onClick={() => setActiveStep(step.id)}
            >
              <CardContent className="p-8">
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <Badge
                    className={`${step.color} text-gray-900 px-4 py-2 text-sm font-bold rounded-full`}
                  >
                    {step.title}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white p-0 h-auto"
                  >
                    <ArrowRight className="w-4 h-4 mr-1" />
                    Read More
                  </Button>
                </div>

                {/* Step Description */}
                <div
                  className={`
                    transition-all duration-300
                    ${
                      step.isHighlighted
                        ? `border-2 ${step.borderColor} bg-gray-800/50 p-4 rounded-lg`
                        : ""
                    }
                  `}
                >
                  <p
                    className={`
                      text-gray-300 leading-relaxed text-sm lg:text-base
                      ${step.isHighlighted ? step.textColor : ""}
                    `}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Step Number */}
                <div className="mt-6 flex justify-end">
                  <span className="text-3xl font-bold text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
                    ${activeStep === step.id ? step.color : "bg-gray-600"}
                  `}
                  onClick={() => setActiveStep(step.id)}
                />
                {index < processSteps.length - 1 && (
                  <div className="w-8 h-px bg-gray-600 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
