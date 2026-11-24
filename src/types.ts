export interface AgroProduct {
  id: string;
  name: string;
  image: string;
  photoCaption: string;
  specification: string;
  availability: string;
  zaloPrefill: string;
}

export interface TrustBadge {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface GardenProof {
  id: string;
  image: string;
  caption: string;
}

export interface WholesaleQuoteForm {
  name: string;
  phone: string;
  need: string;
}
