---
tags:
  - reinforcement-learning
  - dqn
  - deep-learning
  - trading
created: 2026-04-21
---

# DQN (Deep Q-Network)

Le DQN (Deep Q-Network) constitue une percée fondamentale en [[Deep reinforcement learning]], combinant l'apprentissage par renforcement avec les réseaux de neurones profonds pour approximer la fonction de valeur action (Q-function). Introduit par Mnih et al. en 2015, le DQN a démontré des performances de niveau humain sur les jeux Atari, établissant un paradigme qui a ensuite été appliqué au trading algorithmique.

## Fondements théoriques

Le Q-learning traditionnel utilise une table pour stocker les valeurs Q pour chaque paire (état, action). Cette approche devient intractable pour des espaces d'états continus ou de grande dimension. Le DQN remplace la table par un réseau de neurones qui approximer la Q-function.

Le réseau prend un état en entrée et output une valeur pour chaque action possible. L'apprentissage utilise laregle de Bellman pour mettre à jour les poids du réseau : Q(s,a) <- r + γ max_a' Q(s',a'). La différence entre la Q-value prédite et la Q-value cible constitue l'erreur de loss à minimiser.

La stabilité de l'apprentissage est un défi majeur. Deux innovations techniques ont rendu le DQN stable : l'**experience replay** et le **target network**. L'experience replay stocke les transitions dans un buffer et les ré-utilise pour l'entraînement, brisant la corrélation temporelle entre les samples. Le target network est une copie congelée du réseau principal utilisée pour calculer les cibles, réduisant les correlations mobiles.

## Variantes et extensions

Le DQN originel a engendré de nombreuses variantes qui améliorent les performances. Le **Double DQN** sépare la sélection et l'évaluation de la meilleure action, réduisant la surévaluation (overestimation) des valeurs Q. Le **Dueling DQN** décompose la Q-function en une composante d'état (value function) et une composante d'action (advantage), permettant un apprentissage plus fin.

**Prioritized Experience Replay** échantillonne les transitions selon leur erreur TD (temporal difference), favorisant les transitions informatives. **Noisy Networks** remplace les poids déterministes par des bruits paramétrés, augmentant l'exploration. **Categorical DQN** (C51) représente les valeurs Q comme distributions de probabilité sur un support discret, capturant l'incertitude.

Le **Rainbow** combine les améliorations des variantes précédentes en un seul algorithme, démontrant des performances supérieures sur les benchmarks Atari. Ces techniques peuvent être appliquées au trading pour améliorer la qualité des apprentissages.

## Application au trading avec DQN

En trading, le DQN peut être utilisé pour apprendre des politiques de trading.optimales. L'état du marché est encodé comme vecteur de features (prix, indicateurs, positions), l'action est une décision de trading (acheter, vendre, maintenir), et la récompense est le profit ou la perte réalisés.

Les espaces d'actions discrets sont naturels pour les décisions de trading binaires ou discrètes. Pour des espaces continus comme la taille de position, des extensions comme le DDPG (Deep Deterministic Policy Gradient) ou le [[PPO]] sont preferables.

L'architecture du réseau peut utiliser des [[LSTM]] pour capturer les dépendances temporelles dans les données de prix. La profondeur du réseau et la taille des couches cachées doivent être ajustées selon la complexité de la tâche et la quantité de données disponibles.

Le choix de la fonction de récompense est critique. Une récompense immédiate (P&L de chaque transaction) peut être trop bruitée. Des récompenses composites incluant le risque, les coûts de transaction, et les aspects temporels peuvent produire des stratégies plus robustes.

## Considérations pratiques

L'entraînement de DQN pour le trading nécessite une infrastructure de simulation fiable. L'agent interagit avec un simulateur de marché qui reproduit les dynamiques de prix et les coûts de transaction. La qualité du simulateur influence directement laperformance de l'agent appris.

La **gestion du risque** doit être intégrée dans l'architecture ou la fonction de récompense. Sans constraints explicites, le DQN peut apprendre des stratégies à risque extrême pour maximiser le gain attendu. Les pénalité pour le drawdown, la volatilité, ou l'exposition sont des ajouts couramment utilisés.

Le **surapprentissage** est un risque majeur. Les marchés financiers sont non-stationnaires et les patterns du passé peuvent ne pas se répéter. La validation sur des périodes holdout et les tests en forward testing sont essentiels avant tout déploiement.

Les techniques de [[Model compression]] peuvent réduire la latence d'inférence, importante pour le trading haute fréquence. La [[Quantization]] et le pruning des réseaux permettent des exécutions plus rapides.

Voir aussi : [[Reinforcement learning]], [[Q-learning]], [[PPO]], [[Actor-critic]], [[Deep reinforcement learning]], [[LSTM]], [[Neural networks pour trading crypto]], [[Apprentissage par renforcement pour trading]], [[Backtesting]], [[Risk budgeting]]