import { useState } from 'react';
import { X, ChevronLeft, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';
import { blogPostsData } from '@/data/blogPostsData';

interface BlogPostProps {
  postId: string;
  onClose: () => void;
}

const BlogPost = ({ postId, onClose }: BlogPostProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const postData = blogPostsData[postId];

  if (!postData) {
    return (
      <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Button onClick={onClose}>Go Back</Button>
        </div>
      </div>
    );
  }

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
          <div className="flex items-center justify-between mb-8 sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 -mt-4 px-4 -mx-4 rounded-xl">
            <Button variant="ghost" size="sm" onClick={onClose} className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Home Labs
            </Button>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title Section */}
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold bg-accent/20 text-accent rounded-full border border-accent/30">
              {postData.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              {postData.title} <span className="glow-text">Guide</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {postData.subtitle}
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <span>{postData.readTime}</span>
              <span>•</span>
              <span>{postData.totalSteps} Steps</span>
              <span>•</span>
              <span>{postData.date}</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="glass-card rounded-3xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{postData.overview}</p>
            {postData.proTip && (
              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl">
                <p className="text-sm text-primary font-medium">💡 Pro Tip: {postData.proTip}</p>
              </div>
            )}
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {postData.steps.map((step, index) => (
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
                                e.currentTarget.src =
                                  'https://via.placeholder.com/600x400?text=Screenshot+Not+Found';
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
            <p className="text-muted-foreground leading-relaxed mb-6">{postData.conclusion}</p>
            {postId === 'printer-troubleshooting' && (
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Reboot everything:</strong> Turn off your printer and computer. Wait 30 seconds, then
                    turn them back on.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Check for Windows updates:</strong> Sometimes printer fixes come through system
                    updates.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Look at your printer's display:</strong> Error codes or blinking lights can tell you
                    exactly what's wrong. Check your printer's manual for what they mean.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Use the manufacturer's software:</strong> HP, Canon, and other brands have their own
                    diagnostic tools that can help.
                  </span>
                </li>
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 glass-card rounded-2xl">
              <p className="text-muted-foreground mb-2">
                Created as part of an{' '}
                {postId === 'network-troubleshooting' ? 'Network Support' : 'IT Support'} portfolio
              </p>
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
      {selectedImage && <ImageLightbox src={selectedImage} onClose={() => setSelectedImage(null)} />}
    </>
  );
};

export default BlogPost;
