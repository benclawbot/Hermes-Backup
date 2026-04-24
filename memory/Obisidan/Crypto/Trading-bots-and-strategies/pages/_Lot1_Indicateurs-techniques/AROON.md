---
titre: "AROON"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/tendance, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[ADX (Average Directional Index)]]", "[[Stratégie de momentum]]", "[[Backtesting]]", "[[Trend following]]", "[[RSI Divergence strategy]]", "[[Volatility scaling]]", "[[Trading bot]]"]
liens_opposition: []
---

# AROON

> [!info] Résumé
> L'AROON est un indicateur de tendance créé par Tushar Chande en 1995. Il mesure le temps écoulé depuis le dernier plus haut (Aroon Up) et le dernier plus bas (Aroon Down) sur une période donnée, permettant d'identifier si une tendance haussière ou baissière est en place.

## Définition

L'AROON a été créé par Tushar Chande et présenté dans son livre "The New Technical Trader" (1995). Le nom vient du sanskrit "aroon" signifiant "lumière de l'aube", reflétant l'objectif de l'indicateur : identifier les premières étapes d'une tendance.

L'indicateur se compose de deux lignes : Aroon Up et Aroon Down. Aroon Up mesure le temps (en pourcentage de la période) depuis le dernier plus haut. Aroon Down mesure le temps depuis le dernier plus bas.

Par exemple, avec une période de 25 : si le dernier plus haut était il y a 5 périodes, Aroon Up = (25-5)/25 × 100 = 80. Si le dernier plus bas était il y a 20 périodes, Aroon Down = (25-20)/25 × 100 = 20. L'Aroon Up à 80 indique une forte tendance haussière.

## Contexte et origine

Tushar Chande a développé l'AROON comme un outil pour identifier le début d'une nouvelle tendance. Il cherchait un indicateur qui ne se contentait pas de confirmer une tendance existante (comme les moyennes mobiles) mais qui pouvait détecteri quand une tendance commence.

Chande a publié plusieurs indicateurs durant sa carrière, dont le RSI adaptatif et le Stochastic RSI.

En crypto, l'AROON est moins populaire que l'ADX mais offre une approche différente pour mesurer la force de la tendance.

## Mécanismes et caractéristiques

La règles de trading basique sur l'AROON : si Aroon Up > Aroon Down, la tendance est haussière. Si Aroon Down > Aroon Up, la tendance est baissière. Si les deux lignes sont proches (entre 40 et 60), le marché est en consolidation.

Le croisement Aroon Up/Down est le signal principal. Quand Aroon Up croise au-dessus de Aroon Down, c'est un signal d'achat ( début de tendance haussière). Quand Aroon Down croise au-dessus de Aroon Up, c'est un signal de vente.

La niveau de l'AROON indique la force de la tendance. Un Aroon Up au-dessus de 70 confirme une tendance haussière forte. Un Aroon Down au-dessus de 70 confirme une tendance baissière forte.

L'Aroon Oscillator (différence entre Aroon Up et Aroon Down) simplifie l'analyse. L'Oscillator positif = tendance haussière. Négatif = tendance baissière. Proche de zéro = range.

## Nuances, critiques, limites

L'AROON est un indicateur retardataire car il se base sur les plus hauts et plus bas passés. Il ne prédit pas le futur mais confirme les changements de tendance après qu'ils se soient produits.

L'AROON fonctionne mal en marché latéral. Les croisements fréquents dans un range causent des faux signaux. Un filtre de volatilité (ADX > 25 ou ATR au-dessus d'un seuil) peut réduire ces faux signaux.

La période de l'AROON (par défaut 25) doit être ajustée selon le timeframe. Pour du trading journalier, 25 périodes fonctionne. Pour du scalping, une période plus courte (10-14) peut être nécessaire.

Le [[backtesting]] de l'AROON montre qu'il fonctionne mieux quand la tendance est claire et durable. En marché volatile crypto avec des retournements fréquents, l'AROON seul peut être insuffisant.

## Liens et implications

L'AROON et l'ADX mesurent tous deux la force de la tendance mais avec des méthodes différentes.

La tendance identifiée par l'AROON peut être tradée avec une stratégie de momentum.

L'AROON fait partie des indicateurs utilisés dans l'analyse technique pour bots. Il est souvent combiné avec le RSI pour avoir à la fois la direction (AROON) et les points d'entrée (RSI).

## Sources