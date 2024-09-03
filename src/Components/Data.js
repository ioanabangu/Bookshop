import React, {Component} from 'react';
import './Card.css';
import Products from './Products';
class Data extends Component {
    constructor(props) {
        super(props);
        this.state={     
           products: [
                {
                id: 1,
                title:'A Thousand Paper Birds',
                image:"Images/Image1.jpg",
                author:'Tor Udall',
                details:'Nothing is set in stone. A bird can be refolded into a boat, a fish, a kimono, or any other extravagant vision. At other times it aches to return to its original folds. The paper begins to fray. It tires, rebels.',
                price: 7.99 ,
        },
                    {
                        id: 2,
                        title:'Annihilation:The Novel',
                        image:"Images/Image2.png",
                        author:'Jeff VanderMeer ',
                        details:'Area X has been cut off from the rest of the world for decades. Nature has reclaimed the last vestiges of human civilization. The first expedition returned with reports of a pristine, Edenic landscape; the second expedition ended in mass suicide, the third in a hail of gunfire as its members turned on one another.',
                        price: 8.99,
                    },
                  {
                    id:3,
                    title:'Sense and Sensibility',
                    image:"Images/Image3.png",
                    author:'Jane Austen',
                    details:'Marianne Dashwood wears her heart on her sleeve, and when she falls in love with the dashing but unsuitable John Willoughby she ignores her sister Elinors warning that her impulsive behaviour leaves her open to gossip and innuendo. ',
                    price:4.99,
                  },
                  {
                    id:4,
                    title:'Room with a View',
                    image:"Images/Image4.png",
                    author:' E. M. Forster',
                    details:'Lucy has her rigid, middle-class life mapped out for her, until she visits Florence with her uptight cousin Charlotte, and finds her neatly ordered existence thrown off balance. Her eyes are opened by the unconventional characters she meets at the Pension Bertolini: flamboyant romantic novelist Eleanor Lavish, the Cockney Signora, curious Mr Emerson and, most of all, his passionate son George.',
                    price:6.99,
                  },
                  {
                      id:5,
                      title:'Lost Boy',
                      image:"Images/Image5.png",
                      author:'Christina Henry ',
                      details:'There is one version of my story that everyone knows. And then there is the truth. This is how it happened. How I went from being Peter Pan’s first—and favorite—lost boy to his greatest enemy.',
                      price:8.99,
                  },
                  {
                      id:6,
                      title:'Ayiti',
                      image:"Images/Image6.png",
                      author:'Roxane Gay',
                      details:'The debut collection from the vibrant voice of Roxane Gay is a unique blend of fiction, nonfiction, and poetry, all interwoven to represent the Haitian diaspora experience.',
                      price:12.99,
                  },
                  {
                      id:7,
                      title:'This Is The Way',
                    image:"Images/Image7.png",
                    author:'Gavin Corbett',
                    details:'Anthony Sonaghan is hiding out in an old tenement house in Dublin: he fears he has reignited an ancient feud between the two halves of his family. Twenty-first-century Dublin may have shopping malls and foreign exchange students, but Anthony is from an Irish Travelling community, where blood ties are bound deeply to the past.',
                    price:9.99,
                  },
                  {
                      id:8,
                      title:'Bright & Beautiful',
                      image:"Images/Image8.png",
                      author:'James Herriot ',
                      details:'Millions of readers have delighted in the wonderful storytelling and everyday miracles of James Herriot in the over thirty years since his delightful animal stories were first introduced to the world.',
                      price:8.99,
                  },
            ]

        };
      
    }
    render() {
        return(
            <div className="Card">
            
                {this.state.products.map(product=>(
                   <Products key ={product.id} title={product.title} image={product.image} details={product.details} author={product.author} price={product.price}/>
                ))}
            </div>
           
        )
    }
} 
export default Data;