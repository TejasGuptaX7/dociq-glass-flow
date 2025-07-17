import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Send, Search, Plus, MoreVertical, Eye, Download } from "lucide-react";

export function Dashboard() {
  const documents = [
    { name: "Annual Report 2024.pdf", size: "2.4 MB", date: "2 hours ago" },
    { name: "Marketing Strategy.docx", size: "856 KB", date: "1 day ago" },
    { name: "Technical Specs.pdf", size: "1.2 MB", date: "3 days ago" },
    { name: "User Research.txt", size: "245 KB", date: "1 week ago" }
  ];

  const messages = [
    { type: "user", content: "What are the key findings in the annual report?" },
    { type: "ai", content: "Based on the Annual Report 2024, the key findings include: 1) Revenue increased by 23% year-over-year, 2) Customer acquisition costs decreased by 15%, 3) Market expansion into 3 new regions..." },
    { type: "user", content: "Can you summarize the marketing strategy?" },
    { type: "ai", content: "The marketing strategy focuses on three pillars: digital transformation, customer-centric approach, and data-driven decision making. Key initiatives include..." }
  ];

  return (
    <section id="dashboard" className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Your AI <span className="text-primary">Workspace</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload, analyze, and chat with your documents in one unified interface.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 h-[600px]">
          {/* Document Library Sidebar */}
          <div className="lg:col-span-3">
            <GlassCard variant="feature" className="h-full p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono font-semibold">Documents</h3>
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search documents..." className="pl-10 bg-glass/10" />
                </div>
              </div>

              <ScrollArea className="h-[480px]">
                <div className="space-y-2">
                  {documents.map((doc, index) => (
                    <div key={index} className="p-3 rounded-lg bg-glass/10 hover:bg-glass/20 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <FileText className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">{doc.size} • {doc.date}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <MoreVertical className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassCard>
          </div>

          {/* PDF Viewer */}
          <div className="lg:col-span-6">
            <GlassCard variant="feature" className="h-full p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono font-semibold">Annual Report 2024.pdf</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-glass/10 rounded-lg h-[520px] flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">PDF Viewer</p>
                  <p className="text-sm text-muted-foreground mt-1">Document content would be displayed here</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* AI Chat Panel */}
          <div className="lg:col-span-3">
            <GlassCard variant="feature" className="h-full p-4 flex flex-col">
              <h3 className="font-mono font-semibold mb-4">AI Assistant</h3>
              
              <ScrollArea className="flex-1 mb-4">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-primary/20 ml-4' 
                        : 'bg-glass/20 mr-4'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="flex gap-2">
                <Input 
                  placeholder="Ask anything about your documents..." 
                  className="bg-glass/10"
                />
                <Button variant="default" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}