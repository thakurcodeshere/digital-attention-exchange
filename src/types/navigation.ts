export type TabId = 
  | 'discover'
  | 'terminal'
  | 'wpi'
  | 'mining'
  | 'extension'
  | 'owner'
  | 'indices'
  | 'validators'
  | 'economy'
  | 'governance'
  | 'api'
  | 'antifragility';

export interface TabConfig {
  id: TabId;
  label: string;
  badge?: string;
  description: string;
}
