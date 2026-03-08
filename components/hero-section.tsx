"use client";

import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
        <div className="space-y-6 text-center">
            <div className = "space-y-6 mx-auto">
                <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
                    Your AI Career Helper for
                    <br />
                    Professional Growth and Success
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                    Unlock your career potential with our AI-powered platform, providing personalized guidance, interview preparation, and AI powered tools for professional development.
                </p>
            </div>
            
            <div className="flex justify-center space-x-4">
                <Link href="/dashboard">
                    <Button size={"lg"} className="px-8">
                        Get Started
                    </Button>
                </Link>
            </div>

            <div>
                <div>
                    <Image 
                        src="/landing_page.png"
                        alt="Banner Thrive Stack"
                        width={1280}
                        height={720}
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection