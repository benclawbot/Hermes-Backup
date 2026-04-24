---
tags:
  - time-series
  - forecasting
  - machine-learning
  - trading
created: 2026-04-21
---

# Time Series Forecasting

La prédiction de séries temporelles constitue une tâche centrale en trading algorithmique, visant à anticiper les mouvements futurs des prix ou de la volatilité à partir de l'historique des données. Les techniques modernes combinent des modèles statistiques classiques avec des approches de deep learning pour capturer des patterns complexes.

## Cadre conceptuel

Une série temporelle financière est une séquence d'observations indexées par le temps. Le objectif de la prédiction est d'estimer la valeur future f(t+h) étant donné les observations passées {f(t), f(t-1), ..., f(t-k)}. L'horizon h peut varier du très court terme (quelques secondes pour le HFT) au long terme (mois pour le position trading).

La prédiction peut être pointue (estimation d'une valeur unique) ou probabiliste (distribution de probabilités sur les valeurs futures). La prédiction probabiliste est particulièrement utile en trading pour la gestion du risque et le sizing des positions.

Les modèles de séries temporelles supposent que les observations passées contiennent de l'information sur le futur. Cette hypothèse peut être plus ou moins forte selon les marchés et les horizons. Les efficiences du marché limitent la prévisibilité, mais des opportunités persistent notamment sur les cryptomonnaies.

## Modèles statistiques traditionnels

Les **modèles ARIMA** (AutoRegressive Integrated Moving Average) combinent les composantes autorégressives et de moyenne mobile. Ils supposent la stationnarité et capturent les dépendances linéaires. Les variantes comme ARIMA-GARCH modélisent la volatilité conditionnelle.

Les **exponential smoothing methods** comme Holt-Winters capturent les tendances et сезонности dans les données. Ces méthodes sont simples et rapides, mais peuvent échouer à capturer des patterns plus complexes.

Les **modèles VAR** (Vector AutoRegression) modélisent les interactions entre plusieurs séries temporelles simultanément. Ils peuvent capturer les relations entre différents instruments ou entre prix et indicateurs.

## Approches de deep learning

Les **[[LSTM]]** (Long Short-Term Memory) excellent à capturer les dépendances à long terme dans les séquences. Leur mémoire cellulaire permet de préserver l'information sur de longues périodes, utile pour identifier les patterns de marché qui se répètent avec un lag.

Les **[[Transformer]]** et les mécanismes d'[[Attention mechanism]] permettent au modèle de focaliser sur les moments passés les plus pertinents pour la prédiction courante. Cette capacité d'attention est particulièrement utile pour identifier les patterns qui précedent certains mouvements.

Les modèles **encoder-decoder** comme les seq2seq sont utilisés pour la prédiction multi-step où l'objectif est de prédire plusieurs pas de temps futurofuture. L'encodeur traite la séquence d'entrée et le décodeur génère la prédiction.

Les **réseaux de confusion** (confusion networks) combinent plusieurs prédictions pour améliorer la robustesse. Cette approche est liée aux [[Ensemble methods]] où plusieurs modèles contribuent à la prédiction finale.

## Application au trading

La prédiction de prix peut être directe (prédire le prix futur) ou indirecte (prédire la direction du mouvement). La prédiction de direction est souvent plus stable et plus actionnable pour les stratégies de trading.

La prédiction de **volatilité** est cruciale pour le risk management. Les modèles de volatilité implicite peuvent informer les stratégies de [[Volatility trading]] et le [[Position sizing]] basé sur la volatilité.

La prédiction du **sentiment** à partir de sources textuelles peut être intégrée aux modèles de prédiction de prix. Les modèles multivariés peuvent combiner les données de marché avec les scores de sentiment pour des prédictions plus robustes.

La [[Feature engineering]] joue un rôle clé dans la qualité des prédictions. Les indicateurs techniques, les données on-chain, et les métriques de marché sont transformés en features qui capturent l'information prédictive.

## Validation et éviter le surapprentissage

La validation des modèles de prédiction doit respecter la structure temporelle. Le split train/test doit être chronologique pour éviter la fuite de données. La validation sur plusieurs périodes holdout (walk-forward validation) estimate la robustesse temporelle.

Les métriques comme le RMSE, le MAE, et le directional accuracy évaluent la qualité des prédictions pointues. Pour les prédictions probabilistes, le calibration et le scoring (log loss, CRPS) sont utilisés.

La complexité des modèles doit être adaptée à la quantité de données disponibles. Les modèles trop complexes ([[Overfitting]]) capturent le bruit plutôt que le signal. Les techniques de [[Model compression]] et de régularisation combattent ce problème.

Voir aussi : [[LSTM]], [[Transformer]], [[Attention mechanism]], [[Feature engineering]], [[Data preprocessing]], [[Anomaly detection]], [[Volatility trading]], [[Backtesting]]