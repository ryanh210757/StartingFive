

const data = [
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/ballla01.jpg",
      position: "PG",
      isHeld: false,
      name: "Lamelo Ball" 
   },  
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/moranja01.jpg",
      position: "PG",
      isHeld: false,
      name: "Ja Morant" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/curryst01.jpg",
      position: "PG",
      isHeld: false,
      name: "Stephen Curry" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/brunsja01.jpg",
      position: "PG",
      isHeld: false,
      name: "Jalen Brunson" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/westbru01.jpg",
      position: "PG",
      isHeld: false,
      name: "Russell Westbrook" 
   },
   { 
      image:  "https://www.basketball-reference.com/req/202106291/images/headshots/smartma01.jpg",
      position: "PG",
      isHeld: false,
      name: "Marcus Smart" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/lillada01.jpg",
      position: "PG",
      isHeld: false,
      name: "Damian Lillard" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/beverpa01.jpg",
      position: "PG",
      isHeld: false,
      name: "Patrick Beverly" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/lowryky01.jpg",
      position: "PG",
      isHeld: false,
      name: "Kyle Lowry" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/dinwisp01.jpg",
      position: "PG",
      isHeld: false,
      name: "Spencer Dinwiddie" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/halibty01.jpg",
      position: "PG",
      isHeld: false,
      name: "Tyrese Haliburton" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/bealbr01.jpg",
      position: "SG",
      isHeld: false,
      name: "Bradley Beal" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/irvinky01.jpg",
      position: "SG",
      isHeld: false,
      name: "Kyrie Irving" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/greenja01.jpg",
      position: "SG",
      isHeld: false,
      name: "Jalen Green" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/robindu01.jpg",
      position: "SG",
      isHeld: false,
      name: "Duncan Robinson" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/mccolcj01.jpg",
      position: "SG",
      isHeld: false,
      name: "CJ McCollum" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/thompkl01.jpg",
      position: "SG",
      isHeld: false,
      name: "Klay Thompson" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/reaveau01.jpg",
      position: "SG",
      isHeld: false,
      name: "Austin Reaves" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/brownja02.jpg",
      position: "SG",
      isHeld: false,
      name: "Jaylen Brown" 
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/monkma01.jpg",
      position: "SG",
      isHeld: false,
      name: "Malik Monk" 
   },   
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/tatumja01.jpg",
      position: "SF",
      isHeld: false,
      name: "Jayson Tatum"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/leonaka01.jpg",
      position: "SF",
      isHeld: false,
      name: "Kawhi Leonard"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/jamesle01.jpg",
      position: "SF",
      isHeld: false,
      name: "LeBron James"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/johnske04.jpg",
      position: "SF",
      isHeld: false,
      name: "Keldon Johnson"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/brookdi01.jpg",
      position: "SF",
      isHeld: false,
      name: "Dillon Brooks"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/wiggian01.jpg",
      position: "SF",
      isHeld: false,
      name: "Andrew Wiggins"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/derozde01.jpg",
      position: "SF",
      isHeld: false,
      name: "DeMar DeRozan"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/haywago01.jpg",
      position: "SF",
      isHeld: false,
      name: "Gordan Hayward"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/duranke01.jpg",
      position: "PF",
      isHeld: false,
      name: "Kevin Durant"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/jacksja02.jpg",
      position: "PF",
      isHeld: false,
      name: "Jaren Jackson Jr."
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/antetgi01.jpg",
      position: "PF",
      isHeld: false,
      name: "Giannis Antetokounmpo"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/horfoal01.jpg",
      position: "PF",
      isHeld: false,
      name: "Al Horford"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/grantje01.jpg",
      position: "PF",
      isHeld: false,
      name: "Jerami Grant"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/kuzmaky01.jpg",
      position: "PF",
      isHeld: false,
      name: "Kyle Kuzma"
   },

   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/townska01.jpg",
      position: "C",
      isHeld: false,
      name: "Karl-Anthony Towns"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/vucevni01.jpg",
      position: "C",
      isHeld: false,
      name: "Nikola Vucevic"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/jokicni01.jpg",
      position: "C",
      isHeld: false,
      name: "Nikola Jokic"
   }, 
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/lopezbr01.jpg",
      position: "C",
      isHeld: false,
      name: "Brook Lopez"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/turnemy01.jpg",
      position: "C",
      isHeld: false,
      name: "Myles Turner"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/allenja01.jpg",
      position: "C",
      isHeld: false,
      name: "Jarrett Allen"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/embiijo01.jpg",
      position: "C",
      isHeld: false,
      name: "Joel Embiid"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/nurkiju01.jpg",
      position: "C",
      isHeld: false,
      name: "Jusuf Nurkic"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/plumlma01.jpg",
      position: "C",
      isHeld: false,
      name: "Mason Plumlee"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/zubaciv01.jpg",
      position: "C",
      isHeld: false,
      name: "Ivica Zubac"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/goberru01.jpg",
      position: "C",
      isHeld: false,
      name: "Rudy Gobert"
   },
   { 
      image: "https://www.basketball-reference.com/req/202106291/images/headshots/capelca01.jpg",
      position: "C",
      isHeld: false,
      name: "Clint Capela"
   }
]  
export default data