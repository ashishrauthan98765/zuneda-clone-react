import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kolkata",
  });

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#Services" },
    { name: "Works", href: "#Works" },
    { name: "About", href: "#About" },
    { name: "Contact", href: "#Contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/zunedaalim/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/zuned_aalim/" },
    { name: "Github", icon: Github, href: "https://github.com/zunedaalim" },
  ];

  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-lg font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Socials</h4>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Local Time</h4>
            <p className="text-muted-foreground">{currentTime}, IST</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2025 Zuned Aalim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
