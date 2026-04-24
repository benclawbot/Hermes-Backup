---
tags:
  - reinforcement-learning
  - mcts
  - planning
  - trading
created: 2026-04-21
---

# Monte Carlo Tree Search (MCTS)

Le Monte Carlo Tree Search (MCTS) est un algorithme de planification utilisé pour la prise de décision dans des espaces de jeu complexes. Célèbre pour son rôle dans la victoire d'AlphaGo contre les champions de Go humains, le MCTS trouve des applications en trading algorithmique pour l'optimisation de stratégies et la gestion de portefeuille.

## Principes fondamentaux

Le MCTS construit itérativement un arbre de recherche en simulant des parties aléatoires (rollouts) depuis la position courante. L'algorithme alterne entre quatre phases : **sélection** (selection), **expansion** (expansion), **simulation** (simulation), et **rétropropagation** (backpropagation).

La sélection choisit le noeud enfant le plus prometteur selon une politique d'équilibrage exploration-exploitation. La formule UCT (Upper Confidence Bound for Trees) est couramment utilisée : UCT = Q(s,a)/N(s,a) + c * sqrt(ln(N(s))/N(s,a)), où Q est la valeur moyenne, N le nombre de visites, et c le paramètre d'exploration.

L'expansion ajoute un ou plusieurs noeuds enfants au noeud sélectionné. La simulation joue des parties aléatoires depuis le nouveau noeud jusqu'à un état terminal ou une profondeur maximale. La rétropropagation met à jour les statistiques des noeuds visités avec le résultat de la simulation.

Contrairement aux algorithmes minimax qui explorent exhaustivement l'arbre, le MCTS se concentre sur les branches les plus prometteuses grâce à sa politique de sélection, permettant de traiter des espaces de recherche intratables avec des méthodes traditionnelles.

## Application au trading algorithmique

Le MCTS peut être utilisé pour optimiser les décisions de trading dans des environnements complexes. La structure arborescente permet de représenter les différentes séquences d'actions et leurs conséquences potentielles.

Pour la **gestion de portefeuille**, le MCTS peut évaluer différentes allocations d'actifs en simulant des trajectoires de marché futures. L'algorithme peut intégrer des contraintes réalistes comme les coûts de transaction et les limites de position.

Dans le **trading automatique**, le MCTS peut être utilisé comme module de décision pour choisir quand entrer et sortir des positions. Chaque noeud de l'arbre représente un état du marché, et les branches représentent les actions possibles.

Le MCTS est particulièrement utile lorsque les modèles de transition du marché sont incertains ou incomplets. L'algorithme ne nécessite pas de modèle parfait : il apprend par simulation directe, ce qui le rend robuste aux imperfections du modèle.

## Intégration avec le deep learning

Les versions modernes de MCTS intègrent des réseaux de neurones profonds pour améliorer les performances. **AlphaZero** combine le MCTS avec un réseau de neurones qui guide la sélection et évalue les positions. Cette synergie entre la planification et l'apprentissage permet d'atteindre des niveaux de jeu surhumains.

En trading, cette approche hybride peut être utilisée pour apprendre des politiques de décision qui outperform les approches traditionnelles. Le réseau de neurones peut capturer des patterns complexes dans les données de marché, tandis que le MCTS assure une planification explicite.

Les [[Transformer]] et les [[LSTM]] peuvent être intégrés dans le pipeline pour améliorer la représentation des états et l'évaluation des positions. Les mécanismes d'attention peuvent aider à identifier les moments passés les plus pertinents pour les décisions actuelles.

## Considérations pratiques

Le choix des paramètres est crucial pour les performances du MCTS. Le facteur d'exploration c contrôle l'équilibre entre l'exploitation des branches connues et l'exploration de nouvelles branches. Une valeur trop basse mène à une exploitation excessive, une valeur trop haute à une exploration inefficace.

Le nombre de simulations et la profondeur maximale sont des compromis entre qualité et temps de calcul. Pour le trading temps réel, des contraintes de latence imposent des limites strictes. Des versions simplifiées du MCTS peuvent être nécessaires pour les applications haute fréquence.

La qualité du modèle de transition influence directement les performances. En trading, les simulateurs doivent capturer les caractéristiques importantes du marché : volatilité variable, corrélations, etfat tails des rendements.

Voir aussi : [[Reinforcement learning]], [[Deep reinforcement learning]], [[Actor-critic]], [[Neural networks pour trading crypto]], [[Risk budgeting]], [[Backtesting]], [[Feature engineering]], [[Anomaly detection]]