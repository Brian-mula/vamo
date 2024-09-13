import { ReactComponent as AustriaIcon, } from './teamFlags/austria.svg';
import { ReactComponent as BelgiumIcon, } from './teamFlags/belgium.svg';
import { ReactComponent as CroatiaIcon, } from './teamFlags/croatia.svg';
import { ReactComponent as CzechRepublicIcon, } from './teamFlags/czech-republic.svg';
import { ReactComponent as DenmarkIcon, } from './teamFlags/denmark.svg';
import { ReactComponent as EnglandIcon, } from './teamFlags/england.svg';
import { ReactComponent as FinlandIcon, } from './teamFlags/finland.svg';
import { ReactComponent as FranceIcon, } from './teamFlags/france.svg';
import { ReactComponent as GermanyIcon, } from './teamFlags/germany.svg';
import { ReactComponent as HungaryIcon, } from './teamFlags/hungary.svg';
import { ReactComponent as ItalyIcon, } from './teamFlags/italy.svg';
import { ReactComponent as NetherlandsIcon, } from './teamFlags/netherlands.svg';
import { ReactComponent as PolandIcon, } from './teamFlags/poland.svg';
import { ReactComponent as PortugalIcon, } from './teamFlags/portugal.svg';
import { ReactComponent as RepublicOfMacedoniaIcon, } from './teamFlags/republic-of-macedonia.svg';
import { ReactComponent as RussiaIcon, } from './teamFlags/russia.svg';
import { ReactComponent as ScotlandIcon, } from './teamFlags/scotland.svg';
import { ReactComponent as SlovakiaIcon, } from './teamFlags/slovakia.svg';
import { ReactComponent as SpainIcon, } from './teamFlags/spain.svg';
import { ReactComponent as SwedenIcon, } from './teamFlags/sweden.svg';
import { ReactComponent as SwitzerlandIcon, } from './teamFlags/switzerland.svg';
import { ReactComponent as TurkeyIcon, } from './teamFlags/turkey.svg';
import { ReactComponent as UkraineIcon, } from './teamFlags/ukraine.svg';
import { ReactComponent as WalesIcon, } from './teamFlags/wales.svg';



export type Team = {
  id: string,
  name: string,
  flag: JSX.Element,
};


type Teams = {
  [key in string]: Team
}


export const TEAMS: Teams = {
  'austria': {
    id: 'austria',
    name: 'Austria',
    flag: <AustriaIcon />
  },
  'belgium': {
    id: 'belgium',
    name: 'Belgium',
    flag: <BelgiumIcon />
  },
  'croatia': {
    id: 'croatia',
    name: 'Croatia',
    flag: <CroatiaIcon />
  },
  'czech-republic': {
    id: 'czech-republic',
    name: 'Czech Republic',
    flag: <CzechRepublicIcon />
  },
  'denmark': {
    id: 'denmark',
    name: 'Denmark',
    flag: <DenmarkIcon />
  },
  'england': {
    id: 'england',
    name: 'England',
    flag: <EnglandIcon />
  },
  'finland': {
    id: 'finland',
    name: 'Finland',
    flag: <FinlandIcon />
  },
  'france': {
    id: 'france',
    name: 'France',
    flag: <FranceIcon />
  },
  'germany': {
    id: 'germany',
    name: 'Germany',
    flag: <GermanyIcon />
  },
  'hungary': {
    id: 'hungary',
    name: 'Hungary',
    flag: <HungaryIcon />
  },
  'italy': {
    id: 'italy',
    name: 'Italy',
    flag: <ItalyIcon />
  },
  'netherlands': {
    id: 'netherlands',
    name: 'Netherlands',
    flag: <NetherlandsIcon />
  },
  'poland': {
    id: 'poland',
    name: 'Poland',
    flag: <PolandIcon />
  },
  'portugal': {
    id: 'portugal',
    name: 'Portugal',
    flag: <PortugalIcon />
  },
  'republic-of-macedonia': {
    id: 'republic-of-macedonia',
    name: 'North Macedonia',
    flag: <RepublicOfMacedoniaIcon />
  },
  'russia': {
    id: 'russia',
    name: 'Russia',
    flag: <RussiaIcon />
  },
  'scotland': {
    id: 'scotland',
    name: 'Scotland',
    flag: <ScotlandIcon />
  },
  'slovakia': {
    id: 'slovakia',
    name: 'Slovakia',
    flag: <SlovakiaIcon />
  },
  'spain': {
    id: 'spain',
    name: 'Spain',
    flag: <SpainIcon />
  },
  'sweden': {
    id: 'sweden',
    name: 'Sweden',
    flag: <SwedenIcon />
  },
  'switzerland': {
    id: 'switzerland',
    name: 'Switzerland',
    flag: <SwitzerlandIcon />
  },
  'turkey': {
    id: 'turkey',
    name: 'Turkey',
    flag: <TurkeyIcon />
  },
  'ukraine': {
    id: 'ukraine',
    name: 'Ukraine',
    flag: <UkraineIcon />
  },
  'wales': {
    id: 'wales',
    name: 'Wales',
    flag: <WalesIcon />
  },
};
