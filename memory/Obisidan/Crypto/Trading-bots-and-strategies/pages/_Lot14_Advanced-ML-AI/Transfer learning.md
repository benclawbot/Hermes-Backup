---
tags:
  - transfer-learning
  - deep-learning
  - trading
created: 2026-04-21
---

# Transfer Learning

Le transfer learning désigne l'ensemble des techniques permettant de réutiliser les connaissances acquises sur une tâche source pour améliorer l'apprentissage sur une tâche cible apparentée. En trading algorithmique, le transfer learning permet de réduire significativement les besoins en données et en ressources de calcul pour développer des stratégies sur de nouveaux instruments ou marchés.

## Principes fondamentaux

Le transfer learning repose sur l'idée que les representations apprises sur une tâche peuvent être utiles pour une autre tâche. Les features de bas niveau appris par un réseau de neurones (edges, textures) sont souvent Transferables entre tâches similaires.

Le transfer learning est particulièrement efficace lorsque la tâche source a plus de données disponibles que la tâche cible. Les grands modèles de langage pré-entraînés sur des corpus massifs bénéficient du transfer learning pour des tâches spécifiques avec peu de données.

La **négative transfer** se produit lorsque les connaissances transférées nuisent aux performances sur la tâche cible. Cela se produit lorsque les tâches sont trop différentes ou lorsque le transfert est mal mis en œuvre.

Les approches incluent le **feature transfer** (utiliser les representations apprises comme features), le **parameter transfer** (affiner les poids d'un modèle pré-entraîné), et le **relational transfer** (transférer des relations apprises entre concepts).

## Application au trading

Le transfer learning permet de **transférer des stratégies entre instruments**. Un modèle entraîné sur les données historiques du BTC/USD peut être adapté à l'ETH/USD avec moins de données car les patterns fondamentaux du marché des cryptomonnaies sont similaires.

La **migration entre fréquences de trading** utilise des représentations apprées sur des données haute fréquence pour des stratégies plus lentes. Les patterns de liquidité et de microstructure sont souvent Transferables.

Le transfer learning du **texte au trading** utilise des modèles de langage pré-entraînés ([[BERT for trading]], [[GPT for trading]]) pour l'analyse de sentiment financier. Les representations du langage général sont affinées sur des données financières spécifiques.

Les modèles de [[Deep reinforcement learning]] peuvent transfers their politiques entre environnements similaires. Un agent entraîné au market making sur un exchange peut être adapté à un autre avec moins d'entraînement.

## Techniques de transfer learning

Le **fine-tuning** remplace les dernières couches du réseau pré-entraîné et réentraîne l'ensemble sur les données de la tâche cible. Les premières couches (qui capturent des features génériques) conservent leurs poids ou sont ajustées plus lentement.

Le **feature extraction** gèle les poids des premières couches et n'entraîne que les dernières couches sur la nouvelle tâche. Cette approche est plus rapide et nécessite moins de données mais peut être moins performante si les features de base ne sont pas adaptées.

Le **multi-task learning** entraîne un modèle partageant des representations sur plusieurs tâches simultanément. Les tasks cooperent pour apprendre des représentations plus robustes.

Le **domain adaptation** adapte un modèle d'un domain (source) à un autre (target) avec des distributions différentes. Les techniques incluent l'adaptation de la distribution des features ou l'utilisation de domaines invariants.

## Meilleures pratiques

Le choix du modèle source doit être fait avec soin. Un modèle source provenant d'une tâche ou d'un domaine proche de la cible produira un transfert plus efficace. La validation de la compatibility est importante.

Le learning rate pour le fine-tuning est généralement plus faible que pour l'entraînement from scratch. Un learning rate warmup suivi d'une decay est couramment utilisé. Les premières couches peuvent bénéficier d'un learning rate encore plus faible (differential learning rates).

La [[Data preprocessing]] doit être cohérente entre le domaine source et le domaine cible. Les features doivent être normalisées de manière similaire pour que les representations appris soient applicables.

La surveillance du transfert est importante. Si les performances sur la tâche cible se dégradent au lieu de s'améliorer, le transfer learning peut être contre-productif. La rollback vers un modèle non transféré peut être nécessaire.

Voir aussi : [[BERT for trading]], [[GPT for trading]], [[Deep reinforcement learning]], [[Neural architecture search]], [[Feature engineering]], [[Continual learning]], [[Model distillation]], [[Ensemble methods]]