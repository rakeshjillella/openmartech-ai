export interface ArchitectureNode {
  id: string;

  title: string;

  subtitle: string;

  category:
    | "source"
    | "streaming"
    | "processing"
    | "lakehouse"
    | "ml"
    | "genai"
    | "visualization";

  technologies: string[];

  description: string;

  github?: string;

  documentation?: string;
}