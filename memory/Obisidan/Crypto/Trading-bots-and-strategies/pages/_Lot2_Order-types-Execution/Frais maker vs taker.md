---
titre: "Frais maker vs taker"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/frais, #trading/bases, #market-making]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[Ordre post-only]]", "[[Market making]]", "[[Liquidité]]"]
liens_opposition: []
---

# Frais maker vs taker

> [!info] Résumé
> Les frais maker et taker sont la structure de commission appliquée par les exchanges sur les ordres. Le maker (qui ajoute de la liquidité) est généralement récompensé par des frais inférieurs ou un rabais, tandis que le taker (qui en retire) paie des frais plus élevés.

## Définition

La structure maker/taker est un modèle de frais qui distingue deux types d'exécutions selon leur impact sur la liquidité du marché. Le "maker" est celui qui place un ordre qui s'insère dans le carnet ([[Ordre à cours limité]]) et attend une contrepartie — il "fabrique" de la liquidité. Le "taker" est celui qui prend la liquidité existante ([[Ordre au marché]]) — il "consomme" les ordres existants.

Sur la plupart des exchanges crypto, les frais maker sont inférieurs aux frais taker, parfois avec un rebate (rémunération) pour les makers. Cette structure incentive les traders à placer des ordres passifs plutôt que de prendre la liquidité, ce qui augmente la profondeur du carnet et benefit tous les participants.

Par exemple, sur Binance Spot : frais maker de 0,1 % (avec rebate possible de 0,018 %), frais taker de 0,1 %. Sur Binance Futures : frais maker de 0,02 % (rebate 0,018 %) et frais taker de 0,04 %. L'écart peut être plus grand sur d'autres plateformes.

## Contexte et origine

Le modèle maker/taker a été popularisé par les bourses électroniques Nasdaq dans les années 1990, qui voulaient incentiver les teneurs de marché à fournir de la liquidité. Avant cela, la plupart des marchés utilisaient un modèle "flatex" où le même frais était appliqué quel que soit le rôle.

Dans l'écosystème crypto, ce modèle a été adopté par virtually tous les exchanges majeurs et est devenu un élément fondamental de la microstructure. Les plateformes comme [[3Commas]] et [[Bitsgap]] permettent de parametric le type d'ordre (limite vs marché) pour optimizer la structure de frais.

Pour les stratégies de [[Market making]], la structure maker/taker est centrale : le profit provient du spread entre les ordres maker, net des frais. Si les frais taker sont trop élevés ou le spread trop étroit, le market making n'est pas viable.

## Mécanismes / caractéristiques / détails

**Calcul des frais** : les frais sont généralement calculés sur le volume de la transaction. Pour un achat de 1 BTC à 60 000 USD avec des frais taker de 0,1 %, les frais sont de 60 USD. Si les frais maker sont de 0,02 %, le même achat en tant que maker (sur un ordre limite qui s'exécute) coûterait 12 USD — une différence de 48 USD.

**Rebates maker** : sur certaines plateformes (comme Binance Futures), les makers recoivent un rebate de 0,018 % sur chaque exécution. Cela signifie que pour un ordre maker qui s'exécute, le trader est payé pour avoir fourni de la liquidité. Ce rebate est financée par les frais taker plus élevés.

**Volume-based tiers** : la plupart des exchanges offrent des réduction de frais basées sur le volume de trading sur 30 jours. Plus le volume est élevé, plus les frais sont bas, aussi bien pour maker que pour taker. Ces "tiers" incitent les gros traders à rester sur la plateforme.

**Impact sur la stratégie** : le choix entre ordre limite (maker) et ordre marché (taker) doit intégrer la structure de frais. Si le spread entre deux prix est de 0,05 % et que les frais taker sont de 0,1 % mais les frais maker de 0,02 %, un trade qui utilise un ordre marché paie 0,1 % de frais + slippage, tandis qu'un ordre limite paie 0,02 % de frais. L'écart de 0,08 % est significatif.

**Post-only comme protection** : l'[[Ordre post-only]] garantit que l'ordre ne sera pas exécuté comme taker si le prix est trop proche du marché, évitant ainsi les frais taker accidentels. C'est un outil important pour les market makers qui veulent à tout prix être makers.

## Nuances, critiques, limites

**Frais caché dans le spread** : pour un trader qui utilise systématiquement des ordres au marché, le coat réel inclut non seulement les frais taker mais aussi le spread (la différence entre bid et ask). Pour une paire avec un spread de 0,1 % (frais implicite), ajouter 0,1 % de frais taker rend l'opération très coûteuse.

**Dispersion entre exchanges** : les structures de frais varient énormeement entre les exchanges. Certains ont des frais très bas (DEX basée sur Ethereum avec des frais de gas) mais un slippage potentiel énorme. D'autres ont des frais plus élevés mais une liquidité bien meilleure. L'analyse coat total (frais + slippage) est plus pertinente que la simple comparison des frais.

**Rabais et lastlook** : certains exchanges offrent des rebates aos makers mais se réservent le droit de "last look" — refuser une exécution si le prix move contre eux. Ce mecanismo protège l'exchange mais réduit la certitude d'exécution pour le maker, qui peut ne pas être exécuté même si son ordre était en tête du livre.

**Frais de financement (funding rate)** : sur les contrats perpetual futures, les frais de financement ( funding rate) sont un coat supplémentaire qui s'ajoute aux frais maker/taker. Ce coat est payé par les positions longues aux positions courtes (ou l'inverse) toutes les 8 heures et peut être substantiel.

## Liens et implications

La structure maker/taker est centrale pour la viabilité du [[Market making]]. Un market maker qui ne genere pas assez de volume maker (parce que ses ordres sont trop souvent "prise" par d'autres) voit ses frais augmenter et sa profitabilité s'éroder.

Dans les stratégies de [[Arbitrage]], les frais sont un paramètre critique du calcul de rentabilité. Un arbitrage de 0,05 % entre deux exchanges devient perdant si les frais cumulés (taker/maker sur chaque exchange, frais de retrait) depassent ce montant.

Le choix du type d'ordre (limite vs marché) dans les stratégies de [[Trading algorithmique]] doit intégrer le coat de friction des frais. Un [[Backtesting]] qui ignore les frais (ou qui suppose des frais maker pour tous les ordres) surestime la performance.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Documentation Binance — Fee Structure. https://www.binance.com/en/fee/trading
[^3]: SEC Concept Release on Equity Market Structure, 2010.
