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
          'Es gibt Strukturen und Angebote, wie z.B. das Hansaforum und einige kleinere Akteure, die hier aktiv sind. Das kleine Ostia ist ein bisschen aktiver, Impulswerk auch, aber so richtig viele Angebote, die sozial orientiert sind, sind nicht so doll vorhanden.',
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
