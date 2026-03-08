import React from "react";

export type FAQ = {
  question: string;
  answer: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode; // Changed from LucideIcon to React.ReactNode to allow for JSX elements
};

type SubIndustry = string;

export type Industry = {
    name: string;
    id: string;
    subIndustries: SubIndustry[];
}

export type Testinomial = {
    quote: string;
    author: string;
    image: string;
    role: string;
    company: string;
}

export type HowItWorksStep = {
    title: string;
    description: string;
    icon: React.ReactNode; // Changed from LucideIcon to React.ReactNode to allow for JSX elements
}
