import { useState } from 'react';
import Modal from './Modal';
import '../Styles/styles.css';
import PropTypes from 'prop-types'

export default function ImageGalleryItem({item}) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal =() => {
        setShowModal(!showModal)
    };

    return(
        <li className='ImageGalleryItem' >
            <img src={item.webformatURL} alt={item.tag} className='ImageGalleryItem-image' onClick={toggleModal}/>
            { showModal && 
                <Modal onClose={toggleModal}> 
                    <button onClick={toggleModal} className='closeBtn'>X</button>
                    <img src={item.largeImageURL} alt={item.tags}/>
                </Modal> 
            }
        </li>
    )
};

ImageGalleryItem.propTypes = {
    item: PropTypes.object,
};



// export class OldImageGalleryItem extends Component { 
    
//     state = {
//         showModal: false,
//     };

//     toggleModal =() => {
//      this.setState(({ showModal }) => ({ 
//         showModal: !showModal,
//      })); 
//     };
   
//     render() { 
//         const { item } = this.props;
//         const { showModal } = this.state;

//         return (
//             <li className='ImageGalleryItem' >
//                 <img src={item.webformatURL} alt={item.tag} className='ImageGalleryItem-image' onClick={this.toggleModal}/>
//                 { showModal && 
//                 <Modal onClose={this.toggleModal}> 
//                     <button onClick={this.toggleModal} className='closeBtn'>X</button>
//                     <img src={item.largeImageURL} alt={item.tags}/>
//                 </Modal> 
//                 }
//             </li>
//         );    
//     };
// };

// ImageGalleryItem.propTypes = {
//     item: PropTypes.object,
// };