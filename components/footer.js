import { Heart, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Intro */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-primary font-poppins">KyaPadhnaHai</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed font-inter">
            Your personalized academic hub for mastering Web Development, DSA, and beyond.
          </p>

          {/* Developer Card */}
          <div className="mt-6 p-4 bg-muted/10 rounded-xl border border-border flex items-center gap-4 shadow-sm">
            <Image
              src="/vaibhav.jpg" // <-- Place your image in public/vaibhav.jpg
              alt="Developer"
              width={50}
              height={50}
              className="rounded-full border border-border"
            />
            <div>
              <p className="text-sm font-semibold font-inter">Vaibhav Gupta</p>
              <p className="text-xs text-muted-foreground font-inter">Developer & Designer</p>
              <div className="flex gap-2 mt-1">
                <a href="https://github.com/yourgithub" target="_blank">
                  <Github className="w-4 h-4 hover:text-primary transition" />
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank">
                  <Linkedin className="w-4 h-4 hover:text-primary transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3 font-poppins">Resources</h3>
          <ul className="space-y-2 text-sm text-muted-foreground font-inter">
            <li><a href="#">Study Materials</a></li>
            <li><a href="#">Video Lectures</a></li>
            <li><a href="#">Previous Papers</a></li>
            <li><a href="#">Mock Tests</a></li>
          </ul>
        </div>

        {/* Subjects */}
        <div>
          <h3 className="font-semibold mb-3 font-poppins">Subjects</h3>
          <ul className="space-y-2 text-sm text-muted-foreground font-inter">
            <li><a href="#">Web Dev</a></li>
            <li><a href="#">DSA</a></li>
            <li><a href="#">AI/ML</a></li>
            <li><a href="#">Programming</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3 font-poppins">Support</h3>
          <ul className="space-y-2 text-sm text-muted-foreground font-inter">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground text-center font-inter">
        <p className="flex items-center justify-center gap-1">
          © 2025 KyaPadhnaHai. Built with <Heart className="w-4 h-4 text-red-500" /> for students.
        </p>
      </div>
    </footer>
  );
}
