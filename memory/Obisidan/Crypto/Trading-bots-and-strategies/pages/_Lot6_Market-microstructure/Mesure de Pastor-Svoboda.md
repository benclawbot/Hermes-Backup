---
titre: "Mesure de Pastor-Svoboda"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/liquidité, #microstructure, #-mesure]
créé: 2026-04-21
liens_forts: ["[[Liquidité]]", "[[Volatilité]]", "[[Illiquidité d'Amihud]]", [["Market impact"]], "[[Risque d'inventaire]]", "[[Théorie de la microstructure]]", "[[Écart bid-ask]]"]
liens_opposition: []
---

# Mesure de Pastor-Svoboda

> [!info] Résumé
> La mesure de Pastor-Svoboda (Pastor et Stambaugh, 2003) quantifie le risque de liquidité d'un actif en mesurant la sensibilité des rendements aux flux d'ordres. Elle complète les autres mesures de liquidité comme l'illiquidité d'Amihud en capturant la résilience du marché.

## Définition

La mesure de Pastor-Svoboda (aussi appelée "PS measure" ou "liquidity beta") est une mesure du risque de liquidité qui capture la sensibilité des rendements d'un actif aux variations du flux d'ordres. Elle est estimée par la régression du rendement de l'actif sur le signe du flux d'ordres du marché. Le coefficient de cette régression (le "beta de liquidité") mesure à quel point l'actif est affecté par les conditions de liquidité du marché.

Plus spécifiquement, la mesure de Pastor-Svoboda est le coefficient γ dans l'équation : r_{i,t+1} = θ_i + γ_i × sign(v_{m,t}) × v_{m,t} + ε_{i,t+1}, oÙ r_i est le rendement de l'actif i, v_m est le flux d'ordres du marché (net buy volume), et sign(v_m) × v_m est le "flux d'ordres signé" qui capture le sens du déséquilibre du marché.

Un gamma élevé (en valeur absolue) signifie que l'actif est très sensible aux conditions de liquidité. Quand le marché est sous pression vendeuse (flux négatif), un actif avec un gamma élevé aura des rendements particulièrement mauvais. Cette sensibilité est le risque de liquidité.

## Contexte et origine

La mesure a été développée par Lubos Pastor et Robert Stambaugh dans leur article seminal de 2003, "Liquidity Risk and Expected Stock Returns". Ils ont montré que le risque de liquidité (la sensibilité aux flux d'ordres) est un facteur de risque qui explique les rendements cross-sectionnels des actions. Les actifs avec un beta de liquidité plus élevé offrent des rendements plus élevés en moyenne pour compenser ce risque.

Le contexte de l'époque est la recherche sur les facteurs de risque en finance. Après la découverte du facteur taille et du facteur valeur, les chercheurs ont exploré d'autres facteurs, dont la liquidité. La mesure de Pastor-Svoboda est devenue l'une des mesures de risque de liquidité les plus utilisées.

Dans l'écosystème crypto, la mesure de Pastor-Svoboda peut être appliquée pour évaluer le risque de liquidité des différents actifs. Les crypto-actifs avec un gamma élevé sont plus sensibles aux conditions de marché générales et peuvent être plus risqués en période de stress.

## Mécanismes / caractéristiques / détails

**Calcul de la mesure** : pour estimer le gamma, on régresse les rendements d'un actif sur le flux d'ordres signé du marché. Le flux d'ordres du marché est calculé comme la différence entre les achats et les ventes agrégés sur le marché. La régression donne un coefficient gamma pour chaque actif.

**Interprétation du gamma** : un gamma de 0.1 signifie qu'un flux d'ordres négatif de 1% du volume (déséquilibre vendeur) est associé à un rendement inférieur de 0.1% pour cet actif. Plus le gamma est grand en valeur absolue, plus l'actif est sensible aux conditions de liquidité.

**Gamma et volatilité** : le gamma est lié à la volatilité mais distinct. Deux actifs peuvent avoir la même volatilité mais des gammas différents si leur sensibilité aux flux d'ordres diffère. Le gamma capture spécifiquement le risque de liquidité, pas le risque général.

**Variation dans le temps** : le gamma n'est pas constant. Il augmente généralement pendant les périodes de crise quand la liquidité se détériore. Les actifs qui semblent liquides en temps normal peuvent avoir un gamma très élevé en période de stress.

**Application à la gestion de portefeuille** : le gamma peut être utilisé pour évaluer le risque de liquidité d'un portefeuille. Un portefeuille avec des actifs à gamma élevé a un risque de liquidité accru. Les risk managers peuvent hedger ce risque ou exiger une prime supplémentaire.

## Nuances, critiques, limites

La mesure de Pastor-Svoboda nécessite des données de flux d'ordres qui ne sont pas toujours disponibles pour tous les marchés. Pour les crypto-actifs à faible volume, estimer un gamma fiable peut être difficile.

Le gamma capture la sensibilité aux flux d'ordres mais ne distingue pas les différentes sources de ce flux. Un flux d'ordres négatif peut être dû à une information fondamentale (vente parce que le prix devrait baisser) ou à une liquidation de liquidité (vente pour lever des liquidités). L'interprétation doit être nuancée.

La relation entre gamma et rendements peut ne pas être stable dans le temps. Ce qui a été un facteur de risque dans le passé peut ne pas l'être à l'avenir. Les stratégies qui utilisent le gamma doivent monitorer sa stabilité.

## Liens et implications

La mesure de Pastor-Svoboda est liée à l'[[Illiquidité d'Amihud]] comme mesure de risque de liquidité. Les deux mesures capturent différents aspects de la liquidité : l'Amihud capture l'impact du volume sur le prix, le Pastor-Svoboda capture la sensibilité aux flux d'ordres du marché.

L'[[Impact de marché]] est lié au gamma. Un actif avec un gamma élevé a un impact plus grand quand le marché est sous pression. Les stratégies d'exécution doivent en tenir compte.

Le [[Risque d'inventaire]] et le gamma sont liés. Un market maker avec un inventaire dans un actif à gamma élevé fait face à un risque de liquidité accru si le marché se retourne.

## Sources

[^1]: Pastor, Lubos, and Robert Stambaugh. "Liquidity Risk and Expected Stock Returns." *Journal of Political Economy* 111 (2003): 642-685.
[^2]: Amihud, Yakov. "Illiquidity and Stock Returns: Cross-Section and Time-Series Effects." *Journal of Financial Markets* 5 (2002): 31-56.
[^3]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.