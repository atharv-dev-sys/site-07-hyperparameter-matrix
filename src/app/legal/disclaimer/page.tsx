import { ShieldAlert } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="text-center mb-12">
        <ShieldAlert className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary">
          Disclaimer
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Last Updated: June 15, 2024
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8 bg-card p-6 sm:p-8 rounded-xl shadow-lg text-foreground/80">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">Welcome to NeuroMatrix</h2>
          <p className="leading-relaxed text-balance">
            NeuroMatrix provides tools and visualizations for neural network architecture tuning and hyperparameter analysis. This disclaimer outlines the theoretical nature of our projections to ensure you use our tools with clarity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">1. Theoretical Projections</h2>
          <p className="leading-relaxed text-balance">
            All visualizers and calculators on NeuroMatrix are designed to provide <strong>theoretical mathematical projections</strong>. These projections are based on standardized algorithms and heuristic models intended for educational and research purposes. They do not represent guaranteed performance metrics for any specific hardware or production environment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">2. Educational Purposes Only</h2>
          <p className="leading-relaxed text-balance">
            The content provided on this platform is for general informational and educational purposes only. It is not intended as professional engineering advice or as a definitive guide for deploying production-grade machine learning systems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">3. Local Data Processing</h2>
          <p className="leading-relaxed text-balance">
            To ensure privacy and efficiency, <strong>all data input into our visualizers is processed locally</strong> within your web browser. NeuroMatrix does not upload, store, or transmit your architectural configurations or data parameters to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">4. Accuracy of Models</h2>
          <p className="leading-relaxed text-balance">
            While we strive for mathematical precision in our models, the field of deep learning is rapidly evolving. We cannot guarantee that the theoretical projections provided will perfectly align with real-world empirical results. Users are encouraged to validate all architectural decisions through rigorous testing in their specific environments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">5. No Liability</h2>
          <p className="leading-relaxed text-balance">
            NeuroMatrix, its creators, and affiliates shall not be held liable for any loss, damage, or resource misallocation arising from the use of our theoretical tools. The implementation of any neural network architecture based on these projections is the sole responsibility of the user.
          </p>
        </section>

        <p className="text-center font-semibold text-foreground/90 pt-4 border-t border-border/40">
          By using NeuroMatrix, you acknowledge that you have read, understood, and agreed to this disclaimer.
        </p>
      </div>
    </div>
  );
}
