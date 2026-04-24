---
titre: "Compliance"
type: concept
cluster: "Réglementation crypto"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/compliance, #concept/legal, #concept/risk-management]
créé: 2026-04-21
liens_forts: ["[[AML/KYC]]", "[[Reporting requirements]]", "[[Réglementation crypto]]"]
liens_opposition: ["[[Regulatory arbitrage]]"]
---

# Compliance

> [!info] Résumé
> La compliance en contexte crypto désigne l'ensemble des processus et contrôles mis en place pour respecter les obligations réglementaires. Elle inclut la surveillance des transactions, la vérification client (KYC), la détection des activités suspectes, et la reporting aux autorités.

## Définition

La compliance (conformité réglementaire) est la fonction qui assure qu'une entreprise respecte les lois, règlements et directives applicables à son activité. Dans le secteur crypto, la compliance couvre un spectre large : la vérification d'identité des clients (KYC), le monitoring des transactions pour la détection de blanchiment (AML), la classification des tokens pour déterminer leur statut réglementaire, la déclaration aux autorités fiscales, et le respect des sanctions internationales.

Une fonction compliance robuste dans une entreprise crypto comprend typiquement : un Chief Compliance Officer (CCO), une équipe de compliance officers, des systèmes de surveillance transactionnelle, des politiques de contrôle interne, et des programmes de formation du personnel. La compliance n'est pas une fonction statique mais un processus continu d'adaptation aux évolutions réglementaires.

Les obligations de compliance varient selon la juridiction et le type d'activité. Un exchange centralisé doit comply avec les règles AML/KYC de sa juridiction, tandis qu'un développeur de protocole DeFi peut n'avoir aucune obligation directe si le protocole est non custodiel et anonymisé.

## Contexte et origine

La fonction compliance dans la finance traditionnelle a émergé après les scandales des années 1980-90 (crises des savings & loans, Enron) qui ont révélé l'insuffisance des contrôles internes. Les lois comme le Bank Secrecy Act aux États-Unis ou la directive AML européenne ont établi les рамки obligatoires pour les institutions financières.

L'application de ces frameworks à la crypto a commencé réellement après 2017, quand les régulateurs ont commencé à exiger que les exchanges crypto se conforment aux mêmes standards AML/KYC que les banques traditionnelles. FinCEN a établi en 2019 que les "money services businesses" (MSBs) impliquant la crypto doivent s'enregistrer et comply avec les règles BSA.

L'évolution vers la compliance crypto moderne a été accélérée par les sanctions contre Tornado Cash (2022) et les exigences de la FATF pour les "travel rule" qui exigent le partage d'informations entre originating et beneficiary VASPs.

## Mécanismes et caractéristiques

Le KYC (Know Your Customer) est le processus de vérification de l'identité des clients. Il inclut typiquement : collecte de documents d'identité, vérification d'adresse, screening contre des listes de sanctions et de PEPS (Politically Exposed Persons), et parfois une verification de source de fonds. Le KYC peut être simplifié (eKYC) ou renforcé selon le profil de risque.

L'AML (Anti-Money Laundering) désigne l'ensemble des procédures pour détecter et prévenir le blanchiment d'argent. Cela inclut le monitoring des transactions pour identifier des patterns suspects (structuring, tumbling, travel rule non conforme), la déclaration de suspicious activity reports (SARs), et le maintien de programmes de compliance testés et audités.

Le Sanctions compliance exige que les entreprises vérifient que leurs clients et les contreparties ne sont pas sur les listes de sanctions (OFAC en US, EU sanctions list). Les violations de sanctions peuvent entraîner des pénalités civiles et pénelles très importantes.

La classification réglementaire détermine si les tokens échangés sont des securities, commodities, ou autres catégories, avec les obligations correspondantes. Cette classification affecte les produits autorisés à la vente et les restrictions géographiques.

## Nuances, critiques, limites

La compliance crypto est confrontée au défi de la privacy. Les blockchains sont publiques, mais relier les adresses on-chain à des identités réelles est difficile sans KYC. Les outils de surveillance blockchain comme Chainalysis ou Elliptic permettent aux régulateurs de tracer les fonds avec un KYC approprié, mais soulèvent des questions de surveillance de masse.

L'adoption du "travel rule" FATF est problématique dans un écosystème où beaucoup de transactions sont non custodiales (wallets personnels). Les protocolesPrivacy-focused comme les mixers ou les coins confidentiels compliquent encore plus l'application de cette règle.

Les Small projects arguënt que les costs de compliance sont prohibitifs et les excluent du marché. Un exchange réglementé doit investir des centaines de milliers de dollars en compliance annually, ce qui désavantage les petits acteurs face aux grands.

## Liens et implications

La [[compliance]] est au cœur de la [[réglementation crypto]] moderne. Elle détermine comment les entreprises crypto doivent structurer leurs opérations pour être合法的ement. Les [[license requirements]] imposent souvent des standards de compliance comme condition d'octroi de licence.

L'[[AML/KYC]] est une composante centrale de la compliance, définissant les procedures de vérification client et de surveillance. Les [[reporting requirements]] réglementaires (SARs, CTRs, déclaration de revenus) sont des outputs de la fonction compliance.

La [[regulatory risk]] est directement liée à la qualité de la compliance. Une compliance insuffisante peut résulter en sanctions, amendes, ou dans les cas extrêmes, des poursuites pénelles contre les dirigeants.

## Sources

[^1]: FinCEN, "Guidance for MSBs Engaging in Money Services Activities Involving Convertible Virtual Currency", https://www.fincen.gov (consulted 2026)
[^2]: FATF, "Travel Rule", https://www.fatf-gafi.org (consulted 2026)