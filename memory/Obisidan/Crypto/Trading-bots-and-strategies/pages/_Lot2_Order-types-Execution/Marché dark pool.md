---
titre: "Marché dark pool"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: deep-cut
source_knowledge: internal
sources_count: 3
tags: [#concept/dark-pool, #microstructure, #trading/avancé]
créé: 2026-04-21
liens_forts: ["[[Central limit order book (CLOB)]]", "[[Liquidité]]", "[[Order book dynamics]]", "[[Smart money concept]]", "[[Best execution]]"]
liens_opposition: ["[[Central limit order book (CLOB)]]"]
---

# Marché dark pool

> [!info] Résumé
> Un dark pool est une plateforme de trading oÙ la liquidité est masquée : les ordres ne sont pas visibles dans le carnet public, permettant des exécutions sans impact sur le prix visible du marché.

## Définition

Un dark pool (marché noir, en référence aux "boites noires" financières) est une plateforme de trading alternativa qui opere en dehors des carnets d'ordres publics (CLOB). Dans un dark pool, les ordres sont masqués — leur taille et parfois leur prix ne sont pas visibles des autres participants au marché. Les transactions sont exécutées sans affecter le prix public de l'actif.

Le but principal du dark pool est de permettre des transactions de grande taille sans [[Impact de marché]] ni [[Slippage]] additionnel. Un fonds qui doit vendre 50 000 BTC sur le marché public causera un effondrement du prix. Dans un dark pool, cette transaction peut s'exécuter à un prix proche du prix public avec un impact minimal.

Les dark pools ont connu un essor considérable dans les années 2000-2010, d'abord sur les marchés actions, puis se sont adaptés à l'écosystème crypto sous forme de "dark pools OTC" (over-the-counter) et de certains protocoles DEX avancés.

## Contexte et origine

Les premiers dark pools apparaissent dans les années 1980-1990 sous forme de réseaux de cross-assurance entre institutionnels. Ils se multiplient après 2000 quand la SEC autorise leur fonctionnement sous certaines conditions.

Dans l'écosystème crypto, les dark pools existent sous plusieurs formes : les desks OTC des gros acteurs (qui facilitent les transactions de grande taille hors exchange), les protocoles de privacy comme Horizon ( Harmony), et certains services de courtage institutionnel crypto.

La [[Liquidité]] des dark pools est dite "opaque" — elle n'apparaît pas dans les statistiques de liquidité publiques, ce qui peut fausser la perception de la profondeur réelle du marché.

## Mécanismes / caractéristiques / détails

**Mécanisme de matching opaque** : dans un dark pool, les ordres sont reçus par la plateforme mais ne sont pas insérés dans le carnet public. Le matching se fait de manière propriétaire — certaines plateformes utilisent un mecanisme d'enchères , d'autres un matching bilatéral continue.

**Prix d'exécution** : le prix dans un dark pool est généralement calé sur le prix public du marché ( VWAP, mid price, ou prix au moment de l'exécution). Le dark pool n'a pas son propre mécanisme de découverte de prix — il "s'abrite" derrière le prix public.

**Types de dark pools** :

1. **Dark pools exchange** : gérés par les bourses elles-mêmes (comme les "Midpoint Dark Pools" de certaines plateformes). Offrent une exécution au prix mid sans passer par le carnet public.

2. **Dark pools broker-dealer** : gérés par des courtiers institutionnels qui font correspondre les ordres de leurs clients entre eux (Internalization) avant de passer par le marché.

3. **Dark pools OTC** : desks de trading over-the-counter qui facilitent les transactions de grande taille entre contreparties sans passer par un exchange.

**Avantages pour les gros exécutants** : l'absence de visibilité empêche les autres acteurs de "voir" la commande et d'anticiper le mouvement de prix. Cela élimine le "[[Smart money concept|front-running]]" informationnel.

**Cross-exchange dark pools** : certains dark pools agrègent la liquidité de plusieurs exchanges pour offrir une exécution plus profonde. L'exécution se fait au prix d'un exchange de référence sans que l'ordre ne soit visible sur cet exchange.

## Nuances, critiques, limites

**Absence de transparence** : la opacité des dark pools est leur principale critique. Elle permet des pratiques de "[[Smart money concept|front-running]]" par les opérateurs de dark pools eux-mêmes qui connaissent les ordres avant leur exécution. Les régulateurs ont difficilement surveillé ces marchés.

**Risque de contrepartie** : dans un dark pool OTC ou broker-dealer, le risque que la contrepartie ne honore pas sa part de la transaction est plus élevé que sur un exchange . Les mécanismes de garantie (margins, clearing) peuvent être moins robustes.

**Prix d'exécution incertain** : sans mécanisme de découverte de prix, le prix d'exécution dépend du prix public au moment de l'exécution. Si le prix public bouge entre le moment de la soumission et l'exécution, le prix final peut ne pas être celui attendu.

**Critique "two-tiered market"** : les critiques soutiennent que les dark pools créent un marché à deux vitesses où les institutionnels ont accès à des exécutions meilleures que les investisseurs de détail, deepening l'asymétrie d'information.

## Liens et implications

Les dark pools sont une réponse à la [[Liquidité]] fragmentée et à l'[[Impact de marché]] des gros ordres sur les marchés publics. Pour les stratégies de [[Arbitrage]] qui s'exécutent sur plusieurs marchés, la  de dark pools complique le picture car une partie de la liquidité est invisible.

Le [[Best execution]] est le concept qui permet devaluer si une exécution en dark pool est préférable à une exécution sur le marché public. Les obligations de best execution incombent aux courtiers qui doivent démontrer que leurs clients obtiennent le meilleur prix possible.

La tension entre CLOB ([[Central limit order book (CLOB)]]) et dark pools illustre un débat fondamental en microstructure : transparence vs eficiencia pour les gros ordres.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]:Comerton-Forde, Carole, and Terrence Hendershott. "Dark Pools and the Economics of Market Structure." *Journal of Finance*, 2013.
[^3]: SEC — Dark Pools and Retail Participation.
