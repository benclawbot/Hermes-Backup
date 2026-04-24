---
titre: "Expected shortfall"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/risque, #concept/queue, #concept/VaR]
créé: 2026-04-21
liens_forts: ["[[Value at Risk]]", "[[Conditional VaR]]", "[[Tail risk]]", "[[Gestion du risque]]", "[[Risk of ruin]]"]
liens_opposition: []
---

# Expected shortfall

> [!info] Résumé
> L'Expected shortfall (ES), aussi appelé Conditional VaR (CVaR), mesure la perte moyenne dans les pires X% scénarios. Contrairement au VaR qui ne donne que le seuil de perte, l'ES capture aussi l'amplitude des pertes en cas de crise.

## Définition

L'Expected Shortfall (ES) est une mesure de risque qui quantifie la perte moyenne attendue dans les pires conditions de marché. Si le VaR au 95% est de 10 000€, l'ES au 95% est la moyenne de toutes les pertes qui dépassent 10 000€. C'est une mesure plus complète du risque de queue que le VaR.

La formule mathématique de l'ES au niveau de confiance alpha est : ES_alpha = E[Loss | Loss > VaR_alpha]. En pratique, cela revient à calculer la moyenne des 5% pires pertes si alpha = 95%.

Par exemple, si un trading bot a un VaR quotidien 95% de 500€ et un ES quotidien 95% de 2000€, cela signifie que dans 5% des cas les plus mauvais, la perte moyenne est de 2000€. Le VaR sous-estime le risque car il ne dit pas ce qui se passe au-delà du seuil.

L'ES est devenu une mesure standard après la crise financière de 2008 qui a révélé les limites du VaR. En effet, le VaR de nombreuses institutions était correct jusqu'au jour où les pertes ont dépassé le seuil, provoquant des blow-ups.

## Contexte et origine

L'Expected Shortfall a été formalisé dans les années 1990 mais n'est devenu une mesure réglementaire qu'après la crise de 2008. Le comité de Bâle l'a proposé comme alternative au VaR dans le cadre de Bâle III.

Artzner et al. (1997) ont défini les propriétés mathématiques de ces mesures de risque, montrant que le VaR n'est pas une mesure cohérente du risque contrairement à l'ES. Une mesure cohérente doit satisfaire certaines propriétés axiomatiques qui garantissent la consistance du risque.

En trading algorithmique crypto, l'ES est particulièrement pertinent car les crypto-markets ont des queues grasses significatives. Les événements de type "flash crash" ou "pump and dump" fréquents signifient que les pertes peuvent être extrêmes même quand le VaR semble acceptable.

## Mécanismes et caractéristiques

L'ES se calcule par simulation ou par approximation analytique. La méthode la plus courante est la simulation Monte Carlo : on génère des milliers de scénarios de marché, on calcule la perte dans chaque scénario, et on fait la moyenne des pires 5%.

Les paramètres standards sont l'ES 95% (moyenne des pires 5%) et l'ES 99% (moyenne des pires 1%). L'ES 99% est plus exigeant et utilisé pour les positions sensibles au risque.

En trading bot, l'ES peut être utilisé pour dimensionner les positions. Si un bot a un ES 95% de 1000€ sur une journée, on peut décider de ne risquer que 500€ par trade pour avoir une marge de sécurité.

L'ES temporel est également utile. L'ES 99% sur 10 jours donne une estimation de la perte maximale sur une période de 10 jours avec 99% de confiance.

## Nuances, critiques, limites

L'ES est plus difficile à estimer que le VaR car il nécessite de modéliser les queues de distribution. Les queues étant rares par définition, leur estimation est imprécise et dépend fortement du modèle utilisé.

L'ES ne spécifie pas quelle est la perte maximale dans les pires scénarios. L'ES 95% dit que la perte moyenne dans les 5% pires cas est de X, mais le pire cas pourrait être 10X. Pour une mesure plus conservatrice, d'autres métriques comme le Worst Case Scenario sont nécessaires.

Le choix du niveau de confiance (95%, 99%) affecte significativement l'ES. Un ES 99% sera toujours plus élevé qu'un ES 95% pour la même stratégie, mais le rapport entre les deux dépend de la forme de la distribution.

L'ES historique (basé sur les données passées) peut sous-estimer le risque si les événements passés n'étaient pas assez extrêmes. Le futur pourrait être plus mauvais que l'historique, surtout en crypto.

## Liens et implications

L'[[Expected shortfall]] est une version plus complète du [[Value at Risk]]. Les deux mesures doivent être utilisées ensemble pour avoir une image complète du risque. Le VaR donne le seuil, l'ES donne l'amplitude au-delà du seuil.

Le [[Tail risk]] est le risque que les pertes dépassent le VaR, et l'ES est la mesure directe de ce risque de queue. Une stratégie avec un bon VaR mais un ES élevé a un risque de queue important.

La[[Gestion du risque]] utilise l'ES pour les stress tests. En combinant l'ES avec des scénarios de crise, on peut évaluer comment une stratégie se comporterait dans des conditions extrêmes.

Le [[Risk of ruin]] intègre l'ES comme input. Une stratégie avec un ES très élevé a plus de chance d'atteindre la ruine, même si le VaR semble acceptable.

## Sources

[^1]: Artzner, "Coherent Measures of Risk", Mathematical Finance (1999)
[^2]: Hull, "Risk Management and Financial Institutions", Wiley (2018)
