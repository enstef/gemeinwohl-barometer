export const categories: Category[] = [
  {
    id: 1,
    name: 'Kritik',
    description:
      'Kritik beschreibt Aspekte im Viertel, die beanstandet oder bemängelt wurden.',
  },
  {
    id: 2,
    name: 'Potentiale',
    description: '',
  },
  {
    id: 3,
    name: 'Konfliktfelder',
    description: '',
  },
  {
    id: 4,
    name: 'Anerkennung',
    description:
      'Anerkennung beschreibt im Viertel wahrgenommene As-pekte, die bereits zum Gemeinwohl beitragen.',
  },
  {
    id: 5,
    name: 'Erfordernisse',
    description:
      'Erfordernisse beschreibt im Viertel wahrgenommene Vor-aussetzungen, die als notwendig erachtet werden, um zum Gemeinwohl beizutragen.',
  },
];

export const aims: Aim[] = [
  {
    name: 'Klimapositivität',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Bepflanzung',
        quotes: [
          'Es gibt zu wenig Bäume meiner Meinung nach. Und zu wenig Grünflächen.',
          'An sich gibt es oder gab es in den Innenhöfen immer Gärten. Zum Teil sind die zugepflastert worden.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Begrünung',
        quotes: [
          'Es gibt auch noch Vorgärten in den Querstraßen zum Teil. In den kleinen Straßen hier im Viertel. Schön sind natürlich auch die Alleen. Der Hansaplatz ist auch schön grün. Es könnte mehr sein.',
          'Die Begrünung der Fassaden ist ein Trend. Da gibt es ja auch Ideen, von daher müsste man da jetzt noch richtig investieren.',
        ],
      },
      {
        categoryId: 2,
        id: 2,
        title: 'Verwendung von Regenwasser',
        quotes: [
          'Ich weiß, dass das machbar ist, Regenwasser zu verwenden. Weil ich Klempner bin, weiß ich, dass es da gute Möglichkeiten gibt. Aber das liegt dann nicht an den Mietern, sondern an den Vermietern.',
        ],
      },
      {
        categoryId: 3,
        title: 'Vernetzung mit Klimabezug',
        id: 1,
        quotes: [
          'It is so nice that we can organize some stuff together and talk about important issues and climate. And sometimes I download “Na dann?”and  there is an app that connects you with your neighborhood. So I am connected to that as well. Sometimes they gather and we do yoga and talk about how we could be more sustainable or separate the trash and sometimes we find important things and remind everyone to separate their trash. We show all the respect.',
          'Ich weiß, dass es ein Projekt gibt: die Wassertanke. Davon habe ich schonmal gehört. Ich glaube das ist zwar nicht für Regenwasser, aber die Stadt Münster verteilt doch immer diese grünen Säcke, aber bei der Wassertanke ist die Idee, dass die Menschen mit der Gießkanne kommen.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Eigeninitiative',
        quotes: [
          'Aber insgesamt wird sich Mühe gegeben. Auch vor unserem Haus, da ist ein kleiner Garten mit schönen Pflanzen. Das ist zwar nicht so eine große Grünflache, aber man bemüht sich auf dem kleinen Raum, den man hat, es grün zu machen.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Raumkonflikt mit Verkehrsnutzung',
        quotes: [
          'An sich gibt es oder gab es hier in den Innenhöfen auch immer wieder Gärten. Zum Teil sind die leider zugepflastert worden. Das ist in der Querstraße, gerade in den letzten 10 Jahren, dass das zugenommen hat, dass da Parkplätze geschaffen werden und dann wird gepflastert.',
        ],
      },
    ],
  },
  {
    name: 'Sauberkeit',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Verkehr',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Nachhaltigkeit',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Bildung',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Gerechtigkeit',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Inklusion',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Wohnen',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Erholung',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Grünflächen',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Kunst und Kultur',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Begegnungsorte',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Älter werden im Viertel',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Nachbar:innenschaft',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Gesundheit',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
  {
    name: 'Vernetzung',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 2,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 3,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 4,
        id: 1,
        title: '',
        quotes: [''],
      },
      {
        categoryId: 5,
        id: 1,
        title: '',
        quotes: [''],
      },
    ],
  },
];
