//import bcrypt
const bcrypt = require ('bcrypt');

exports.seed = function(knex) {
  
      return knex('posts').insert([{
        "id": 1,
        "title": "Altamira",
        "text_entry": "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
        "created_at": "07-23-2016",
        "user_id": 2
      }, {
        "id": 2,
        "title": "Conchopata",
        "text_entry": "sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer",
        "created_at": "02-13-2018",
        "user_id": 2
      }, {
        "id": 3,
        "title": "Liuji",
        "text_entry": "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh",
        "created_at": "07-26-2016",
        "user_id": 1
      }, {
        "id": 4,
        "title": "Ialoveni",
        "text_entry": "semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci",
        "created_at": "12-18-2015",
        "user_id": 1
      }, {
        "id": 5,
        "title": "Upata",
        "text_entry": "nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla",
        "created_at": "02-08-2016",
        "user_id": 2
      }, {
        "id": 6,
        "title": "Hujiaba",
        "text_entry": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla",
        "created_at": "02-15-2017",
        "user_id": 3
      }, {
        "id": 7,
        "title": "Capitán Bermúdez",
        "text_entry": "ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
        "created_at": "10-29-2016",
        "user_id": 3
      }, {
        "id": 8,
        "title": "Emiliano Zapata",
        "text_entry": "sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla",
        "created_at": "11-10-2015",
        "user_id": 1
      }, {
        "id": 9,
        "title": "Tambakbaya",
        "text_entry": "tempus vivamus in felis eu sapien cursus vestibulum proin eu mi",
        "created_at": "05-20-2017",
        "user_id": 3
      }, {
        "id": 10,
        "title": "Trąbki",
        "text_entry": "justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem",
        "created_at": "12-04-2017",
        "user_id": 2
      }, {
        "id": 11,
        "title": "Pančevo",
        "text_entry": "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis",
        "created_at": "07-29-2019",
        "user_id": 1
      }, {
        "id": 12,
        "title": "Quận Tân Phú",
        "text_entry": "magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
        "created_at": "02-15-2018",
        "user_id": 3
      }, {
        "id": 13,
        "title": "Lębork",
        "text_entry": "eleifend donec ut dolor morbi vel lectus in quam fringilla",
        "created_at": "03-04-2019",
        "user_id": 1
      }, {
        "id": 14,
        "title": "Haapsalu",
        "text_entry": "vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
        "created_at": "07-05-2018",
        "user_id": 3
      }, {
        "id": 15,
        "title": "Lavras da Mangabeira",
        "text_entry": "sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
        "created_at": "02-05-2017",
        "user_id": 2
      }, {
        "id": 16,
        "title": "Begejci",
        "text_entry": "scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum",
        "created_at": "12-14-2015",
        "user_id": 3
      }, {
        "id": 17,
        "title": "Borzechów",
        "text_entry": "non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus",
        "created_at": "09-26-2017",
        "user_id": 2
      }, {
        "id": 18,
        "title": "Quixadá",
        "text_entry": "lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
        "created_at": "08-29/2018",
        "user_id": 2
      }, {
        "id": 19,
        "title": "Helixi",
        "text_entry": "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus",
        "created_at": "07-30-2017",
        "user_id": 2
      }, {
        "id": 20,
        "title": "Santo Tomas",
        "text_entry": "porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at",
        "created_at": "04-02-2018",
        "user_id": 3
      }, {
        "id": 21,
        "title": "Xilaiqiao",
        "text_entry": "mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
        "created_at": "12-31-2015",
        "user_id": 1
      }, {
        "id": 22,
        "title": "Largo",
        "text_entry": "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis",
        "created_at": "02-06-2017",
        "user_id": 3
      }, {
        "id": 23,
        "title": "Jawa",
        "text_entry": "eget vulputate ut ultrices vel augue vestibulum ante ipsum primis",
        "created_at": "12-04-2018",
        "user_id": 1
      }, {
        "id": 24,
        "title": "Corinto",
        "text_entry": "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue",
        "created_at": "12-26-2015",
        "user_id": 3
      }, {
        "id": 25,
        "title": "Lanhas",
        "text_entry": "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet",
        "created_at": "11-12-2018",
        "user_id": 1
      }, {
        "id": 26,
        "title": "Chichigalpa",
        "text_entry": "donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed",
        "created_at": "08-03-2018",
        "user_id": 2
      }, {
        "id": 27,
        "title": "Jimo",
        "text_entry": "in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat",
        "created_at": "07-20-2016",
        "user_id": 3
      }, {
        "id": 28,
        "title": "Phoenix",
        "text_entry": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit",
        "created_at": "09-08-2017",
        "user_id": 2
      }, {
        "id": 29,
        "title": "Infonavit",
        "text_entry": "interdum venenatis turpis enim blandit mi in porttitor pede justo",
        "created_at": "10-01-2017",
        "user_id": 2
      }, {
        "id": 30,
        "title": "Azul",
        "text_entry": "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra",
        "created_at": "01-02-2017",
        "user_id": 3
      }, {
        "id": 31,
        "title": "Helsingborg",
        "text_entry": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
        "created_at": "07-28-2017",
        "user_id": 1
      }, {
        "id": 32,
        "title": "Dingjiaqiao",
        "text_entry": "lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
        "created_at": "05-10-2018",
        "user_id": 2
      }, {
        "id": 33,
        "title": "Huadi",
        "text_entry": "vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
        "created_at": "11-28-2017",
        "user_id": 3
      }, {
        "id": 34,
        "title": "Komiža",
        "text_entry": "convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id",
        "created_at": "08-27-2016",
        "user_id": 2
      }, {
        "id": 35,
        "title": "Arlington",
        "text_entry": "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate",
        "created_at": "11-09-2015",
        "user_id": 1
      }, {
        "id": 36,
        "title": "Ribafria",
        "text_entry": "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla",
        "created_at": "10-17-2018",
        "user_id": 1
      }, {
        "id": 37,
        "title": "Abaetetuba",
        "text_entry": "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a",
        "created_at": "04-12-2017",
        "user_id": 1
      }, {
        "id": 38,
        "title": "Jugezhuang",
        "text_entry": "ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere",
        "created_at": "10-06-2017",
        "user_id": 3
      }, {
        "id": 39,
        "title": "Ubon Ratchathani",
        "text_entry": "diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis",
        "created_at": "12-02-2016",
        "user_id": 1
      }, {
        "id": 40,
        "title": "Jieting",
        "text_entry": "integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla",
        "created_at": "04-17-2016",
        "user_id": 2
      }, {
        "id": 41,
        "title": "Faisalābād",
        "text_entry": "diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
        "created_at": "03-19-2017",
        "user_id": 2
      }, {
        "id": 42,
        "title": "Barreiras",
        "text_entry": "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend",
        "created_at": "11-08-2018",
        "user_id": 1
      }, {
        "id": 43,
        "title": "Hino",
        "text_entry": "et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
        "created_at": "09-26-2018",
        "user_id": 1
      }, {
        "id": 44,
        "title": "Sollebrunn",
        "text_entry": "curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor",
        "created_at": "03-15-2017",
        "user_id": 1
      }, {
        "id": 45,
        "title": "Bratislava",
        "text_entry": "tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis",
        "created_at": "02-10-2018",
        "user_id": 3
      }, {
        "id": 46,
        "title": "Xagmakajor",
        "text_entry": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla",
        "created_at": "02-23-2018",
        "user_id": 3
      }, {
        "id": 47,
        "title": "Lunsar",
        "text_entry": "blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue",
        "created_at": "07-13-2018",
        "user_id": 1
      }, {
        "id": 48,
        "title": "Sungi Liput",
        "text_entry": "pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",
        "created_at": "12-21-2018",
        "user_id": 3
      }, {
        "id": 49,
        "title": "Netishyn",
        "text_entry": "hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate",
        "created_at": "05-31-2019",
        "user_id": 2
      }, {
        "id": 50,
        "title": "Mooirivier",
        "text_entry": "orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a",
        "created_at": "11-04-2018",
        "user_id": 2
      }, {
        "id": 51,
        "title": "Antabamba",
        "text_entry": "nunc purus phasellus in felis donec semper sapien a libero nam dui proin",
        "created_at": "08-13-2016",
        "user_id": 3
      }, {
        "id": 52,
        "title": "Monte",
        "text_entry": "quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a",
        "created_at": "05-03-2018",
        "user_id": 3
      }, {
        "id": 53,
        "title": "Bascaron",
        "text_entry": "nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna",
        "created_at": "10-12-2016",
        "user_id": 1
      }, {
        "id": 54,
        "title": "Guankou",
        "text_entry": "leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum",
        "created_at": "10-12-2017",
        "user_id": 2
      }, {
        "id": 55,
        "title": "Papágou",
        "text_entry": "interdum venenatis turpis enim blandit mi in porttitor pede justo",
        "created_at": "06-13-2017",
        "user_id": 1
      }, {
        "id": 56,
        "title": "Novotroitsk",
        "text_entry": "tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
        "created_at": "11-07-2015",
        "user_id": 3
      }, {
        "id": 57,
        "title": "Kwatarkwashi",
        "text_entry": "at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci",
        "created_at": "05-19-2017",
        "user_id": 1
      }, {
        "id": 58,
        "title": "Emiliano Zapata",
        "text_entry": "sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor",
        "created_at": "03-14-2017",
        "user_id": 2
      }, {
        "id": 59,
        "title": "Kuishan",
        "text_entry": "amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in",
        "created_at": "07-14-2018",
        "user_id": 2
      }, {
        "id": 60,
        "title": "Luodong",
        "text_entry": "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non",
        "created_at": "05-20-2019",
        "user_id": 1
      }, {
        "id": 61,
        "title": "Propriá",
        "text_entry": "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum",
        "created_at": "12-27-2016",
        "user_id": 3
      }, {
        "id": 62,
        "title": "Badar",
        "text_entry": "blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus",
        "created_at": "01-03-2017",
        "user_id": 1
      }, {
        "id": 63,
        "title": "Khakhea",
        "text_entry": "potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla",
        "created_at": "01-04-2016",
        "user_id": 1
      }, {
        "id": 64,
        "title": "Sukorambi",
        "text_entry": "vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",
        "created_at": "03-20-2019",
        "user_id": 3
      }, {
        "id": 65,
        "title": "Hamburg",
        "text_entry": "eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus",
        "created_at": "07-28-2017",
        "user_id": 3
      }, {
        "id": 66,
        "title": "Molagavita",
        "text_entry": "lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
        "created_at": "08-29-2018",
        "user_id": 1
      }, {
        "id": 67,
        "title": "Mulhouse",
        "text_entry": "nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum",
        "created_at": "02-24-2016",
        "user_id": 2
      }, {
        "id": 68,
        "title": "Barvinkove",
        "text_entry": "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla",
        "created_at": "03-28-2018",
        "user_id": 2
      }, {
        "id": 69,
        "title": "Catia La Mar",
        "text_entry": "mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin",
        "created_at": "02-22-2019",
        "user_id": 3
      }, {
        "id": 70,
        "title": "Huazangsi",
        "text_entry": "eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
        "created_at": "03-29-2016",
        "user_id": 3
      }, {
        "id": 71,
        "title": "Khadan Khāk",
        "text_entry": "congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
        "created_at": "06-07-2017",
        "user_id": 1
      }, {
        "id": 72,
        "title": "Atbasar",
        "text_entry": "ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac",
        "created_at": "04-11-2016",
        "user_id": 3
      }, {
        "id": 73,
        "title": "Santo Tomás",
        "text_entry": "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque",
        "created_at": "07-13-2018",
        "user_id": 2
      }, {
        "id": 74,
        "title": "Annecy",
        "text_entry": "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo",
        "created_at": "11-11-2018",
        "user_id": 2
      }, {
        "id": 75,
        "title": "Guia",
        "text_entry": "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque",
        "created_at": "10-23-2018",
        "user_id": 1
      }, {
        "id": 76,
        "title": "Hihyā",
        "text_entry": "amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
        "created_at": "03-02-2017",
        "user_id": 3
      }, {
        "id": 77,
        "title": "Huzhuang",
        "text_entry": "eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque",
        "created_at": "12-23-2017",
        "user_id": 3
      }, {
        "id": 78,
        "title": "Launceston",
        "text_entry": "turpis donec posuere metus vitae ipsum aliquam non mauris morbi",
        "created_at": "06-27-2017",
        "user_id": 1
      }, {
        "id": 79,
        "title": "Arísvi",
        "text_entry": "vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas",
        "created_at": "07-13-2017",
        "user_id": 2
      }, {
        "id": 80,
        "title": "Cagmanaba",
        "text_entry": "odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus",
        "created_at": "02-08-2017",
        "user_id": 1
      }, {
        "id": 81,
        "title": "Vilarinho da Castanheira",
        "text_entry": "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere",
        "created_at": "04-18-2017",
        "user_id": 2
      }, {
        "id": 82,
        "title": "Ankola",
        "text_entry": "tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
        "created_at": "06-01-2019",
        "user_id": 1
      }, {
        "id": 83,
        "title": "Boynton Beach",
        "text_entry": "lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a",
        "created_at": "01-12-2019",
        "user_id": 3
      }, {
        "id": 84,
        "title": "Gaio",
        "text_entry": "phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in",
        "created_at": "06-08-2017",
        "user_id": 2
      }, {
        "id": 85,
        "title": "Irbid",
        "text_entry": "dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
        "created_at": "03-29-2016",
        "user_id": 2
      }, {
        "id": 86,
        "title": "Laval",
        "text_entry": "rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan",
        "created_at": "09-20-2016",
        "user_id": 2
      }, {
        "id": 87,
        "title": "Lwengo",
        "text_entry": "augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
        "created_at": "01-05-2016",
        "user_id": 2
      }, {
        "id": 88,
        "title": "Mundão",
        "text_entry": "sollicitudin mi sit amet lobortis sapien sapien non mi integer",
        "created_at": "10-31-2017",
        "user_id": 3
      }, {
        "id": 89,
        "title": "Pakxong",
        "text_entry": "habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
        "created_at": "05-20-2018",
        "user_id": 2
      }, {
        "id": 90,
        "title": "Kungur",
        "text_entry": "massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id",
        "created_at": "09-11-2018",
        "user_id": 1
      }, {
        "id": 91,
        "title": "Nerekhta",
        "text_entry": "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum",
        "created_at": "10-26-2017",
        "user_id": 1
      }, {
        "id": 92,
        "title": "Miguelópolis",
        "text_entry": "fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem",
        "created_at": "12-17-2017",
        "user_id": 2
      }, {
        "id": 93,
        "title": "Kyoto",
        "text_entry": "mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
        "created_at": "12-05-2017",
        "user_id": 2
      }, {
        "id": 94,
        "title": "Dzikowiec",
        "text_entry": "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
        "created_at": "07-13-2017",
        "user_id": 3
      }, {
        "id": 95,
        "title": "Tunggar",
        "text_entry": "odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam",
        "created_at": "05-10-2017",
        "user_id": 1
      }, {
        "id": 96,
        "title": "Yambio",
        "text_entry": "felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa",
        "created_at": "11-02-2015",
        "user_id": 1
      }, {
        "id": 97,
        "title": "Konstantinovo",
        "text_entry": "ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo",
        "created_at": "12-17-2018",
        "user_id": 3
      }, {
        "id": 98,
        "title": "Mataguži",
        "text_entry": "vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque",
        "created_at": "12-02-2017",
        "user_id": 1
      }, {
        "id": 99,
        "title": "Zhenxi",
        "text_entry": "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac",
        "created_at": "08-20-2017",
        "user_id": 3
      }, {
        "id": 100,
        "title": "Xiangshan",
        "text_entry": "at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum",
        "created_at": "11-25-2017",
        "user_id": 3
      }]);
    
};