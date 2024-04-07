import { User } from "./user.type";

export interface Message {
  id: number;
  content: string;
  mimeType?: string;
  user: User;
}
