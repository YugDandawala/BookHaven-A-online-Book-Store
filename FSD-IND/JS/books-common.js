// ====== MASTER BOOK LIST ======
const allBooks = [
    {
        id: "H1",
        title: "The 7 Habits of Effective People",
        author: "Stephen R. Covey",
        price: 399,
        image: "https://www.franklincovey.com/wp-content/uploads/2023/11/book_7-habits_600x600.png",
        genre: "fiction",
        rating: 4.5,
        description: "It is rightly said that habits make or break a man. If you want to know why you are not doing something right, sometimes all you need is to perform an analysis of your habits and consider altering them. Because sometimes it?s not about what you do, but more about how you do it! And that's where your habits play a very important role."
    }, {
        id: "H2",
        title: "The Miracle Morning",
        author: "Hal Elrod",
        price: 410,
        image: "https://m.media-amazon.com/images/I/71K1SrcotCL._SY522_.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "Getting everything you want out of life isn't about doing more. It's about becoming more. Hal Elrod and The Miracle Morning have helped millions of people become the person they need to be to create the life they've always wanted. Now, it's your turn."
    }, {
        id: "H3",
        title: "Oversubscribed",
        author: "Daniel Priestley",
        price: 325,
        image: "https://m.media-amazon.com/images/I/81HbECHtU8L._SY466_.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "Learn how to get your business oversubscribed in a crowded marketplace to make your business stand out and get people lining up to do business "

    }, {
        id: "H4",
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        price: 520,
        image: "https://m.media-amazon.com/images/I/81BE7eeKzAL._SL1500_.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
    }, {
        id: "H5",
        title: "Deep Work",
        author: "Cal Newport",
        price: 463,
        image: "https://m.media-amazon.com/images/I/51aMqGE9sxL._SY466_.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results."

    }, {
        id: "H6",
        title: "Do the Work",
        author: "Steven Pressfield",
        price: 376,
        image: "https://m.media-amazon.com/images/I/71MmrsuXAPL._SY425_.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "Could you be getting in your way of producing great work? Have you started a project but never finished? Would you like to do work that matters, but don't know where to start?The answer is Do the Work, a manifesto by bestselling author Steven Pressfield, that will show you that it’s not about better ideas, it’s about actually doing the work."
    }, {
        id: "H7",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 220,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        genre: "fiction",
        rating: 4.5,
        description: "A story of decadence and excess..."
    }, {
        id: "H8",
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 429,
        image: "https://m.media-amazon.com/images/I/81Dky+tD+pL._SY466_.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "Timeless lessons on wealth, greed, and happiness doing well with money isn?t necessarily about what you know. It?s about how you behave. "
    }, {
        id: "H9",
        title: "Atomic Habits",
        author: "James Clear",
        price: 450.00,
        image: "https://m.media-amazon.com/images/I/81F90H7hnML._SY466_.jpg",
        genre: "Literary Fiction",
        rating: 4.5,
        description: "In this ground-breaking book, Clears reveals exactly how these minuscule changes can grow into such life-altering outcomes. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule, or the trick to entering the Goldilocks Zone), and delves into cutting-edge psychology and neuroscience to explain why they matter"
    }, {
        id: "H10",
        title: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        price: 320.00,
        image: "https://m.media-amazon.com/images/I/61WMgOHyDaL._SY342_.jpg",
        genre: "Literary Fiction",
        rating: 4.5,
        description: "This remarkable book by Dr. Joseph Murphy, one of the pioneering voices of affirmative thinking, will unlock for you the truly staggering powers of your subconscious mind."
    }, {
        id: "H11",
        title: "Don't Believe Everything You Think",
        author: "Joseph Nguyen",
        price: 256.00,
        image: "https://m.media-amazon.com/images/I/715qi-cIbML._SL1500_.jpg",
        genre: "Literary Fiction",
        rating: 4.5,
        description: "Discover how to conquer anxiety, self-doubt, and self-sabotage without depending on motivation or willpower. 'Don't Believe Everything You Think' uncovers the core of psychological suffering and offers insights to effortlessly shape the life you crave."
    }, {
        id: "H12",
        title: "Stop Overthinking",
        author: "Nick Trenton Russell Newton",
        price: 299.00,
        image: "https://m.media-amazon.com/images/I/81TwewImvVL._SY466_.jpg",
        genre: "Literary Fiction",
        rating: 4.5,
        description: "Stop Overthinking is a book that understands the exhausting situation you've put yourself in, and how you lose your mind with anxiety and stress. It will walk you through detailed and proven techniques to help rewire your brain, control your thoughts, and change your mental habits."
    }, {
        id: "H13",
        title: "The 5 AM Club – Own Your Morning",
        author: "Robin Sharma",
        price: 376.00,
        image: "https://m.media-amazon.com/images/I/71Jg6kSgYwL._SL1500_.jpg",
        genre: "Literary Fiction",
        rating: 4.5,
        description: "Legendary leadership and elite performance expert Robin Sharma introduced The 5 AM Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity."
    }, {
        id: "H14",
        title: "Life's Amazing Secrets",
        author: "Gaur Gopal Das",
        price: 499.00,
        image: "https://m.media-amazon.com/images/I/81yxRLBMmkL._SL1500_.jpg",
        genre: "Literary Fiction",
        rating: 4.5,
        description: "Stop going through life, Start growing through life!While navigating their way through Mumbai's horrendous traffic, Gaur Gopal Das and his wealthy young friend Harry get talking, delving into concepts ranging from the human condition to finding one's purpose in life and the key to lasting happiness."
    },
    // Fiction page books 
    {
        id: "FI1",
        title: "Homeseeking",
        author: "Karissa Chen",
        price: 259,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1736422714i/223422252.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "An epic and intimate tale of one couple across sixty years as world events pull them together and apart, illuminating the Chinese diaspora and exploring what it means to find home far from your homeland."
    },
    {
        id: "FI2",
        title: "Good Dirt",
        author: "Charmaine Wilkerson",
        price: 320,
        image: "https://images2.penguinrandomhouse.com/cover/9780593358368",
        genre: "fiction",
        rating: 4.5,
        description: "The daughter of an affluent Black family pieces together the connection between a childhood tragedy and a beloved heirloom in this moving novel from the New York Times bestselling author of Black Cake, a Read with Jenna Book Club Pick"

    },
    {
        id: "FI3",
        title: "Head Cases",
        author: "John McMahon",
        price: 294,
        image: "https://m.media-amazon.com/images/I/81vZXBLeYdL._SY466_.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "Head Cases follows an enigmatic group of FBI agents as they hunt down a murderer seeking his own justice in this electrifying—and commercial—series debut."

    }, {
        id: "FI4",
        title: "I Am Not Jessica Chen",
        author: "Ann Liang",
        price: 425,
        image: "https://m.media-amazon.com/images/I/81kYNXqPNJL._SY466_.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "After getting rejected by every single Ivy League she applied to and falling short of all her Asian immigrant parents expectations, seventeen-year-old Jenna Chen makes a wish to become her smarter, infinitely more successful Harvard-bound cousin, Jessica Chen—only for her wish to come true. Literally.Now trapped inside Jessica’s body, with access to Jessica’s most private journals and secrets, Jenna soon discovers that being the top student at the elite, highly competitive Havenwood Private Academy isn’t quite what she imagined. Worse, as everyone—including her own parents—start having trouble remembering who Jenna Chen is, or if she ever even existed, Jenna must decide if playing the role of the perfect daughter and student is worth losing her true self forever."
    },
    {
        id: "FI5",
        title: "The Inheritance",
        author: "Jennifer Lynn Barnes",
        price: 356,
        image: "https://booktime584.wordpress.com/wp-content/uploads/2023/03/inhertancegames.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "Avery Grambs has a plan for a better future: survive high school, win a scholarship, and get out. But her fortunes change in an instant when billionaire Tobias Hawthorne dies and leaves Avery virtually his entire fortune. The catch? Avery has no idea why—or even who Tobias Hawthorne is.To receive her inheritance, Avery must move into sprawling, secret passage-filled Hawthorne House, where every room bears the old man’s touch—and his love of puzzles, riddles, and codes. "
    },
    {
        id: "FI6",
        title: "Beautiful Ugly",
        author: "Alice Feeney",
        price: 220,
        image: "https://m.media-amazon.com/images/I/81qX8s9OP3L._SY466_.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "The million-copy bestselling Queen of Twists Alice Feeney returns with a gripping and deliciously dark thriller about marriage. . .. . . and revenge."
    },
    {
        id: "FI7",
        title: "Death of the Author",
        author: "Nnedi Okorafor",
        price: 360,
        image: "https://m.media-amazon.com/images/I/91weKgRHp0L._SY466_.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "Life has thrown Zelu some curveballs over the years, but when she's suddenly dropped from her university job and her latest novel is rejected, all in the middle of her sister's wedding, her life is upended."
    },
    {
        id: "FI8",
        title: "Fictions",
        author: "Jorge Luis Borges",
        price: 349,
        image: "https://m.media-amazon.com/images/I/71lyMs9Qx0L._SY466_.jpg",
        genre: "fiction",
        rating: 4.5,
        description: "The most popular anthology of Jorge Luis Borges's short stories, Fictions is a wildly original and influential collection of fantastic tales, translated from the Spanish with an afterword by Andrew Hurley in Penguin Modern Classics.Jorge Luis Borges's Fictions introduced an entirely new voice into world literature. "
    },
    {
        id: "M1",
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        price: 567,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg",
        genre: "Mystery",
        rating: 4.5,
        description: "Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law. But as he embarks on a dangerous game of cat and mouse with a suspicious police investigator, Raskolnikov is pursued by the growing voice of his conscience and finds the noose of his own guilt tightening around his neck. Only Sonya, a downtrodden sex worker, can offer the chance of redemption."
    },
    {
        id: "M2",
        title: "The Shadow of the Wind",
        author: "Carlos Ruiz Zafón",
        price: 399,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628791882i/1232.jpg",
        genre: "Mystery",
        rating: 4.5,
        description: "Barcelona, 1945: A city slowly heals from its war wounds, and Daniel, an antiquarian book dealer's son who mourns the loss of his mother, finds solace in a mysterious book entitled The Shadow of the Wind, by one Julian Carax. But when he sets out to find the author's other works, he makes a shocking discovery: someone has been systematically destroying every copy of every book Carax has written."
    },
    {
        id: "M3",
        title: "Eye of the Needle",
        author: "Ken Follett",
        price: 526,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327939511i/92364.jpg",
        genre: "Mystery",
        rating: 4.5,
        description: "One enemy spy knows the secret to the Allies' greatest deception, a brilliant aristocrat and ruthless assassin -- code name: 'The Needle' -- who holds the key to ultimate Nazi victory.Only one person stands in his way: a lonely Englishwoman on an isolated island, who is beginning to love the killer who has mysteriously entered her life.  All will come to a terrifying conclusion in Ken Follett's unsurpassed and unforgettable masterwork of suspense, intrigue, and the dangerous machinations of the human heart."
    },
    {
        id: "M4",
        title: "Gray After Dark",
        author: "Noelle W. Ihli",
        price: 479,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1708240567i/204787816.jpg",
        genre: "Mystery",
        rating: 4.5,
        description: "A merciless wilderness. A harrowing attack. A desperate escape.When a tragic accident sidelines Miley's dreams of Olympic gold, she takes a summer job at a mountain guest lodge. The Frank Church Wilderness is remote, but it’s the perfect place to train and recover. Local lore about a staffer who died years ago doesn’t scare her. But it should."
    },
    {
        id: "M5",
        title: "The Woman in Cabin 10",
        author: "Ruth Ware",
        price: 499,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1465878007i/28187230.jpg",
        genre: "Mystery",
        rating: 4.5,
        description: "Lo Blacklock, a journalist who writes for a travel magazine, has just been given the assignment of a lifetime: a week on a luxury cruise with only a handful of cabins. The sky is clear, the waters calm, and the veneered, select guests jovial as the exclusive cruise ship, the Aurora, begins her voyage in the picturesque North Sea. At first, Lo's stay is nothing but pleasant: the cabins are plush, the dinner parties are sparkling, and the guests are elegant."
    },
    {
        id: "M6",
        title: "The Paris Apartment",
        author: "Lucy Foley",
        price: 359,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645550948i/58468990.jpg",
        genre: "Mystery",
        rating: 4.5,
        description: "From the New York Times bestselling author of The Guest List comes a new locked room mystery, set in a Paris apartment building in which every resident has something to hide…     Jess needs a fresh start. She’s broke and alone, and she’s just left her job under less than ideal circumstances. Her half-brother Ben didn’t sound thrilled when she asked if she could crash with him for a bit, but he didn’t say no, and surely everything will look better from Paris. Only when she shows up – to find a very nice apartment, could Ben really have afforded this? – he’s not"
    },
    {
        id: "M7",
        title: "A Story of Yesterday",
        author: "Sergio Cobo",
        price: 589,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630609122i/58913358.jpg",
        genre: "Mystery",
        rating: 4.5,
        description: "A Story of Yesterday is a concise and straight punch to the jaw of life.    Under a sky of different colors germinates a magical story of survival, where the result of each choice, enclosed in this particular tale, will snatch the whereabouts of each story forever."
    },
    {
        id: "M8",
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        price: 236,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1574805682i/22557272.jpg",
        genre: "Mystery",
        rating: 4.5,
        description: "Rachel catches the same commuter train every morning. She knows it will wait at the same signal each time, overlooking a row of back gardens. She’s even started to feel like she knows the people who live in one of the houses. “Jess and Jason,” she calls them. Their life—as she sees it—is perfect. If only Rachel could be that happy. And then she sees something shocking. "
    },
    {
      id: "A1",
      title: "Ambessa",
      author: "C.L. Clark",
      price: 299,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1730390419i/220609772.jpg",
      genre: "fantasy",
      rating: 4.5,
      description: "Set in the blockbuster and award-winning universe of League of Legends: Arcane and written by award-winning author C. L. Clark, discover a thrilling epic fantasy novel where Ambessa Medarda truly learns what it means to be a Chosen of the Wolf.Medarda over all."
    },
    {
      id: "A2",
      title: "The Ballad of Never After",
      author: "Stephanie Garber",
      price: 450,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1716011416i/59808071.jpg",
      genre: "fantasy",
      rating: 4.5,
      description: "After Jacks, the Prince of Hearts, betrays her, Evangeline Fox swears she'll never trust him again. Now that she’s discovered her own magic, Evangeline believes she can use it to restore the chance at happily ever after that Jacks stole away.But when a new terrifying curse is revealed, Evangeline finds herself entering into a tenuous partnership with the Prince of Hearts again."
  
    },
    {
      id: "A3",
      title: "Wind and Truth",
      author: "Brandon Sanderson",
      price: 325,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1724944713i/203578847.jpg",
      genre: "fantasy",
      rating: 4.5,
      description: "The long-awaited explosive climax to the first arc of the #1 New York Times bestselling Stormlight Archive―the iconic epic fantasy masterpiece that has sold more than 10 million copies, from acclaimed bestselling author Brandon Sanderson.  Dalinar Kholin challenged the evil god Odium to a contest of champions with the future of Roshar on the line. The Knights Radiant have only ten days to prepare―and the sudden ascension of the crafty and ruthless Taravangian to take Odium’s place has thrown everything into disarray."
    },
    {
      id: "A4",
      title: "Rule of the Aurora King",
      author: "Nisha J. Tuli",
      price: 379,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1690915587i/191754348.jpg",
      genre: "fantasy",
      rating: 4.5,
      description: "“I am not his conquest. I am not his to claim. I am my own castle.” Freed from the golden clutches of the Sun King, Lor now finds herself in the hands of Nadir, the Aurora Prince. Convinced she’s hiding something, he’s willing to do whatever it takes to make her talk. But Lor knows the value of secrets—she’s been keeping them her entire life—and she’s not letting hers go without a fight."
    },
    {
      id: "A5",
      title: "The Two Towers",
      author: "J.R.R. Tolkien",
      price: 589,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654216149i/61215372.jpg",
      genre: "fantasy",
      rating: 4.5,
      description: "The Two Towers is the second part of J.R.R. Tolkien’s epic adventure The Lord of the Rings. One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.  Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs."
    },
    {
      id: "A6",
      title: "Freaky Curses",
      author: "Amanda M. Lee",
      price: 499,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1720210505i/216127857.jpg",
      genre: "fantasy",
      rating: 4.5,
      description: "Mystic Caravan is about to hit the West Coast, and things—as usual—are about to get freaky. Join Poet, Kade, Cole, Luke, and the rest of the gang for another crazy adventure."
    },
    {
      id: "A7",
      title: "Powerless",
      author: "Lauren Roberts",
      price: 459,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672676191i/75513900.jpg",
      genre: "fantasy",
      rating: 4.5,
      description: "The powers these Elites have possessed for decades were graciously gifted to them by the Plague, though not all were fortunate enough to both survive the sickness and reap the reward. Those born Ordinary are just that—ordinary. And when the king decreed that all Ordinaries be banished in order to preserve his Elite society, lacking an ability suddenly became a crime—making Paedyn Gray a felon by fate and a thief by necessity."
    },
    {
      id: "A8",
      title: "Divine Rivals",
      author: "Rebecca Ross",
      price: 349,
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655928079i/60784546.jpg",
      genre: "fantasy",
      rating: 4.5,
      description: "All eighteen-year-old Iris Winnow wants to do is hold her family together. With a brother on the frontline forced to fight on behalf of the Gods now missing from the frontline and a mother drowning her sorrows, Iris’s best bet is winning the columnist promotion at the Oath Gazette.    But when Iris’s letters to her brother fall into the wrong hands – that of the handsome but cold Roman Kitt, her rival at the paper – an unlikely magical connection forms."
    },
    {
        id: "S1",
        title: "Dune",
        author: "Frank Herbert",
        price: 499,
        image: "https://m.media-amazon.com/images/I/7193ddEy8-L._SY466_.jpg",
        genre: "sci-fi",
        rating: 4.5,
        description: "Set on the desert planet Arrakis, Dune is the story of Paul Atreides−who would become known as Maud'Dib—and of a great family's ambition to bring to fruition humankind’s most ancient and unattainable dream. "
    },
    {
        id: "S2",
        title: "The Martian",
        author: "Andy Weir",
        price: 399,
        image: "https://m.media-amazon.com/images/I/810W+zAp2DL._SY466_.jpg",
        genre: "sci-fi",
        rating: 4.5,
        description: "Selected for common reading at North Lake College Nominated as one of America’s best-loved novels by PBS’s The Great American ReadSix days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he's sure he'll be the first person to die there.After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he’s alive—and even if he could get word out, his supplies would be gone long before a rescue could arrive."
    },
    {
        id: "S3",
        title: "Revelation Space",
        author: "Alastair Reynolds",
        price: 456,
        image: "https://m.media-amazon.com/images/I/71mcujnsdjL._SY466_.jpg",
        genre: "sci-fi",
        rating: 4.5,
        description: "This highly acclaimed first novel in the Revelation Space universe has redefined the space opera with a staggering journey across vast gulfs of time and space to confront the very nature of reality itself . . ."
    },
    {
        id: "S4",
        title: "2001: A Space Odyssey",
        author: "Arthur C. Clarke",
        price: 529,
        image: "https://m.media-amazon.com/images/I/61hkHg2FDbL._SY522_.jpg",
        genre: "sci-fi",
        rating: 4.5,
        description: "It has been more than forty years since the publication of this classic science fiction novel that changed the way we look at the stars and ourselves. From the savannas of Africa at the dawn of mankind to the rings of Saturn as man adventures to the outer rim of our solar system, 2001: A Space Odyssey is a journey unlike any other."
    },
    {
        id: "S5",
        title: "The Time Machine",
        author: "H. G. Wells",
        price: 475,
        image: "https://m.media-amazon.com/images/I/71+n2VSAiXS._SY342_.jpg",
        genre: "sci-fi",
        rating: 4.5,
        description: "Embark on a captivating adventure with H.G. Wells' The Time Machine. Witness humanity's future, explore the depths of time, and ponder on profound questions. This unabridged edition guarantees an immersive experience."
    },
    {
        id: "S6",
        title: "Light from Uncommon Stars",
        author: "Ryka Aoki",
        price: 369,
        image: "https://m.media-amazon.com/images/I/711yllHodyS._SY466_.jpg",
        genre: "sci-fi",
        rating: 4.5,
        description: "This lyrical, delightful, queer SF novel is Good Omens with a Faustian bargain. Shizuka Satomi is a brilliant, cursed violinist who must win her soul back from damnation. To do this, she must take seven prodigies as students, then entice each to trade their soul for fame. She has already delivered six. However, rather than the usual pampered genius, the seventh, Katrina Nguyen, is a young transgender runaway with a wild talent, who is fleeing an abusive home. "
    },
    {
        id: "S7",
        title: "Wrinkle In Time ",
        author: "Madeleine L'Engle",
        price: 279,
        image: "https://m.media-amazon.com/images/I/91cSgrqG93L._SY466_.jpg",
        genre: "sci-fi",
        rating: 4.5,
        description: "Bridging science and fantasy, darkness and light, fear and friendship, the story became a classic of children’s literature and is beloved around the world. Now Disney is taking it to the silver screen! With an all-star cast that includes Oprah Winfrey, Reese Witherspoon, Mindy Kaling, Chris Pine, and newcomer Storm Reid, the major motion picture bring the world of Wrinkle to life for a new generation of fans."
    },
    {
        id: "S8",
        title: "Way Station",
        author: "Clifford D Simak",
        price: 535,
        image: "https://m.media-amazon.com/images/I/61poV4FMBEL._SY466_.jpg",
        genre: "sci-fi",
        rating: 4.5,
        description: "Enoch Wallace is not like other humans. Living a secluded life in the backwoods of Wisconsin, he carries a nineteenth-century rifle and never seems to age―a fact that has recently caught the attention of prying government eyes."
    },
];

