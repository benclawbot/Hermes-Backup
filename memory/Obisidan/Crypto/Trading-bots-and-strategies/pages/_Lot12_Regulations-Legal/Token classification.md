---
titre: "Token classification"
type: concept
cluster: "Réglementation crypto"
statut: verified
controverse: high
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/token, #concept/classification, #concept/regulatory]
créé: 2026-04-21
liens_forts: ["[[Howey Test]]", "[[Securities law]]", "[[Réglementation crypto]]"]
liens_opposition: []
---

# Token classification

> [!info] Résumé
> La classification des tokens désigne le processus de détermination du statut réglementaire d'un token crypto : security token, utility token, payment token, ou commodity. Cette classification détermine les obligations réglementaires applicables et influence la capacité du token à être échangé légalement sur différentes juridictions.

## Définition

La classification des tokens est le processus juridique et réglementaire qui détermine à quelle catégorie appartient un token et donc quelles règles s'appliquent. Les catégories principales sont :

**Security Token** : token qui satisfy le [[Howey Test]] et est donc considéré comme une security. Il doit respecter les règles d'enregistrement SEC ou utiliser une exemption ( [[Regulation S]], [[Regulation CF]], Regulation D). Les security tokens confèrent des droits financiers (dividendes, share in profits) ou des droits de governance effectifs.

**Utility Token** : token qui donne accès à un produit ou service. Il n'est pas vendu comme investissement mais comme moyen d'utiliser un service futur. La frontière entre utility et security est floue : si les acheteurs espèrent une appreciation, le token peut quand même être un security.

**Payment Token** : token conçu comme moyen de paiement, similaire à une moneda. Bitcoin est le plus connu. Ces tokens sont généralement classés comme commodities aux US (CFTC jurisdiction) ou comme moyens de payment dans d'autres juridictions.

**Stablecoin** : token conçu pour maintenir une valeur stable, généralement adossé à une devise ou à un panier d'actifs. Les stablecoins sont régulés différemment selon leur structure (collateralisé traditionnelles ou algorithmique) et la juridiction.

**NFT (Non-Fungible Token)** : token représentant un actif unique et non fongible. Les NFT sont généralement considerés comme des utility tokens ou des collectibles, mais les cas où ils représentent des parts d'un projet peuvent les rendre qualify comme securities.

## Contexte et origine

La classification des tokens a commencé avec le phénomène ICO de 2017. La SEC a выпустил un rapport (le "DAO Report") en juillet 2017 concluant que les tokens vendus dans des ICO étaient généralement des securities, applying le Howey Test. Ce rapport a établi le precedent que la SEC considérait la maioria des tokens comme des securities.

La période 2017-2020 a été marquée par l'incertitude alors que les projets essayaient de structurer leurs tokens pour éviter la classification comme security. Les "utility token sales" sont devenues populares, argüant que les tokens donnaient accès à un service et n'étaient donc pas des securities.

L'évolution vers les security tokens véritables (STO) a émergé quand certains projets ont décidé de se conformer pleinement aux règles sur les securities, créant des tokens enregistré auprès de la SEC et des marchés secondaires regulés. Cette approche a été slow à se développer en raison de la complexity et du coût de la compliance.

## Mécanismes et caractéristiques

La classification repose sur une analyse multi-factorielle. Les facteurs inclut : la promesse de profit, la dependence aux efforts d'autrui, l'existence d'un enterprise commune, la disponibilité du token sur des marchés secondaires, la présence de governance rights, et l'utilité pratique du token.

L'analyse "from the eyes of the investor" est souvent utilisée : si un investisseur raisonnable considererait le token comme un vehicle d'investissement plutôt que comme un outil utilitaire, le token est probablement un security.

Les regimes réglementaires varient. Aux US, la SEC applique le Howey Test ; la CFTC considère Bitcoin et Ether comme commodities. Dans l'UE, MiCA classify les jetons en catégories avec des règles differentes pour les ART (Accepted Rule Token), les EMT (Electronic Money Token), et les utility tokens.

## Nuances, critiques, limites

La classification des tokens est une zone grise permanente. Le même token peut être un utility token dans une juridiction et un security dans une autre. Les projects qui opèrent internationalement doivent naviguer de multiples régimes réglementaires, each avec ses propres définitions.

Le problème de "same token, different classification" crée un arbitrage réglementaire. Un token peut être vendu sous Regulation S à des investisseurs non-US (considéré comme security aux US) tout en étant un utility token dans d'autres juridictions.

L'absence de classification claire par les régulateurs crée un "[[regulatory risk]]" majeur pour les projets. Ils ne peuvent pas Planifier leur développement avec certitude, et une classification unexpected peut détruire la viabilité du projet.

## Liens et implications

La [[token classification]] determine directement les obligations de [[Securities law]] applicables. Un token classé comme security doit comply avec les règles d'enregistrement ou utiliser les exemptions appropriées. Cette classification affecte aussi les [[license requirements]] pour les exchanges qui veulent lister le token.

La classification affecte le [[cross-border regulation]] : un token peut être legal dans un pays et illegal dans un autre. Les projets doivent décider quels marchés servir et comment structurer leurs offres pour maximize leur reach while remaining compliant.

La [[legal uncertainty]] autour de la classification est un obstacle majeur à l'adoption institutionnelle. Les fonds d'investissement et les family offices sont hesitantes à investir dans des tokens dont le statut réglementaire est unclear, limiting the liquidity et la maturation du marché.

## Sources

[^1]: SEC, "Framework for 'Investment Contract' Analysis of Digital Assets", https://www.sec.gov (consulted 2026)
[^2]: EU, "MiCA Classification of Crypto-Assets", https://eur-lex.europa.eu (consulted 2026)