/**
 * A program that produces random messages/facts about random topics.
 * 
 * @author Elbert Alcantara
 */
const randomMessage = {
    topics: {
        astronomy: {
            Blackholes: {
                are: ['dark', 'found in the middle of galaxies', 'extreme', 'mysterious', 'sifty', 'formed from supernovas'],
                have: ['a singularity where nothing makes sense', 'extremely powerful gravitational fields', 'immense mass', 'high density']
            },

            Earth: {
                is: ['our home', 'a blue planet', 'filled with life', 'special to us', 'a planet orbiting the sun'],
                has: ['large bodies of water', 'you and me', 'continents', 'life', 'mountains', 'a magnetic field']
            },

            Galaxies: {
                are: ['enormous', 'beautiful', 'majestic', 'filled with stars like our sun', 'very colorful', 'awesome'],
                have: ['nebulas and dust clouds', 'blackholes at their centres', 'old and new stars']
            },

            Stars: {
                are: ['large', 'very hot, about 6,000C in the surface', 'mainly composed of hydrogen', 'usually in binary systems', 'usually inside a galaxy'],
                have: ['powerful magnetic field', 'solar flares which can cause blackouts', 'in most cases, planets']
            }
        },

        wildlife: {
            Lions: {
                are: ['aggressive', 'yellowish in colour', 'carnivorous', 'the king of the jungle', 'pack animals', 'located in africa'],
                have: ['very sharp claws', 'very powerful jaws', 'long canine teeth']
            },

            Tigers: {
                are: ['the largest cat', 'more powerful than a lion', 'solitary animals', 'mamals', 'good swimmers, unlike lions'],
                have: ['very good camouflage', 'perfected hunting in the jungle', 'a good sense of smell', 'extreme hearing abilities']
            },

            Ants: {
                are: ['industrious animals', 'very versatile', 'found all over the world', 'very annoying', 'extremely numerous'],
                have: ['large colonies housing millions of ants', 'powerful jaws', 'larvae instead of babies']
            }
        }
    },

    //Prints out a random message/fact.
    generate(){
        let topicKeys = Object.keys(this.topics);
        let chosenTopic = topicKeys[Math.floor(Math.random() * topicKeys.length)];

        let objKeys = Object.keys(this.topics[chosenTopic]);
        let chosenObj = objKeys[Math.floor(Math.random() * objKeys.length)];

        let auxKeys = Object.keys(this.topics[chosenTopic][chosenObj]);
        let chosenAux = auxKeys[Math.floor(Math.random() * auxKeys.length)];

        let chosenAdj = this.topics[chosenTopic][chosenObj][chosenAux][Math.floor(Math.random() * chosenAux.length)];

        console.log(`${chosenObj} ${chosenAux} ${chosenAdj}!!!`);
    }
}

randomMessage.generate();