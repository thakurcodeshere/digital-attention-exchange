export type NavTabId = 
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
  | 'developers'
  | 'anti-fragility';

export interface NavItem {
  id: NavTabId;
  label: string;
  shortLabel?: string;
  iconName: string;
  badge?: string;
  badgeType?: 'active' | 'success' | 'warning' | 'info' | 'purple';
  description: string;
  category: 'Core' | 'Network' | 'Management' | 'Ecosystem';
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'discover',
    label: 'Discover',
    iconName: 'Compass',
    badge: 'HOT',
    badgeType: 'active',
    description: 'Explore trending digital attention markets, liquidity pools & ecosystem telemetry',
    category: 'Core'
  },
  {
    id: 'terminal',
    label: 'Terminal',
    iconName: 'TrendingUp',
    badge: 'LIVE',
    badgeType: 'success',
    description: 'High-frequency order book trading & attention futures execution terminal',
    category: 'Core'
  },
  {
    id: 'wpi',
    label: 'WPI Explorer',
    iconName: 'Activity',
    badge: 'v2.4',
    badgeType: 'info',
    description: 'Web Performance & Attention Index node graph, telemetry and network latency',
    category: 'Core'
  },
  {
    id: 'mining',
    label: 'Mining',
    iconName: 'Zap',
    badge: '84.2 TH/s',
    badgeType: 'purple',
    description: 'Proof-of-Attention mining rewards, node worker status & hash rate analytics',
    category: 'Network'
  },
  {
    id: 'extension',
    label: 'Extension',
    iconName: 'Globe',
    badge: 'Connected',
    badgeType: 'success',
    description: 'Browser extension integration, local node daemon state & active browser sessions',
    category: 'Network'
  },
  {
    id: 'owner',
    label: 'Owner Workspace',
    iconName: 'ShieldUser',
    description: 'Publisher dashboard, campaign budgeting, API credentials & role permissions',
    category: 'Management'
  },
  {
    id: 'indices',
    label: 'Indices',
    iconName: 'Briefcase',
    badge: '+14.2%',
    badgeType: 'success',
    description: 'Automated attention indexes: AI Attention, Creator Index & Sector Baskets',
    category: 'Core'
  },
  {
    id: 'validators',
    label: 'Validators',
    iconName: 'ShieldCheck',
    badge: '1,024 Nodes',
    badgeType: 'info',
    description: 'Consensus validator registry, staking uptime, block proposal history & rewards',
    category: 'Network'
  },
  {
    id: 'economy',
    label: '$SITE Economy',
    iconName: 'Clock',
    badge: '$1.42',
    badgeType: 'active',
    description: 'Tokenomics dashboard, real-time burn rate, staking yield & treasury reserves',
    category: 'Ecosystem'
  },
  {
    id: 'governance',
    label: 'Governance',
    iconName: 'ClipboardCheck',
    badge: '3 Active',
    badgeType: 'warning',
    description: 'Decentralized protocol voting, PIP proposal creation & delegation power',
    category: 'Management'
  },
  {
    id: 'developers',
    label: 'Developers API',
    iconName: 'Code',
    description: 'REST & GraphQL API endpoints, WebSocket streams, SDKs & Webhook sandbox',
    category: 'Ecosystem'
  },
  {
    id: 'anti-fragility',
    label: 'Anti-Fragility',
    iconName: 'Atom',
    badge: '99.98%',
    badgeType: 'success',
    description: 'Network fault tolerance telemetry, chaos testing scores & self-healing health',
    category: 'Ecosystem'
  }
];
