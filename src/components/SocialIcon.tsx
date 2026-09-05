interface SocialIconProps {
  icon: React.ReactNode;
  url: string;
  label: string;
}

export function SocialIcon({ icon, url, label }: SocialIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon stagger-item"
      aria-label={label}
    >
      <div className="w-6 h-6 text-foreground">
        {icon}
      </div>
    </a>
  );
}