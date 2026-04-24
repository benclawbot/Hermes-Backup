---
titre: "Exchange fees"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/fees, #concept/exchange, #concept/cost]
créé: 2026-04-21
liens_forts: ["[[Frais de plateforme]]", "[[Frais maker vs taker]]", "[[Exchange withdrawal]]", "[[Exchange deposit]]", "[[Slippage]]", "[[Market making]]", "[[Trade expectancy]]"]
---

# Exchange fees

> [!info] Résumé
> Les exchange fees sont les frais facturés par les plateformes de trading pour chaque transaction exécutée. Ils constituent un coût récurrent qui impacte directement la rentabilité des stratégies de trading algorithmique. La compréhension détaillée de la structure de frais est essentielle pour optimize les stratégies et éviter des pertes inattendues.

## Structure des frais

Les exchange fees sont généralement composés de plusieurs éléments qui s'additionnent pour former le coût total d'une transaction. Ces éléments incluent les frais de transaction (trading fees), les frais de withdrawal, les frais de deposit, et parfois des frais cachés comme le slippage.

Les frais de transaction sont facturés sur chaque ordre exécuté. Ils sont généralement exprimés en pourcentage de la valeur de la transaction ou en montant fixe par ordre. Ces frais sont le poste le plus significatif pour les stratégies à haute fréquence.

Les frais de withdrawal sont facturés quand les fonds sont retirés de la plateforme. Ils varient selon l'actif et le réseau utilisé. Pour Bitcoin, les frais de withdrawal sont généralement de 0.0001 à 0.0005 BTC selon la congestion du réseau.

Les frais de deposit sont généralement gratuits sur la plupart des exchanges pour les cryptos. Certains exchanges facturent des frais pour les deposits fiat ou pour certaines cryptos spécifiques.

## Modèle maker-taker

Le modèle maker-taker est le système de frais dominant sur les exchanges modernes. Les market makers qui placent des ordres dans le carnet d'ordres et ajoutent de la liquidité recoivent des frais réduits, voire des rebates (frais négatifs).

Les makers bénéficient car leurs ordres sont exécutés à des prix moins favorables que le meilleur bid/ask, mais les faibles frais maker compensent cette disadvantage. Les takers qui exécutent immédiatement aux prix du marché paient des frais plus élevés.

La différence entre frais maker et taker ([[Frais maker vs taker]]) create une incitation à placed des ordres limit plutôt que des ordres market. Cette dynamique contribue à la profondeur du carnet d'ordres et à la liquidité globale.

## Niveaux de frais et remises

Les exchanges proposent généralement des programmes de remises basés sur le volume de trading. Plus le volume mensuel est élevé, plus les frais sont réduits. Ces programmes sont conçus pour fidéliser les gros traders et les institutions.

Les réductions peuvent être substantielles : un trader avec un volume mensuel de 100 millions de dollars peut payer des frais 3 à 5 fois inférieurs à un trader avec un volume de 10000 dollars. Ces différences impactent significativement la rentabilité des stratégies.

 Certains exchanges proposent également des frais négatifs (rebates) pour les plus gros market makers sur certaines paires. Ces rebates peuvent générer des revenus passifs pour les stratégies de market making à fort volume.

## Impact sur les stratégies de trading

Les exchange fees affectent différemment chaque type de stratégie. Les stratégies de [[Scalping]] qui passent beaucoup d'ordres avec des profits petits sont particulièrement sensibles aux frais. Des frais de 0.10% par transaction peuvent eat eaten la majorité des profits si le spread capturé n'est que de 0.15%.

Les stratégies de [[Market making]] benefit généralement du modèle maker-taker. Les market makers qui placent des ordres limit et les cancel frequently si non exécutés paient mainly maker fees, qui sont souvent bas ou même négatifs pour les gros volumes.

Les stratégies de [[Position trading]] sont moins sensibles aux frais car elles passent moins d'ordres. Cependant, les frais de withdrawal et de deposit peuvent still avoir un impact si les transferts entre plateformes sont fréquents.

## Frais sur les produits dérivés

Les contrats perpétuels et les futures ont leur propre structure de frais qui diffère du spot. Les frais de funding sont un coût récurrent pour les positions perpétuelles, pagnés toutes les 8 heures entre longs et shorts.

Le [[Funding rate arbitrage]] exploite les différences entre les taux de funding sur différentes plateformes ou entre le spot et les perpetual. Ces stratégies doivent include les coûts de funding dans leurs calculs de profitabilité.

Les frais de rollover pour les futures avec expiration sont également à considerer. Si une stratégie maintien une position à travers l'expiration, des coûts de rollover peuvent s'appliquer.

## Frais cachés et slippage

Le [[Slippage]] est souvent le frais le plus significatif pour les ordres volumineux. La différence entre le prix anticipé et le prix réel d'exécution peut représenter plusieurs pour cent pour des ordres de grande taille.

L'[[Impact de marché]] est un autre coût implicite qui augmente avec la taille de l'ordre. Plus l'ordre est grand relativement à la liquidité disponible, plus le prix d'exécution s'éloigne du prix anticipé.

Ces coûts doivent être intégrés dans les calculs de [[Trade expectancy]] pour évaluer correctement la profitabilité d'une stratégie. Une stratégie avec un win rate élevé peut être non rentable après frais de slippage importants.

## Optimisation des frais

L'utilisation de [[Ordre post-only]] garantit que l'ordre ne sera jamais exécuté comme taker, protégeant ainsi contre les frais taker plus élevés. Cette fonctionnalité est particulièrement utile pour les market makers.

Les [[Ordre à cours limité]] avec des prix bien calibrés peuvent éviter l'exécution instantanée comme taker. Placer l'ordre légèrement en dehors du spread peut result in une exécution comme maker si le marché atteint ce niveau.

Le [[Smart order routing]] peut optimizer automatiquement la sélection entre ordres maker et taker selon les conditions du marché et les structures de frais des différentes paires.

## Comparaison entre exchanges

Les principaux exchanges ont des structures de frais fairly différentes. Binance offre des frais très compétitifs avec des rebates pour les gros volumes. Coinbase a des frais plus élevés reflétant son positionnement institucional.

Les [[Decentralized exchanges (DEX)]] ont une structure de frais complètement différente avec des gas fees variables selon la congestion du réseau blockchain. Pour les small trades, ces gas fees peuvent être prohibitifs.

## Sources

[^1]: Binance, "Trading Fee Schedule", https://www.binance.com (consulted 2026)
[^2]: Coinbase, "Pricing and Fees", https://www.coinbase.com (consulted 2026)
[^3]: Kraken, "Trading Fee Schedule", https://www.kraken.com (consulted 2026)