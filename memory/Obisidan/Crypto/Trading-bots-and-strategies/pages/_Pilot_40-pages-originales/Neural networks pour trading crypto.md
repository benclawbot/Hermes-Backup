---
titre: "Neural networks pour trading crypto"
type: théorie
cluster: "Trading bots and strategies"
statut: verified
controverse: high
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#théorie/neural-networks, #théorie/deep-learning, #concept/prediction]
créé: 2026-04-20
liens_forts: ["[[Machine learning pour trading]]", "[[Apprentissage par renforcement pour trading]]", "[[Feature engineering]]"]
liens_opposition: ["[[Surapprentissage]]"]
---

# Neural networks pour trading crypto

> [!info] Résumé
> Les réseaux de neurones appliqués au trading crypto utilisent des architectures comme LSTM et Transformer pour traiter les données de prix et prédire les mouvements. Défi majeur : les marchés crypto sont non-stationnaires, degradant la performance des modèles over time.

## Définition

Les neural networks en trading sont des modèles de machine learning inspirés du cerveau humain, composés de couches de "neurones" artificiels qui traitent l'information. Chaque neurone reçoit des entrées, applique une fonction, et produit une sortie.

En trading crypto, les inputs typiques sont : prix historiques (OHLCV), indicateurs techniques, données on-chain, sentiment. Les outputs sont des prédictions : direction du prix (up/down), prix cible, ou probabilités de différents scénarios.

Les architectures courantes incluent :
- **MLP (Multi-Layer Perceptron)** : architecture basique pour des relations simples
- **LSTM (Long Short-Term Memory)** : conçu pour capturer des dépendances temporelles longues
- **Transformer** : architecture moderne pour capturer des relations complexes dans les séquences

## Contexte et origine

Les réseaux de neuronesappliqués à la finance datent des années 1990. Les premiers travaux portaient sur la prédiction des taux de change et des rendements boursiers avec des MLP simples.

Les LSTM, introduits par Hochreiter et Schmidhuber en 1997, ont révolutionné le traitement des séries temporelles. Leur capacité à capturer des dépendances à long terme les rendait particulièrement adaptés aux données financières.

En crypto, les LSTM sont popularisés pour prédire les prix du Bitcoin et d'autres actifs. Des tutoriels comme "Predict Bitcoin price with LSTM" sont omniprésents, avec des résultats qui varient enormement.

## Mécanismes et caractéristiques

Les LSTM (Long Short-Term Memory) sont conçus pour résoudre le problème des gradients vanishants qui affectent les RNN standards. Ils utilisent des "gates" (input, forget, output) pour decide quoi retenir et quoi oublier dans les séquences de données.

Le feature engineering est crítica pour les neural networks. Les raw prices ne sont souvent pas suffisants. Les indicateurs techniques (RSI, MACD), les transformations (returns, log-returns), et les données externes (sentiment, on-chain) enrichissent les inputs.

La sequence length (longueur de la séquence d'historique utilisée) doit être calibrée. Une sequence trop courte manque de contexte. Une sequence trop longue introduit du bruit et augmente le risque de surapprentissage.

La normalisation des données (scaling) est importante pour que le réseau apprenne efficacement. Les prix, indicateurs, et volumes ont des échelles très différentes qui doivent être normalisées.

## Nuances, critiques, limites

Le [[surapprentissage]] est le problème numéro un. Un réseau avec trop de paramètres peut "mémoriser" les données d'entraînement sans généraliser. La régularisation, le dropout, et la validation sur des données hold-out sont essentiels.

Le [[non-stationary markets]] problème est crucial en crypto. Les modèles entraînés sur des données passées peuvent ne pas capturer les changements structurels du marché. Un modèle performant en 2020-2021 peut échouer en 2022-2023.

La black box nature des neural networks rend l'interprétation difficile. On ne sait pas exactement pourquoi le modèle a produit une certain prédiction. Cela complique le debugging et la confiance dans le modèle.

Les coûts de calcul sont élevés pour entraîner et exécuter des modèles complexes. Les LSTM et Transformers nécessitent des GPUs et beaucoup de temps d'entraînement, ce qui peut ne pas être justifié par l'amélioration de performance.

## Liens et implications

Les [[neural networks pour trading crypto]] sont une composante clé du [[machine learning pour trading]]. L'[[apprentissage par renforcement]] utilise souvent des réseaux de neurones comme approximateurs de fonctions.

Le [[feature engineering]] détermine largement la performance des modèles. La qualité et la pertinence des features input sont plus importantes que l'architecture du réseau.

Le [[backtesting]] des modèles neuronaux doit être particulièrement rigoureux pour éviter le surapprentissage. Le [[forward testing]] sur des données non vues est encore plus critique que pour les stratégies rules-based.

## Sources

[^1]: Hochreiter and Schmidhuber, "Long Short-Term Memory", Neural Computation (1997)
[^2]: Keras, "LSTM for stock market prediction", https://keras.io/examples (consulted 2026)