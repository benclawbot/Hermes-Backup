---
titre: "Ratio annulation-commerce"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ratio, #microstructure, #liquidité]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Liquidité]]", "[[Toxicité du marché]]", "[[Écart bid-ask]]", "[[Order book dynamics]]", "[[Ordre iceberg]]", "[[Frais maker vs taker]]"]
liens_opposition: []
---

# Ratio annulation-commerce

> [!info] Résumé
> Le ratio annulation-commerce (cancel-to-trade ratio, CTR) mesure le nombre d'ordres annulés par rapport au nombre d'ordres exécutés. Il est utilisé pour évaluer la qualité de la liquidité et détecter les pratiques de manipulation de marché.

## Définition

Le ratio annulation-commerce mesure la proportion d'ordres annulés par rapport aux ordres qui sont effectivement exécutés (filled). Si un exchange reçoit 1000 ordres et que 950 sont annulés avant exécution et 50 sont exécutés, le CTR est de 950/50 = 19. Un CTR de 19 signifie qu'il y a 19 annulations pour chaque exécution. Plus le ratio est élevé, plus il y a d'ordres annulés par rapport aux exécutions.

Le CTR est un indicateur de la qualité de la liquidité affichée. Un carnet d'ordres peut montrer une grande profondeur avec beaucoup de volume à différents niveaux, mais si ces ordres sont principalement annulés avant exécution, la liquidité réelle est bien moindre que la liquidité affichée. Cette situation est parfois appelée "phantom liquidity" ou liquidité fantôme.

Le CTR est particulièrement pertinent pour évaluer les stratégies de market making. Un market maker qui annule beaucoup d'ordres (CTR élevé) peut être en train de pratiquer du "[[Quote stuffing]]" ou du "[[Layering]]", des pratiques destinées à créer une fausse impression de liquidité. Les régulateurs surveillent le CTR pour détecter ces manipulations.

## Contexte et origine

Le ratio annulation-commerce est devenu une métrique standard après les préoccupations regulators suite à la crise financière de 2008 et les scandales de manipulation sur les marchés électroniques. Les régulateurs financiers (SEC aux États-Unis, AMF en France, FCA au Royaume-Uni) ont commencé à surveiller les CTR comme indicateur de manipulation et de qualité de la liquidité.

Dans l'écosystème crypto, les exchanges centralisés publient parfois des statistiques de CTR ou permettent aux chercheurs de calculer le ratio à partir des données de flux d'ordres. Les plateformes comme Binance, Coinbase, et Kraken ont des politiques différentes concernant l'annulation des ordres, certaines facturant les annulations pour décourager la pratique.

Les chercheurs en microstructure ont établi que le CTR varie selon le type de marché. Les marchés avec dominance de market makers ont tendance à avoir des CTR plus élevés car les teneurs annulent et remplacent constamment leurs ordres pour maintenir des prix compétitifs.

## Mécanismes / caractéristiques / détails

**Calcul du CTR** : le ratio se calcule comme (Nombre d'ordres annulés) / (Nombre d'ordres exécutés). Certains calculs incluent les modifications d'ordres comme des annulations-réclamations, augmentant ainsi le ratio. La définition précise dépend de l'exchange et de la méthodologie du chercheur.

**CTR et liquidité** : un CTR faible (proche de 1) indique une liquidité "réelle" oÙ les ordres passés sont généralement exécutés. Un CTR élevé (supérieur à 10 ou 20) peut indiquer une liquidité "fantôme" oÙ les ordres sont principalement là pour l'affichage et non pour l'exécution. Cette distinction est importante pour les traders qui se basent sur la profondeur du carnet.

**CTR et volatilité** : le CTR augmente généralement pendant les périodes de volatilité. Les market makers annulent plus d'ordres quand les conditions sont incertaines pour éviter d'être adversely selected. Un pic de CTR pendant une période de stress peut thus signaler une deterioration de la liquidité.

**CTR et stratégies** : certaines stratégies de trading utilisent le CTR comme indicateur de sentiment. Un CTR très élevé sur le côté achat peut indiquer que les traders passent des ordres mais les annulents avant exécution, signalant une hésitation. Inversement, un CTR faible avec un volume d'exécution élevé peut indiquer une conviction directionnelle.

**CTR et régulation** : les régulateurs ont établi des seuils de CTR au-delà desquels une investigation est déclenchée. Une pratique appelée "layering" consiste à placer plusieurs ordres à différents niveaux sans intention de les exécuter, créant une fausse profondeur. Le CTR permet de détecter cette pratique.

## Nuances, critiques, limites

Le CTR alone n'est pas suffisant pour détecter la manipulation. Un market maker légitime peut avoir un CTR élevé car il annule beaucoup d'ordres en réponse aux mouvements du marché. La distinction entre annulations "légitimes" et "manipulatrices" requiert un contexte additionnel comme le timing des annulations et la direction du flux d'ordres.

Le CTR varie selon les types d'ordres. Les "[[Ordre iceberg|ordres iceberg]]" ont naturellement des taux d'annulation différents des ordres standards car leur visibilité est limitée. Les ordres avec des conditions (stop orders) ont des comportement de CTR différents des ordres immediate-or-cancel.

La interprétation du CTR doit aussi considerer la compétition entre market makers. Sur un marché très concurrentiel, chaque market maker annule fréquemment pour mantener sa compétitivité, même si la liquidité réelle est sana. Le CTR agrégé peut être élevé sans que la liquidité soit problématique.

## Liens et implications

Le CTR est lié à la [[Liquidité]] car il mesure la qualité de la liquidité affichée. Un carnet avec un CTR très élevé peut montrer une profondeur impressionnante mais une liquidité réelle faible. Les traders qui se basent uniquement sur la profondeur sans considérer le CTR peuvent être surpris par le [[Slippage]] lors de l'exécution.

Le CTR fait partie des indicateurs surveillés par les stratégies de [[Market making]]. Un market maker doit gérer son CTR pour éviter d'être suspendu par l'exchange (certains exchanges ont des limites de CTR) tout en maintenant des prix compétitifs.

Le CTR peut aussi être un signal précoce de "[[Toxicité du marché]]". Une augmentation soudaine du CTR peut précéder un mouvement de prix important car les market makers se retirent en annulant leurs ordres, révélant un manque de liquidité.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: BEA. "Phantom Liquidity and the Cancel-to-Trade Ratio." *CFTC Data White Paper*, 2020.
[^3]: Biais, Bruno, Thierry Foucault, and Sophie Moinas. "Equilibrium Fast Trading." *Journal of Finance* 70 (2015): 1513-1549.