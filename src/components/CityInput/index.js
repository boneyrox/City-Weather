import React,{useState} from 'react'
import { Form,Button, Container } from 'react-bootstrap'
// import Error from '../Error';

const CityInput = ({city,setCity,fetchCityWeather})=> {

    const [error, setError] = useState("");
    
    const handleInputChange = (event)=>{
        setCity(event.target.value);
        
    }

    const handleClick = ()=>{
        //write if field is empty
        if(!city){
            setError('City field is empty!!!');
        }else{
            setError('');
            fetchCityWeather();
        }
    }

    // console.log(city); 

    return (
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <Form.Control value={city} type="text" placeholder="Enter city" onChange={handleInputChange} />
                <p className="text-danger">{error}</p>
            </Form.Group>
            <Button variant="primary" onClick={handleClick}>Submit</Button>
          </Form>
        </Container>
      );
    };
    

export default CityInput;