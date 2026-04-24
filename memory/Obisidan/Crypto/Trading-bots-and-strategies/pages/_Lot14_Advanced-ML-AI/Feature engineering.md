---
tags:
  - feature-engineering
  - machine-learning
  - trading
created: 2026-04-21
---

# Feature Engineering

Le feature engineering constitue le processus de création de representations significatives des données pour les modèles de machine learning. En trading algorithmique, la qualité des features определяe souvent le succès ou l'échec d'une stratégie, car même les modèles les plus sophistiqués ne peuvent pas surpasser l'information contenue dans leurs entrées.

## Principes fondamentaux

Le feature engineering transforme des données brutes en representations mathématiquement utiles pour l'apprentissage. Les données financières brutes (prix, volumes) sont souvent peu informatives directement. La création de features qui capturent des patterns, des tendances, et des relations est essentielle.

Les features doivent capturer l'information prédictive disponible dans les données. Pour le trading, cela signifie créer des representations qui reflètent les dynamiques du marché : tendance, volatilité, momentum, mean reversion, et structures saisonnières.

La qualité des features se mesure à leur capacité à séparér les patterns rentables des fluctuations aléatoires. Les features avec un pouvoir prédictif faible introduisent du bruit et augmentent le risque de [[Overfitting]]. Les features très correlates entre elles peuvent créer de la multicolinéarité.

## Catégories de features pour le trading

Les **indicateurs techniques** constituent la base la plus commune. Les moyennes mobiles, le [[RSI Divergence strategy|RSI]], le [[MACD (Moving Average Convergence Divergence)|MACD]], les bandes de Bollinger, et les oscillateurs sont transformés en features numériques. Ces indicateurs capturent différents aspects de la dynamique des prix.

Les **features de prix** incluent les rendements logarithmiques, les variations en pourcentage, les rapports haut/bas/fermeture, et les rapports de volume. Les stats descriptives sur des fenêtres glissantes (moyenne, écart-type, skewness, kurtosis) capturent l'évolution de la distribution des rendements.

Les **features temporelles** encodent l'heure de la journée, le jour de la semaine, le mois, et les événements calendaires. Les marchés crypto ont des patterns de liquidité qui varient selon les heures et les jours.

Les **features de carnet d'ordres** incluent la profondeur, le bid-ask spread, leImbalance, et les ratios de volume bid/ask. Ces features capturent la structure de marché et la pression acheteuse/vendeuse.

Les **features de sentiment** issues du [[Sentiment analysis pour trading]] transforment les données textuelles en scores numériques. Les mentions sur les réseaux sociaux, les headlines d'actualités, et les rapports d'analystes peuvent être convertis en features de sentiment.

## Techniques de création

Le **lagging** des features crée des versions delayed des variables, permettant aux modèles de regarder le passé. Leswindow glissantes permettent de créer des séquences de features qui capturent l'évolution temporelle.

La **normalisation** et la **standardisation** alignent les échelles des features. Les réseaux de neurones sont particulièrement sensibles à l'échelle des entrées. La normalisation par z-score ou le min-max scaling sont couramment utilisés.

Les **interactions** entre features peuvent capturer des relations non linéaires. La multiplication ou la division de features peut créer des indicateurs composites comme le ratio prix/volume.

La **selection de features** identifie le sous-ensemble le plus informatif parmi les candidates. Les méthodes incluent l'analyse de corrélation, l'importance par permutation, et les techniques régularisées comme le Lasso.

## Validation et bonnes pratiques

La validation des features doit respecter la temporalité des données. Les features calculées sur des données futures ne doivent pas être incluses dans les ensembles d'entraînement pour éviter la fuite de données (data leakage).

L'analyse de la contribution individuelle des features aide à comprendre ce que le modèle apprend. Les techniques d'attribution comme SHAP peuvent identifier les features les plus importantes et détecter les dépendances inattendues.

La [[Data preprocessing]] appropriée inclut le traitement des valeurs manquantes, la detection des outliers, et la gestion des données anomalistes. Les [[Anomaly detection]] techniques peuvent identifier des périodes de marché inhabituelles où les features peuvent se comporter différemment.

Les techniques de [[Dimensionality reduction]] comme [[PCA]] peuvent réduire le nombre de features tout en conservant l'information pertinente, combattant le fléau de la dimensionnalité.

Voir aussi : [[Data preprocessing]], [[Time series forecasting]], [[Sentiment analysis pour trading]], [[LSTM]], [[PCA]], [[Anomaly detection]], [[Clustering]], [[Dimensionality reduction]]