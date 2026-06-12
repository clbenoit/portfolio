import{u as r,j as e}from"./index-DLpXJFgK.js";const a={layout:"minimal",title:"[FR] Adaptive Sampling, methylation et diagnostic temps reel des tumeurs cerebrales",authors:["[cbenoit](www.linkedin.com/in/clement-benoit)"],date:"2026-06-11",description:"undefined"};function s(i){const n={a:"a",blockquote:"blockquote",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx("img",{alt:"Interface nanoDx 1",width:"800",src:"../../public/robin.png"}),`
`,e.jsx("img",{alt:"Interface nanoDx 2 ",width:"800",src:"portfolio/robin.png"}),`
`,e.jsx("img",{alt:"Interface nanoDx 3",width:"800",src:"/robin.png"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Figure 1 — Interface nanoDx après chargement des données de séquençage."})}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"adaptive-sampling-méthylation-et-diagnostic-temps-réel-des-tumeurs-cérébrales--retour-sur-une-aventure-nanopore",children:["Adaptive Sampling, méthylation et diagnostic temps réel des tumeurs cérébrales : retour sur une aventure Nanopore",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#adaptive-sampling-méthylation-et-diagnostic-temps-réel-des-tumeurs-cérébrales--retour-sur-une-aventure-nanopore",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"introduction",children:["Introduction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Depuis plus d'une décennie, la classification moléculaire des tumeurs du système nerveux central repose largement sur les profils de méthylation obtenus à partir des puces Illumina 450K, puis EPIC v1 et plus récemment EPIC v2."}),`
`,e.jsx(n.p,{children:"Cette approche a profondément transformé la neuropathologie moderne. En comparant le profil épigénétique d'une tumeur à de vastes bases de référence, il est désormais possible de classifier avec précision des entités parfois difficiles à distinguer sur les seuls critères histologiques. Le classifieur développé à Heidelberg s'est progressivement imposé comme le standard international et est aujourd'hui utilisé par des centaines de centres à travers le monde."}),`
`,e.jsx(n.p,{children:"Cette situation a toutefois créé une forme de dépendance technologique : les données sont produites sur des plateformes propriétaires puis interprétées par des outils centralisés. Lorsque le DKFZ a annoncé l'évolution de son classifieur vers un modèle payant, de nombreux laboratoires ont commencé à explorer des alternatives plus ouvertes, plus souveraines et plus facilement intégrables dans leurs propres infrastructures."}),`
`,e.jsxs(n.p,{children:["Dans le même temps, le séquençage Nanopore a vu émerger une nouvelle génération d'outils de classification basés directement sur les signaux de méthylation de l'ADN natif. Parmi eux, ",e.jsx(n.a,{href:"https://github.com/UMCUGenetics/sturgeon",children:"Sturgeon"})," a démontré qu'un réseau neuronal entraîné sur des données de séquençage génome entier (Whole Genome Sequencing, WGS) pouvait reproduire une grande partie des performances des approches historiques."]}),`
`,e.jsx(n.p,{children:"Les auteurs de Sturgeon ont également rapporté que l'utilisation de l'Adaptive Sampling améliorait encore les performances du classifieur. Toutefois, le panel utilisé pour cet enrichissement ciblé n'a jamais été publié."}),`
`,e.jsx(n.p,{children:"C'est à partir de cette observation qu'est née notre question :"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Peut-on concevoir un panel d'Adaptive Sampling optimisé pour la classification des tumeurs cérébrales, capable de préserver les performances des classifieurs de méthylation, de maintenir l'information CNV, de fournir le statut MGMT et de s'intégrer dans l'organisation de notre plateforme de biologie moléculaire mutualisée ?"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"Le constat initial : un panel trop peu informatif"}),`
`,e.jsx(n.p,{children:"Notre point de départ était le panel générique fourni par Oxford Nanopore pour l'Adaptive Sampling."}),`
`,e.jsx(n.p,{children:"Le principe de l'Adaptive Sampling est particulièrement séduisant dans le contexte diagnostique : plutôt que de séquencer uniformément l'ensemble du génome, il est possible de concentrer les capacités du séquenceur sur les régions réellement utiles à l'interprétation."}),`
`,e.jsx(n.p,{children:"L'objectif est double :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Augmenter la couverture des régions informatives ;"}),`
`,e.jsx(n.li,{children:"Réduire la quantité totale de données nécessaire pour atteindre un niveau de confiance diagnostique donné."}),`
`]}),`
`,e.jsx(n.p,{children:"Autrement dit, obtenir un diagnostic robuste plus rapidement et à moindre coût."}),`
`,e.jsx(n.p,{children:"Cependant, lors de nos premiers essais, les résultats se sont révélés décevants."}),`
`,e.jsx(n.p,{children:"Le panel utilisé ne couvrait qu'environ 1,5 % du génome humain. Bien que cette stratégie permette effectivement d'augmenter la profondeur sur les régions ciblées, celles-ci ne contenaient pas suffisamment d'information pertinente pour les classifieurs de méthylation."}),`
`,e.jsx(n.p,{children:"Le problème n'était donc pas la profondeur de séquençage elle-même."}),`
`,e.jsx(n.p,{children:"Le problème était que les régions enrichies n'étaient pas celles dont les modèles de classification avaient réellement besoin."}),`
`,e.jsx(n.p,{children:"En pratique, nous observions un paradoxe : davantage de couverture sur les régions ciblées, mais moins d'information utile pour le diagnostic."}),`
`,e.jsx(n.p,{children:"Cette expérience a mis en évidence un point essentiel :"}),`
`,e.jsxs(n.h2,{id:"la-performance-dun-panel-dadaptive-sampling-dépend-moins-de-la-quantité-de-génome-ciblée-que-de-la-pertinence-biologique-des-régions-sélectionnées",children:["La performance d'un panel d'Adaptive Sampling dépend moins de la quantité de génome ciblée que de la pertinence biologique des régions sélectionnées.",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#la-performance-dun-panel-dadaptive-sampling-dépend-moins-de-la-quantité-de-génome-ciblée-que-de-la-pertinence-biologique-des-régions-sélectionnées",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"repartir-de-zéro--reconstruire-un-panel-pertinent",children:["Repartir de zéro : reconstruire un panel pertinent",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#repartir-de-zéro--reconstruire-un-panel-pertinent",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Un point important est souvent mal compris : Sturgeon n'a pas été entraîné sur des données issues d'Adaptive Sampling mais sur des données de séquençage génome entier."}),`
`,e.jsx(n.p,{children:"Les auteurs ont néanmoins montré qu'un enrichissement ciblé par Adaptive Sampling permettait d'améliorer les performances du modèle en concentrant l'effort de séquençage sur des régions particulièrement informatives pour la classification."}),`
`,e.jsx(n.p,{children:"Le problème était simple : le panel utilisé pour obtenir ces résultats n'a jamais été rendu public."}),`
`,e.jsx(n.p,{children:"Nous avons donc dû reconstruire notre propre stratégie."}),`
`,e.jsx(n.p,{children:"Notre première approche a consisté à repartir des régions historiquement utilisées dans les analyses de méthylation tumorale."}),`
`,e.jsxs(n.p,{children:["Nous avons construit un panel à partir des quelque 450 000 ",e.jsx(n.a,{href:"https://fr.wikipedia.org/wiki/Dinucl%C3%A9otide_CpG",children:"CpGs"})," présents sur les puces Illumina 450K, puis ajouté des fenêtres génomiques élargies autour de ces régions afin d'augmenter les chances de capturer des lectures informatives avec les technologies long-read."]}),`
`,e.jsx(n.p,{children:"La taille de ces fenêtres a fait l'objet de plusieurs itérations afin d'identifier un compromis optimal entre le taux d'enrichissement des zones d'intérêt, les coûts et les temps d'analyse, tout en veillant à ne pas dégrader la qualité diagnostique."}),`
`,e.jsx(n.p,{children:"Après plusieurs cycles d'optimisation, nous avons obtenu un panel couvrant près de 30 % du génome humain, soit vingt fois plus que le panel initial."}),`
`,e.jsx(n.p,{children:"Ce nouveau design est devenu la fondation de l'ensemble du projet."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"premier-succès--retrouver-une-classification-robuste",children:["Premier succès : retrouver une classification robuste",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#premier-succès--retrouver-une-classification-robuste",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Les premiers résultats ont montré une amélioration immédiate."}),`
`,e.jsx(n.p,{children:"Alors même que la couverture moyenne restait inférieure aux recommandations généralement admises pour certaines analyses, les différents algorithmes convergeaient désormais vers les mêmes conclusions."}),`
`,e.jsx(n.p,{children:"Sur nos échantillons de validation :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/UMCUGenetics/sturgeon",children:"Sturgeon"})," ;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://gitlab.com/pesk/nanoDx",children:"NanoDX"})," ;"]}),`
`,e.jsx(n.li,{children:"PanNanoDX (variante pan cancer du classifier NanoDX);"}),`
`,e.jsx(n.li,{children:"les modèles Random Forest internes ;"}),`
`]}),`
`,e.jsx(n.p,{children:"produisaient des classifications concordantes."}),`
`,e.jsx(n.p,{children:"L'Adaptive Sampling retrouvait ainsi sa capacité à alimenter correctement les modèles de méthylation."}),`
`,e.jsx(n.p,{children:"Nous avons donc confirmé, dans le cadre de notre environnement clinique et de nos contraintes opérationnelles, qu'un enrichissement ciblé judicieusement conçu permettait de préserver l'information nécessaire à la classification moléculaire."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"préserver-les-cnv--une-exigence-diagnostique",children:["Préserver les CNV : une exigence diagnostique",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#préserver-les-cnv--une-exigence-diagnostique",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"La classification seule ne suffisait pas."}),`
`,e.jsx(n.p,{children:"Dans la pratique diagnostique moderne, les profils de variations du nombre de copies (CNV) constituent une couche d'information essentielle."}),`
`,e.jsx(n.p,{children:"L'un des enjeux majeurs du projet était donc de maintenir une représentation suffisamment homogène du génome pour conserver une qualité de profils compatible avec une interprétation clinique."}),`
`,e.jsx(n.p,{children:"Les premières versions du panel ont nécessité plusieurs ajustements afin d'éviter la création de zones sur- ou sous-représentées."}),`
`,e.jsx(n.p,{children:"Après optimisation, les profils CNV obtenus sont devenus comparables à ceux observés avec les approches génome entier et permettent d'exploiter pleinement les informations chromosomiques nécessaires à la caractérisation des tumeurs."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"le-défi-mgmt",children:["Le défi MGMT",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#le-défi-mgmt",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"L'obtention du statut MGMT représentait un second défi majeur."}),`
`,e.jsx(n.p,{children:"Lors des premières expérimentations, plusieurs résultats se sont révélés discordants avec les analyses de référence réalisées par les méthodes conventionnelles."}),`
`,e.jsx(n.p,{children:"Cette observation nous a conduit à une conclusion importante :"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Un panel optimisé pour la classification n'est pas nécessairement optimisé pour l'évaluation du promoteur MGMT."}),`
`]}),`
`,e.jsx(n.p,{children:"Les régions exploitées par Rapid-CNS2 et les équipes du DKFZ ne correspondaient pas totalement aux zones enrichies par notre premier design."}),`
`,e.jsx(n.p,{children:"Bien que le panel initial couvre déjà plusieurs CpGs caractérisés du promoteur de MGMT, une nouvelle phase d'optimisation a été menée afin d'en renforcer la représentativité et la valeur diagnostique, sans compromettre :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"les performances de classification ;"}),`
`,e.jsx(n.li,{children:"la qualité des profils CNV ;"}),`
`,e.jsx(n.li,{children:"l'efficacité de l'Adaptive Sampling."}),`
`]}),`
`,e.jsx(n.p,{children:"Cette étape a finalement permis d'obtenir un panel unique capable de répondre simultanément aux trois besoins."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"quand-le-temps-réel-devient-un-outil-de-pilotage-du-laboratoire",children:["Quand le temps réel devient un outil de pilotage du laboratoire",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quand-le-temps-réel-devient-un-outil-de-pilotage-du-laboratoire",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"L'une des découvertes les plus intéressantes du projet n'a finalement pas été biologique mais organisationnelle."}),`
`,e.jsx(n.p,{children:"Traditionnellement, le séquençage et l'analyse sont réalisés de manière séquentielle :"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"le séquençage se termine ;"}),`
`,e.jsx(n.li,{children:"les données sont transférées ;"}),`
`,e.jsx(n.li,{children:"les pipelines démarrent ;"}),`
`,e.jsx(n.li,{children:"les résultats sont interprétés."}),`
`]}),`
`,e.jsxs(n.p,{children:["Grâce à ",e.jsx(n.a,{href:"https://github.com/UMCUGenetics/sturgeon",children:"Robin"})," nous avons adopté une approche radicalement différente."]}),`
`,e.jsx(n.p,{children:"Les lectures sont analysées dès leur production."}),`
`,e.jsx(n.p,{children:"La classification, les profils CNV et les différents indicateurs de qualité sont mis à jour en continu pendant le séquençage."}),`
`,e.jsx(n.p,{children:"Cette architecture permet :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"un suivi en temps réel de la stabilité du diagnostic ;"}),`
`,e.jsx(n.li,{children:"la génération précoce d'alertes ;"}),`
`,e.jsx(n.li,{children:"l'identification rapide du moment où suffisamment d'information a été accumulée."}),`
`]}),`
`,e.jsx(n.p,{children:"Dans de nombreux cas, le diagnostic devient robuste bien avant la fin théorique de la run."}),`
`,e.jsx(n.p,{children:"Cette information peut alors être utilisée directement par les opérateurs de la plateforme."}),`
`,e.jsx(n.p,{children:"Lorsqu'un seuil de confiance prédéfini est atteint :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"une alerte est générée ;"}),`
`,e.jsx(n.li,{children:"le résultat peut être validé ;"}),`
`,e.jsx(n.li,{children:"le séquençage peut être interrompu de manière anticipée."}),`
`]}),`
`,e.jsx(n.p,{children:"Dans une plateforme de biologie moléculaire mutualisée où les séquenceurs sont partagés entre plusieurs services, cette approche présente plusieurs avantages :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"réduction des délais diagnostiques ;"}),`
`,e.jsx(n.li,{children:"meilleure disponibilité des équipements ;"}),`
`,e.jsx(n.li,{children:"augmentation du nombre d'analyses réalisables ;"}),`
`,e.jsx(n.li,{children:"optimisation de la planification des runs ;"}),`
`,e.jsx(n.li,{children:"diminution de l'usure des flow cells ;"}),`
`,e.jsx(n.li,{children:"augmentation du nombre de réutilisations possibles ;"}),`
`,e.jsx(n.li,{children:"réduction des coûts d'exploitation."}),`
`]}),`
`,e.jsx(n.p,{children:"L'objectif n'est donc pas uniquement d'obtenir un diagnostic plus rapidement."}),`
`,e.jsx(n.p,{children:"Il s'agit également d'utiliser plus efficacement des ressources coûteuses dans un environnement où les instruments et les consommables sont partagés entre plusieurs activités."}),`
`,e.jsxs(n.h3,{id:"construire-une-infrastructure-exploitable-en-routine",children:["Construire une infrastructure exploitable en routine",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#construire-une-infrastructure-exploitable-en-routine",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Au-delà des performances analytiques, l'intégration en routine a nécessité un travail d'industrialisation de la plateforme. Conformément aux bonnes pratiques DevOps, les outils ont été déployés avec une séparation stricte entre les environnements de développement et de production, permettant de faire évoluer les modèles, les panels et les pipelines tout en garantissant la stabilité des analyses cliniques."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"ce-que-nous-avons-appris",children:["Ce que nous avons appris",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ce-que-nous-avons-appris",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Cette aventure nous a appris plusieurs choses."}),`
`,e.jsx(n.p,{children:"Premièrement, l'Adaptive Sampling peut être utilisé avec succès pour la classification par méthylation à condition que le panel soit conçu spécifiquement pour cet usage."}),`
`,e.jsx(n.p,{children:"Deuxièmement, la localisation des régions ciblées est souvent plus importante que la profondeur brute de séquençage."}),`
`,e.jsx(n.p,{children:"Troisièmement, la préservation des profils CNV doit être considérée dès la phase de conception du panel."}),`
`,e.jsx(n.p,{children:"Enfin, le véritable potentiel du séquençage Nanopore ne réside pas uniquement dans la lecture longue ou la détection de la méthylation native."}),`
`,e.jsx(n.p,{children:"Il réside dans sa capacité à produire une information exploitable en temps réel et à transformer l'organisation même des plateformes de diagnostic moléculaire."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"conclusion",children:["Conclusion",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusion",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"L'objectif n'était pas d'obtenir davantage de séquences, mais davantage d'information diagnostique par heure de séquençage et par flow cell utilisée."}),`
`,e.jsx(n.p,{children:"Au départ, nous cherchions simplement à reproduire les performances rapportées pour Sturgeon en Adaptive Sampling."}),`
`,e.jsx(n.p,{children:"Au final, nous avons construit bien davantage qu'un nouveau panel."}),`
`,e.jsx(n.p,{children:"Nous avons développé une chaîne complète permettant d'associer :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"classification moléculaire par méthylation ;"}),`
`,e.jsx(n.li,{children:"analyse des CNV ;"}),`
`,e.jsx(n.li,{children:"détermination du statut MGMT ;"}),`
`,e.jsx(n.li,{children:"interprétation en temps réel ;"}),`
`,e.jsx(n.li,{children:"optimisation de l'utilisation des séquenceurs."}),`
`]}),`
`,e.jsx(n.p,{children:"Dans un contexte où de nombreux laboratoires cherchent à réduire leur dépendance aux solutions centralisées et propriétaires, cette approche démontre qu'il est possible de mettre en place une alternative locale, ouverte et maîtrisée tout en améliorant l'efficacité opérationnelle d'une plateforme de biologie moléculaire moderne."}),`
`,e.jsx(n.p,{children:"Plus qu'un projet d'Adaptive Sampling, cette aventure a été une réflexion sur la manière dont le séquençage temps réel peut transformer la production du diagnostic moléculaire."}),`
`,e.jsx(n.p,{children:"Et ce n'est, je l'espère, que le début ! De nombreuses perspectives restent encore à explorer."}),`
`,e.jsxs(n.p,{children:["Ces travaux ont été réalisés sous la supervision médicale du ",e.jsx(n.a,{href:"https://www.chu-grenoble.fr/patients-et-accompagnants/offre-de-soin/dr-jean-boutonnat",children:"Dr Jean Boutonnat"})," et en collaboration avec ",e.jsx(n.a,{href:"https://www.linkedin.com/in/valentin-ripoche-02bb721b5/",children:"Valentin Ripoche"})," pour la partie wet lab. J'ai été en charge de l'ensemble du volet dry lab : conception des panels, intégration et validation d'outils et de modèles existants, développement des pipelines d'analyse et mise en production de la solution dans un contexte clinique."]})]})}function l(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{l as default,a as frontmatter};
