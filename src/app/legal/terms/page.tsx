import { ShieldCheck } from 'lucide-react';

export default function TermsPage() {
  const lastUpdated = "June 15, 2024";

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Terms of Service
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Guidelines for using NeuroMatrix tools and architectural simulations
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
          <p className="leading-relaxed text-balance">
            By accessing or using NeuroMatrix, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. Theoretical Simulation Mode</h2>
          <p className="leading-relaxed text-balance">
            NeuroMatrix provides theoretical mathematical projections for neural network architecture tuning and hyperparameter analysis. These simulations are intended for <strong>educational and research purposes only</strong>. They do not constitute professional engineering or deployment advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Use of Tools</h2>
          <p className="leading-relaxed text-balance">
            Our visualization tools process data locally in your browser. You are responsible for the data you input and the interpretation of the resulting projections. You agree not to use the platform for any unlawful purpose or in any way that could damage or disable our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
          <p className="leading-relaxed text-balance">
            The design, code, and content of NeuroMatrix are protected by intellectual property laws. You may use our tools for personal, educational, or research purposes. Any commercial use or redistribution of our underlying logic and assets requires explicit permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">5. Disclaimer of Warranty</h2>
          <p className="leading-relaxed text-balance">
            The service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not guarantee that the theoretical projections will perfectly match real-world production performance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
          <p className="leading-relaxed text-balance">
            NeuroMatrix shall not be liable for any direct, indirect, or consequential damages resulting from your use of the platform or reliance on its theoretical projections.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-border/40">
          Last updated: {lastUpdated}
        </p>
      </div>
    </div>
  );
}
