---
titre: "Ordre à cours limité"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #méthode/exécution, #trading/bases]
créé: 2026-04-21
liens_forts: ["[[Ordre au marché]]", "[[Slippage]]", "[[Order book dynamics]]", "[[Frais maker vs taker]]", "[[Liquidité]]"]
liens_opposition: ["[[Ordre au marché]]"]
---

# Ordre à cours limité

> [!info] Résumé
> Un ordre à cours limité est un ordre d'achat ou de vente fixé à un prix spécifique ou mieux. Il attend une contrepartie au prix souhaité mais peut ne jamais être exécuté.

## Définition

Un ordre à cours limité (limit order) est une instruction adressée à l'exchange qui spécifie un prix maximum pour un achat ou un prix minimum pour une vente. Contrairement à l'[[Ordre au marché]], l'ordre limité ne s'exécute pas immédiatement au prix du marché : il est placé dans le [[Order book dynamics|carnet d'ordres]] et attend qu'un ordre au marché vienne le "toucher" depuis l'autre côté du livre.

L'ordre limité est dit "maker" : au lieu de consommer la liquidité existante, il en ajoute. En augmentant la profondeur du carnet, il contribue à la [[Liquidité]] globale du marché, ce qui justifie généralement des frais de transaction inférieurs sous forme de [[Frais maker vs taker|rébate maker]] sur la plupart des plateformes.

La condition "ou mieux" est fondamentale : si un ordre d'achat est placé à 60 000 USD et que le prix du marché tombe à 59 950 USD, l'ordre sera exécuté à 59 950 USD, soit mieux que le prix limité. Le trader fixe un plafond, pas un prix fixe.

## Contexte et origine

Le concept d'ordre à cours limité émerge avec les bourses électroniques modernes dans les années 1970-1980, remplaçant les pratiques de "double enchère" manuelles. Sur les marchés crypto, l'ordre limité est la primitive de base de toute stratégie de [[Market making]], où le trader place simultanément des ordres d'achat et de vente aux deux côtés du spread pour capturer le différentiel.

Dans le contexte du [[Trading algorithmique]], l'ordre limité permet d'implémenter des stratégies demean reversion comme [[Stratégie de mean reversion]] ou de [[Stratégie de momentum]] avec un contrôle précis du prix d'entrée. L'accès aux APIs d'échanges (cf. [[API d'échange]]) permet d'automatiser le placement et l'annulation d'ordres limites en fonction de conditions de marché.

## Mécanismes / caractéristiques / détails

**Prix limite et priorité** : les ordres limités sont classés dans le carnet par prix, puis par ordre d'arrivée (time priority). Un ordre d'achat à 60 000 USD sera exécuté avant un ordre d'achat à 59 999 USD, quelle que soit sa taille. À prix égal, l'ordre le plus ancien est servi en premier. Cette structure de priorité incite les traders à placer leurs ordres proches du prix du marché pour améliorer la probabilité d'exécution.

**Le risque de non-exécution** constitue la principale limite. Si le prix du marché ne revient jamais au prix limité, l'ordre reste en attente indéfiniment ou jusqu'à son expiration selon la durée de validité paramétrée (cf. [[Durée de validité de l'ordre]]). Dans un marché en forte tendance, un ordre limité de [[Stratégie de momentum]] peut être complètement ignoré.

**Couverture des frais maker** : dans une stratégie de [[Market making]], les revenus proviennent du spread bid-ask. Chaque exécution d'ordre limité génère un petit profit par trade, mais ce profit doit absorber les frais d'échange. Si le spread est trop étroit par rapport aux [[Frais maker vs taker|frais]], la stratégie est perdante. Le [[Kelly Criterion]] est parfois utilisé pour dimensionner les positions dans ce type de stratégie.

**Ordre limité et slippage** : contrairement à l'ordre au marché, un ordre limité n'a pas de slippage par conception. Cependant, le prix d'exécution peut être influencé par la liquidité disponible au prix limité. Dans un scénario de [[Remplissage partiel]], un ordre de grande taille peut n'être que partiellement exécuté si la liquidité disponible à ce prix est insuffisante.

**Paramètres de durée** : les ordres limités peuvent être assortis d'une durée de validité (GTC, IOC, FOK) qui contrôle leur comportement d'expiration. Cf. [[Durée de validité de l'ordre]] pour une explication détaillée de ces options.

## Nuances, critiques, limites

L'ordre limité offre un contrôle du prix mais abandonne la certitude d'exécution. Dans un marché volatile, le prix peut " traverser " le prix limité sans jamais s'y arrêter, causant un manque à gagner. Le [[Backtesting]] d'une stratégie basée sur des ordres limités doit simuler la probabilité de remplissage, pas simplement supposer une exécution à chaque signal.

La "famine" (starvation) est un risque spécifique aux algorithmes haute fréquence : un ordre limité peut être systématiquement devancé par des concurrents plus rapides sur l'[[Order book dynamics|ordre d'arrivée au carnet]], leading to non-execution even in favorable price conditions. Les stratégies de [[Haute fréquence]] doivent optimizer their order placement and cancellation cycles continuously.

Sur les marchés crypto, la [[Liquidité]] peut disparaître brusquement sur certaines paires. Un ordre limité placé dans un carnet d'ordres peu profond peut avoir un impact de marché significatif au moment de son exécution, rendering the "limit" price ineffective as a cost control mechanism.

## Liens et implications

L'ordre limité est la brique de base du [[Grid trading]], où le trader place une série d'ordres d'achat et de vente à intervalles de prix réguliers pour profitér de la volatilité. Chaque niveau du grid est un ordre limité qui attend d'être exécuté par le mouvement du marché.

Dans les stratégies de [[Bot DCA]], les achats périodiques utilisent souvent des ordres limités pour acheter à un prix moyen planifié plutôt que d'exposer systématiquement au slippage de l'ordre au marché. Le [[Risk-reward ratio]] du DCA dépend fortement du prix moyen d'exécution obtenu via des ordres limités.

L'interaction entre ordres limités et [[Ordre stop-limite]] (stop-loss, take-profit) est fondamentale dans tout système de [[Gestion du risque]] automatisé. Les stops sont techniquement des ordres conditionnels qui se transforment en ordres limités ou au marché lors du déclenchement.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Biais, Bruno, Pierre Hillion, and Marc Slot. "Order flow and transaction prices." *Journal of Political Economy* 103, no. 3 (1995): 597-633.
