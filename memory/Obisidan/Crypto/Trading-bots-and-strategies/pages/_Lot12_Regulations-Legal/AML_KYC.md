---
titre: "AML/KYC"
type: concept
cluster: "Réglementation crypto"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/aml, #concept/kyc, #concept/compliance]
créé: 2026-04-21
liens_forts: ["[[Compliance]]", "[[Reporting requirements]]", "[[Cross-border regulation]]"]
liens_opposition: ["[[Privacy coins]]"]
---

# AML/KYC

> [!info] Résumé
> AML (Anti-Money Laundering) et KYC (Know Your Customer) sont les piliers de la conformité réglementaire crypto. L'AML désigne les procedures de prevention du blanchiment d'argent ; le KYC désigne la vérification d'identité des clients. Ensemble, ils constituent le cadre de base pour l'intégration réglementaire des services crypto.

## Définition

AML (Anti-Money Laundering) est un ensemble de lois, réglementations et procédures visant à prévenir le blanchiment d'argentsale proceeds de activités criminelles. L'AML englobe la surveillance des transactions, la détection de patterns suspects, la déclaration aux autorités, et la tenue de registros compliance.

KYC (Know Your Customer) est le processus de vérification de l'identité des clients avant d'établir une relation d'affaires. Le KYC inclut la collecte de documents d'identité, la vérification de leur authenticité, le screening contre des listes de sanctions, et parfois l'évaluation du risque client.

Dans le contexte crypto, AML/KYC prend une dimension particulière car les transactions sont pseudonymisées sur la blockchain, mais les exchanges centralisés (CEX) doivent relier ces identités on-chain aux identités réelles. Les protocoles DeFi non custodiels échappent par definition au KYC traditionnelles, créant une tension entre privacy et compliance.

Les normes FATF (Groupe d'action financière) sont le стандарт international pour AML/KYC. Les 40 recommandations FATF constituent le cadre de référence que la maioria des juridictions adoptent pour leurs législations nationales.

## Contexte et origine

L'AML moderne trouve ses origines dans le Bank Secrecy Act américain de 1970 et le Money Laundering Control Act de 1986. Ces lois ont établi les premières obligations de déclaration et de tenue de records pour les institutions financières.

La guerre contre le terrorism après le 11 septembre 2001 a conduit à un renforcement majeur de l'AML, avec le USA PATRIOT Act qui a étendu les obligations de KYC et créé le programa de sanctions de l'OFAC. Les règles de travel rule (information à partager sur les transfers de fonds) ont été introduites par la FATF.

L'application de l'AML/KYC à la crypto a commencé avec le руководство FinCEN en 2011 considérant les échanges de Bitcoin comme des money services businesses. Le Cyberspace Financial Services Business (2020) et lesguidances ultérieures ont affiné ces exigences, especially après les scandales (Mt. Gox, Bitfinex, SUEX) qui ont révélé l'utilisation de la crypto pour le blanchiment.

## Mécanismes et caractéristiques

Le KYC repose sur la collecte de documents : passeport ou carte d'identité nationale, proof of address (facture de services, relevé bancaire), et dans certains cas, proof of funds ou source of wealth. Les vérification peuvent être manuelles (compliance officer) ou automatisées (eKYC viaOCR et matching avec des bases de données).

L'AML repose sur le monitoring des transactions en temps réel ou quasi-temps réel. Les systèmes AML détectent des patterns suspects comme le structuring (plusieurs petites transactions pour éviter le seuil de déclaration), les transactions avec des privacy coins, les links avec des adresses blacklisted (Chainalysis, Elliptic), et les deviations par rapport au profil de risque client.

Le SAR (Suspicious Activity Report) est la déclaration à l'autorité (FinCEN aux US, TRACFIN en France) des transactions suspectes. Le CTR (Currency Transaction Report) déclarera les transactions au-dessus d'un seuil (10 000 USD aux US). Ces declarations sont obligatoires et non divulgación est herself une violation.

La Travel Rule FATF exige que les VASPs (Virtual Asset Service Providers) partagent des informations sur l'expéditeur et le bénéficiaire lors de chaque transfer, permettant aux autorités de tracer les fonds à travers les frontières.

## Nuances, critiques, limites

L'AML/KYC dans la crypto soulève des défis uniques. Les privacy coins (Monero, Zcash) sont conçus pour rendre la traçabilité impossible, creating a tension avec les obligations AML. Les decentralized exchanges (DEX) et les protocoles DeFi nemaintiennent pas d'identités clients, complicating l'application des rules.

Le problème du "chain-hopping" : les fonds peuvent être convertis entre multiple cryptocurrencies et juridictions pour obscurcir leur origin. Les mixers comme Tornado Cash (sanctionné en 2022) ont été utilisés pour ce faire. L'AML moderne doit intégrer la blockchain analysis pour tracer ces fonds.

Les critiqueursarguent que l'AML/KYC excessif étouffe l'innovation et exclut les populations non bancarisées, créant un système où seul le contrôle gouvernemental sur les finances est renforcé. Les défenseurs répliquent que la démocratie ne peut pas tolerate un système financier parallèle non régulé.

## Liens et implications

L'[[AML/KYC]] est une composante fondamentale de la [[compliance]] crypto. Les entreprises qui ne respecter pas ces obligations s'exposent à des sanctions, des amendes, et potentiellement des poursuites pénelles. Les [[license requirements]] dans la plupart des juridictions incluent des programmes AML/KYC documentés.

Le [[cross-border regulation]] dépend heavily de l'AML/KYC standardisé. La Travel Rule FATF est un mécanisme de cooperation internationale qui permet aux autorités de suivre les fonds à travers les juridictions. Les jurisdictions qui n'appliquent pas ces règles become des refuges pour les activités suspectes.

Les [[privacy coins]] sont directementaffected par les règles AML/KYC car leur anonymat intrinsèque les rend incompatibles avec les obligations de travel rule. Les projects comme Monero font face à des restrictions sur les exchanges regulés.

## Sources

[^1]: FATF, "Risk-Based Approach to Virtual Assets and VASPs", https://www.fatf-gafi.org (consulted 2026)
[^2]: FinCEN, "CVC MSB Registration and Compliance", https://www.fincen.gov (consulted 2026)