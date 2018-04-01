import { Option } from './option.model';

export const POST_STATUS: Option[] = [
  { value: 1, label: 'Enabled' },
  { value: 0, label: 'Disabled' }
];

export class Post {
  id: string;
  categoryId: string;
  title: string;
  key: string;
  tags: string;
  tagCollection: string[];
  intro: string;
  content: string;
  authorId: string;
  status: number;
  statusLabel: string;
  isEnabled: boolean;
  sequence: string;
  createdAt: string;
  updatedAt: string;
}
