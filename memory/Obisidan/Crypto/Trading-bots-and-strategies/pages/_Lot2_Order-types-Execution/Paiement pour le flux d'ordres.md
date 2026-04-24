---
titre: "Paiement pour le flux d'ordres"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/frais, #microstructure, #trading/avancé]
créé: 2026-04-21
liens_forts: ["[[Ordre au marché]]", "[[Ordre à cours limité]]", "[[Frais maker vs taker]]", "[[Best execution]]", "[[Liquidité]]"]
liens_opposition: []
---

# Paiement pour le flux d'ordres

> [!info] Résumé
> Le Payment for Order Flow (PFOF) est une pratique oÙ un courtier reçoit une rémunération des teneurs de marché en échange de leur transmettre les ordres de ses clients. Cela soulève des enjeux de conflits d'intérêts et de best execution.

## Définition

Le Payment for Order Flow (PFOF) est une pratique commerciale dans laquelle un courtier (broker) reçoit un paiement d'un teneur de marché (market maker) pour lui transmettre les ordres de ses clients. Ces ordres, une fois exécutés par le market maker, génèrent du profitgrâce à l'écart entre le prix d'achat et le prix de vente (spread), et ce profit est partiellement partagé avec le courtier.

Le PFOF est particulièrement répandu dans le trading d'options et de certaines petites capitalisations (market makers comme Citadel Securities, Virtu Financial). Sur les marchés crypto, la pratique existe aussi, notamment sur certaines plateformes de trading de détail.

Largument en faveur du PFOF : les courtiers peuvent ofrecer des commissions zéro aux clients car ils sont rémunérés par le flux d'ordres. La critique : le conflit d'intérêts est intrinsèque — le courtier a uninterêt financier à envoyer les ordres au market maker qui paie le plus, pas nécessairement à celui qui offre le meilleur prix pour le client.

## Contexte et origine

Le PFOF émerge aux États-Unis dans les années 1980-1990 quand les premiers courtiers à escompte (discount brokers) ont commencés à offrir des commissions nulles pour attirer les clients de détail. Pour compenser ces commissions nulles, ils se sont tournés vers les market makers qui étaient prêts à payer pour accéder à ce flux d'ordres prévisible.

Dans l'écosystème crypto, des plateformes comme Coinbase, Robinhood Crypto et d'autres ont été critiquées pour leurs pratiques de PFOF. La SEC a lancé plusieurs enquêtes sur ces pratiques, et le débat sur leur légalité et leur éthique reste ongoing.

Le PFOF est regulate differently selon les juridictions. Aux États-Unis, il est légal mais heavily régulé. En Europe, sous MiFID II, il est largement interdit — les courtiers doivent exécuter au meilleur prix possible (best execution) sans recevoir de paiements.

## Mécanismes / caractéristiques / détails

**Mécanisme de paiement** : un market maker paie au courtier un montant par action (ou par unité) exécutée. Ce montant est généralement une fraction du spread. Par exemple, si le spread est de 0,10 USD par action et que le market maker paie 0,04 USD par action au courtier, le market maker garde 0,06 USD de profit. Le courtier a donc uninterêt à diriger les ordres vers ce market maker.

**Conflit d'intérêts** : le problème fondamental du PFOF est que le courtier a deux obligations conflictuelles : exécuter les ordres au mieux pour ses clients ([[Best execution]]) et maximiser ses revenus de PFOF. Si un market maker paie plus mais offre de moins bons prix, le courtier peut être tenté de lui envoyer les ordres plutôt qu'à celui qui offre le meilleur prix.

**Prix d'exécution vs prix public** : dans un scheme PFOF, les ordres sont généralement exécutés au prix mid (medio entre bid et ask) ou à un prix légèrement différent. Le client ne paie pas le spread complet, mais le market maker intercale une certaine marge.

**PFOF et Market Making** : le market maker qui paie pour le flux d'ordres doit être capable de générer un profit sur ces ordres. Cela signifie qu'il doit être en mesure de prendre l'autre côté du trade à un prix favorable. Sur les marchés crypto, le PFOF se retrouve principalement sur les plateformes d'options et certains produits dérivés.

**Impact sur les stratégies** : pour un trader de détail qui ne reçoit pas de PFOF, le fait que d'autres traders sur sa plateforme soient exécutés via PFOF peut affecter la liquidité et les prix qu'il voit. Une partie de la liquidité visible est en réalité "fabricated" par les market makers qui savent qu'ils vont être exécutés sur les ordres PFOF.

## Nuances, critiques, limites

**Best execution compromise** : le principal problème du PFOF est qu'il peut compromises le principle de [[Best execution]]. Un courtier qui envoie des ordres à un market maker qui ne offre pas le meilleur prix (mais paie le plus de PFOF) viole potentiellement son obligation fiduciaire envers ses clients.

**Opacité** : les montants exacts de PFOF ne sont souvent pas publicly disclosed, rendant difficile pour les regulators et les clients devaluer si le meilleur exécutant est utilisé. Les  PFOF sont souvent critiques pour les plateformes qui offrent des commissions .

**PFOF and internalization** : le PFOF est  avec le concept d'internalisation où le courtier exécute les ordres en interne (sans passer par le marché) s'il a assez de ordres dans chaque direction pour se compenser. Cela lui permet de garder le spread sans risque de marché.

**Régulation** : MiFID II en Europe exige que les coûts de transaction soient disclosed et que le meilleur prix soit obtenu, limitant fortement le PFOF. Aux États-Unis, la SEC a des règles de divulgation (Rule 605, Rule 606) mais permette encore le PFOF.

## Liens et implications

Le PFOF est directement lié à la structure de [[Frais maker vs taker]] car il redistribue la valeur du spread entre les différents acteurs du marché. Les market makers qui paient le PFOF doivent générer assez de profit sur le flux d'ordres pour couvrir ces paiements.

Le [[Best execution]] est le cadre réglementaire qui est potentiellement compromis par le PFOF. Les reguladores s'appuient sur ce principe pour limit le PFOF ou exiger sa disclosure.

Pour les [[Trading bot|algorithmes de trading]], la  de PFOF sur une plateforme peut affecter la qualité de la liquidité visible et le prix d'exécution effectif.

## Sources

[^1]: Battalio, Robert, Shane Corwin, and Robert Jennings. "Can Brokers Be Trusted? A Look into Order Flow." *Journal of Financial Economics*, 2016.
[^2]: Comerton-Forde, Carole, and Terrence Hendershott. "Dark Pools and the Economics of Market Structure." *Journal of Finance*, 2013.
[^3]: SEC — Regulation Best Interest (Reg BI).
