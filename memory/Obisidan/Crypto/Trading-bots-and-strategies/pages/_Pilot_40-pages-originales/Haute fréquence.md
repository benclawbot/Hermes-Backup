---
titre: "Haute fréquence"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: high
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/hft, #concept/velocity, #concept/infrastructure]
créé: 2026-04-20
liens_forts: ["[[Trading algorithmique]]", "[[Latence]]", "[[Market making]]"]
liens_opposition: []
---

# Haute fréquence

> [!info] Résumé
> Le trading haute fréquence (HFT) exécute des milliers de trades par seconde en profitant de micro-lags de marché, dominant les marchés traditionnels mais faisant face à des barrières d'infrastructure et réglementaires en crypto.

## Définition

La haute fréquence désigne les stratégies de trading exécutant des centaines à des milliers d'ordres par seconde, avec des temps de résidence de position mesurés en millisecondes ou microsecondes. L'objectif n'est pas de capturer des mouvements de prix significatifs mais de profiter de micro-inefficiences, de spreads, et de rebates de liquidité.

Le HFT repose sur trois piliers : la vitesse (accès aux serveurs les plus proches des exchanges), la latence minimale (connexion en fibres optiques optimisées, co-localisation), et la capacité de traiter des volumes massifs de données market en temps réel.

Les stratégies HFT incluent le market making ultra-rapide, l'arbitrage de latence (capturer des prix avant qu'ils ne se propagent entre exchanges), et le statistical arbitrage sur des micro-mouvements. Le profit par trade est minuscule mais le volume compense.

## Contexte et origine

Le HFT a émergé dans les années 1990-2000 sur les marchés actions américains. Des firmes comme Citadel Securities, Virtu Financial, et Two Sigma ont investi des centaines de millions dans l'infrastructure de latence. La co-localisation (serveurs dans les mêmes data centers que les exchanges) est devenue standard.

Le HFT a atteint environ 50-60% du volume des marchés actions américains. Cette domination a soulevé des préoccupations : la liquidité est dite "fictive" car les orders sont annulés en microsecondes, créant un livre profond qui disparaît quand les conditions changent.

En crypto, le HFT est moins dominant du fait de la fragmentation des exchanges, la variété des protocoles, et l'absence de co-localisation standard. Certains exchanges centralisés comme Binance proposent des services de co-localisation pour les gros acteurs, mais l'écosystème est moins mature.

## Mécanismes et caractéristiques

La co-localisation place les serveurs du trading firm dans le même data center que l'exchange. La lumière parcourt environ 1 pied par nanoseconde, donc une différence de 100 pieds peut représenter plus de 100 nanosecondes de latence. Pour le HFT, ces nanosecondes sont significatives.

Le market making par proxy utilise des algorithmes qui repostent continuellement des orders pour maintenir un inventory à peu près neutre tout en capturant le spread. La vitesse permet d'ajuster les prix en temps réel selon le order flow.

L'arbitrage de latence exploite le temps de propagation de l'information. Si une nouvelle affecte le prix sur Binance, un bot HFT sur Coinbase peut capturer le mouvement avant que le prix ne s'ajuste là-bas, en achetant sur Binance et vendant sur Coinbase simultanément.

Les rebates de liquidité sont des incitations offertes par certains exchanges aux market makers qui ajoutent de la liquidité. Les takers paient des fees, les makers recoivent des rebates. Le HFT profite de ces structures en plaçant des orders qui sont rapidement annulés (pour ajuster) ou exécutés comme makers.

## Nuances, critiques, limites

Le quote stuffing est une tactique accusée mais difficile à prouver : placer des milliers d'ordres pour créer de la confusion et ralentir les systèmes des concurrents. Les défenseurs nient et affirment que l'annulation rapide est légitime pour maintenir des prix précis.

La liquidité HFT est qualifiée de "fictive" car les orders disparaissent en cas de volatilité. Quand le marché stress, les bots HFT retirent leur liquidité, laissant un livre d'ordres vide et amplifiant les mouvements. C'est l'une des causes des flash crashes.

En crypto, le HFT est limité par la fragmentation : il n'y a pas de marché centralisé unique mais des dizaines d'exchanges avec des protocoles différents. L'arbitrage cross-exchange est plus complexe et nécessite plus de capital pour couvrir les positions temporaires.

Les obstacles réglementaires sont croissants. La SEC et l'ESMA ont renforcé les règles sur le HFT, exigeant une inscription spécifique et des contraintes sur les stratégies. En crypto, l'absence de réglementation claire crée une fenêtre d'opportunité mais les régulateurs se rapprochent.

## Liens et implications

La haute fréquence est une forme extrême de [[trading algorithmique]], nécessitant une infrastructure massive. Le [[market making]] en HFT est controversé pour son impact sur la stabilité du marché.

Le [[flash crash]] est souvent attribué au retrait soudain des bots HFT qui créent un vide de liquidité. Les stop-loss en cascade sont amplifiés quand les algos HFT réagissent aux mouvements rapidement.

Le débat sur les avantages et inconvénients du HFT questionne si celui-ci fournit une liquidité réelle ou augmente la volatilité. La co-localisation est un enjeu majeur pour les firmes HFT qui veulent réduire la latence.

## Sources

[^1]: SEC, "Equity Market Structure", https://www.sec.gov/marketstructure (consulted 2026)
[^2]: CFTC, "High-Frequency Trading", https://www.cftc.gov/LearnAndProtect (consulted 2026)