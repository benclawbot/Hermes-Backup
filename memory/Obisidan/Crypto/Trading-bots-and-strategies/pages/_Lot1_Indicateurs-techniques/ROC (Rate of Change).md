---
titre: "ROC (Rate of Change)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/momentum, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Stratégie de momentum]]", "[[Analyse technique pour bots]]", "[[RSI Divergence strategy]]", "[[Backtesting]]", "[[Trading bot]]"]
liens_opposition: []
---

# ROC (Rate of Change)

> [!info] Résumé
> Le ROC (Rate of Change) mesure le pourcentage de variation du prix entre la période actuelle et N périodes ago. Il identifie la vitesse du mouvement de prix et peut signaler des conditions de surachat ou de survente.

## Définition

Le ROC (Rate of Change) calcule le pourcentage de changement du prix sur N périodes. La formule : ROC = ((Prix actuel - Prix N périodes ago) / Prix N périodes ago) × 100.

Un ROC positif signifie que le prix a augmenté de N périodes. Un ROC négatif signifie que le prix a diminué. Plus le ROC est élevé en magnitude, plus le mouvement est fort.

Le ROC oscille sans limites fixes. Un ROC de +10% signifie une hausse de 10% sur N périodes. Un ROC de -15% signifie une baisse de 15%. Les valeurs "extrêmes" dépendent du actifs et de sa volatilité.

## Contexte et origine

Le ROC est l'un des indicateurs de momentum les plus anciens. Il existed déjà dans les années 1930-1940 sous diverses formes. Tushar Chande l'a formalisé dans sa forme moderne dans les années 1990.

Le RSI peut être vu comme une variante "bornée" du ROC.

Le ROC est directement lié au concept de momentum. Le momentum positif (ROC > 0) indique une tendance haussière. Le momentum négatif (ROC < 0) indique une tendance baissière.

## Mécanismes et caractéristiques

Le ROC utilise une période (N) qui est paramétrable. Les valeurs typiques sont 10, 12, 20, ou 30 périodes. Un ROC court (N=10) est plus réactif mais plus bruité. Un ROC long (N=30) est plus lisse mais plus lent.

Les signaux de trading incluent : le croisement de la ligne zéro (ROC passe au-dessus = signal haussier, en dessous = signal baissier), les divergences (prix fait un nouveau haut mais ROC plus bas = divergence baissière), et les lectures extrêmes (ROC > +20 = suracheté potentiel).

Le ROC comme oscillateur : en marché range, le ROC oscille entre des valeurs positives et négatives, offrant des opportunités d'achat (ROC très négatif) et de vente (ROC très positif). En marché trending, le ROC reste positif (ou négatif) pendant longtemps.

Le ROC peut servir de filtre de momentum pour une stratégie. Une stratégie achète seulement si le ROC est positif, confirmant un momentum haussier. Cela réduit les faux signaux en éliminant les trades contre la tendance.

## Nuances, critiques, limites

Le ROC est un indicateur retardataire strict. Il compare le prix actuel à un prix passé, créant un délai inherent. Plus N est grand, plus le délai est grand.

Le ROC ne tient pas compte de la direction du mouvement entre les deux points. Des indicateurs comme le RSI ou le Stochastic Oscillator captent mieux la volatilité intermédiaire.

Le ROC est non borné, ce qui rend les lectures difficiles à interpréter. Un ROC de +5% sur le Bitcoin pendant une semaine peut être normal. Le même +5% sur une altcoin volatile peut être le signe d'un mouvement majeur.

Le [[backtesting]] du ROC montre qu'il fonctionne mieux comme filtre que comme signal principal. Une stratégie qui combine une moyenne mobile (direction) avec un ROC (momentum) outperform les stratégies avec le ROC seul.

## Liens et implications

Le momentum mesuré par le ROC est directement lié à la stratégie de momentum.

Le RSI est lié au ROC mais avec une normalisation.

Les stratégies basées sur le ROC implémentées dans un [[trading bot]] utilisent souvent le ROC comme filtre : ne trader que quand le ROC est au-dessus de zéro (tendance haussière confirmée) ou comme générateur de signal : acheter quand le ROC passe au-dessus de zéro.

## Sources