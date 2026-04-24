---
titre: "Rebond BID/ASK"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/rebond, #microstructure, #prix]
créé: 2026-04-21
liens_forts: ["[[Écart bid-ask]]", "[[Impact de marché]]", "[[Slippage]]", "[[Ordre au marché]]", "[[Liquidité]]", "[[Découverte du prix]]", "[[Glosten-Milgrom]]"]
liens_opposition: []
---

# Rebond BID/ASK

> [!info] Résumé
> Le rebond BID/ASK (bid-ask bounce) est un phénomène oÙ le prix de transaction alterne entre le bid et l'ask sans que le prix moyen change. Il survient quand le prix se situe entre le bid et l'ask et que les ordres au marché passent d'un côté à l'autre du carnet.

## Définition

Le rebond BID/ASK désigne le mouvement du prix entre le bid et l'ask quand le prix de marché se situe dans la fourchette du spread. Si le bid est à 99 USD et l'ask à 101 USD, le prix peut alterner entre 99 et 101 sans que le midpoint (100 USD) ne change. Ce phénomène est particulièrement visible dans les marchés avec un spread large et un volume de transaction faible.

Ce rebond survient parce que les ordres au marché sont exécutés alternativement du côté achat (qui consomme l'ask) et du côté vente (qui consomme le bid). Chaque exécution déplace le prix au niveau du spread, puis le suivant bascule de l'autre côté. Le prix moyen (midprice) reste stable mais le prix de transaction "rebondit" entre les deux extrêmes.

Le rebond BID/ASK est un artifact de la microstructure et ne représente pas un mouvement directionnel du prix. Il est causé par le coût de la traversée du spread et le comportement des takers de liquidité.

## Contexte et origine

Le rebond BID/ASK a été documenté dans les études empiriques sur la microstructure des marchés financiers (Hasbrouck, 2007). Il est particulièrement visible sur les marchés avec un spread large et une activité de trading intermittent. Les marchés d'actions à faible capitalisation et les marchés crypto d'altcoins sont sujets à ce phénomène.

Dans l'écosystème crypto, le rebond BID/ASK est particulièrement visible sur les paires à faible liquidité. Sur un altcoin avec un spread de 2%, le prix peut varier de 2% entre chaque transaction si les ordres sont passés de façon intermittente. Ce phénomène peut créer l'illusion d'une volatilité qui n'existe pas réellement.

Le rebond BID/ASK est aussi lié au processus de [[Découverte du prix]]. Dans les modèles de Glosten-Milgrom, le prix converge vers la vraie valeur à travers les exécutions successives. Le rebond entre bid et ask est le mécanisme par lequel l'information est incorporée dans le prix.

## Mécanismes / caractéristiques / détails

**Mécanisme du rebond** : quand un ordre au marché achète, il est exécuté à l'ask (côté vente). Le prix monte à l'ask. L'ordre suivant, s'il est une vente, est exécuté au bid, faisant baisser le prix. Le prix alterne entre bid et ask. Le midpoint peut rester stable si les achats et ventes s'équilibrent.

**Conditions du rebond** : le rebond survient quand le volume de transaction est faible relativement au spread, ou quand les ordres sont espacés dans le temps. Si le volume est très élevé, le prix moyen se déplace rapidement et le rebond est moins visible. Si le spread est très serré, le rebond est minimal.

**Impact sur les statistiques** : le rebond BID/ASK crée un "noise" dans les séries de prix. Les rendements calculés à haute fréquence peuvent être largement déterminés par le rebond plutôt que par l'information. Les researchers filtrent ce bruit en utilisant le midpoint plutôt que le prix de transaction.

**Rebond et volatilité** : le rebond contribue à la volatilité mesurée des prix. Si le prix alterne entre 99 et 101, la volatilité observée est de 2% même si la vraie valeur de l'actif n'a pas changé. Cette volatilité " microstructure" peut être distinguée de la volatilité "fondamentale" par l'analyse du prix moyen.

**Rebond sur les marchés crypto** : sur les marchés crypto avec des spreads variables, le rebond peut être plus ou moins prononcé. Pendant les périodes de faible liquidité (nuit, weekends), le spread s'élargit et le rebond devient plus visible. Les stratégies de trading haute fréquence peuvent capitaaser de ce rebond.

## Nuances, critiques, limites

Le rebond BID/ASK peut être confondu avec d'autres phénomènes microstructurels. Le "price reversal" (retournement de prix) est différent : il implique que le prix revient à une moyenne après un mouvement, tandis que le rebond est simplement une oscillation entre bid et ask.

Le rebond est plus un artifact de la mesure qu'un phenomenon économique significatif. Le vrai prix (midpoint) est une meilleure estimation de la valeur que le prix de transaction qui "saute" entre bid et ask. Les analyses devraient utiliser le midpoint pour éviter le bruit du rebond.

Sur les marchés très actifs avec un spread serré, le rebond BID/ASK est minimal et peut être ignoré. C'est sur les marchés peu actifs ou à spread large qu'il devient significatif.

## Liens et implications

Le rebond BID/ASK est lié à l'[[Écart bid-ask]] car il est la conséquence directe du passage entre bid et ask. Plus le spread est large, plus le rebond potentiel est grand.

Le [[Slippage]] dans un ordre au marché est partiellement causé par le rebond BID/ASK. Si l'ordre est exécuté à l'ask, le prix est déjà au bord supérieur du rebond, ce qui peut affecter le slippage mesuré.

Le [[Backtesting]] qui utilise les prix de transaction (pas le midpoint) peut surestimer la volatilité à cause du rebond. Les stratégies de haute fréquence doivent utiliser le midpoint pour éviter ce bruit.

## Sources

[^1]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^2]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^3]: Roll, Richard. "On the Stability of the Ask-Bid Spread." *Journal of Financial Economics* 14 (1984): 178-194.