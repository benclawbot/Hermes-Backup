---
titre: "Slippage"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#terme/slippage, #terme/exécution, #concept/transaction]
créé: 2026-04-20
liens_forts: ["[[Impact de marché]]", "[[Liquidité]]"]
liens_opposition: []
---

# Slippage

> [!info] Résumé
> Le slippage est la différence entre le prix attendu d'un ordre et le prix réel d'exécution. Critique en marchés crypto volatiles où les gros ordres ou la faible liquidité causent un slippage significatif qui peut transformer une stratégie profitable en perdante.

## Définition

Le slippage survient quand un ordre est exécuté à un prix différent de celui attendu ou demandé. Si vous passez un ordre d'achat à 50 000 USD et qu'il est exécuté à 50 100 USD, le slippage est de 100 USD ou 0,2%.

Le slippage est causé par :
- La latence entre le moment où le prix est observé et où l'ordre est exécuté
- La volatilité du marché pendant cet intervalle
- La taille de l'ordre par rapport à la liquidité disponible
- Le type d'ordre (ordre au marché vs ordre à cours limité)

Le slippage est généralement exprimé en pourcentage du prix ou en dollars par unité.

## Contexte et origine

Le slippage a toujours existé dans les marchés financiers, mais sa magnitude a augmenté avec le trading algorithmique et la volatilité. En crypto, les mouvements de prix peuvent être très rapides, créant du slippage même pour des ordres de taille modérée.

Les marchés traditionnels avec des teneurs de marché (market makers) professionnels ont généralement moins de slippage que les marchés crypto où la liquidité est fragmentée et les plateformes parfois peu profondes.

Binance et d'autres plateformes ont lancé des produits avec des mécanismes pour réduire le slippage (order routing intelligent, accès à plusieurs pools de liquidité). La compétition entre exchanges a poussé à réduire le slippage sur les actifs majeurs.

## Mécanismes et caractéristiques

Le slippage positif (ou négatif pour certains) se produit quand l'ordre est exécuté mieux que prévu. Cela peut arriver en marché volatil quand le prix bouge dans votre direction entre la commande et l'exécution. En pratique, le slippage est plus souvent négatif.

Le slippage en pourcentage augmente avec la taille de l'ordre. Un ordre de 10 000 USD sur Bitcoin pourrait avoir 0,01% de slippage. Un ordre de 1 million USD pourrait avoir 0,5% ou plus, selon la liquidité.

Le slippage est particulièrement problématique pour les stratégies qui visent de petits gains (scalping). Une stratégie avec un objectif de 0,5% peut être complètement éliminée par un slippage de 0,3%.

Les ordres à cours limité réduisent le slippage en échangeant la garantie d'exécution contre la possibilité de ne pas être exécuté. Si le marché bouge trop vite, l'ordre à cours limité ne sera pas exécuté plutôt que d'avoir du slippage.

## Nuances, critiques, limites

Le slippage sous-estimé est une erreur commune dans le [[Backtesting]]. Beaucoup de traders testent leurs stratégies avec un slippage optimiste (0,01%) alors qu'en réalité le slippage réel est plusieurs fois plus élevé.

La volatilité extrême cause du slippage même pour des ordres petits. Pendant un [[Flash crash]], le slippage peut être de 10-30% pour des ordres de vente au marché sur des actifs avec faible liquidité.

L'effet du slippage s'additionne aux frais de transaction. Pour des stratégies à haute fréquence, le slippage + frais peut représenter 0,5-1% par trade round-trip, rendant la plupart des stratégies non rentables.

Le slippage varie selon l'exchange et l'actif. Bitcoin sur Binance a moins de slippage que des altcoins sur des exchanges moins populaires. Les bots qui tradent plusieurs exchanges doivent calibrer le slippage pour chacun.

## Liens et implications

Le [[Slippage]] est causé par l'[[Impact de marché]] et la [[Liquidité]] insuffisante. L'exécution d'ordre doit tenir compte du slippage attendu pour évaluer si un trade est rentable.

Le [[Backtesting]] avec slippage modélisé de manière réaliste est essentiel pour éviter la surestimation des rendements. Le [[Forward testing]] révèle le slippage réel des stratégies.

Les [[Flash crash]] sont des périodes où le slippage peut être extrême, causant des pertes massives pour les ordres au marché exécutés pendant la panique.

## Sources

[^1]: Almgren and Chriss, "Optimal Execution of Portfolio Transactions", Journal of Risk (2000)
[^2]: Binance, "Understanding Slippage", https://www.binance.com/en/support (consulted 2026)