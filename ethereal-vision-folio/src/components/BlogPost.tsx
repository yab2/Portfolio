import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';

interface BlogStep {
  stepNumber: number;
  title: string;
  content: string;
  tips?: string[];
  screenshots?: string[];
  notes?: string[];
  substeps?: string[];
}

interface BlogPostProps {
  onClose: () => void;
}

const BlogPost = ({ onClose }: BlogPostProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const steps: BlogStep[] = [
    {
      stepNumber: 1,
      title: 'Check the Basics First',
      content:
        'Before diving into software fixes, let\'s rule out the simple stuff. Many printer problems come from loose cables, empty ink, or low paper.',
      substeps: [
        'Paper: Make sure there\'s enough paper in the tray and it\'s loaded correctly.',
        'Ink or toner: Check if the ink levels are low or empty.',
        'Cables: For wired printers, make sure the USB cable is firmly connected at both ends.',
        'Wi-Fi: For wireless printers, confirm the printer and computer are on the same network.',
      ],
      tips: ['Low-quality paper can cause "ghost paper jams" that stop your printer from working even when there\'s no visible jam.'],
      screenshots: ['/src/assets/blog/printer-troubleshooting/image.png'],
    },
    {
      stepNumber: 2,
      title: 'Run the Windows Printer Troubleshooter',
      content:
        'Windows has a built-in tool that can find and fix many printer problems automatically. It\'s a great first step before trying more complex solutions.',
      substeps: [
        'Open Settings → Bluetooth & devices → Printers & scanners',
        'Click on your printer from the list.',
        'Click "Run the troubleshooter" and wait for it to scan and fix any issues.',
      ],
      notes: ['If your printer shows as "Offline," you\'ll need to fix the connection issue first before continuing.'],
      screenshots: [
        '/src/assets/blog/printer-troubleshooting/image 1.png',
        '/src/assets/blog/printer-troubleshooting/image 2.png',
        '/src/assets/blog/printer-troubleshooting/image 3.png',
        '/src/assets/blog/printer-troubleshooting/image 4.png',
        '/src/assets/blog/printer-troubleshooting/image 5.png',
        '/src/assets/blog/printer-troubleshooting/image 6.png',
      ],
    },
    {
      stepNumber: 3,
      title: 'Set Your Printer as the Default',
      content:
        'Sometimes your computer sends print jobs to the wrong printer. Windows can automatically change the default printer based on your location, which isn\'t always helpful. Let\'s make sure the right printer is selected.',
      substeps: [
        'Go to Settings → Bluetooth & devices → Printers & scanners',
        'Click on the printer you want to use',
        'Click the "Set as default" button',
      ],
      screenshots: [
        '/src/assets/blog/printer-troubleshooting/image 7.png',
        '/src/assets/blog/printer-troubleshooting/image 8.png',
      ],
    },
    {
      stepNumber: 4,
      title: 'Clear the Print Queue',
      content:
        'When you print something, your computer creates a "print job" and puts it in a queue. Sometimes these jobs get stuck and block everything behind them. Clearing the queue often fixes this.',
      substeps: [
        'Go to Settings → Bluetooth & devices → Printers & scanners and select your printer',
        'Click "Open print queue"',
        'In the menu bar, click Printer → Cancel All Documents',
        'Click Yes to confirm',
      ],
      screenshots: [
        '/src/assets/blog/printer-troubleshooting/image 9.png',
        '/src/assets/blog/printer-troubleshooting/image 10.png',
        '/src/assets/blog/printer-troubleshooting/image 11.png',
        '/src/assets/blog/printer-troubleshooting/image 12.png',
        '/src/assets/blog/printer-troubleshooting/image 13.png',
        '/src/assets/blog/printer-troubleshooting/image 14.png',
        '/src/assets/blog/printer-troubleshooting/image 15.png',
      ],
    },
    {
      stepNumber: 5,
      title: 'Update or Reinstall Printer Drivers',
      content:
        'Drivers are software that help your computer talk to your printer. If they\'re outdated or corrupted, your printer won\'t work properly. Here\'s how to update them.',
      substeps: [
        'Right click the Start Menu (or press Windows + X) and select Device Manager',
        'Expand the Printers section',
        'Right-click your printer and select Update driver',
        'Choose "Search automatically for drivers"',
      ],
      tips: ['You can also download the latest driver directly from your printer manufacturer\'s website (HP, Canon, Brother, Epson, etc.) for the most up-to-date version.'],
      screenshots: [
        '/src/assets/blog/printer-troubleshooting/image 16.png',
        '/src/assets/blog/printer-troubleshooting/image 17.png',
      ],
    },
    {
      stepNumber: 6,
      title: 'Restart the Print Spooler Service',
      content:
        'The Print Spooler is a Windows service that manages all print jobs. If it glitches, your printer stops responding. Restarting it often fixes the problem.',
      substeps: [
        'Press Windows + R to open the Run dialog',
        'Type "services.msc" and press Enter',
        'Scroll down and find "Print Spooler"',
        'Right-click it and select "Restart"',
      ],
      tips: ['If the service keeps stopping, there might be a deeper issue with your Windows installation. Consider running a system file check by opening Command Prompt as administrator and typing: sfc /scannow'],
    },
  ];

  const ImageLightbox = ({ src, onClose }: { src: string; onClose: () => void }) => (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src={src}
        alt="Enlarged screenshot"
        className="max-w-full max-h-full object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
        <div className="container mx-auto px-6 py-8 max-w-5xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Guides
            </Button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title Section */}
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold bg-accent/20 text-accent rounded-full border border-accent/30">
              IT Support Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Printer <span className="glow-text">Troubleshooting</span> Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive step-by-step guide for resolving common printer issues on Windows and Mac systems
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <span>8 min read</span>
              <span>•</span>
              <span>6 Steps</span>
              <span>•</span>
              <span>December 2024</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="glass-card rounded-3xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Printers can stop working for many reasons. The problem might be with your computer, the printer itself, or the connection between them. This guide walks you through the most effective fixes to get your printer working again.
            </p>
            <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl">
              <p className="text-sm text-primary font-medium">
                💡 Pro Tip: Work through these steps in order. Each one builds on the previous, starting with the quickest fixes.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:glow-border"
              >
                {/* Step Header */}
                <div className="p-8 border-b border-border/50">
                  <div className="flex items-start gap-4">
                    {/* Step Number Badge */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20">
                      {step.stepNumber}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="p-8 space-y-6">
                  {/* Substeps */}
                  {step.substeps && step.substeps.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-primary">Steps to Follow:</h4>
                      <ol className="space-y-2">
                        {step.substeps.map((substep, idx) => (
                          <li key={idx} className="flex gap-3 text-muted-foreground">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{substep}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Notes */}
                  {step.notes && step.notes.length > 0 && (
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                      {step.notes.map((note, idx) => (
                        <p key={idx} className="text-sm text-blue-400">
                          ℹ️ <strong>Note:</strong> {note}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Tips */}
                  {step.tips && step.tips.length > 0 && (
                    <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl">
                      {step.tips.map((tip, idx) => (
                        <p key={idx} className="text-sm text-accent">
                          💡 <strong>Pro Tip:</strong> {tip}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Screenshots */}
                  {step.screenshots && step.screenshots.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold">Screenshots:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.screenshots.map((screenshot, idx) => (
                          <div
                            key={idx}
                            className="group relative cursor-pointer overflow-hidden rounded-xl border border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
                            onClick={() => setSelectedImage(screenshot)}
                          >
                            <img
                              src={screenshot}
                              alt={`Step ${step.stepNumber} - Screenshot ${idx + 1}`}
                              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Screenshot+Not+Found';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-2 right-2 p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                                <Maximize2 className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="glass-card rounded-3xl p-8 mt-12">
            <h2 className="text-2xl font-semibold mb-4">Still Having Problems?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If none of these steps work, here are a few more things to try:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Reboot everything:</strong> Turn off your printer and computer. Wait 30 seconds, then turn them back on.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Check for Windows updates:</strong> Sometimes printer fixes come through system updates.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Look at your printer's display:</strong> Error codes or blinking lights can tell you exactly what's wrong. Check your printer's manual for what they mean.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Use the manufacturer's software:</strong> HP, Canon, and other brands have their own diagnostic tools that can help.</span>
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 glass-card rounded-2xl">
              <p className="text-muted-foreground mb-2">Created as part of an IT Support portfolio</p>
              <p className="text-sm text-muted-foreground">
                Demonstrating technical writing and troubleshooting expertise
              </p>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4 rotate-90" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <ImageLightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  );
};

export default BlogPost;
