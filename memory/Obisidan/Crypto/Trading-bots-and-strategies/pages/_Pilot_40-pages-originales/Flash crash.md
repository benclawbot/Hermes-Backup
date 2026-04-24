---
titre: "Flash crash"
type: événement
cluster: "Trading bots and strategies"
statut: to-verify
controverse: high
importance: standard
source_knowledge: web-checked
sources_count: 0
tags: [#événement/crash, #événement/volatility, #concept/liquidity]
créé: 2026-04-20
liens_forts: ["[[Haute fréquence]]", "[[Cascade algorithmique]]", "[[Market making]]"]
liens_opposition: []
---

# Flash crash

> [!info] Résumé
> Un flash crash est une chute de prix soudaine et violente survenue en quelques secondes ou minutes, souvent causée par des cascades algorithmiques. Les marchés crypto sont particulièrement vulnérables en raison de la liquidité fine et de l'absence de circuit breakers.

## Définition

Un flash crash est un événement de marché où le prix d'un actif chute rapidement et significativement (souvent 10-50% ou plus) en l'espace de quelques minutes, secondes, ou même millisecondes, avant de sede retrouver des niveaux plus normaux peu après.

Les flash crashes se distinguent des crashes normaux par leur vitesse extreme et leur résolution relativement rapide. Alors qu'un crash traditionnel peut prendre des heures ou des jours, un flash crash est caractérisé par son délai très court.

Ces événements sont généralement causés par une combinaison de trading algorithmique, de liquidation en cascade, et de retrait soudain de liquidité. Les market makers retirent leurs ordres quand ils détectent une volatilité anormale, amplifiant le mouvement.

## Contexte et origine

Le flash crash le plus célèbre est celui du 6 mai 2010 aux États-Unis, quand le Dow Jones a chuté de près de 1000 points en quelques minutes avant de remonter. L'enquête a révélé que des produits de trading à haute fréquence ont amplifié le mouvement.

En crypto, les flash crashes sont fréquents. Le crash de mars 2020 (COVID crash) a vu Bitcoin chuter de 50% en quelques heures. Le crash FTX novembre 2022 a vu des déclins de 30-40% en quelques heures sur certains tokens.

Les "mini flash crashes" sont quotidiens sur les small caps crypto : des tokens qui perdent 20-30% de leur valeur en quelques minutes avant de remonter partiellement. Ces événements sont souvent liés à des gros ordres de vente ou à des défaillances de plateformes.

## Mécanismes et caractéristiques

Le mécanisme de cascade commence quand un prix baisse déclenche des stop-loss, qui génèrent plus de pression vendeuse, qui déclenchent plus de stop-loss. Les algorithmes de market making retirent leur liquidité quand la volatilité augmente, amplifiant le mouvement.

Les liquidations en cascade se produisent sur les plateformes de trading avec levier. Quand le prix move contre les positions levier, les positions sont automatiquement liquidées. Ces liquidations massives accélèrent le mouvement de prix.

Le retrait de liquidité des market makers amplifie le mouvement. Quand les algos détectent une volatilité anormale, ils cancellent leurs ordres pour éviter d'être exposés à des prix extremes. Ce retrait crée un vide de liquidité qui amplifie les mouvements.

La volatilité extreme peut déclencher des "circuit breakers" sur les marchés traditionnels (arrêt temporaire du trading). En crypto, ces mécanismes sont rares ou inexistants, permettant aux mouvements extremes de se poursuivre sans interruption.

## Nuances, critiques, limites

Le manque de regulation en crypto signifie que les flash crashes ne sont souvent pas étudiés ou documentés formellement. Les causes exactes restent souvent inconnues ou contestées.

La fragmentation des exchanges crypto signifie qu'un flash crash sur Binance n'affecte pas nécessairement Coinbase de la même manière. Les prix peuvent diverger significantement entre exchanges, creating opportunities pour l'arbitrage mais aussi risques.

L'attribution des causes est complexe. Était-ce un gros ordre ? Un problème technique ? Une attaque délibérée ? Les enquêtes prennent des semaines et les conclusions sont souvent incomplètes.

Les victims des flash crashes sont souvent des traders avec des positions longues ou des ordres d'achat limit qui voient leurs ordres exécutés à des prix mucho plus bas que prévu. Les ordres achete stops peuvent être exécutés très en dessous de leur prix d'activation.

## Liens et implications

Le [[flash crash]] est lié à la [[haute fréquence]] et aux [[cascade algorithmique]]s qui amplifient les mouvements. Le [[market making]] peut retirer sa liquidité en période de stress, aggravant le crash.

Les [[stop-loss cascade]] sont une composante clé des flash crashes. Quand les stop-loss sont exécutés, ils génèrent une pression vendeuse qui déclenche plus de stop-loss.

L'[[arbitrage]] peut être une stratégie de récupération après un flash crash, en achetant des actifs à prix réduit sur un exchange où le crash a été plus sévère et en vendant sur un autre où le prix est plus élevé.

## Sources

[^1]: SEC, "Findings Regarding the Market Events of May 6, 2010", https://www.sec.gov (consulted 2026)
[^2]: CFTC, "Flash Crashes in Crypto Markets", https://www.cftc.gov (consulted 2026) - information à confirmer