---
tags:
  - pca
  - dimensionality-reduction
  - machine-learning
  - trading
created: 2026-04-21
---

# PCA (Analyse en Composantes Principales)

L'Analyse en Composantes Principales (PCA) constitue la méthode de réduction de dimensionnalité la plus utilisée. Elle projette les données sur un axes orthogonal qui capturent la variance maximale, permettant de réduire la dimension tout en conservant l'information essentielle.

## Fondements mathématiques

La PCA trouve les directions (composantes principales) le long desquelles la variance des données est maximale. Ces directions sont les eigenvectors de la matrice de covariance des données, ordonnés par eigenvalue décroissant.

La première composante principale capture la direction de variance maximale. La deuxième composante capture la variance restante dans une direction orthogonale à la première, et ainsi de suite. Les premières k composantes peuvent représenter l'essentiel de l'information avec k << n dimensions originales.

La transformation des données sur les composantes principales équivaut à une projection sur un sous-espace de dimension réduite. La reconstruction des données originales à partir des composantes sélectionnées introduit une erreur de reconstruction proporcionale à la variance des composantes exclues.

Le choix du nombre de composantes peut être fait par analyse de la variance expliquée cumulée (souvent 90-95% de la variance totale) ou par validation sur une tâche en aval.

## Application au trading

En trading, le PCA peut réduire la dimension des **indicateurs techniques** hautement corrélés. Par exemple, 10 moyennes mobiles avec différentes périodes peuvent être réduit à 2-3 composantes qui capturent l'essentiel de l'information de tendance.

Les **portfolios de nombreux actifs** peuvent être optimisés en analysant les composantes principales des rendements. Les premiers factors (market, size, value) expliquent une grande partie de la variance, simplifiant l'allocation.

L'analyse de la **structure du marché** utilise le PCA pour identifier les facteurs de risque communs. Les loads sur les composantes principales révèlent comment les différents instruments réagissent aux facteurs de marché.

La réduction de dimension pour les **modèles de prédiction** permet d'utiliser des algorithmes plus simples et plus robustes. Les modèles entrenés sur les composantes principales sont moins sujets au [[Overfitting]].

## Considérations pratiques

Le PCA suppose que les directions de haute variance sont informatives. En trading, cela peut être vrai pour les facteurs de risque mais pas nécessairement pour la prédiction de rendements. La validation sur une tâche de prédiction est importante.

La **normalisation des données** est requise avant le PCA car les variables avec des échelles plus grandes domineront la variance. La standardisation (z-score) est la méthode preferée.

Le PCA est **linéaire** et ne capture pas les relations non linéaires. Pour des relations complexes entre variables, les [[Autoencoders]] ou les méthodes de manifold peuvent être plus appropriés.

L'interprétation des composantes peut être difficile lorsqu'elles sont des combinaisons linéaires de nombreuses variables. La rotation Varimax peut améliorer l'interprétabilité au prix d'une variance un peu moins optimisée.

## Intégration dans les systèmes de trading

Le PCA peut être intégré dans le pipeline de [[Data preprocessing]] pour réduire les features avant l'entraînement des modèles. La transformation apprise sur les données d'entraînement doit être appliquée de manière consistente aux données de test et de production.

Pour le [[Risk management]], le PCA informe la construction de portfolios diversifiés. Les positions sur des composantes non corrélées offrent une diversification naturelle.

Les techniques de [[Feature engineering]] peuvent utiliser les composantes principales comme features. Les modèles [[LSTM]] ou [[Transformer]] peuvent bénéficier de representations plus compactes.

Le [[Model compression]] peut être vu comme une forme de réduction de dimensionnalité appliquée aux poids des réseaux plutôt qu'aux features d'entrée.

Voir aussi : [[Dimensionality reduction]], [[Autoencoders]], [[Feature engineering]], [[Data preprocessing]], [[Risk management]], [[Clustering]], [[Anomaly detection]], [[Transfer learning]]