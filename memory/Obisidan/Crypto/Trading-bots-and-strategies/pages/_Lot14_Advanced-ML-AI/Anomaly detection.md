---
tags:
  - anomaly-detection
  - machine-learning
  - trading
created: 2026-04-21
---

# Anomaly Detection

La détection d'anomalies identifie les observations qui s'écartent significativement du comportement normal. En trading algorithmique, les anomalies peuvent signaler des opportunités de marché, des events de liquidité, ou des comportements manipulatoires nécessitant une attention immédiate.

## Cadre conceptuel

Une anomalie est une observation qui ne соответствует pas au pattern attendu. Dans les marchés financiers, les anomalies peuvent être des **point anomalies** (valeurs individuelles aberrantes), des **contextual anomalies** (valeurs normales dans un contexte anormal), ou des **collective anomalies** (séquences de valeurs inhabituelles).

La détection d'anomalies peut être non supervisée (sans labels), semi-supervisée (avec labels normaux uniquement), ou supervisée (avec labels normaux et anormaux). Les méthodes non supervisées sont privilégiées car les anomalies sont rares et difficiles à labeliser.

Les applications en trading incluent la détection de **flash crashes**, de **rug pulls** dans les cryptomonnaies, de ** manipulations de prix**, et de **défaillances de données**. La détection précoce permet de protéger les positions et d'adapter les stratégies.

## Méthodes statistiques

Les **méthodes paramétriques** supposent une distribution connue (typiquement gaussienne) pour les données normales. Les points qui s'écartent de plusieurs écarts-types de la moyenne sont marqués comme anomalies. Ces méthodes sont simples mais sensibles à la假设 de distribution.

Les **méthodes non paramétriques** comme les histogrammes ou les noyau density estimation ne supposent pas de distribution explicite. Elles estiment la densité de probabilité des données et标记ent les régions de faible densité comme anomalies.

Les **modèles de séries temporelles** comme ARIMA capturent la structure temporelle des données. Les residuals (différences entre valeurs prédites et observées) sont analysés pour identifier les déviations inhabituelles. Les mouvements au-delà des bandes de prédiction sont des anomalies potentielles.

## Méthodes de machine learning

Les **[[Autoencoders]]** apprennent une représentation compressée des données normales. Pendant l'inférence, les anomalies ont une erreur de reconstruction plus élevée car elles ne соответствуют pas au patterns appris. Cette approche est particulièrement efficace pour les données financières multivariées.

Les **[[Clustering]]** methods comme le DBSCAN ou le Gaussian Mixture Models (GMM) identifient les points qui n'appartiennent à aucun cluster dense. Le nombre de clusters et les seuils de densité sont des hyperparamètres à ajuster.

L'**Isolation Forest** utilise des arbres de décision pour isoler les anomalies. Les points normaux nécessitent plus de partitions pour être isolés, tandis que les anomalies sont isolées plus rapidement. Cette méthode est efficace pour les données de haute dimension.

Les **[[LSTM]]** ou les [[Transformer]] peuvent être utilisés pour prédire les valeurs futures et identifier les déviations. Les anomalies sont détectées lorsque les valeurs observées s'écartent significativement des prédictions du modèle.

## Application au trading

La détection d'anomalies dans les **prix** peut révéler des mouvements de marché inhabituels. Un prix qui s'écarte significativement de la tendance récente peut signaler une opportunité de mean reversion ou un risque de continuation.

Les **volumes anormaux** peuvent indicar des événements imminents. Un pic de volume sur une cryptomonnaie peut précéder un airdrop ou une annonce importante. La detection de volumes inhabituels permet de s'adapter rapidement.

Les **anomalies de liquidité** identifient les periods où le carnet d'ordres devient anormalement étroit ou profond. Ces conditions peuvent créer des opportunités de market making ou des risques de slippage.

La **surveillance des stratégies** utilise la detection d'anomalies pour identifier quand un modèle de trading commence à dévier de ses performances attendues. Une augmentation des P&L négatifs ou une changement dans les patterns de trading peut indiquer un problème.

## Considérations pratiques

Le choix du seuil de détection est un compromis entre le taux de faux positifs et la détection des vraies anomalies. Un seuil trop sensible génère beaucoup d'alertes inutiles, un seuil trop permissif peut manquer des événements importants.

La **validation** des modèles de detection d'anomalies est difficile car les labels sont rares. Les méthodes basées sur le backtesting sur des périodes avec events connu (crash, annonce) peuvent être utilisées.

L'intégration avec les [[Risk limits and circuit breakers]] permet une réponse automatique aux anomalies détectées. Les positions peuvent être réduites ou fermées automatiquement quando des conditions anormales sont détectées.

Voir aussi : [[Data preprocessing]], [[Autoencoders]], [[Clustering]], [[LSTM]], [[Time series forecasting]], [[Risk limits and circuit breakers]], [[Sentiment analysis pour trading]], [[Feature engineering]]