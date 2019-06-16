
// export interface RespuestaChall {
//   language: string;
//   season: number;
//   currentweek: number;
//   star: string;
//   results: Week[];
// }

// export interface RespuestaChall {
//   week1: week[];
// //   week2: week[];
// //   week3: week[];
// //   week4: week[];
// //   week5: week[];
// //   week6: any[];
// //   week7: any[];
// //   week8: any[];
// //   week9: any[];
// //   week10: any[];
//   results: week[];
// }

// export interface  Week{
//   identifier?: any;
//   challenge: string;
//   total: number;
//   stars: number;
//   difficulty: string;
// }

export interface Challenge {

  identifier: string;
  challenge: string;
  total: number;
  stars: number;
  difficulty: string;

}

export interface Week{

  challenge: Challenge[];
}
 