/**
 * Main application controller, that holds all authors and updates
 * active author
 */
(function(angular, _) {
    'use strict';

    angular.module('quantennaAssignmentApp')
        .controller('MainCtrl', function ($scope) {
            _.extend($scope, {

                /**
                 * Currently selected author
                 */
                author: null,

                /**
                 * Array of authors per country
                 */
                countries: data,

                /**
                 * Handler for author link click event
                 *
                 * @param author
                 */
                clickAuthor: function(author) {
                    this.author = author;
                }
            });
            // Bind this reference to the scope for js events handlers
            _.bindAll($scope, 'clickAuthor');
        });

    var data = [
        {
            name: 'Russia',
            authors: [
                {
                    name: 'Fyodor Dostoyevsky',
                    img: 'https://d202m5krfqbpi5.cloudfront.net/authors/1328375676p5/3137322.jpg',
                    about: '<strong>Fyodor Mikhaylovich Dostoyevsky</strong> (Russian: Фёдор Михайлович Достоевский) was a Russian novelist, journalist, and short-story writer whose psychological penetration into the human soul had a profound influence on the 20th century novel.<br><br>Dostoevsky was the second son of a former army doctor. He was educated at home and at a private school. Shortly after the death of his mother in 1837 he was sent to St. Petersburg, where he entered the Army Engineering College. Dostoevsky\'s father died in 1839, most likely of apoplexy, but it was rumored that he was murdered by his own serfs. Dostoevsky graduated as a military engineer, but resigned in 1844 to devote himself to writing. His first novel, <em> <a href="http://www.goodreads.com/book/show/67326.Poor_Folk" title="Poor Folk by Fyodor Dostoyevsky">Poor Folk</a> </em> appeared in 1846.<br><br>That year he joined a group of utopian socialists. He was arrested in 1849 and sentenced to death, commuted to imprisonment in Siberia. Dostoevsky spent four years in hard labor and four years as a soldier in Semipalatinsk, a city in what it is today Kazakhstan.<br><br>Dostoevsky returned to St. Petersburg in 1854 as a writer with a religious mission and published three works that derive in different ways from his Siberia experiences: <em> <a href="http://www.goodreads.com/book/show/17877.The_House_of_the_Dead" title="The House of the Dead by Fyodor Dostoyevsky">The House of the Dead</a> </em>, (1860) a fictional account of prison life, <em>The Insulted and Injured</em>, which reflects the author\'s refutation of naive Utopianism in the face of evil, and <em>Winter Notes on Summer Impressions</em>, his account of a trip to Western Europe.<br><br>In 1857 Dostoevsky married Maria Isaev, a 29-year old widow. He resigned from the army two years later. Between the years 1861 and 1863 he served as editor of the monthly periodical <em>Time</em>, which was later suppressed because of an article on the Polish uprising.<br><br>In 1864-65 his wife and brother died and he was burdened with debts. His situation was made even worse by his gambling addiction. From the turmoil of the 1860s emerged <em>Notes from the Underground</em>, a psychological study of an outsider, which marked a major advancement in Dostoevsky\'s artistic development.<br><br>In 1867 Dostoevsky married Anna Snitkin, his 22-year old stenographer. They traveled abroad and returned in 1871. By the time of <em>The Brothers Karamazov</em> (1879-80), Dostoevsky was recognized in his own country as one of its great writers.',
                    books: [
                        {
                            title: 'Crime and Punishment',
                            img: 'https://d202m5krfqbpi5.cloudfront.net/books/1347560919m/7144.jpg',
                            description: 'The talented Alex Jennings creates an atmosphere of gripping psychological tension and brings a variety of characters to life in this new audio edition of a crime classic. When the student Raskolnikov puts his philosophical theory to the ultimate test of murder, a tragic tale of suffering and redemption unfolds in the dismal setting of the slums of czarist, prerevolutionary St. Petersburg. While Jennings\'s adept repertoire of British accents works to demonstrate the varying classes of characters, it occasionally distracts the listener from the Russian setting. However, Dostoyevsky\'s rendering of 18th-century Russia emerges unscathed, bringing the dark pathos (such as wretched poverty and rampant suffering) to life.<br><br>Through the story of the brilliant but conflicted young Raskolnikov and the murder he commits, Fyodor Dostoevsky explores the theme of redemption through suffering. <em>Crime and Punishment</em> put Dostoevsky at the forefront of Russian writers when it appeared in 1866 and is now one of the most famous and influential novels in world literature.<br><br>The poverty-stricken Raskolnikov, a talented student, devises a theory about extraordinary men being above the law, since in their brilliance they think “new thoughts” and so contribute to society. He then sets out to prove his theory by murdering a vile, cynical old pawnbroker and her sister. The act brings Raskolnikov into contact with his own buried conscience and with two characters — the deeply religious Sonia, who has endured great suffering, and Porfiry, the intelligent and discerning official who is charged with investigating the murder — both of whom compel Raskolnikov to feel the split in his nature. Dostoevsky provides readers with a suspenseful, penetrating psychological analysis that goes beyond the crime — which in the course of the novel demands drastic punishment — to reveal something about the human condition: The more we intellectualize, the more imprisoned we become.'
                        },
                        {
                            title: 'The Brothers Karamazov',
                            img: 'https://d202m5krfqbpi5.cloudfront.net/books/1327882764m/4934.jpg',
                            description: 'The award-winning translation of Dostoevsky\'s last and greatest novel.<br><br>When brutal landowner Fyodor Karamazov is murdered, the lives of his sons are changed irrevocably: Mitya is placed under suspicion, Ivan\'s mental tortures drive him to breakdown, Alyosha tries to heal the family\'s rifts, and there is always the shadow of their bastard half-brother, Smerdyakov.'
                        }
                    ]
                },
                {
                    name: 'Leo Tolstoy',
                    img: 'https://d202m5krfqbpi5.cloudfront.net/authors/1342945438p5/128382.jpg',
                    about: '<strong>Lev Nikolayevich Tolstoy</strong> (Russian: Лев Николаевич Толстой; commonly <strong>Leo Tolstoy</strong> in Anglophone countries) was a Russian writer who primarily wrote novels and short stories. Later in life, he also wrote plays and essays. His two most famous works, the novels <em>War and Peace</em> and <em>Anna Karenina</em>, are acknowledged as two of the greatest novels of all time and a pinnacle of realist fiction. Many consider Tolstoy to have been one of the world\'s greatest novelists. Tolstoy is equally known for his complicated and paradoxical persona and for his extreme moralistic and ascetic views, which he adopted after a moral crisis and spiritual awakening in the 1870s, after which he also became noted as a moral thinker and social reformer.<br><br>His literal interpretation of the ethical teachings of Jesus, centering on the Sermon on the Mount, caused him in later life to become a fervent Christian anarchist and anarcho-pacifist. His ideas on nonviolent resistance, expressed in such works as <em>The Kingdom of God Is Within You</em>, were to have a profound impact on such pivotal twentieth-century figures as Mohandas Gandhi and Martin Luther King, Jr.',
                    books: [
                        {
                            title: 'Anna Karenina',
                            img: 'https://d202m5krfqbpi5.cloudfront.net/books/1352422904m/15823480.jpg',
                            description: 'Leo Tolstoy’s classic story of doomed love is one of the most admired novels in world literature. Generations of readers have been enthralled by his magnificent heroine, the unhappily married Anna Karenina, and her tragic affair with dashing Count Vronsky.<br><br>In their world frivolous liaisons are commonplace, but Anna and Vronsky’s consuming passion makes them a target for scorn and leads to Anna’s increasing isolation. The heartbreaking trajectory of their relationship contrasts sharply with the colorful swirl of friends and family members who surround them, especially the newlyweds Kitty and Levin, who forge a touching bond as they struggle to make a life together. <em>Anna Karenina</em> is a masterpiece not only because of the unforgettable woman at its core and the stark drama of her fate, but also because it explores and illuminates the deepest questions about how to live a fulfilled life.<br> <br>Translated by Louise and Aylmer Maude<br>'
                        },
                        {
                            title: 'War and Peace',
                            img: 'https://d202m5krfqbpi5.cloudfront.net/books/1380632112m/656.jpg',
                            description: 'Tolstoy\'s epic masterpiece intertwines the lives of private and public individuals during the time of the Napoleonic wars and the French invasion of Russia. The fortunes of the Rostovs and the Bolkonskys, of Pierre, Natasha, and Andrei, are intimately connected with the national history that is played out in parallel with their lives. Balls and soirees alternate with councils of war and the machinations of statesmen and generals, scenes of violent battles with everyday human passions in a work whose extraordinary imaginative power has never been surpassed. <br><br>The prodigious cast of characters, seem to act and move as if connected by threads of destiny as the novel relentlessly questions ideas of free will, fate, and providence. Yet Tolstoy\'s portrayal of marital relations and scenes of domesticity is as truthful and poignant as the grand themes that underlie them. <br><br>In this revised and updated version of the definitive and highly acclaimed Maude translation, Tolstoy\'s genius and the power of his prose are made newly available to the contemporary reader.'
                        }
                    ]
                }
            ]
        },
        {
            name: 'England',
            authors: [
                {
                    name: 'William Shakespeare',
                    img: 'https://d202m5krfqbpi5.cloudfront.net/authors/1360741702p5/947.jpg',
                    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    books: [
                        {
                            title: 'Romeo and Juliet',
                            img: 'https://d202m5krfqbpi5.cloudfront.net/books/1327872146m/18135.jpg',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        },
                        {
                            title: 'Hamlet',
                            img: 'https://d202m5krfqbpi5.cloudfront.net/books/1351051208m/1420.jpg',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }
                    ]
                },
                {
                    name: 'George Gordon Byron',
                    img: 'https://d202m5krfqbpi5.cloudfront.net/authors/1357459330p5/44407.jpg',
                    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    books: [
                        {
                            title: 'Don Juan',
                            img: 'https://d202m5krfqbpi5.cloudfront.net/books/1311643640m/78249.jpg',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        },
                        {
                            title: 'Childe Harold\'s Pilgrimage',
                            img: 'https://www.goodreads.com/assets/nocover/111x148.png',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }
                    ]
                }
            ]
        }
    ];
})(angular, _);
