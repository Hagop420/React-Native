const things = [
   {
       id: 0,
       title: 'whiskers on kittens',
       favorite: true,
       points: 97
   },
   {
       id: 1,
       title: 'raindrops on roses',
       favorite: true,
       points: 77
   },
   {
       id: 2,
       title: 'brown paper packages tied up with string',
       favorite: true,
       points: 87
   },
   {
       id: 3,
       title: 'dog bite',
       favorite: false,
       featured: true,
       points: 12
   },
   {
       id: 3234,
       title: 'dog bite',
       favorite: false,
       featured: true,
       points: 12
   },
   {
       id: 4,
       title: 'bee sting',
       favorite: false,
       points: 6
   }
];


const isTtl = (modelo) => {
   console.log('Using filter');
  return things.filter(thing => thing.featured[0])
}

const aaronPaul = isTtl()

console.log(aaronPaul);





const isTtlFind = () => {
   console.log('Using find');
  return things.find(thing => thing.featured)
}

// console.log(isTtlFind());