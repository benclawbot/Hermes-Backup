---
titre: "Regulation S"
type: regulation
cluster: "Réglementation crypto"
statut: verified
controverse: medium
importance: moyen
source_knowledge: internal
sources_count: 0
tags: [#regulation/us, #regulation/securities, #regulation/offshore]
créé: 2026-04-21
liens_forts: ["[[Securities law]]", "[[Regulation CF]]", "[[Token classification]]"]
liens_opposition: ["[[Cross-border regulation]]"]
---

# Regulation S

> [!info] Résumé
> Regulation S est un règlement de la SEC qui définit les exemptions à l'obligation d'enregistrement des offres de securities pour les transactions effectuées en dehors des États-Unis. Elle est couramment utilisée par les projets crypto pour structurer des ventes internationales de tokens sans enregistrement US.

## Définition

Regulation S (17 CFR Part 230, Section 230.901 et suivants) est une regulation adopted par la SEC en 1990 qui provide des exemptions à l'obligation d'enregistrement des securities sous le Securities Act de 1933 pour les offres effectuées en dehors du territoire américain. Elle est basée sur le principe de territorialité : les lois sur les securities US ne s'appliquent pas aux transactions fora de US.

Regulation S propose plusieurs categories d'exemptions : la Category 1 est pour les offres hors US sans directed selling efforts ; la Category 2 est pour les offres directed vers des non-US persons avec des restrictions de distribution ; la Category 3 est pour les offres with no directed selling efforts et des restrictions sur le flip.

Pour les projets crypto, Regulation S est souvent utilisée comme alternative à Regulation D pour les token sales internationales. Un projet peut vendre des tokens à des investisseurs non américains sous Regulation S sans enregistrer l'offre auprès de la SEC, à condition de respecter les conditions de l'exemption.

## Contexte et origine

Regulation S a été adoptée en 1990 en réponse à l'inquiétude que les règles d'enregistrement US (Section 5 du Securities Act) pourraient s'appliquer aux transactions internationales, создавая barriers au commerce mondial. La regulation a établi une "safe harbor" pour les offres offshore.

Avant Regulation S, les issuers internationaux faisait face à une incertitude juridique sur l'applicabilité des lois US aux transactions hors US. La SEC a clarifié que les lois sur les securities US ne s'appliquent pas aux transactions sans lien territorial significatif avec les US.

Dans l'écosystème crypto, Regulation S est devenue populaire après 2017 quand les律师 ont commencé à recommander cette structure pour les ICO souhaitant éviter l'enregistrement SEC tout en acceptant des investisseurs internationaux. L'absence de restrictions sur le montant collecté (contrairement à Regulation D 506(c) limitée à des investors accredited) était un avantage.

## Mécanismes et caractéristiques

Regulation S repose sur deux conditions principales : l'offre doit être realizada en dehors des US, et il ne doit pas y avoir de "directed selling efforts" vers les US. Les "directed selling efforts" incluent tout effort de marketing specifically targeting US investors (mailing vers des adresses US, ciblage publicitaire géographiquement limité aux US, etc.).

Les restrictions post-souscription de Regulation S incluent généralement un "distribution compliance period" pendant lequel les tokens ne peuvent pas être revendus à des US persons (habituellement un an). Les tokens sont souvent émis avec une restriction de transfer sous forme de lock-up ou de restrictions on-chain.

Les definitions de "US person" sous Regulation S sont larges : elles incluent tout individu resident aux US, toute entité organisée sous les lois US ou dont le lieu de gestion principal est aux US, et certains trust et partenariats. Les projets doivent implémenter des procédures pour vérifier la non-US status des acheteurs.

## Nuances, critiques, limites

Regulation S n'est pas une exemption totale des lois sur les securities. Si un token vendu sous Regulation S est considéré comme un security selon la [[Howey Test]], le projet pourrait quand même être subject à des actions enforce pour violation des lois sur les securities US si les conditions de Regulation S ne sont pas respectées (par example, si des US investors participent).

La question de l'applicabilité de Regulation S aux tokens est contested. Certains律师 argue que les tokens, being digital et globally accessible, ne peuvent pas bénéficier de l'exemption car ils sont "offers" à toute personne avec une connexion internet, incluant les US persons.

L'utilisation de Regulation S en combination avec des airdrops et des token generation events (TGE) crée des complexités. Si le token est ultérieurement listé sur un exchange US, la vente under Regulation S peut être réexamined et les détenteurs US pourraient être contraints de vendre.

## Liens et implications

Regulation S interagit avec la [[Securities law]] US en providing une exemption pour les offres offshore. Elle est souvent utilisée avec [[Regulation CF]] ou Regulation D pour structurer des token sales qui ne sont pas soumises à l'enregistrement SEC. La [[token classification]] détermine si un token peut bénéficier de cette exemption.

La restriction de distribution compliance period de Regulation S affecte la liquidité du token sur les exchanges. Les [[cross-border regulation]] complexities émergent quand un token vendu sous Regulation S est tradeable internationalement mais restricted vers les US.

Regulation S illustre le [[regulatory arbitrage]] où les projets structurent leurs offres pour minimize regulatory obligations. Cependant, les restrictions sur les "directed selling efforts" rendent cette approche risky si le projet a une présence marketing significative aux US.

## Sources

[^1]: SEC, "Regulation S - Safe Harbor for Offshore Securities Transactions", https://www.sec.gov (consulted 2026)
[^2]: SEC, "Form S-1 and Registration Requirements", https://www.sec.gov (consulted 2026)