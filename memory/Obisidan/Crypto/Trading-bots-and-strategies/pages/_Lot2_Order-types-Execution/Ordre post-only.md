---
titre: "Ordre post-only"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #méthode/exécution, #trading/avancé]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Frais maker vs taker]]", "[[Market making]]", "[[Order book dynamics]]", "[[Liquidité]]"]
liens_opposition: ["[[Ordre au marché]]"]
---

# Ordre post-only

> [!info] Résumé
> Un ordre post-only est un ordre à cours limité qui, s'il serait exécuté immédiatement, est automatiquement annulé plutôt qu'exécuté comme preneur de liquidité (taker). Il garantit que le trader sera toujours injecteur de liquidité (maker) et percevra les frais maker.

## Définition

L'ordre post-only est une instruction spécifique aux ordres à cours limité qui assure que l'ordre ne sera jamais exécuté en tant que taker (preneur de liquidité). Si l'ordre serait exécuté immédiatement au prix du marché au moment de son placement (ce qui en ferait un taker), l'exchange l'annule purement et simplement plutôt que de l'exécuter.

Le post-only est l'outil du market maker ou du trader qui souhaite impérativement être maker et percevoir les rabais associés. C'est une protection contre l'erreur de placement d'ordre : si le prix du marché est trop proche du prix de l'ordre et impliquerait une exécution immédiate, l'ordre est annulé plutôt que d'engager des frais taker plus élevés.

L'ordre post-only est équivalent à un ordre à cours limité classique mais avec une règle additionnelle : ne pas prendre. Si le prix limite est tel que l'ordre serait dans le money, il est tué.

## Contexte et origine

Le post-only émerge quand les exchanges ont commencé à offrir des rabais aux makers (ceux qui ajoutent de la liquidité au carnet) tout en facturant des frais plus élevés aux takers (ceux qui en retirent). Cette structure de frais asymétrique, d'abord popularisée par les plateformes de trading crypto comme Binance et FTX, a créé un incitatif fort à être toujours maker, d'où le besoin d'une protection contre les accidents de placement.

Dans le contexte du [[Market making]], le post-only est quasi indispensable. Un market maker place simultanément des ordres d'achat et de vente aux deux côtés du spread. Si son algorithme est trop lent et que le prix se déplace entre le moment du calcul et celui du placement, l'ordre pourrait être exécuté comme taker au lieu de maker, transformant un trade gagnant en trade perdant à cause des frais.

Sur les plateformes comme Binance Futures, le post-only est une option standard sur tous les ordres à cours limité. Les [[Trading bot|algorithmes de market making]] l'utilisent systématiquement pour garantir leur statut de maker.

## Mécanismes / caractéristiques / détails

**Logique d'exécution conditionnelle** : au moment où l'ordre est reçu par l'exchange, le système compare le prix limite de l'ordre avec le prix du marché (meilleur bid / meilleur ask). Si le prix de l'ordre est du bon côté du spread (plus élevé pour une vente, plus bas pour un achat), l'ordre est placé dans le carnet comme ordre maker. Si l'ordre serait exécuté immédiatement (prix de l'ordre de vente ≤ meilleur bid, prix de l'ordre d'achat ≥ meilleur ask), l'ordre est annulé.

**Garantie de frais maker** : le post-only assure le trader qu'il ne paiera jamais les frais taker, plus élevés. En contrepartie, il renonce à la certitude d'exécution : si le prix ne revient pas au niveau de l'ordre, celui-ci reste en attente et peut même expirer selon la [[Durée de validité de l'ordre]] paramétrée.

**Exemple concret** : si BTC/USDT est à 60 000 / 60 001 (bid/ask) et qu'un trader place un ordre d'achat post-only à 60 002, cet ordre ne serait pas exécuté immédiatement (car 60 002 > ask de 60 001), il serait placé dans le carnet comme ordre d'achat à 60 002, en position de maker. Si le même trader place un ordre post-only à 60 000 (égale au bid), il serait annulé car il y a déjà un ask à 60 001 — l'ordre serait exécuté immédiatement en tant que taker, ce que le post-only interdit.

**Interaction avec le spread** : plus le spread est large, plus il est facile de placer un ordre post-only qui ne sera pas exécuté immédiatement. Sur des marchés à fort spread (comme certaines altcoins), le post-only est très protecteur mais la probabilité d'exécution peut être faible si le prix ne revient pas vers le niveau visé.

**Rabais maker** : les exchanges qui offrent des rabais maker (sur Binance Futures par exemple, les rabais sont de 0,018 % pour les makers vs 0,045 % de frais takers) rendent le post-only particulièrement attractif. Le différentiel de 0,027 % par trade peut représenter un avantage significatif pour les stratégies à haute fréquence.

## Nuances, critiques, limites

**Risque d'opportunité (opportunity risk)** : le principal inconvenient du post-only est qu'il peut générer une longue période de non-exécution si le prix ne revient pas au niveau attendu. Pour une stratégie de [[Stratégie de momentum]] qui a besoin d'entrer rapidement, le post-only peut faire manquer le trade car l'ordre est annulé plutôt qu'exécuté au marché.

**Subtilité du meilleur bid/ask** : le post-only dépend du meilleur prix evident. Sur des marchés avec plusieurs niveaux de prix ([[Données de niveau 2]]), le prix de déclenchement de l'annulation peut être influencé par la profondeur du livre. Un ordre peut être annulé même si le prix "moyen" du marché serait favorable, parce que le meilleur bid/ask immédiat est trop proche.

**Sur les marchés très volatiles** : en période de forte volatilité, le spread peut s'élargir temporairement, permettant aux ordres post-only d'être placés mais avec un risque que le prix revienne et exécute défavorablement avant que l'ordre ne puisse être annulé ou ajusté.

**Incompatible avec les stratégies de prise de liquidité** : toute stratégie dont le but est précisément de prendre la liquidité (par exemple certaines stratégies d'[[Arbitrage]]) ne peut pas utiliser le post-only. C'est un outil pour les stratégies de [[Market making]] et les approches où le trader veut bénéficier du spread.

## Liens et implications

Le post-only est intimement lié à la structure de [[Frais maker vs taker]] qui le rend si attractif. Sur les plateformes où les frais maker sont inférieurs aux frais takers (la majorité des exchanges modernes), le post-only est la norme pour les ordres où l'on souhaite être maker.

Dans les stratégies de [[Market making]], le post-only est une protection essentielle contre les erreurs d'un algorithme qui pourrait accidentellement prendre la liquidité quand il intendait en fournir. C'est un garde-fou automatique qui garantit que le bot reste toujours dans son rôle de maker.

L'interaction entre post-only et [[Order book dynamics|carnet d'ordres]] est subtile : le post-only assure que l'ordre n'est jamais exécuté s'il lisserait la liquidité existante, mais une fois l'ordre dans le carnet (si le prix s'est déplacé favorablement), il peut être exécuté comme n'importe quel ordre limite.

## Sources

[^1]: Documentation Binance Futures — Order Types. https://binance-docs.github.io/apidocs/futures/us/
[^2]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^3]: SEC Concept Release on Equity Market Structure, 2010.