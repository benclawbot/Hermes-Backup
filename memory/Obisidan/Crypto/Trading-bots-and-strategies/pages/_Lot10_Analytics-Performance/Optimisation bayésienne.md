---
titre: "Optimisation bayésienne"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#méthode/optimisation, #concept/hyperparamètres, #machine-learning]
créé: 2026-04-21
liens_forts: ["[[Backtesting]]", "[[Surapprentissage]]", "[[Machine learning pour trading]]", "[[In-sample vs out-of-sample]]", "[[Forward testing]]", "[[Position sizing]]", "[[Grid trading]]"]
liens_opposition: []
---

# Optimisation bayésienne

> [!info] Résumé
> L'optimisation bayésienne est une méthode高效e pour trouver les hyperparamètres optimaux d'une stratégie de trading sans tester toutes les combinaisons. Elle construit un modèle de substitution (surrogate model) de la fonction objectif et le met à jour séquentiellement, réduisant le nombre de backtests nécessaires.

## Définition

L'optimisation bayésienne est une technique d'optimisation de fonctions black-box coûteuses à évaluer. En trading, la "fonction" est le backtest : chaque évaluation prend du temps et chaque ensemble d'hyperparamètres produit un résultat bruité.

L'approche bayésienne maintient un modèle probabiliste de la fonction objectif (ex: Sharpe ratio en fonction des hyperparamètres). Ce modèle est mis à jour après chaque évaluation, guidant la sélection des prochain hyperparameters à tester. L'objectif est de trouver le optimum en minimisant le nombre d'évaluations.

Pour une stratégie avec 5 hyperparamètres chacun avec 10 valeurs possibles, le grid search nécessite 10^5 = 100 000 backtests. L'optimisation bayésienne peut souvent trouver un bon optimum en quelques centaines de backtests seulement.

Les composants clés :
- **Surrogate model** : généralement un Gaussian Process ou un Random Forest, il modélise la relation entre hyperparamètres et métrique de performance
- **Acquisition function** : détermine quel prochain point tester en équilibrant exploration (régions peu explorées) et exploitation (régions prometteuses)
- **Update loop** : après chaque évaluation, le modèle est réactualisé

## Contexte et origine

L'optimisation bayésienne a été formalisée dans les années 1970 avec les travaux de Jonas Mockus sur l'optimisation globale. L'émergence des Gaussian Processes comme surrogate models dans les années 1990 l'a rendue praticable.

En machine learning, elle est devenue la méthode de référence pour le tuning des hyperparamètres depuis les années 2010. Des bibliothèques comme Optuna, Hyperopt, et scikit-optimize l'ont démocratisée.

En trading algorithmique crypto, l'optimisation bayésienne s'est imposée avec la complexité croissante des stratégies. Les bots avec des dizaines de paramètres (seuils d'indicateurs, tailles de position, règles de sortie) ne peuvent plus être optimisés manuellement.

Les stratégies de [[Grid trading]], de [[Market making]], et les bots basés sur le [[Machine learning pour trading]] beneficient particulièrement de cette approche car leurs espaces de paramètres sont vastes et les evaluations sont coûteuses.

## Mécanismes et caractéristiques

### Gaussian Process Surrogate

Le Gaussian Process (GP) est souvent utilisé parce qu'il fournit non seulement une prédiction de la métrique pour des hyperparamètres non testés, mais aussi un intervalle de confiance. Cette incertitude est cruciale pour l'acquisition function.

Un GP modélise la performance comme une distribution gaussienne multivariate où chaque combinaison d'hyperparamètres est un point dans l'espace. Les observations passées définissent la moyenne ; la covariance entre points capture la structure de l'espace.

Pour 3 hyperparamètres testés avec des Sharpe values de 1.2, 0.8, et 1.5, le GP peut interpoler et prédire le Sharpe pour une 4e combinaison non testée, avec une uncertainty qui dépend de la distance dans l'espace des hyperparamètres.

### Acquisition functions courantes

**Expected Improvement (EI)** : calcule l'amélioration attendue par rapport au meilleur point actuel. Favorise l'exploitation.

**Upper Confidence Bound (UCB)** : équilibre moyenne prédite et incertitude. Le paramètre kappa contrôle l'exploration vs exploitation.

**Probability of Improvement (PI)** : maximise la probabilité d'amélioration. Plus conservatrice.

### Processus complet

1. Initialisation : effectuer N backtests initiaux avec des configurations aléatoires ou Latin Hypercube Sampling
2. Ajuster le surrogate model aux N observations
3. Optimiser l'acquisition function pour trouver le prochain ensemble d'hyperparamètres
4. Évaluer ce point via backtest
5. Ajouter le résultat au dataset et réactualiser le surrogate model
6. Répéter jusqu'à convergence ou budget épuisé

## Nuances, critiques, limites

Le [[surapprentissage]] reste un danger même avec l'optimisation bayésienne. Si l'espace de recherche est trop vaste ou si le nombre d'itérations est insuffisant, l'optimiseur peut converger vers un optimum local qui ne généralise pas.

Le choix du surrogate model compte. Un GP est excellent pour des espaces continus de faible dimension (moins de 20 hyperparamètres). Pour des espaces mixtes (paramètres continus + discrets) ou de haute dimension, un Random Forest ou une neural network surrogate peut être plus approprié.

L'optimisation bayésienne ne protège pas contre le [[data snooping]] si les mêmes données sont utilisées pour l'optimisation et la validation. La pratique correcte exige une séparation [[In-sample vs out-of-sample]] ou un nested simulation approach.

Le coût de chaque évaluation est le facteur limitant. Pour des stratégies où un backtest prend des heures (données haute fréquence, stress testing extensif), même quelques centaines de backtests peuvent être impraticables. Dans ce cas, des méthodes plus rapides (random search, iterative deepening) peuvent être préférables.

## Liens et implications

L'optimisation bayésienne s'applique directement au [[Backtesting]] pour trouver les configurations de stratégie optimales. Elle est plus efficace que le grid search ou le random search pour les espaces de paramètres continus.

Le risque de [[Surapprentissage]] doit être monitored en parallèle. L'optimiseur peut trouver des paramètres qui "overfit" l'historique. La validation via [[Forward testing]] ou [[In-sample vs out-of-sample]] est obligatoire.

En [[Machine learning pour trading]], les hyperparamètres du modèle (learning rate, profondeur de l'arbre, nombre de neurones) sont naturellement optimisés via des méthodes bayésiennes plutôt que par grid search.

Le [[Position sizing]] peut être inclus comme hyperparamètre dans l'optimisation. Au lieu de fixer la taille de position, on peut laisser l'optimiseur trouver le meilleur sizing en combinaison avec les autres paramètres.

## Sources

[^1]: Frazier, "A Tutorial on Bayesian Optimization", arXiv (2018)
[^2]: Shahriari, "Taking the Human Out of the Loop", Proceedings of the IEEE (2016)
