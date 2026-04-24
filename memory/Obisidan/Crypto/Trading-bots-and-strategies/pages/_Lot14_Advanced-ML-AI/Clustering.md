---
tags:
  - clustering
  - unsupervised-learning
  - machine-learning
  - trading
created: 2026-04-21
---

# Clustering

Le clustering est une technique d'apprentissage non supervisé qui regroupe les observations en clusters cohérents selon leurSimilarité. En trading algorithmique, le clustering peut identifier des segments de marché, des regimes de trading, et des groups d'instruments avec des comportements similaires.

## Principes fondamentaux

Le clustering partitionne un ensemble de données en groups (clusters) tels que les observations au sein d'un même cluster sont plus similaires entre elles qu'aux observations des autres clusters. La mesure deSimilarité (distance) dépend du type de données et de l'application.

Les algorithmes de clustering diffèrent dans leur approche. Le **K-means** partitionne les données en K clusters en minimisant la somme des distances quadratiques aux centroids. Le **DBSCAN** identifie les clusters comme des régions denses séparées par des régions de faible densité. Le **Hierarchical clustering** construit une hiérarchie de clusters emboîtés.

La validation des clusters utilise des métriques comme le **silhouette score** (cohésion interne vs séparation externe), le **Calinski-Harabasz index**, ou le **Davies-Bouldin index**. Ces métriques aident à choisir le nombre optimal de clusters.

## Application au trading

Le clustering des **conditions de marché** identifie les régimes (trending, ranging, volatile) sans supervision explicite. Chaque cluster représente un état different du marché qui peut requerirdifferent stratégies de trading.

Le clustering d'**instruments financiers** groupe les actifs avec des comportements similaires. Les stratégies de [[Pairs trading]] identifient les paires avec une relation stable pour le mean reversion. Le clustering peut identifier des groups d'instruments pour le risk management.

Le clustering de **patterns de prix** identifie les configurations graphiques récurrentes. Les chandeliers japonais (candlesticks) peuvent être clusterisés pour identifier les patterns qui précedent certains mouvements.

Le clustering de **comportements de trading** segmente les traders ou les stratégies selon leurs caractéristiques. Cette segmentation peut informer le design de produits ou l'allocation de capital entre stratégies.

## Techniques avancées

Les **méthodes à base de densité** comme DBSCAN et HDBSCAN gèrent bien les clusters de forme arbitraire et identifient automatiquement le nombre de clusters. Elles sont robustes aux outliers mais sensibles aux hyperparamètres de densité.

Les **Gaussian Mixture Models (GMM)** modélisent les données comme un mélange de gaussiennes. GMM fournit des probabilités d'appartenance aux clusters plutôt que des appartenances dures, permettant une allocation soft du capital entre stratégies.

Le **spectral clustering** utilise les eigenvectors d'une matrice de similarité pour trouver les clusters. Cette méthode peut identifier des clusters non-convexes que K-means ne peut pas capturer.

Les méthodes basées sur les **graphes** comme le spectral clustering et le community detection peuvent être utilisées pour analyser les relations entre instruments ou entre traders sur les réseaux sociaux.

## Intégration avec les stratégies

Les clusters peuvent informer le **position sizing** : les positions dans des clusters plus stables ou plus prévisibles peuvent avoir des tailles plus grandes. Les clusters volatiles ou incertains bénéficient de positions réduites.

Le **risk management** peut utiliser les clusters pour la diversification. Une position dans un cluster déjà bien représenté dans le portfolio ajoute moins de diversification qu'une position dans un cluster underrepresented.

La **sélection de stratégies** peut être adaptée au cluster courant du marché. Les stratégies de mean reversion performent mieux dans les marchés range-bound, tandis que les stratégies de momentum performent mieux dans les marchés trending.

Les techniques de [[Feature engineering]] créent des features pour le clustering à partir des données brutes. Les indicateurs techniques, les métriques de volatilité, et les features de sentiment peuvent être combinés pour une segmentation plus riche.

La [[Dimensionality reduction]] comme [[PCA]] peut être appliquée avant le clustering pour réduire le bruit et accélérer les calculs sur des données de haute dimension.

Voir aussi : [[Dimensionality reduction]], [[PCA]], [[Autoencoders]], [[Anomaly detection]], [[Pairs trading]], [[Risk management]], [[Feature engineering]], [[Sentiment analysis pour trading]]