// ====== CART ======
let cart = [];

function showBookDetails(bookId) {
    const book = allBooks.find(b => b.id === bookId);
    if (book) {
        localStorage.setItem("selectedBook", JSON.stringify(book));
        window.location.href = `book-details.html?id=${bookId}`;
    }
}
// ====== CART FUNCTIONS ======
function addToCart(bookId) {
    const book = allBooks.find(b => b.id === bookId);
    if (!book) {
        console.error("Book not found:", bookId);
        return;
    }
    const existingItem = cart.find(item => item.id === bookId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...book, quantity: 1 });
    }
    saveCartToLocalStorage();
    updateCartCount();
    updateCartDisplay();
    showNotification(`${book.title} added to cart!`);
}

function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    saveCartToLocalStorage();
    updateCartCount();
    updateCartDisplay();
}

function updateQuantity(bookId, newQuantity) {
    const item = cart.find(item => item.id === bookId);
    if (item) {
        item.quantity = Math.max(1, newQuantity);
        saveCartToLocalStorage();
        updateCartDisplay();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center">Your cart is empty</p>';
        updateOrderSummary();
        return;
    }

    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="card mb-3">
                <div class="card-body" style="border: 1px solid black;border-radius: 5px;">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="${item.image}" style="border: 1px solid black;border-radius: 5px;"
                             class="img-fluid rounded" alt="${item.title}">
                        </div>
                        <div class="col-md-4">
                            <h5>${item.title}</h5>
                            <p>By ${item.author}</p>
                        </div>
                        <div class="col-md-2">
                            <div class="input-group">
                                <button class="btn btn-outline-secondary" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                                <input type="number" class="form-control text-center" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', this.value)">
                                <button class="btn btn-outline-secondary" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                            </div>
                        </div>
                        <div class="col-md-2 text-center">₹${(item.price * item.quantity).toFixed(2)}</div>
                        <div class="col-md-2 text-end">
                            <button onclick="removeFromCart('${item.id}')" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    updateOrderSummary();
}

function updateOrderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = cart.length > 0 ? 4.99 : 0;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `₹${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        let parsedCart = JSON.parse(savedCart);
        // Filter out items that no longer exist in allBooks
        parsedCart = parsedCart.filter(savedItem => 
            allBooks.some(book => book.id === savedItem.id)
        );
        cart = parsedCart;
        updateCartCount();
        updateCartDisplay();
    }
}


function showNotification(message) {
    alert(message); // Can be replaced with toast
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromLocalStorage();
    updateCartCount();
});
