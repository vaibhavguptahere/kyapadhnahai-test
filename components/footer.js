import { Heart, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Intro */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-primary">KyaPadhnaHai</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Your personalized academic hub for mastering Web Development, DSA, and beyond.
          </p>

          {/* Developer Card */}
          <div className="mt-6 p-4 bg-secondary rounded-xl border border-border flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold">VG</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Vaibhav Gupta</p>
              <p className="text-xs text-muted-foreground">Developer & Designer</p>
              <div className="flex gap-2 mt-1">
                <a href="https://github.com/yourgithub" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3 text-foreground">Resources</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Study Materials</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Video Lectures</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Previous Papers</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Mock Tests</a></li>
          </ul>
        </div>

        {/* Subjects */}
        <div>
          <h3 className="font-semibold mb-3 text-foreground">Subjects</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Web Dev</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">DSA</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">AI/ML</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Programming</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3 text-foreground">Support</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Feedback</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground text-center">
        <p className="flex items-center justify-center gap-1">
          © 2025 KyaPadhnaHai. Built with <Heart className="w-4 h-4 text-red-500" /> for students.
        </p>
      </div>
    </footer>
  );
}