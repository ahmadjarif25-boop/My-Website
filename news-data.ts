import type { NewsArticle } from './types';
import imageData from './placeholder-images.json';

const { placeholderImages } = imageData;

const getImg = (hint: string, index: number = 0) => {
  const found = placeholderImages.filter(img => img.imageHint.includes(hint));
  return found[index] || placeholderImages[0];
}

const politicsImg1 = getImg('politics', 0);
const politicsImg2 = getImg('politics', 1);
const sportsImg1 = getImg('cricket');
const sportsImg2 = getImg('football');
const businessImg1 = getImg('business');
const businessImg2 = getImg('stock');
const techImg1 = getImg('technology', 0);
const techImg2 = getImg('technology', 1);
const intlImg1 = getImg('international', 0);
const intlImg2 = getImg('international', 1);


export const newsData: NewsArticle[] = [
  {
    id: '3',
    title: 'Parliament Passes Landmark Digital Security Act Amendments',
    category: 'Politics',
    content: 'After weeks of debate, the national parliament has passed significant amendments to the Digital Security Act. The changes aim to address concerns about freedom of speech while maintaining national security. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    source: 'The Daily Star',
    date: '5 hours ago',
    imageUrl: politicsImg1.imageUrl,
    imageHint: politicsImg1.imageHint,
    link: '#',
  },
  {
    id: '2',
    title: 'Tigers Secure Thrilling Last-Ball Victory Over India',
    category: 'Sports',
    content: 'In a nail-biting finish, the Bangladesh cricket team clinched a memorable victory against India on the very last ball of the match. The stadium erupted in celebration as the final runs were scored. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
    source: 'Prothom Alo',
    date: '3 hours ago',
    imageUrl: sportsImg1.imageUrl,
    imageHint: sportsImg1.imageHint,
    link: '#',
  },
  {
    id: '1',
    title: 'New Economic Policies Announced to Boost Growth',
    category: 'Business',
    content: 'The government has unveiled a new set of economic policies aimed at stimulating growth and attracting foreign investment. The policies include tax incentives for startups and a reduction in import duties on raw materials. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    source: 'The Financial Express',
    date: '2 hours ago',
    imageUrl: businessImg1.imageUrl,
    imageHint: businessImg1.imageHint,
    link: '#',
  },
  {
    id: '4',
    title: 'Dhaka Stock Exchange Hits Record High',
    category: 'Business',
    content: 'Investor confidence is soaring as the Dhaka Stock Exchange (DSE) index surpassed all previous records today. Analysts attribute the surge to strong corporate earnings and positive economic forecasts. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.',
    source: 'BDNews24',
    date: '1 day ago',
    imageUrl: businessImg2.imageUrl,
    imageHint: businessImg2.imageHint,
    link: '#',
  },
  {
    id: '5',
    title: 'Bangladeshi Tech Firm Launches New Ride-Sharing App',
    category: 'Technology',
    content: 'A local startup has entered the competitive ride-sharing market with a new app that promises lower fares and better driver compensation. The app uses advanced AI for route optimization. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.',
    source: 'Tech In Asia',
    date: '1 day ago',
    imageUrl: techImg1.imageUrl,
    imageHint: techImg1.imageHint,
    link: '#',
  },
  {
    id: '6',
    title: 'Diplomatic Talks Conclude with New Trade Agreement',
    category: 'International',
    content: 'Bangladesh and the European Union have concluded talks with a new trade agreement that will boost exports of ready-made garments and other goods. The agreement is expected to create thousands of new jobs. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.',
    source: 'Reuters',
    date: '2 days ago',
    imageUrl: intlImg1.imageUrl,
    imageHint: intlImg1.imageHint,
    link: '#',
  },
    {
    id: '7',
    title: 'BPL Football League Kicks Off with Grand Ceremony',
    category: 'Sports',
    content: 'The Bangladesh Premier League (BPL) for football started its new season with a spectacular opening ceremony at the Bangabandhu National Stadium. Fans are excited for a season of competitive matches. Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    source: 'ESPN BD',
    date: '2 hours ago',
    imageUrl: sportsImg2.imageUrl,
    imageHint: sportsImg2.imageHint,
    link: '#',
  },
  {
    id: '8',
    title: 'New Metro Rail Line Inaugurated in Dhaka',
    category: 'Politics',
    content: 'The Prime Minister inaugurated a new line of the Dhaka Metro Rail project today, aiming to ease traffic congestion in the capital. The new line connects Motijheel to Uttara. Praesent blandit, odio vel dignissim blandit, justo neque feugiat nisl, eu rhoncus nunc quam eu massa. Nunc vitae nunc sed nisl.',
    source: 'The Independent',
    date: '6 hours ago',
    imageUrl: politicsImg2.imageUrl,
    imageHint: politicsImg2.imageHint,
    link: '#',
  },
  {
    id: '9',
    title: 'Government to Build New Hi-Tech Park',
    category: 'Technology',
    content: 'The government has announced plans to establish a new hi-tech park in the southern region of the country to foster innovation and create jobs in the IT sector. The project is a collaboration with international tech giants. Phasellus ultrices, quam nec venenatis vehicula, turpis justo faucibus lorem, vitae semper turpis est sed massa.',
    source: 'Dhaka Tribune',
    date: '3 days ago',
    imageUrl: techImg2.imageUrl,
    imageHint: techImg2.imageHint,
    link: '#',
  },
  {
    id: '10',
    title: 'UN Praises Bangladesh for Climate Resilience Efforts',
    category: 'International',
    content: 'A recent United Nations report has praised Bangladesh for its innovative and effective strategies in building resilience against climate change. The report highlights the country\'s locally-led adaptation programs. Sed elementum, sapien nec egestas dictum, odio magna blandit nulla, ut porta neque odio non mi.',
    source: 'UN News',
    date: '4 days ago',
    imageUrl: intlImg2.imageUrl,
    imageHint: intlImg2.imageHint,
    link: '#',
  }
];
