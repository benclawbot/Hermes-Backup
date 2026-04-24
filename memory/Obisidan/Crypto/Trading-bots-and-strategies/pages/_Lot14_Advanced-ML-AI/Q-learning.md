---
tags:
  - reinforcement-learning
  - q-learning
  - tabular
  - trading
created: 2026-04-21
---

# Q-Learning

Le Q-Learning constitue l'un des algorithmes fondamentaux de l'[[Reinforcement learning]], permettant à un agent d'apprendre une politique optimale dans un environnement discret sans connaître le modèle de cet environnement (model-free). L'algorithme apprend une fonction de valeur action, la Q-function, qui estimer le retour attendu pour chaque paire état-action.

## Formalisme mathématique

La Q-function Q(s, a) représente la somme attendue des récompenses futures en commençant à l'état s, prenant l'action a, et suivant ensuite la politique optimale. L'équation de Bellman optimal caractérise la Q-function optimale :

Q*(s, a) = E[r + γ max_a' Q*(s', a')]

Cette équation montre que la valeur optimale d'une paire état-action est la récompense immédiate plus la valeur optimale de l'état suivant, discountée par le facteur γ. L'algorithme itère sur cette équation pour converger vers la Q-function optimale.

La mise à jour du Q-learning est :

Q(s, a) <- Q(s, a) + α [r + γ max_a' Q(s', a') - Q(s, a)]

où α est le taux d'apprentissage (learning rate). Cette règle met à jour la Q-value dans la direction de la TD-error (temporal difference error), qui représente la différence entre la valeur actuelle et la cible de Bellman.

## Table-based vs function approximation

L'implémentation originale du Q-learning utilise une table pour stocker les valeurs Q pour chaque paire état-action. Cette approche converge vers la politique optimale si toutes les paires état-action sont visitées infiniment souvent et le taux d'apprentissage diminue appropriée.

Pour des espaces d'états continus ou de grande dimension, l'approximation de la Q-function par un réseau de neurones est nécessaire. Le [[DQN]] (Deep Q-Network) constitue l'extension deep learning du Q-learning en remplaçant la table par un réseau profond. Les défis de stabilité sont addressés via l'experience replay et le target network.

En trading, les espaces d'états continus sont la norme : les prix, indicateurs, et autres features prennent des valeurs continues. L'approximation fonctionnelle est donc indispensable, rendant le DQN l'approche praticable pour la plupart des applications de trading.

## Application en trading algorithmique

Le Q-learning peut être adapté au trading de plusieurs manières. La discrétisation des espaces d'états continus permet d'utiliser l'algorithme table-based classique. Par exemple, les prix peuvent être discrétisés en intervalles et les indicateurs techniques en catégories (survendu, neutre, suracheté).

Les états peuvent représenter les conditions de marché observées, comme les derniers prix, les indicateurs techniques, et les positions actuelles. Les actions peuvent être les décisions de trading discrètes : comprar, vendre, maintenir. Les récompenses sont les profits ou pertes réalisés.

Pour les cryptomonnaies, le Q-learning peut apprendre des stratégies de trading sur des données historiques. L'agent apprend à identifier les patterns qui précedent des mouvements de prix favorables et à exécuter les transactions correspondantes.

## Limitations et extensions

Le Q-learning tabulaire suffers du **curse of dimensionality** : le nombre de states croît exponentiellement avec le nombre de features. Pour des problèmes avec plusieurs indicateurs de marché, le nombre d'états devient rapidement intraitable.

Le Q-learning avec approximation fonctionnelle (comme le DQN) peut échouer à converger dans certains cas en raison de la non-stationnarité des cibles. Les innovations comme le double Q-learning et le dueling architecture améliore la stabilité et les performances.

Le Q-learning est off-policy : il apprend la politique optimale indépendamment de la politique suivie pour explorer. Cette propriété permet l'utilisation de données Collected avec une politique différente (comme le random ou le soft), useful pour le démarrage avec un agent qui n'a pas encore appris de bonnes stratégies.

En pratique, les algorithmes actor-critic comme [[PPO]] sont souvent preferés pour le trading car ils traitent mieux les espaces d'actions continus et sont plus stables. Le Q-learning reste néanmoins un bon point de départ pédagogique et peut être compétitif pour des espaces d'états discrétisés.

Voir aussi : [[Reinforcement learning]], [[DQN]], [[Deep reinforcement learning]], [[PPO]], [[Actor-critic]], [[Monte Carlo tree search]], [[Apprentissage par renforcement pour trading]], [[Neural networks pour trading crypto]], [[Backtesting]], [[Feature engineering]]