---
tags:
  - continual-learning
  - machine-learning
  - trading
created: 2026-04-21
---

# Continual Learning

Le continual learning (apprentissage continu) désigne la capacité d'un système à apprendre progressivement de nouvelles tâches ou connaissances sans oublier les connaissances précédentes. Pour les systèmes de trading algorithmique, cette capacité est essentielle car les marchés évoluent constamment et les stratégies doivent s'adapter aux nouvelles conditions.

## Défis fondamentaux

Le **catastrophic forgetting** est le problème central du continual learning. Lorsqu'un réseau de neurones est entraîné sur une nouvelle tâche, il tends à écraser les connaissances acquises sur les tâches précédentes. Pour un système de trading, cela signifierait oublier les patterns de marché passés au profit des patterns récents.

La plasticité et la stabilité sont en tension. Un système doit être assez plastique pour apprendre de nouveaux patterns mais assez stable pour conserver les connaissances existantes. Cet équilibre est particulièrement difficile dans les marchés financiers où les conditions changent continuellement.

La **distribution shift** caractérise les données financières : la distribution des prix, de la volatilité, et des correlations change over time. Un modèle entraîné sur des données passées peut ne plus être valide dans les conditions actuelles.

Le **concept drift** désigne les changements dans la relation entre les features et les targets. Les patterns qui étaient prédictifs peuvent cesser de l'être, et de nouveaux patterns peuvent émerger.

## Stratégies d'apprentissage continu

Les méthodes **regularization-based** ajoutent des termes à la fonction de perte qui préservent les poids importants pour les tâches précédentes. EWC (Elastic Weight Consolidation) pénalise les changements de poids qui étaient cruciaux pour les tâches passées.

Les méthodes **replay-based** conservent des échantillons des tâches précédentes et les mélangent avec les données des nouvelles tâches. L'experience replay permet au réseau de se réentraîner sur des exemples passés tout en apprenant les nouveaux.

Les méthodes **architectural-based** allouent des parties du réseau à différentes tâches. Les réseaux partitionnés réservent des neurones pour chaque tâche, tandis que les réseaux progressives ajoutent de nouvelles colonnes pour les nouvelles tâches.

Les méthodes **knowledge distillation** transfèrent les connaissances du modèle ancien vers le nouveau via la distillation. Le nouveau modèle apprend à match les prédictions de l'ancien en plus des labels réels, préservant les anciennes connaissances.

## Application au trading

Le continual learning permet aux systèmes de trading de **s'adapter aux nouveaux regimes de marché**. Un système entraîné pendant une période baissière peut apprendre les patterns d'une période haussière sans perdre la capacité de reconnaître les patterns baissiers.

La mise à jour des modèles de [[Sentiment analysis pour trading]] avec les nouveaux termes à la mode, les nouveaux acteurs, et les nouvelles formes de communication sur les réseaux sociaux bénéficie du continual learning.

L'adaptation aux **nouveaux instruments** peut utiliser le transfer learning depuis des instruments similaires. Un modèle de trading pour BTC peut être adapté à un nouveau altcoin avec une mise à jour continue.

Les systèmes de [[Anomaly detection]] doivent maintenir leur capacité à détecter les anomalies historiques tout en s'adapter aux nouvelles formes d'anomalies. Le continual learning permet cette adaptation sans dégradation des performances passées.

## Considérations pratiques

La gestion du buffer de données est cruciale. Conserver trop de données passés augmente les besoins en mémoire. Conserver trop peu mène à un oubli accéléré. Des politiques de conservation comme la Prioritized Experience Replay optimisent ce compromis.

La validation doit être continue pour détecter le forgetting. Des tests périodiques sur des données de référence des tâches passées permettent de monitorer la rétention des connaissances.

Les [[Risk limits and circuit breakers]] doivent rester actives pendant l'apprentissage pour éviter que des modèles en adaptation ne prennent des risques excessifs. L'apprentissage ne devrait pas compromettre la stabilité du système.

L'infrastructure de calcul doit supporter l'entraînement continu. La [[Cloud infrastructure]] peut fournir les ressources nécessaires pour des mises à jour fréquentes sans interrompre les opérations de trading.

Voir aussi : [[Transfer learning]], [[Model distillation]], [[Deep reinforcement learning]], [[Anomaly detection]], [[Feature engineering]], [[Risk management]], [[Backtesting]], [[Neural networks pour trading crypto]]