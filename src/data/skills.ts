export type Category =
  | 'Programming Languages'
  | 'Distributed Systems and Frameworks'
  | 'Deployment and Orchestration'
  | 'Data Persistence and Modelling'
  | 'Frontend Development'
  | 'Tools';

export interface SubSkill {
  name: string;
  description?: string;
}

export interface Skill {
  id: string;
  title: string;
  category: Category;
  yearsOfExperience: string;
  description: string;
  subSkills: SubSkill[];
  gridConfig: {
    colSpan: number;
    rowSpan: number;
    colStart?: number;
    rowStart?: number;
  };
}

export const CATEGORY_COLORS: Record<Category, string> = {
  'Programming Languages': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800',
  'Distributed Systems and Frameworks': 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800',
  'Deployment and Orchestration': 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 border-cyan-200 dark:border-cyan-800',
  'Data Persistence and Modelling': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800',
  'Frontend Development': 'bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-800',
  'Tools': 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700',
};

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const SKILLS: Skill[] = [
  // Row 1
  {
    id: 'java',
    title: 'Java',
    category: 'Programming Languages',
    yearsOfExperience: '8+',
    description: 'Expert-level Java development with focus on high-performance applications.',
    subSkills: [
      { name: 'JFR and Performance Profiling', description: 'Deep dive analysis' },
      { name: 'Multithreading', description: 'Concurrency patterns' },
      { name: 'JVM Tuning', description: 'GC optimization' }
    ],
    gridConfig: { colStart: 1, rowStart: 1, colSpan: 2, rowSpan: 2 } // Hero
  },
  {
    id: 'python',
    title: 'Python',
    category: 'Programming Languages',
    yearsOfExperience: '5+',
    description: lorem,
    subSkills: [{ name: 'Scripting' }, { name: 'Data Analysis' }],
    gridConfig: { colStart: 3, rowStart: 1, colSpan: 1, rowSpan: 1 }
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    category: 'Programming Languages',
    yearsOfExperience: '4+',
    description: lorem,
    subSkills: [{ name: 'React Patterns' }, { name: 'Type Magic' }],
    gridConfig: { colStart: 4, rowStart: 1, colSpan: 1, rowSpan: 1 }
  },

  // Row 2 (Java takes cols 1-2)
  {
    id: 'react',
    title: 'React',
    category: 'Frontend Development',
    yearsOfExperience: '4+',
    description: lorem,
    subSkills: [{ name: 'Hooks' }, { name: 'Context API' }],
    gridConfig: { colStart: 3, rowStart: 2, colSpan: 1, rowSpan: 1 }
  },
  {
    id: 'css',
    title: 'CSS',
    category: 'Frontend Development',
    yearsOfExperience: '6+',
    description: lorem,
    subSkills: [{ name: 'Tailwind' }, { name: 'Modules' }],
    gridConfig: { colStart: 4, rowStart: 2, colSpan: 1, rowSpan: 1 }
  },

  // Row 3
  {
    id: 'flink',
    title: 'Flink',
    category: 'Distributed Systems and Frameworks',
    yearsOfExperience: '5+',
    description: 'Real-time stream processing at scale.',
    subSkills: [
      { name: 'State Management', description: 'Checkpoints and Savepoints' },
      { name: 'Windowing' },
      { name: 'Connectors' }
    ],
    gridConfig: { colStart: 1, rowStart: 3, colSpan: 2, rowSpan: 2 } // Hero
  },
  {
    id: 'kafka',
    title: 'Kafka',
    category: 'Distributed Systems and Frameworks',
    yearsOfExperience: '5+',
    description: lorem,
    subSkills: [{ name: 'Producers/Consumers' }, { name: 'Streams' }],
    gridConfig: { colStart: 3, rowStart: 3, colSpan: 1, rowSpan: 1 }
  },
  {
    id: 'spark',
    title: 'Spark',
    category: 'Distributed Systems and Frameworks',
    yearsOfExperience: '4+',
    description: lorem,
    subSkills: [{ name: 'RDDs' }, { name: 'SparkSQL' }],
    gridConfig: { colStart: 4, rowStart: 3, colSpan: 1, rowSpan: 1 }
  },

  // Row 4 (Flink takes cols 1-2)
  {
    id: 'docker',
    title: 'Docker',
    category: 'Deployment and Orchestration',
    yearsOfExperience: '6+',
    description: lorem,
    subSkills: [{ name: 'Compose' }, { name: 'Multi-stage builds' }],
    gridConfig: { colStart: 3, rowStart: 4, colSpan: 1, rowSpan: 1 }
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    category: 'Deployment and Orchestration',
    yearsOfExperience: '4+',
    description: lorem,
    subSkills: [{ name: 'Helm' }, { name: 'Operators' }],
    gridConfig: { colStart: 4, rowStart: 4, colSpan: 1, rowSpan: 1 }
  },

  // Row 5
  {
    id: 'yarn',
    title: 'YARN',
    category: 'Deployment and Orchestration',
    yearsOfExperience: '3+',
    description: lorem,
    subSkills: [{ name: 'Resource Management' }],
    gridConfig: { colStart: 1, rowStart: 5, colSpan: 1, rowSpan: 1 }
  },
  {
    id: 'cassandra',
    title: 'Cassandra',
    category: 'Data Persistence and Modelling',
    yearsOfExperience: '4+',
    description: lorem,
    subSkills: [{ name: 'CQL' }, { name: 'Data Modelling' }],
    gridConfig: { colStart: 2, rowStart: 5, colSpan: 1, rowSpan: 1 }
  },
  {
    id: 'avro',
    title: 'Avro',
    category: 'Data Persistence and Modelling',
    yearsOfExperience: '4+',
    description: lorem,
    subSkills: [{ name: 'Schemas' }],
    gridConfig: { colStart: 3, rowStart: 5, colSpan: 1, rowSpan: 1 }
  },
  {
    id: 'protobufs',
    title: 'Protobufs',
    category: 'Data Persistence and Modelling',
    yearsOfExperience: '3+',
    description: lorem,
    subSkills: [{ name: 'gRPC' }],
    gridConfig: { colStart: 4, rowStart: 5, colSpan: 1, rowSpan: 1 }
  },

  // Row 6
  {
    id: 'webpack',
    title: 'Webpack/Vite',
    category: 'Frontend Development',
    yearsOfExperience: '5+',
    description: lorem,
    subSkills: [{ name: 'Bundling' }],
    gridConfig: { colStart: 1, rowStart: 6, colSpan: 1, rowSpan: 1 }
  },
  {
    id: 'git',
    title: 'Git',
    category: 'Tools',
    yearsOfExperience: '10+',
    description: lorem,
    subSkills: [{ name: 'Rebase' }, { name: 'Workflows' }],
    gridConfig: { colStart: 2, rowStart: 6, colSpan: 1, rowSpan: 1 }
  },
  {
    id: 'cicd',
    title: 'CI/CD',
    category: 'Tools',
    yearsOfExperience: '6+',
    description: lorem,
    subSkills: [{ name: 'GitHub Actions' }, { name: 'Jenkins' }],
    gridConfig: { colStart: 3, rowStart: 6, colSpan: 1, rowSpan: 1 }
  },
  {
    id: 'gradle',
    title: 'Gradle',
    category: 'Tools',
    yearsOfExperience: '5+',
    description: lorem,
    subSkills: [{ name: 'Plugins' }, { name: 'Multi-module' }],
    gridConfig: { colStart: 4, rowStart: 6, colSpan: 1, rowSpan: 1 }
  },
];
