import type { Settings } from '@/stores/settings'

type Feature = {
  label: string
  name: keyof Settings
}

type MainCategory = {
  label: string
  name: string
  features: Feature[]
}

export type PresetContext = {
  setSearch: (value: number) => void
}

type Preset = {
  label: string
  features: Array<keyof Settings>
  onAfterApply?: (ctx: PresetContext) => void
}

export type WeaponCategory = 'melee' | 'ranged'

export type Weapon = {
  name: string
  category: WeaponCategory
  hitDifficulty: number
  damageDice: number
  damageDifficulty: number
}

export const weapons: Weapon[] = [
  { name: 'Nuija',        category: 'melee',  hitDifficulty: 4, damageDice: 1, damageDifficulty: 6 },
  { name: 'Puukko',       category: 'melee',  hitDifficulty: 5, damageDice: 1, damageDifficulty: 6 },
  { name: 'Sirppi',       category: 'melee',  hitDifficulty: 5, damageDice: 1, damageDifficulty: 5 },
  { name: 'Lyhyt miekka', category: 'melee',  hitDifficulty: 6, damageDice: 1, damageDifficulty: 5 },
  { name: 'Pitkämiekka',  category: 'melee',  hitDifficulty: 6, damageDice: 2, damageDifficulty: 5 },
  { name: 'Ilmakivääri',  category: 'ranged', hitDifficulty: 4, damageDice: 1, damageDifficulty: 6 },
  { name: 'Lyhytjousi',   category: 'ranged', hitDifficulty: 5, damageDice: 1, damageDifficulty: 6 },
  { name: 'Varsijousi',   category: 'ranged', hitDifficulty: 5, damageDice: 2, damageDifficulty: 6 },
  { name: 'Haulikko',     category: 'ranged', hitDifficulty: 5, damageDice: 3, damageDifficulty: 5 },
  { name: 'Pitkäjousi',   category: 'ranged', hitDifficulty: 6, damageDice: 3, damageDifficulty: 4 },
]

export const presets: Preset[] = [
  {
    label: 'Inikka',
    features: ['ketteryys', 'valppaus'],
    onAfterApply: ({ setSearch }) => setSearch(4)
  },
  {
    label: 'Havainnointi+valppaus',
    features: ['havainnointi', 'valppaus']
  },
  {
    label: 'Havainnointi+empatia',
    features: ['havainnointi', 'empatia']
  },
  {
    label: 'Karismaattisuus+suostuttelu',
    features: ['karismaattisuus', 'suostuttelu']
  },
  {
    label: 'Nyrkkitappelu osum.',
    features: ['ketteryys', 'tappeleminen']
  },
]

export const ominaisuudet: MainCategory[] = [
  {
    label: 'Fyysisyys',
    name: 'fyysisyys',
    features: [
      {
        label: 'Voimakkuus',
        name: 'voimakkuus'
      },
      {
        label: 'Ketteryys',
        name: 'ketteryys'
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
]

export const kyvyt: MainCategory[] = [
  {
    label: 'Lahjakkuudet',
    name: 'lahjakkuudet',
    features: [
      {
        label: 'Empatia',
        name: 'empatia'
      },
      {
        label: 'Harhauttaminen',
        name: 'harhauttaminen'
      },
      {
        label: 'Katuviisaus',
        name: 'katuviisaus'
      },
      {
        label: 'Suostuttelu',
        name: 'suostuttelu'
      },
      {
        label: 'Tappeleminen',
        name: 'tappeleminen'
      },
      {
        label: 'Uhkailu',
        name: 'uhkailu'
      },
      {
        label: 'Urheilullisuus',
        name: 'urheilullisuus'
      },
      {
        label: 'Valppaus',
        name: 'valppaus'
      },
      {
        label: 'Väistäminen',
        name: 'vaistaminen'
      }
    ]
  },
  {
    label: 'Taidot',
    name: 'taidot',
    features: [
      {
        label: 'Ajaminen',
        name: 'ajaminen'
      },
      {
        label: 'Erätaidot',
        name: 'erataidot'
      },
      {
        label: 'Esiintyminen',
        name: 'esiintyminen'
      },
      {
        label: 'Johtajuus',
        name: 'johtajuus'
      },
      {
        label: 'Kantama-aseet',
        name: 'kantamaaseet'
      },
      {
        label: 'Kädentaidot',
        name: 'kadentaidot'
      },
      {
        label: 'Lähiaseet',
        name: 'lahiaseet'
      },
      {
        label: 'Tiirikointi',
        name: 'tiirikointi'
      },
      {
        label: 'Vaivihkaisuus',
        name: 'vaivihkaisuus'
      }
    ]
  },
  {
    label: 'Tiedot',
    name: 'tiedot',
    features: [
      {
        label: 'Arvoitukset',
        name: 'arvoitukset'
      },
      {
        label: 'Historia',
        name: 'historia'
      },
      {
        label: 'Laki',
        name: 'laki'
      },
      {
        label: 'Luonto',
        name: 'luonto'
      },
      {
        label: 'Lääketiede',
        name: 'laaketiede'
      },
      {
        label: 'Perimätieto',
        name: 'perimatieto'
      },
      {
        label: 'Politiikka',
        name: 'politiikka'
      },
      {
        label: 'Teknologia',
        name: 'teknologia'
      },
      {
        label: 'Tutkinta',
        name: 'tutkinta'
      }
    ]
  }
]
