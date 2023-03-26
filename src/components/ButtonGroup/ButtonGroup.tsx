import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { useState } from 'react'
import './ButtonGroup.scss'

type Props = {
    label: string
}

const ClickButton = ({ label }: Props) => {
    const [count, setCount] = useState<number>(0)

    function handleClick() {
        setCount(count + 1)
    }
    return (
        <>
            <Typography>
                <Button
                    onClick={handleClick}
                    sx={{
                        border: '2px solid black',
                        color: 'black',
                    }}
                >
                    {label}({count})
                </Button>
            </Typography>
        </>
    )
}
export default ClickButton
