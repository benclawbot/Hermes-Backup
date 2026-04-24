---
titre: "Ichimoku Cloud"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/tendance, #concept/japon]
créé: 2026-04-21
liens_forts: ["[[Analyse technique pour bots]]", "[[Tenkan-sen (Ichimoku component)]]", "[[Kijun-sen (Ichimoku component)]]", "[[Senkou Span (Ichimoku component)]]", "[[Chikou Span (Ichimoku component)]]"]
liens_opposition: []
---

# Ichimoku Cloud

> [!info] Résumé
> L'Ichimoku Cloud est un système d'analyse technique japonais créé par Goichi Hosoda dans les années 1960. Il utilise cinq lignes (Tenkan-sen, Kijun-sen, Senkou Span A et B, Chikou Span) pour identifier la tendance, le momentum, et les niveaux de support/résistance d'un seul coup d'œil.

## Définition

L'Ichimoku Cloud (Ichimoku Kinko Hyo en japonais, signifiant "équilibre du graphique à un regard") est un système d'analyse technique complet créé au Japon dans les années 1960 par Goichi Hosoda, un journaliste spécialisé dans le marché du riz.

Le système se compose de cinq lignes principales : Tenkan-sen (ligne de conversion, rouge), Kijun-sen (ligne de base, bleu), Senkou Span A et Senkou Span B (qui forment le "nuage" ou Kumo), et Chikou Span (ligne de décalage).

Le "nuage" (Kumo) est l'élément le plus distinctif. Il est formé par l'espace entre le Senkou Span A et le Senkou Span B. Le nuage change de couleur visuellement selon la position du prix : au-dessus du nuage = tendance haussière, en dessous = tendance baissière, dans le nuage = indécision.

## Contexte et origine

Goichi Hosoda, journaliste japonais, a développé l'Ichimoku Cloud dans les années 1960, puis a publié ses travaux en 1968. Contrairement à beaucoup d'indicateurs occidentaux, l'Ichimoku a été conçu comme un système complet permettant d'analyser la tendance, le momentum, et les niveaux de support/résistance sans avoir besoin d'indicateurs supplémentaires.

Hosoda a travaillé pendant 30 ans à perfectionner son système avant de le publier. L'indicateur était initialement destiné au marché du riz (contrat à terme sur le riz de la Bourse de Osaka), mais s'est révélé applicable à tous les marchés financiers.

En Occident, l'Ichimoku Cloud a gagné en popularité surtout après les années 2000, grâce à des trader comme Manesh Patel qui l'ont popularisé sur YouTube et dans des formations. En crypto, l'Ichimoku est très utilisé pour sa capacité à donner une vue d'ensemble rapide.

## Mécanismes et caractéristiques

Le Tenkan-sen (Conversion Line) est calculé comme (Plus haut 9 périodes + Plus bas 9 périodes) / 2. Il représente le midpoint sur 9 périodes et agit comme support/résistance à court terme.

Le Kijun-sen (Base Line) est calculé comme (Plus haut 26 périodes + Plus bas 26 périodes) / 2. Il représente le midpoint sur 26 périodes et sert de support/résistance plus stable. La distance entre Tenkan et Kijun indique le momentum court terme.

Le Senkou Span A est (Tenkan-sen + Kijun-sen) / 2, projeté 26 périodes en avant. Le Senkou Span B est (Plus haut 52 périodes + Plus bas 52 périodes) / 2, également projeté 26 périodes en avant. L'espace entre ces deux lignes forme le Kumo (nuage).

Le Chikou Span (Lagging Span) est le prix de clôture actuel projeté 26 périodes en arrière. Il permet de comparer le prix actuel avec le prix passé. Si le Chikou Span est au-dessus du prix passé, c'est bullish ; en dessous, bearish.

Les signaux de trading viennent de plusieurs sources : croisement Tenkan/Kijun (comme un MACD simplifié), croisement du prix avec le Kijun, cassure du nuage, et croisement haussier/baissier. Le croisement haussier (tenkan croise kijun au-dessus) est un signal acheteur, le croisement baissier en dessous.

## Nuances, critiques, limites

L'Ichimoku est un système complexe qui nécessite une période d'apprentissage significative. Les cinq lignes et le nuage peuvent submerger les débutants. Les traders novices utilisent souvent seulement une partie du système (par exemple juste le croisement Tenkan/Kijun) sans intégrer le nuage.

Le paramètrage standard (9, 26, 52) vient de l'origine japonaise où les marchés étaient ouverts 6 jours par semaine. 9 périodes = une semaine et demie, 26 = un mois, 52 = deux mois. En crypto 24h/24, ces paramètres doivent être ajustés ou restent utilisés par convention.

Le [[backtesting]] de l'Ichimoku en crypto montre des résultats variables. Le système fonctionne bien en marché trending mais produit beaucoup de faux signaux en marché latéral. Le filtre ADX (exigence ADX > 25) peut améliorer les résultats en éliminant les trades en range.

Le nuage comme support/résistance fonctionne mieux sur les timeframes longs (journalier, hebdomadaire). Sur les timeframes courts (1h, 4h), le nuage peut être trop réactif et moins fiable.

## Liens et implications

L'Ichimoku Cloud est un système intégratif qui comprend plusieurs indicateurs liés. Le [[Tenkan-sen]] et le [[Kijun-sen]] sont les composantes principales, analogues à des moyennes mobiles courtes et longues. Le [[Senkou Span]] forme le nuage et le [[Chikou Span]] représente le prix décalé.

L'Ichimoku comme système peut être comparé à l'[[analyse technique pour bots]] moderne qui combine plusieurs indicateurs. Les five lines de l'Ichimoku fournissent une vue d'ensemble similaire à ce qu'un système multi-indicateurs donnerait.

La stratégie de [[stratégie de momentum]] peut être implémentée avec l'Ichimoku en utilisant le croisement Tenkan/Kijun pour le timing et le nuage pour confirmer la tendance. Un trade est pris seulement si le prix est au-dessus du nuage (tendance haussière confirmée).

## Sources