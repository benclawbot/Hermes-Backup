---
tags:
  - model-distillation
  - knowledge-distillation
  - compression
  - trading
created: 2026-04-21
---

# Model Distillation

La distillation de modèle (model distillation ou knowledge distillation) transfère les connaissances d'un modèle large (teacher) vers un modèle plus petit (student). Cette technique permet de créer des modèles compacts qui conservent l'essentiel des performances des modèles originaux, particulièrement utile en trading pour déployer des modèles performants avec des contraintes de latence.

## Principes de la distillation

La distillation exploite le fait que les modèles profonde contiennent des connaissances plus riches que les simple labels. Les **soft targets** (probabilités prédites par le teacher) contiennent plus d'information que les labels durs. Par exemple, la probabilité predicted pour chaque classe par un réseau de classification contient des informations sur les similarités entre classes.

Le processus de distillation entraîne le student à matcher les prédictions du teacher. La fonction de perte combine la CrossEntropy avec les soft targets et optionally les labels hard. La température de la softmax contrôle la "softness" des probabilités, allowing the student to learn from the relative similarities between classes.

Les modèles teacher sont souvent des ensembles ou des modèles très profondes qui ne peuvent pas être déployés en temps réel. Le student plus petit et plus rapide peut être déployé pour l'inférence en production.

## Distillation pour le trading

Les modèles de trading的大型 peuvent être distillés en modèles plus petits pour l'inférence temps réel. Un modèle复杂的 avec des centaines de millions de paramètres peut être remplacé par un modèle compact de quelques millions de paramètres.

La distillation des modèles de [[Sentiment analysis pour trading]] permet de déployer des modèles légers sur des sources temps réel comme Twitter. Les predictions du modèle teacher (un grand modèle de langage) sont utilisées pour entraîner un modèle student plus rapide.

Les modèles de [[Deep reinforcement learning]] comme [[PPO]] peuvent être distillés en réseaux plus petits pour réduire la latence. Le policy student apprend à replicate les actions du teacher, permettant un deployment plus rapide.

Les [[LSTM]] et les [[Transformer]] peuvent être distillés en architectures plus simples comme des GRUs ou des modèles linéaires pour des applications contraintes en latence.

## Techniques avancées

La distillation peut être adaptée pour préserver des aspects spécifiques des prédictions. La **distillation de priorité** (priority distillation) pour le trading peut se concentrer sur les predictions de direction plutôt que sur les valeurs exactes.

La **distillation mutual** utilize plusieurs models qui s'aident mutuellement. Les models students peuvent aussi devenir teachers pour d'autres students, créant un cycle d'amélioration continue.

La distillation de **modèles multi-tâches** shared des representations entre tâches. Le student apprend à performante plusieurs tâches en observant les prédictions d'ensembles de teachers spécialisés.

Les **transformers distillés** comme DistilBERT démontrent que des modèles significativamente plus petits peuvent atteindre une grande partie des performances des modèles originaux. Ces techniques sont applicables aux modèles de trading basés sur des [[Transformer]].

## Considérations pratiques

Le choix du student model doit être compatible avec la tâche. Si le student est trop petit, il ne peut pas représenter les connaissances du teacher. Le bon compromis dépend des contraintes de déploiement.

Les données pour la distillation sont les mêmes que pour l'entraînement du teacher, mais le teacher génère des labels additionnels (soft targets). Si le teacher génère aussi des labels pour des données non supervisées, la distillation peut exploiter des données supplémentaires.

La température de distillation est un hyperparamètre important. Une température haute produit des distributions plus douces avec plus d'information sur les similarités. Une température basse produit des distributions plus pointedes proches des hard labels.

La validation du modèle distillé doit inclure des tests de performance mais aussi des tests de calibration. Le student peut avoir des comportements différents du teacher sur certains types d'entrées, nécessitant une validation approfondie.

La [[Model compression]] englobe la distillation et d'autres techniques pour réduire la taille des modèles. La distillation est souvent combinée avec la [[Quantization]] et le pruning pour des modèles encore plus efficaces.

Voir aussi : [[Model compression]], [[Transfer learning]], [[Quantization]], [[PPO]], [[Deep reinforcement learning]], [[Neural networks pour trading crypto]], [[Feature engineering]]