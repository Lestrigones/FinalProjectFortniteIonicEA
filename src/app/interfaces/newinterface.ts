interface RootObject {
  data: Datum[];
}

interface Datum {
  title: string;
  body: string;
  image: string;
  time: number;
  meta: Meta;
}

interface Meta {
  mainColor: string;
  adSpace?: string;
}