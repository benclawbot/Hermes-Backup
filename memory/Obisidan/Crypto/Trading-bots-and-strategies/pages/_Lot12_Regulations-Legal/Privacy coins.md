---
titre: "Privacy coins"
type: concept
cluster: "Réglementation crypto"
statut: verified
controverse: high
importance: moyen
source_knowledge: internal
sources_count: 0
tags: [#concept/privacy, #concept/coins, #concept/monero]
créé: 2026-04-21
liens_forts: ["[[AML/KYC]]", "[[Cross-border regulation]]", "[[Réglementation crypto]]"]
liens_opposition: ["[[Compliance]]"]
---

# Privacy coins

> [!info] Résumé
> Les privacy coins sont des crypto-actifs conçus pour assurer la confidentialité des transactions, cachant l'identité des expéditeurs et des destinataires ainsi que les montants transférés. Les principaux exemples incluent Monero (XMR), Zcash (ZEC), et Dash (DASH). Ils soulèvent des préoccupations réglementaires liées à l'AML et à l'utilisation criminelle.

## Définition

Les privacy coins sont des crypto-actifs qui implémentent des technologies de confidentialité pour rendre les transactions anonymes ou non traçables. Contrairement à Bitcoin où toutes les transactions sont transparentes sur la blockchain, les privacy coins utilisent des techniques cryptographiques pour cacher les informations.

Les technologies principales incluent : les ring signatures (Monero) qui mélangent la signature d'un expéditeur avec celles d'autres utilisateurs, les zk-SNARKs (Zcash) qui permettent de prouver la validité d'une transaction sans révéler les détails, et les CoinJoin (Wasabi Wallet) qui combinent plusieurs transactions en une seule.

Monero est le privacy coin le plus établi, utilisant les ring signatures, les stealth addresses (adresses temporaires), et les RingCT (Ring Confidential Transactions). Zcash offre la possibilité de transactions "shielded" avec zk-SNARKs, mais aussi des transactions transparentes comme Bitcoin.

## Contexte et origine

Les privacy coins ont émergé peu après Bitcoin, avec des projets comme Zerocoin (2013), qui a evolué en Zcash en 2016. Monero a été lancé en 2014, se basant sur le protocole CryptoNote. L'objectif était de répondre aux préoccupations de privacy sur la blockchain Bitcoin, où toutes les transactions sont publiquement traceables.

Les privacy coins ont été adoptés par des utilisateurs légitimes soucieux de leur vie privée (journalistes, activistes, personnes dans des pays autoritaires) mais aussi par des acteurs criminels pour blanchir des fonds. Cette dualité a créé des préoccupations réglementaires.

LaFATF a identifié les privacy coins comme un risque ML/TF (Money Laundering/Terrorist Financing) majeur. Plusieurs juridictions ont interdit les privacy coins ou les ont limits sur les exchanges réglementés. Le Japan a interdit les privacy coins en 2018, et la Corée du Sud a interdit le trading en 2021.

## Mécanismes et caractéristiques

Les privacy coins presentent des défis pour la [[AML/KYC]] car les tecnologias masquent l'origine et la destination des fonds. Les règles de Travel Rule FATF, qui exigent le partage d'informations entre VASPs, sont impossibles à aplicar pour les privacy coins sans compromettre leur privacy.

Les méthodes de détection incluent : l'analyse comportementale (patterns de transaction, timing), les "chain forensics" avancées qui peuvent identifier certaines caractéristiques même avec privacy, et les enquêtes sur les points d'entrée/sortie (where privacy coins are converted to/from regular crypto).

Les régulateurs ont répondu par : l'interdiction des privacy coins sur les exchanges réglementés (Japan, Corée du Sud), des restrictions sur les converting services, et des sanctions contre les mixers comme Tornado Cash (2022) qui were used to anonymize crypto.

## Nuances, critiques, limites

Les privacy coins sont critiqués par les régulateurs comme outils de blanchiment et de évasion fiscale. Les mêmes caractéristiques qui protegent la vie privée des utilisateurs légitimes sont utilisées par les criminels. Le trade-off entre privacy et sécurité est au centre du débat.

Les defenseurs des privacy coins argumentent que la privacy financière est un droit fondamental et que les banking system traditionnels permettent déjà l'anonymat pour les gros déposants. Ils argumentent aussi que les privacy coins ne sont pas plus utilisées pour le crime que le cash, qui est anonyme par nature.

L'avenir des privacy coins dépend de la regulateur pressure. Si les restrictions s'intensifient, les privacy coins pourraient être poussés vers des plateformes decentralized hors contrôle, ou vers des juridictions permissives. L'innovation dans le domaine de la privacy computationnelle (ZK proofs) pourrait rendre les privacy coins plus difficiles à détecter.

## Liens et implications

Les [[Privacy coins]] sont directement affected par les règles [[AML/KYC]] car leur conception même est incompatible avec les exigences de traçabilité. Les VASPs qui veulent être conformes ne peuvent pas supporter les privacy coins sans violer les règles.

Le [[cross-border regulation]] est problematique avec les privacy coins car il n'y a pas de moyen de vérifier la conformité des Travel Rule quand les informations sont masquées. Les juridictions qui appliquent strictement les règles FATF interdisent les privacy coins.

Les [[Reporting requirements]] liées aux privacy coins sont difíciles à appliquer : si un utilisateur transforme des BTC en XMR, le processus de conversion peut être declare, mais pas la transaction XMR elle-même.

## Sources

[^1]: FATF, "Privacy Coins and ML/TF Risk", https://www.fatf-gafi.org (consulted 2026)
[^2]: Monero Documentation, "Ring Signatures and Privacy", https://www.getmonero.org (consulted 2026)