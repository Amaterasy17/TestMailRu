// import './App.css';
import {Figure} from '../components/Figure/Figure'

function App() {
    return (
        <div className="App">
            <Figure
                src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"
                arWidth={3}
                arHeight={5}
            />
        </div>
    );
}

export default App;