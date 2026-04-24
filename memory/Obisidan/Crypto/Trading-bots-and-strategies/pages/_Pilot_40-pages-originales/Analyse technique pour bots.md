---
titre: "Analyse technique pour bots"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: high
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#méthode/technique, #méthode/indicateurs, #concept/analysis]
créé: 2026-04-20
liens_forts: ["[[Moving average crossover]]", "[[RSI Divergence strategy]]", "[[Bollinger Bands breakout]]"]
liens_opposition: ["[[Efficient Market Hypothesis]]"]
---

# Analyse technique pour bots

> [!info] Résumé
> L'analyse technique utilise les patterns graphiques et indicateurs (RSI, MACD, Bollinger) pour générer des signaux de trading. Les bots peuvent traiter des dizaines d'indicateurs simultanément mais font face à la critique que les patterns sont auto-renforisants et finissent par disparaître.

## Définition

L'analyse technique est l'étude des mouvements de prix passés pour prédire les mouvements futurs. Contrairement à l'analyse fondamentale qui évalue la valeur intrinsèque d'un actif, l'analyse technique se base uniquement sur les données de prix et de volume.

Les outils principaux incluent les indicateurs (RSI, MACD, Stochastique, Bollinger Bands), les patterns graphiques (tête-épaules, triangles, canaux), et les concepts de support/résistance. Chaque outil génère des signaux d'achat ou de vente basés sur des règles.

Implémentés dans un bot, ces indicateurs peuvent être combinés pour créer des systèmes de trading complexes. Un bot typique utilise 2-5 indicateurs avec des règles de déclenchement spécifiques. Certains bots sophistiqués optimisent les poids de ces indicateurs via du machine learning.

## Contexte et origine

L'analyse technique moderne remonte au début du 20e siècle avec les travaux de Charles Dow et la théorie de Dow (1880s-1900s). Les premiers chartistes dessinaient des graphiques à la main pour identifier des patterns.

L'informatique a révolutionné l'analyse technique dans les années 1970-80. Les indicateurs comme le RSI (1978) et le MACD (1979) ont été popularisés. Le passage aux graphiques informatiques a permis d'analyser des milliers de titres simultanément.

En crypto, l'analyse technique est widely used, peut-être plus que dans les marchés traditionnels, du fait de la nature speculative et de l'absence de données fondamentales solides pour la plupart des tokens.

## Mécanismes et caractéristiques

L'RSI (Relative Strength Index) mesure la vitesse et la grandeur des changements de prix. Il oscille entre 0 et 100. Un RSI au-dessus de 70 indique une condition surachetée (possible correction), en dessous de 30 une condition survendue (possible rebond). Les bots utilisent ces seuils pour générer des signaux.

Le MACD (Moving Average Convergence Divergence) utilise deux moyennes mobiles (une courte, une longue) et leur différence. Quand la ligne MACD croise au-dessus de la ligne de signal, c'est un signal haussier. Le MACD est particulièrement utile pour identifier les changements de tendance.

Les Bollinger Bands consistent en une moyenne mobile (typiquement 20 periods) avec deux bandes de volatilité (2 écarts-types au-dessus et en dessous). Quand le prix touche la bande inférieure, c'est souvent un signal d'achat. Les bandes s'élargissent en période de volatilité et se contractent en période de calme.

Le combinaison d'indicateurs (confluence) renforce les signaux. Si le RSI est suracheté, le prix est au support, et le MACD montre un croisement haussier, le signal d'achat est plus robuste que si un seul indicateur était positif.

## Nuances, critiques, limites

L'Efficient Market Hypothesis conteste l'analyse technique en arguant que les patterns passés ne prédisent pas les mouvements futurs. Si les patterns étaient profitables, tout le monde les utiliserait et ils cesseraient de fonctionner.

L'auto-renforcement est un problème : si assez de traders utilisent le même pattern (ex: support à 50 000$), le prix va rebondir sur ce niveau parce que beaucoup achètent à ce prix, créant une prémonition auto-réalisatrice. Mais une fois le pattern trop connu, il devient moins fiable.

Le [[surapprentissage]] est un risque majeur pour les bots qui optimisent des combinaisons d'indicateurs. Un système avec 10 paramètres peut être optimisé pour capturer tous les mouvements passés, mais sans vraie predictive power.

La multiplicité des indicateurs peut créer de la confusion. Des indicateurs contradictoires (RSI suracheté mais MACD baissier) sont fréquents. Les bots doivent avoir des règles de résolution de conflits ou des pondérations claras.

## Liens et implications

L'[[analyse technique]] est le fondement de stratégies comme le [[moving average crossover]], le [[RSI divergence strategy]], et le [[bollinger bands breakout]]. Ces stratégies sont souvent utilisées en combinaison.

Le debat sur [[le ML peut-il battre l'analyse technique]] questionne si les modèles de machine learning peuvent outperform les indicateurs techniques traditionnels. Le [[backtesting]] est essential pour valider toute stratégie d'analyse technique.

L'[[analyse technique pour bots]] se combine souvent avec le [[multi timeframe analysis]] pour confirmer les signaux sur plusieurs échelles de temps.

## Sources

[^1]: Investopedia, "Technical Analysis", https://www.investopedia.com/terms/t/technicalanalysis.asp (consulted 2026)
[^2]: Bulkowski, "Encyclopedia of Chart Patterns", Wiley (2005)