---
tags:
  - reinforcement-learning
  - actor-critic
  - deep-learning
  - trading
created: 2026-04-21
---

# Actor-critic

L'architecture actor-critic constitue une famille de méthodes en [[Deep reinforcement learning]] qui combine deux composants complémentaires : un **acteur** (policy network) qui sélectionne les actions, et un **critique** (value network) qui évalue la qualité des actions entreprises. Cette combinaison exploite les avantages des méthodes basées sur la valeur et celles basées sur la politique pour stabiliser et accélérer l'apprentissage.

## Principes fondamentaux

L'acteur propose des actions étant donné l'état courant, suivant une politique paramétrée par un réseau de neurones. Le critique évalue la valeur de l'état courant ou la qualité de l'action entreprise en estimant la return attendue. La différence entre les deux est calculée via l'**avantage** (advantage), qui indique dans quelle mesure une action est meilleure ou pire que la moyenne des actions possibles dans cet état.

Pendant l'apprentissage, l'acteur est mis à jour pour увеличить la probabilité des actions qui mènent à des avantages positifs. Le critique est mis à jour pour améliorer ses estimations de valeur. Cette séparation permet un apprentissage plus stable : le critique fournit un baseline qui réduit la variance des estimations de gradient.

Il existe plusieurs variantes de l'architecture actor-critic. **A2C** (Advantage Actor-Critic) utilise des mises à jour synchrones avec plusieurs agents. **A3C** (Asynchronous Advantage Actor-Critic) utilise des mises à jour asynchrones pour une meilleure exploration. **SAC** (Soft Actor-Critic) ajoute une максимизация de l'entropie pour encourager l'exploration. **[[PPO]]** (Proximal Policy Optimization) et **[[TD3]]** (Twin Delayed DDPG) sont des variantes modernes qui améliorent la stabilité et les performances.

## Application au trading algorithmique

En trading, l'acteur-critic offre un cadre naturel pour apprendre des stratégies complexes. La politique (acteur) peut décider quand acheter, vendre, ou maintenir une position. Le critique évalue si ces décisions mènent à de bons résultats à long terme.

Les états du marché peuvent être représentés par des séries temporelles de prix, des indicateurs techniques, ou des données de sentiment. L'acteur-critic peut apprendre à intégrer ces informations multiples pour prendre des décisions cohérentes avec les objectifs de trading.

La fonction de récompense peut être conçue pour refléter les objectifs du trader : profit financier, contrôle du risque, minimisation des coûts de transaction. Le critique aide à propagated les récompenses delayed à travers le temps pour que l'acteur comprenne l'impact de ses décisions passées.

Les architectures modernes utilisent des [[LSTM]] ou des [[Transformer]] dans l'acteur et le critique pour capturer les dépendances temporelles. Les mécanismes d'attention peuvent aider à identifier les moments passés les plus pertinents pour la décision actuelle.

## Implémentation technique

L'architecture réseau pour l'acteur et le critique peut être séparée ou partagée. Les architectures partagées permettent d'apprendre des représentations utiles pour les deux composants. L'acteur output généralement une distribution de probabilité sur les actions (policy), tandis que le critique output une estimation scalaire de la valeur.

L'apprentissage utilise typiquement des buffers d'expérience pour échantillonner des transitions passées. Le ratio de политики (policy ratio) dans [[PPO]] limite les изменения de politique pour éviter les collapses de performance. Le gradient clipping est utilisé pour éviter l'instabilité numériqque.

La gestion du risque peut être intégrée via la récompense ou via des contraintes sur la politique. Un terme de pénalité pour le drawdown ou la volatilité peut être ajouté à la fonction de récompense. Des contraintes hard sur les positions maximales et l'exposition peuvent être enforceées par conception.

## Défis et solutions

La stabilisation de l'apprentissage actor-critic reste un défi. Les techniques incluent le gradient clipping, la normalisation des entrées, et l'utilisation de réseaux cibles (target networks). La variance des estimations peut être réduite en utilisant des estimates de avantage avec Гамма et lambdareturn.

Le problème de la distribution non-stationnaire arise car la politique change pendant l'apprentissage, modifiant la distribution des états visités. Les méthodes like [[PPO]] addressent ce problème en limitant les changements de politique.

Pour le trading, la validation des agents actor-critic nécessite des protocoles rigoureux. Le backtesting sur des périodes hors échantillon est essentiel. Les stratégies doivent être testées sur des données non vues pendant l'entraînement pour éviter le surapprentissage.

Les techniques de [[Model compression]] peuvent réduire la taille des réseaux et accélérer l'inférence, important pour le trading haute fréquence. La [[Quantization]] et le pruning sont des techniques couramment utilisées.

Voir aussi : [[PPO]], [[DQN]], [[Reinforcement learning]], [[Deep reinforcement learning]], [[Q-learning]], [[LSTM]], [[Neural networks pour trading crypto]], [[Apprentissage par renforcement pour trading]], [[Backtesting]], [[Risk budgeting]]