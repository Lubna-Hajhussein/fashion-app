import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import MakeAll from './components/ListItem.jsx'


var data = [{
  id:1,
  name:"a dress for kids",
  image:"https://image.dhgate.com/0x0p/f2/albu/g6/M00/E7/48/rBVaR1t8v-aAVGVUAAp-XYeoiTg129.jpg"
  ,price:5,
  shoes:"https://img10.joybuy.com/N0/s560x560_jfs/t1/73974/9/8750/76047/5d67c5ebE5dfd619f/df10fd8a7dadf900.jpg.dpg",
  shoesds:"shoes for kids",
  bag:"https://i.pinimg.com/474x/36/b4/c8/36b4c870f682410b159c951938d41507.jpg"
},
{
  id:2,
  name:"blue dress",
  image:"https://ae01.alicdn.com/kf/HTB1UnooRVXXXXaGaXXXq6xXFXXXc/free-shipping-large-sizes-clothing-elastic-fit-polka-dots-navy-blue-white-sexy-USA-size-dress.jpg",
  price:6,
  shoes:"https://ae01.alicdn.com/kf/He216c51e3b764b5b9823b2964cdd7cf3H.jpg_q50.jpg",
  shoesds:"black shoes",
  bag:"https://sc01.alicdn.com/kf/HTB1PC2LKFXXXXcIXpXXq6xXFXXXP.jpg_350x350.jpg"
},
{
  id:3,
  name:"pink dress",
  image:"https://i.ebayimg.com/images/g/SVQAAOSwiehc0XOr/s-l400.jpg",
  price:8,
  shoes:"https://ae01.alicdn.com/kf/H64690a967e054fe0a56ea512ae3aaad2L.jpg_q50.jpg",
  shoesds:"pink shoes",
  bag:"https://www.dhresource.com/0x0/f2/albu/g9/M00/7E/71/rBVaWFznmJmAZxrdAALdzZ3ge3Q486.jpg"
},
{
  id:4,
  name:"nice dress",
  image:"https://www.newbornbabystuff.com/wp-content/uploads/2019/03/baby-girl-clothes-llqkjoh-dresses-for-girls-8-9-dress-for-girls-dress-girls-church-dresses-kids-dresses-for-summer-for-girls-8-year-old-girl-dresses-%EF%BC%88fushia8%EF%BC%89.jpg",
  price:8,
  shoes:"https://m.media-amazon.com/images/I/619lHZJ-muL._SR500,500_.jpg",
  shoesds:"another gift",
  bag:"https://i.pinimg.com/originals/26/86/dc/2686dc9889a4a59b0161eb0d773f7704.png"
}
]


ReactDOM.render(<MakeAll all={data} />,document.getElementById('app'))
