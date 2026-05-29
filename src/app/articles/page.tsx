import Link from 'next/link';
import { AdSlot } from "@/components/ad-slot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const articles = [
  {
    title: "Activation Function Evolution: From Sigmoid to GeLU and Beyond",
    slug: "activation-function-evolution-from-sigmoid-to-gelu-and-beyond",
    description: "Why your choice of activation determines the gradient flow and training velocity."
  },
  {
    title: "Automated Machine Learning (AutoML): The Future of Tuning in Pune",
    slug: "automated-machine-learning-(automl)-the-future-of-tuning-in-pune",
    description: "How automated pipelines are revolutionizing model optimization."
  },
  {
    title: "Batch Size Dynamics: Scaling Machine Learning Operations in Pune",
    slug: "batch-size-dynamics-scaling-machine-learning-operations-in-pune",
    description: "The trade-offs between stochasticity and hardware utilization."
  },
  {
    title: "Comparing Adam vs. SGD: Which Optimizer Wins for Computer Vision?",
    slug: "comparing-adam-vs.-sgd-which-optimizer-wins-for-computer-vision",
    description: "A deep dive into adaptive learning rates vs. generalized convergence."
  },
  {
    title: "Future-Proofing Neural Architectures: Modular Tuning for 2027 Models",
    slug: "future-proofing-neural-architectures-modular-tuning-for-2027-models",
    description: "Architecting for efficiency and long-term scalability."
  },
  {
    title: "Hyperparameter Tuning at Scale: Enterprise Workflows in Kharadi",
    slug: "hyperparameter-tuning-at-scale-enterprise-workflows-in-kharadi",
    description: "Managing thousands of experiments in a production environment."
  },
  {
    title: "L1 vs L2 Regularization: Sparsity vs Stability in Algorithm Tuning",
    slug: "l1-vs-l2-regularization-sparsity-vs-stability-in-algorithm-tuning",
    description: "Choosing the right penalty for robust model weights."
  },
  {
    title: "Learning Rate Decay Schedules: Optimizing Convergence in Kharadi Tech Hubs",
    slug: "learning-rate-decay-schedules-optimizing-convergence-in-kharadi-tech-hubs",
    description: "Strategies for dynamic adjustment of the optimizer's stride."
  },
  {
    title: "Monitoring Loss Curves: Early Warning Signs of Divergence",
    slug: "monitoring-loss-curves-early-warning-signs-of-divergence",
    description: "Identifying training failures before they waste GPU credits."
  },
  {
    title: "Precision vs Recall Tuning: Optimizing Hyperparameters for Business ROI",
    slug: "precision-vs-recall-tuning-optimizing-hyperparameters-for-business-roi",
    description: "Aligning technical metrics with enterprise value."
  },
  {
    title: "Structuring Dropout Layers: Strategies to Prevent Overfitting in Production",
    slug: "structuring-dropout-layers-strategies-to-prevent-overfitting-in-production",
    description: "Ensuring robustness in complex neural networks."
  },
  {
    title: "The Role of Momentum in Gradient Descent: Accelerating Neural Training",
    slug: "the-role-of-momentum-in-gradient-descent-accelerating-neural-training",
    description: "Dampening oscillations and speeding up the path to minima."
  },
  {
    title: "The Vanishing Gradient Problem: Architectural Fixes for Deep Networks",
    slug: "the-vanishing-gradient-problem-architectural-fixes-for-deep-networks",
    description: "Overcoming the fundamental limit of backpropagation."
  },
  {
    title: "Transfer Learning Architecture: Fine-Tuning Hyperparameters for Niche Tasks",
    slug: "transfer-learning-architecture-fine-tuning-hyperparameters-for-niche-tasks",
    description: "Maximizing the utility of pre-trained weights."
  },
  {
    title: "Weight Initialization Patterns: Preventing Gradient Explosion",
    slug: "weight-initialization-patterns-preventing-gradient-explosion",
    description: "The science of setting the initial state for stable training."
  }
];

export default function ArticlesIndex() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          NeuroMatrix Knowledge Hub
        </h1>
        <p className="text-xl text-muted-foreground">
          Deep dives into hyperparameter optimization, neural architecture, and enterprise ML tuning.
        </p>
      </div>

      <AdSlot variant="leaderboard" className="mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 6).map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`}>
            <Card className="h-full hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="line-clamp-3">{article.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <AdSlot variant="banner" className="my-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(6, 12).map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`}>
            <Card className="h-full hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="line-clamp-3">{article.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <AdSlot variant="banner" className="my-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(12).map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`}>
            <Card className="h-full hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="line-clamp-3">{article.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <AdSlot variant="skyscraper" className="mt-12" />
    </div>
  );
}
