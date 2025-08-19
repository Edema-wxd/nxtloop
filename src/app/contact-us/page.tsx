"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const API_URL = "https://staging.nestloop.org.uk/api/contact/contact-us";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type ContactApiResponse = {
  status: number;
  message: string;
  data: {
    name: string;
    email: string;
  };
} | null;

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const validate = (): boolean => {
    const errors: FieldErrors = {};

    if (!name.trim()) errors.name = "Please enter your name.";
    if (!email.trim()) {
      errors.email = "Please enter your email.";
    } else {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) errors.email = "Please enter a valid email.";
    }
    if (!message.trim()) {
      errors.message = "Please enter a message.";
    } else if (message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMsg(null);
    setErrorMsg(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      let data: ContactApiResponse = null;
      try {
        data = await res.json();
      } catch {}

      if (res.status === 201) {
        const msg =
          data?.message ??
          "Thank you for your message. We'll get back to you soon.";
        setSuccessMsg(msg);
        setName("");
        setEmail("");
        setMessage("");
        setFieldErrors({});
      } else {
        const msg =
          data?.message ??
          "Sorry, something went wrong while sending your message. Please try again.";
        setErrorMsg(msg);
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-md border bg-background px-3 py-2 text-sm transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:opacity-50 disabled:pointer-events-none";
  const invalidRing =
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40";

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <Card className="border-primary/10">
        <CardHeader className="border-b">
          <CardTitle className="text-2xl text-primary">Contact Us</CardTitle>
          <CardDescription>
            Have a question or feedback? Send us a message and we’ll get back to
            you.
          </CardDescription>
        </CardHeader>
        <CardContent className="py-6">
          {successMsg ? (
            <div
              role="status"
              aria-live="polite"
              className="mb-6 rounded-md border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-primary"
            >
              {successMsg}
            </div>
          ) : null}
          {errorMsg ? (
            <div
              role="alert"
              aria-live="assertive"
              className="mb-6 rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
            >
              {errorMsg}
            </div>
          ) : null}

          <form onSubmit={onSubmit} noValidate>
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                  className={cn(inputBase, invalidRing)}
                />
                {fieldErrors.name ? (
                  <p
                    id="name-error"
                    className="mt-1.5 text-xs text-destructive"
                  >
                    {fieldErrors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={
                    fieldErrors.email ? "email-error" : undefined
                  }
                  className={cn(inputBase, invalidRing)}
                />
                {fieldErrors.email ? (
                  <p
                    id="email-error"
                    className="mt-1.5 text-xs text-destructive"
                  >
                    {fieldErrors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={
                    fieldErrors.message ? "message-error" : undefined
                  }
                  className={cn(inputBase, invalidRing, "min-h-32 resize-y")}
                />
                {fieldErrors.message ? (
                  <p
                    id="message-error"
                    className="mt-1.5 text-xs text-destructive"
                  >
                    {fieldErrors.message}
                  </p>
                ) : null}
              </div>

              <div className="pt-1">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
