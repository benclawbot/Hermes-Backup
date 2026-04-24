---
titre: "Risque d'inventaire"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/risque, #microstructure, #inventory]
créé: 2026-04-21
liens_forts: ["[[Market making]]", "[[Incitations du market maker]]", "[[Sélection adverse]]", "[[Écart bid-ask]]", "[[Liquidité]]", "[[Impact de marché]]", "[[Volatilité de la liquidité]]"]
liens_opposition: []
---

# Risque d'inventaire

> [!info] Résumé
> Le risque d'inventaire désigne le danger qu'un market maker ou un trader subit quand le prix de l'actif qu'il détient en inventaire se déplace contre sa position nette. Ce risque est une composante clé du spread et un déterminant majeur des incitations des teneurs de marché.

## Définition

Le risque d'inventaire est le risque financier encouru par un actor qui maintient un inventaire d'actifs financiers. Pour un market maker, le risque d'inventaire survient quand sa position nette (la différence entre ses ordres d'achat et ses ordres de vente exécutés) n'est pas équilibrante. Par exemple, si le market maker a exécuté plus d'ordres d'achat que de ventes, il détient un inventaire long qui vaut moins si le prix baisse.

Le risque d'inventaire est intrinsèquement lié à l'incertitude sur le prix futur. Plus la volatilité du prix est élevée, plus le risque d'inventaire est grand. Le market maker doit être rémunéré pour prendre ce risque, ce qui justifié une partie du [[Écart bid-ask]]. Si le marché est très volatil, le risque d'inventaire est grand et le spread doit être large pour compenser.

La gestion du risque d'inventaire passe par le hedging (couverture) et par l'ajustement des prix. Un market maker qui a un inventaire long peut baisser son bid pour inciter les autres à vendre et réduire son inventaire. Inversement, un inventaire short peut être réduit en augmentant son ask pour décourager les achats.

## Contexte et origine

Le risque d'inventaire a été formalisé dans les modèles de teneurs de marché par Stoll (1978) et par Ho et Stoll (1981). Stoll a montré que le spread peut être décomposé en une composante risque de sélection adverse et une composante risque d'inventaire. Ho et Stoll ont développé un modèle dynamique oÙ le market manager gère son inventaire optimalement.

Dans les marchés crypto, le risque d'inventaire est particulièrement important pour les teneurs de marché sur les altcoins. La volatilité des actifs crypto peut être extrêmement élevée (mouvements de 10-20% en quelques heures), rendant le risque d'inventaire considérable. Les market makers sur le BTC/USDT ont un risque moins élevé car le BTC est moins volatil que la plupart des altcoins.

Les bots de [[Market making]] surveillent leur inventaire en temps réel et ajustent leurs prix automatiquement pour mantener une position cible. Cette gestion active de l'inventaire est essential pour éviter des pertes catastrophiques en cas de mouvement adverse du prix.

## Mécanismes / caractéristiques / détails

**Position nette et risque** : le risque d'inventaire dépend de la taille et de la direction de la position nette. Un market maker avec une position longue de 10 BTC et plus exposé au risque de baisse du prix qu'un market maker avec une position quasi-neutre. La diversification peut réduire le risque d'inventaire agrégé.

**Ajustement des prix** : le market maker ajuste ses prix en fonction de son inventaire. Un inventaire long fait baisser le bid (et potentiellement l'ask) pour encourages les ventes. Un inventaire short fait monter le ask pour decourager les achats. Ces ajustements sont continus et visent à maintain un inventaire proche de zéro.

**Hedging** : pour réduire le risque d'inventaire, les market makers peuvent hedge leur position avec des produits dérivés. Par exemple, un market maker long de 10 BTC peut vendre des contrats futures BTC pour compenser. Le coût du hedge (le basis) est une composante du coût total du market making.

**Volatilité et risque d'inventaire** : la volatilité du prix affecte directement le risque d'inventaire. Avec une volatilité de 5% par jour, la P&L d'un inventaire de 10 BTC peut varier de ±0.5 BTC en une journée. Avec une volatilité de 20%, la variation peut atteindre ±2 BTC. Les market makers exigent une rémunération plus élevée pour prendre ce risque accru.

**Risk limits** : les market makers établissent des limites de risque d'inventaire. Si l'inventaire dépasse un seuil, le market maker réduit ses tailles d'ordres ou se retire du marché. Ces limites prevent des pertes catastrophiques en cas de mouvement extrême du prix.

## Nuances, critiques, limites

Le risque d'inventaire ne peut pas être complètement éliminé pour un market maker sans éliminer aussi le profit. L'objectif est de trouver le niveau optimal de risque d'inventaire qui equilibrates le profit attendu et le risque. Ce problème est un problème d'optimisation sous contrainte de risque.

La relation entre risque d'inventaire et liquidité est complexe. Un market maker qui hedges parfaitement son inventaire peut fournir plus de liquidité à un coût moindre, mais le marché peut avoir une liquidité réduite si tous les market makers adoptent la même stratégie.

Le risque d'inventaire est interconnected avec la [[Sélection adverse]]. Un market maker qui a un inventaire long suite à un achat de la part d'un acteur informé peut être doublement pénalisé : non seulement l'inventaire vaut moins si le prix baisse, mais l'achat lui-même était adverse selection signalant que le prix allait baisser.

## Liens et implications

Le risque d'inventaire est une composante clé des [[Incitations du market maker]]. Sans rémunération pour le risque d'inventaire, aucun market maker ne fournirait de liquidité. Le spread doit être assez large pour compenser le risque.

La [[Volatilité de la liquidité]] est largement déterminée par les réactions des market makers au risque d'inventaire. Quand le risque augmente (volatilité haute), les market makers widden leur spread et réduisent leur taille, réduisant la liquidité.

Les stratégies de [[Trading algorithmique]] qui utilisent l'inventaire comme intrant doivent manage le risque d'inventaire avec soin. Ignorer ce risque peut mener à des drawdowns massifs quand le prix se déplace contre la position nette.

## Sources

[^1]: Stoll, Hans. "The Supply of Brokerage Services." *Bell Journal of Economics* 9 (1978): 250-278.
[^2]: Ho, Thomas, and Hans Stoll. "Optimal Dealer Pricing Under Transactions and Return Uncertainty." *Journal of Financial Economics* 9 (1981): 47-73.
[^3]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.