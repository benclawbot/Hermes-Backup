---
tags:
  - ensemble-methods
  - machine-learning
  - trading
created: 2026-04-21
---

# Ensemble Methods

Les méthodes d'ensemble combinent plusieurs modèles pour produire une prédiction collective qui surpasse les prédictions individuelles. En trading algorithmique, les ensembles sont widely utilisés pour améliorer la robustesse et la stabilité des stratégies de trading.

## Fondements théoriques

Un ensemble fonctionne parce que les erreurs de différents modèles tendent à être décorrélées. Si chaque modèle a une accuracy de 60% et que leurs erreurs sont indépendante, un vote majoritaire peut atteindre une accuracy plus élevée. Cette diveristy est la clé de l'efficacité des ensembles.

Le **bias** et la **variance** sont les deux sources d'erreur. Un modèle avec fort bias underfits les données, un modèle avec forte variance overfits. Les ensembles réduisent typiquement la variance en moyennant les prédictions de modèles multiples.

Il existe plusieurs stratégies pour créer des ensembles : le **bagging** (bootstrap aggregating) entraîne plusieurs modèles sur des sous-ensembles différents des données et moyenne leurs prédictions. Le **boosting** entraîne séquentiellement des modèles qui corrigent les erreurs des modèles précédents.

## Méthodes principales

Le **Random Forest** est la méthode de bagging la plus connue. Il entraîne plusieurs arbres de décision sur des sous-ensembles bootstrap des données et combine leurs prédictions par vote. Les features randomly sélectionnées à chaque split增加 la diversité.

Le **boosting** séquentiel comme AdaBoost et Gradient Boosting entraîne des modèles faibles (typiquement des souches de décision) séquentiellement. Chaque modèle siguiente corrige les erreurs du précédent en giving plus de poids aux exemples mal classés.

Le **stacking** (stacked generalization) utilise les prédictions de plusieurs modèles de base comme features pour un modèle de plus haut niveau (meta-learner). Le meta-learner apprend à combiner optimal les prédictions des modèles de base.

Les **ensembles de réseaux de neurones** combinent plusieurs réseaux avec différentes initialisations ou architectures. La combinaison peut être simple (moyenne) ou apprise via un meta-learner.

## Application en trading

Les ensembles combinent différents types de modèles pour bénéficier de leurs forces complémentaires. Un ensemble peut combiner un [[LSTM]] pour capturer les patterns temporels, un [[Transformer]] pour le contexte, et un modèle de régression pour les features statistiques.

Les **stratégies de vote** utilisent les prédictions de plusieurs stratégies pour décider l'action finale. Une stratégie de mean reversion peut être combinée avec une stratégie de momentum, et l'ensemble peut bénéficier des conditions où chaque stratégie excelle.

La diversification par les **instruments** utilise des modèles entraînés sur différents actifs. L'ensemble peut être plus robuste qu'un modèle monoculture car les модели différents réagissent différemment aux conditions de marché.

Les ensembles temporels comme le **model switching** évaluent plusieurs modèles et utilisent le plus performant selon les conditions actuelles. Cette approche requiert un méta-système qui évalue la performance attendue de chaque modèle.

## Considérations pratiques

La diversité des modèles de base est cruciale pour l'efficacité des ensembles. Des modèles trop similaires n'apporteront pas de benefit significatif. La diversité peut venir de différents algorithmes, différentes architectures, ou différents sous-ensembles de features.

Le **surapprentissage** peut survenir si l'ensemble est trop ajusté aux données historiques. La validation croisée temporelle est importante pour estimer les performances reales.

Le **coût computationnel** des ensembles peut être problématique pour le trading haute fréquence. Des techniques comme le early stopping ou la sélection des modèles les plus computationnellement légers pueden améliorer l'efficience.

L'**interprétabilité** des ensembles est réduite par rapport aux modèles individuels. Les importance de features peuvent être plus difficiles à calculer et à interpréter. Les techniques comme SHAP peuvent néanmoins être appliquées.

La [[Model compression]] peut être nécessaire pour déployer des ensembles en production avec des contraintes de latence. Chaque modèle de l'ensemble doit être compressé individuellement ou l'ensemble doit être distillé en un modèle unique.

Voir aussi : [[Feature engineering]], [[LSTM]], [[Transformer]], [[Deep reinforcement learning]], [[Backtesting]], [[Risk budgeting]], [[Model compression]], [[Neural networks pour trading crypto]]