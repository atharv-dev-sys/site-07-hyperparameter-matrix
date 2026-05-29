"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 15, 2024";

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Privacy Policy
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Our commitment to data sovereignty at NeuroMatrix
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Local-First Processing</h2>
          <p className="leading-relaxed text-balance">
            At NeuroMatrix, we prioritize your data privacy by design. <strong>All neural network architecture parameters, hyperparameter settings, and model configurations input into our visualizers are processed locally within your web browser.</strong> This information is never uploaded to our servers, stored in our databases, or shared with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. No Personal Data Collection</h2>
          <p className="leading-relaxed text-balance">
            Our platform does not require account creation or registration. We do not collect personally identifiable information (PII) such as names, email addresses, or IP addresses. Your exploration of neural network architectures remains anonymous.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Cookies and Analytics</h2>
          <p className="leading-relaxed text-balance">
            We may use minimal, privacy-respecting cookies or local storage to save your preferences (such as theme settings) locally on your device. We do not use tracking cookies or third-party behavioral advertising scripts that build profiles of our users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Security</h2>
          <p className="leading-relaxed text-balance">
            While we do not store your data, we protect the delivery of our platform using industry-standard security protocols, including HTTPS encryption, to ensure the integrity of the tools you use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">5. Data Sovereignty</h2>
          <p className="leading-relaxed text-balance">
            Because your data stays on your machine, you retain full sovereignty over your research and architectural designs. You can clear all tool-related data at any time by clearing your browser&apos;s cache and local storage.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-border/40">
          Last updated: {lastUpdated}
        </p>
      </div>
    </div>
  );
}
