---
tags:
  - data-preprocessing
  - machine-learning
  - trading
created: 2026-04-21
---

# Data Preprocessing

Le preprocessing des données constitue l'ensemble des transformations appliquées aux données brutes avant leur utilisation pour l'entraînement ou l'inférence des modèles de machine learning. En trading algorithmique, un preprocessing adéquat est fondamental car les données financières sont souvent bruitées, incomplètes, et non stationnaires.

## Nettoyage des données

Le **traitement des valeurs manquantes** est fréquent en trading. Les données de prix peuvent avoir des gaps pendant les weekends, les jours fériés, ou les pannes d'API. Les stratégies de traitement incluent le forward filling (utiliser la dernière valeur connue), l'interpolation, ou l'exclusion des periods avec données manquantes.

La **détection et traitement des outliers** est importante. Les crashs de marché, les flash crashes, et les erreurs de données créent des valeurs aberrantes qui peuvent strongly influencer les modèles. Les méthodes incluent le clipping (limitation des valeurs à un percentile), la winsorisation, ou l'exclusion pure et simple des observations aberrantes.

La **validation de la qualité des données** vérifie l'intégrité des series temporelles. Les sauts de prix anormaux, les volumes négatifs, et les timestamps incohérents doivent être identifiés et corrigés. Les données de sources multiples peuvent être cross-vérifiées pour détecter les inconsistencies.

## Normalisation et transformation

La **standardisation** (z-score normalization) centre les données autour de zéro avec un écart-type de 1. Cette transformation est importante pour les algorithmes sensibles à l'échelle comme les réseaux de neurones et la régression linéaire.

La **normalisation Min-Max** ramène les valeurs dans un intervalle fixe, typiquement [0, 1]. Cette approche préserve les relations relatives mais est sensible aux outliers. Elle est utilisée pour les algorithmes qui benefit d'entrées bornées.

La **transformation logarithmique** est couramment utilisée pour les prix et les rendements. Elle réduit l'impact des grands changements absolus et symmetrize la distribution des rendements. Pour les données positives seulement, le log transforme les multiplicative relations en additives.

Le **détrending** enlève les tendances déterministes des séries temporelles. Cela peut être fait par différenciation (r_t = p_t - p_{t-1}) ou par régression d'une tendance linéaire. La stationnarité resultante est une hypothèse de beaucoup de modèles de séries temporelles.

## Segmentation temporelle

Le **split train/validation/test** doit respecter la temporalité pour éviter la fuite de données. En trading, on utilise typiquement un split chronologique : données anciennes pour l'entraînement, données récentes pour la validation, et données encore plus récentes pour le test.

Le **windowing** pour les modèles séquentiels crée des séquences d'observations passées pour prédire le futur. La longueur de la fenêtre doit être choisie en fonction de la fréquence de trading et des patterns temporels visés.

La **granularité des données** doit correspondre à l'horizon de la stratégie. Le trading haute fréquence utilise des données tick ou seconde. Le swing trading utilise des données horaires ou quotidiennes. La aggregation ou la désaggregation doit preserves les patterns pertinents.

## Gestion du bruit

Le **lissage** des données de prix peut réduire le bruit de haute fréquence. Les moyennes mobiles exponentielles (EWMA) et les filtres de Kalman sont utilisés pour extraire le signal sous-jacent.

La **décomposition en tendance et volatilité** permet de modeler séparément les différents composants des séries temporelles. La volatilité conditionnelle (comme dans les modèles GARCH) est particulièrement importante pour le risque et les stratégies de mean reversion.

Les techniques de [[Dimensionality reduction]] comme [[PCA]] peuvent aussi servir à réduire le bruit en projeterant les données sur les directions de variance maximale. Les [[Autoencoders]] peuvent apprendre des representations compressées qui séparent le signal du bruit.

La [[Feature engineering]] suit souvent le preprocessing pour créer des features plus informatives à partir des données nettoyées. Les indicateurs techniques sont typiquement calculés sur les données prétraitées.

Voir aussi : [[Feature engineering]], [[Time series forecasting]], [[Anomaly detection]], [[Clustering]], [[PCA]], [[Autoencoders]], [[LSTM]], [[Dimensionality reduction]]