import { ThemeToggle } from "@/components/ThemeToggle";
import { BioLink } from "@/components/BioLink";
import { SocialIcon } from "@/components/SocialIcon";
import { 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  Globe,
  BookOpen,
  Video,
  Briefcase,
  Camera
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  const bioLinks = [
    {
      title: "Portfolio Website",
      description: "Lihat karya dan proyek terbaru saya",
      url: "https://example.com/portfolio",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Blog Pribadi",
      description: "Artikel dan insight tentang teknologi",
      url: "https://example.com/blog",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "YouTube Channel",
      description: "Tutorial dan konten video menarik",
      url: "https://youtube.com/@example",
      icon: <Video className="w-5 h-5" />
    },
    {
      title: "Freelance Services",
      description: "Jasa development dan design",
      url: "https://example.com/services",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Photography",
      description: "Koleksi foto dan visual artwork",
      url: "https://example.com/photos",
      icon: <Camera className="w-5 h-5" />
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-full h-full" />,
      url: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Twitter className="w-full h-full" />,
      url: "https://twitter.com",
      label: "Twitter"
    },
    {
      icon: <Instagram className="w-full h-full" />,
      url: "https://instagram.com",
      label: "Instagram"
    },
    {
      icon: <Linkedin className="w-full h-full" />,
      url: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-full h-full" />,
      url: "mailto:hello@example.com",
      label: "Email"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl float" style={{ animationDelay: "4s" }}></div>
      </div>

      <ThemeToggle />
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-md mx-auto">
          {/* Profile Section */}
          <div className="text-center mb-8 stagger-item">
            <div className="relative inline-block mb-6">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto profile-glow ring-4 ring-white/20 transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse"></div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Alex Johnson
            </h1>
            
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs mx-auto">
              Full Stack Developer & Content Creator. Membuat solusi digital yang inovatif dan mengajarkan teknologi kepada ribuan orang.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-3 mb-8">
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                icon={social.icon}
                url={social.url}
                label={social.label}
              />
            ))}
          </div>

          {/* Bio Links */}
          <div className="space-y-4">
            {bioLinks.map((link, index) => (
              <BioLink
                key={index}
                title={link.title}
                description={link.description}
                url={link.url}
                icon={link.icon}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-12 stagger-item">
            <p className="text-xs text-muted-foreground">
              Made with ❤️ using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;