export interface ArchitectureNode {

  id: string;

  title: string;

  subtitle: string;

  layer:
    | "Data Sources"
    | "Streaming"
    | "Processing"
    | "Lakehouse"
    | "AI"
    | "Monitoring"
    | "Visualization";

  description: string;

  x: number;

  y: number;

  technologies: string[];

  inputs: string[];

  outputs: string[];

  website: string;

  docs: string;

  github: string;

}