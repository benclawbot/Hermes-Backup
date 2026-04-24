---
titre: "Stablecoin regulation"
type: concept
cluster: "Réglementation crypto"
statut: verified
controverse: high
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/stablecoin, #concept/regulation, #concept/miCA]
créé: 2026-04-21
liens_forts: ["[[MiCA]]", "[[Réglementation crypto]]", "[[Compliance]]"]
liens_opposition: ["[[Regulatory arbitrage]]"]
---

# Stablecoin regulation

> [!info] Résumé
> La stablecoin regulation désigne l'ensemble des règles spécifiques aux stablecoins, crypto-actifs conçus pour maintenir une valeur stable via un ancrage à un actif ou un mécanisme algorithmique. Elle inclut les exigences de réserve, les règles de frappe, et les restrictions sur l'utilisation selon les juridictions.

## Définition

La stablecoin regulation est le corpus de règles qui governent les stablecoins, définis comme des crypto-actifs conçus pour maintenir une parité avec une valeur de référence (généralement une devise comme l'USD ou l'EUR). Les stablecoins sont soit adossés à des actifs réels (fiat-collateralised), adossés à d'autres crypto-actifs (crypto-collateralised), ou algorithmiques (non-collateralised).

Les types de stablecoins régulés incluent : les stablecoins adossés au dollar (USDC, USDT sur le réseau Tron selon certains regulatory frameworks), les stablecoins adossés à l'euro (EURS, Planck), et les stablecoins adossés à un panier d'actifs (comme les Bridge stablecoins).

La regulation se concentre sur : les exigences de réserve (les actifs garantissant la parité doivent être liquéfiable et safely invested), les règles de redemption (droit des détenteurs de récupérer leur argent), les restrictions géographiques (interdiction pour les résidents de l'EEE de certains stablecoins), et les limites de transaction (pour les stablecoins avec un volume important).

## Contexte et origine

La stablecoin regulation a commencé à se développer après l'effondrement de TerraUSD (UST) en mai 2022, un stablecoin algorithmique qui a perdu sa parité et causé des pertes de plusieurs milliards de dollars pour les détenteurs. Cet événement a révélé les risques des stablecoins non garantis et a acceleré la régulation.

Les États-Unis ont développé plusieurs propositions de loi (STABLE Act, Payment Stablecoin Act) mais n'ont pas encore de cadre final. La CFTC a jurisdicción sur les produits dérivés de stablecoins, et la SEC a considéré certains stablecoins comme des securities.

MiCA en Europe a établic un cadre spécifique pour les stablecoins avec deux catégories : les Asset-Referenced Tokens (ART) adossés à plusieurs actifs ou à une monnaie + actifs, et les Electronic Money Tokens (EMT) adossés à une seule devise. Les stablecoins avec un volume quotidien de transactions supérieur à 200 millions d'euros sont interdits aux résidents de l'EEE sans accord préalable.

## Mécanismes et caractéristiques

Sous MiCA, les émetteurs d'ART doivent : maintenir des réserves de haute qualité liquéfiable (cash, deposits, short-term debt securities), separar les réserves des actifs de l'entreprise, publier des rapports de réserve mensuels, et satisfy des exigences de capital minimum.

Les règles de redemption sous MiCA exigent que les émetteurs d'EMT permettent le redeem au pair value à tout moment. Les frais de redemption ne doivent pas dépasser les coûts réels. Ces règles protègent les détenteurs contre les pratiques abusives.

Les restrictions géographiques sous MiCA interdisent effectively les "global stablecoins" (comme USDT ou USDC si le volume dépasse les seuils) aux résidents de l'EEE sans accord préalable avec les autorités. Cette règle a causé des préoccupations sur l'avenir de certains stablecoins en Europe.

## Nuances, critiques, limites

La regulation des stablecoins algorithmiques est particulièrement stricte après Terra. MiCA interdit effectively les stablecoins algorithmiques non garantis, les rendant non conformes dans l'UE. Cette interdiction pourrait ralentir l'innovation dans les stablecoins算法.

Les règles de réserve sont critiquées pour être insuffisantes. Les réserves en cash sont sur心配 par rapport à d'autres actifs, mais lesStablecoins avec des réserves en Corporate bonds ou en autres crypto-actifs sont plus risqués. Le choix du matelas de réserve affecte la sécurité des détenteurs.

Les restrictions sur les stablecoins globaux en Europe créent des tensions avec la fonction d'access à dollar-pegged tokens pour les utilisateurs européens. Les critics arguent que cela force les utilisateurs vers des alternatives moins efficaces.

## Liens et implications

La [[Stablecoin regulation]] fait partie de [[MiCA]] qui établit les règles européennes. Les exigences de réserve et de capital pour les émetteurs de stablecoins sont intégrées au règlement, créant un cadre uniforme pour l'UE.

La [[Compliance]] pour les émetteurs de stablecoins est complexe : ils doivent meet les exigences de réserve, les règles de redemption, les limites géographiques, et les exigences de reporting. Cela représente un coût opérationnel significatif.

Le [[regulatory risk]] pour les stablecoins est élevé car les règles sont encore en évolution. Un changement réglementaire peut affecter la viabilité d'un modèle de stablecoin, especialmente pour les stablecoins algorithmiques.

## Sources

[^1]: EU, "MiCA - Stablecoin Requirements", https://eur-lex.europa.eu (consulted 2026)
[^2]: FSOC, "Stablecoin Report", https://home.treasury.gov (consulted 2026)