 import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Github } from "lucide-react";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')", // Replace if needed
      }}
    >
      <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-2xl shadow-lg max-w-2xl w-full p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Visualize Your Codebase
        </h1>
        <p className="text-md text-gray-700 dark:text-gray-300 mb-6">
          Upload your repository or paste a GitHub URL to generate an interactive map of your codebase.
        </p>

        <div className="space-y-6">
          {/* GitHub URL Upload */}
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6 space-y-4">
              <label className="block text-sm font-semibold text-left text-gray-800 dark:text-gray-100">
                Paste GitHub URL
              </label>
              <div className="flex gap-2">
                <Input placeholder="https://github.com/username/repo" className="flex-grow" />
                <Button variant="default" className="gap-2">
                  <Github size={18} /> Clone
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-sm text-gray-600 dark:text-gray-400 text-center">OR</div>

          {/* Local Upload */}
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6 space-y-4">
              <label className="block text-sm font-semibold text-left text-gray-800 dark:text-gray-100">
                Upload Local Repository
              </label>
              <div className="flex gap-2 items-center">
                <Input type="file" className="flex-grow" />
                <Button variant="default" className="gap-2">
                  <UploadCloud size={18} /> Upload
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
          Your data is processed locally and securely. No files are saved.
        </p>
      </div>
    </div>
  );
}