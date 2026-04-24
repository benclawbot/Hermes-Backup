---
titre: "Effet de disposition"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#psychologie/décision, #concept/biais, #concept/disposition]
créé: 2026-04-20
liens_forts: ["[[Aversion à la perte]]", "[[Coût irrécouvrable]]", [["Psychologie du trading]]", "[[Finance comportementale]]", "[[Biais cognitifs]]", "[[Théorie des perspectives]]", "[[Trading émotionnel]]"]
liens_opposition: []
---

# Effet de disposition

> [!info] Résumé
> L'effet de disposition est la tendance à vendre les positions gagnantes trop tôt et à maintenir les positions perdantes trop longtemps. Ce biais, documenté par Shefrin et Statman (1985), est une manifestation de l'aversion à la perte et du biais du coût irrécouvrable en contexte d'investissement.

## Définition

L'effet de disposition est un biais comportemental où les investisseurs vendent leurs positions gagnantes trop rapidement tout en maintenant trop longtemps leurs positions perdantes. Ce comportement va à l'encontre de la logique financière qui voudrait vendre les actifs sous-performants et maintenir les actifs performants.

Le biais tire son nom du concept de "disposition" qui décrit la volonté de vendre des actifs. Shefrin et Statman ont formalisé le concept en 1985 en montrant que les investisseurs ont une "aversion à réaliser les pertes" qui dépasse l'aversion au risque standard.

En trading crypto, l'effet de disposition est particulièrement visible. Les traders vendent leurs positions lors des premiers gains modestes "pour sécurisé un profit" mais hold des positions en baisse significative dans l'espoir de "récupérer". Ce comportement asymétrique crée un pattern où les petits gains sont rapidement capturés mais les grosses pertes restent.

## Contexte et origine

Shefrin et Statman ontintroduit le concept dans leur article de 1985 "The Disposition to Sell Winners Too Early and Ride Losers Too Long". Leur recherche montrait que les investisseurs ont une tendance systématique à vendre les gagnants et à garder les perdants, même quand vendre les perdants serait objectivement meilleur.

La cause profonde est psychologique : les gens évaluent les résultats par rapport à un point de référence (typiquement le prix d'achat) et les pertes sont plus douloureuses que les gains ne sont agréables. Cette asymmetry, documentée par Kahneman et Tversky dans la [[théorie des perspectives]], объясняет le comportement.

Les études empiriques sur les comptes de courtage montrent que les investisseurs retail vendent les positions gagnantes avec une probabilité 50% supérieure aux positions perdantes au même niveau de profit/perte. Cette asimétrie est coûteuse en termes de performance.

## Mécanismes et caractéristiques

L'effet de disposition se manifeste à travers plusieurs mécanismes.

L'aversion à la признании ошибки : vendre une position perdante rend la perte "réelle". La non-vente permet de maintenir l'illusion que la position n'est pas vraiment en perte. Cette avoidance de la douleur est plus forte que la rationalité économique.

Le "[[coût irrécouvrable]]" : le prix d'achat devient un anchor que le trader ne veut pas abandonner. La vente signifierait accepter que l'investissement initial était une erreur, une perspective psychologique unwelcome.

L'expectative de reversal : le trader qui hold une position perdante anticipe un retour du prix à son prix d'achat. Cette attente est souvent alimentée par la [[fallacie du joueur]] et le [[biais de récence]] qui font croire que "laMalchance ne peut pas continuer".

Le "locking in" des gains : un gain immédiat procure une satisfaction psychologique même si un gain futur plus important aurait été possible. La peur de perdre un gain acquis pousse à vendre tôt.

## Nuances, critiques, limites

L'effet de disposition peut être rationnel dans certains contextes. Si le prix d'achat d'une action reflète une information qui n'est plus valide, garder la position perdante peut être justifié. Le biais devient problème quand il dominait la prise de décision au détriment de l'analyse rationnelle.

La research montre que les professionnels sont moins sujets à l'effet de disposition que les investors retail. Les traders professionnels ont souvent des règles mechanisées qui eliminent l'émotion de la décision de vente.

La [["conscience de soi"]] et l'[[[humble intellectuel|humilité intellectuel]]] sont importantes pour reconnaître quand ce biais affecte les décisions. Maintenir des règles de sortie prédéfinies (stop-loss, take-profit) peut mitigate ce biais.

Les [[trading bot]]s mechaniquement programmés éliminent l'effet de disposition. Si un bot est programmé pour vendre à -5% ou à +10%, ces règles sont appliquées sans l'interférence émotionnelle qui cause l'effet de disposition chez les humains.

## Liens et implications

L'[[effet de disposition]] est lié à l'[[aversion à la perte]] et au [[coût irrécouvrable]]. Ensemble, ces biais expliquent le comportement asymétrique où les pertes sont evitée plus intensement que les gains ne sont poursuivis.

La [[psychologie du trading]] et la [[finance comportementale]] intègre l'effet de disposition comme un biais majeur影响 la performance des investisseurs. Le [[trading émotionnel]] est souvent une conséquence directe de ce biais.

La [[théorie des perspectives]] fournit le cadre théorique pour comprendre pourquoi l'effet de disposition existe. Selon cette théorie, les gens sont plus sensibles aux pertes qu'aux gains de même magnitude.

Les règles de [[gestion du risque]] comme le stop-loss et le take-profit sont des defenses contre l'effet de disposition. Ces règles doivent être définies à l'avance pour éviter la tentation de les modifier en réponse aux émotions du moment.

## Sources

[^1]: Shefrin & Statman, "The Disposition to Sell Winners", Journal of Finance (1985)
[^2]: Odean, "Do Investors Trade Too Much?", American Economic Review (1998)
[^3]: Kahneman & Tversky, "Prospect Theory", Econometrica (1979)