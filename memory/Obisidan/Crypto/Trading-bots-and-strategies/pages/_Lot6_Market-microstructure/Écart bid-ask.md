---
titre: "Écart bid-ask"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/écart, #microstructure, #liquidité]
créé: 2026-04-21
liens_forts: ["[[Liquidité]]", "[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[Market making]]", "[[Sélection adverse]]", "[[Impact de marché]]", "[[Slippage]]"]
liens_opposition: []
---

# Écart bid-ask

> [!info] Résumé
> L'écart bid-ask (bid-ask spread) représente la différence entre le prix le plus élevé qu'un acheteur accepte de payer et le prix le plus bas qu'un vendeur accepte de recevoir. Il constitue la rémunération fondamentale des teneurs de marché et mesure le coût de la liquidité instantanée.

## Définition

L'écart bid-ask est la différence entre le prix de la meilleure offre (bid) et le prix de la meilleure demande (ask) pour un actif financier à un instant donné. Le bid est le prix maximal auquel un acheteur est prêt à acquérir l'actif ; l'ask est le prix minimal auquel un vendeur est prêt à le céder. Cet écart représente le coût de transaction implicite pour celui qui prend la liquidité (liquidity taker) et la rémunération du fournisseur de liquidité (liquidity provider).

Sur un exchange crypto, l'écart bid-ask s'exprime généralement en pourcentage du prix moyen. Un spread de 0,1 % sur le BTC/USD signifie que pour acheter et vendre instantanément, le trader perd 0,1 % de sa position. Plus le spread est serré, plus le marché est liquide. Sur les marchés highly liquid comme le BTC/USDT sur Binance, les spreads peuvent descendre sous 0,01 %, tandis que sur des altcoins peu échangés, ils peuvent dépasser plusieurs pour cent.

L'écart bid-ask est la somme de plusieurs composantes. La composante principale est la rémunération du risque de tenue de marché, incluant la [[Sélection adverse]] (le risque que la contrepartie ait une information privée) et le [[Risque d'inventaire]] (le risque de détention d'un inventaire non souhaité). Une deuxième composante est le coût de traitement des ordres (frais de traitement des ordres, exchange fees). Une troisième composante reflète la concurrence entre teneurs de marché.

## Contexte et origine

Le concept d'écart bid-ask émerge dans les travaux de Demsetz (1968) sur la structure des marchés de la Bourse de New York. Demsetz a montré que les écarts varient selon la liquidité et le volume des transactions, établissant le lien entre coûts de transaction et structure du marché. Les travaux ultérieurs de Glosten et Milgrom (1985) et de Kyle (1985) ont formalisé le lien entre spread et asymétrie d'information.

Dans l'écosystème crypto, les teneurs de marché algorithmiques (bots de [[Market making]]) sont responsables de la majeure partie de la liquidité sur les exchanges centralisés. Leur compétitivité maintient les spreads serrés sur les paires principales. Les dark pools et les protocoles [[Automated Market Makers (AMM)|AMM]] sur les protocoles DeFi ont des mécanismes de formation du spread différents mais conceptuellement analogues.

## Mécanismes / caractéristiques / détails

**Formation du spread** : sur un marché avec teneurs de marché concurrentiels, le spread s'établit au niveau qui équilibre l'offre et la demande de liquidité. Si les teneurs de marché anticipent un risque élevé de [[Sélection adverse]], ils widden leur spread pour se compenser. Le [[Modèle de Glosten-Milgrom]] formalise ce mécanisme dans un cadre bayésien où le teneur de marché met à jour ses beliefs sur la valeur de l'actif en fonction des ordres reçus.

**Spread et profondeur** : l'écart bid-ask se forme au meilleur niveau (best bid/ask), mais le livre d'ordres contient plusieurs niveaux de prix. La [[Profondeur du carnet d'ordres]] à chaque niveau détermine combien de volume peut être échangé à ce prix avant que le spread ne doive s'élargir. Un spread serré avec une profondeur élevée indique un marché très liquide.

**Coût de traversée du spread** : quand un trader émet un [[Ordre au marché]], il "traverse" le spread en prenant la liquidité disponible. Le coût effectif est (ask - bid) / ((ask + bid) / 2). Pour un actif à 10 000 USD avec un spread de 0,1 %, traverser le spread coûte 10 USD par unité. Ce coût est immédiatement visible dans le [[Slippage]] pour les ordres de taille significative.

**Spread asymétrique** : dans certaines conditions de marché, le spread acheteur peut différer du spread vendeur. Cette asymétrie apparaît dans les marchés bullish où la demande dépasse l'offre, ou lors de conditions de stress oÙ les teneurs de marché réduisent leur taille et widden leur spread différemment selon la direction.

**Facteurs influençant le spread** :
- Volatilité du prix : les marchés volatiles ont des spreads plus larges car le risque de position est plus grand.
- Volume de transactions : les marchés actifs ont des spreads plus serrés car la competition entre teneurs est plus forte.
- Qualité de l'information : plus le risque de sélection adverse est grand, plus le spread s'élargit.
- Horaire de négociation : pendant les périodes de faible activité, les spreads s'élargissent.

## Nuances, critiques, limites

Le spread bid-ask n'est qu'une mesure de la liquidité au prix optimal. Pour les ordres de grande taille, le coût réel de transaction est bien plus grand car l'ordre mange à travers plusieurs niveaux du carnet. La mesure du "spread effectif" (effective spread) compare le prix d'exécution au prix midpoint au moment de l'ordre, offrant une image plus juste du coût réel pour les teneurs de liquidité.

La distinction entre spread "quoté" et spread "effectif" est importante. Le spread quoté est le spread affiché au meilleur niveau. Le spread effectif est le spread réellement payé par les participants, qui peut être plus serré (si l'ordre est exécuté à l'intérieur du spread) ou plus large (si l'ordre traverse plusieurs niveaux).

Dans les marchés crypto, la fragmentation entre exchanges crée des opportunités d'arbitrage mais aussi des spreads différents pour le même actif. Le spread sur Binance peut différer de celui sur Coinbase, créant des opportunités de [[Arbitrage]] pour les bots suffisamment rapides.

## Liens et implications

L'écart bid-ask est intimement lié à la [[Liquidité]] d'un marché. Un spread serré indique une liquidité abondante et un coût de transaction faible pour les takers. Un spread large signale une liquidité rare ou un risque élevé, ce qui rend le marché moins attractif pour les ordres de détail.

Les stratégies de [[Market making]] tirent leur profit de la capture du spread. En plaçant des ordres à cours limité des deux côtés du carnet, le market maker gagne le spread chaque fois qu'un ordre le traverse. Cette stratégie n'est profitable que si le spread dépasse les coûts de transaction, de risque d'inventaire et de sélection adverse.

Le [[Ratio annulation-commerce]] est un indicateur de la qualité du spread. Un marché avec un ratio d'annulation très élevé peut afficher des spreads serrés qui ne reflètent pas la liquidité réelle, car les ordres sont annulés avant exécution. C'est une forme de "phantom liquidity" qui peut piéger les takers.

## Sources

[^1]: Demsetz, Harold. "The Cost of Transacting." *The Quarterly Journal of Economics* 82, no. 1 (1968): 33-53.
[^2]: Glosten, Lawrence, and Paul Milgrom. "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *Journal of Financial Economics* 14 (1985): 71-100.
[^3]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.