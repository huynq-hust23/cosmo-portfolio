import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import cn from "@/lib/utils"
import toast from "react-hot-toast"
import { useState } from "react"

export const ContactSection = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setTimeout(() => {
            toast.success("Message sent! 🎉");
            setIsSubmitting(false);
        }, 1500);
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
                    <div className="flex flex-col h-full bg-card p-8 rounded-2xl shadow-lg/50">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 flex-1">
                            {/* Email */}
                            <div className="flex items-start gap-4 text-left">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <a
                                        href="mailto:huy23.work@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        huy23.work@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 text-left">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <a
                                        href="tel:+84792440655"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        (+84) 792 440 655
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4 text-left">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <a
                                        href="https://maps.app.goo.gl/9Vy7c5QsEcaFRuE88"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                                    >
                                        Truong Dinh Street, Hanoi, Vietnam
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex gap-4 justify-center">
                                <a
                                    aria-label="LinkedIn"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    aria-label="Facebook"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Facebook />
                                </a>
                                <a
                                    aria-label="Instagram"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Form */}
                    <div className="flex flex-col h-full bg-card p-8 rounded-2xl shadow-lg/50">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6 flex-1" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="flex-1">
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full h-full min-h-[140px] px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2 mt-auto")}
                            >
                                {isSubmitting ? "Sending..." : "Send message."}
                                <Send />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
