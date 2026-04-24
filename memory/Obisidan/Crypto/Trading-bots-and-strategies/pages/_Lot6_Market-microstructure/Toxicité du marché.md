---
titre: "Toxicité du marché"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/toxicité, #microstructure, #risque]
créé: 2026-04-21
liens_forts: ["[[Écart bid-ask]]", "[[Sélection adverse]]", "[[Liquidité]]", "[[Impact de marché]]", "[[Market making]]", "[[Slippage]]", "[[Ordre au marché]]"]
liens_opposition: []
---

# Toxicité du marché

> [!info] Résumé
> La toxicité du marché mesure le risque qu'un trader soit adversely selected par des counterparties mieux informées. Elle captures la probabilité que les transactions soient initiées par des acteurs détenant une information privée sur la vraie valeur de l'actif.

## Définition

La toxicité du marché (market toxicity) est un concept de la microstructure qui quantifie le risque de [[Sélection adverse]] sur un marché donné. Un marché "toxique" est un marché oÙ les participants qui fournissent de la liquidité (les market makers ou les traders passifs) sont régulièrement adversely selected par des counterparties qui possèdent une information privilégiée. Cela signifie que les ordres passés à cours limité sont plus susceptibles d'être "picked off" par des ordres initiés par des acteurs mieux informés, générant des pertes systématiques pour les fournisseurs de liquidité.

La toxicité se manifeste typiquement par un Widening du [[Écart bid-ask]] au-delà de ce que la volatilité ou les coûts de transaction seuls justifieraient. Elle augmente quand le flux d'ordres est dominé par des ordres motivés par l'information privée plutôt que par des ordres de liquidité.

La toxicité peut être estimée via plusieurs métriques. La plus courante est la directionality du flux d'ordres : un flux fortement directionnel (très déséquilibré entre achats et ventes) signale une information privée. Une autre métrique est le "Order flow toxicity" basé sur le modèle de Glosten-Milgrom, calculé comme la probabilité conditionnelle que le counterpartie ait eu une information.

## Contexte et origine

Le terme "toxicité" dans le contexte de la microstructure est popularisé dans les années 2000 par les desks de trading algorithmique institutionnel, particulièrement chez les teneurs de marché et les desks de facilitation qui gèrent le risque de sélection adverse de leurs clients. Le concept émerge des travaux fondateurs de Glosten-Milgrom (1985) et des extensions de Kyle (1985) sur l'équilibre du marché avec information asymétrique.

Dans l'écosystème crypto, la toxicité du marché est particulièrement visible sur les paires交易活跃 avec un volume élevé de trading algorithmique. Les bots de [[Haute fréquence]] sophistiqués scannent le flux d'ordres pour détecter des patterns motivés par l'information et éviter de fournir de la liquidité dans ces conditions. Les teneurs de marché qui ne surveillent pas la toxicité sont régulièrement adversely selected par ces participants informés.

## Mécanismes / caractéristiques / détails

**Mécanismes de toxicité** : la toxicité émerge quand un participant reçoit des ordres dont la direction est predictive de mouvements de prix ultérieurs. Si un market maker reçoit un flux d'ordres d'achat significativement directionnel, cela peut indiquer que des acteursInformés savent que le prix va monter. Le market maker ajuste alors ses prix (élargit son spread) pour se compenser du risque de adverse selection.

**Impact sur les teneurs de marché** : quand la toxicité augmente, les market makers réduire their inventory exposure et widden their spread. Certains peuvent cesser de fournir de la liquidité côté achat (bid side) si les ordresются продавцы informés. Cette réaction amplifie la volatilité et peut créer des cycles de liquidité dégradée.

**Détection de la toxicité** : lesAlgorithmes de market making监控ent les statistiques de flux d'ordres pour mesurer la toxicité en temps réel. Une augmentation du volume d'ordres initiés par rapport aux ordres exécutés (ratio annulation-commerce élévé) peut indiquer une toxicité accrue. De même, un flux fortement directionnel sur une période courte signale une possible information privée.

**Toxicité et volatilité** : la toxicité augmente généralement avec la volatilité car les conditions volatiles attirent plus d'activité motivée par l'information. Pendant les périodes de stress sur les marchés crypto (liquidation cascades, panique des ventes), la toxicité peut augmenter considérablement

**Toxicité cross-exchange** : la toxicité n'est pas uniforme entre les exchanges pour le même actif. Un exchange avec plus de participants informés (par exemple, un exchange avec des outils de surveillance de flux plus sophistiqués) peut avoir une toxicité plus élevée. Lesarbitrageurs exploitent ces différences, mais leurs activités equalisent partiellement les prix sans éliminer la toxicité.

## Nuances, critiques, limites

La toxicité est un concept qui se mesure imparfaitement. Plusieurs métriques existent sans consensus sur la meilleure. L'"PIN" (Probability of Informed Trading) de Easley et al. est l'une des mesures les plus citées mais sa calculation requiert des données de flux d'ordres détaillées pas toujours disponibles. Pour les praticiens crypto, des approximations basées sur la directionality du flux sont plus accessibles mais moins robustes.

La toxicité peut être confinée avec certaines stratégies de hedging. Un market maker qui hedging son inventaire avec des contrats futures ou des produits dérivés peut réduire son exposition à la sélection adverse, mais le coût du hedge eating into profits. Les stratégies de "smoking" (exploiter les ordres informés sans les prendre comme contrepartie) sont actives dans les marchés crypto mais nécessitent une technologie et une vitesse que tous les participants n'ont pas.

L'interprétation de la toxicité doit aussi considerer les variations normales du flux d'ordres. Un flux directionnel n'est pas toujours dû à une information privée ; il peut refléter un repositionnement de risk ou des facteurs macro. La distinction entre flux motivé par l'information et flux de liquidité est un problème empirique non résolu.

## Liens et implications

La toxicité du marché affecte directement la rentabilité des stratégies de [[Market making]]. Une stratégie de market making naive qui ne monitore pas la toxicité sera adversely selected et générer des pertes systématiques sur les marchés oÙ les participants informés sont actifs. Les bots de market making sophistiqués ajustent leurs tailles et leurs spreads en fonction de la toxicité mesurée.

Les stratégies de [[Arbitrage]] statistiques qui ne monitorent pas la toxicité peuvent être contraintes par les mouvements de prix liés à la sélection adverse. Un arbitrageur qui achète sur un exchange et vend sur un autre peut découvrir que le "résultat gratuit" disparaît car les prix se sont MOVES contre lui avant qu'il puisse closes the trade.

Le [[Backtesting]] sur des données historiques ne capture pas la toxicité car les flux d'ordres motivés par l'information ne sont généralement pas disponibles dans les données de transaction. Les stratégies qui apparaissent profitables en backtesting peuvent échouer en live trading à cause de la sélection adverse non capturée.

## Sources

[^1]: Glosten, Lawrence, and Paul Milgrom. "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *Journal of Financial Economics* 14 (1985): 71-100.
[^2]: Easley, David, Nicholas Kiefer, et Maureen O'Hara. "The Probability of Informed Trading." *Journal of Finance* 48 (1993): 1-18.
[^3]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.