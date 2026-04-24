---
titre: "Conditional VaR (CVaR)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/risque, #concept/VaR, #concept/queue]
créé: 2026-04-21
liens_forts: ["[[Value at Risk]]", "[[Expected shortfall]]", "[[Tail risk]]", "[[Gestion du risque]]", "[[Risk of ruin]]"]
liens_opposition: []
---

# Conditional VaR (CVaR)

> [!info] Résumé
> Le Conditional VaR (CVaR), aussi appelé Expected Shortfall (ES), mesure la perte moyenne dans les scénarios au-delà du VaR. C'est une mesure plus complète du risque de queue que le VaR seul, pénalisant les stratégies avec des pertes extrêmes fréquentes.

## Définition

Le Conditional VaR (CVaR), également connu sous le nom d'Expected Shortfall (ES), est défini comme la perte moyenne attendue conditionnelle au fait que la perte dépasse le Value at Risk (VaR). Si le VaR 95% est de 1000€ et le CVaR 95% est de 2500€, cela signifie que dans les 5% de cas les plus mauvais, la perte moyenne est de 2500€.

La formule est : CVaR_alpha = E[Loss | Loss > VaR_alpha]. Cette définition mathématique capture l'intuition que le risque ne se mesure pas seulement au seuil, mais aussi à ce qui se passe au-delà.

Le CVaR est toujours supérieur ou égal au VaR (pour le même niveau de confiance). Plus l'écart entre CVaR et VaR est grand, plus la distribution a des queues grasses. En crypto, cet écart est souvent très important.

Le CVaR est considéré comme une mesure de risque "cohérente" au sens d'Artzner et al. (1997), contrairement au VaR qui ne l'est pas. Une mesure cohérente satisfait certaines propriétés mathématiques qui garantissent qu'elle se comporte comme un vrai mesure du risque.

## Contexte et origine

Le concept de CVaR/Expected Shortfall a été développé par la communauté académique dans les années 1990, mais son adoption réglementaire date de après la crise de 2008. Le comité de Bâle III l'a proposé comme mesure alternative au VaR.

Les propriétés mathématiques du CVaR ont été formalisées par Artzner, Delbaen, Eber et Heath (1999) dans leur article "Coherent Measures of Risk". Cet article a established les axiomes que toute mesure de risque devrait satisfaire.

En pratique, le CVaR est maintenant utilisé par les banques et les fonds pour le calcul des exigences de fonds propres. Les régulateurs ont réalisé que le VaR seul ne capture pas adéquatement les risques de queue qui ont causé la crise de 2008.

Pour les[[Trading bot]]s crypto, le CVaR est particulièrement pertinent car les crypto-actifs ont des distributions de rendement avec des queues très grasses. Les flash crashes et les pump and dump sont fréquents et génèrent des pertes qui dépassent largement le VaR.

## Mécanismes et caractéristiques

Le calcul du CVaR nécessite d'estimer ou de simuler la distribution des rendements au-delà du VaR. Pour une distribution normale, le CVaR a une formule analytique. Pour des distributions complexes, on utilise la simulation Monte Carlo.

La méthode la plus simple est historique : après avoir trié les rendements, on calcule la moyenne des X% pires rendements. Si on a 1000 jours de données et qu'on veut le CVaR 95%, on fait la moyenne des 50 pires jours.

Le CVaR peut être utilisé pour le dimensionnement des positions. Une règle simple : taille de position = capital × (max drawdown tolerable) / CVaR. Cela garantit que même dans les pires 5% de cas, la perte ne dépasse pas le drawdown max tolerable.

En[[Risk budgeting]], le CVaR peut être alloué entre les différentes stratégies. Chaque stratégie reçoit une part du budget de CVaR proportionnellement à son CVaR. Cela assure que le risque total du portefeuille reste borné.

## Nuances, critiques, limites

Le CVaR est plus difficile à estimer que le VaR car il nécessite de bien modéliser les queues de distribution. Les queues étant rares par définition, leur estimation est imprécise avec des échantillons finis.

Le CVaR ne spécifie pas quelle est la perte maximale dans les pires scénarios. L'écart-type des pertes au-delà du VaR peut être très grand. Deux stratégies avec le même CVaR peuvent avoir des profils de risque très différents.

Le niveau de confiance (95%, 99%) doit être choisi soigneusement. Un niveau plus élevé donne une mesure plus conservatrice mais avec plus de variance d'estimation. Pour le trading crypto, un niveau de 99% est souvent justifié vu les événements extrêmes fréquents.

Le CVaR est plus sensible aux données extrêmes que le VaR. Un seul événement de perte extrême peut significativement augmenter le CVaR. Les estimateurs robustes doivent gérer ces valeurs aberrantes.

## Liens et implications

Le [[Conditional VaR]] est une autre dénomination de l'[[Expected shortfall]]. Ces deux termes sont interchangeables dans la plupart des contextes. Le CVaR complète le [[Value at Risk]] en mesurant le risque au-delà du seuil.

Le [[Tail risk]] est le risque que les pertes dépassent le VaR. Le CVaR est la mesure directe de ce risque de queue. Une stratégie avec un bon VaR mais un CVaR élevé a un tail risk important.

La[[Gestion du risque]] moderne utilise le CVaR comme mesure principale plutôt que le VaR. Le [[Risk of ruin]] est influencé par le CVaR : un CVaR élevé augmente le risque de ruine.

## Sources

[^1]: Rockafellar, "Optimization of Conditional Value-at-Risk", Journal of Risk (2000)
[^2]: Hull, "Risk Management and Financial Institutions", Wiley (2018)
