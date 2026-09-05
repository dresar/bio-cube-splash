import { ExternalLink } from "lucide-react";

interface BioLinkProps {
  title: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
}

export function BioLink({ title, description, url, icon }: BioLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bio-link stagger-item group block w-full"
    >
      <div className="flex items-center gap-4">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
            {icon}
          </div>
        )}
        <div className="flex-1 text-left">
          <h3 className="font-semibold text-foreground group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
            {description}
          </p>
        </div>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors flex-shrink-0" />
      </div>
    </a>
  );
}