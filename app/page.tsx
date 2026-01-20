"use client";

import Link from "next/link";
import { ArrowRight, Github, Instagram, Linkedin, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-[80vh] animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl min-h-[80px]">
            hello world
            <span className="animate-pulse text-blue-600">|</span>
          </h1>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-700 sm:text-4xl min-h-[80px]">Let's build something amazing together.</h1>
          <p className="text-xl text-gray-800 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div className="flex flex-wrap gap-4">
            {/* 1. VIEW MY WORK BUTTON */}
            <Link
              href="/experience"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium
                         text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition-colors"
            >
              View My Experience <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium
                        text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
            >
              View My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            {/* 2. NEW RESUME BUTTON */}
            <a
              href="/CorsonWilliam_UCMETResume_Spring2026.pdf"
              download="CorsonWilliam_UCMETResume_Spring2026.pdf" 
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              Resume <Download className="ml-2 h-4 w-4" />
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-2">
              <a
                href="https://www.linkedin.com/in/william-corson-a16667232/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/WillCorson" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-500 hover:text-black transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:goalmaster8@gmail.com" target="_blank"
                className="p-3 text-gray-500 hover:text-red-500 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://www.instagram.com/bigtimber35/" target="_blank"
                className="p-3 text-gray-500 hover:text-pink-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.discord.com/465965656270045184" target="_blank"
                className="p-3 text-gray-500 hover:text-blue-300 transition-colors"
              >
                {/* Note: FontAwesome needs to be loaded separately, or use a Lucide icon if preferred */}
                <i className="fas fa-discord fa-sm text-gray-500 hover:text-blue-300 transition-colors "></i>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Photo Placeholder */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl bg-gray-100 flex items-center justify-center">
             <img 
              src="/profile.jpg" 
              alt="Will Corson" 
              className="object-cover w-full h-full"
            /> 
          </div>
        </div>
      </div>

      <br />
      
      <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl min-h-[80px] pt-16">About Me</h1>
          <p className="text-xl text-gray-800 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. 
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </div>

    </div>
  );
}
