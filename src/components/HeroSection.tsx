import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/TypingText";
import { Upload, Play } from "lucide-react";

export function HeroSection() {
  const words = ["Transform", "Convert", "Unlock", "Analyze"];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24">
      <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4">
            <TypingText 
              words={words} 
              className="text-primary" 
            /> Documents
            <br />
            into
            <br />
            <span className="text-primary">Conv</span>ersations
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Upload any document and unlock AI-powered semantic search,
            intelligent Q&A, and instant insights.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="default" size="xl" className="min-w-[200px] font-mono">
            <Upload className="h-5 w-5" />
            Upload Document
          </Button>
          
          <Button variant="demo" size="xl" className="min-w-[160px] font-mono">
            <Play className="h-5 w-5" />
            Try Demo
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-6">
          PDF, DOCX, TXT supported • No signup required
        </p>
      </div>
    </section>
  );
}