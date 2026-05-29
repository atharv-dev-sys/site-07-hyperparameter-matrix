import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neuromatrix-tuning.com'
  const lastModified = new Date()

  const articleSlugs = [
    'activation-function-evolution-from-sigmoid-to-gelu-and-beyond',
    'automated-machine-learning-(automl)-the-future-of-tuning-in-pune',
    'batch-size-dynamics-scaling-machine-learning-operations-in-pune',
    'comparing-adam-vs.-sgd-which-optimizer-wins-for-computer-vision',
    'future-proofing-neural-architectures-modular-tuning-for-2027-models',
    'hyperparameter-tuning-at-scale-enterprise-workflows-in-kharadi',
    'l1-vs-l2-regularization-sparsity-vs-stability-in-algorithm-tuning',
    'learning-rate-decay-schedules-optimizing-convergence-in-kharadi-tech-hubs',
    'monitoring-loss-curves-early-warning-signs-of-divergence',
    'precision-vs-recall-tuning-optimizing-hyperparameters-for-business-roi',
    'structuring-dropout-layers-strategies-to-prevent-overfitting-in-production',
    'the-role-of-momentum-in-gradient-descent-accelerating-neural-training',
    'the-vanishing-gradient-problem-architectural-fixes-for-deep-networks',
    'transfer-learning-architecture-fine-tuning-hyperparameters-for-niche-tasks',
    'weight-initialization-patterns-preventing-gradient-explosion'
  ]

  const articles = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...articles,
  ]
}
