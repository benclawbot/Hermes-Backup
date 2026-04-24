---
titre: "Sélection adverse"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/selection, #microstructure, #information]
créé: 2026-04-21
liens_forts: ["[[Toxicité du marché]]", "[[Incitations du market maker]]", "[[Asymétrie d'information]]", "[[Écart bid-ask]]", "[[Risque d'inventaire]]", "[[Market making]]", "[[Modèle de Glosten-Milgrom]]"]
liens_opposition: []
---

# Sélection adverse

> [!info] Résumé
> La sélection adverse survient quand un contractant possède une information privée non accessible à l'autre partie. Dans le contexte du market making, le market maker qui trade avec un acteur informé ne peut pas distinguer si son counterpartie est informed ou non, ce qui crée une perte systématique.

## Définition

La sélection adverse (adverse selection) est un concept économique qui décrit une situation oÙ une partie à un contrat possède de l'information que l'autre partie n'a pas, lui permettant de bénéficier aux dépens de l'autre. Dans le contexte de la microstructure des marchés, le market maker qui passe un ordre ne sait pas si le originator de l'ordre possède une information privée sur la vraie valeur de l'actif. Si le originator est informé, le market maker est défavorisé et perdra généralement.

Le problème de sélection adverse émerge parce que le market maker doit fixer ses prix sans savoir si les ordres qu'il reçoit viennent de participantsInformés (qui savent que le prix va bouger) ou de participants non informés (qui tradent pour des raisons de liquidité). Il ne peut pas distinguer ex ante les deux types. Pour se protéger, il widens son spread, ce qui augmente le coût de transaction pour tous les participants.

La [[Toxicité du marché]] est une manifestation de la sélection adverse à l'échelle du marché. Quand le flux d'ordres est dominé par des acteurs informés, les market makers widden leurs spreads, réduisant la liquidité pour tous. Le PIN (Probability of Informed Trading) mesure la proportion d'ordres initiés par des acteurs informés.

## Contexte et origine

Le concept de sélection adverse vient de l'économie de l'assurance (Akerlof, 1970) et a été appliqué à la microstructure financière par Glosten et Milgrom (1985). Leur modèle montre comment un market maker fixe ses prix dans un environnement avec asymétrie d'information. Le market maker met à jour ses beliefs sur la vraie valeur de l'actif en fonction des ordres reçus, mais ne peut jamais être certain que ces ordres ne sont pas informationnellement motivés.

Dans les marchés crypto, la sélection adverse est particulièrement visible. Les traders qui ont accès à des informations privées (sur une upgrade technique à venir, une nouvelle regulation, etc.) peuvent trade avant que l'information ne soit publique. Les market makers qui ne surveillent pas leur exposition à la sélection adverse peuvent subir des pertes systématiques.

La "[[Latence des cotations]]" joue un rôle dans la sélection adverse. Les acteurs informés qui ont une latence plus basse que les market makers peuvent envoyer des ordres avant que les prix ne s'ajustent, capturant la valeur avant les autres.

## Mécanismes / caractéristiques / détails

**Mécanisme de la sélection adverse** : le market maker fixe un bid et un ask. Si un achat est exécuté à l'ask, le market maker peut update its belief : peut-être que l'acheteur sait quelque chose (le prix va monter). Il ajuste son prix en conséquence (monte son ask). Ce processus séquentiel permet au prix de converger vers la vraie valeur.

**PIN (Probability of Informed Trading)** : cette métrique, développée par Easley et al. (1996), estime la proportion d'ordres qui viennent de traders informés. Un PIN élevé signifie que le marché est très toxique, avec une forte probabilité de sélection adverse. Les market makers utilisent le PIN pour calibrer leurs spreads.

**Impact sur le spread** : le spread est proportionnel à la probabilité de sélection adverse. Plus il est probable que le market maker trade avec un acteur informé, plus il doit widden son spread pour se compenser. Le modèle de Glosten-Milgrom donne une formule précise pour ce spread optimal.

**Adverse selection et volatilité** : la sélection adverse augmente avec la volatilité car les opportunités d'information privée sont plus grandes. En période de forte volatilité, les market makers widden leurs spreads, ce qui peut amplifier les mouvements de prix.

**Gestion de la sélection adverse** : les market makers sophistique utilisent plusieurs techniques pour réduire leur exposition à la sélection adverse. Ils peuvent hedging leur inventaire avec des produits dérivés, annuler des ordres quand le flux d'ordres devient trop directionnel, ou utiliser des modèles de prédiction du flux informés.

## Nuances, critiques, limites

La sélection adverse ne concerne pas seulement les market makers. Tout participant qui trade avec une contrepartie ayant une information privée est exposé. Un investor qui achète un actif sur le marché secondaire peut être adversely selected si le vendeur sait quelque chose que l'investigator ne sait pas.

la distinction entre information privée et simple opinion est subtile. Certains traders ont de meilleures analyses et anticipent mieux les mouvements de prix sans avoir une "information privée" au sens strict. La sélection adverse telle que modélisée dans Glosten-Milgrom suppose une information binaires (le trader sait ou ne sait pas), ce qui est une simplification.

La sélection adverse peut être réduite par la transparence. Si tous les participants ont accès à la même information en même temps, l'avantage informationnel disparaît. C'est pourquoi les marchés financiers ont des règles sur la divulgation de l'information matérielle non publique.

## Liens et implications

La sélection adverse est le déterminant principal du [[Écart bid-ask]]. Le spread exist parce que les market makers doivent être rémunérés pour le risque de sélection adverse. Sans ce risque, les spreads seraient quasi nuls.

La [[Toxicité du marché]] est une mesure agrégée de la sélection adverse. Un marché très toxique est un marché oÙ les acteurs informés dominent le flux d'ordres, augmentant le risque pour tous les market makers.

Les stratégies de [[Market making]] doiventer gérer activement leur exposition à la sélection adverse. Les market makers qui ignorent ce risque finissent par perdre de l'argent face aux acteurs informés qui les systematically pick off.

## Sources

[^1]: Akerlof, George. "The Market for Lemons: Quality Uncertainty and the Market Mechanism." *Quarterly Journal of Economics* 84 (1970): 488-500.
[^2]: Glosten, Lawrence, and Paul Milgrom. "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *Journal of Financial Economics* 14 (1985): 71-100.
[^3]: Easley, David, et al. "Market Efficiency and the Origins of PIN." *Journal of Financial Economics* 113 (2014): 1-23.