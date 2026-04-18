import { useState } from "react";
import { waLink } from "@/lib/site";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type Props = {
  serviceName: string;
  trigger?: React.ReactNode;
};

export function BookingDialog({ serviceName, trigger }: Props) {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("11:00");

  const message = `Hi, I want to book ${serviceName} on ${date} at ${time}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <button className="text-sm font-medium text-primary hover:text-accent transition">
            Book Now →
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Book {serviceName}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Preferred Date</label>
            <input
              type="date"
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Preferred Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full px-5 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-soft"
          >
            Confirm on WhatsApp
          </a>
          <p className="text-xs text-muted-foreground text-center">
            We'll open WhatsApp with your booking message ready to send.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
