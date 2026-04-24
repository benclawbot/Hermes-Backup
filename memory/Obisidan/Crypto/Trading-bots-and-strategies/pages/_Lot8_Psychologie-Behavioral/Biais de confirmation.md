---
titre: "Biais de confirmation"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#psychologie/cognitif, #concept/biais, #concept/perception]
créé: 2026-04-20
liens_forts: ["[[Biais cognitifs]]", "[[Ancrage]]", "[[Psychologie du trading]]", "[[Finance comportementale]]", "[[Analyse technique pour bots]]", "[[Backtesting]]", "[[Peur et cupidité]]"]
liens_opposition: []
---

# Biais de confirmation

> [!info] Résumé
> Le biais de confirmation est la tendance à chercher, interpréter et mémoriser les informations qui confirment ses croyances préexistantes. En trading, il mène à ignorer les signaux contraires, à maintenir des positions perdantes, et à surestimer la qualité de ses analyses.

## Définition

Le biais de confirmation est un biais cognitif où une personne donne préférence aux informations qui confirment ses croyances initiales, tout en ignorant ou discountant les informations qui contredisent ces croyances. Ce biais opère à toutes les étapes du traitement de l'information : collecte, interprétation, mémorisation.

En trading, le biais de confirmation se manifeste de multiples façons : un trader haussier sur Bitcoin va rechercher des news positives, interpréter une résistance cassée comme un signal bullish, et oublier les signaux baissiers qui ne correspondent pas à son analyse. Même face à des données contraires, il trouve des raisons de maintenir sa position.

Ce biais est particulièrement dangereux car il donne l'illusion d'une analyse rigoureuse alors que le trader ne fait que renforcer sa vision initiale. La recherche de "[[sentiment analysis pour trading|sentiment]]" devient une quête de validation plutôt qu'une évaluation objective.

## Contexte et origine

Le biais de confirmation a été formellement identifié par Peter Wason dans les années 1960 à travers ses expériences sur le raisonnement. Son "test à deux choisit" a démontré que les gens préfèrent collecter des informations qui confirment leur hypothèse plutôt que des informations qui pourraient l'infirmer.

En économie et finance, le biais de confirmation a été documenté par les chercheurs en finance comportementale comme un facteur majeur des bulles spéculatives. Les investisseurs pendant la bulle internet des années 2000 searchaient des confirmations de leur conviction que "cette fois c'est différent".

La recherche en psychologie montre que le biais de confirmation est alimenté par le besoin cognitif de cohérence. Réconcilier des informations contradictoires avec ses croyances cause un inconfort psychologique (dissonance cognitive) que le cerveau évite naturellement.

## Mécanismes et caractéristiques

Le biais de confirmation opère à trois niveaux : la sélection des informations, l'interprétation, et la mémorisation.

Au niveau de la sélection, le trader choisit consciemment ou non les sources qui confirment sa thèse. Les forums crypto sont remplis de "bulls" qui postent dans des groupes haussiers et évitent les groupes baissiers. Cette sélection crée une "chambre d'écho" qui amplifie la conviction initiale.

L'interprétation sélective déforme les données pour les rendre cohérentes avec les croyances. Un chandelier doji peut être vu comme un "signe de consolidation" par un trader haussier et comme un "signal de reversal" par un trader baissier. Le biais de confirmation déforme l'interprétation vers la croyance preexistante.

La mémorisation sélective renforce le biais. Les trades gagnants sont plus marqués en mémoire que les perdants, créant une distorsion du historique personnel. Le trader se rappelle de ses bonnes décisions mais oublie ses erreurs, surestimant sa compétence.

En contexte de [[backtesting]], le biais de confirmation cause le "data-snooping" : tester des centaines de configurations jusqu'à en trouver une qui confirme la conviction initiale du trader sur le marché.

## Nuances, critiques, limites

Le biais de confirmation n'est pas toujours irrationnel. Dans un monde avec informations coûteuses et temps limité, donner priorité aux informations cohérentes avec une hypothèse est une stratégie rationnelle pour éviter la surcharge cognitive. Le problème est la déviation systématique de la rationalité.

La强度 du biais de confirmation varie selon l'implication émotionnelle. Plus un trader est émotionnellement investi dans une position, plus le biais sera fort. Les positions importantes en capital ou en ego déclenchent une défense plus active contre les informations contraires.

Les marchés efficients réduisent l'impact du biais de confirmation car les prix reflètent rapidement toute l'information disponible. Mais en crypto, les marchés sont moins efficients et les biais persistent plus longtemps, offrant des opportunités pour les traders qui peuvent identifier et corriger leurs propres biais.

La mitigation du biais de confirmation inclut :刻意ement chercher des informations contraires, maintenir un journal de trading avec analyse objective, utiliser des règles de décision mechanisées (bots) qui ne sont pas sujets à ce biais, et faire reviewer ses positions par un tiers.

## Liens et implications

Le [[biais de confirmation]] est un sous-type des [[biais cognitifs]] qui affectent spécifiquement la collecte et l'interprétation de l'information. Il est lié à l'[[ancrage]] (adhérer à une première impression) et à la [[surconfiance]] (surestimer ses propres capacités).

La [[psychologie du trading]] et la [[finance comportementale]] intègrent le biais de confirmation dans leurs modèles. Le [[trading émotionnel]] est souvent une conséquence de ce biais : le trader émotionnel est encore plus susceptible de rechercher des confirmations.

L'[[analyse technique pour bots]] peut être affectée par le biais de confirmation si le trader sélectionne uniquement les indicateurs qui confirment sa vision. Le [[backtesting]] doit inclure des tests de sensibilité pour éviter de tomber dans le data-snooping.

Les [[indicateurs de sentiment]] reflètent souvent le biais de confirmation collectif du marché : les participants cherchent desconfirmations dans les mêmes données, créant des extremes de sentiment.

## Sources

[^1]: Wason, "Reasoning about a Rule", Quarterly Journal of Experimental Psychology (1968)
[^2]: Kahneman, "Thinking, Fast and Slow", Farrar, Straus and Giroux (2011)
[^3]: Fischhoff, "For those condemned to study the past", Organizational Behavior and Human Performance (1982)