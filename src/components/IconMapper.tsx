import React from 'react';
import {
  Compass,
  TrendingUp,
  Activity,
  Zap,
  Globe,
  UserCheck,
  Briefcase,
  ShieldCheck,
  Clock,
  ClipboardCheck,
  Code,
  Atom,
  ChevronLeft,
  ChevronRight,
  Search,
  LayoutGrid,
  Sparkles
} from 'lucide-react';

export interface IconMapperProps {
  name: string;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

export const IconMapper: React.FC<IconMapperProps> = ({ name, className = '', size = 20, style }) => {
  switch (name) {
    case 'Compass':
      return <Compass size={size} className={className} style={style} />;
    case 'TrendingUp':
      return <TrendingUp size={size} className={className} style={style} />;
    case 'Activity':
      return <Activity size={size} className={className} style={style} />;
    case 'Zap':
      return <Zap size={size} className={className} style={style} />;
    case 'Globe':
      return <Globe size={size} className={className} style={style} />;
    case 'ShieldUser':
      return <UserCheck size={size} className={className} style={style} />;
    case 'Briefcase':
      return <Briefcase size={size} className={className} style={style} />;
    case 'ShieldCheck':
      return <ShieldCheck size={size} className={className} style={style} />;
    case 'Clock':
      return <Clock size={size} className={className} style={style} />;
    case 'ClipboardCheck':
      return <ClipboardCheck size={size} className={className} style={style} />;
    case 'Code':
      return <Code size={size} className={className} style={style} />;
    case 'Atom':
      return <Atom size={size} className={className} style={style} />;
    case 'Search':
      return <Search size={size} className={className} style={style} />;
    case 'ChevronLeft':
      return <ChevronLeft size={size} className={className} style={style} />;
    case 'ChevronRight':
      return <ChevronRight size={size} className={className} style={style} />;
    case 'LayoutGrid':
      return <LayoutGrid size={size} className={className} style={style} />;
    default:
      return <Sparkles size={size} className={className} style={style} />;
  }
};
