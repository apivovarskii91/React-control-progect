import { Container } from '@mui/material'
import ClickButton from 'components/ButtonGroup/ButtonGroup'
import Cart from 'components/OurShopPage/OurShopPage'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Container
                component="main"
                sx={{
                    padding: '60px 0',
                }}
            >
                <div className="btn-block">
                    <ClickButton label="change count" />
                    <ClickButton label="change count" />
                    <ClickButton label="change count" />
                </div>
                <Cart />
            </Container>
        </>
    )
}
export default Main
