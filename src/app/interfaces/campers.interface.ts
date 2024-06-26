export interface Camper {
  id: string;
  title: string;
  brand: string;
  price: number;
  km: number;
  year: number;
  img: string;
  model: string;
  seats: number;
  fuel: string;
  /* isolation: {
    isolation: boolean;
    isolationMaterial: string[];
  }; */

  // Cambiada la propiedad isolation para que coincida con el modelo establecido en la mockapi
  isolation: {
    isolation: boolean;
    isolationMaterial: {
      thinsulate: boolean;
      reflectix: boolean;
      foamBoard: boolean;
      kayflex: boolean;
      other: boolean;
    }
  }
  solarpanel: boolean;
  liftedRoof: boolean;
  backCam: boolean;
  androidIOAuto: boolean;
  doors: number;
  kw: number;
  change: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
    city: string;
    region: string;
    country: string;
  };
  user: string;
}