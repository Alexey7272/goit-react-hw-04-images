import { useEffect } from 'react';
import '../Styles/styles.css'

export default function Modal({children, onClose}) {

    useEffect(() => {
        const handleKeyDown = e => {
            if ( e.code === 'Escape') {
                onClose();
            };
        };

        window.addEventListener('keydown', handleKeyDown);

        return() => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleBackDropClick = e => {
        if ( e.currentTarget === e.target) {
            onClose();
        }
    };


    return(
        <div className="Overlay" onClick={handleBackDropClick}>
            <div className="Modal">
                {children}
            </div>
         </div>
    )
};


// export class OldModal extends Component {

    // componentDidMount() {
    //     window.addEventListener('keydown', this.handleKeyDown);
    // };

    // componentWillUnmount() {
    //     window.removeEventListener('keydown', this.handleKeyDown);
    // };


    // handleKeyDown = e => {
    //     if ( e.code === 'Escape') {
    //         this.props.onClose();
    //     };
    // };

    // handleBackDropClick = e => {
    //     if ( e.currentTarget === e.target) {
    //         this.props.onClose();
    //     }
    // };

//     render() {
//         return (
//             <div className="Overlay" onClick={this.handleBackDropClick}>
//                 <div className="Modal">
//                   {this.props.children}
//                 </div>
//             </div>
//         );
//     };
// };