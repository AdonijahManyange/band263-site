export type MusicIcon =
  | "Music4"
  | "Drum"
  | "Globe"
  | "MicVocal";

export interface PerformanceEvent {
  title: string;
  icon: PerformanceIcon;
  description: string;
}

export type FeatureIcon =
  | "Award"
  | "Globe"
  | "Sparkles"
  | "Star";

export interface Feature {
  title: string;
  icon: FeatureIcon;
  description: string;
}

export type PerformanceIcon =
  | "Heart"
  | "Building2"
  | "CalendarDays"
  | "Church"
  | "PartyPopper"
  | "Users";

export interface PerformanceEvent {
  title: string;
  icon: PerformanceIcon;
}