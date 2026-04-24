---
tags:
  - deep-learning
  - attention
  - neural-networks
  - trading
created: 2026-04-21
---

# Attention mechanism (Mécanisme d'attention)

Le mécanisme d'attention constitue le cœur des architectures modernes de deep learning, permettant aux modèles de focaliser dynamiquement sur les parties les plus pertinentes des données d'entrée. Introduit initialement pour la traduction automatique, il est devenu un composant essentiel des [[Transformer]] et de nombreuses architectures de [[Deep reinforcement learning|deep reinforcement learning]], avec des applications directes en trading algorithmique.

## Principe fondamental

L'attention fonctionne en calculant un poids pour chaque élément d'une séquence d'entrée, reflétant son importance relative pour la tâche en cours. Mathématiquement, l'attention produit une somme pondérée des valeurs d'entrée, où les poids sont déterminés par la similarité entre une **query** (requête) et des **keys** (clés).

Le processus se décompose en trois étapes : d'abord, on calcule les scores d'attention entre la query et chaque key ; ensuite, on applique une fonction softmax pour normaliser ces scores en probabilités ; enfin, on calcule la sortie comme la somme pondérée des values par ces poids normalisés.

Ce mécanisme permet au modèle de considérer simultanément toutes les positions de la séquence, contrairement aux RNN qui traitent séquentiellement. L'attention capture naturellement les dépendances à longue distance sans suffer du problème de gradient qui s'évanouit.

## Variantes principales

L'**attention scalaire** (dot-product attention) constitue la forme la plus simple, où le score est le produit scalaire entre la query et la key. L'**attention additive** calcule le score via un petit réseau de neurones feed-forward. L'**attention multi-têtes** (multi-head attention) projette les queries, keys et values dans plusieurs espaces de représentation séparés, permettant au modèle de capturer différents types de relations en parallèle.

L'**auto-attention** (self-attention) applique l'attention au sein d'une même séquence, permettant à chaque élément de dépendre de tous les autres éléments de la séquence. Cette variante est particulièrement puissante pour capturer les structures internes des données séquentielles.

L'**attention croisée** (cross-attention) compare deux séquences différentes, utile pour les tâches où une conditionne l'autre. En trading, cela permet par exemple de corréler des données de sentiment avec des données de prix.

## Applications en trading

En trading algorithmique, le mécanisme d'attention permet aux modèles de **sélectionner dynamiquement** les informations les plus pertinentes pour leurs prédictions. Un modèle d'attention peut ainsi focaliser sur certains moments passés lors de la prédiction de tendances futures, ou sur certains indicateurs parmi une multitude de features disponibles.

Pour la **prédiction de direction de marché**, les modèles avec attention apprennent automatiquement à identifier les patterns passés qui sont le plus prédictifs des mouvements futurs. Le modèle peut apprendre, par exemple, que les retournements de tendance sont souvent precedés par des configurations spécifiques dans les prix.

Dans le domaine du [[Sentiment analysis pour trading|sentiment analysis]], l'attention permet d'identifier les mots ou phrases les plus informatifs pour déterminer le sentiment général d'un texte financier. Cette capacité est particulièrement utile pour analyser des sources non structurées comme les réseaux sociaux ou les actualités financières.

L'attention est également centrale dans les architectures d'**apprentissage par renforcement** comme les [[Transformer]]-based RL agents, où elle permet de sélectionner les informations pertinentes de l'historique d'observations pour décider des actions futures.

## Intégration avec les stratégies de trading

L'implémentation du mécanisme d'attention nécessite des choix architecturaux importants. Le nombre de têtes d'attention, la dimensionnalité des embeddings, et le nombre de couches sont des hyperparamètres à ajuster selon la tâche et les données disponibles.

Pour le trading, l'attention peut être utilisée pour pondérer automatiquement des indicateurs techniques. Un réseau avec attention peut apprendre à donner plus d'importance au [[RSI Divergence strategy|RSI]] dans certains regimes de marché et au [[MACD (Moving Average Convergence Divergence)|MACD]] dans d'autres, sans intervention manuelle.

La visualisation des poids d'attention peut fournir des informations sur le comportement du modèle et servir d'outil d'audit pour la conformité réglementaire. Comprendre pourquoi un modèle prend une décision peut être aussi important que la qualité de la prédiction elle-même.

Voir aussi : [[Transformer]], [[Deep reinforcement learning]], [[BERT for trading]], [[GPT for trading]], [[Neural networks pour trading crypto]], [[Feature engineering]], [[Sentiment analysis pour trading]], [[Reinforcement learning]], [[Data preprocessing]]