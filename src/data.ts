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
        categoryId: 5,
        id: 1,
        title: 'Begrünung',
        quotes: [
          'Es gibt auch noch Vorgärten in den Querstraßen zum Teil. In den kleinen Straßen hier im Viertel. Schön sind natürlich auch die Alleen. Der Hansaplatz ist auch schön grün. Es könnte mehr sein.',
          'Die Begrünung der Fassaden ist ein Trend. Da gibt es ja auch Ideen, von daher müsste man da jetzt noch richtig investieren.',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Verwendung von Regenwasser',
        quotes: [
          'Ich weiß, dass das machbar ist, Regenwasser zu verwenden. Weil ich Klempner bin, weiß ich, dass es da gute Möglichkeiten gibt. Aber das liegt dann nicht an den Mietern, sondern an den Vermietern.',
        ],
      },
      {
        categoryId: 4,
        title: 'Vernetzung mit Klimabezug',
        id: 1,
        quotes: [
          'It is so nice that we can organize some stuff together and talk about important issues and climate. And sometimes I download “Na dann?”and  there is an app that connects you with your neighborhood. So I am connected to that as well. Sometimes they gather and we do yoga and talk about how we could be more sustainable or separate the trash and sometimes we find important things and remind everyone to separate their trash. We show all the respect.',
          'Ich weiß, dass es ein Projekt gibt: die Wassertanke. Davon habe ich schonmal gehört. Ich glaube das ist zwar nicht für Regenwasser, aber die Stadt Münster verteilt doch immer diese grünen Säcke, aber bei der Wassertanke ist die Idee, dass die Menschen mit der Gießkanne kommen.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Eigeninitiative',
        quotes: [
          'Aber insgesamt wird sich Mühe gegeben. Auch vor unserem Haus, da ist ein kleiner Garten mit schönen Pflanzen. Das ist zwar nicht so eine große Grünflache, aber man bemüht sich auf dem kleinen Raum, den man hat, es grün zu machen.',
        ],
      },
      {
        categoryId: 3,
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
        title: 'Sanitäre Anlagen',
        quotes: [
          'Es riecht ganz gut nach Pipi hier die Ecke und wenn man auf dem Spielplatz ist, dann ist es etwas blöd.',
          'Öffentliche Toilettenanlagen kenne ich nicht unbedingt. Würde vielleicht an Spielplätze denken, sonst müsste man mit den Kindern immer ins Gebüsch gehen. Nein, da kenne ich nicht so viel.',
        ],
      },
      {
        categoryId: 1,
        id: 2,
        title: 'Vermüllung',
        quotes: [
          'Hier ist es einigermaßen schmutzig. Aber hier sind auch oft Leute, die ihren Dreck hinterlassen. Also zu sauber ist es auch nicht. Ich nehme Dreck im Allgemeinen nicht als Problem wahr. Außer, wenn Lärmverschmutzung auch dazu zählt. Es ist auf jeden Fall zu laut.',
          'Was die Sauberkeit anbelangt, finde ich schon, dass gelagerter Sperrmüll und vor allem von den Fast-Food-Ketten, was sehr zugenommen hat in den letzten 2 Jahren während Corona, schon vermehrt Müll rumliegt. Behälter, Trinken, Essen und so weiter. Das finde ich schade.',
          'Natürlich stört mich keine Sauberkeit. Aber es ist schon ganz schön zugemüllt manchmal, auch vom Sperrmüll. Manchmal liegen dann Sachen auf dem Sperrmüll, die da nicht hingehören.',
          'Was mir auch auffällt, und das ist auch spezifisch für dieses Quartier, ist dieses: Ich miste mal aus, was so zwischen Flohmarkt, Sperrmüll und Abfalltonne ist, lege es in einen Karton und schreibe „Zu verschenken“ drauf und dann muss ich mich damit nicht mehr beschäftigen. Manchmal sind da mega schöne Schätze dabei, aber manchmal denkt man sich auch, da hat jemand keinen Bock bis zum nächsten Sperrmüll zu warten.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Pflege öffentlicher Räume',
        quotes: [
          'Ansonsten haben wir an Grünflächen eher weniger. Aber das Spielplatzangebot hier für Kinder ist ganz solide in der Stadt. Aber es könnte auch noch... Also wir haben den Kanal, der gut abgebrannt und teilweise verdreckt ist, weil der sehr viel genutzt wird. Da könnte es noch mehr Pflege geben und noch mehr Mülltonnen. Da könnte nach der Baustelle auch was verbessert werden. Aber der ist stark genutzt und stark abgenutzt.',
          'Und Sauberkeit. Da, finde ich, ist überall Bedarf. Hinter dem Bahnhof ist es ganz schlimm. Aber auch in den Nebenstraßen. Ich verstehe nicht, wie man sowas nicht mit nach Hause nehmen kann oder in den nächsten Mülleimer schmeißen kann.',
          'Ich lauf ständig vom Bahnhof, Bremer Platz, in die Richtung hier. Ich wohne in der Sternstraße. Hab’ mal an der Dortmunder gewohnt. Und die Rückseite am Bremer Platz, wenn die mal da abends, also wenn die ihre Flaschen, also es fällt auf, wenn da ein wenig mehr ist. Oder tendenziell sind die Mülleimer zwischen Bahnhof und dann die Schillerstraße runter immer zu voll. Dann steht da was neben oder drauf. Da könnte man über größere Mülleimer diskutieren.',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Bedürfnisse der Viertelkultur',
        quotes: [
          'Ja, das gehört dazu, weil allgemein in Deutschland – auch in Münster – ist es leider so, dass es wenig öffentliche Toiletten gibt. Ziemlich viele Bars, die aber keine Toilette haben, oder schreiben „Nur für Besucher, die hier was kaufen“. Und die Kiosk-Kultur, die stört das dann schon ein bisschen, dass man immer eine Toilette braucht.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Angemessene Sauberkeit',
        quotes: [
          'Ich finde das eigentlich in dem Maß, wie es sauber ist, angenehm. Also nicht steril sauber. Aber muss es auch meiner Meinung nach nicht sein.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Bürger:inneninitiativen zur Pflege des Viertels',
        quotes: [
          'Also ich nehme es weder als besonders schmutzig, noch besonders sauber wahr. Ich habe auch das Gefühl, dass es Aktionen gibt wie „Hansa räumt auf“. Also ich glaube, dass es vor allem in diesem Stadtteil, vor allem wenn es Richtung Kanal geht, viele Initiativen von Bürger:innen gibt, die sagen: “Wir treffen uns nachmittags und dann gehen wir Müll sammeln.“ Das finde ich eher sichtbar. Also, dass es hier mehr Menschen gibt, die sich dafür interessieren, dass es sauberer wird.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Folgen verschiedener Nutzung',
        quotes: [
          'Natürlich stört mich Sauberkeit nicht. Aber es ist schon ganz schön zugemüllt manchmal. Auch vom Sperrmüll, denn da liegen Sachen auf dem Sperrmüll, die da nicht hingehören.',
          'Es gibt ein paar mehr Scherben. Unter der Bedingung fehlt die Rücksichtnahme auf Andere, also man könnte bei den Kneipen im Viertel mehr Rücksicht nehmen auf andere, wo ich selber Fahrrad fahre oder diejenigen auch selber Fahrrad fahren. Und manchmal liegt überall Müll herum, das verstehe ich nicht.',
          'Ansonsten haben wir an Grünflächen eher weniger. Aber das Spielplatzangebot hier für Kinder ist ganz solide in der Stadt. Aber es könnte auch noch... Also wir haben den Kanal, der gut abgebrannt und teilweise verdreckt ist, weil der sehr viel genutzt wird. Da könnte es noch mehr Pflege geben und noch mehr Mülltonnen. Der ist stark genutzt und stark abgenutzt.',
        ],
      },
    ],
  },
  {
    name: 'Verkehr',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Verkehrssicherheit',
        quotes: [
          'Ich bin mit meinen Möglichkeiten hoch zufrieden. Ich hätte sehr gerne, dass es eine neue Fortbewegungsmöglichkeit nicht gibt, nämlich diese Elektroroller, die mir fürchterlich auf den Keks gehen und ich auch schon fast einen üblen Unfall hatte. Also durch so ein Ding, nicht mit so einem. Insofern finde ich das keine gute Entwicklung.',
          'Die Wolbecker Straße ist ein Albtraum, gerade da vorne am Anfang zu fahren. Das ist immer eins meiner Lieblingsthemen. Wenn du stadtauswärts fährst, also vorne am Eingang hinter der ersten Kreuzung, das ist eigentlich eine Todesfalle da lang zu fahren. Da gibt es auf jeden Fall gigantischen Investitionsbedarf. Aber ihr standet ja auch schonmal auf dem Platz beim REWE. Da war das auch schonmal ein größeres Thema.',
          'Die Fahrradfahrer sind den größten Teil rücksichtslos. Die nutzen gerade da vorne in der Ecke meistens die Fußgängerwege. Das sag ich selber als Fahrradfahrer. Weil mir das oft aufgefallen ist.',
          'Der Autoverkehr bleibt für mich immer noch ein Problem. Der braucht wahnsinnig viel Platz. Sowohl stehend, als auch fahrend. Und solange das so ist, sind auch andere Möglichkeiten verbaut.',
          'Der Autoverkehr hier nervt mich, weil…. Ich hab ein Auto. Aber es nervt mich tierisch, das zu benutzen, weil man hier nicht vorankommt. Ich bin mit dem Fahrrad genauso schnell, solange ich in der Stadt bleibe.',
          'Wenn ich zum Beispiel die Wolbecker Straße sehe, dann finde ich das interessant, dass man neuerdings auf der Straße fahren kann und da ist mein Sicherheitsgefühl nicht gestiegen. Wenn ich vorher auf dem Radweg gefahren bin, da ging es oft nicht voran, da standen parkende Fahrräder im Weg oder der Vater mit dem Kinderwagen vor einem, sodass man nicht überholen konnte. Aber auf der Straße finde ich es manchmal ein bisschen gefährlich und das finde ich schwierig.',
          'Also es gibt ein paar Ecken und kleinere Straßen da würde ich sagen, ist es barrierefrei, aber soweit es an die großen Straßen geht, also Stadtein- und Ausfahrten, z.B. der Ring, da ist da eine Barriere.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Parken',
        quotes: [
          'Es entstehen so viele Emissionen in dem Bereich und die Struktur, die Infrastruktur, ist noch nicht umfassend genug umgebaut, gerade auch in Bezug auf Parken. Anwohnerparkhäuser, die die Autofahrten reduzieren, sind immer noch kein wirkliches Thema.',
          'Wenn man das einrichten könnte, dass man, zentrale Parkplätze hätte, um sie aus den Straßen zu kriegen. Ich weiß, Autofahrer würden mich hauen für den Spruch, aber ich wäre für mehr Parkverbote.',
          'In Form von zentralen Parkhäusern kann viel gemacht werden, sodass man auch sein Auto nicht immer direkt vor der Tür hat. Sondern, dass man aktiv darüber nachdenkt, ob man den Weg mit dem Auto machen muss oder ob es nicht das Fahrrad tut. Also dass man auch eine Hürde hat, wo man sich aktiv mit der eigenen Mobilitätsform auseinandersetzt.',
          'Ich finde generell Kreuzungsparken sollte verhindert werden. Es sollten vielleicht die Parkplätze an den Kreuzungen zu Fahrradparkplätzen umgebaut werden, die könnte man mit Bügeln absperren, damit da Parken verhindert wird. Und das führt dazu, dass Fußgänger, Frauen mit Kinderwägen oder Rollstuhlfahrer besser die Straße überqueren können und man eine bessere Einsicht in die Straße hat.',
          'Wir müssen uns vertikal und nicht horizontal orientieren. Ich weiß nicht, ob Parkhäuser etwas Realistisches sind. Aber wir können nicht alle unsere Wohnstraßen beidseitig beparken, Tag und Nacht. Jede Straße ist immer beidseitig beparkt und das ist so viel versiegelte Fläche. Wenn man die ausrechnet, ist das eine gigantische Fläche, die man da bekommt.',
          'Das Parken ist schwierig. Ich bin ein Pendler und fahre nicht in die City rein, sondern parke vorher und fahre dann mit dem Fahrrad rein. Ich würde mir aber wünschen, dass wenn es ab und zu vorkommt, dass es in Strömen regnet und ich dann nicht mit dem Fahrrad fahren möchte, z.B. dieses Parkhaus Bremer Platz nicht so teuer ist, wie es im Moment geworden ist.',
          'Ich fände es total genial, wenn man das System von Quartiersgaragen nutzen könnte. Oder, dass man auf Flächen, die temporär befahren werden – ich weiß nicht, wie groß der Platz vom Supermarkt ist – aber wenn dort über Nacht die Anwohner:innen kostenlos parken könnten, sodass dieses ebenerdige Parken am Straßenrand eingedämmt wird. Es sieht hässlich aus und es ist störend. Man kann die Fläche dann auch besser nutzen, das zeigt regelmäßig der Parking Day.',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Alternative Verkehrskonzepte',
        quotes: [
          'Ich meine, Autofreiheit gibt’s im Prinzip nicht wirklich im Viertel. Außer auf Plätzen zum Beispiel. Von daher finde ich, dass man noch viele Experimente machen könnte. Auch einfach Konzepte umsetzten könnte, zum Beispiel in der Schillerstraße. Die zwar als Fahrradstraße ausgewiesen ist, aber die eigentlich eher eine normale Straße ist in meiner Wahrnehmung.',
          'Man könnte einfach noch mehr Dinge ausprobieren. Noch überhaupt mal anfangen. Mit Autofreiheit zu experimentieren.',
          'Ich bin eigentlich großer Fan meiner eigenen Mobilitätsform. Deswegen sehe ich keine wirklichen Punkte. Vielleicht für ältere Gruppen, dass man da, was es ja auch schon gibt, Taxi-Rikschas für Krankenfahrten oder Einkaufsfahrten verstärkt nutzen kann und das in das öffentliche Mobilitätsangebot mit aufnimmt.',
          'Dafür, dass es sich Fahrradstadt nennt, ist das Verkehrsangebot immer noch... Es ist eine Autostadt. Das Verkehrsangebot ist dramatisch schlecht. Alle Fahrradstraßen sind für den Durchgangsverkehr freigegeben. Radwege könnten größer, breiter, besser getrennt vom Verkehr sein. Da gibt’s immer noch 100 Verbesserungsmaßnahmen. Auch in dem Viertel und in der Stadt auch. Es kann immer noch sicherer gemacht werden. Und nur große Schilder aufzustellen, wo steht: "Fahrradfahren auf der Straße erlaubt" reicht nicht.',
          'Der Fahrrad- und der Autoverkehr ist nicht getrennt genug. Es gibt viel bessere Verkehrskonzepte, gerade auch in Holland, wo immer ein Grünstreifen dazwischen ist, wo Fahrräder und Autos immer getrennt voneinander werden.',
          'Es hat sich schon etwas getan durch den 30er - Bereich. Und es gab hier einmal dieses Verkehrsexperiment, mit diesem autofreien Tag. Das war schon ein riesiger Unterschied. Oder als hier die Baustelle war. Von daher, es gibt Konzepte, dass nur noch der Ring befahren werden soll und die Innenstädte relativ nicht. Also wir hoffen noch drauf, dass es irgendwann passiert. Es ist aushaltbar. Aber es ist zwischendurch schon laut.',
          'Der Autoverkehr hier nervt mich, weil…. Ich hab ein Auto. Aber es nervt mich tierisch, das zu benutzen, weil man hier nicht vorankommt. Ich bin mit dem Fahrrad genauso schnell, solange ich in der Stadt bleibe.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Alternativen zum Auto',
        quotes: [
          'Ich sehe es häufiger am Hansaplatz, dass da diese Car Sharing Autos stehen. Da sind ausgewiesene Flächen.',
          'Bushaltestelle, Bahnhof, Fahrrad. Das ist eigentlich perfekt hier.',
          'Ich glaube, dass man mit dem Fahrrad hier viel machen kann. Ich habe nicht das Gefühl, dass hier etwas fehlt.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Sharing-Netzwerke',
        quotes: [
          'Ich sehe es häufiger am Hansaplatz, dass da diese Car Sharing-Autos stehen. Da sind ausgewiesene Flächen.',
          'Ich nutze Wuddi und Car-Sharing hier in Münster, obwohl wir noch ein eigenes Auto haben, das ich gerne loswerden würde. Ich komme also mit beiden gut klar. Es funktioniert und das Angebot wird immer vielfältiger.',
        ],
      },
      {
        categoryId: 2,
        id: 2,
        title: 'Autofreie Bereiche',
        quotes: [
          'Ich habe gestern einen sehr tollen Beitrag über Barcelona gesehen und die richten mittlerweile völlig autofreie Viertel ein. Das finde ich eine sehr schöne Idee. Es gibt ja teilweise schon autofreies Wohnen in Münster. Aber ich fände das auch schön, wenn man es schaffen würde jede zweite Straße im Hansaviertel autofrei zu gestalten.',
          'Ich finde hier ist es schon gut, die Fahrradstraßen sind breit und Fußgänger haben viel Platz. Du hast hier ein gutes Busnetz finde ich, zumindest was die Frequenz angeht, aber die Preise sind unverschämt.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Konflikte durch Autoverkehr',
        quotes: [
          'Aber in Bezug auf andere Leute ist es schon so, dass die Autos sehr nah an den anderen Leuten, wie Fahrradfahrern, vorbeifahren. Und wenn man älter ist oder auch jünger, dann ist es eine Einschränkung oder eine Gefahr vielerorts.',
          'Gut. Es ist ein lebhaftes Viertel. Und das gehört auch irgendwie dazu. Klar. Verkehr auch, zu einem gewissen Maße. Aber den kann man besser regulieren.',
          'Was mich immer wieder ärgert oder was mir aufstößt, ist, dass wir bei uns in der Leererstraße Autos haben, die sichtlich monatelang stehen und nicht bewegt werden. Die sind schon zugekackt von den Tauben und zugewachsen von Wildkräutern. Ich denke mir dann immer: “Herr im Himmel, warum hat dieser Mensch dann noch ein Auto, das sich mir dann in den Weg stellt?“',
          'Wir müssen uns vertikal und nicht horizontal orientieren. Ich weiß nicht, ob Parkhäuser etwas Realistisches sind, aber wir können nicht alle unsere Wohnstraßen beidseitig beparken, Tag und Nacht. Jede Straße ist immer beidseitig beparkt und das ist viel versiegelte Fläche. Wenn man die ausrechnet, dann ist das eine gigantische Fläche, die man bekommt. Eine Straße ist zum Fahren da und nicht zum Parken, und überall stehen Sachen herum. Da könnte auch eine extra Fahrradlinie entstehen, wenn man Parkplätze einfach weglässt.',
          'Wenn ich aus der Querstraße rauskomme und will dann die Wolbecker Straße überqueren, um stadteinwärts zu fahren, dann warte ich sehr lange den ununterbrochenen Autostrom ab. Aber auch hier, diese Regelung für Fahrradfahrer:innen, auf der Straße zu fahren, finde ich grundsätzlich anstrebenswert. Mache ich aber nicht immer. Da gucke ich mir an, wie es gerade aussieht. Und manchmal mache ich das. Für Fußgänger finde ich es sehr beschwerlich, in diesem bekannten Nadelöhr Rewe Wolbecker Straße.',
          'Der Autoverkehr bleibt für mich immer noch ein Problem. Der braucht wahnsinnig viel Platz. Sowohl stehend, als auch fahrend. Und solange das so ist, sind auch andere Möglichkeiten einfach verbaut.',
          'Manchmal haben die Anwohner an der Hafenstraße mein Mitgefühl. Aber gut, wenn man in der Stadt wohnt, dann gibt es halt mehr Lärm als auf dem Land. Das gehört dazu.',
          'Da stehen überall Autos. Die Bordsteine sind nicht so geplant, dass Rollstuhlfahrer:innen immer einwandfrei darauf zugreifen können. Auch die Businfrastruktur ist noch so geplant, dass das nicht von Anfang an ein zentrales Kriterium ist.',
        ],
      },
    ],
  },
  {
    name: 'Nachhaltigkeit',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Unnachhaltige Strukturen',
        quotes: [
          'Nachhaltiges Viertel? Das ist eine schwierige Frage. Nein, ich glaube nicht. Ich glaube das trifft auf fast keinen Aspekt der Gesellschaft zu. Nicht im allergeringsten. Nicht so, wie es sein sollte.',
          'Also verkehrsmäßig finde ich, es ist zu viel Verkehr; zu sehr am Auto orientiert.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Städtebau',
        quotes: [
          'Als Viertel kann man es dahingehend gestalten, dass es mehr oder weniger nachhaltig ist. In Bezug auf Bauweise, in Bezug auf Grünflächengestaltung. In Bezug auf Mobilitätskonzepte. Von da her ist da grundsätzlich viel, was man machen kann.',
          'Es entstehen so viele Emissionen in dem Bereich und die Struktur, die Infrastruktur, ist noch nicht umfassend genug umgebaut, gerade auch in Bezug auf Parken. Anwohnerparkhäuser, die die Autofahrten reduzieren, sind immer noch kein wirkliches Thema.',
          'Wenn man sich den großen Raum hier anschaut, dann ist also schon viel versiegelt und wenig… ich weiß nicht, ob die Grünflächen ausreichend sind. Ich glaube es kann noch grüner werden und noch mehr darauf geachtet werden, die Biodiversität zu fördern, aber da kenne ich mich fachlich nicht aus.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Nachhaltiger Konsum',
        quotes: [
          'Ich sehe es häufiger am Hansaplatz, dass da diese Car Sharing Autos stehen. Da sind ausgewiesene Flächen.',
          'Was eigentlich schön ist, dass Bioläden, oder wo man einkaufen kann oder auch ein kleiner Markt hier an der Hubertistraße, dass das auch gut erreichbar ist und man für die Lebenshaltung auch die Möglichkeit hat, die Dinge zu besorgen, die das im Blick haben.',
        ],
      },
      {
        categoryId: 4,
        id: 2,
        title: 'Nachhaltiges Denken',
        quotes: [
          'Ich glaube, dass in diesem Viertel vor allen Dingen die Präsenz der Nachhaltigkeit deutlich höher ist, als in manch anderen Vierteln hier in Münster. Ich glaube, dass die Leute hier deutlich mehr ein Gespür dafür haben. Man sieht das schon allein an der Wolbecker Straße, wie viele vegane und vegetarische Restaurants aufgemacht haben. Da geht es dann ja meistens nicht nur um das Essen, sondern auch wie das Essen an den Mann kommt.',
          'Ich glaube schon, dass hier die Wahrnehmung von Nachhaltigkeit höher ist, als vielleicht in Gegenden, wo mehr Einfamilienhäuser stehen und wo vielleicht ältere Leute wohnen, die sich nicht damit auseinandersetzen.',
          'Ich würde sagen im Hansaviertel ist es noch am nachhaltigsten in Münster, weil hier viele Initiativen wie die B-Side oder das Hansaforum aktiv sind und genau solche Veranstaltungen machen wie diese oder andere Befragungen oder einfach diese offenen Begegnungsräume bieten, sodass so etwas mehr thematisiert werden kann. Und wenn ich an ökologische Nachhaltigkeit denke, dann gibt es auch auf einer Mikroebene Projekte mit Urban Gardening zum Beispiel.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Offenheit gegenüber Nachhaltigkeit',
        quotes: [
          'Ich denke schon, dass es im Viertel und in Münster sowieso, als Fahrradstadt, zutrifft, dass viele Leute sich bemühen, Fahrrad zu fahren oder andere Verkehrsmittel zu nutzen.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Unnachhaltige Planung',
        quotes: [
          'Für nachhaltig halte ich es nicht, alleine vom Verkehr her. Das Hansaviertel ist überlastet und wird unnötig durch das neue Bauprojekt „Edeka“ in der Zukunft noch mehr belastet, als es heute eh schon ist. Ich sehe keinen Sinn darin, da einen Supermarkt hinzubringen. Das bringt noch mehr Verkehr als jetzt. Vielleicht sollte man einen Markt bauen, in dem keine Autoparkplätze vorhanden sind, sondern nur Fahrradparkplätze für das Viertel, das wär’ mal eine Idee.',
        ],
      },
    ],
  },
  {
    name: 'Bildung',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'KiTa-Betreuungsangebot',
        quotes: [
          'Wir haben auch Kinder hier im Viertel bekommen. Ich muss sagen, für uns Münsteraner mit guten Jobs und Vernetzung war das super. Aber ich weiß trotzdem aus Erfahrung von Bekannten oder Zugezogenen, dass es durchaus gerne mehr Angebote geben dürfte. Also deutlich mehr, gerade im Bereich frühes Kind und Kindesalter. Ich glaube, dass die Familien sich gut aufgehoben fühlen, ist zum Großteil erfüllt, aber das liegt einfach daran, dass die Leute es nicht anders gewohnt sind.',
          'Das, was immer fehlt, sind KiTa-Betreuungen. Oder Betreuung für Kinder unter 3 oder unter 6. Das hat mein Mann vielleicht schon angedeutet. Da bin ich selber schon ein bisschen an so einem kleinen Projekt dran, um eine Tagespflegestelle aufzumachen. Sehr schwierig. Parkplätze sind Parkplätze und egal ob das jetzt ein schöner Garten ist, wo dann auch Kinder betreut werden können. Das ist schwierig.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Familienfreundliche Angebote',
        quotes: [
          'Und in der Altersgruppe von 0 bis, zu den ersten Teenager-Jahren geht das von Kitas mit entsprechendem Ganztags-Angebot, über Grundschulen und Auswahlmöglichkeiten innerhalb des Viertels, ohne dass die Eltern und Kinder genötigt sind, das Viertel zu verlassen. Spielplätze und Flächen für Familien, die sind zwar grundsätzlich da, aber ich weiß nicht, ob das im ausreichenden Maße ist.',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Planungsoffenheit',
        quotes: [
          'Das was immer fehlt, sind KiTa-Betreuungen oder Betreuung für Kinder unter 3 oder unter 6. Das hat mein Mann vielleicht schon angedeutet. Da bin ich selber schon ein bisschen an so einem kleinen Projekt dran. Um eine Tagespflegestelle aufzumachen. Sehr schwierig. Parkplätze sind Parkplätze und egal, ob das jetzt ein schöner Garten ist, wo dann auch Kinder betreut werden können. Das ist schwierig. Ich weiß auch nicht, ob das noch was wird. Aber da ist im Moment immer Mangel und gerade auch, wenn Eltern nicht unbedingt diese riesigen Einrichtungen haben wollen, sondern sich etwas kleinere Einheiten wünschen.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Ausreichendes schulisches Bildungsangebot',
        quotes: [
          'Zu Bildung fällt mir jetzt spontan, obwohl das aus dem Hansaviertel schon etwas heraus ist, das Kreativhaus ein. Für mich ist es insofern ausreichend, weil ich das nicht zwingend im Viertel brauche.',
          'Da hinten ist das Schulzentrum. Da ist die Versorgung ganz gut. Kitas sind hier auch mehrere. Da ist die Dichte glaube ich ausreichend. Im Sinne von, dass das nicht oft ganz oben auf der Liste der Beschwerden stehen müsste.',
        ],
      },
      {
        categoryId: 4,
        id: 2,
        title: 'Erreichbarkeit von Bildungsangeboten',
        quotes: [
          'Ich finde schon, dass hier in der näheren Umgebung für Kinder und Schüler und natürlich auch für die Studenten alles gut erreichbar ist. Es gibt auch für die Kleinkinderbetreuung genügend Stellen. Also viele Stellen, aber nicht genügend. Und dadurch, dass es da so stadtnah ist kann man auch mit der Weiterbildung an der Volkshochschule, dem Anna-Krückmann-Haus, hier alles fußläufig erreichen. Finde ich schon sehr gut aufgestellt.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Amtliche Vorgaben',
        quotes: [
          'Bezüglich Kitas: Meine Frau möchte gerade eine kleine Kita eröffnen und hat die Idee, einen Bauwagen bei uns im Garten aufzustellen. Scheiterte aber daran, dass Stellplätze für Autos nachgewiesen werden müssen und deshalb wird das nicht erlaubt.',
        ],
      },
    ],
  },
  {
    name: 'Gerechtigkeit',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Diskriminierung der Szene',
        quotes: [
          'Aus meiner Position heraus bin ich nicht wirklich Bestandteil der Gruppe, die in irgendeiner Form diskriminiert wird. Ich habe schon den Eindruck, dass es um den Bahnhof herum in Bezug auf Gerechtigkeitsfragen relativ problematisch ist.',
          'Am Bahnhof finden immer wieder Razzien statt, in Bezug zu den Leuten vor Ort. Wegen der Szene, die da nun mal ist, und teilweise auf Basis von Herkunft, werden da Razzien durchgeführt. Und das ist schon ein Problem.',
        ],
      },
      {
        categoryId: 1,
        id: 2,
        title: 'Ungerechte Wohnverhältnisse',
        quotes: [
          'Ich meine, wie die strukturellen Themen hat man es überall in Bezug auf Wohnungsmarkt, Wohnungsknappheit, dass halt bestimmte Gruppen benachteiligt werden. Aber ich weiß nicht, ob das akut ein Hansaviertel-Problem ist. Vielleicht hier besonders, weil der Wohnungsdruck besonders hoch ist.',
          'Man hat ein strukturelles Unterangebot an Wohnraum und dadurch verstärken sich die Selektionsprozesse in Auswahl von Leuten, die eine Wohnung suchen. Dann kommen Variablen oder Themen wie Herkunft dann verstärkt durch und führen halt dazu, dass Leute, die jetzt keinen deutschen Nachnamen haben, halt da einen noch schwereren Zugang haben, als es sowieso schon der Fall ist.',
          'Was ich so generell mitgekriegt habe, ist das Wohnen nicht barrierefrei. Auch bei mir, das ist Sozialbau von der LRG. Das ist nicht im Geringsten barrierefrei, von der Sauberkeit angefangen. Sobald die Leute weniger Geld haben, landen sie in solchen Blöcken.',
          'Es kann nicht sein, dass Anwohnende, die sowieso schon viel Geld für ihre Wohnung hier bezahlen, weil die Mietpreise immer steigen, dann auch noch viel Geld für den Parkplatz brauchen, wenn sie auch angewiesen sind, weil sie zum Beispiel im Pflegedienst arbeiten.',
        ],
      },
      {
        categoryId: 1,
        id: 3,
        title: 'Top-down-Planung',
        quotes: [
          'Wenn bauliche Veränderungen anstehen, am Hansaplatz beispielsweise, da würde ich sagen, die wirkliche aktive Mitgestaltungsmöglichkeit ist schon das non plus ultra, wenn das gegeben wäre. Und das sehe ich gerade nur teilweise. Zumindest von offiziellen Stellen, die die Entscheidung haben bei Bautätigkeiten z.B., ist es nicht so wirklich gegeben.',
          'Diese Neubauprojekte am Hafen. Das droht immer eine Edelbebauung zu werden. Stichwort Gentrifizierung: Wenn sowas droht, ist das nicht so gut. Endgültig ist das ja auch nicht geklärt, wie das dort weiter geht.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Offenheit für Bottom-Up-Planung',
        quotes: [
          'Ich glaube, es müsste eine andere Offenheit von Politik und Verwaltung für Bottom-Up-Initiativen, für Planungsansätze von unten, für die geäußerten Bedürfnisse von den Leuten, die hier wohnen, da sein. Dass man stärker drauf eingeht und das wirklich als Grundvoraussetzung in die eigene Planung und für das eigene Handeln stärker mit einbezieht.',
          'Die wirkliche aktive Mitgestaltungsmöglichkeit ist schon das non plus ultra, wenn das gegeben wäre. Und das sehe ich gerade nur teilweise. Zumindest von offiziellen Stellen, die die Entscheidung haben, bei Bautätigkeiten z.B. ist es jetzt nicht so wirklich gegeben.',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Zugang zu ruhigen Orten',
        quotes: [
          'Das Bewegen vor der eigenen Haustür ist nicht so einfach möglich, weil es kaum ruhige Straßen gibt, die nicht mit Autos befahren sind, wo nicht Verkehrsgefahren drohen. Es gibt nicht so viele Grünflächen, was auch für mittelalte Menschen ein Manko ist. Es gibt wenige Orte, wo man einfach rausgehen kann, weil das Viertel ja auch durch Mietwohnungen geprägt ist, die auch nicht alle einen Balkon und einen Garten haben und wo es schön wäre, Grünflächen zu haben. Die man dann auch nutzen kann, die hier aber wenig vorhanden sind.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Soziale Organisationen',
        quotes: [
          'Es gibt da schon sehr zielgruppenorientierte Initiativen, wie die Wohnungslosenhilfe oder das Indro oder gerade jetzt auch für die Werkstattverfahren um den Bremer Platz. Dann das Odak. Also es gibt soziale Träger:innen, die schon sehr zielorientiert sind und da glaube ich auch, dass die Stimmen vertreten werden können.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Politisches Gesundheitsverständnis',
        quotes: [
          'Gesundheitsförderung würde gerade auf der kommunalen Ebene gesehen und wird auch aktuell auf der wissenschaftlichen Ebene kommunal angegangen. Da gibt es gerade ein Projekt, das im Hansaviertel agiert, aber auch auf der gesamtstädtischen Ebene versucht, ein langfristiges Handlungsprogramm umzusetzen. Das, würde ich sagen, ist ein Lösungsweg, der nicht ganz perfekt ist. Weil der immer noch in kommunale Strukturen eingebunden ist und nicht die hunderprozentige Lösung für ärmere Menschen in einem Viertel ist, weil es einfach kein Projekt sein wird, was mehr finanzielle Gleichheit herstellen kann.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Ungleiche Entscheidungsmacht',
        quotes: [
          'Solche prozessplanerischen, stadtteilpolitischen Entscheidungen sind immer ein langer Weg. Und dass man daher nicht das bekommt, was man haben möchte, ist klar.',
          'Die Stadt und der Städtebau sollten als Ganzes gedacht werden und nicht als die Verteilung von Wohnung und öffentlichen Räumen, die das Gemeinwohl nutzen und Privatunternehmen als prozentualer Anteil am Städtebau gleicher gestellt sind.',
          'Diese Neubauprojekte am Hafen. Das droht immer eine Edelbebauung zu werden. Also Stichwort Gentrifizierung: Wenn sowas droht, ist das nicht gut. Endgültig ist das auch nicht geklärt, wie das dort weiter geht.',
        ],
      },
    ],
  },
  {
    name: 'Inklusion',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Diskriminierung aufgrund des Lebensstils',
        quotes: [
          'Aus meiner Position heraus bin ich nicht wirklich Bestandteil der Gruppe, die in irgendeiner Form diskriminiert wird. Ich habe schon den Eindruck, dass es um den Bahnhof herum in Bezug auf Gerechtigkeitsfragen relativ problematisch ist.',
          'Am Bahnhof finden immer wieder Razzien statt, in Bezug zu den Leuten vor Ort. Wegen der Szene, die da nun mal ist, und teilweise auf Basis von Herkunft, werden da Razzien durchgeführt. Und das ist schon ein Problem.',
        ],
      },
      {
        categoryId: 1,
        id: 2,
        title: 'Diskriminierung auf dem Wohnungsmarkt',
        quotes: [
          'Ich meine, wie die strukturellen Themen hat man es überall so in Bezug auf Wohnungsmarkt, Wohnungsknappheit, dass halt bestimmte Gruppen benachteiligt werden. Aber ich weiß nicht, ob das akut ein Hansaviertel-Problem ist. Vielleicht hier besonders, weil der Wohnungsdruck besonders hoch ist.',
          'Man hat ein strukturelles Unterangebot an Wohnraum und dadurch verstärken sich die Selektionsprozesse in Auswahl von Leuten, die eine Wohnung suchen. Dann kommen Variablen oder Themen wie Herkunft verstärkt durch und führen dazu, dass Leute, die keinen deutschen Nachnamen haben, einen noch schwereren Zugang haben, als es sowieso schon der Fall ist.',
          'Was ich so generell mitgekriegt habe, ist das Wohnen nicht barrierefrei. Auch bei mir, das ist Sozialbau von der LRG. Das ist nicht im Geringsten barrierefrei, von der Sauberkeit angefangen. Sobald die Leute weniger Geld haben, landen sie in solchen Blöcken.',
          'Wenn bauliche Veränderungen anstehen, am Hansaplatz beispielsweise, da würde ich sagen, die wirkliche aktive Mitgestaltungsmöglichkeit ist schon das non plus ultra, wenn das gegeben wäre. Und das sehe ich gerade nur teilweise. Zumindest von offiziellen Stellen, die die Entscheidung haben bei Bautätigkeiten z.B., ist es nicht so wirklich gegeben.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Abbau sprachlicher Barrieren',
        quotes: [
          'Ich habe den Eindruck, dass jetzt, z.B. auch durch die Situation in der Ukraine, verstärkt drauf geachtet wird und sprachlich versucht wird, die Leute mehr abzuholen, dadurch, dass viele Angebote auf Ukrainisch formuliert wurden. Und das hätte man, finde ich, schon früher oder könnte man in mehr Bereichen machen von städtischer Seite aus. Oder sollte man machen, weil man sonst einen Großteil der Leute, für die deutsch keine Muttersprache ist, nicht erreicht und das muss der Anspruch sein.',
          'Ich glaube, dass manche Angebote noch mehr auf Englisch stattfinden könnten. Das ist ein Punkt, den gibt’s schon. Ich hab einige gesehen, aber es könnte prozentual mehr sein, mehr vielleicht auch auf Spanisch oder zumindest englische Angebote, dass es die mehr gibt. Zweisprachig, das wäre auf jeden Fall eine Sache. Dann, Barrierefreiheit im praktischen Sinne, dass alle Gebäude zugänglich sind. Das ist in neueren, moderneren Gebäuden der Fall.',
          'Mehr unbürokratische Hilfe für Leute, die wenig Deutsch verstehen. Das wäre, das Inklusion schafft. Oder auch eine Kommunalanlaufstelle, für die die wenig bis gar keine Hilfe bekommen. Das wäre das Erste, was mir einfällt.',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Abbau baulicher Barrieren',
        quotes: [
          'Wenn Neubauten kommen, dass unterschiedliche Generationen dabei sind, halt Ältere, Jüngere, Menschen mit Behinderungen, Menschen ohne Behinderungen, Studenten. Dass das ein bunter Mix ist, weil das langfristig dazu führen kann, dass auch der Wohnungsmarkt, also auch die Preise generell gedrosselt werden.',
          'Einmal, denke ich, gibt es eine gewisse Bausubstanz – und das hatten wir bei uns zu Hause auch – um zu gucken: Wie kann da jemand mit einer Gehbehinderung klarkommen? Da müsste an der bestehenden Bausubstanz nochmal nachgearbeitet werden. Das ist natürlich auch eine Sache der Eigentümer, die sich dann auf den Patt machen müssen, wie man sowas finanzieren kann.',
          'Dass man als Vorteil noch mehr herausheben könnte und vor allem die Laufbereitschaft erhöhen könnte. Im Sinne von, die „Schönheit“, die Wege zu verbessern. Also die grüner zu machen. Breiter. Zugänglicher, auch für Menschen, die auf Barrierefreiheit angewiesen sind.',
        ],
      },
      {
        categoryId: 5,
        id: 3,
        title: 'Inklusives Planen',
        quotes: [
          'Ich finde generell, Kreuzungsparken sollte verhindert werden. Es sollten die Parkplätze an den Kreuzungen zu Fahrradparkplätzen umgebaut werden, die könnte man dann mit Bügeln absperren, damit Parken verhindert wird. Das führt dazu, dass Fußgänger, Frauen mit Kinderwägen oder Rollstuhlfahrer besser die Straße überqueren können und man auch eine bessere Einsicht in die Straße hat.',
        ],
      },
      {
        categoryId: 5,
        id: 4,
        title: 'Sichtbarkeit vulnerabler Gruppen',
        quotes: [
          'Es gibt viele Menschen in dem Viertel, die nicht von einer Initiative repräsentiert werden oder deren Stimmen halt nicht irgendwo keine Beachtung finden. Sei es bei besonders vulnerablen Gruppen, besonders armen Menschen. Es gibt ja keine besondere Initiative für arme Menschen. Ich glaube, das ist nochmal ein großes Manko in dem Viertel. Oder auch Menschen mit Migrationshintergrund. Es gibt sehr wenige Migrantenselbstorganisationen hier im Viertel. Und wenn, dann sind die sehr ethnienorientiert oder kulturorientiert. Da ist noch Ausbaupotential würde ich sagen.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Inklusive Aktionen und Feste',
        quotes: [
          'Auf jeden Fall habe ich die Einladung vom Hansaforum damals bekommen und die haben Karten verteilt. Das ist auch immer sehr inklusiv gestaltet. Die Aktionen, die hier stattfinden, um das Viertel und die Lebensqualität zu verbessern, sind schon sehr inklusiv. Das sind aber auch die neueren und moderneren Angebote. Alles organisiert über den Verein.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Wachsende Initiative',
        quotes: [
          'Das Viertel hat den Ruf und ist, glaube ich, sehr inklusiv gestaltet, auch von den Vereinen, die es gibt: das Hansaforum selbst, die B-Side…',
          'Auf jeden Fall habe ich die Einladung vom Hansaforum damals bekommen und die haben Karten verteilt. Und das ist auch immer sehr inklusiv gestaltet. Die Aktionen, die hier stattfinden, um das Viertel und die Lebensqualität zu verbessern, sind schon sehr inklusiv. Das sind aber auch die neueren und moderneren Angebote. Alles organisiert über den Verein.',
          'Es gibt Strukturen und Angebote, wie z.B. das Hansaforum und einige kleinere Akteure, die hier aktiv sind. Das kleine Ostia ist ein bisschen aktiver, das Impulswerk auch, aber so richtig viele Angebote, die sozial orientiert sind, sind ist nicht so doll vorhanden.',
          'Wir hatten auch mal eine Familie aus Syrien dort wohnen, das war für mich gar kein Problem und ich habe damit auch überhaupt keine schlechten Erfahrungen gemacht und insofern möchte ich das übertragen. Ich erwarte das auch ein bisschen von Vermietern. Mein Nachbar zum Beispiel, der hat da etwas ganz Ähnliches, der hat auch eine Wohnung für einen Behinderten.',
        ],
      },
      {
        categoryId: 2,
        id: 2,
        title: 'Bauliche Anpassungen',
        quotes: [
          'Barrierefreiheit im praktischen Sinne, also dass alle Gebäude zugänglich sind, ist eher in neueren, moderneren Gebäuden der Fall.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Konflikte zwischen Lebensstilen',
        quotes: [
          'Manchmal verträgt sich die Klientel nicht so ganz, wenn ich dann mit Kindern auf den Spielplatz gehe, dann bin ich ein bisschen vorsichtiger. Aber ich sag mal, auch das gehört zu einer Durchmischung.',
        ],
      },
    ],
  },
  {
    name: 'Wohnen',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Diskriminierung aufgrund von Herkunft',
        quotes: [
          'Ich meine, wie die strukturellen Themen hat man es überall in Bezug auf Wohnungsmarkt, Wohnungsknappheit, dass bestimmte Gruppen benachteiligt werden. Aber ich weiß nicht, ob das akut ein Hansaviertel-Problem ist. Vielleicht hier besonders, weil der Wohnungsdruck besonders hoch ist.',
          'Man hat ein strukturelles Unterangebot an Wohnraum und dadurch verstärken sich die Selektionsprozesse in Auswahl von Leuten, die eine Wohnung suchen. Dann kommen Variablen oder Themen wie Herkunft verstärkt durch und führen dazu, dass Leute, die keinen deutschen Nachnamen haben, einen noch schwereren Zugang haben, als es sowieso schon der Fall ist.',
          'Ich weiß nicht, ob auf das Hansaviertel speziell bezogen werden kann. Denn die Wohnungsmärkte zu trennen vom Rest der Stadt, ist schwierig. Barrierefreiheit finde ich schwierig, sodass Ausländer sehr stark benachteiligt werden unter Mietern und der Wohnungsmarkt an sich ist natürlich eine absolute Katastrophe. Das ist eine absolute Sechs mittlerweile. Da ist auch eine Besserung kaum in Sicht. Das Angebot ist katastrophal.',
        ],
      },
      {
        categoryId: 1,
        id: 2,
        title: 'Verdrängungsprozesse',
        quotes: [
          'Angesichts der Umstände, wie sich die Mieten entwickeln. Ist es schon ein bisschen… Ich werde auch demnächst Rentnerin sein und dann wird es auch nicht einfacher werden.',
          'Die Wohnungen, die man hier sieht, sind immer noch viel zu teuer. Das ist aber ein stadtallgemeines Problem und ganz klar eine Katastrophe. Was soll man da noch zu sagen.',
          'Was passiert, ist, dass die Bewohner, also das Herz des Viertels, wegziehen. Also hast du dann irgendwann in einer Straße das Viertelleben und in den Seitenstraßen gar nichts. Es ist einfach eine Verlagerung.',
        ],
      },
      {
        categoryId: 1,
        id: 3,
        title: 'Bauliche Barrieren',
        quotes: [
          'Was ich so generell mitgekriegt habe, ist das Wohnen nicht barrierefrei. Auch bei mir, das ist Sozialbau von der LRG. Das ist nicht im Geringsten barrierefrei, von der Sauberkeit angefangen. Sobald die Leute weniger Geld haben, landen sie in solchen Blöcken.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Gerechte Verteilung von Baufläche',
        quotes: [
          'Gemeinschaftliches Interesse könnte in dem Sinne mitgedacht werden, dass Flächen nicht nur an Privatunternehmen vermietet werden. Also dass die Stadt, der Städtebau, als Ganzes gedacht wird. Und nicht als die Verteilung von Wohnung und öffentlichen Räumen, die das Gemeinwohl nutzen und Privatunternehmen als prozentualer Anteil am Städtebau gleicher gestellt ist.',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Durchmischung',
        quotes: [
          'Wenn Neubauten kommen, dass unterschiedliche Generationen dabei sind, Ältere, Jüngere, Menschen mit Behinderungen, Menschen ohne Behinderungen, Studenten. Dass das ein bunter Mix ist, weil das langfristig dazu führen kann, dass auch der Wohnungsmarkt, also auch die Preise generell gedrosselt werden.',
          'Gemeinschaftlich Wohnen würde für mich auch bedeuten, dass man gemeinsame Flächen hat. Also z.B. in Form von Innenhöfen. Wo Kinder spielen können. Wo Alte sitzen können und einfach mal gucken. Gastronomie, dass die sich an der Wolbecker aufreiht, ist ein bisschen merkwürdig. Das könnte nochmal anders verteilt sein. Das schwebt mir in alternativen Wohnformen vor.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Genossenschaftliches Wohnen',
        quotes: [
          'Das ist ein attraktives Viertel. Ich selber wohne bei einer Genossenschaft. Das ist gut, sehr gut, bei einer Genossenschaft zu wohnen. Weil die in der Regel die Preise flach halten und auch organisiert sind beim Reparieren. Es ist nicht alles aus Gold, die Wohnungen sind nicht luxuriös, kein Swimmingpool, aber die führen zur Dämpfung des Wohnungsmarkts, insbesondere der Preise.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Generationenkonflikte',
        quotes: [
          'Die jungen Leute, wegen denen ich dann um halb 2 – wie vor ein paar Wochen – die Polizei rufen musste. Fand ich nicht so toll, weil ich nicht die ewig rumzickende Alte dargeben möchte. Aber es war einfach ein bisschen zu viel. Und was bei uns natürlich auch nicht geht, ist auf der Leererstraße, wo wir ja relativ weit vom Hafen weg sind. Nachts bei offenem Fenster zu schlafen ist unmöglich.',
          'Bei so einer Altersdurchmischung, die viele für gut halten, innerhalb der Immobilie, entsteht eine Art Verdrossenheit bei der älteren Generation gegenüber der jüngeren Generation. Diese sind dann eher nicht bereit, Kompromisse einzugehen. Ich möchte gar nicht draufhauen, aber das ist, was mir da als Erstes zu einfällt.',
          'Wo wir wohnen im Hansaviertel, wohnen zu viele Studierende, das heißt nicht nur am Wochenende Party, sondern auch unter der Woche. Also Lärm haben wir auf jeden Fall.',
        ],
      },
      {
        categoryId: 3,
        id: 2,
        title: '„Unpassende Bebauung“',
        quotes: [
          'Ich hab ein paar Sachen gesehen, wo man denkt: "Passt das jetzt so in das Bestehende rein? Da hat sich jemand selbst verwirklicht.“ Aber da ist jetzt ein Riegel vorgeschoben. Es gibt ja eine Erhaltungssatzung, wo man nicht mehr alles Mögliche an seinem Gebäude verändern kann. Ich finde das ganz wohltuend.',
          'Diese Neubauprojekte am Hafen. Das droht ja immer so eine Edelbebauung zu werden. Also Stichwort Gentrifizierung: Wenn sowas droht, ist das ja nicht so gut. So Endgültig ist das ja auch nicht geklärt, wie das dort weiter geht.',
        ],
      },
    ],
  },
  {
    name: 'Erholung',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Fehlende Erholungsfläche',
        quotes: [
          'Auch die Leute, die Balkone haben, die gucken  nicht immer auf die Grünflächen, sondern dann schon auch auf versiegelte Flächen. Ich finde, das könnte mehr sein. Und dann muss man sich fragen, woher könnten die kommen?',
          'Es gibt nicht so viele Grünflächen, was auch für mittelalte Menschen ein Manko ist. Es gibt wenige Orte, wo man einfach rausgehen kann, weil das Viertel durch Mietwohnungen geprägt ist, die auch nicht alle einen Balkon und einen Garten haben und wo es schön wäre, Grünflächen zu haben.',
          'Als Park würde ich nichts definieren. Es gibt diese klassischen Bäume am Straßenrand und da ist die Frage, ob man das als Grünfläche definiert, weil für mich ist eine Grünfläche, wo ich mich auch hinlegen kann und auch etwas, wo man eine Hängematte spannen kann. Auf diesem Platz fühle ich mich jetzt nicht, als könnte ich mich erholen.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Verkehrseindämmung',
        quotes: [
          'Abwesenheit vom Verkehr, würde ich auf jeden Fall sagen. Verkehr ist ein sehr großer, störender Faktor, wenn es darum geht, Ruhe zu haben, gerade weil ich an der Straße wohne. Grünflächen helfen dabei, sich gut zu fühlen, sich zu erholen und ich würde sagen, das sind die beiden wichtigsten Faktoren.',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Verschönerung und Pflege des Raumes',
        quotes: [
          'Es könnten Flächen und Häuser verschönert werden. Da gibt es ein erhebliches Verschönerungspotenzial. Vor allem gegen die Tristheit der Stadt. Wir sind immer noch in der Stadt, auch wenn das ein progressives Viertel ist. Es ist trotzdem trister Betonalltag. In der allgemeinen Wahrnehmung der Grünflächen, was Bepflanzung und Verschönerung der Stadt angeht, ist auf jeden Fall noch viel Verbesserungsbedarf. Auch hier bei der grauen Betonwüste.',
          'Ich hab mitgekriegt, dass hier der Grünbereich, hier der Hansaplatz bisschen fertig gemacht werden soll. Ansonsten gibt’s hier nur das Ostbad. Deswegen ist es auch ein bisschen schade, dass bei dem Hafencenter nicht so richtig was in dem Konzept drin ist mit Erholungsflächen.',
          'Dass man als Vorteil noch mehr herausheben könnte und vor allem die Laufbereitschaft man irgendwie erhöhen könnte. Also im Sinne von, die „Schönheit“, die Wege zu verbessern. Also halt Die eher grüner zu machen. Breiter. Zugänglicher auch für Menschen, die halt auf Barrierefreiheit angewiesen sind.',
        ],
      },
      {
        categoryId: 5,
        id: 3,
        title: 'Naturnähe',
        quotes: [
          'Ansonsten trägt Lärm auf jeden Fall dazu bei, dass man sich nicht erholen kann. Da, wo es leiser ist und wo man Naturgeräusche hört im Sinne von Vogelgezwitscher. Das nimmt man hier gar nicht wahr, weil man direkt neben der großen Straße sitzt. Aber Ansonsten finde ich Wasser auch total erholsam, das hat man am Kanal. Ich fände es manchmal cooler, wenn man über die Wolbecker Straße flanieren könnte, also ganz entspannt rübergehen. Und auch Schaufenster bummeln, auch wenn es hier nicht so viele Schaufenster zum Angucken gibt.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Sportangebot',
        quotes: [
          'Das Outdoor Gym gibt es auch noch am Kanal. Das ist auf jeden Fall positiv.',
          'Am Ostbad hat man die Beachvolleyball-Plätze, einen Basketball-Platz, Sportplätze, Fußballplätze. Ansonsten ist hier und da mal eine Tischtennisplatte und Spielplätze, wo man auch ein paar Sportangebote hat. Sind also ganz gut vertreten.',
          'Ist alles gut erreichbar. Wenn man Sportkurse machen will, hat man alles in der Umgebung. Wenn man selber einfach nur laufen oder spazieren gehen will, kann man das auch gut. Dann gibt es auch den Sportverein, und gab es mal diesen Tennisverein am Bennohaus. Ich glaub der ist aber weg.',
        ],
      },
      {
        categoryId: 4,
        id: 2,
        title: 'Ausgehen',
        quotes: [
          'Gute Cafés mit gutem Kaffee und gutem Frühstück gibt es auch. Auch breite Bürgersteige und Grünflächen.',
          'Eigentlich reicht mir der Hafen, der ist gemütlich. Da hinzugehen, sich hinzusetzen.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Erholungspotenzial des Kanals',
        quotes: [
          'Let’s say if I want to relax on the Kanal, it is also a park. It is nice and relaxed, but I think it can be a bit too noisy because everyone is gathering there. So it depends on what kind of relaxation  you like, but I think you still can still find spots where you can really calm down and just be you, unless if you walk a bit further. Even though I think yes, you can relax. And it’s not too bad. Maybe not perfect, but also not too bad either.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Aufenthaltsqualität für verschiedene Gruppen',
        quotes: [
          'Die vorhandenen Grünflächen am Bremer Platz bieten nicht wirklich Erholung durch die Struktur und die Nähe vom Bahnhof. Sie bieten nicht die Aufenthaltsqualität und abgesehen davon gibt es relativ wenige Grünflächen.',
        ],
      },
    ],
  },
  {
    name: 'Grünflächen',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Schlechte Erholungsqualität',
        quotes: [
          'Es gibt zu wenige Bäume meiner Meinung nach. Und zu wenige Grünflächen auch.',
          'Ich glaube der Bremer Platz wird für uns nie ein Platz sein, wo wir uns zum Erholen hinlegen. Wir würden uns da nicht einfach mit Kind hinlegen, weil das schon eine Wiese ist, wo man gucken muss, was du herumliegt. Aber eine Wiese zum Hinlegen wäre grundsätzlich nicht schlecht, weil mit Kleinkind ist der Kanal nicht so der Brenner.',
          'Als Park würde ich nichts definieren. Es gibt diese klassischen Bäume am Straßenrand und da ist die Frage, ob man das als Grünfläche definiert, weil für mich ist eine Grünfläche, wo ich mich auch hinlegen kann und auch etwas, wo man eine Hängematte spannen kann. Auf diesem Platz fühle ich mich jetzt nicht, als könnte ich mich erholen.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Grünfläche Kanal',
        quotes: [
          'Als Grünfläche hat man zum Glück den Kanal, an dem man spazieren gehen kann und dahinter wird es dann auch grüner. Also das geht. Aber ich glaube, dafür fehlt hier einfach die Fläche.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Nutzungskonflikte',
        quotes: [
          'Die vorhandenen Grünflächen am Bremer Platz bieten nicht wirklich Erholung durch die Struktur und die Nähe vom Bahnhof. Sie bieten nicht die Aufenthaltsqualität und abgesehen davon, gibt es relativ wenige Grünflächen.',
          'Ansonsten haben wir an Grünflächen eher weniger. Aber das Spielplatzangebot für Kinder ist ganz solide in der Stadt. Aber es könnte auch noch... Also wir haben den Kanal, der gut abgebrannt und verdreckt teilweise ist, weil der sehr viel genutzt wird. Da könnte es noch mehr Pflege geben und noch mehr Mülltonnen. Der ist stark genutzt und stark abgenutzt.',
          'Wir haben die Nähe zum Kanal, wo wir uns hinlegen können. Das ist super. Ansonsten haben wir die Spielplätze um die Ecke. Finde ich eigentlich alles ausreichend. Ich meine, am Bremer Platz, weiß ich gar nicht, was daraus wird. Ob das weiter nutzbar ist, muss man mal gucken. Aber so wie es war, ist es eigentlich ganz gut, weil es durchaus eine Funktion hat, die wir vielleicht nicht nutzen, aber die eine Stadt auf jeden Fall braucht.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Kanalnahe Grünflächen',
        quotes: [
          'Ich brauch immer Grün um mich herum und da, wo ich mich auch mal bewegen kann. Am Kanal ging es bislang ganz gut. Wie es da weitergeht, weiß man nicht mit der Baustelle. Dahinter ist auch ein Park, den niemand kennt. Auch schön. Ansonsten hat man immer ein paar grüne Oasen.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Initiatives Begrünen',
        quotes: [
          'Insgesamt wird sich Mühe gegeben. Auch vor unserem Haus, da ist so ein kleiner Garten mit schönen Pflanzen. Das ist zwar nicht so eine große Grünflache, aber man bemüht sich auf dem kleinen Raum, den man hat, es grün zu machen.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Nutzbare Grünfläche',
        quotes: [
          'Einfach mehr erlebbare und nutzbare Grünflächen, wo man sich auch wirklich erholen kann. Die von der Lage her auch nicht so sind, dass alle 2 Minuten ein Motorrad vorbeifährt. Die strukturell so sind, dass man sich auch erholen möchte und die nicht einfach grün sind und nicht einfach staubig, grau, schlammig, wie jetzt der Hansaplatz.',
          'To be honest, of course I go jogging along the Kanal, that is one thing, but it is the Kanal – we do not have a park. Which we wanted to have but unfortunately this case was not wanted by people even though we have all the rights. So we do not have a park to close to Hansaviertel I think.',
          'Ich wünsche mir hier mehr Flächen, die aufgewertet werden mit Begrünung und Bäumen.',
          'Ansonsten haben wir an Grünflächen eher weniger. Aber das Spielplatzangebot für Kinder ist ganz solide in der Stadt. Wir haben den Kanal, der gut abgebrannt und verdreckt teilweise ist, weil der sehr viel genutzt wird. Da könnte es noch mehr Pflege geben und noch mehr Mülltonnen. Da könnte nach der Baustelle noch was verbessert werden. Aber der ist stark genutzt und stark abgenutzt.',
          'Ich glaube der Bremer Platz wird für uns nie ein Platz sein, wo wir uns zum Erholen hinlegen. Wir würden uns da nicht einfach mit Kind hinlegen, weil das schon eine Wiese ist, wo man gucken muss, was da so herumliegt. Aber eine Wiese zum Hinlegen wäre grundsätzlich nicht schlecht, weil mit Kleinkind ist der Kanal nicht so der Brenner.',
          'Ich würde sagen, der Park hinten im Hauptbahnhof. Das ist der Park wo die Klientel hängt. Und sonst fallen mir eigentlich nicht viele Grünflächen ein.',
        ],
      },
    ],
  },
  {
    name: 'Kunst und Kultur',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Party- und Vergnügungsmeile',
        quotes: [
          'Dass sich die Gastronomie an der Wolbecker so aufreiht, ist ein bisschen merkwürdig. Das könnte nochmal anders verteilt sein.',
          'Es gibt viele ältere Menschen, das sind in der Regel Ältere, die sich darüber echauffieren, dass es so eine Partymeile geworden ist. Das ist ja eigentlich ganz schön manchmal. Aber ich gehe zum Beispiel am Wochenende nie zum Hafen, weil, das ist mir einfach zu voll da, das geht mir auf den Wecker.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Wachsendes Angebot',
        quotes: [
          'Das Kulturangebot ist ganz okay, durch viele Aktionen, die am Hafen stattfinden und drumherum. Das Kunstangebot speziell könnte noch besser sein. Im Speicher bin ich nicht so oft, aber innerhalb des Viertels könnte man mehr organisieren. Das Kulturangebot ist so an sich ganz okay. Was speziell bildende Kunst angeht, da gibt es auch nicht so viele Orte an denen ausgestellt werden kann und das kann sich auch verbessern.',
          'Es gibt auf jeden Fall mehr Kunst als in anderen Vierteln. Trotzdem muss ich in Bezug auf Kunst sagen, dass es mangelhaft ist. Es gibt aber viel Potenzial.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Kunstauslebung',
        quotes: [
          'Bei der zweiten Loge hast du das Thema, dass die eine Open Stage hatten, auf der dann einfach Kultur stattfinden konnte und wo das mit einer relativ niedrigen Hürde für alle zugänglich war, vor allem auch für die Anwohner:innen. Und dann beschweren sich aber die Nachbarn halt die ganze Zeit bei der Polizei und dem Ordnungsamt. Jetzt kann so ein Angebot einfach nicht mehr stattfinden.',
          'We have a huge empty wall in our garden, and we did not come to agreement what we wanted to paint. People wanted to make sure it was not open, so that you could not be so creative. They wanted to make sure that the picture not bother anyone. I think it is just an empty wall, we could just have agreed and everyone could have just taken a part of it and decided as a neighborhood, but people were not as open, to just say: ”Hey let’s invite everyone who wants to do whatever they want to paint. So, I am not so sure. Based on my experience, maybe people are not that open, maybe there is some conflict.',
        ],
      },
      {
        categoryId: 3,
        id: 2,
        title: 'Gastronomie und die Folgen',
        quotes: [
          'Even though this noise doesn’t bother me when I come home. When I don’t want to go out or I don’t want to have things to do and I want to relax, it does bother. It’s triggering. Even if you have a great sense of will, which I do, it’s still triggering to me, because I feel a bit of FOMO, like I am missing out on something.',
          'Es gibt mehr Scherben. Unter der Bedingung fehlt die Rücksichtnahme auf Andere, also man könnte bei den Kneipen im Viertel mehr Rücksicht nehmen auf andere, wo ich selber Fahrrad fahre oder diejenigen auch selber Fahrrad fahren. Und manchmal liegt überall Müll herum, das verstehe ich nicht.',
          'Mich stört es eigentlich nicht. Ich könnte mir vorstellen, dass gerade hinten bei der Kneipenkultur, die wir sehr feiern, dass sich Leute gestört fühlen, an den Kiosken, weil da viele Leute draußen sitzen.',
          'Das ist ein bisschen einseitig. Zu viel Essen. Es war mal vielfältiger vor ein paar Jahren und das hat sich aus meiner Sicht ein bisschen verschlechtert. Es gab hier mal einen Fotoladen und die Bücherei ist auch knapp an der Schließung vorbeigegangen.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Vielfältiges Kunstangebot',
        quotes: [
          'Es gibt schon viele Orte, wo Konzerte stattfinden, mit dem Hot Jazz Club, den Kneipen und der Kunsthalle. Da sind schon einige Sachen. Auch das Bennohaus, wo viele Dinge passieren, da wird viel gemacht.',
          'Ich sehe das auch als großen Bestandteil des Hansaviertels und der Kultur und der Kunst im Hansaviertel an, dass du viele Wände hast, die bemalt sind und sowohl in High-End-Version schön gemacht. Aber auch einfach von Leuten, die da Bock drauf haben. Also ein bisschen Guerilla-Kunst und nicht basisdemokratisch verhandelt. Aber das ist auch Raumaneignung und ich finde, das ist in jeder Form Kunst.',
          'Und dann sind auf dem Platz manchmal diese Musicals oder das Borchert-Theater, das ja manchmal den Hafen mit einbringt. Ansonsten gab es hier auch mal ein kleines Flohmarktfest, wo man durch das Hafenviertel gegangen ist. Das war ganz schön, was sich an dem Viertelfest orientiert hat. Dann eben das B-Side-Fest, das total geil ist, finde ich. Da freue ich mich auf jeden Fall wieder drauf. Und die zeigen auch die kleinen Buden, wo man Theater gucken kann und solche Geschichten.',
          'Fast an jeder Hauswand findet man was. Und in Bezug auf Kultur gibt es ja das Benno-Haus und das Kreativhaus, das ist gar nicht schlecht. In Bezug auf Kunst gibt es viel am Hafen.',
        ],
      },
      {
        categoryId: 4,
        id: 2,
        title: 'Gastronomie',
        quotes: [
          'Wir sind bewusst an eine große Straße gezogen, weil wir das Leben hier gut finden. Es wäre natürlich schön, wenn hier weniger Autos lang fahren würden, aber wir wissen, dass das nicht geht. So würde ich das vielleicht bezeichnen. So finden wir das super, dass da mehr Cafés und Bars aufmachen und dass dort abends Leute über die Straße laufen. Das finde ich ok, auch wenn am Morgen eine Glasscherbe auf dem Boden liegt.',
          'Der Verkehr ist kein Asset des Viertels und ist kein Grundbestandteil, der das Viertel lebenswert macht. Sondern das ist das Nachtleben und die Lebendigkeit nachts.',
          'Am Hafen ist sehr viel Gastronomie oder Unterhaltung und auch Kultur. Was ich ganz schön finde, das sind die zwei Handwerksbetriebe Cibaria und die Käserei. Das finde ich eine gute Mischung.',
        ],
      },
      {
        categoryId: 4,
        id: 3,
        title: 'Offenheit gegenüber Kunst/ Kunstverständnis',
        quotes: [
          'Ich würde der Kultur nicht unbedingt Konflikte unterstellen. Wenn man hier was machen wollte, dann könnte ich mir auch vorstellen, dass man hier einen Raum finden würde.',
          'Also von den Stadtteilen in Münster würde ich wieder sagen am besten. Auch Hansaforum und B-Side bieten so etwas an wie Graffiti und DJ-Producing und das Kulturbegriffe, die so nicht im Standardrepertoire einer Stadt vorkommen und dass das Hansaviertel halt so interessant und alternativ macht',
          'Ich finde es spannend, dass so viel von den Gastronom:innen mit eingebunden wird und dass in vielen Cafés, Bars und Restaurants, in die man geht, entweder Kulturveranstaltungen beworben werden oder teilweise Kooperationen bestehen. Da habe ich das Gefühl, dass es ein gutes Netzwerk gibt. Also verschiedene Kulturschaffende unterstützen sich und auch, dass das so szenenübergreifend beworben wird.',
          'Wenn ich klassischerweise an das Gebiet beim Hawerkamp denke, dann finde ich, dass es da unterschiedliche Kulturauslebungen gibt. Wenn man sich teilweise die Ausrichtungen der Clubs anschaut oder andere Szenen, die dort Graffitis machen oder auch andere Veranstaltungen, die dort stattfinden. Da habe ich eigentlich das Gefühl, dass das dort gut harmoniert. Aber ich würde auch sagen, dass das in Münster getrennt ist, also im Hansaviertel dürfen alternative Kulturen ausgelebt werden, aber dafür bewahren wir uns unseren Stadtkern, den Prinzipalmarkt, da kann sowas niemals hin.',
          'Also wir jagen nicht der Kunst hinterher, aber wir waren schon mal an einem Tanzabend – einem Salsa Abend – dahinten am Hafen. Das war nett. Und solche Aktionen, wenn man sich hier umguckt, hier gibt es viele Cafés, die sowas haben. Wenn wir uns dafür interessieren würden, fänden wir wahrscheinlich genug.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Erhaltung',
        quotes: [
          'Es gibt ständig Konflikte um Kunst und Kultur, weil es zu wenig Raum dafür gibt. Sieht man ja auch an der B-Side, also wenn du nicht versuchst, etwas zu konservieren, dann ist es irgendwann nicht mehr da. Das ist der Trend.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Vielfalt',
        quotes: [
          'Das ist ein bisschen einseitig. Zu viel Essen. Es war mal vielfältiger vor ein paar Jahren und das hat sich aus meiner Sicht ein bisschen verschlechtert. Es gab hier mal einen Fotoladen und die Bücherei ist auch knapp an der Schließung vorbeigegangen.',
        ],
      },
    ],
  },
  {
    name: 'Begegnungsorte',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Zugangsbeschränkung',
        quotes: [
          'Die klassischen Sachen, also Cafés, Kneipen gibt’s natürlich zu Hauf. Aber die sind dann immer mit einer ökonomischen Zugangsbeschränkung verbunden.',
        ],
      },
      {
        categoryId: 1,
        id: 2,
        title: 'Orte nicht geeignet',
        quotes: [
          'Es gibt hier und da mal eine Tischtennisplatte, die zugänglich ist. An diesem Gymnasium und auch am Hansaplatz, also ich meine den Fußballplatz dort, das ist ziemlich überschaubar in der Qualität. Da wird so viel Staub aufgewirbelt, dass man danach Lungenprobleme hat.',
          'Das Problem ist, ich bin ein bisschen beeinflusst von meiner Arbeit, weil ich in diesem Bereich auch selbst schon Befragungen hier im Viertel durchgeführt habe. Und da schon häufig die Rückmeldung kam, dass es gerade für ältere Menschen sowas wie Begegnungsorte nicht gibt, gerade nach Corona. Einsamkeit ist ein großes Thema geworden. Für ältere Menschen ist es nicht leicht geworden, aber wurde jetzt nochmal deutlich offensichtlicher. Kontakte zu halten, zu knüpfen. Begegnung zu schaffen und einfach mal rauszukommen.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Bestehende Orte',
        quotes: [
          'Orte hat man schon. Grünflächen ein bisschen weniger. Aber ansonsten halt in Richtung Cafés oder eine Tischtennisplatte oder hier und da mal eine Parkbank, wo man sich hinsetzen kann. Wie gesagt, Kneipen gibt es genug, oder? Am Hafen gilt „sehen und gesehen werden“, aber am ganzen Kanal lang gibt es relativ viele Möglichkeiten.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Planungskonflikte',
        quotes: [
          'Ich habe den Eindruck, dass Münster seine Assets bzw. in dieser Gegend, seine Sachen hat, die ortsbildprägend sind bzw. womit ich mich stärker identifiziere und die auch meine positive Assoziation mit dem Viertel ausmachen, stückweise rückbauen bzw. sanieren oder umbauen. Jetzt z.B. in Bezug auf den Hafen. Auf die Seite von der B-Side in Bezug auf die Skateanlagen.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: '„Bordsteinkultur“',
        quotes: [
          'Begegnungsorte nehmen wir wahr und das war auch ein Punkt für uns, warum wir da hinten hingezogen sind, weil man mal über die Straße gehen kann und auf dem Weg zum Supermarkt trifft man jemanden, der irgendwo sitzt, und dann setzt man sich dazu oder man geht abends auf ein Bierchen nochmal zum Kiosk. Das ist schon das, was wir gut finden.',
          'Der Kanal ist ein Ort, an dem man sich mal treffen kann und auch die B-Side-Räumlichkeiten sind sehr offen für alle. Also vor allem diese Kultur, dass man sich auf der Straße vor dem Kiosk trifft, dass man sich einfach auf den Bordstein setzt. Das kann man schon sehen, dass das von allen ausgelebt und toleriert wird und das ist etwas Besonderes.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Partizipation',
        quotes: [
          'Da brauchst du eine deutlich höhere Offenheit von Seiten der Projektentwickler:innen. Im Vorfeld schon die Leute in die Planung mit einzubeziehen in Bezug auf Gemeinschaftsflächen. In Bezug auf gemeinschaftliche Räume dann in der Struktur, die auch offen sind in das Viertel hinein. Aber auch in die gesamte bauliche Struktur, dass semiöffentliche Räume geschaffen werden.',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Konsumfreie Orte',
        quotes: [
          'Indoor, wo viele Veranstaltungen stattfinden, das Bennohaus vielleicht noch. Aber richtig offene Sachen, wo jeder hin kann und sich ungezwungen treffen kann ohne ökonomischen Hintergedanken. Da fällt mir spontan nichts ein.',
          'Auch wenn es nett ist, dass es hier so viele Cafés gibt. Aber das 20. Café, wo alle draußen sitzen, das ist kein Begegnungsort. Das ist ein Privatunternehmen, was Geld verdient, aber das ist keine Begegnungsstätte. Orte ohne Konsumzwang, wie das Gasometer, also öffentliche Räume, in denen interessante Dinge passieren, die gibt es viel zu wenig, auch am Hafen.',
          'Öffentliche Räume aller Art aber insbesondere auch welche für die Gruppen, die das sonst nicht machen können. Insbesondere ist da Geld eine Frage, das heißt, ältere Menschen, die kein Geld haben, die können auch nicht in eine Kneipe gehen, die können gar nichts. Die können nur Zuhause sitzen und sich nie treffen und das finde ich richtig scheiße. Es muss Räume geben, wo man sich für ganz wenig oder eigentlich für gar kein Geld treffen kann.',
          'Der Kanal ist ein Ort, an dem man sich mal treffen kann und auch die B-Side-Räumlichkeiten sind sehr offen für alle. Also vor allem diese Kultur, dass man sich auf der Straße vor dem Kiosk trifft, dass man sich einfach auf den Bordstein setzt. Da kann man schon sehen, dass das von allen ausgelebt und toleriert wird und das ist etwas Besonderes. Ich hab’ das Gefühl, dass es hier Orte gibt, wo man hingeht, um etwas zu konsumieren, aber hier gibt es mehr von der Sorte, wo man ein bisschen freier ist, also dass man sich einfach dazusetzen kann oder mit seinem Laptop dort ankommt und mal länger sitzen kann. Aber das folgt auch nur aus einem Mangel an Alternativen.',
        ],
      },
    ],
  },
  {
    name: 'Älter werden im Viertel',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Steigende Mieten',
        quotes: [
          'Angesichts der Umstände, wenn ich hier sehe, wie sich die Mieten entwickeln, ist es schon ein bisschen… Ich werde demnächst Rentnerin sein und dann wird es auch nicht einfacher werden.',
        ],
      },
      {
        categoryId: 1,
        id: 2,
        title: 'Angebote für Kinder',
        quotes: [
          'Ich glaube der Bremer Platz wird für uns nie ein Platz sein, wo wir uns zum Erholen hinlegen. Wir würden uns da nicht einfach mit Kind hinlegen, weil das schon eine Wiese ist, wo man gucken muss, was du herumliegt. Aber eine Wiese zum Hinlegen wäre grundsätzlich nicht schlecht, weil mit Kleinkind ist der Kanal nicht so der Brenner.',
          'Hier leben schon viele Kinder, nehme ich wahr, aber natürlich ist das Hansaviertel ein alternatives Viertel mit Bars und Restaurants und Sachen. Deshalb gibt’s naturgemäß nicht viele Angebote für Kinder. Aber es liegt in der Natur des Viertels.',
        ],
      },
      {
        categoryId: 1,
        id: 3,
        title: 'Treffpunkte für Ältere',
        quotes: [
          'Zum Beispiel gibt es den Hansagrill, der nicht mehr der Hansagrill ist, wo man früher viele ältere Leute getroffen hat. Ich könnte mir vorstellen, dass die Gastronomie, die vorhanden ist, nicht altersgerecht ist für ältere Altersgruppen. Außerdem ist der Wohnraum nicht bezahlbar für diese Altersgruppe.',
          'Das Problem ist, ich bin beeinflusst von meiner Arbeit, weil ich in diesem Bereich auch selbst schon Befragungen hier im Viertel durchgeführt habe. Und da schon häufig die Rückmeldung kam, dass es gerade für ältere Menschen sowas wie Begegnungsorte nicht gibt, gerade nach Corona. Einsamkeit ist ein großes Thema geworden. Für ältere Menschen ist es nicht so leicht geworden, aber wurde jetzt nochmal deutlich offensichtlicher. Kontakte zu halten, zu knüpfen. Begegnung zu schaffen und einfach mal rauszukommen.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Nutzungskonflikte',
        quotes: [
          'Ich glaube der Bremer Platz wird für uns nie ein Platz sein, wo wir uns zum Erholen hinlegen. Wir würden uns da nicht einfach mit Kind hinlegen, weil das schon eine Wiese ist, wo man gucken muss, was du herumliegt. Aber eine Wiese zum Hinlegen wäre grundsätzlich nicht schlecht, weil mit Kleinkind ist der Kanal nicht so der Brenner.',
          'Die jungen Leute, wegen denen ich um halb 2, wie vor ein paar Wochen, die Polizei rufen musste. Fand ich nicht so toll, weil ich nicht die ewig rumzickende Alte dargeben möchte. Aber es war einfach ein bisschen zu viel. Und was auch nicht geht, ist bei uns auf der Leererstraße, wo wir relativ weit vom Hafen weg sind. Nachts bei offenem Fenster zu schlafen ist unmöglich.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Spielplätze',
        quotes: [
          'Es gibt relativ viele Spielplätze hier in der Ecke. Was ich gut heiße. Der hier vorne an der Ecke wurde neu gemacht.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Altersgerechte Mobilität',
        quotes: [
          'Ich bin eigentlich großer Fan meiner eigenen Mobilitätsform. Deswegen sehe ich da keine wirklichen Punkte. Vielleicht für ältere Gruppen, dass man, was es auch schon gibt, Taxi-Rikschas quasi für Krankenfahrten oder Einkaufsfahrten verstärkt nutzen kann und in das öffentliche Mobilitätsangebot mit aufnimmt.',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Altersübergreifende Angebote',
        quotes: [
          'Generell altersübergreifende Angebote sind oft größere Veranstaltungen wie z.B. das B-Side-Festival. Aber dass sich junge und alte Leute mehr mischen? Es gibt Angebote, das kann aber auch mehr stattfinden. Damit man nicht nur in seiner eigenen Altersgruppe verweilt, könnte es mehr Angebote geben, von dem was ich wahrnehme.',
          'In der Altersgruppe von 0 bis, zu den ersten Teenager-Jahren, geht das von Kitas mit entsprechendem Ganztags-Angebot, über Grundschulen und Auswahlmöglichkeiten innerhalb des Viertels, ohne dass die Eltern und Kinder genötigt sind, das Viertel zu verlassen. Spielplätze und im weiteren Sinne Flächen für Familien, die sind grundsätzlich da, aber ich weiß nicht, ob das im ausreichenden Maße ist. Auch Geschäfte für Spielwaren oder Einkaufsmöglichkeiten für Ältere, solche Sachen fehlen.',
        ],
      },
    ],
  },
  {
    name: 'Nachbar:innenschaft',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Anonymität',
        quotes: [
          'Was mir aufgefallen ist, die Leute, die in der Nachbarschaft wohnten, die älter waren, die habe ich alle noch gekannt, aber die, die nachgezogen sind, die kenne ich weniger. Ich weiß auch nicht, woran das liegt. Das wird mir gerade erst klar. Die alten Damen, die dann übrig geblieben sind, die waren halt immer Zuhause.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Offenheit',
        quotes: [
          'Ich würde da einfach mal von der Anzahl an Initiativen auf die Hilfsbereitschaft schließen, dass es schon stärker ausgeprägt ist, als z.B. in Mauritz.',
          'Unter mir wohnt ein älterer Herr, der ist behindert, also inzwischen ein sehr alter Mensch, über 90 und der will mal was kopiert haben oder so. Solche Kleinigkeiten laufen halt.',
          'Eigentlich ist das etwas Gutes am Hansaviertel. Ich finde, da es so alternativ ist, sind die Leute ein bisschen lockerer. Du kannst immer mit allen reden und du bekommst immer irgendwo Hilfe. Die Leute sind einfach entspannt!',
          'Wir müssen sagen, das ist cool. Wir haben immer einen Tag nur für Nachbarn, das Nachbarschaftsfest. Die versuchen auf jeden Fall, dass wir Kontakt mit den anderen haben. Leider waren wir nicht dabei, aber wir haben die Infos gekriegt. Ich weiß nicht, ob es das auch im Kreuzviertel gibt.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Vorstellungen von Nachbar:innenschaft',
        quotes: [
          'We have a huge empty wall in our garden, and we did not come to agreement what we wanted to paint. People wanted to make sure it was not open, so that you could not be so creative. They wanted to make sure that the picture not bother anyone. I think it is just an empty wall, we could just have agreed and everyone could have just taken a part of it and decided as a neighborhood, but people were not as open, to just say: ”Hey let’s invite everyone who wants to do whatever they want to paint. So, I am not so sure. Based on my experience, maybe people are not that open, maybe there is some conflict.',
          'Ich kenne die Nachbarn nicht näher, aber ich wohne da schon seit Ewigkeiten. Man begrüßt sich. Die haben angefangen, im Garten rumzufummeln, ich finde zwar blöd, was sie da treiben, aber ich lasse sie in Ruhe. Die können da ruhig ihre wilden Gartenbauträume verwirklichen.',
        ],
      },
      {
        categoryId: 3,
        id: 2,
        title: 'Rücksichtnahme',
        quotes: [
          'Leute fragen zu Recht nicht um Hilfe, aber ich schon. Es ist ein sehr junges Viertel, aber auch sehr spießig.',
          'Dass jemand sich in seiner Ruhe gestört fühlt, ist oft meine Erfahrung, dass das der erste Kontakt ist und in dem Fall dann auch indirekt.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Hilfsbereitschaft',
        quotes: [
          'Bei uns im Haus funktioniert Nachbarschaft. Ich bin zum Glück noch nicht so hilfsbedürftig. Ich würde mal sagen Hilfsbereitschaft ist da.',
        ],
      },
      {
        categoryId: 4,
        id: 2,
        title: 'Heterogenität',
        quotes: [
          'Dass man akzeptiert, was die anderen machen. Dass es mal laut ist, wenn die Jugendlichen ’ne Gartenparty machen. Dass es klar ist, dass sowas auch mal sein muss.',
          'Eigentlich ist das etwas Gutes am Hansaviertel. Ich finde, da es so alternativ ist, sind die Leute ein bisschen lockerer. Du kannst immer mit allen reden und du bekommst immer irgendwo Hilfe. Die Leute sind einfach entspannt!',
        ],
      },
      {
        categoryId: 4,
        id: 3,
        title: 'Nachbarschaftliche Aktionen',
        quotes: [
          'Bei mir im Haus gibt es Leute, die treffen sich öfter, die haben so ein gemeinsames Projekt. Blumen anpflanzen und wieder rausrupfen und woanders hinpflanzen. Ich finde das seltsam, aber die machen das. Und die kennen sich deswegen auch mehr und sprechen ansonsten auch eher mal miteinander. Das hat glaube ich eine neue Mieterin, die direkt über mir wohnt, mit ihrem Freund initiiert.',
          'Wir müssen sagen, das ist cool. Wir haben immer einen Tag nur für Nachbarn – das Nachbarschaftsfest. Die versuchen auf jeden Fall, dass wir Kontakt mit den anderen haben. Leider waren wir nicht dabei, aber wir haben die Infos gekriegt.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Achtsames Miteinander',
        quotes: [
          'Es gibt ja Viertelfest und so weiter, aber es könnten Zufriedenheits-Barometer, wie ihr das macht für alle Häuser als Routine eingeführt werden, wo alle einbezogen werden und jeder dort seine Sachen loswerden kann, damit in Zukunft das Miteinander ein bisschen basischer wird und auch ein bisschen kritikvoller.',
          'Es bräuchte weniger Barrierefreiheit, wenn es mehr Hilfsbereitschaft geben würde. Und ich denke, dass die Barrierefreiheit, die jetzt vorherrscht, und die Awareness, was das angeht, gut ist, also gut genug, wenn man jetzt anfängt an der Beziehungsebene zu arbeiten und eine Hilfsbereitschaft und eine Achtsamkeit gegenüber anderen etabliert. Dann wäre das eine gute Mischung.',
        ],
      },
    ],
  },
  {
    name: 'Gesundheit',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Lärmbelästigung',
        quotes: [
          'Yes, it is a very lively neighborhood, even if you walk from that street or walk to Hafen it is still noisy. So yes, there is much more noise than in other “Viertels”.',
          'Das Bewegen vor der eigenen Haustür is nicht so einfach möglich, weil es kaum ruhige Straßen gibt, die nicht mit Autos befahren sind.',
        ],
      },
      {
        categoryId: 1,
        id: 2,
        title: 'Hygiene',
        quotes: [
          'Im Hansaviertel fällt mir nur eine Toilette am Bremer Platz ein, die würde ich aber nicht nutzen.',
        ],
      },
      {
        categoryId: 1,
        id: 3,
        title: 'Gesundheit als kommunales Problem',
        quotes: [
          'Gesundheitsförderung wird gerade auf der kommunalen Ebene gesehen und wird da auch aktuell auf der wissenschaftlichen Ebene kommunal angegangen. Und da gibt’s gerade ein Projekt, das im Hansaviertel agiert, aber auch auf der gesamtstädtischen Ebene versucht, ein langfristiges Handlungsprogramm umzusetzen. Das ist ein Lösungsweg, der nicht ganz perfekt ist, weil der immer noch in kommunale Strukturen eingebunden ist und nicht die 100%ige Lösung für ärmere Menschen in einem Viertel ist, weil es kein Projekt sein wird, was mehr finanzielle Gleichheit herstellen kann.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Viertelstruktur',
        quotes: [
          'Das ist der große Vorteil dieses Viertels. Also dass es so kleinräumlich ist, dass relativ viel Versorgungsstruktur vorhanden ist. Nicht nur die medizinische Versorgungsstruktur, sondern auch sowas wie Nahversorgung. Das ist auch etwas, das man stärken kann, sodass man das als Vorteil noch mehr herausheben könnte, um vor allem die Laufbereitschaft zu erhöhen.',
        ],
      },
      {
        categoryId: 2,
        id: 2,
        title: 'Sportangebote',
        quotes: [
          'Da wir hauptsächlich ins Fitnessstudio oder ich auch in die Kletterhalle gehe, nehmen wir Sportangebote nicht wahr. Aber wenn ich das nicht machen würde? Ich weiß, dass allein in diese Richtung am Kanal ein kleiner Sportraum ist mit Klimmzugstangen und allem Drum und Dran. Wenn ich das machen wollte, wäre es mehr als ausreichend, weil es dort eigentlich nie voll ist.',
        ],
      },
      {
        categoryId: 3,
        id: 1,
        title: 'Nutzungsmischung',
        quotes: [
          'Ich wohne an der Wolbecker Straße und ich kann mich nachts, im Prinzip dazwischen entscheiden, ob ich mit Sauerstoffmangel aufwachen möchte, weil ich die Fenster zu habe, oder ob ich um 6 Uhr morgens von den Müllabfuhrwägen und den Lieferanten vom Rewe geweckt werden möchte.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Ärztliche Versorgung',
        quotes: [
          'Es gibt reichlich auf dem Hansaring. Auf der Wolbecker Straße gibt es auch viele Ärzte und Ärztinnen.',
          'Das Arztangebot ist okay. Ich glaube, es gibt auch einige Praxen mehr, als man denkt. Man nimmt sie nicht alle wahr. Aber 10 Minuten Fußweg sind die auf jeden Fall erreichbar.',
        ],
      },
      {
        categoryId: 4,
        id: 2,
        title: 'Öffentliche Sportanlagen',
        quotes: [
          'Am Ostbad hat man die Beachvolleyball-Plätze, einen Basketball-Platz, Sportplätze, Fußballplätze. Ansonsten sind hier und da mal eine Tischtennisplatte und Spielplätze, wo man ein paar Sportangebote hat. Sind also ganz gut vertreten.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Trinkwasserversorgung',
        quotes: [
          'Ich weiß, dass es nur 2 Trinkwasserspender in ganz Münster gibt. Ist das richtig? Einen am Aasee und eine hier irgendwo. Ich hab da keinen Bedarf, aber gerade die Szene, Bremer Platz. Die könnten es gebrauchen',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Bewegungsangebote',
        quotes: [
          'Es gibt ein Sportangebot. Gerade öffentliche Hallen... Die Hallen werden auch für Schulsport genutzt, sind dadurch viel verplant. Aber dass es auch öffentliche Sportangebote in Hallen geben kann, das gibt es nur sehr wenig bis gar nicht.',
          'Das Bewegen vor der eigenen Haustür ist nicht so einfach möglich, weil es kaum ruhige Straßen gibt, die nicht mit Autos befahren sind, wo nicht Verkehrsgefahren drohen. Es gibt nicht so viele Grünflächen, was auch für mittelalte Menschen ein Manko ist. Es gibt wenige Orte, wo man einfach rausgehen kann, weil das Viertel durch Mietwohnungen geprägt ist. Die vielleicht auch nicht unbedingt alle einen Balkon und nicht alle einen Garten haben und wo es schön wäre, Grünflächen zu haben. Die man dann auch nutzen kann, die hier aber wenig vorhanden sind.',
        ],
      },
    ],
  },
  {
    name: 'Vernetzung',
    topics: [
      {
        categoryId: 1,
        id: 1,
        title: 'Initiativenvielfalt',
        quotes: [
          'Ich musste bei Barrierefreiheit bisher immer an Rollstuhlfahrer:innen denken. Und da würde ich sagen, dass es nicht barrierefrei ist, auch wegen anderer Hürden. Es gibt auch zu wenige Kulturvereine, die dafür sorgen, dass Leute verschiedenen Alters und der Querschnitt des Viertels sich begegnen können.',
          'Es gibt Strukturen und Angebote, wie z.B. das Hansaforum und einige kleinere Akteure, die hier aktiv sind. Das kleine Ostia ist ein bisschen aktiver, das Impulswerk auch, aber so richtig viele Angebote, die sozial orientiert sind, sind ist nicht so doll vorhanden.',
        ],
      },
      {
        categoryId: 2,
        id: 1,
        title: 'Initiativennetzwerke (Hansaforum)',
        quotes: [
          'Gerade was das Hafencenter angeht. Das will das ganze Viertel nicht. Es gibt selten ein Thema, was alle nicht wollen und so knallhart in die Politik getrieben wird. Es ist nur ein einziger Investor und eine Partei, die will, dass das noch gebaut wird und der Rest der Stadt nicht. Keiner will das und da machen sich auch viele Leute für stark. Auch gerade hier im Viertel, da wird es gut vertreten. Da denke ich mittlerweile auch durch das Hansaforum, die B-Side und das Gasometer wird das vertreten.',
          'Wir wissen zumindest, dass es das Hansaforum gibt und wir wissen, wo das Gebäude ist. Wir binden uns nicht wirklich ein, weil wir unsere Sachen zu tun haben. Also wir hatten noch nicht wirklich die Zeit zu. Wenn wir wollten, dann könnten wir. Auch durch das B-Side Festival und es gibt ja auch verschiedene Dinge, die man da machen kann und wir haben ja auch schon Kontakt zu Leuten aus dem Viertel, dass man sich wahrscheinlich mehr engagieren könnte, wenn man wollte.',
          'Es gibt Strukturen und Angebote, wie z.B. das Hansaforum und einige kleinere Akteure, die hier aktiv sind. Das kleine Ostia ist ein bisschen aktiver, das Impulswerk auch, aber so richtig viele Angebote, die sozial orientiert sind, sind ist nicht so doll vorhanden.',
          'Es gibt immer etwas zu verbessern. Es hat ja auch eine Initiative gegeben zum Erhalt dieser Buch-Filiale und das fand ich schon ganz gut. Da war ein konkreter Bedarf da und dann denke ich, dass man dann auch darauf vertrauen kann, dass sich etwas entwickelt, ohne dass so etwas institutionell fundiert werden müsste.',
        ],
      },
      {
        categoryId: 4,
        id: 1,
        title: 'Zivilgesellschaftliche Initiative',
        quotes: [
          'Grundsätzlich habe ich den Eindruck, gerade auch dadurch, dass hier relativ starke zivilgesellschaftliche Strukturen sind mit vielen Initiativen, die auch stadtteilpolitisch aktiv sind. Von daher habe ich schon den Eindruck, dass man da viel machen kann und dass man gute Möglichkeiten hat, sich einzubringen.',
          'Durch das Hansaforum und auch durch die B-Side habe ich den Eindruck, dass das Initiativenfeld pluralistisch ist, dass viel passiert und dass Leute vertreten werden.',
          'It is so nice that we can organize stuff together and talk about important issues and climate. And sometimes I also download “Na dann?” and there is also an app that connects you with your neighborhood. So I am connected to that as well. Sometimes they gather and we do yoga and talk about how we could be more sustainable or separate the trash and sometimes we find important things and remind everyone to separate their trash, so we show all the respect.',
          'Ich wohne hier schon seit 10 Jahren ungefähr. Es wird bei mir ein wenig probiert, eine Viertelinitiative aufzubauen. Was ich am Anfang befremdlich fand, aber ich glaube, dass das Viertel eine Identität bekommen hat und ich mich auch damit identifiziere und so einigermaßen dem Viertel zugehörig fühle.',
        ],
      },
      {
        categoryId: 5,
        id: 1,
        title: 'Gemeinschaftliche Baustrukturen',
        quotes: [
          'Dadurch, dass die Räume nicht so vorhanden sind. Das hat viel mit der baulichen Struktur, wie Wohnen, zu tun. Weil es nicht gemeinschaftlich organisiert ist. Es geht halt kaum. In den Häusern gibt es keine gemeinschaftlichen, sitzbaren Flächen, wo man sich treffen kann.',
          'Es braucht Einfluss daran, dass solche Räume mehr mit eingeplant werden. Dass mehr solcher Räume entstehen, wo man sich ungezwungen treffen kann.',
          'Da ist das Angebot ganz gut, dass man hier auch Hilfe bekommt, wenn man Hilfe sucht.',
        ],
      },
      {
        categoryId: 5,
        id: 2,
        title: 'Diversere Kommunikationswege',
        quotes: [
          'Ich krieg ein Hintergrundrauschen mit, was da z.B. das Hansaforum macht, und und und. Aufgrund meiner Entscheidung, keinen Zugang zu digitalen Medien zu haben, bin ich da auch oft wieder raus. Oder ich erfahre es später, dass irgendwas läuft.',
          'Ich musste bei Barrierefreiheit bisher immer an Rollstuhlfahrer:innen denken. Und da würde ich sagen, dass es nicht barrierefrei ist, auch wegen anderen Hürden. Es gibt zu wenige Kulturvereine, die dafür sorgen, dass Leute verschiedenen Alters und der Querschnitt des Viertels sich begegnen können.',
          'Es gibt zig Viertelfeste oder Grünflächenunterhaltung. Das ist nicht wirklich Hansaviertel. Aber ich finde da gibt es schon relativ viel. Aber man kriegt es nicht wirklich mit. Und dann läuft man vorbei und sieht: “Och guck mal. Heute ist wieder Triathlon und das haste nicht gesehen.“ Das könnte ein wenig besser funktionieren.',
        ],
      },
    ],
  },
];
