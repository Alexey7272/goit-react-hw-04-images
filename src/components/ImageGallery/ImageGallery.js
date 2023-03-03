import '../Styles/styles.css'
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({images}) {
  return(
    <ul className='ImageGallery'>
      {images.map(item => <ImageGalleryItem item={item} key={item.id}/>)}
    </ul>
  );
};


// export class OldImageGallery extends Component {
  
//   render() {
//     return (
//     <ul className='ImageGallery'>
//       {this.props.images.map(item => <ImageGalleryItem item={item}/>)}
//     </ul>
//     );
//   };
// };