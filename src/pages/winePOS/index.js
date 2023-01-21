import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import WineCard from '../../components/WineCard';
import { useLocalStorage } from 'react-use';


const dummyPrice = 59

function PosPage() {

    // window.localStorage['coffee'] = 'Latte'
    const [wine, setWine] = useLocalStorage('Wine', 'Wine')
    
    let [wineTitles, setWineTitles] = React.useState([])
    let [subMenu, setSubMenu] = React.useState('reds')
    // let [cart, setCart] = React.useState([])
    let [cart, setCart] = useLocalStorage('cart', [])

    function addToCart(wine) {
        // console.debug(coffee)
        cart.push(wine)
        console.table(cart)
        setCart([...cart])
    }

    function clearCart(){
        setCart([])
    }

    React.useEffect(() => {
        let items = []
        fetch(`https://api.sampleapis.com/wines/${subMenu}`)
            .then(res => res.json())
            .then((wines) => {
                for (let i = 0; i < wines.length; i++) {
                    // console.log(coffees[i].title)
                    items.push(
                        <WineCard
                            key={i}
                            image={wines[i].image}
                            title={wines[i].wine}
                            winery={wines[i].winery}
                            rating={wines[i].rating.average}
                            price={dummyPrice}
                            handleClick={() => { addToCart(wines[i]) }}
                        />
                    )
                }
                setWineTitles(items)
            })
    }, [subMenu])


    return <Container>
        <h1>POS</h1>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => { setSubMenu('reds') }}>Red</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('whites') }}>White</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('sparkling') }}>Sparkling</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('rose') }}>Rose</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('dessert') }}>Dessert</Button>
            <Button variant="secondary" onClick={() => { setSubMenu('port') }}>Port</Button>
        </ButtonGroup>
        <Row>
            <Col>
                <Row>
                    {wineTitles}
                </Row>
            </Col>
            <Col sm={3}>
                <h2>Cart {wine}</h2>
                <button onClick={() => clearCart()}>Clear All</button>
                {cart.map((item, i) => {
                    return <Row key={i}>
                        <Col>{item.wine}</Col>
                        <Col>{dummyPrice}</Col>
                    </Row>
                })}
                <Row>
                    Total: {cart.length * dummyPrice} Baht
                </Row>
            </Col>
        </Row>
    </Container >
}

export default PosPage