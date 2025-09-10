
export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface CourseModule {
  id: number;
  title: string;
  icon: React.ElementType;
  content: string[]; // Array of paragraphs
  questions: Question[];
}
