---
tags:
  - dimensionality-reduction
  - machine-learning
  - trading
created: 2026-04-21
---

# Dimensionality Reduction

La réduction de dimensionnalité désigne l'ensemble des techniques qui transforment des données de haute dimension en une representation de plus faible dimension tout en conservant les informations essentielles. En trading algorithmique, ces techniques sont cruciales pour gérer la multitude de features disponibles et éviter le surapprentissage.

## Motivation et enjeux

Le **fléau de la dimensionnalité** décrit comment les performances des modèles diminuent lorsque le nombre de features augmente relativement à la taille du dataset. Avec des features trop nombreuses, les modèles trouvent des correlations fallacieuses dans le bruit.

En trading, les données peuvent inclure des centaines d'indicateurs techniques, des métriques on-chain, des scores de sentiment, et des données macroéconomiques. La réduction de dimensionnalité permet de condenser cette information en representations plus parcimonieuses.

La **visualisation** devient possible avec des dimensions réduites (2D ou 3D). L'exploration visuelle des données et des clusters aide à comprendre les structures de marché et à identifier des patterns.

La **compression** des données réduit les besoins en stockage et accélère l'entraînement et l'inférence. Les modèles plus petits sont aussi plus faciles à déployer en production avec des contraintes de latence.

## Méthodes linéaires

L'**ACP (Analyse en Composantes Principales)** constitue la méthode la plus classique. Elle projette les données sur les axes de variance maximale, créant des composantes orthogonales non corrélées. Les premières composantes capturent l'essentiel de l'information avec moins de dimensions.

Le [[PCA]] est simple, interprétable, et optimal pour minimiser l'erreur de reconstruction sous contrainte de orthogonalité. Il suppose jednak que les directions de variance maximale sont les plus informatives, ce qui peut ne pas être vrai pour la prédiction.

La **PLS (Partial Least Squares)** et la **PCR (Principal Component Regression)** combinent la réduction de dimension avec la régression. Elles projettent les données sur des directions optimisées pour la tâche de prédiction plutôt que pour la variance.

L'**SVD (Singular Value Decomposition)** est une factorization matricielle utilisée dans banyak algorithmes de réduction de dimension. Elle fournit la base mathématique pour le PCA et appears dans de nombreux algorithmes de recommandation et de traitement du langage.

## Méthodes non linéaires

Les **méthodes de manifold** comme t-SNE et UMAP projettent les données de haute dimension sur des espaces de faible dimension en préservant les structures locales. Elles sont particulièrement utilisées pour la visualisation.

Le **t-SNE** (t-Distributed Stochastic Neighbor Embedding) est excellant pour préserver les distances locales et les clusters. Il est utilisé pour visualiser les embeddings de traders ou de stratégies dans un espace 2D.

L'**UMAP** (Uniform Manifold Approximation and Projection) est plus rapide que t-SNE et préserve mieux les structures globales. Il peut capturer des relations plus complexes entre les points.

Les **[[Autoencoders]]** apprennent une representation compressée via un réseau de neurones encodeur-décodeur. La couche centrale (bottleneck) constitue la representation de plus faible dimension. Cette approche capture des relations non linéaires complexes.

## Application en trading

La réduction de dimensionnalité est utilisée pour **combiner les indicateurs techniques** en composantes significatives. Les 20 indicateurs les plus populaires peuvent être réduit à 3-5 composantes principales qui capturent l'essentiel de l'information.

Pour le [[Sentiment analysis pour trading]], les vecteurs de mots de haute dimension peuvent être réductionnés à quelques dimensions pour être utilisés comme features dans les modèles de prédiction.

Les **features de marché** de haute dimension (profondeur du carnet d'ordres, historique de prix, indicateurs) peuvent être réduit pour accélérer les modèles tout en conservant le pouvoir prédictif.

L'intégration avec les [[Ensemble methods]] peut bénéficier de la réduction de dimension. Des modèles entraînés sur les composantes principales peuvent être combinés pour des performances robustes.

Les techniques de [[Feature engineering]] peuvent être informées par l'analyse des composantes principales, identifiant les transformations qui capturent le plus d'information.

Voir aussi : [[PCA]], [[Autoencoders]], [[Feature engineering]], [[Clustering]], [[Anomaly detection]], [[Transfer learning]], [[Model compression]], [[LSTM]]