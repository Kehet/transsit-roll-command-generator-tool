
import type { Settings } from '@/stores/settings'

type Feature = {
  label: string;
  name: keyof Settings;
};

type MainCategory = {
  label: string;
  name: string;
  features: Feature[];
};

export const ominaisuudet: MainCategory[] = [
  {
    label: 'Fyysisyys',
    name: 'fyysisyys',
    features: [
      {
        label: 'Ketteryys',
        name: 'ketteryys'
      },
      {
        label: 'Voimakkuus',
        name: 'voimakkuus'
      },
      {
        label: 'Kestävyys',
        name: 'kestavyys'
      }
    ]
  },
  {
    label: 'Sosiaalisuus',
    name: 'sosiaalisuus',
    features: [
      {
        label: 'Karismaattisuus',
        name: 'karismaattisuus'
      },
      {
        label: 'Manipulaatio',
        name: 'manipulaatio'
      }
    ]
  },
  {
    label: 'Mieli',
    name: 'mieli',
    features: [
      {
        label: 'Havainnointi',
        name: 'havainnointi'
      },
      {
        label: 'Älykkyys',
        name: 'alykkyys'
      },
      {
        label: 'Viisaus',
        name: 'viisaus'
      }
    ]
  }
];

export const kyvyt: MainCategory[] = [
  {
    label: 'Lahjakkuudet',
    name: 'lahjakkuudet',
    features: [
      {
        label: 'Empatia',
        name: 'empatia',
      },
      {
        label: 'Harhauttaminen',
        name: 'harhauttaminen',
      },
      {
        label: 'Katuviisaus',
        name: 'katuviisaus',
      },
      {
        label: 'Suostuttelu',
        name: 'suostuttelu',
      },
      {
        label: 'Tappeleminen',
        name: 'tappeleminen',
      },
      {
        label: 'Uhkailu',
        name: 'uhkailu',
      },
      {
        label: 'Urheilullisuus',
        name: 'urheilullisuus',
      },
      {
        label: 'Valppaus',
        name: 'valppaus',
      },
      {
        label: 'Vaistaminen',
        name: 'vaistaminen',
      },
    ],
  },
  {
    label: 'Taidot',
    name: 'taidot',
    features: [
      {
        label: 'Ajaminen',
        name: 'ajaminen',
      },
      {
        label: 'Erätaidot',
        name: 'erataidot',
      },
      {
        label: 'Esiintyminen',
        name: 'esiintyminen',
      },
      {
        label: 'Johtajuus',
        name: 'johtajuus',
      },
      {
        label: 'Kantama-aseet',
        name: 'kantamaaseet',
      },
      {
        label: 'Kädentaidot',
        name: 'kadentaidot',
      },
      {
        label: 'Lähiaseet',
        name: 'lahiaseet',
      },
      {
        label: 'Tiirikointi',
        name: 'tiirikointi',
      },
      {
        label: 'Vaivihkaisuus',
        name: 'vaivihkaisuus',
      },
    ],
  },
  {
    label: 'Tiedot',
    name: 'tiedot',
    features: [
      {
        label: 'Arvoitukset',
        name: 'arvoitukset',
      },
      {
        label: 'Historia',
        name: 'historia',
      },
      {
        label: 'Laki',
        name: 'laki',
      },
      {
        label: 'Luonto',
        name: 'luonto',
      },
      {
        label: 'Lääketiede',
        name: 'laaketiede',
      },
      {
        label: 'Perimätieto',
        name: 'perimatieto',
      },
      {
        label: 'Politiikka',
        name: 'politiikka',
      },
      {
        label: 'Teknologia',
        name: 'teknologia',
      },
      {
        label: 'Tutkinta',
        name: 'tutkinta',
      },
    ],
  },
];


