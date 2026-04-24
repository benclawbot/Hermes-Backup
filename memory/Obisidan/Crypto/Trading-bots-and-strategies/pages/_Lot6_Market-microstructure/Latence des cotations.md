---
titre: "Latence des cotations"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/latence, #microstructure, #technologie]
créé: 2026-04-21
liens_forts: ["[[Haute fréquence]]", "[[Market making]]", "[[Écart bid-ask]]", "[[Order book dynamics]]", "[[Arbitrage]]", "[[Données de niveau 2]]", "[[Trading algorithmique]]"]
liens_opposition: []
---

# Latence des cotations

> [!info] Résumé
> La latence des cotations (quote latency) désigne le délai entre le moment oÙ une information arrive sur un marché et le moment oÙ cette information est reflétée dans les prix affichés. Elle détermine la vitesse à laquelle les prix incorporent l'information nouvelle et crée des avantages compétitifs pour les participants les plus rapides.

## Définition

La latence des cotations est le temps qui s'écoule entre la survenance d'un événement informationnel (une nouvelle, un changement de prix sur un autre marché, une exécution) et la réception de l'information actualisée par les teneurs de marché pour mettre à jour leurs prix. Dans un contexte crypto oÙ les échanges sont électroniques et les marchés connectés, la latence se mesure typiquement en millisecondes ou microsecondes.

La latence inclut plusieurs composantes : le temps de transmission du signal (fibre optique, micro波), le temps de traitement de l'information par les systèmes de trading, le temps de décision (algorithme), et le temps d'émission du nouvel ordre. Sur les marchés modernes, la latence totale pour un participant haute fréquence peut être de l'ordre de la microseconde (un millionième de seconde) pour les systèmes les plus sophistiqués.

La latence varie selon les participants. Les joueurs les plus rapides (les "co-located" qui ont leurs serveurs dans les mêmes data centers que les exchanges) ont des latences de l'ordre de la microseconde. Les participants normaux via internet peuvent avoir des latences de 10 à 100 millisecondes. Cette asymétrie crée une advantage structurelle pour les acteurs technologiques.

## Contexte et origine

La préoccupation pour la latence émerge dans les années 1990 avec l'avènement du trading électronique. Les premières plateformes d'exécution automatique ont créé une course à la vitesse. Les firmes de trading haute fréquence ont invest massivement dans la réduction de latence, menant à la co-location des serveurs et aux connexions directes aux exchange systems.

Le phénomène est particulièrement visible dans les marchés crypto oÙ les exchanges sont généralement located dans quelques data centers majeurs (Singapour, Tokyo, New York, Francfort). Les participants qui co-localisent leurs systèmes près des exchanges réduire leur latence de transmission et gagnent un avantage compétitif. Les teneurs de marché haute fréquence comme Jump Trading ou Tower Research sont présents sur les principaux exchanges crypto.

La course à la latence a créé des débats sur l'équité du marché. Les participants qui ne peuvent pas se permettre la co-localisation ou les infrastructures à basse latence se plaignent d'un jeu déloyal. Les régulateurs ont introduit des "[[Market timing|Timing/rules]]" pour limiter certains avantages, mais la problématique persiste.

## Mécanismes / caractéristiques / détails

**Composantes de la latence** : la latence totale est la somme de plusieurs délais. La latence de transmission est le temps que prend le signal pour parcourir la distance physique entre le participant et l'exchange. La latence de processing est le temps de traitement de l'ordre par les systèmes du participant. La latence décisionnelle est le temps de calcul de la réponse algorithmique. La latence d'émission est le temps pour placer l'ordre sur le marché.

**Latence et arbitrage** : les stratégies d'arbitrage reposent sur la vitesse. Un arbitrageur achète sur un exchange oÙ le prix est bas et vend sur un exchange oÙ le prix est haut. Plus la latence est basse, plus l'arbitragiste peut capturer des opportunités avant qu'elles ne disparaissent. Quand la latence dépasse la fenêtre d'opportunité, l'arbitrage n'est plus rentable.

**Latence et market making** : les market makers qui ont une latence plus basse que leurs concurrents peuvent publier des prix plus précis plus rapidement, réduisant leur risque de sélection adverse. Un market maker rapide voit une information avant un market maker lent et peut ajuster ses prix en premier, évitant d'être adversely selected par des ordres informés.

**Latence et impact** : la latence affecte aussi l'impact de marché. Un participant avec une latence très basse peut fractionner ses ordres de façon plus optimale, réduisant l'impact. Les participants plus lents subissent un impact plus grand car leurs ordres sont exécutés alors que le marché a déjà bougé.

**Latence et OBI** : les participants à basse latence ont une vue plus nette du déséquilibre du carnet. Ils voient l'OBI se développer plus tôt et peuvent réagir avant les participants plus lents. Cela crée un avantage informationnel basé sur la vitesse plutôt que sur l'analyse.

## Nuances, critiques, limites

La course à la latence a des rendements décroissants. Après un certain point, réduire la latence de microsecondes à nanosecondes n'apporte pas de avantage significatif car les autres facteurs (qualité du signal, modèle de trading) deviennent plus importants. L'investissement dans la réduction de latence doit être évalué contre le retour attendu.

La latence alone ne crée pas de valeur. Un participant avec la latence la plus basse mais un mauvais modèle de trading ne sera pas profitable. La latence n'est qu'un avantage compétitif qui doit être combiné avec une stratégie de trading robuste.

La co-localisation pose des problèmes d'équité. Les petits participants ne peuvent pas se permettre de co-localiser leurs serveurs, créant un fossé technologique. Certains proposent des "slow market" oÙ tous les participants auraient la même latence, mais ces propositions sont controversées car elles réduiraient la liquidité.

## Liens et implications

La latence est un facteur critique pour les stratégies de [[Haute fréquence]]. Les bots HF utilisent leur avantage de latence pour deleter des opportunités d'arbitrage, ajuster les prix de market making, et réagir aux ordres des autres participants. Sans cet avantage, ces stratégies ne seraient pas rentables.

Les stratégies de [[Arbitrage]] sont directement affectées par la latence. Quand les fenêtres d'arbitrage sont de l'ordre de millisecondes, seul un participant à basse latence peut les capturer. Les autres participants voient les opportunités disparaître avant de pouvoir les exécuter.

Le [[Market timing]] basé sur des nouvelles ou des événements macro dépend de la latence pour être effectif. Un trader qui veut être le premier à réagir à une nouvelle doit avoir une latence plus basse que les autres participants visés.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Angel, James. "HyperbolicCosmic Latency and the Fairness of Markets." *Georgetown University* working paper, 2014.
[^3]: Lewis, Michael. *Flash Boys: A Wall Street Revolt*. W.W. Norton, 2014.