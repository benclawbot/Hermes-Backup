---
titre: "Martingale strategy"
type: controverse
cluster: "Trading bots and strategies"
statut: to-verify
controverse: high
importance: deep-cut
source_knowledge: web-checked
sources_count: 0
tags: [#controverse/martingale, #controverse/gambling, #concept/risk]
créé: 2026-04-20
liens_forts: ["[[Gambler's fallacy]]", "[[Risk of ruin]]", "[[Drawdown]]"]
liens_opposition: ["[[Kelly Criterion]]"]
---

# Martingale strategy

> [!info] Résumé
> La stratégie martingale double la taille de la position après chaque perte pour récupérer toutes les pertes précédentes avec un seul gain. Mathématiquement séduisante mais mène à des pertes géométriques en série perdante et est interdite dans plusieurs juridictions.

## Définition

La martingale est une stratégie de mise qui originate des jeux de casino (lancer de pièce, roulette). Le principe : après chaque perte, doubler la mise pour qu'un seul gain récupère toutes les pertes précédentes et génère un profit égal à la mise initiale.

Exemple : mise de 10€ → perte. Mise suivante 20€ → perte. Mise suivante 40€ → gain 40€. Total récupéré : 10+20+40=70€, gain net = 10€ (la mise initiale). La logique est que statistiquement, un gain viendra eventually.

Le problème central : une série perdante peut être très longue. Avec 10 pertes consécutives, la mise suivante serait de 10 240€ (après avoir déjà perdu 10 230€). Un capital extremely important est nécessaire pour continuer, et un seul trade peut éclater tout le compte.

## Contexte et origine

La martingale a été popularisée au 18e siècle en France. Le nom vient de "martingale", un harness pour chevaux qui signifie "sans fin". Les joueurs pensaient que statistiquement, une série ne pouvait pas durer éternellement.

Les casinos ont établi des limites de mise précisément pour contrer la martingale. Un joueur qui atteint la limite de la table ne peut plus doubler et perd tout ce qu'il a misé.

En crypto, la martingale a été réintroduite via les bots de grid trading et DCA qui "doublent la mise" en achetant plus quand le prix baisse. Beaucoup de bots Telegram et de stratégies promotionnées utilisent une forme de martingale cachée.

## Mécanismes et caractéristiques

La version pure de la martingale nécessite une limite de mise infinie et un capital infini pour garantir la récupération. En pratique, les deux sont limités.

La "martingale inversée" (anti-martingale) double après un gain et revient à la mise initiale après une perte. Cette approche capture les tendances mais limite les pertes.

La martingale avec stop-loss set un nombre maximum de doublages (ex: 5) après quoi on arrête même si on n'a pas récupéré. Cette approche limite les pertes mais ne garantit pas la récupération.

La combinaison avec le grid trading (martingale grid) multiplie les risques. Les bots qui promettent des rendements "sans risque" utilisent souvent une forme de martingale qui a causé des pertes catastrophiques en 2022.

## Nuances, critiques, limites

Le [[gambler's fallacy]] est la croyance Erronée que les pertes passées rendent un gain plus probable. En réalité, chaque trade est indépendant et la probabilité ne change pas.

Le [[risk of ruin]] avec la martingale est proche de 100% à long terme. Même avec un capital initial de 100 000€, une série de 10 pertes consécutives (possible en trading) nécessite une mise de plus de 100 000€ pour continuer. La majorité des traders n'ont pas ce capital.

L'interdiction juridique : plusieurs juridictions ont interdit la martingale pour les jeux d'argent et le trading retail précisément parce que c'est una méthode de perte garantie à long terme.

Les résultats pratiques : des milliers de traders ont perdu des sommes importantes en utilisant des stratégies martingale sur crypto. Les témoignages de pertes de dizaines de milliers d'euros sont courants sur les forums.

## Liens et implications

La [[martingale strategy]] est liée au [[gambler's fallacy]] qui justifie faussement son utilisation. Le [[risk of ruin]] est ekstremement élevé avec cette stratégie.

Le [[drawdown]] peut être dévastateur avec une martingale : une seule série perdante peut éliminer des mois ou des années de gains cumulés. Le [[grid trading]] combine souvent une logique martingale avec un risque amplifié.

Le debat sur [[les bots surpassent-ils le trading manuel]] inclut des exemples de bots martingale qui ont causé des pertes massives en 2022.

## Sources

[^1]: Ethier, "The Martingale System for Gamblers and Engineers", University of Chicago (consulted 2026)
[^2]: Reuters, "Crypto Trading Bot Loses Millions", https://www.reuters.com (consulted 2026) - information à confirmer