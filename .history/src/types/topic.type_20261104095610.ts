export enum TOPIC_STATUS {
  TEMP = "temp",
  PUBLISH = "publish",
}

export interface Topic {
  id: number;
  createdAt: Date | string;
  author: any; // 추후 변경
  title: string;
  content: string;
  category: string;
  thumbnail: string;
  status: TOPIC_STATUS;
}
