---
titre: "Keltner Channels"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volatilité, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[ATR (Average True Range)]]", "[[Bollinger Bands breakout]]", "[[Backtesting]]", "[[Trading bot]]"]
liens_opposition: []
---

# Keltner Channels

> [!info] Résumé
> Les Keltner Channels sont un indicateur de volatilité consistant en une bande centrale (moyenne mobile exponentielle) avec des bandes supérieure et inférieure basées sur l'ATR. Ils permettent d'identifier les cassures de volatilité et les retournements potentiels.

## Définition

Les Keltner Channels ont été créés par Chester Keltner dans les années 1960 et modifiés par Linda Bradford Raschke dans les années 1980. La version moderne utilise une EMA (Exponential Moving Average) comme ligne centrale avec des bandes basées sur l'ATR.

Le calcul standard : la bande centrale est une EMA (typiquement 20 périodes). La bande supérieure = EMA + (multiplicateur × ATR). La bande inférieure = EMA - (multiplicateur × ATR). Le multiplicateur par défaut est 2.

Les bandes s'élargissent quand la volatilité (ATR) augmente et se contractent quand elle diminue.

Une cassure au-dessus de la bande supérieure signale une force haussière. Une cassure en dessous de la bande inférieure signale une force baissière. Le prix qui reste à l'intérieur des bandes suggère une consolidation.

## Contexte et origine

Chester Keltner a introduit les "Keltner Channels" dans son livre "How to Make Money in Commodities" (1960). La version originale utilisait une moyenne mobile simple (SMA) et le "range" (plus haut - plus bas) pour les bandes.

Linda Bradford Raschke a popularisé la version modernisée dans les années 1980 en remplaçant le range simple par l'ATR pour un calcul plus précis de la volatilité.

Les Keltner Channels sont souvent comparés aux [[Bollinger Bands]] car ils servent un objectif similaire (visualiser la volatilité). La différence clé : les Bollinger Bands utilisent l'écart-type pour les bandes, les Keltner Channels utilisent l'ATR.

## Mécanismes et caractéristiques

La bande centrale (EMA) agit comme un support/résistance dynamique. En tendance haussière, le prix a tendance à rester au-dessus de l'EMA. En tendance baissière, il reste en dessous.

Les bandes agissent comme des niveaux de support/résistance dynamiques. En range, le prix rebondit entre la bande supérieure et la bande inférieure. En breakout, le prix sort des bandes avec momentum.

Les faux cassures (fakeouts) sont communes. Le prix peut temporairement sortir des bandes et revenir. Un filtre common : exiger une clôture hors des bandes (pas juste un pic) pour confirmer le breakout.

Le [[backtesting]] des Keltner Channels en crypto montre que le paramètrage avec ATR × 2 et EMA 20 fonctionne bien sur les timeframes de 4h et journalier. Le multiplicateur peut être ajusté (1.5 à 3) selon la volatilité du actif.

## Nuances, critiques, limites

Les Keltner Channels sont un indicateur retardataire. L'EMA et l'ATR sont calculés à partir de données passées, donc le signal de cassure arrive après le mouvement initial.

Le multiplicateur doit être ajusté selon l'actif. Un multiplicateur de 2 sur le Bitcoin peut être approprié, mais sur une altcoin volatile, il pourrait être trop serré, causant des faux signaux. Une approche est d'ajuster le multiplicateur selon l'ATR moyen historique.

En marché très trending, le prix peut rester au-delà de la bande supérieure (ou inférieure) pendant longtemps. Un trader qui vend à chaque cassure de la bande supérieure en pleine tendance haussière perdrait régulièrement.

Les [[Bollinger Bands]] et les Keltner Channels donnent des informations similaires mais avec des sensibilités différentes. Les Bollinger Bands réagissent plus vite aux changements de volatilité (via l'écart-type), les Keltner Channels plus lentement (via l'ATR).

## Liens et implications

L'ATR est une composante centrale des Keltner Channels.

La volatilité mesurée par les Keltner Channels aide à identifier les périodes de consolidation et les périodes de breakout.

Les Keltner Channels peuvent être utilisés pour le [[trading bot]] avec des règles simples : achat quand le prix ferme au-dessus de la bande supérieure, vente quand il ferme en dessous de la bande inférieure. Un stop loss peut être placé à l'opposé de la bande.

## Sources