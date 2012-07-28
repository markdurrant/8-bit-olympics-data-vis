var events = [
{event: "100m Men", data: {"1896":[{"athlete":"Fritz Hofmann","medal":"SILVER","country":"DEU","time":"12.2 est."},{"athlete":"Alajos Szokolyi","medal":"BRONZE","country":"HUN","time":"12.6 est."},{"athlete":"Tom Burke","medal":"GOLD","country":"USA","time":"12.0"},{"athlete":"Francis Lane","medal":"BRONZE","country":"USA","time":"12.6"}],"1900":[{"athlete":"Walter Tewksbury","medal":"SILVER","country":"USA","time":"11.1"},{"athlete":"Frank Jarvis","medal":"GOLD","country":"USA","time":"11.0"},{"athlete":"Stan Rowley","medal":"BRONZE","country":"AUS","time":"11.2"}],"1904":[{"athlete":"Archie Hahn","medal":"GOLD","country":"USA","time":"11.0"},{"athlete":"Bill Hogenson","medal":"BRONZE","country":"USA","time":"11.2"},{"athlete":"Nate Cartmell","medal":"SILVER","country":"USA","time":"11.2"}],"1906":[{"athlete":"Fay Moulton","medal":"SILVER","country":"USA","time":"11.3"},{"athlete":"Archie Hahn","medal":"GOLD","country":"USA","time":"11.2"},{"athlete":"Nigel Barker","medal":"BRONZE","country":"AUS","time":"11.3"}],"1908":[{"athlete":"Reggie Walker","medal":"GOLD","country":"SAF","time":"10.8"},{"athlete":"Robert Kerr","medal":"BRONZE","country":"CAN","time":"11.0"},{"athlete":"James Rector","medal":"SILVER","country":"USA","time":"10.9"}],"1912":[{"athlete":"Alvah Meyer","medal":"SILVER","country":"USA","time":"10.9"},{"athlete":"Ralph Craig","medal":"GOLD","country":"USA","time":"10.8"},{"athlete":"Donald Lippincott","medal":"BRONZE","country":"USA","time":"10.9"}],"1920":[{"athlete":"Charles Paddock","medal":"GOLD","country":"USA","time":"10.8"},{"athlete":"Harry Edward","medal":"BRONZE","country":"GBR","time":"11.0"},{"athlete":"Morris Kirksey","medal":"SILVER","country":"USA","time":"10.8"}],"1924":[{"athlete":"Jackson Scholz","medal":"SILVER","country":"USA","time":"10.7"},{"athlete":"Harold Abrahams","medal":"GOLD","country":"GBR","time":"10.6"},{"athlete":"Arthur Porritt","medal":"BRONZE","country":"NZL","time":"10.8"}],"1928":[{"athlete":"Percy Williams","medal":"GOLD","country":"CAN","time":"10.8"},{"athlete":"Georg Lammers","medal":"BRONZE","country":"GER","time":"10.9"},{"athlete":"Jack London","medal":"SILVER","country":"GBR","time":"10.9"}],"1932":[{"athlete":"Ralph Metcalfe","medal":"SILVER","country":"USA","time":"10.3"},{"athlete":"Eddie Tolan","medal":"GOLD","country":"USA","time":"10.3"},{"athlete":"Arthur Jonath","medal":"BRONZE","country":"GER","time":"10.4"}],"1936":[{"athlete":"Jesse Owens","medal":"GOLD","country":"USA","time":"10.3"},{"athlete":"Tinus Osendarp","medal":"BRONZE","country":"NED","time":"10.5"},{"athlete":"Ralph Metcalfe","medal":"SILVER","country":"USA","time":"10.4"}],"1948":[{"athlete":"Barney Ewell","medal":"SILVER","country":"USA","time":"10.4"},{"athlete":"Harrison Dillard","medal":"GOLD","country":"USA","time":"10.3"},{"athlete":"Lloyd LaBeach","medal":"BRONZE","country":"PAN","time":"10.4"}],"1952":[{"athlete":"Lindy Remigino","medal":"GOLD","country":"USA","time":"10.4"},{"athlete":"Emmanuel Bailey","medal":"BRONZE","country":"GBR","time":"10.4"},{"athlete":"Herb McKenley","medal":"SILVER","country":"JAM","time":"10.4"}],"1956":[{"athlete":"Thane Baker","medal":"SILVER","country":"USA","time":"10.5"},{"athlete":"Bobby Morrow","medal":"GOLD","country":"USA","time":"10.5"},{"athlete":"Hec Hogan","medal":"BRONZE","country":"AUS","time":"10.6"}],"1960":[{"athlete":"Armin Hary","medal":"GOLD","country":"GER","time":"10.2"},{"athlete":"Peter Radford","medal":"BRONZE","country":"GBR","time":"10.3"},{"athlete":"David Sime","medal":"SILVER","country":"USA","time":"10.2"}],"1964":[{"athlete":"Enrique Figuerola","medal":"SILVER","country":"CUB","time":"10.2"},{"athlete":"Bob Hayes","medal":"GOLD","country":"USA","time":"10.0"},{"athlete":"Harry Jerome","medal":"BRONZE","country":"CAN","time":"10.2"}],"1968":[{"athlete":"Jim Hines","medal":"GOLD","country":"USA","time":"9.95"},{"athlete":"Charlie Greene","medal":"BRONZE","country":"USA","time":"10.0"},{"athlete":"Lennox Miller","medal":"SILVER","country":"JAM","time":"10.0"}],"1972":[{"athlete":"Robert Taylor","medal":"SILVER","country":"USA","time":"10.24"},{"athlete":"Valery Borzov","medal":"GOLD","country":"URS","time":"10.14"},{"athlete":"Lennox Miller","medal":"BRONZE","country":"JAM","time":"10.33"}],"1976":[{"athlete":"Hasely Crawford","medal":"GOLD","country":"TRI","time":"10.06"},{"athlete":"Valery Borzov","medal":"BRONZE","country":"URS","time":"10.14"},{"athlete":"Don Quarrie","medal":"SILVER","country":"JAM","time":"10.08"}],"1980":[{"athlete":"Silvio Leonard","medal":"SILVER","country":"CUB","time":"10.25"},{"athlete":"Allan Wells","medal":"GOLD","country":"GBR","time":"10.25"},{"athlete":"Petar Petrov","medal":"BRONZE","country":"BUL","time":"10.39"}],"1984":[{"athlete":"Carl Lewis","medal":"GOLD","country":"USA","time":"9.99"},{"athlete":"Ben Johnson","medal":"BRONZE","country":"CAN","time":"10.22"},{"athlete":"Sam Graddy","medal":"SILVER","country":"USA","time":"10.19"}],"1988":[{"athlete":"Linford Christie","medal":"SILVER","country":"GBR","time":"9.97"},{"athlete":"Carl Lewis","medal":"GOLD","country":"USA","time":"9.92"},{"athlete":"Calvin Smith","medal":"BRONZE","country":"USA","time":"9.99"}],"1992":[{"athlete":"Linford Christie","medal":"GOLD","country":"GBR","time":"9.96"},{"athlete":"Dennis Mitchell","medal":"BRONZE","country":"USA","time":"10.04"},{"athlete":"Frankie Fredericks","medal":"SILVER","country":"NAM","time":"10.02"}],"1996":[{"athlete":"Frankie Fredericks","medal":"SILVER","country":"NAM","time":"9.89"},{"athlete":"Donovan Bailey","medal":"GOLD","country":"CAN","time":"9.84"},{"athlete":"Ato Boldon","medal":"BRONZE","country":"TRI","time":"9.90"}],"2000":[{"athlete":"Maurice Greene","medal":"GOLD","country":"USA","time":"9.87"},{"athlete":"Obadele Thompson","medal":"BRONZE","country":"BAR","time":"10.04"},{"athlete":"Ato Boldon","medal":"SILVER","country":"TRI","time":"9.99"}],"2004":[{"athlete":"Francis Obikwelu","medal":"SILVER","country":"POR","time":"9.86"},{"athlete":"Justin Gatlin","medal":"GOLD","country":"USA","time":"9.85"},{"athlete":"Maurice Greene","medal":"BRONZE","country":"USA","time":"9.87"}],"2008":[{"athlete":"Usain Bolt","medal":"GOLD","country":"JAM","time":"9.69"},{"athlete":"Walter Dix","medal":"BRONZE","country":"USA","time":"9.91"},{"athlete":"Richard Thompson","medal":"SILVER","country":"TRI","time":"9.89"}]}},
{event: "100m Women", data: {"1928":[{"athlete":"Fanny Rosenfeld","medal":"SILVER","country":"CAN","time":"12.3"},{"athlete":"Elizabeth Robinson","medal":"GOLD","country":"USA","time":"12.2"},{"athlete":"Ethel Smith","medal":"BRONZE","country":"CAN","time":"12.3"}],"1932":[{"athlete":"Stanislawa Walasiewicz","medal":"GOLD","country":"POL","time":"11.9"},{"athlete":"Wilhelmina Von Bremen","medal":"BRONZE","country":"USA","time":"12.0"},{"athlete":"Hilda Strike","medal":"SILVER","country":"CAN","time":"11.9"}],"1936":[{"athlete":"Stanislawa Walasiewicz","medal":"SILVER","country":"POL","time":"11.7"},{"athlete":"Helen Stephens","medal":"GOLD","country":"USA","time":"11.5"},{"athlete":"Käthe Krauß","medal":"BRONZE","country":"GER","time":"11.9"}],"1948":[{"athlete":"Fanny Blankers-Koen","medal":"GOLD","country":"NED","time":"11.9"},{"athlete":"Shirley Strickland","medal":"BRONZE","country":"AUS","time":"12.2"},{"athlete":"Dorothy Manley","medal":"SILVER","country":"GBR","time":"12.2"}],"1952":[{"athlete":"Daphne Hasenjager","medal":"SILVER","country":"SAF","time":"11.8"},{"athlete":"Marjorie Jackson","medal":"GOLD","country":"AUS","time":"11.5"},{"athlete":"Shirley Strickland","medal":"BRONZE","country":"AUS","time":"11.9"}],"1956":[{"athlete":"Betty Cuthbert","medal":"GOLD","country":"AUS","time":"11.5"},{"athlete":"Marlene Mathews","medal":"BRONZE","country":"AUS","time":"11.7"},{"athlete":"Christa Stubnick","medal":"SILVER","country":"GER","time":"11.7"}],"1960":[{"athlete":"Dorothy Hyman","medal":"SILVER","country":"GBR","time":"11.3"},{"athlete":"Wilma Rudolph","medal":"GOLD","country":"USA","time":"11.0"},{"athlete":"Giuseppina Leone","medal":"BRONZE","country":"ITA","time":"11.3"}],"1964":[{"athlete":"Wyomia Tyus","medal":"GOLD","country":"USA","time":"11.4"},{"athlete":"Ewa Klobukowska","medal":"BRONZE","country":"POL","time":"11.6"},{"athlete":"Edith McGuire","medal":"SILVER","country":"USA","time":"11.6"}],"1968":[{"athlete":"Barbara Ferrell","medal":"SILVER","country":"USA","time":"11.1"},{"athlete":"Wyomia Tyus","medal":"GOLD","country":"USA","time":"11.0"},{"athlete":"Irena Szewinska","medal":"BRONZE","country":"POL","time":"11.1"}],"1972":[{"athlete":"Renate Stecher","medal":"GOLD","country":"GDR","time":"11.07"},{"athlete":"Silvia Chivás","medal":"BRONZE","country":"CUB","time":"11.24"},{"athlete":"Raelene Boyle","medal":"SILVER","country":"AUS","time":"11.23"}],"1976":[{"athlete":"Renate Stecher","medal":"SILVER","country":"GDR","time":"11.13"},{"athlete":"Annegret Richter","medal":"GOLD","country":"FRG","time":"11.08"},{"athlete":"Inge Helten","medal":"BRONZE","country":"FRG","time":"11.17"}],"1980":[{"athlete":"Lyudmila Kondratyeva","medal":"GOLD","country":"URS","time":"11.06"},{"athlete":"Ingrid Lange-Auerswald","medal":"BRONZE","country":"GDR","time":"11.14"},{"athlete":"Marlies Göhr-Oelsner","medal":"SILVER","country":"GDR","time":"11.07"}],"1984":[{"athlete":"Alice Brown","medal":"SILVER","country":"USA","time":"11.13"},{"athlete":"Evelyn Ashford","medal":"GOLD","country":"USA","time":"10.97"},{"athlete":"Merlene Ottey-Page","medal":"BRONZE","country":"JAM","time":"11.16"}],"1988":[{"athlete":"Florence Griffith-Joyner","medal":"GOLD","country":"USA","time":"10.54"},{"athlete":"Heike Drechsler","medal":"BRONZE","country":"GDR","time":"10.85"},{"athlete":"Evelyn Ashford","medal":"SILVER","country":"USA","time":"10.83"}],"1992":[{"athlete":"Juliet Cuthbert","medal":"SILVER","country":"JAM","time":"10.83"},{"athlete":"Gail Devers","medal":"GOLD","country":"USA","time":"10.82"},{"athlete":"Irina Privalova","medal":"BRONZE","country":"URS","time":"10.84"}],"1996":[{"athlete":"Gail Devers","medal":"GOLD","country":"USA","time":"10.94"},{"athlete":"Gwen Torrence","medal":"BRONZE","country":"USA","time":"10.96"},{"athlete":"Merlene Ottey-Page","medal":"SILVER","country":"JAM","time":"10.94"}],"2000":[{"athlete":"Tanya Lawrence","medal":"SILVER","country":"JAM","time":"11.18"},{"athlete":"Ekaterini Thanou","medal":"GOLD","country":"GRE","time":"11.12"},{"athlete":"Merlene Ottey-Page","medal":"BRONZE","country":"JAM","time":""}],"2004":[{"athlete":"Yuliya Nesterenko","medal":"GOLD","country":"BLR","time":"10.93"},{"athlete":"Veronica Campbell","medal":"BRONZE","country":"JAM","time":"10.97"},{"athlete":"Lauryn Williams","medal":"SILVER","country":"USA","time":"10.96"}],"2008":[{"athlete":"Sherone Simpson","medal":"SILVER","country":"JAM","time":"10.98"},{"athlete":"Shelly-Ann Fraser","medal":"GOLD","country":"JAM","time":"10.78"},{"athlete":"Kerron Stewart","medal":"SILVER","country":"JAM","time":"10.98"}]}},
{event: "200m Men", data: {"1900":[{"athlete":"Norman Pritchard","medal":"SILVER","country":"BIN","time":"22.8"},{"athlete":"Walter Tewksbury","medal":"GOLD","country":"USA","time":"22.2"},{"athlete":"Stan Rowley","medal":"BRONZE","country":"AUS","time":"22.9"}],"1904":[{"athlete":"Archie Hahn","medal":"GOLD","country":"USA","time":"21.6"},{"athlete":"Bill Hogenson","medal":"BRONZE","country":"USA","time":"dna."},{"athlete":"Nate Cartmell","medal":"SILVER","country":"USA","time":"21.9"}],"1908":[{"athlete":"Robert Cloughen","medal":"SILVER","country":"USA","time":"22.6"},{"athlete":"Robert Kerr","medal":"GOLD","country":"CAN","time":"22.6"},{"athlete":"Nate Cartmell","medal":"BRONZE","country":"USA","time":"22.7"}],"1912":[{"athlete":"Ralph Craig","medal":"GOLD","country":"USA","time":"21.7"},{"athlete":"Willie Applegarth","medal":"BRONZE","country":"GBR","time":"22.0"},{"athlete":"Donald Lippincott","medal":"SILVER","country":"USA","time":"21.8"}],"1920":[{"athlete":"Charles Paddock","medal":"SILVER","country":"USA","time":"22.1"},{"athlete":"Allen Woodring","medal":"GOLD","country":"USA","time":"22.0"},{"athlete":"Harry Edward","medal":"BRONZE","country":"GBR","time":"22.2"}],"1924":[{"athlete":"Jackson Scholz","medal":"GOLD","country":"USA","time":"21.6"},{"athlete":"Eric Liddell","medal":"BRONZE","country":"GBR","time":"21.9"},{"athlete":"Charles Paddock","medal":"SILVER","country":"USA","time":"21.7"}],"1928":[{"athlete":"Walter Rangeley","medal":"SILVER","country":"GBR","time":"21.9"},{"athlete":"Percy Williams","medal":"GOLD","country":"CAN","time":"21.8"},{"athlete":"Helmuth Körnig","medal":"BRONZE","country":"GER","time":"21.9"}],"1932":[{"athlete":"Eddie Tolan","medal":"GOLD","country":"USA","time":"21.2"},{"athlete":"Ralph Metcalfe","medal":"BRONZE","country":"USA","time":"21.5"},{"athlete":"George Simpson","medal":"SILVER","country":"USA","time":"21.4"}],"1936":[{"athlete":"Mack Robinson","medal":"SILVER","country":"USA","time":"21.1"},{"athlete":"Jesse Owens","medal":"GOLD","country":"USA","time":"20.7"},{"athlete":"Tinus Osendarp","medal":"BRONZE","country":"NED","time":"21.3"}],"1948":[{"athlete":"Melvin Patton","medal":"GOLD","country":"USA","time":"21.1"},{"athlete":"Lloyd LaBeach","medal":"BRONZE","country":"PAN","time":"21.2"},{"athlete":"Barney Ewell","medal":"SILVER","country":"USA","time":"21.1"}],"1952":[{"athlete":"Thane Baker","medal":"SILVER","country":"USA","time":"20.8"},{"athlete":"Andy Stanfield","medal":"GOLD","country":"USA","time":"20.7"},{"athlete":"James Gathers","medal":"BRONZE","country":"USA","time":"20.8"}],"1956":[{"athlete":"Bobby Morrow","medal":"GOLD","country":"USA","time":"20.6"},{"athlete":"Thane Baker","medal":"BRONZE","country":"USA","time":"20.9"},{"athlete":"Andy Stanfield","medal":"SILVER","country":"USA","time":"20.7"}],"1960":[{"athlete":"Les Carney","medal":"SILVER","country":"USA","time":"20.6"},{"athlete":"Livio Berruti","medal":"GOLD","country":"ITA","time":"20.5"},{"athlete":"Abdoulaye Seye","medal":"BRONZE","country":"FRA","time":"20.7"}],"1964":[{"athlete":"Henry Carr","medal":"GOLD","country":"USA","time":"20.3"},{"athlete":"Edwin Roberts","medal":"BRONZE","country":"TRI","time":"20.6"},{"athlete":"Paul Drayton","medal":"SILVER","country":"USA","time":"20.5"}],"1968":[{"athlete":"Peter Norman","medal":"SILVER","country":"AUS","time":"20.0"},{"athlete":"Tommie Smith","medal":"GOLD","country":"USA","time":"19.8"},{"athlete":"John Carlos","medal":"BRONZE","country":"USA","time":"20.0"}],"1972":[{"athlete":"Valery Borzov","medal":"GOLD","country":"URS","time":"20.00"},{"athlete":"Pietro Mennea","medal":"BRONZE","country":"ITA","time":"20.30"},{"athlete":"Larry Black","medal":"SILVER","country":"USA","time":"20.19"}],"1976":[{"athlete":"Millard Hampton","medal":"SILVER","country":"USA","time":"20.29"},{"athlete":"Don Quarrie","medal":"GOLD","country":"JAM","time":"20.23"},{"athlete":"Dwayne Evans","medal":"BRONZE","country":"USA","time":"20.43"}],"1980":[{"athlete":"Pietro Mennea","medal":"GOLD","country":"ITA","time":"20.19"},{"athlete":"Don Quarrie","medal":"BRONZE","country":"JAM","time":"20.29"},{"athlete":"Allan Wells","medal":"SILVER","country":"GBR","time":"20.21"}],"1984":[{"athlete":"Kirk Baptiste","medal":"SILVER","country":"USA","time":"19.96"},{"athlete":"Carl Lewis","medal":"GOLD","country":"USA","time":"19.80"},{"athlete":"Thomas Jefferson","medal":"BRONZE","country":"USA","time":"20.26"}],"1988":[{"athlete":"Joe DeLoach","medal":"GOLD","country":"USA","time":"19.75"},{"athlete":"Robson da Silva","medal":"BRONZE","country":"BRA","time":"20.04"},{"athlete":"Carl Lewis","medal":"SILVER","country":"USA","time":"19.79"}],"1992":[{"athlete":"Frankie Fredericks","medal":"SILVER","country":"NAM","time":"20.13"},{"athlete":"Mike Marsh","medal":"GOLD","country":"USA","time":"20.01"},{"athlete":"Michael Bates","medal":"BRONZE","country":"USA","time":"20.38"}],"1996":[{"athlete":"Michael Johnson","medal":"GOLD","country":"USA","time":"19.32"},{"athlete":"Ato Boldon","medal":"BRONZE","country":"TRI","time":"19.80"},{"athlete":"Frankie Fredericks","medal":"SILVER","country":"NAM","time":"19.68"}],"2000":[{"athlete":"Darren Campbell","medal":"SILVER","country":"GBR","time":"20.14"},{"athlete":"Konstantinos Kenteris","medal":"GOLD","country":"GRE","time":"20.09"},{"athlete":"Ato Boldon","medal":"BRONZE","country":"TRI","time":"20.20"}],"2004":[{"athlete":"Shawn Crawford","medal":"GOLD","country":"USA","time":"19.79"},{"athlete":"Justin Gatlin","medal":"BRONZE","country":"USA","time":"20.03"},{"athlete":"Bernard Williams III","medal":"SILVER","country":"USA","time":"20.01"}],"2008":[{"athlete":"Shawn Crawford","medal":"SILVER","country":"USA","time":"19.96"},{"athlete":"Usain Bolt","medal":"GOLD","country":"JAM","time":"19.3"},{"athlete":"Walter Dix","medal":"BRONZE","country":"USA","time":"19.98"}]}},
{event: "200m Women", data: {"1948":[{"athlete":"Audrey Williamson","medal":"SILVER","country":"GBR","time":"25.1"},{"athlete":"Shirley Strickland","medal":"BRONZE","country":"AUS","time":""},{"athlete":"Fanny Blankers-Koen","medal":"GOLD","country":"NED","time":"24.4"},{"athlete":"Audrey Patterson","medal":"BRONZE","country":"USA","time":"25.2"}],"1952":[{"athlete":"Bertha Brouwer","medal":"SILVER","country":"NED","time":"24.2"},{"athlete":"Marjorie Jackson","medal":"GOLD","country":"AUS","time":"23.7"},{"athlete":"Nadezhda Khnykina","medal":"BRONZE","country":"URS","time":"24.2"}],"1956":[{"athlete":"Betty Cuthbert","medal":"GOLD","country":"AUS","time":"23.4"},{"athlete":"Marlene Mathews","medal":"BRONZE","country":"AUS","time":"23.8"},{"athlete":"Christa Stubnick","medal":"SILVER","country":"GER","time":"23.7"}],"1960":[{"athlete":"Jutta Heine","medal":"SILVER","country":"GER","time":"24.4"},{"athlete":"Wilma Rudolph","medal":"GOLD","country":"USA","time":"24.0"},{"athlete":"Dorothy Hyman","medal":"BRONZE","country":"GBR","time":"24.7"}],"1964":[{"athlete":"Edith McGuire","medal":"GOLD","country":"USA","time":"23.0"},{"athlete":"Marilyn Black","medal":"BRONZE","country":"AUS","time":"23.1"},{"athlete":"Irena Szewinska","medal":"SILVER","country":"POL","time":"23.1"}],"1968":[{"athlete":"Raelene Boyle","medal":"SILVER","country":"AUS","time":"22.7"},{"athlete":"Irena Szewinska","medal":"GOLD","country":"POL","time":"22.5"},{"athlete":"Jennifer Lamy","medal":"BRONZE","country":"AUS","time":"22.8"}],"1972":[{"athlete":"Renate Stecher","medal":"GOLD","country":"GDR","time":"22.40"},{"athlete":"Irena Szewinska","medal":"BRONZE","country":"POL","time":"22.74"},{"athlete":"Raelene Boyle","medal":"SILVER","country":"AUS","time":"22.45"}],"1976":[{"athlete":"Annegret Richter","medal":"SILVER","country":"FRG","time":"22.39"},{"athlete":"Bärbel Wöckel-Eckert","medal":"GOLD","country":"GDR","time":"22.37"},{"athlete":"Renate Stecher","medal":"BRONZE","country":"GDR","time":"22.47"}],"1980":[{"athlete":"Bärbel Wöckel-Eckert","medal":"GOLD","country":"GDR","time":"22.03"},{"athlete":"Merlene Ottey-Page","medal":"BRONZE","country":"JAM","time":"22.20"},{"athlete":"Natalya Bochina","medal":"SILVER","country":"URS","time":"22.19"}],"1984":[{"athlete":"Florence Griffith-Joyner","medal":"SILVER","country":"USA","time":"22.04"},{"athlete":"Valerie Brisco-Hooks","medal":"GOLD","country":"USA","time":"21.81"},{"athlete":"Merlene Ottey-Page","medal":"BRONZE","country":"JAM","time":"22.09"}],"1988":[{"athlete":"Florence Griffith-Joyner","medal":"GOLD","country":"USA","time":"21.34"},{"athlete":"Heike Drechsler","medal":"BRONZE","country":"GDR","time":"21.95"},{"athlete":"Grace Jackson","medal":"SILVER","country":"JAM","time":"21.72"}],"1992":[{"athlete":"Juliet Cuthbert","medal":"SILVER","country":"JAM","time":"22.02"},{"athlete":"Gwen Torrence","medal":"GOLD","country":"USA","time":"21.81"},{"athlete":"Merlene Ottey-Page","medal":"BRONZE","country":"JAM","time":"22.09"}],"1996":[{"athlete":"Marie-José Pérec","medal":"GOLD","country":"FRA","time":"22.12"},{"athlete":"Mary Onyali","medal":"BRONZE","country":"NGR","time":"22.38"},{"athlete":"Merlene Ottey-Page","medal":"SILVER","country":"JAM","time":"22.24"}],"2000":[{"athlete":"Susanthika Jayasinghe","medal":"SILVER","country":"SRI","time":"22.28"},{"athlete":"Pauline Davis-Thompson","medal":"GOLD","country":"BAH","time":"22.27"},{"athlete":"Beverly McDonald","medal":"BRONZE","country":"JAM","time":"22.35"}],"2004":[{"athlete":"Veronica Campbell","medal":"GOLD","country":"JAM","time":"22.05"},{"athlete":"Debbie Ferguson","medal":"BRONZE","country":"BAH","time":"22.30"},{"athlete":"Allyson Felix","medal":"SILVER","country":"USA","time":"22.18"}],"2008":[{"athlete":"Allyson Felix","medal":"SILVER","country":"USA","time":"21.93"},{"athlete":"Veronica Campbell","medal":"GOLD","country":"JAM","time":"21.74"},{"athlete":"Kerron Stewart","medal":"BRONZE","country":"JAM","time":"22.00"}]}},
{event: "400m Men", data: {"1896":[{"athlete":"Herbert Jamison","medal":"SILVER","country":"USA","time":"n/a"},{"athlete":"Tom Burke","medal":"GOLD","country":"USA","time":"54.2"},{"athlete":"Charles Gmelin","medal":"BRONZE","country":"GBR","time":"n/a"}],"1900":[{"athlete":"Maxey Long","medal":"GOLD","country":"USA","time":"49.4"},{"athlete":"Ernst Schultz","medal":"BRONZE","country":"DEN","time":"n/a"},{"athlete":"William Holland","medal":"SILVER","country":"USA","time":"49.6"}],"1904":[{"athlete":"Frank Waller","medal":"SILVER","country":"USA","time":"49.9"},{"athlete":"Harry Hillman","medal":"GOLD","country":"USA","time":"49.2"},{"athlete":"Herman Groman","medal":"BRONZE","country":"USA","time":"50.0"}],"1906":[{"athlete":"Paul Pilgrim","medal":"GOLD","country":"USA","time":"53.2"},{"athlete":"Nigel Barker","medal":"BRONZE","country":"AUS","time":"54.1"},{"athlete":"Wyndham Halswelle","medal":"SILVER","country":"GBR","time":"53.8"}],"1912":[{"athlete":"Charles Reidpath","medal":"GOLD","country":"USA","time":"48.2"},{"athlete":"Edward Lindberg","medal":"BRONZE","country":"USA","time":"48.4"},{"athlete":"Hanns Braun","medal":"SILVER","country":"DEU","time":"48.3"}],"1920":[{"athlete":"Guy Butler","medal":"SILVER","country":"GBR","time":"49.9"},{"athlete":"Bevil Rudd","medal":"GOLD","country":"SAF","time":"49.6"},{"athlete":"Nils Engdahl","medal":"BRONZE","country":"SWE","time":"49.9"}],"1924":[{"athlete":"Eric Liddell","medal":"GOLD","country":"GBR","time":"47.6"},{"athlete":"Guy Butler","medal":"BRONZE","country":"GBR","time":"48.6"},{"athlete":"Horatio Fitch","medal":"SILVER","country":"USA","time":"48.4"}],"1928":[{"athlete":"James Ball","medal":"SILVER","country":"CAN","time":"48.0"},{"athlete":"Raymond Barbuti","medal":"GOLD","country":"USA","time":"47.8"},{"athlete":"Joachim Büchner","medal":"BRONZE","country":"GER","time":"48.2"}],"1932":[{"athlete":"Bill Carr","medal":"GOLD","country":"USA","time":"46.2"},{"athlete":"Alexander Wilson","medal":"BRONZE","country":"CAN","time":"47.4"},{"athlete":"Ben Eastman","medal":"SILVER","country":"USA","time":"46.4"}],"1936":[{"athlete":"Godfrey Brown","medal":"SILVER","country":"GBR","time":"46.7"},{"athlete":"Archie Williams","medal":"GOLD","country":"USA","time":"46.5"},{"athlete":"James LuValle","medal":"BRONZE","country":"USA","time":"46.8"}],"1948":[{"athlete":"Arthur Wint","medal":"GOLD","country":"JAM","time":"46.2"},{"athlete":"Mal Whitfield","medal":"BRONZE","country":"USA","time":"46.9"},{"athlete":"Herb McKenley","medal":"SILVER","country":"JAM","time":"46.4"}],"1952":[{"athlete":"Herb McKenley","medal":"SILVER","country":"JAM","time":"45.9"},{"athlete":"George Rhoden","medal":"GOLD","country":"JAM","time":"45.9"},{"athlete":"Ollie Matson","medal":"BRONZE","country":"USA","time":"46.8"}],"1956":[{"athlete":"Charles Jenkins","medal":"GOLD","country":"USA","time":"46.7"},{"athlete":"Voitto Hellstén","medal":"BRONZE","country":"FIN","time":"47.0"},{"athlete":"Karl-Friedrich Haas","medal":"SILVER","country":"GER","time":"46.8"},{"athlete":"Ardalion Ignatyev","medal":"BRONZE","country":"URS","time":"47.0"}],"1960":[{"athlete":"Otis Davis","medal":"GOLD","country":"USA","time":"44.9"},{"athlete":"Malcolm Spence","medal":"BRONZE","country":"SAF","time":"45.5"},{"athlete":"Carl Kaufmann","medal":"SILVER","country":"GER","time":"44.9"}],"1964":[{"athlete":"Wendell Mottley","medal":"SILVER","country":"TRI","time":"45.2"},{"athlete":"Michael Larrabee","medal":"GOLD","country":"USA","time":"45.1"},{"athlete":"Andrzej Badewski","medal":"BRONZE","country":"POL","time":"45.6"}],"1968":[{"athlete":"Lee Evans","medal":"GOLD","country":"USA","time":"43.8"},{"athlete":"Ron Freeman","medal":"BRONZE","country":"USA","time":"44.4"},{"athlete":"Larry James","medal":"SILVER","country":"USA","time":"43.9"}],"1972":[{"athlete":"Wayne Collett","medal":"SILVER","country":"USA","time":"44.80"},{"athlete":"Vincent Matthews","medal":"GOLD","country":"USA","time":"44.66"},{"athlete":"Julius Sang","medal":"BRONZE","country":"KEN","time":"44.92"}],"1976":[{"athlete":"Alberto Juantorena","medal":"GOLD","country":"CUB","time":"44.26"},{"athlete":"Herman Frazier","medal":"BRONZE","country":"USA","time":"44.95"},{"athlete":"Fred Newhouse","medal":"SILVER","country":"USA","time":"44.40"}],"1980":[{"athlete":"Rick Mitchell","medal":"SILVER","country":"AUS","time":"44.84"},{"athlete":"Viktor Markin","medal":"GOLD","country":"URS","time":"44.60"},{"athlete":"Frank Schaffer","medal":"BRONZE","country":"GDR","time":"44.87"}],"1984":[{"athlete":"Alonzo Babers","medal":"GOLD","country":"USA","time":"44.27"},{"athlete":"Antonio McKay","medal":"BRONZE","country":"USA","time":"44.71"},{"athlete":"Gabriel Tiacoh","medal":"SILVER","country":"CIV","time":"44.54"}],"1988":[{"athlete":"Butch Reynolds","medal":"SILVER","country":"USA","time":"43.93"},{"athlete":"Steve Lewis","medal":"GOLD","country":"USA","time":"43.87"},{"athlete":"Danny Everett","medal":"BRONZE","country":"USA","time":"44.09"}],"1992":[{"athlete":"Quincy Watts","medal":"GOLD","country":"USA","time":"43.50"},{"athlete":"Samson Kitur","medal":"BRONZE","country":"KEN","time":"44.24"},{"athlete":"Steve Lewis","medal":"SILVER","country":"USA","time":"44.21"}],"1996":[{"athlete":"Roger Black","medal":"SILVER","country":"GBR","time":"44.41"},{"athlete":"Michael Johnson","medal":"GOLD","country":"USA","time":"43.49"},{"athlete":"Davis Kamoga","medal":"BRONZE","country":"UGA","time":"44.53"}],"2000":[{"athlete":"Michael Johnson","medal":"GOLD","country":"USA","time":"43.84"},{"athlete":"Greg Haughton","medal":"BRONZE","country":"JAM","time":"44.70"},{"athlete":"Alvin Harrison","medal":"SILVER","country":"USA","time":"44.40"}],"2004":[{"athlete":"Otis Harris Jr","medal":"SILVER","country":"USA","time":"44.16"},{"athlete":"Jeremy Wariner","medal":"GOLD","country":"USA","time":"44.00"},{"athlete":"Derrick Brew","medal":"BRONZE","country":"USA","time":"44.42"}],"2008":[{"athlete":"LaShawn Merritt","medal":"GOLD","country":"USA","time":"43.75"},{"athlete":"David Neville","medal":"BRONZE","country":"USA","time":"44.8"},{"athlete":"Jeremy Wariner","medal":"SILVER","country":"USA","time":"44.74"}],"1908":[{"athlete":"Wyndham Halswelle","medal":"GOLD","country":"GBR","time":"50.0"}]}},
{event: "400m Women", data: {"1964":[{"athlete":"Ann Packer","medal":"SILVER","country":"GBR","time":"52.2"},{"athlete":"Betty Cuthbert","medal":"GOLD","country":"AUS","time":"52.0"},{"athlete":"Judith Amoore","medal":"BRONZE","country":"AUS","time":"53.4"}],"1968":[{"athlete":"Colette Besson","medal":"GOLD","country":"FRA","time":"52.0"},{"athlete":"Natalya Pechenkina","medal":"BRONZE","country":"URS","time":"52.2"},{"athlete":"Lillian Board","medal":"SILVER","country":"GBR","time":"52.1"}],"1972":[{"athlete":"Rita Wilden","medal":"SILVER","country":"FRG","time":"51.21"},{"athlete":"Monika Zehrt","medal":"GOLD","country":"GDR","time":"51.08"},{"athlete":"Kathy Hammond","medal":"BRONZE","country":"USA","time":"51.64"}],"1976":[{"athlete":"Irena Szewinska","medal":"GOLD","country":"POL","time":"49.29"},{"athlete":"Ellen Streidt","medal":"BRONZE","country":"GDR","time":"50.55"},{"athlete":"Christina Lathan-Brehmer","medal":"SILVER","country":"GDR","time":"50.51"}],"1980":[{"athlete":"Jarmila Kratochvílová","medal":"SILVER","country":"CZE","time":"49.46"},{"athlete":"Marita Koch","medal":"GOLD","country":"GDR","time":"48.88"},{"athlete":"Christina Lathan-Brehmer","medal":"BRONZE","country":"GDR","time":"49.66"}],"1984":[{"athlete":"Valerie Brisco-Hooks","medal":"GOLD","country":"USA","time":"48.83"},{"athlete":"Kathryn Smallwood-Cook","medal":"BRONZE","country":"GBR","time":"49.42"},{"athlete":"Chandra Cheeseborough","medal":"SILVER","country":"USA","time":"49.05"}],"1988":[{"athlete":"Petra Müller","medal":"SILVER","country":"GDR","time":"49.45"},{"athlete":"Olga Bryzgina","medal":"GOLD","country":"URS","time":"48.65"},{"athlete":"Olga Nazarova","medal":"BRONZE","country":"URS","time":"49.90"}],"1992":[{"athlete":"Marie-José Pérec","medal":"GOLD","country":"FRA","time":"48.83"},{"athlete":"Ximena Restrepo","medal":"BRONZE","country":"COL","time":"49.64"},{"athlete":"Olga Bryzgina","medal":"SILVER","country":"URS","time":"49.05"}],"1996":[{"athlete":"Cathy Freeman","medal":"SILVER","country":"AUS","time":"48.63"},{"athlete":"Marie-José Pérec","medal":"GOLD","country":"FRA","time":"48.25"},{"athlete":"Falilat Ogunkoya","medal":"BRONZE","country":"NGR","time":"49.10"}],"2000":[{"athlete":"Cathy Freeman","medal":"GOLD","country":"AUS","time":"49.11"},{"athlete":"Katharine Merry","medal":"BRONZE","country":"GBR","time":"49.72"},{"athlete":"Lorraine Graham","medal":"SILVER","country":"JAM","time":"49.58"}],"2004":[{"athlete":"Ana Guevara","medal":"SILVER","country":"MEX","time":"49.56"},{"athlete":"Tonique Williams-Darling","medal":"GOLD","country":"BAH","time":"49.41"},{"athlete":"Natalia Antyukh","medal":"BRONZE","country":"RUS","time":"49.89"}],"2008":[{"athlete":"Christine Ohuruogu","medal":"GOLD","country":"GBR","time":"49.62"},{"athlete":"Sanya Richards","medal":"BRONZE","country":"USA","time":"49.93"},{"athlete":"Shericka Williams","medal":"SILVER","country":"JAM","time":"49.69"}]}},
]