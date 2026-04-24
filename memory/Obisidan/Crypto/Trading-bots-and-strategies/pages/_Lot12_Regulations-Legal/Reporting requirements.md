---
titre: "Reporting requirements"
type: concept
cluster: "Réglementation crypto"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/reporting, #concept/compliance, #concept/aml]
créé: 2026-04-21
liens_forts: ["[[Compliance]]", "[[Tax treatment]]", "[[AML/KYC]]"]
liens_opposition: []
---

# Reporting requirements

> [!info] Résumé
> Les reporting requirements désignent les obligations de déclaration des transactions et activités crypto aux autorités réglementaires. Elles incluent les déclarations fiscales, les rapports SAR pour activités suspectes, et les declarations aux registres de transparence financière selon les juridictions.

## Définition

Les reporting requirements en contexte crypto désignent les obligations legales de declare et de rapporter certaines informations aux autorités. Ces obligations viennent de multiples sources : lois fiscales, règles AML/KYC, reglementations sectorielles, et accords internationaux.

Les principales categories de reporting incluent :

**Declarations fiscales** : dans la plupart des juridictions, les gains en crypto sont imposables et doivent être declarés sur la declaration d'impots. Les exchanges peuvent être obligés de fournir des rapports summarises des transactions (Form 1099 aux US, Declaration 2086 en France pour lescrypto).

**SAR (Suspicious Activity Report)** : les entities réglementées (exchanges, custodians) doivent déclarer aux autorités compétentes (FinCEN aux US, TRACFIN en France) les transactions qui semblent suspectes de blanchiment ou de financement du terrorism.

**Currency Transaction Reports (CTR)** : declarations des transactions en especes au-dessus d'un seuil. Pour la crypto, les analogues dependent des juridictions mais incluent généralement les transactions au-dessus de seuils specifies.

**Travel Rule reporting** : declaration des informations sur l'expéditeur et le bénéficiaire lors de transfers entre VASPs selon les regles FATF. Applicable aux transfers de plus de 1 000 USD/EUR.

**Declarations de registre** : certains pays exigent la declaration des actifs crypto detenus à l'etranger (Declaration to the Centrale des Risques in France for holdings exceeding certain thresholds).

## Contexte et origine

Les reporting requirements pour la finance traditionnelle ont été etendues au secteur crypto progressivement. Le FinCEN a etabli en 2011 que les exchangers de Bitcoin sont des Money Services Businesses (MSBs) et doivent respecter les règles de declaration du Bank Secrecy Act (BSA).

L'evoluation vers des reporting requirements plus specifics pour la crypto a acceleré apres 2019, quand le FATF a ajouté les VA (Virtual Assets) et les VASPs (Virtual Asset Service Providers) à ses recommendations. La Travel Rule a été introduced，要求nt le partage d'informations entre VASPs.

En Europe, la directive (EU) 2018/843 (5e directive AML) a établi que les crypto-asset service providers (CASP) sont soumis aux règles de declaration AML. Le règlement MiCA et le Transfer of Funds Regulation (TFR) ont ajoute des requirements additionnels pour la reporting.

## Mécanismes et caractéristiques

Les declarations SAR doivent être faites dans les 30 jours suivant la detection d'une transaction suspecte, avec la possibilite de délai supplementaire si l'investigation est en cours. Les SARs ne doivent pas être revelées au client concerné (tipping off prohibition).

Les declarations fiscales en crypto peuvent être complexes car lesjuridictions n'ont pas toutes adopte des guidelines clairs. Les courtiers en crypto doivent souvent fournir des declarations 1099 qui récapitulent les gains et les transactions des utilisateurs.

La cooperation internationale via le Common Reporting Standard (CRS) et le FATF Travel Rule permet aux autorités d'échanger des informations sur les titulaires de comptes crypto à travers les frontières. Les juridictions qui ne cooperent pas peuvent être black listées par le FATF.

## Nuances, critiques, limites

L'application des reporting requirements aux decentralized finance (DeFi) est problématique car les protocoles DeFi n'ont pas d'entité centrale qui peut être tenue responsable. Les transactions DeFi sont généralement pseudonymisées et peuvent ne pas être declarées.

La multiplicité des obligations de reporting peut créer des situations absurdes : une même transaction peut être declaree plusieurs fois à differentes autorités, créant une surcharge administrative pour les entities réglementées.

Les seuils de declaration peuvent être inapropries pour la crypto. Une transaction unique de 10 000 euros en crypto peut être divisible en multiples petites transactions pour éviter le seuil, alors qu'une instruction de declaration unique serait plus efficace.

## Liens et implications

Les [[Reporting requirements]] font partie intégrante de la [[Compliance]] crypto. Les entreprises qui ne respectent pas ces obligations s'exposent à des sanctions, des amendes, et potentiellement des poursuites pénelles.

L'[[AML/KYC]] est intimately lié aux reporting requirements, car les SARs et CTRs sont des outputs du processus AML. Les violations des règles AML peuvent entraîner des sanctions personalisées contre les compliance officers.

Les [[Tax treatment]] dépend des reporting requirements pour les declarations de gains. Les utilisateurs qui ne declarent pas leurs transactions crypto s'exposent à des penalties et des interets de retard.

## Sources

[^1]: FinCEN, "Filing SARS for CVC MSBs", https://www.fincen.gov (consulted 2026)
[^2]: FATF, "Travel Rule Implementation", https://www.fatf-gafi.org (consulted 2026)