export const projects = [
   {
    title: "Mission locale d'aubagne",
    image: "/missionLocale.webp",
    description: `Dans le cadre de mon projet de fin d’études, j’ai réalisé une refonte complète du site de la Mission Locale d’Aubagne (PACA).<br/> Ce nouveau site a été pensé pour améliorer l’expérience des jeunes adhérents ainsi que celle des conseillers, en apportant de véritables fonctionnalités métiers.

<br/> <br/> Côté adhérent, l’utilisateur peut désormais :
<br/>
<br/> Créer et gérer son espace personnel

<br/>  Prendre rendez-vous avec un conseiller (en suivi ou en urgence)

<br/> S’inscrire à des ateliers

<br/> Suivre les actualités de la Mission Locale
<br/>
<br/> Côté conseiller, la plateforme permet de :

<br/>
<br/> Gérer les adhérents et accéder à leurs informations et documents

<br/> Publier des actualités

<br/> Créer et gérer des ateliers directement depuis l’interface

<br/> <br/> Ce projet m’a permis de mobiliser l’ensemble des compétences acquises au cours de ma formation, notamment en développement full-stack, en conception d’interfaces accessibles, et en gestion de base de données. Il illustre ma capacité à répondre à des besoins réels avec une solution web complète, moderne et fonctionnelle.`,
    link: "",
    onlineLink :"",
    techno: ["/JavaScript.svg", "/HTML5.svg", "CSS3.svg","Tailwind CSS.svg","prisma.svg","Node.js.svg","vite.svg","React.svg","graphql.svg"],
  },{
    title: "Pig game",
    image: "/piggame.png",
    description: ` PigGame est un projet réalisé dans le cadre de ma formation,
              développé en JavaScript, HTML et CSS. 
            
              Ce jeu de dés oppose deux
              joueurs dans une course au score : le premier à atteindre 100
              points remporte la partie.  <br></br>Le principe est
              simple : À chaque tour, un joueur lance un dé. Il peut enchaîner
              les lancers pour cumuler des points.  <br></br> Mais
              s’il fait 1, il perd tous les points de son tour et passe la main.
              Il peut choisir de “garder” ses points à tout moment : ceux-ci
              sont alors “mis en banque”, et le tour passe à l’adversaire.
              <br></br>Ce jeu mêle prise de risque, stratégie et un
              soupçon de chance, tout en étant une bonne démonstration des
              fondamentaux du JavaScript (manipulation du DOM, conditions,
              gestion d’état…).`,
    link: "https://github.com/Fabien-Costabello/Pig-game",
    onlineLink :"https://fabien-costabello.github.io/Pig-game/",
    techno: ["/JavaScript.svg", "/HTML5.svg", "CSS3.svg"],
  },
  {
    title: "Jeu de la vie",
    image: "/conway.png",
    description: `Ce projet a été développé dans le cadre de ma formation afin d’explorer les concepts fondamentaux du JavaScript, notamment la manipulation du DOM, les événements utilisateurs et la logique algorithmique. <br/> <br/> Le Jeu de la vie, conçu par le mathématicien John Conway, est une simulation de cellules autonomes évoluant sur une grille selon des règles simples mais puissantes.
Chaque cellule peut être vivante ou morte, et son état change à chaque "génération" en fonction du nombre de voisines vivantes. <br/><br/>Le joueur peut activer ou désactiver manuellement des cellules, lancer une simulation automatique ou remplir la grille de manière aléatoire. Ce projet m’a permis de mettre en pratique des notions clés telles que la gestion d’état, les boucles imbriquées, et la mise à jour dynamique d’une interface web.`,
    link: "https://github.com/Fabien-Costabello/Jeu-de-la-vie-",
    onlineLink :"https://fabien-costabello.github.io/Jeu-de-la-vie-/",
    techno: ["/JavaScript.svg", "/HTML5.svg", "CSS3.svg"],
  },{
  title: "Portfolio",
  image: "/portfolio.png",  
  description: `
    Ce portfolio a été réalisé avec React, Vite et Tailwind CSS pour présenter mes projets et compétences de manière moderne et responsive. <br/><br/>
    Il met en avant une navigation fluide, un design épuré et une structure modulaire facilitant l’ajout de nouveaux projets. <br/><br/>
    Ce projet m’a permis de renforcer mes compétences en React (gestion des composants, hooks), en configuration d’outils modernes comme Vite, et en stylisation rapide avec Tailwind CSS. <br/><br/>
    `,
  link: "https://github.com/Fabien-Costabello/Portfolio", 
  onlineLink: "",
  techno: ["/React.svg", "/vite.svg", "/Tailwind CSS.svg","/HTML5.svg", "CSS3.svg"],
}
 
];
