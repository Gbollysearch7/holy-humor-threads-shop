
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="border border-border shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-holy-blue dark:text-holy-gold">
          Send us a message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-holy-blue dark:focus:ring-holy-gold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-holy-blue dark:focus:ring-holy-gold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground">Subject</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-holy-blue dark:focus:ring-holy-gold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-all duration-300 focus:ring-2 focus:ring-holy-blue dark:focus:ring-holy-gold focus:outline-none resize-none"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-holy-blue hover:bg-holy-blue/90 dark:bg-holy-gold dark:hover:bg-holy-gold/90 dark:text-gray-900 transition-all duration-300 hover:scale-105"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
