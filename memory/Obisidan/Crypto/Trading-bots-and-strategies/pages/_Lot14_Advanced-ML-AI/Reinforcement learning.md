---
tags:
  - reinforcement-learning
  - machine-learning
  - trading
created: 2026-04-21
---

# Apprentissage par renforcement (Reinforcement Learning)

L'apprentissage par renforcement (RL) constitue un paradigme de machine learning où un agent apprend à prendre des décisions optimales par interaction avec un environnement. Contrairement à l'apprentissage supervisé où le modèle apprend de exemplos labellisés, le RL repose sur l'expérience et les récompenses. En trading algorithmique, le RL offre un cadre naturel pour développer des stratégies qui s'adaptent dynamiquement aux conditions changeantes du marché.

## Cadre conceptuel

Le RL se formalise via le cadre des **Processus de Décision Markoviens (MDP)**. Un MDP est défini par un quadruplet (S, A, P, R) : l'ensemble des états S, l'ensemble des actions A, la fonction de transition P(s'|s,a) qui donne la probabilité de passer à l'état s' depuis s en réalisant a, et la fonction de récompense R(s,a) qui mesure la qualité de l'action.

L'agent cherche à maximiser la **retour accumulé** (cumulative return) sur le temps, souvent formalisé comme l'espérance de la somme pondérée des récompenses futures avec un facteur de discount gamma. La politique pi(a|s) détermine la probabilité de choisir chaque action dans chaque état. L'objectif est de trouver la politique optimale pi* qui maximise la retour attendue.

En trading, les états peuvent représenter les conditions de marché (prix, volatilité, indicateurs), les actions sont les décisions de trading (acheter, vendre, maintenir), et les récompenses sont les profits ou pertes réalisés.

## Algorithmes principaux

Le RL englobe plusieurs familles d'algorithmes. Les méthodes **model-free** apprennent directement la politique ou la fonction de valeur sans建模 du monde. **Q-Learning** et **SARSA** sont des algorithmes de base qui apprennent une fonction de valeur action (Q-function). **Policy gradient** methods comme REINFORCE optimisent directement la politique par différenciation.

Les méthodes **actor-critic** combinent les avantages des policy gradient et des value-based methods en utilisant deux réseaux : un acteur (policy network) et un critique (value network). Cette architecture stabilise l'apprentissage et est à la base d'algorithmes modernes comme [[PPO]].

Les algorithmes **model-based** construisent d'abord un modèle de l'environnement (fonction de transition et récompense) avant de planifier. Ces méthodes peuvent être plus sample-efficient mais sont plus complexes à implémenter.

## Applications en trading

Le trading constitue un terrain d'application naturel pour le RL. Les marchés financiers presentent un environnement partiellement observable, stochastique, et non-stationnaire qui défie les approches traditionnelles. Le RL permet de learn des stratégies complexes qui seraient difficiles à coder manuellement.

Les problèmes traités incluent la **gestion de portefeuille** (allocation d'actifs optimale), le **market making** (optimisation des prix bid/ask), et la **trade execution** (minimisation de l'impact de marché). Les états peuvent inclure les prix historiques, les indicateurs techniques, le carnet d'ordres, et même des données exogènes comme les actualités.

Les travaux fondateurs incluent les études de Nevmyvaka et al. sur le RL pour l'exécution d'ordres, et les recherches plus récentes sur les [[DQN]] et [[PPO]] pour le trading de cryptomonnaies. Les agents RL ont démontré leur capacité à apprendre des stratégies rentables sur des benchmarks comme le trading de cryptomonnaies.

## Défis et bonnes pratiques

Le RL en trading présente des défis spécifiques. La **rareté des récompenses** (sparse rewards) est fréquente : les feedback négatifs ne arrivent qu'après de nombreuses décisions. Des techniques comme la récompense shapley ou le hindsight experience replay aident à缓解 ce problème.

La **non-stationnarité** du marché signifie que les patterns appris peuvent ne plus être valides dans le futur. Des stratégies comme le continual learning et l'adaptation en ligne sont nécessaires. Lavalidation des stratégies RL requiert une attention particulière pour éviter le surapprentissage aux conditions passées.

La gestion du risque est cruciale et doit être intégrée dans la fonction de récompense ou via des contraintes explicites. Les [[Risk limits and circuit breakers]] doivent être implémentées pour éviter les pertes catastrophiques pendant l'apprentissage ou l'exécution.

Les techniques de [[Feature engineering]] sont importantes pour représenter efficacement les états du marché. La combinaison de données de prix, d'indicateurs techniques, et de variables exogènes peut améliorer significativement les performances.

Voir aussi : [[Deep reinforcement learning]], [[DQN]], [[Q-learning]], [[PPO]], [[Actor-critic]], [[Monte Carlo tree search]], [[Apprentissage par renforcement pour trading]], [[Neural networks pour trading crypto]], [[Backtesting]], [[Risk budgeting]]