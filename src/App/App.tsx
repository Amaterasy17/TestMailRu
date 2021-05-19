import './App.css';
import {Figure} from '../components/Figure/Figure'
import {Loader} from "../components/Loader/Loader";

function App() {
    return (
        <div className='App'>
            <div className='div-style'>
                <Figure
                    src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"
                    //src="hahahhaha"
                    arWidth={3}
                    arHeight={5}
                >
                    Автор: <a href='https://www.pexels.com/@simonmigaj'>Simon Migaj</a>
                </Figure>
            </div>
            {/*<div className='div-style'>*/}
            {/*    <Figure*/}
            {/*        src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"*/}
            {/*        //src="hahahhaha"*/}
            {/*        arWidth={16}*/}
            {/*        arHeight={9}*/}
            {/*    >*/}
            {/*        Автор: <a href='https://www.pexels.com/@simonmigaj'>Simon Migaj</a>*/}
            {/*    </Figure>*/}
            {/*</div>*/}
            {/*<Figure*/}
            {/*   src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"*/}
            {/*     //src="hahahhaha"*/}
            {/*    arWidth={3}*/}
            {/*    arHeight={5}*/}
            {/*>*/}
            {/*    Автор: <a href='https://www.pexels.com/@simonmigaj'>Simon Migaj</a>*/}
            {/*</Figure>*/}
            {/*<Figure*/}
            {/*    src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"*/}
            {/*    //src="hahahhaha"*/}
            {/*    arWidth={1}*/}
            {/*    arHeight={1}*/}
            {/*>*/}
            {/*    Автор: <a href='https://www.pexels.com/@simonmigaj'>Simon Migaj</a>*/}
            {/*</Figure>*/}

            {/*<Figure*/}
            {/*    src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"*/}
            {/*    //src="hahahhaha"*/}
            {/*    arWidth={9}*/}
            {/*    arHeight={16}*/}
            {/*>*/}
            {/*    Автор: <a href='https://www.pexels.com/@simonmigaj'>Simon Migaj</a>*/}
            {/*</Figure>*/}
        </div>
    );
}

export default App;
